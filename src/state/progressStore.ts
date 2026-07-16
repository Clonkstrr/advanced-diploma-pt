import { createStore, type StoreApi } from 'zustand/vanilla';
import type { ProgressState, UnitProgress, ComponentProgress } from '../types/progress';
import { emptyProgress, CURRENT_PROGRESS_VERSION } from '../types/progress';
import type { StorageAdapter } from '../storage/StorageAdapter';
import { createDebouncedSaver } from './autosave';

export interface ProgressActions {
  state: ProgressState;
  hydrate: () => Promise<void>;
  recordAnswers: (courseId: string, unitId: string, componentId: string,
    answers: Record<string, string[]>, score: number) => void;
  completeComponent: (courseId: string, unitId: string, componentId: string) => void;
  setLocation: (courseId: string, unitId: string, componentId: string) => void;
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
      hydrate: async () => {
        const loaded = await adapter.loadProgress();
        if (loaded && loaded.version === CURRENT_PROGRESS_VERSION) set({ state: loaded });
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
      flush: () => saver.flush(),
    };
  });
}
