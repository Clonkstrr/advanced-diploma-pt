import { Link } from 'react-router-dom';
import { courses } from '../content/registry';
import { curriculum } from '../content/curriculum';
import { useProgress } from '../state/StoreProvider';
import { unitMastery } from '../engine/mastery';

export function Catalog() {
  const state = useProgress((s) => s.state);
  return (
    <section className="catalog">
      <h1>Course catalog</h1>
      {curriculum.map((sem) => (
        <section key={sem.title} className="semester">
          <h2>{sem.title}</h2>
          {sem.courses.map((planned) => {
            const c = courses.find((x) => x.code === planned.code);
            if (!c) {
              return (
                <div key={planned.code} className="course-card planned">
                  <h3>{planned.code} — {planned.title}</h3>
                  <p className="coming-soon">Coming soon.</p>
                </div>
              );
            }
            return (
              <div key={c.id} className="course-card">
                <h3>{c.code} — {c.title}</h3>
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
                        {' '}
                        <Link className="ref-link" to={`/reference/${c.id}/${u.id}`}>sources</Link>
                      </li>
                    );
                  })}
                </ul>
                <p className="coming-soon">More units of this course are still being written.</p>
              </div>
            );
          })}
        </section>
      ))}
    </section>
  );
}
