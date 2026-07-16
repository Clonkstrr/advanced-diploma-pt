import { useState } from 'react';
import type { Question } from '../../types/content';
import { gradeQuestion, gradeQuestionSet } from '../grading';

export interface QuestionSetResult { answers: Record<string, string[]>; score: number; }

export function QuestionSet(
  { title, questions, onComplete, initialAnswers, initialSubmitted }:
  {
    title: string;
    questions: Question[];
    onComplete: (r: QuestionSetResult) => void;
    initialAnswers?: Record<string, string[]>;
    initialSubmitted?: boolean;
  },
) {
  const [answers, setAnswers] = useState<Record<string, string[]>>(() => initialAnswers ?? {});
  const [submitted, setSubmitted] = useState(() => initialSubmitted ?? false);

  const toggle = (q: Question, optionId: string) => {
    if (submitted) return;
    setAnswers((prev) => {
      const current = prev[q.id] ?? [];
      if (q.kind === 'single') return { ...prev, [q.id]: [optionId] };
      return {
        ...prev,
        [q.id]: current.includes(optionId)
          ? current.filter((x) => x !== optionId)
          : [...current, optionId],
      };
    });
  };

  const submit = () => {
    setSubmitted(true);
    onComplete({ answers, score: gradeQuestionSet(questions, answers) });
  };

  const correctCount = questions.filter((q) => gradeQuestion(q, answers[q.id] ?? [])).length;

  return (
    <section className="question-set">
      <h2>{title}</h2>
      {submitted && (
        <p className="score">
          Score: {correctCount} / {questions.length} correct (
          {Math.round((correctCount / questions.length) * 100)}%)
        </p>
      )}
      {questions.map((q) => {
        const chosen = answers[q.id] ?? [];
        const correct = submitted && gradeQuestion(q, chosen);
        return (
          <fieldset key={q.id} className={submitted ? (correct ? 'correct' : 'incorrect') : ''}>
            <legend>{q.prompt}</legend>
            {q.options.map((o) => (
              <label key={o.id}>
                <input
                  type={q.kind === 'single' ? 'radio' : 'checkbox'}
                  name={q.id}
                  checked={chosen.includes(o.id)}
                  onChange={() => toggle(q, o.id)}
                  disabled={submitted}
                />
                {o.text}
                {submitted && o.rationale && <span className="rationale"> {o.rationale}</span>}
              </label>
            ))}
            {submitted && q.explanation && <p className="explanation">{q.explanation}</p>}
          </fieldset>
        );
      })}
      {!submitted && (
        <button onClick={submit} disabled={!questions.every((q) => (answers[q.id]?.length ?? 0) > 0)}>
          Submit answers
        </button>
      )}
    </section>
  );
}
