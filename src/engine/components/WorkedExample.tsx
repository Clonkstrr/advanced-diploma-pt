import { useState } from 'react';
import type { WorkedStep } from '../../types/content';

export function WorkedExample(
  { title, scenario, steps, takeaway, initialRevealed }:
  {
    title: string; scenario: string; steps: WorkedStep[]; takeaway: string;
    initialRevealed?: boolean;
  },
) {
  const [shown, setShown] = useState(() => (initialRevealed ? steps.length : 1));
  const done = shown >= steps.length;

  return (
    <section className="worked-example">
      <h2>{title}</h2>
      <p className="scenario">{scenario}</p>
      <ol className="steps">
        {steps.slice(0, shown).map((s) => (
          <li key={s.id}>
            <h3>{s.title}</h3>
            <p>{s.reasoning}</p>
          </li>
        ))}
      </ol>
      {!done && (
        <button onClick={() => setShown((n) => n + 1)}>Reveal next step</button>
      )}
      {done && <p className="takeaway"><strong>Takeaway:</strong> {takeaway}</p>}
    </section>
  );
}
