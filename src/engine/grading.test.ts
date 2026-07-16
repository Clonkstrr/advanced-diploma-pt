import { describe, it, expect } from 'vitest';
import { gradeQuestion, gradeQuestionSet } from './grading';
import type { Question } from '../types/content';

const single: Question = { id: 'q', kind: 'single', prompt: 'p', cognitive: 'recall',
  options: [{ id: 'a', text: 'A', correct: true }, { id: 'b', text: 'B', correct: false }] };
const multi: Question = { id: 'm', kind: 'multi', prompt: 'p', cognitive: 'application',
  options: [{ id: 'a', text: 'A', correct: true }, { id: 'b', text: 'B', correct: true }, { id: 'c', text: 'C', correct: false }] };

describe('grading', () => {
  it('single: exact match is correct', () => {
    expect(gradeQuestion(single, ['a'])).toBe(true);
    expect(gradeQuestion(single, ['b'])).toBe(false);
  });
  it('multi: all-and-only correct options required', () => {
    expect(gradeQuestion(multi, ['a', 'b'])).toBe(true);
    expect(gradeQuestion(multi, ['a'])).toBe(false);
    expect(gradeQuestion(multi, ['a', 'b', 'c'])).toBe(false);
  });
  it('question set returns fraction correct', () => {
    const score = gradeQuestionSet([single, multi], { q: ['a'], m: ['a'] });
    expect(score).toBeCloseTo(0.5);
  });
});
