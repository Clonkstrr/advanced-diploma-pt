import { useEffect, useState } from 'react';
import type { Course, Unit, UnitComponent } from '../types/content';
import { useProgress } from '../state/StoreProvider';
import { ConceptBlock } from './components/ConceptBlock';
import { OutcomesBlock } from './components/OutcomesBlock';
import { QuestionSet } from './components/QuestionSet';

function startIndex(components: UnitComponent[], lastComponentId?: string): number {
  if (!lastComponentId) return 0;
  const i = components.findIndex((c) => c.id === lastComponentId);
  return i < 0 ? 0 : i;
}

export function UnitPlayer({ course, unit }: { course: Course; unit: Unit }) {
  const setLocation = useProgress((s) => s.setLocation);
  const recordAnswers = useProgress((s) => s.recordAnswers);
  const completeComponent = useProgress((s) => s.completeComponent);
  const savedLast = useProgress(
    (s) => s.state.courses[course.id]?.units[unit.id]?.lastComponentId,
  );

  const [index, setIndex] = useState(() => startIndex(unit.components, savedLast));
  const current = unit.components[index];

  useEffect(() => {
    setLocation(course.id, unit.id, current.id);
  }, [course.id, unit.id, current.id, setLocation]);

  const next = () => setIndex((i) => Math.min(i + 1, unit.components.length - 1));
  const back = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <article className="unit-player">
      <header>
        <p className="crumb">{course.code} · {unit.code}</p>
        <h1>{unit.title}</h1>
        <ol className="rail">
          {unit.components.map((c, i) => (
            <li key={c.id} className={i === index ? 'active' : i < index ? 'done' : ''}>{c.type}</li>
          ))}
        </ol>
      </header>

      <div className="component">
        {current.type === 'concept' && <ConceptBlock heading={current.heading} body={current.body} />}
        {current.type === 'outcomes' && <OutcomesBlock outcomes={current.outcomes} />}
        {current.type === 'questionSet' && (
          <QuestionSet
            title={current.title}
            questions={current.questions}
            onComplete={({ answers, score }) => {
              recordAnswers(course.id, unit.id, current.id, answers, score);
              completeComponent(course.id, unit.id, current.id);
            }}
          />
        )}
      </div>

      <footer className="nav">
        <button onClick={back} disabled={index === 0}>Back</button>
        <span>{index + 1} / {unit.components.length}</span>
        <button onClick={next} disabled={index === unit.components.length - 1}>Next</button>
      </footer>
    </article>
  );
}
