import { describe, it, expect } from 'vitest';
import { validateCourse } from './schema';

const validCourse = {
  id: 'apt501', code: 'APT 501', title: 'Test', semester: 1, description: 'd',
  units: [{
    id: 'u1', code: 'APT 501.1', title: 'Unit', summary: 's',
    qc: { sources: [{ citation: 'ACSM', evidenceType: 'Guideline', verified: true }],
          confidence: 'high', lastReviewed: '2026-07-15', reviewBy: '2027-07-15' },
    components: [
      { type: 'outcomes', id: 'o1', outcomes: [{ level: 'recall', text: 'x' }] },
      { type: 'concept', id: 'c1', heading: 'H', body: 'B' },
      { type: 'questionSet', id: 'q1', role: 'quiz', title: 'Quiz',
        questions: [{ id: 'qq1', kind: 'single', prompt: 'P', cognitive: 'recall',
          options: [{ id: 'a', text: 'A', correct: true }, { id: 'b', text: 'B', correct: false }] }] },
    ],
  }],
};

describe('validateCourse', () => {
  it('accepts a valid course', () => {
    expect(() => validateCourse(validCourse)).not.toThrow();
  });
  it('rejects a single-answer question with no correct option', () => {
    const bad = structuredClone(validCourse);
    (bad.units[0].components[2] as any).questions[0].options.forEach((o: any) => (o.correct = false));
    expect(() => validateCourse(bad)).toThrow(/at least one correct/i);
  });
});
