import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Course, Unit, UnitComponent } from '../types/content';
import { useProgress } from '../state/StoreProvider';
import { ConceptBlock } from './components/ConceptBlock';
import { OutcomesBlock } from './components/OutcomesBlock';
import { QuestionSet } from './components/QuestionSet';
import { Visual } from './components/Visual';
import { WorkedExample } from './components/WorkedExample';
import { Classification } from './components/Classification';
import { NumericLab } from './components/NumericLab';
import { ErrorId } from './components/ErrorId';
import { BranchingCase } from './components/BranchingCase';
import { EvidenceAppraisal } from './components/EvidenceAppraisal';
import { RecallSet } from './components/RecallSet';
import { TeachBack } from './components/TeachBack';

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
  const scheduleRecall = useProgress((s) => s.scheduleRecall);
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

  // Shared completion handler for every graded component type.
  const onGraded = ({ answers, score }: { answers: Record<string, string[]>; score: number }) => {
    recordAnswers(course.id, unit.id, current.id, answers, score);
    completeComponent(course.id, unit.id, current.id);
  };

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
            onComplete={onGraded}
          />
        );
      case 'visual':
        return (
          <Visual key={current.id} title={current.title} diagramId={current.diagramId}
            caption={current.caption} callouts={current.callouts} />
        );
      case 'workedExample':
        return (
          <WorkedExample key={current.id} title={current.title} scenario={current.scenario}
            steps={current.steps} takeaway={current.takeaway}
            initialRevealed={unitProgress?.components[current.id]?.completed} />
        );
      case 'classification':
        return (
          <Classification key={current.id} title={current.title}
            instructions={current.instructions} buckets={current.buckets} items={current.items}
            initialAnswers={unitProgress?.components[current.id]?.answers}
            initialSubmitted={unitProgress?.components[current.id]?.completed}
            onComplete={onGraded} />
        );
      case 'numericLab':
        return (
          <NumericLab key={current.id} title={current.title} brief={current.brief}
            fields={current.fields} solution={current.solution}
            initialAnswers={unitProgress?.components[current.id]?.answers}
            initialSubmitted={unitProgress?.components[current.id]?.completed}
            onComplete={onGraded} />
        );
      case 'errorId':
        return (
          <ErrorId key={current.id} title={current.title} brief={current.brief}
            document={current.document} findings={current.findings}
            initialAnswers={unitProgress?.components[current.id]?.answers}
            initialSubmitted={unitProgress?.components[current.id]?.completed}
            onComplete={onGraded} />
        );
      case 'branchingCase':
        return (
          <BranchingCase key={current.id} title={current.title} brief={current.brief}
            startNodeId={current.startNodeId} nodes={current.nodes}
            initialAnswers={unitProgress?.components[current.id]?.answers}
            initialSubmitted={unitProgress?.components[current.id]?.completed}
            onComplete={onGraded} />
        );
      case 'evidenceAppraisal':
        return (
          <EvidenceAppraisal key={current.id} title={current.title} brief={current.brief}
            hierarchy={current.hierarchy} claims={current.claims}
            briefPrompt={current.briefPrompt} modelBrief={current.modelBrief}
            initialAnswers={unitProgress?.components[current.id]?.answers}
            initialSubmitted={unitProgress?.components[current.id]?.completed}
            onComplete={onGraded} />
        );
      case 'recallSet':
        return (
          <RecallSet key={current.id} title={current.title} cards={current.cards}
            initialAnswers={unitProgress?.components[current.id]?.answers}
            initialSubmitted={unitProgress?.components[current.id]?.completed}
            onComplete={(result) => {
              onGraded(result);
              // seed the spaced-recall queue from the self-ratings
              const ratings = Object.fromEntries(
                Object.entries(result.answers)
                  .filter(([, v]) => v[0] === 'good' || v[0] === 'again')
                  .map(([cardId, v]) => [cardId, v[0] as 'good' | 'again']),
              );
              scheduleRecall(course.id, unit.id, ratings);
            }} />
        );
      case 'teachBack':
        return (
          <TeachBack key={current.id} title={current.title} prompt={current.prompt}
            modelAnswer={current.modelAnswer} rubric={current.rubric}
            initialAnswers={unitProgress?.components[current.id]?.answers}
            initialSubmitted={unitProgress?.components[current.id]?.completed}
            onComplete={onGraded} />
        );
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
        <p className="crumb">
          {course.code} · {unit.code}
          {' '}
          <Link className="ref-link" to={`/reference/${course.id}/${unit.id}`}>Sources & QC</Link>
        </p>
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
