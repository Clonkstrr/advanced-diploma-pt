import { describe, it, expect } from 'vitest';
import { validateCourse } from './schema';

const validCourse = {
  id: 'apt501', code: 'APT 501', title: 'Test', semester: 1, description: 'd',
  units: [{
    id: 'u1', code: 'APT 501.1', title: 'Unit', summary: 's',
    qc: { sources: [{ citation: 'ACSM', evidenceType: 'Guideline', verified: true }],
          confidence: 'high', lastReviewed: '2026-07-15', reviewBy: '2027-07-15' },
    components: [
      { type: 'outcomes', id: 'o1', outcomes: [{ level: 'recall', text: 'x' }] },
      { type: 'concept', id: 'c1', heading: 'H', body: 'B' },
      { type: 'questionSet', id: 'q1', role: 'quiz', title: 'Quiz',
        questions: [{ id: 'qq1', kind: 'single', prompt: 'P', cognitive: 'recall',
          options: [{ id: 'a', text: 'A', correct: true }, { id: 'b', text: 'B', correct: false }] }] },
    ],
  }],
};

describe('validateCourse', () => {
  it('accepts a valid course', () => {
    expect(() => validateCourse(validCourse)).not.toThrow();
  });
  it('rejects a single-answer question with no correct option', () => {
    const bad = structuredClone(validCourse);
    (bad.units[0].components[2] as any).questions[0].options.forEach((o: any) => (o.correct = false));
    expect(() => validateCourse(bad)).toThrow(/at least one correct/i);
  });

  it('rejects duplicate component ids within a unit', () => {
    const bad = structuredClone(validCourse);
    (bad.units[0].components[1] as any).id = 'o1'; // clashes with the outcomes block
    expect(() => validateCourse(bad)).toThrow(/component ids .*unique/i);
  });

  it('rejects duplicate question ids within a question set', () => {
    const bad = structuredClone(validCourse);
    const qs = bad.units[0].components[2] as any;
    qs.questions.push({ ...structuredClone(qs.questions[0]), id: 'qq1' });
    expect(() => validateCourse(bad)).toThrow(/question ids .*unique/i);
  });

  it('rejects duplicate option ids within a question', () => {
    const bad = structuredClone(validCourse);
    (bad.units[0].components[2] as any).questions[0].options[1].id = 'a';
    expect(() => validateCourse(bad)).toThrow(/option ids .*unique/i);
  });

  it('rejects duplicate unit ids within a course', () => {
    const bad = structuredClone(validCourse);
    bad.units.push(structuredClone(bad.units[0]));
    expect(() => validateCourse(bad)).toThrow(/unit ids .*unique/i);
  });
});

// ---- Plan 2 component types ------------------------------------------------

