import { createStore, type StoreApi } from 'zustand/vanilla';
import type { ProgressState, UnitProgress, ComponentProgress, RecallRating } from '../types/progress';
import { emptyProgress, isProgressState } from '../types/progress';
import type { StorageAdapter } from '../storage/StorageAdapter';
import { createDebouncedSaver } from './autosave';
import { scheduleFromRatings, gradeReview } from './recall';
import { serializeProgress, parseProgressExport } from './transfer';

export interface ProgressActions {
  state: ProgressState;
  now: () => string; // the store's injected clock, exposed for due-date queries
  hydrate: () => Promise<void>;
  recordAnswers: (courseId: string, unitId: string, componentId: string,
    answers: Record<string, string[]>, score: number) => void;
  completeComponent: (courseId: string, unitId: string, componentId: string) => void;
  setLocation: (courseId: string, unitId: string, componentId: string) => void;
  scheduleRecall: (courseId: string, unitId: string, ratings: Record<string, RecallRating>) => void;
  reviewCard: (key: string, rating: RecallRating) => void;
  exportProgress: () => string;
  importProgress: (json: string) => void; // throws on invalid input
  flush: () => Promise<void>;
}

function ensureUnit(state: ProgressState, courseId: string, unitId: string): UnitProgress {
  const course = (state.courses[courseId] ??= { units: {} });
  return (course.units[unitId] ??= { unitId, components: {}, completed: false });
}

function ensureComponent(unit: UnitProgress, componentId: string): ComponentProgress {
  return (unit.components[componentId] ??= { componentId, completed: false });
}

export function createProgressStore(
  adapter: StorageAdapter,
  now: () => string = () => new Date().toISOString(),
): StoreApi<ProgressActions> {
  const saver = createDebouncedSaver((s: ProgressState) => adapter.saveProgress(s), 300);

  return createStore<ProgressActions>((set, get) => {
    const commit = (mutate: (draft: ProgressState) => void) => {
      const next = structuredClone(get().state);
      mutate(next);
      next.updatedAt = now();
      set({ state: next });
      saver(next);
    };

    return {
      state: emptyProgress(now()),
      now,
      hydrate: async () => {
        try {
          const loaded = await adapter.loadProgress();
          if (loaded == null) return;
          if (isProgressState(loaded)) {
            set({ state: loaded });
            return;
          }
          // Unknown version or malformed shape: the next write-through would
          // destroy this blob, so stash it under a backup key first.
          const version = (loaded as { version?: unknown }).version;
          const backupKey = `progress.v${typeof version === 'number' ? version : 'unknown'}.bak`;
          await adapter.saveBackup(backupKey, loaded);
          console.error(
            `Stored progress was not recognised (version ${String(version)}); ` +
            `backed it up to "${backupKey}" and starting fresh.`,
          );
        } catch (err) {
          console.error('Failed to restore saved progress; continuing with in-memory state.', err);
        }
      },
      recordAnswers: (courseId, unitId, componentId, answers, score) =>
        commit((d) => {
          const unit = ensureUnit(d, courseId, unitId);
          const comp = ensureComponent(unit, componentId);
          comp.answers = answers;
          comp.score = score;
          comp.attempts = (comp.attempts ?? 0) + 1;
        }),
      completeComponent: (courseId, unitId, componentId) =>
        commit((d) => {
          const unit = ensureUnit(d, courseId, unitId);
          ensureComponent(unit, componentId).completed = true;
          unit.lastComponentId = componentId;
        }),
      setLocation: (courseId, unitId, componentId) =>
        commit((d) => { d.lastLocation = { courseId, unitId, componentId }; }),
      scheduleRecall: (courseId, unitId, ratings) =>
        commit((d) => {
          d.recall = scheduleFromRatings(d.recall ?? {}, courseId, unitId, ratings, now());
        }),
      reviewCard: (key, rating) =>
        commit((d) => {
          d.recall = gradeReview(d.recall ?? {}, key, rating, now());
        }),
      exportProgress: () => serializeProgress(get().state, now()),
      importProgress: (json) => {
        const imported = parseProgressExport(json); // throws before any state is touched
        set({ state: imported });
        saver(imported);
      },
      flush: () => saver.flush(),
    };
  });
}
