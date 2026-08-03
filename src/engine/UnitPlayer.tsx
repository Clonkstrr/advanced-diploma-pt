import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

// Rail labels. The rail is a table of contents the learner navigates directly,
// so it shows what a section *is*, never the internal component type name.
const SECTION_LABEL: { [K in UnitComponent['type']]: string } = {
  outcomes: 'What you’ll learn',
  concept: 'Reading',
  questionSet: 'Questions',
  visual: 'Diagram',
  workedExample: 'Worked example',
  classification: 'Sorting lab',
  numericLab: 'Numbers lab',
  errorId: 'Spot the errors',
  branchingCase: 'Case',
  evidenceAppraisal: 'Appraisal',
  recallSet: 'Recall',
  teachBack: 'Teach back',
};

const QUESTION_SET_LABEL: Record<'pretest' | 'quiz' | 'cumulative', string> = {
  pretest: 'Pretest',
  quiz: 'Quiz',
  cumulative: 'Cumulative review',
};

// Repeated kinds get numbered ("Reading 1..5") so every rail entry is a
// distinct, clickable destination.
function sectionLabels(components: UnitComponent[]): string[] {
  const base = components.map((c) =>
    c.type === 'questionSet' ? QUESTION_SET_LABEL[c.role] : SECTION_LABEL[c.type]);
  const totals = new Map<string, number>();
  for (const label of base) totals.set(label, (totals.get(label) ?? 0) + 1);
  const seen = new Map<string, number>();
  return base.map((label) => {
    if ((totals.get(label) ?? 0) < 2) return label;
    const n = (seen.get(label) ?? 0) + 1;
    seen.set(label, n);
    return `${label} ${n}`;
  });
}

export function UnitPlayer({ course, unit }: { course: Course; unit: Unit }) {
  const navigate = useNavigate();
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

  // Every section is reachable from anywhere: the rail, Back and Next all go
  // through goTo. Leaving a read-only section still marks it seen, so browsing
  // out of order keeps progress honest rather than resetting it.
  const goTo = (target: number) => {
    if (completesOn[current.type] === 'view') {
      completeComponent(course.id, unit.id, current.id);
    }
    setIndex(Math.min(Math.max(target, 0), unit.components.length - 1));
  };
  const next = () => goTo(index + 1);
  const back = () => goTo(index - 1);

  const [navOpen, setNavOpen] = useState(() => {
    try { return localStorage.getItem('sectionNav') !== 'closed'; } catch { return true; }
  });
  const toggleNav = () => {
    const next = !navOpen;
    setNavOpen(next);
    try { localStorage.setItem('sectionNav', next ? 'open' : 'closed'); } catch { /* preference only */ }
  };

  const labels = useMemo(() => sectionLabels(unit.components), [unit.components]);
  const completedCount = unit.components.filter(
    (c) => unitProgress?.components[c.id]?.completed,
  ).length;
  const percentDone = Math.round((completedCount / unit.components.length) * 100);

  // gateExempt units only: mark everything done in one move and return to the
  // catalog. Nothing is graded, so mastery shows the unit complete (no gate).
  const skipUnit = () => {
    for (const c of unit.components) {
      completeComponent(course.id, unit.id, c.id);
    }
    navigate('/catalog');
  };

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
    <div className="unit-shell">
      {/* Standing table of contents. Every section is one click away, shows
          whether it is done, and the column folds away for reading room. */}
      <aside className={navOpen ? 'section-nav open' : 'section-nav collapsed'}>
        <button type="button" className="section-nav-toggle" aria-expanded={navOpen} onClick={toggleNav}>
          {navOpen ? 'Hide sections' : 'Show sections'}
        </button>

        {navOpen && (
          <>
            <div className="unit-progress">
              <div
                className="progress-track"
                role="progressbar"
                aria-label="Unit progress"
                aria-valuenow={percentDone}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="progress-fill" style={{ width: `${percentDone}%` }} />
              </div>
              <p className="progress-label">
                {completedCount} of {unit.components.length} sections done
              </p>
            </div>

            <nav className="rail" aria-label="Sections">
              <ol>
                {unit.components.map((c, i) => {
                  const saved = unitProgress?.components[c.id];
                  const done = !!saved?.completed;
                  const state = i === index ? 'current' : done ? 'done' : 'todo';
                  const score = saved?.score;
                  const scored = typeof score === 'number' ? Math.round(score * 100) : null;
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        data-state={state}
                        className={state}
                        aria-current={i === index ? 'step' : undefined}
                        aria-label={scored === null ? labels[i] : `${labels[i]}, scored ${scored} percent`}
                        onClick={() => goTo(i)}
                      >
                        <span className="section-label">{labels[i]}</span>
                        {scored !== null && <span className="section-score">{scored}%</span>}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </>
        )}
      </aside>

      <article className="unit-player">
        <header>
          <p className="crumb">
            <Link to="/catalog">← All units</Link>
            {' · '}
            {course.code} · {unit.code}
            {' '}
            <Link className="ref-link" to={`/reference/${course.id}/${unit.id}`}>Sources & QC</Link>
            {unit.gateExempt && (
              <button className="skip-unit" onClick={skipUnit}>Skip unit, mark as done</button>
            )}
          </p>
          <h1>{unit.title}</h1>
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
    </div>
  );
}
