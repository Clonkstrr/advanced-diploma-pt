import { useParams, Link } from 'react-router-dom';
import { getUnit } from '../content/registry';

// The in-app provenance surface (spec §10): per-unit sources with honest
// verification badges, confidence, review dates and scope guardrails.
export function Reference() {
  const { courseId = '', unitId = '' } = useParams();
  const found = getUnit(courseId, unitId);
  if (!found) return <p>Reference not found.</p>;

  const { course, unit } = found;
  const qc = unit.qc;

  return (
    <section className="reference">
      <p className="crumb">{course!.code} · {unit.code}</p>
      <h1>Sources & quality control</h1>
      <h2>{unit.title}</h2>

      {qc.scopeWarning && (
        <p className="scope-warning"><strong>Scope:</strong> {qc.scopeWarning}</p>
      )}

      <ul className="sources">
        {qc.sources.map((s) => (
          <li key={s.citation}>
            <span className="citation">{s.citation}{s.year ? ` (${s.year})` : ''}</span>
            {' — '}{s.evidenceType} ·{' '}
            <span className={s.verified ? 'verified' : 'pending'}>
              {s.verified ? 'verified' : 'pending verification'}
            </span>
          </li>
        ))}
      </ul>

      <div className="qc-meta">
        <p>{`Confidence: ${qc.confidence}`}</p>
        <p>{`Last reviewed: ${qc.lastReviewed}`}</p>
        <p>{`Next review: ${qc.reviewBy}`}</p>
        {qc.jurisdictionNotes && <p>{`Jurisdiction: ${qc.jurisdictionNotes}`}</p>}
        {qc.controversies && <p>{`Known controversies: ${qc.controversies}`}</p>}
      </div>

      <p><Link to={`/course/${courseId}/unit/${unitId}`}>Back to the unit</Link></p>
    </section>
  );
}
