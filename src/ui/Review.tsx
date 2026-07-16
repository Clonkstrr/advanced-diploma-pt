import { useState } from 'react';
import type { RecallCard } from '../types/content';
import { useProgress } from '../state/StoreProvider';
import { dueItems } from '../state/recall';
import { getUnit } from '../content/registry';

// key: courseId/unitId/cardId -> the card's content, or null if the content
// has since been renamed/removed (stale keys are skipped, never crash).
function resolveCard(key: string): RecallCard | null {
  const [courseId, unitId, cardId] = key.split('/');
  const found = getUnit(courseId, unitId);
  if (!found) return null;
  for (const component of found.unit.components) {
    if (component.type === 'recallSet') {
      const card = component.cards.find((c) => c.id === cardId);
      if (card) return card;
    }
  }
  return null;
}

export function Review() {
  const recall = useProgress((s) => s.state.recall);
  const reviewCard = useProgress((s) => s.reviewCard);
  const now = useProgress((s) => s.now);

  // The queue is captured once so grading advances through today's session
  // instead of re-querying (a graded card is no longer due and would vanish).
  const [queue] = useState<Array<{ key: string; card: RecallCard }>>(() =>
    dueItems(recall ?? {}, now())
      .map((key) => ({ key, card: resolveCard(key)! }))
      .filter((entry) => entry.card !== null),
  );
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (queue.length === 0) {
    return (
      <section className="review">
        <h1>Review</h1>
        <p>Nothing due — come back tomorrow.</p>
      </section>
    );
  }

  if (index >= queue.length) {
    return (
      <section className="review">
        <h1>Review</h1>
        <p>All done — {queue.length} card{queue.length === 1 ? '' : 's'} reviewed.</p>
      </section>
    );
  }

  const { key, card } = queue[index];
  const rate = (rating: 'good' | 'again') => {
    reviewCard(key, rating);
    setFlipped(false);
    setIndex((i) => i + 1);
  };

  return (
    <section className="review">
      <h1>Review</h1>
      <div className="card">
        <p className="progress">Card {index + 1} of {queue.length}</p>
        <p className="front">{card.front}</p>
        {flipped && <p className="back">{card.back}</p>}
        {!flipped && <button onClick={() => setFlipped(true)}>Show answer</button>}
        {flipped && (
          <div className="rate">
            <button onClick={() => rate('good')}>Knew it</button>
            <button onClick={() => rate('again')}>Again</button>
          </div>
        )}
      </div>
    </section>
  );
}
