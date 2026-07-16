import { Link } from 'react-router-dom';
import { useProgress } from '../state/StoreProvider';

export function Home() {
  const last = useProgress((s) => s.state.lastLocation);
  return (
    <section className="home">
      <h1>Welcome back</h1>
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
