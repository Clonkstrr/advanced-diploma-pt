import type { Callout } from '../../types/content';
import { diagrams } from '../diagrams/registry';

export function Visual(
  { title, diagramId, caption, callouts }:
  { title: string; diagramId: string; caption: string; callouts: Callout[] },
) {
  const Diagram = diagrams[diagramId];
  return (
    <section className="visual">
      <h2>{title}</h2>
      <figure>
        {Diagram
          ? <Diagram />
          : <p className="unsupported">Diagram unavailable in this version.</p>}
        <figcaption>{caption}</figcaption>
      </figure>
      <ol className="callouts">
        {callouts.map((c) => (
          <li key={c.id}><strong>{c.label}.</strong> {c.text}</li>
        ))}
      </ol>
    </section>
  );
}
