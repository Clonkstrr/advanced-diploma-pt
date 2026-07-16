import type { LearningOutcome } from '../../types/content';

export function OutcomesBlock({ outcomes }: { outcomes: LearningOutcome[] }) {
  return (
    <section className="outcomes-block">
      <h2>What you will be able to do</h2>
      <ul>
        {outcomes.map((o, i) => (
          <li key={i}><span className="level">{o.level}</span> {o.text}</li>
        ))}
      </ul>
    </section>
  );
}
