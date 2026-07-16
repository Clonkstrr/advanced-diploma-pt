import { useState } from 'react';
import type { NumericField } from '../../types/content';
import type { GradedResult } from './Classification';

function fieldCorrect(field: NumericField, entered: string): boolean {
  const value = Number(entered);
  return entered.trim() !== '' && Number.isFinite(value)
    && Math.abs(value - field.answer) <= field.tolerance;
}

export function NumericLab(
  { title, brief, fields, solution, onComplete, initialAnswers, initialSubmitted }:
  {
    title: string; brief: string; fields: NumericField[]; solution: string;
    onComplete: (r: GradedResult) => void;
    initialAnswers?: Record<string, string[]>;
    initialSubmitted?: boolean;
  },
) {
  const [entries, setEntries] = useState<Record<string, string>>(() => {
    const seed: Record<string, string> = {};
    for (const f of fields) {
      const prior = initialAnswers?.[f.id]?.[0];
      if (prior !== undefined) seed[f.id] = prior;
    }
    return seed;
  });
  const [submitted, setSubmitted] = useState(() => initialSubmitted ?? false);

  const allFilled = fields.every((f) => (entries[f.id] ?? '').trim() !== '');
  const correctCount = fields.filter((f) => fieldCorrect(f, entries[f.id] ?? '')).length;

  const submit = () => {
    setSubmitted(true);
    const answers = Object.fromEntries(fields.map((f) => [f.id, [entries[f.id] ?? '']]));
    onComplete({ answers, score: correctCount / fields.length });
  };

  return (
    <section className="numeric-lab">
      <h2>{title}</h2>
      <p>{brief}</p>
      {submitted && (
        <p className="score">Score: {correctCount} / {fields.length} correct (
          {Math.round((correctCount / fields.length) * 100)}%)</p>
      )}
      <ul className="fields">
        {fields.map((f) => {
          const entered = entries[f.id] ?? '';
          const correct = submitted && fieldCorrect(f, entered);
          return (
            <li key={f.id} className={submitted ? (correct ? 'correct' : 'incorrect') : ''}>
              <label>
                {f.label}{f.unit ? ` (${f.unit})` : ''}
                <input
                  type="number"
                  value={entered}
                  disabled={submitted}
                  onChange={(e) => setEntries((prev) => ({ ...prev, [f.id]: e.target.value }))}
                />
              </label>
              {submitted && !correct && (
                <span className="expected"> expected {f.answer}{f.tolerance ? ` (±${f.tolerance})` : ''}</span>
              )}
            </li>
          );
        })}
      </ul>
      {submitted && <p className="solution"><strong>Worked solution:</strong> {solution}</p>}
      {!submitted && (
        <button onClick={submit} disabled={!allFilled}>Submit answers</button>
      )}
    </section>
  );
}
