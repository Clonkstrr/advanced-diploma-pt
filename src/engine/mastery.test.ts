import { describe, it, expect } from 'vitest';
import type { Unit, UnitComponent } from '../types/content';
import type { UnitProgress } from '../types/progress';
import { unitMastery } from './mastery';

const quiz: UnitComponent = {
  type: 'questionSet', id: 'quiz', role: 'quiz', title: 'Quiz',
  questions: [
    { id: 'q-safety', kind: 'single', prompt: 'Safety?', cognitive: 'analysis', safetyCritical: true,
      options: [{ id: 'a', text: 'Stop and refer', correct: true }, { id: 'b', text: 'Push on', correct: false }] },
    { id: 'q-plain', kind: 'single', prompt: 'Plain?', cognitive: 'recall',
      options: [{ id: 'a', text: 'Right', correct: true }, { id: 'b', text: 'Wrong', correct: false }] },
  ],
};
const concept: UnitComponent = { type: 'concept', id: 'c1', heading: 'H', body: 'B' };
const lab: UnitComponent = {
  type: 'classification', id: 'lab', title: 'Lab', instructions: 'x',
  buckets: [{ id: 'b1', label: 'A' }, { id: 'b2', label: 'B' }],
  items: [{ id: 'i1', text: 't', bucketId: 'b1', rationale: 'r' }],
};
const recall: UnitComponent = {
  type: 'recallSet', id: 'rs', title: 'Recall',
  cards: [{ id: 'k1', front: 'f', back: 'b' }],
};

function makeUnit(components: UnitComponent[]): Unit {
  return {
    id: 'u1', code: 'T 1.1', title: 'T', summary: 's',
    qc: { sources: [], confidence: 'high', lastReviewed: 'x', reviewBy: 'y' } as Unit['qc'],
    components,
  };
}

function progress(entries: Record<string, { completed: boolean; score?: number; answers?: Record<string, string[]> }>): UnitProgress {
  return {
    unitId: 'u1', completed: false,
    components: Object.fromEntries(Object.entries(entries).map(([id, v]) => [id, { componentId: id, ...v }])),
  };
}

describe('unitMastery', () => {
  it('is null-percent and incomplete before any graded work', () => {
    const m = unitMastery(makeUnit([concept, quiz]), progress({}));
    expect(m).toEqual({ percent: null, safetyPassed: false, complete: false, remediate: [] });
  });

  it('averages scores over gradeable components only (recall sets excluded)', () => {
    const m = unitMastery(makeUnit([concept, quiz, lab, recall]), progress({
      c1: { completed: true },
      quiz: { completed: true, score: 1, answers: { 'q-safety': ['a'], 'q-plain': ['a'] } },
      lab: { completed: true, score: 0.6 },
      rs: { completed: true, score: 1, answers: { k1: ['again'] } },
    }));
    expect(m.percent).toBe(80); // (1 + 0.6) / 2
    expect(m.safetyPassed).toBe(true);
    expect(m.complete).toBe(true); // 80% and safety passed and all complete
    expect(m.remediate).toEqual(['lab']); // scored below 0.8
  });

  it('a perfect score CANNOT offset a failed safety-critical item', () => {
    const m = unitMastery(makeUnit([quiz]), progress({
      quiz: { completed: true, score: 1, answers: { 'q-safety': ['b'], 'q-plain': ['a'] } },
    }));
    expect(m.safetyPassed).toBe(false);
    expect(m.complete).toBe(false);
    expect(m.remediate).toContain('q-safety');
  });

  it('below 80% average is incomplete even when everything is finished', () => {
    const m = unitMastery(makeUnit([quiz, lab]), progress({
      quiz: { completed: true, score: 0.7, answers: { 'q-safety': ['a'], 'q-plain': ['b'] } },
      lab: { completed: true, score: 0.7 },
    }));
    expect(m.percent).toBe(70);
    expect(m.complete).toBe(false);
  });

  it('unfinished components leave the unit incomplete regardless of scores', () => {
    const m = unitMastery(makeUnit([concept, quiz]), progress({
      quiz: { completed: true, score: 1, answers: { 'q-safety': ['a'], 'q-plain': ['a'] } },
      // concept never viewed
    }));
    expect(m.percent).toBe(100);
    expect(m.complete).toBe(false);
  });
});
