import { useState } from 'react';
import type { RubricItem } from '../../types/content';
import type { GradedResult } from './Classification';

// Offline honesty (spec §6): free text is self-assessed against a rubric and
// an expert model answer — no pretend automated grading of prose.
export function TeachBack(
  { title, prompt, modelAnswer, rubric, onComplete, initialAnswers, initialSubmitted }:
  {
    title: string; prompt: string; modelAnswer: string; rubric: RubricItem[];
    onComplete: (r: GradedResult) => void;
    initialAnswers?: Record<string, string[]>;
    initialSubmitted?: boolean;
  },
) {
  const [response, setResponse] = useState(() => initialAnswers?.['__response']?.[0] ?? '');
  const [responded, setResponded] = useState(() => initialSubmitted ?? false);
  const [checked, setChecked] = useState<Set<string>>(
    () => new Set(initialAnswers?.['__rubric'] ?? []),
  );
  const [confirmed, setConfirmed] = useState(() => initialSubmitted ?? false);

  const toggle = (id: string) => {
    if (confirmed) return;
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const confirm = () => {
    setConfirmed(true);
    onComplete({
      answers: {
        __response: [response],
        __rubric: rubric.filter((r) => checked.has(r.id)).map((r) => r.id),
      },
      score: checked.size / rubric.length,
    });
  };

  return (
    <section className="teach-back">
      <h2>{title}</h2>
      <label>
        {prompt}
        <textarea value={response} disabled={responded}
          onChange={(e) => setResponse(e.target.value)} />
      </label>
      {!responded && (
        <button onClick={() => setResponded(true)} disabled={response.trim() === ''}>
          Submit response
        </button>
      )}
      {responded && (
        <div className="self-assess">
          <p className="model-answer"><strong>Model answer:</strong> {modelAnswer}</p>
          <p>Check what your answer covered — be honest, this is for your review queue:</p>
          <ul className="rubric">
            {rubric.map((r) => (
              <li key={r.id}>
                <label>
                  <input type="checkbox" checked={checked.has(r.id)} disabled={confirmed}
                    onChange={() => toggle(r.id)} />
                  {r.text}
                </label>
              </li>
            ))}
          </ul>
          {confirmed && (
            <p className="score">Self-assessed: {checked.size} / {rubric.length} rubric points</p>
          )}
          {!confirmed && (
            <button onClick={confirm}>Confirm self-assessment</button>
          )}
        </div>
      )}
    </section>
  );
}