const plan2Components = [
  { type: 'visual', id: 'v1', title: 'Diagram', diagramId: 'scope-decision-tree',
    caption: 'How to decide.', callouts: [{ id: 'c1', label: '1', text: 'Start here' }] },
  { type: 'workedExample', id: 'w1', title: 'Worked example', scenario: 'A client says…',
    steps: [{ id: 's1', title: 'Notice', reasoning: 'r1' }, { id: 's2', title: 'Decide', reasoning: 'r2' }],
    takeaway: 'The takeaway.' },
  { type: 'classification', id: 'cl1', title: 'Sort it', instructions: 'Place each item.',
    buckets: [{ id: 'b1', label: 'In scope' }, { id: 'b2', label: 'Refer' }],
    items: [{ id: 'i1', text: 'Program design', bucketId: 'b1', rationale: 'Core trainer work.' }] },
  { type: 'numericLab', id: 'n1', title: 'Calculate', brief: 'Work these out.',
    fields: [{ id: 'f1', label: 'HRR', unit: 'bpm', answer: 100, tolerance: 2 }],
    solution: 'Worked solution.' },
  { type: 'errorId', id: 'e1', title: 'Spot the problems', brief: 'Review this bio.',
    document: 'I diagnose and fix all injuries!',
    findings: [
      { id: 'fd1', text: 'Claims to diagnose', isError: true, rationale: 'Out of scope.' },
      { id: 'fd2', text: 'Uses first person', isError: false, rationale: 'Fine.' },
    ] },
  { type: 'branchingCase', id: 'bc1', title: 'New client', brief: 'Decide.',
    startNodeId: 'nd1',
    nodes: [
      { id: 'nd1', situation: 'Client discloses chest pain.',
        choices: [
          { id: 'ch1', text: 'Refer to physician', to: null, quality: 'best', feedback: 'Correct.' },
          { id: 'ch2', text: 'Train anyway', to: 'nd2', quality: 'poor', feedback: 'Unsafe.' },
        ] },
      { id: 'nd2', situation: 'Client feels dizzy mid-set.',
        choices: [{ id: 'ch3', text: 'Stop and refer', to: null, quality: 'best', feedback: 'Correct.' }] },
    ] },
  { type: 'evidenceAppraisal', id: 'ea1', title: 'Grade the claim', brief: 'Use the hierarchy.',
    hierarchy: ['Guidelines', 'Systematic reviews', 'RCTs'],
    claims: [{ id: 'cm1', claim: 'X burns fat', evidenceDescription: 'One rat study.',
      correctLevel: 'RCTs', rationale: 'Animal study ranks low.' }],
    briefPrompt: 'Write a brief.', modelBrief: 'Model brief.' },
  { type: 'recallSet', id: 'r1', title: 'Recall',
    cards: [{ id: 'cd1', front: 'What is scope?', back: 'The legal boundary…' }] },
  { type: 'teachBack', id: 't1', title: 'Teach it back', prompt: 'Explain scope.',
    modelAnswer: 'Model answer.', rubric: [{ id: 'rb1', text: 'Mentions referral' }, { id: 'rb2', text: 'Plain language' }] },
];

describe('validateCourse: Plan 2 component types', () => {
  function withComponents(components: unknown[]) {
    const c = structuredClone(validCourse) as any;
    c.units[0].components = [...c.units[0].components, ...structuredClone(components)];
    return c;
  }

  it('accepts every Plan 2 component type', () => {
    expect(() => validateCourse(withComponents(plan2Components))).not.toThrow();
  });

  it('accepts a cumulative question set', () => {
    const c = withComponents([]);
    c.units[0].components.push({
      ...structuredClone(c.units[0].components[2]), id: 'q-cum', role: 'cumulative',
    });
    expect(() => validateCourse(c)).not.toThrow();
  });

  it('rejects a classification item pointing at a missing bucket', () => {
    const bad = structuredClone(plan2Components);
    (bad[2] as any).items[0].bucketId = 'nope';
    expect(() => validateCourse(withComponents(bad))).toThrow(/bucket/i);
  });

  it('rejects a branching choice pointing at a missing node', () => {
    const bad = structuredClone(plan2Components);
    (bad[5] as any).nodes[0].choices[1].to = 'nope';
    expect(() => validateCourse(withComponents(bad))).toThrow(/node/i);
  });

  it('rejects a branching case with an unknown start node', () => {
    const bad = structuredClone(plan2Components);
    (bad[5] as any).startNodeId = 'nope';
    expect(() => validateCourse(withComponents(bad))).toThrow(/start/i);
  });

  it('rejects a branching case with no terminal choice anywhere', () => {
    const bad = structuredClone(plan2Components);
    (bad[5] as any).nodes[0].choices[0].to = 'nd2';
    (bad[5] as any).nodes[1].choices[0].to = 'nd1';
    expect(() => validateCourse(withComponents(bad))).toThrow(/terminal/i);
  });

  it('rejects a visual without callouts', () => {
    const bad = structuredClone(plan2Components);
    (bad[0] as any).callouts = [];
    expect(() => validateCourse(withComponents(bad))).toThrow();
  });

  it('rejects duplicate card ids in a recall set', () => {
    const bad = structuredClone(plan2Components);
    (bad[7] as any).cards.push({ id: 'cd1', front: 'dup', back: 'dup' });
    expect(() => validateCourse(withComponents(bad))).toThrow(/card ids .*unique/i);
  });
});
