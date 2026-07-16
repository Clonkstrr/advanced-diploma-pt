import type { Unit, UnitComponent, Question } from '../types/content';
import type { UnitProgress } from '../types/progress';
import { gradeQuestion } from './grading';

// Mastery gates (spec §7): 80% to complete, and safety-critical items can
// never be offset by high marks elsewhere.
const MASTERY_THRESHOLD = 0.8;

// Score-bearing component types. recallSet and teachBack are self-assessed —
// honesty there must never move the mastery needle.
const GRADEABLE = new Set<UnitComponent['type']>([
  'questionSet', 'classification', 'numericLab', 'errorId', 'branchingCase', 'evidenceAppraisal',
]);

export interface UnitMastery {
  percent: number | null;   // 0..100 over recorded gradeable scores; null before any
  safetyPassed: boolean;    // every safety-critical question answered correctly
  complete: boolean;        // all components done AND percent >= 80 AND safetyPassed
  remediate: string[];      // failed safety question ids + gradeable component ids < 80%
}

export function unitMastery(unit: Unit, progress: UnitProgress | undefined): UnitMastery {
  const remediate: string[] = [];
  const scores: number[] = [];
  let safetyPassed = true;

  for (const component of unit.components) {
    const cp = progress?.components[component.id];

    if (GRADEABLE.has(component.type) && cp?.score !== undefined) {
      scores.push(cp.score);
      if (cp.score < MASTERY_THRESHOLD) remediate.push(component.id);
    }

    if (component.type === 'questionSet') {
      for (const question of component.questions) {
        if (!question.safetyCritical) continue;
        const answered = cp?.answers?.[question.id];
        if (!answered || !gradeQuestion(question as Question, answered)) {
          safetyPassed = false;
          if (cp?.answers) remediate.push(question.id); // attempted and failed
        }
      }
    }
  }

  const percent = scores.length
    ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 100)
    : null;
  const allDone = unit.components.every((c) => progress?.components[c.id]?.completed);
  const complete = allDone && percent !== null && percent >= MASTERY_THRESHOLD * 100 && safetyPassed;

  return { percent, safetyPassed, complete, remediate };
}
