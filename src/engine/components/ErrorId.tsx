import { useState } from 'react';
import type { Finding } from '../../types/content';
import type { GradedResult } from './Classification';

export function ErrorId(
  { title, brief, document, findings, onComplete, initialAnswers, initialSubmitted }:
  {
    title: string; brief: string; document: string; findings: Finding[];
    onComplete: (r: GradedResult) => void;
    initialAnswers?: Record<string, string[]>;
    initialSubmitted?: boolean;
  },
) {
  const [flagged, setFlagged] = useState<Set<string>>(
    () => new Set(initialAnswers?.['__flags'] ?? []),
  );
  const [submitted, setSubmitted] = useState(() => initialSubmitted ?? false);

  // correct judgement = flagged exactly when the statement is a real error
  const correctCount = findings.filter((f) => flagged.has(f.id) === f.isError).length;

  const toggle = (id: string) => {
    if (submitted) return;
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const submit = () => {
    setSubmitted(true);
    onComplete({
      answers: { __flags: findings.filter((f) => flagged.has(f.id)).map((f) => f.id) },
      score: correctCount / findings.length,
    });
  };

  return (
    <section className="error-id">
      <h2>{title}</h2>
      <p>{brief}</p>
      <blockquote className="document">{document}</blockquote>
      {submitted && (
        <p className="score">Score: {correctCount} / {findings.length} correct (
          {Math.round((correctCount / findings.length) * 100)}%)</p>
      )}
      <ul className="findings">
        {findings.map((f) => {
          const isFlagged = flagged.has(f.id);
          const correct = submitted && isFlagged === f.isError;
          return (
            <li key={f.id} className={submitted ? (correct ? 'correct' : 'incorrect') : ''}>
              <label>
                <input type="checkbox" checked={isFlagged} disabled={submitted}
                  onChange={() => toggle(f.id)} />
                {f.text}
              </label>
              {submitted && (
                <p className="rationale">
                  {(f.isError ? 'Oversteps scope. ' : 'Acceptable. ') + f.rationale}
                </p>
              )}
            </li>
          );
        })}
      </ul>
      {!submitted && <button onClick={submit}>Submit review</button>}
    </section>
  );
}
