import { useState } from 'react';
import type { CaseChoice, CaseNode } from '../../types/content';
import type { GradedResult } from './Classification';

const POINTS: Record<CaseChoice['quality'], number> = { best: 1, acceptable: 0.5, poor: 0 };

function findChoice(nodes: CaseNode[], choiceId: string): CaseChoice | undefined {
  for (const node of nodes) {
    const choice = node.choices.find((c) => c.id === choiceId);
    if (choice) return choice;
  }
  return undefined;
}

export function BranchingCase(
  { title, brief, startNodeId, nodes, onComplete, initialAnswers, initialSubmitted }:
  {
    title: string; brief: string; startNodeId: string; nodes: CaseNode[];
    onComplete: (r: GradedResult) => void;
    initialAnswers?: Record<string, string[]>;
    initialSubmitted?: boolean;
  },
) {
  const [path, setPath] = useState<string[]>(() => initialAnswers?.['__path'] ?? []);
  const [finished, setFinished] = useState(() => initialSubmitted ?? false);

  const decisions = path
    .map((id) => findChoice(nodes, id))
    .filter((c): c is CaseChoice => c !== undefined);
  const score = decisions.length
    ? decisions.reduce((sum, c) => sum + POINTS[c.quality], 0) / decisions.length
    : 0;

  // current node = where the last non-terminal choice points, else the start
  const lastChoice = decisions[decisions.length - 1];
  const currentNodeId = finished ? null : (lastChoice ? lastChoice.to : startNodeId);
  const currentNode = currentNodeId ? nodes.find((n) => n.id === currentNodeId) : undefined;

  const choose = (choice: CaseChoice) => {
    const nextPath = [...path, choice.id];
    setPath(nextPath);
    if (choice.to === null) {
      setFinished(true);
      const nextDecisions = nextPath
        .map((id) => findChoice(nodes, id))
        .filter((c): c is CaseChoice => c !== undefined);
      const finalScore =
        nextDecisions.reduce((sum, c) => sum + POINTS[c.quality], 0) / nextDecisions.length;
      onComplete({ answers: { __path: nextPath }, score: finalScore });
    }
  };

  const bestCount = decisions.filter((c) => c.quality === 'best').length;

  return (
    <section className="branching-case">
      <h2>{title}</h2>
      <p>{brief}</p>

      {!finished && currentNode && (
        <div className="node">
          <p className="situation">{currentNode.situation}</p>
          <div className="choices">
            {currentNode.choices.map((c) => (
              <button key={c.id} onClick={() => choose(c)}>{c.text}</button>
            ))}
          </div>
        </div>
      )}

      {finished && (
        <div className="outcome">
          <p className="score">Score: {bestCount} / {decisions.length} best-practice decisions (
            {Math.round(score * 100)}%)</p>
          <ol className="decisions">
            {decisions.map((c, i) => (
              <li key={`${c.id}-${i}`} className={c.quality}>
                <p className="chosen">{c.text}</p>
                <p className="feedback">{c.feedback}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
}
