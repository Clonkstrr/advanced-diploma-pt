import { Link } from 'react-router-dom';
import { courses } from '../content/registry';
import { useProgress } from '../state/StoreProvider';

export function Catalog() {
  const state = useProgress((s) => s.state);
  return (
    <section className="catalog">
      <h1>Course catalog</h1>
      {courses.map((c) => (
        <div key={c.id} className="course-card">
          <h2>{c.code} — {c.title}</h2>
          <p>{c.description}</p>
          <ul>
            {c.units.map((u) => {
              const done = state.courses[c.id]?.units[u.id]?.completed;
              return (
                <li key={u.id}>
                  <Link to={`/course/${c.id}/unit/${u.id}`}>{u.code} — {u.title}</Link>
                  {done ? ' ✓' : ''}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
