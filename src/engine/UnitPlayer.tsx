import { useEffect, useState, type ReactNode } from 'react';
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

// Adding a component type to UnitComponent breaks this map (and the render
// switch below) at compile time until the new type is wired up.
const completesOn: { [K in UnitComponent['type']]: 'view' | 'submit' } = {
  outcomes: 'view',
  concept: 'view',
  questionSet: 'submit',
  visual: 'view',
  workedExample: 'view',
  classification: 'submit',
  numericLab: 'submit',
  errorId: 'submit',
  branchingCase: 'submit',
  evidenceAppraisal: 'submit',
  recallSet: 'submit',
  teachBack: 'submit',
};

export function UnitPlayer({ course, unit }: { course: Course; unit: Unit }) {
  const setLocation = useProgress((s) => s.setLocation);
  const recordAnswers = useProgress((s) => s.recordAnswers);
  const completeComponent = useProgress((s) => s.completeComponent);
  const savedLast = useProgress(
    (s) => s.state.courses[course.id]?.units[unit.id]?.lastComponentId,
  );
  const lastLoc = useProgress((s) => s.state.lastLocation);
  const unitProgress = useProgress((s) => s.state.courses[course.id]?.units[unit.id]);

  const resumeId =
    lastLoc && lastLoc.courseId === course.id && lastLoc.unitId === unit.id
      ? lastLoc.componentId
      : savedLast;
  const [index, setIndex] = useState(() => startIndex(unit.components, resumeId));
  const current = unit.components[index];

  useEffect(() => {
    setLocation(course.id, unit.id, current.id);
  }, [course.id, unit.id, current.id, setLocation]);

  // Completion normally fires on Next, so a unit ending in a non-interactive
  // component could otherwise never reach 100%.
  const isLast = index === unit.components.length - 1;
  useEffect(() => {
    if (isLast && completesOn[current.type] === 'view') {
      completeComponent(course.id, unit.id, current.id);
    }
  }, [isLast, course.id, unit.id, current.id, current.type, completeComponent]);

  const next = () => {
    if (completesOn[current.type] === 'view') {
      completeComponent(course.id, unit.id, current.id);
    }
    setIndex((i) => Math.min(i + 1, unit.components.length - 1));
  };
  const back = () => setIndex((i) => Math.max(i - 1, 0));

  // Exhaustive over UnitComponent; the default only survives for data from a
  // newer content version than this build understands.
  const renderCurrent = (): ReactNode => {
    switch (current.type) {
      case 'concept':
        return <ConceptBlock key={current.id} heading={current.heading} body={current.body} />;
      case 'outcomes':
        return <OutcomesBlock key={current.id} outcomes={current.outcomes} />;
      case 'questionSet':
        return (
          <QuestionSet
            key={current.id}
            title={current.title}
            questions={current.questions}
            initialAnswers={unitProgress?.components[current.id]?.answers}
            initialSubmitted={unitProgress?.components[current.id]?.completed}
            onComplete={({ answers, score }) => {
              recordAnswers(course.id, unit.id, current.id, answers, score);
              completeComponent(course.id, unit.id, current.id);
            }}
          />
        );
      // Plan 2 renderers land one per task; until then these fall through to
      // the placeholder so the schema/type work can ship independently.
      case 'visual':
      case 'workedExample':
      case 'classification':
      case 'numericLab':
      case 'errorId':
      case 'branchingCase':
      case 'evidenceAppraisal':
      case 'recallSet':
      case 'teachBack':
        return <p className="unsupported">This part of the lesson isn’t available yet.</p>;
      default: {
        const unhandled: never = current;
        void unhandled;
        return <p className="unsupported">This part of the lesson isn’t available yet.</p>;
      }
    }
  };

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

      {/* key (inside renderCurrent) ensures per-component state, e.g. a set's
          answers, never survives into the next component of the same type */}
      <div className="component">{renderCurrent()}</div>

      <footer className="nav">
        <button onClick={back} disabled={index === 0}>Back</button>
        <span>{index + 1} / {unit.components.length}</span>
        <button onClick={next} disabled={index === unit.components.length - 1}>Next</button>
      </footer>
    </article>
  );
}
