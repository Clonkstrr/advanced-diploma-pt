import { describe, it, expect } from 'vitest';
import { scheduleFromRatings, gradeReview, dueItems, recallKey } from './recall';

const NOW = '2026-07-16T12:00:00.000Z';
const plusDays = (iso: string, d: number) =>
  new Date(new Date(iso).getTime() + d * 86_400_000).toISOString();

describe('recall scheduler', () => {
  it('schedules a good rating three days out at step 0', () => {
    const recall = scheduleFromRatings({}, 'apt501', 'apt501-u1', { r1: 'good' }, NOW);
    const item = recall['apt501/apt501-u1/r1'];
    expect(item).toEqual({ step: 0, due: plusDays(NOW, 3), lapses: 0 });
  });

  it('schedules an again rating one day out with a lapse, marked for relearning', () => {
    const recall = scheduleFromRatings({}, 'apt501', 'apt501-u1', { r1: 'again' }, NOW);
    expect(recall['apt501/apt501-u1/r1'])
      .toEqual({ step: 0, due: plusDays(NOW, 1), lapses: 1, relearn: true });
  });

  it('re-completing the set advances an existing good item one rung', () => {
    let recall = scheduleFromRatings({}, 'apt501', 'apt501-u1', { r1: 'good' }, NOW);
    recall = scheduleFromRatings(recall, 'apt501', 'apt501-u1', { r1: 'good' }, plusDays(NOW, 3));
    expect(recall['apt501/apt501-u1/r1'].step).toBe(1);
    expect(recall['apt501/apt501-u1/r1'].due).toBe(plusDays(plusDays(NOW, 3), 7));
  });

  it('gradeReview walks the full ladder 3 -> 7 -> 14 -> 90 and caps at the last rung', () => {
    const key = recallKey('apt501', 'apt501-u1', 'r1');
    let recall = scheduleFromRatings({}, 'apt501', 'apt501-u1', { r1: 'good' }, NOW);
    let t = NOW;
    for (const expectedDays of [7, 14, 90, 90]) {
      t = recall[key].due;
      recall = gradeReview(recall, key, 'good', t);
      expect(recall[key].due).toBe(plusDays(t, expectedDays));
    }
  });

  it('an again on review resets to the bottom rung and counts the lapse', () => {
    const key = recallKey('apt501', 'apt501-u1', 'r1');
    let recall = scheduleFromRatings({}, 'apt501', 'apt501-u1', { r1: 'good' }, NOW);
    recall = gradeReview(recall, key, 'good', plusDays(NOW, 3));   // step 1
    recall = gradeReview(recall, key, 'again', plusDays(NOW, 10)); // reset
    expect(recall[key])
      .toEqual({ step: 0, due: plusDays(plusDays(NOW, 10), 1), lapses: 1, relearn: true });
    // next good re-earns rung 0 (+3d, not +7d) and clears the relearn mark
    recall = gradeReview(recall, key, 'good', plusDays(NOW, 11));
    expect(recall[key].due).toBe(plusDays(plusDays(NOW, 11), 3));
    expect(recall[key].relearn).toBeUndefined();
    // and the good after THAT climbs to rung 1 again
    recall = gradeReview(recall, key, 'good', plusDays(NOW, 14));
    expect(recall[key].due).toBe(plusDays(plusDays(NOW, 14), 7));
  });

  it('dueItems returns only due keys, oldest first', () => {
    const recall = {
      'a/u/c1': { step: 0, due: plusDays(NOW, -1), lapses: 0 },
      'a/u/c2': { step: 0, due: plusDays(NOW, 2), lapses: 0 },
      'a/u/c3': { step: 0, due: plusDays(NOW, -3), lapses: 0 },
      'a/u/c4': { step: 0, due: NOW, lapses: 0 },
    };
    expect(dueItems(recall, NOW)).toEqual(['a/u/c3', 'a/u/c1', 'a/u/c4']);
  });

  it('leaves unrated items untouched and other items intact', () => {
    const before = scheduleFromRatings({}, 'a', 'u', { c1: 'good' }, NOW);
    const after = scheduleFromRatings(before, 'a', 'u', { c2: 'again' }, NOW);
    expect(after['a/u/c1']).toEqual(before['a/u/c1']);
    expect(Object.keys(after)).toHaveLength(2);
  });
});
