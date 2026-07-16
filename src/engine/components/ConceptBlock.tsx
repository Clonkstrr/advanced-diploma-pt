export function ConceptBlock({ heading, body }: { heading: string; body: string }) {
  const paragraphs = body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  return (
    <section className="concept-block">
      <h2>{heading}</h2>
      {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </section>
  );
}
