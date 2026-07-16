import { useState } from 'react';
import type { Bucket, ClassificationItem } from '../../types/content';

export interface GradedResult { answers: Record<string, string[]>; score: number; }

export function Classification(
  { title, instructions, buckets, items, onComplete, initialAnswers, initialSubmitted }:
  {
    title: string; instructions: string; buckets: Bucket[]; items: ClassificationItem[];
    onComplete: (r: GradedResult) => void;
    initialAnswers?: Record<string, string[]>;
    initialSubmitted?: boolean;
  },
) {
  const [placed, setPlaced] = useState<Record<string, string>>(() => {
    const seed: Record<string, string> = {};
    for (const item of items) {
      const prior = initialAnswers?.[item.id]?.[0];
      if (prior) seed[item.id] = prior;
    }
    return seed;
  });
  const [submitted, setSubmitted] = useState(() => initialSubmitted ?? false);

  const allPlaced = items.every((i) => placed[i.id]);
  const correctCount = items.filter((i) => placed[i.id] === i.bucketId).length;

  const submit = () => {
    setSubmitted(true);
    const answers = Object.fromEntries(items.map((i) => [i.id, [placed[i.id]]]));
    onComplete({ answers, score: correctCount / items.length });
  };

  return (
    <section className="classification">
      <h2>{title}</h2>
      <p>{instructions}</p>
      {submitted && (
        <p className="score">Score: {correctCount} / {items.length} correct (
          {Math.round((correctCount / items.length) * 100)}%)</p>
      )}
      <ul className="items">
        {items.map((item) => {
          const chosen = placed[item.id] ?? '';
          const correct = submitted && chosen === item.bucketId;
          return (
            <li key={item.id} className={submitted ? (correct ? 'correct' : 'incorrect') : ''}>
              <label>
                {item.text}
                <select
                  value={chosen}
                  disabled={submitted}
                  onChange={(e) => setPlaced((prev) => ({ ...prev, [item.id]: e.target.value }))}
                >
                  <option value="" disabled>Choose…</option>
                  {buckets.map((b) => <option key={b.id} value={b.id}>{b.label}</option>)}
                </select>
              </label>
              {submitted && (
                <p className="rationale">
                  {(correct ? ''
                    : `Belongs under “${buckets.find((b) => b.id === item.bucketId)?.label}”. `)
                    + item.rationale}
                </p>
              )}
            </li>
          );
        })}
      </ul>
      {!submitted && (
        <button onClick={submit} disabled={!allPlaced}>Submit answers</button>
      )}
    </section>
  );
}
