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

export interface ProgressState {
  version: number;
  courses: Record<string, { units: Record<string, UnitProgress> }>;
  lastLocation?: { courseId: string; unitId: string; componentId: string };
  updatedAt: string; // ISO
}

export const CURRENT_PROGRESS_VERSION = 1;

export function emptyProgress(nowIso: string): ProgressState {
  return { version: CURRENT_PROGRESS_VERSION, courses: {}, updatedAt: nowIso };
}
