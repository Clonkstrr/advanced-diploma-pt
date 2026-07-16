import { Link } from 'react-router-dom';
import { courses } from '../content/registry';
import { useProgress } from '../state/StoreProvider';
import { unitMastery } from '../engine/mastery';

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
              const up = state.courses[c.id]?.units[u.id];
              const m = unitMastery(u, up);
              const allDone = !!up && u.components.every((cmp) => up.components[cmp.id]?.completed);
              const started = !!up && u.components.some((cmp) => up.components[cmp.id]?.completed);
              // ✓ requires mastery (>=80% + all safety items), not mere completion.
              const status = m.complete ? ' ✓'
                : allDone ? ' · needs review'
                : started ? ' · in progress' : '';
              return (
                <li key={u.id}>
                  <Link to={`/course/${c.id}/unit/${u.id}`}>{u.code} — {u.title}</Link>
                  {m.percent !== null ? ` · ${m.percent}%` : ''}{status}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
