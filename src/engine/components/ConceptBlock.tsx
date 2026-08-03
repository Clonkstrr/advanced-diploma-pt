import type { ReactNode } from 'react';

// Concept bodies used to render as one heading over a stack of identical
// paragraphs, which reads as a wall of text: nothing signals what matters.
// They now carry a tiny, deliberately limited markup vocabulary:
//
//   ## Subheading        breaks a long block into scannable parts
//   > Key idea: ...      pulls one sentence out into a highlighted box
//   **term**             highlights a key term inline
//
// Everything else is an ordinary paragraph, so existing content keeps working
// untouched. Parsed into React elements, never injected as HTML.

export type ConceptPiece =
  | { kind: 'subheading'; text: string }
  | { kind: 'keyIdea'; text: string }
  | { kind: 'paragraph'; text: string };

export function parseConceptBody(body: string): ConceptPiece[] {
  return body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith('## ')) {
        return { kind: 'subheading', text: block.slice(3).trim() };
      }
      if (block.startsWith('> ')) {
        return {
          kind: 'keyIdea',
          text: block.split('\n').map((line) => line.replace(/^>\s?/, '')).join(' ').trim(),
        };
      }
      return { kind: 'paragraph', text: block };
    });
}

// **term** becomes a highlighted key term. Split keeps the delimiters so the
// surrounding plain text survives in order.
function withKeyTerms(text: string, keyPrefix: string): ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter((part) => part !== '')
    .map((part, i) =>
      part.startsWith('**') && part.endsWith('**')
        ? <strong className="key-term" key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>
        : part,
    );
}

export function ConceptBlock({ heading, body }: { heading: string; body: string }) {
  const pieces = parseConceptBody(body);
  return (
    <section className="concept-block">
      <h2>{heading}</h2>
      {pieces.map((piece, i) => {
        if (piece.kind === 'subheading') {
          return <h3 className="concept-subheading" key={i}>{withKeyTerms(piece.text, `h${i}`)}</h3>;
        }
        if (piece.kind === 'keyIdea') {
          return <aside className="key-idea" key={i}>{withKeyTerms(piece.text, `k${i}`)}</aside>;
        }
        return <p key={i}>{withKeyTerms(piece.text, `p${i}`)}</p>;
      })}
    </section>
  );
}
