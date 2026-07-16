import type { Question } from '../types/content';

export function gradeQuestion(q: Question, selected: string[]): boolean {
  const correct = new Set(q.options.filter((o) => o.correct).map((o) => o.id));
  const chosen = new Set(selected);
  if (correct.size !== chosen.size) return false;
  for (const id of correct) if (!chosen.has(id)) return false;
  return true;
}

export function gradeQuestionSet(
  questions: Question[],
  answers: Record<string, string[]>,
): number {
  if (questions.length === 0) return 1;
  const correct = questions.filter((q) => gradeQuestion(q, answers[q.id] ?? [])).length;
  return correct / questions.length;
}
