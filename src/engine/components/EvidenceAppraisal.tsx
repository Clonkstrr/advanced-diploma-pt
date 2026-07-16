import { useState } from 'react';
import type { Claim } from '../../types/content';
import type { GradedResult } from './Classification';

export function EvidenceAppraisal(
  { title, brief, hierarchy, claims, briefPrompt, modelBrief,
    onComplete, initialAnswers, initialSubmitted }:
  {
    title: string; brief: string; hierarchy: string[]; claims: Claim[];
    briefPrompt: string; modelBrief: string;
    onComplete: (r: GradedResult) => void;
    initialAnswers?: Record<string, string[]>;
    initialSubmitted?: boolean;
  },
) {
  const [levels, setLevels] = useState<Record<string, string>>(() => {
    const seed: Record<string, string> = {};
    for (const claim of claims) {
      const prior = initialAnswers?.[claim.id]?.[0];
      if (prior) seed[claim.id] = prior;
    }
    return seed;
  });
  const [briefText, setBriefText] = useState(() => initialAnswers?.['__brief']?.[0] ?? '');
  const [submitted, setSubmitted] = useState(() => initialSubmitted ?? false);

  const ready = claims.every((c) => levels[c.id]) && briefText.trim() !== '';
  const correctCount = claims.filter((c) => levels[c.id] === c.correctLevel).length;

  const submit = () => {
    setSubmitted(true);
    const answers: Record<string, string[]> = Object.fromEntries(
      claims.map((c) => [c.id, [levels[c.id]]]),
    );
    answers['__brief'] = [briefText];
    onComplete({ answers, score: correctCount / claims.length });
  };

  return (
    <section className="evidence-appraisal">
      <h2>{title}</h2>
      <p>{brief}</p>
      <ol className="hierarchy">
        {hierarchy.map((level) => <li key={level}>{level}</li>)}
      </ol>
      {submitted && (
        <p className="score">Score: {correctCount} / {claims.length} correct (
          {Math.round((correctCount / claims.length) * 100)}%)</p>
      )}
      <ul className="claims">
        {claims.map((c) => {
          const chosen = levels[c.id] ?? '';
          const correct = submitted && chosen === c.correctLevel;
          return (
            <li key={c.id} className={submitted ? (correct ? 'correct' : 'incorrect') : ''}>
              <label>
                <strong>“{c.claim}”</strong> — {c.evidenceDescription}
                <select value={chosen} disabled={submitted}
                  onChange={(e) => setLevels((prev) => ({ ...prev, [c.id]: e.target.value }))}>
                  <option value="" disabled>Grade the evidence…</option>
                  {hierarchy.map((level) => <option key={level} value={level}>{level}</option>)}
                </select>
              </label>
              {submitted && (
                <p className="rationale">
                  {(correct ? '' : `Actually: ${c.correctLevel}. `) + c.rationale}
                </p>
              )}
            </li>
          );
        })}
      </ul>
      <label className="brief">
        {briefPrompt}
        <textarea value={briefText} disabled={submitted}
          onChange={(e) => setBriefText(e.target.value)} />
      </label>
      {submitted && (
        <p className="model-brief"><strong>Model brief:</strong> {modelBrief}</p>
      )}
      {!submitted && (
        <button onClick={submit} disabled={!ready}>Submit appraisal</button>
      )}
    </section>
  );
}
