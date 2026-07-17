import type { ProgressState } from '../types/progress';
import { isProgressState } from '../types/progress';

// Single-file JSON export for moving progress between machines (spec §9).
const APP_ID = 'advanced-diploma-pt';
const KIND = 'progress-export';
const EXPORT_VERSION = 1;

export function serializeProgress(state: ProgressState, nowIso: string): string {
  return JSON.stringify(
    { app: APP_ID, kind: KIND, version: EXPORT_VERSION, exportedAt: nowIso, progress: state },
    null,
    2,
  );
}

export function parseProgressExport(json: string): ProgressState {
  let envelope: unknown;
  try {
    envelope = JSON.parse(json);
  } catch {
    throw new Error('That file could not be read as JSON.');
  }
  const e = envelope as Record<string, unknown>;
  if (e?.app !== APP_ID || e?.kind !== KIND) {
    throw new Error('That file is not an Advanced Diploma progress export.');
  }
  if (e.version !== EXPORT_VERSION) {
    throw new Error(`Unsupported export version ${String(e.version)} — this app reads version ${EXPORT_VERSION}.`);
  }
  if (!isProgressState(e.progress)) {
    throw new Error('The export is malformed and cannot be imported.');
  }
  return e.progress;
}
