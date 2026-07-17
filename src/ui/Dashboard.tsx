import { Link } from 'react-router-dom';
import { courses, getUnit } from '../content/registry';
import { useProgress } from '../state/StoreProvider';
import { dueItems } from '../state/recall';
import { unitMastery } from '../engine/mastery';

export function Dashboard() {
  const state = useProgress((s) => s.state);
  const now = useProgress((s) => s.now);
  const dueCount = dueItems(state.recall ?? {}, now()).length;

  const allUnits = courses.flatMap((c) =>
    c.units.map((u) => ({ course: c, unit: u, mastery: unitMastery(u, state.courses[c.id]?.units[u.id]) })));
  const masteredCount = allUnits.filter((x) => x.mastery.complete).length;
  const firstUnmastered = allUnits.find((x) => !x.mastery.complete);
  const last = state.lastLocation;
  const lastUnit = last && getUnit(last.courseId, last.unitId);

  // Next action precedence: due reviews > continue > first unmastered unit > catalog.
  const next = dueCount > 0
    ? { to: '/review', label: `Next up: review ${dueCount} due card${dueCount === 1 ? '' : 's'}` }
    : lastUnit
      ? { to: `/course/${last!.courseId}/unit/${last!.unitId}`, label: `Next up: continue ${lastUnit.unit.code}` }
      : firstUnmastered
        ? { to: `/course/${firstUnmastered.course.id}/unit/${firstUnmastered.unit.id}`,
            label: `Next up: ${firstUnmastered.unit.code} — ${firstUnmastered.unit.title}` }
        : { to: '/catalog', label: 'Next up: browse the catalog' };

  return (
    <section className="dashboard">
      <h1>Welcome back</h1>

      {dueCount > 0 && (
        <p><Link className="review-due" to="/review">Review due: {dueCount}</Link></p>
      )}
      <p>
        {last ? (
          <Link className="cta" to={`/course/${last.courseId}/unit/${last.unitId}`}>
            Continue where you left off
          </Link>
        ) : (
          <Link className="cta" to="/catalog">Start the program — browse the catalog</Link>
        )}
      </p>
      <p><Link className="next-up" to={next.to}>{next.label}</Link></p>

      <h2>Program progress</h2>
      <p className="program-progress">
        {masteredCount} of {allUnits.length} units mastered
      </p>
      {courses.map((c) => (
        <div key={c.id} className="course-card">
          <h3>{c.code} — {c.title}</h3>
          <ul>
            {c.units.map((u) => {
              const m = unitMastery(u, state.courses[c.id]?.units[u.id]);
              return (
                <li key={u.id}>
                  <Link to={`/course/${c.id}/unit/${u.id}`}>{u.code} — {u.title}</Link>
                  {m.percent !== null ? ` · ${m.percent}%` : ''}
                  {m.complete ? ' ✓' : ''}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
