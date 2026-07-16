import { useState } from 'react';
import type { RecallCard } from '../../types/content';
import type { GradedResult } from './Classification';

// Ratings feed Plan 3's spaced-repetition scheduler; completing the set is
// ungraded (score 1) — honesty about "again" must never cost marks.
export function RecallSet(
  { title, cards, onComplete, initialAnswers, initialSubmitted }:
  {
    title: string; cards: RecallCard[];
    onComplete: (r: GradedResult) => void;
    initialAnswers?: Record<string, string[]>;
    initialSubmitted?: boolean;
  },
) {
  const [ratings, setRatings] = useState<Record<string, 'good' | 'again'>>(() => {
    const seed: Record<string, 'good' | 'again'> = {};
    for (const card of cards) {
      const prior = initialAnswers?.[card.id]?.[0];
      if (prior === 'good' || prior === 'again') seed[card.id] = prior;
    }
    return seed;
  });
  const [index, setIndex] = useState(() => (initialSubmitted ? cards.length : 0));
  const [flipped, setFlipped] = useState(false);

  const done = index >= cards.length;
  const current = cards[index];
  const knownCount = cards.filter((c) => ratings[c.id] === 'good').length;

  const rate = (rating: 'good' | 'again') => {
    const nextRatings = { ...ratings, [current.id]: rating };
    setRatings(nextRatings);
    setFlipped(false);
    const nextIndex = index + 1;
    setIndex(nextIndex);
    if (nextIndex >= cards.length) {
      const answers = Object.fromEntries(cards.map((c) => [c.id, [nextRatings[c.id]]]));
      onComplete({ answers, score: 1 });
    }
  };

  return (
    <section className="recall-set">
      <h2>{title}</h2>
      {!done && current && (
        <div className="card">
          <p className="progress">Card {index + 1} of {cards.length}</p>
          <p className="front">{current.front}</p>
          {flipped && <p className="back">{current.back}</p>}
          {!flipped && (
            <button onClick={() => setFlipped(true)}>Show answer</button>
          )}
          {flipped && (
            <div className="rate">
              <button onClick={() => rate('good')}>Knew it</button>
              <button onClick={() => rate('again')}>Again</button>
            </div>
          )}
        </div>
      )}
      {done && (
        <p className="summary">
          {knownCount} of {cards.length} known — the rest will come back in review.
        </p>
      )}
    </section>
  );
}
