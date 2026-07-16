import { describe, it, expect } from 'vitest';
import type { Question } from '../../../types/content';
import { unit01 } from './unit01';
import { apt501 } from './course';
import { validateCourse } from '../../schema';

describe('APT 501.1 follows the full 12-component lesson spine', () => {
  it('has every spine component in teaching order', () => {
    const types = unit01.components.map((c) => c.type);
    expect(types).toEqual([
      'questionSet',                                          // 1 diagnostic pretest
      'outcomes',                                             // 2 learning outcomes
      'concept', 'concept', 'concept', 'concept', 'concept',  // 3 core instruction
      'visual',                                               // 4 annotated visual
      'workedExample',                                        // 5 worked example
      'classification',                                       // 6 interactive lab
      'branchingCase',                                        // 7 branching case
      'errorId',                                              // 8 error identification
      'recallSet',                                            // 9 active-recall set
      'questionSet',                                          // 10 unit quiz
      'teachBack',                                            // 11 teach-back
      'questionSet',                                          // 12 cumulative review
    ]);
  });

  it('uses the right questionSet roles in the right slots', () => {
    const sets = unit01.components.filter((c) => c.type === 'questionSet');
    expect(sets.map((s) => (s as { role: string }).role)).toEqual(['pretest', 'quiz', 'cumulative']);
  });

  it('pretest has at least five diagnostic questions', () => {
    const pretest = unit01.components[0] as { questions: Question[] };
    expect(pretest.questions.length).toBeGreaterThanOrEqual(5);
  });

  it('unit quiz covers all four cognitive levels', () => {
    const quiz = unit01.components.find(
      (c) => c.type === 'questionSet' && c.role === 'quiz',
    ) as { questions: Question[] };
    const levels = new Set(quiz.questions.map((q) => q.cognitive));
    expect(levels).toEqual(new Set(['recall', 'application', 'analysis', 'synthesis']));
  });

  it('recall set carries at least eight cards for the scheduler', () => {
    const recall = unit01.components.find((c) => c.type === 'recallSet') as { cards: unknown[] };
    expect(recall.cards.length).toBeGreaterThanOrEqual(8);
  });

  it('the whole course still validates against the schema', () => {
    expect(() => validateCourse(apt501)).not.toThrow();
  });
});
