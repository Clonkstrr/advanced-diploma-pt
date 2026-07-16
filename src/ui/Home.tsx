import { Link } from 'react-router-dom';
import { useProgress } from '../state/StoreProvider';
import { dueItems } from '../state/recall';

export function Home() {
  const last = useProgress((s) => s.state.lastLocation);
  const dueCount = useProgress((s) => dueItems(s.state.recall ?? {}, s.now()).length);
  return (
    <section className="home">
      <h1>Welcome back</h1>
      {dueCount > 0 && (
        <p>
          <Link className="review-due" to="/review">Review due: {dueCount}</Link>
        </p>
      )}
      {last ? (
        <p>
          <Link className="cta" to={`/course/${last.courseId}/unit/${last.unitId}`}>
            Continue where you left off
          </Link>
        </p>
      ) : (
        <p>
          <Link className="cta" to="/catalog">Start the program — browse the catalog</Link>
        </p>
      )}
    </section>
  );
}
