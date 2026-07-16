export interface ComponentProgress {
  componentId: string;
  completed: boolean;
  answers?: Record<string, string[]>; // questionId -> selected option ids
  score?: number;                     // 0..1 for graded components
  attempts?: number;
}

export interface UnitProgress {
  unitId: string;
  components: Record<string, ComponentProgress>;
  completed: boolean;
  lastComponentId?: string;
}

export type RecallRating = 'good' | 'again';

export interface RecallItemState {
  step: number;      // rung on the spaced-recall ladder
  due: string;       // ISO date the item resurfaces
  lapses: number;    // times rated 'again'
  relearn?: true;    // lapsed: the next 'good' re-earns the current rung instead of advancing
}

export interface ProgressState {
  version: number;
  courses: Record<string, { units: Record<string, UnitProgress> }>;
  lastLocation?: { courseId: string; unitId: string; componentId: string };
  // Optional so version-1 blobs saved before Plan 3 hydrate unchanged.
  recall?: Record<string, RecallItemState>; // key: courseId/unitId/cardId
  updatedAt: string; // ISO
}

export const CURRENT_PROGRESS_VERSION = 1;

export function emptyProgress(nowIso: string): ProgressState {
  return { version: CURRENT_PROGRESS_VERSION, courses: {}, updatedAt: nowIso };
}

// Structural check for blobs loaded from storage: anything that fails this must
// be backed up rather than adopted or overwritten.
export function isProgressState(value: unknown): value is ProgressState {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    v.version === CURRENT_PROGRESS_VERSION &&
    typeof v.courses === 'object' && v.courses !== null &&
    typeof v.updatedAt === 'string'
  );
}
