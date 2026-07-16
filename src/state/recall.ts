import type { RecallItemState, RecallRating } from '../types/progress';

// Spaced-recall ladder (spec §8): end-of-lesson -> ~3d -> 1w -> 2w -> semester end.
// step indexes into LADDER; the due date is always LADDER[step] days from the
// review that set it.
const LADDER_DAYS = [3, 7, 14, 90];
const AGAIN_DAYS = 1;
const DAY_MS = 86_400_000;

export type RecallMap = Record<string, RecallItemState>;

export function recallKey(courseId: string, unitId: string, cardId: string): string {
  return `${courseId}/${unitId}/${cardId}`;
}

function plusDays(nowIso: string, days: number): string {
  return new Date(new Date(nowIso).getTime() + days * DAY_MS).toISOString();
}

function rate(item: RecallItemState | undefined, rating: RecallRating, nowIso: string): RecallItemState {
  if (rating === 'again') {
    return { step: 0, due: plusDays(nowIso, AGAIN_DAYS), lapses: (item?.lapses ?? 0) + 1, relearn: true };
  }
  // A lapsed item re-earns its current rung; otherwise good advances one rung.
  const step = item ? (item.relearn ? item.step : Math.min(item.step + 1, LADDER_DAYS.length - 1)) : 0;
  return { step, due: plusDays(nowIso, LADDER_DAYS[step]), lapses: item?.lapses ?? 0 };
}

// Called when a recall set is completed in a lesson: seeds new items, advances
// existing ones.
export function scheduleFromRatings(
  recall: RecallMap,
  courseId: string,
  unitId: string,
  ratings: Record<string, RecallRating>,
  nowIso: string,
): RecallMap {
  const next = { ...recall };
  for (const [cardId, rating] of Object.entries(ratings)) {
    const key = recallKey(courseId, unitId, cardId);
    next[key] = rate(next[key], rating, nowIso);
  }
  return next;
}

// Called from the Review surface for a single due item.
export function gradeReview(
  recall: RecallMap,
  key: string,
  rating: RecallRating,
  nowIso: string,
): RecallMap {
  return { ...recall, [key]: rate(recall[key], rating, nowIso) };
}

export function dueItems(recall: RecallMap, nowIso: string): string[] {
  return Object.entries(recall)
    .filter(([, item]) => item.due <= nowIso)
    .sort(([, a], [, b]) => a.due.localeCompare(b.due))
    .map(([key]) => key);
}
