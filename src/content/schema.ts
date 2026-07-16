import { z } from 'zod';
import type { Course } from '../types/content';

const cognitive = z.enum(['recall', 'application', 'analysis', 'synthesis']);

const sourceSchema = z.object({
  citation: z.string().min(1),
  year: z.number().optional(),
  evidenceType: z.string().min(1),
  verified: z.boolean(),
});

const qcSchema = z.object({
  sources: z.array(sourceSchema).min(1),
  confidence: z.enum(['high', 'moderate', 'low']),
  lastReviewed: z.string(),
  reviewBy: z.string(),
  jurisdictionNotes: z.string().optional(),
  scopeWarning: z.string().optional(),
  controversies: z.string().optional(),
  changeLog: z.array(z.object({ date: z.string(), note: z.string() })).optional(),
});

const optionSchema = z.object({
  id: z.string().min(1), text: z.string().min(1), correct: z.boolean(), rationale: z.string().optional(),
});

const uniqueIds = (items: { id: string }[]) => new Set(items.map((i) => i.id)).size === items.length;

const questionSchema = z.object({
  id: z.string().min(1),
  kind: z.enum(['single', 'multi']),
  prompt: z.string().min(1),
  options: z.array(optionSchema).min(2),
  cognitive,
  explanation: z.string().optional(),
}).refine(
  (q) => uniqueIds(q.options),
  { message: 'Option ids within a question must be unique' },
).refine(
  (q) => q.options.some((o) => o.correct),
  { message: 'Question must have at least one correct option' },
).refine(
  (q) => q.kind !== 'single' || q.options.filter((o) => o.correct).length === 1,
  { message: 'Single-answer question must have exactly one correct option' },
);

const idArray = <T extends z.ZodType<{ id: string }>>(item: T, min: number, what: string) =>
  z.array(item).min(min).refine(uniqueIds, { message: `${what} ids within a component must be unique` });

// Union members must stay plain ZodObjects (discriminatedUnion requirement), so
// per-array checks live on the array fields and cross-field checks in the
// superRefine below.
const rawComponentSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('outcomes'), id: z.string().min(1),
    outcomes: z.array(z.object({ level: cognitive, text: z.string().min(1) })).min(1) }),
  z.object({ type: z.literal('concept'), id: z.string().min(1),
    heading: z.string().min(1), body: z.string().min(1) }),
  z.object({ type: z.literal('questionSet'), id: z.string().min(1),
    role: z.enum(['pretest', 'quiz', 'cumulative']), title: z.string().min(1),
    questions: z.array(questionSchema).min(1).refine(uniqueIds,
      { message: 'Question ids within a question set must be unique' }) }),
  z.object({ type: z.literal('visual'), id: z.string().min(1), title: z.string().min(1),
    diagramId: z.string().min(1), caption: z.string().min(1),
    callouts: idArray(z.object({ id: z.string().min(1), label: z.string().min(1), text: z.string().min(1) }), 1, 'Callout') }),
  z.object({ type: z.literal('workedExample'), id: z.string().min(1), title: z.string().min(1),
    scenario: z.string().min(1), takeaway: z.string().min(1),
    steps: idArray(z.object({ id: z.string().min(1), title: z.string().min(1), reasoning: z.string().min(1) }), 2, 'Step') }),
  z.object({ type: z.literal('classification'), id: z.string().min(1), title: z.string().min(1),
    instructions: z.string().min(1),
    buckets: idArray(z.object({ id: z.string().min(1), label: z.string().min(1) }), 2, 'Bucket'),
    items: idArray(z.object({ id: z.string().min(1), text: z.string().min(1),
      bucketId: z.string().min(1), rationale: z.string().min(1) }), 1, 'Item') }),
  z.object({ type: z.literal('numericLab'), id: z.string().min(1), title: z.string().min(1),
    brief: z.string().min(1), solution: z.string().min(1),
    fields: idArray(z.object({ id: z.string().min(1), label: z.string().min(1),
      unit: z.string().min(1).optional(), answer: z.number(), tolerance: z.number().nonnegative() }), 1, 'Field') }),
  z.object({ type: z.literal('errorId'), id: z.string().min(1), title: z.string().min(1),
    brief: z.string().min(1), document: z.string().min(1),
    findings: idArray(z.object({ id: z.string().min(1), text: z.string().min(1),
      isError: z.boolean(), rationale: z.string().min(1) }), 2, 'Finding') }),
  z.object({ type: z.literal('branchingCase'), id: z.string().min(1), title: z.string().min(1),
    brief: z.string().min(1), startNodeId: z.string().min(1),
    nodes: idArray(z.object({ id: z.string().min(1), situation: z.string().min(1),
      choices: idArray(z.object({ id: z.string().min(1), text: z.string().min(1),
        to: z.string().min(1).nullable(), quality: z.enum(['best', 'acceptable', 'poor']),
        feedback: z.string().min(1) }), 1, 'Choice') }), 1, 'Node') }),
  z.object({ type: z.literal('evidenceAppraisal'), id: z.string().min(1), title: z.string().min(1),
    brief: z.string().min(1), hierarchy: z.array(z.string().min(1)).min(2),
    claims: idArray(z.object({ id: z.string().min(1), claim: z.string().min(1),
      evidenceDescription: z.string().min(1), correctLevel: z.string().min(1),
      rationale: z.string().min(1) }), 1, 'Claim'),
    briefPrompt: z.string().min(1), modelBrief: z.string().min(1) }),
  z.object({ type: z.literal('recallSet'), id: z.string().min(1), title: z.string().min(1),
    cards: z.array(z.object({ id: z.string().min(1), front: z.string().min(1),
      back: z.string().min(1) })).min(1).refine(uniqueIds,
      { message: 'Card ids within a recall set must be unique' }) }),
  z.object({ type: z.literal('teachBack'), id: z.string().min(1), title: z.string().min(1),
    prompt: z.string().min(1), modelAnswer: z.string().min(1),
    rubric: idArray(z.object({ id: z.string().min(1), text: z.string().min(1) }), 2, 'Rubric') }),
]);

const componentSchema = rawComponentSchema.superRefine((c, ctx) => {
  if (c.type === 'classification') {
    const buckets = new Set(c.buckets.map((b) => b.id));
    for (const item of c.items) {
      if (!buckets.has(item.bucketId)) {
        ctx.addIssue({ code: 'custom',
          message: `Classification item "${item.id}" references missing bucket "${item.bucketId}"` });
      }
    }
  }
  if (c.type === 'evidenceAppraisal') {
    const levels = new Set(c.hierarchy);
    for (const claim of c.claims) {
      if (!levels.has(claim.correctLevel)) {
        ctx.addIssue({ code: 'custom',
          message: `Claim "${claim.id}" has correctLevel outside the hierarchy` });
      }
    }
  }
  if (c.type === 'branchingCase') {
    const nodeIds = new Set(c.nodes.map((n) => n.id));
    if (!nodeIds.has(c.startNodeId)) {
      ctx.addIssue({ code: 'custom',
        message: `Branching case startNodeId "${c.startNodeId}" does not exist` });
    }
    for (const node of c.nodes) {
      for (const choice of node.choices) {
        if (choice.to !== null && !nodeIds.has(choice.to)) {
          ctx.addIssue({ code: 'custom',
            message: `Choice "${choice.id}" points at missing node "${choice.to}"` });
        }
      }
    }
    // at least one terminal choice must be reachable from the start node
    const byId = new Map(c.nodes.map((n) => [n.id, n]));
    const seen = new Set<string>();
    const queue = [c.startNodeId];
    let terminal = false;
    while (queue.length && !terminal) {
      const node = byId.get(queue.shift()!);
      if (!node || seen.has(node.id)) continue;
      seen.add(node.id);
      for (const choice of node.choices) {
        if (choice.to === null) terminal = true;
        else queue.push(choice.to);
      }
    }
    if (!terminal) {
      ctx.addIssue({ code: 'custom',
        message: 'Branching case has no reachable terminal choice' });
    }
  }
});

const unitSchema = z.object({
  id: z.string().min(1), code: z.string().min(1), title: z.string().min(1),
  summary: z.string().min(1), qc: qcSchema, components: z.array(componentSchema).min(1),
}).refine(
  (u) => uniqueIds(u.components),
  { message: 'Component ids within a unit must be unique' },
);

const courseSchema = z.object({
  id: z.string().min(1), code: z.string().min(1), title: z.string().min(1),
  semester: z.number().int(), description: z.string().min(1),
  units: z.array(unitSchema).min(1),
}).refine(
  (c) => uniqueIds(c.units),
  { message: 'Unit ids within a course must be unique' },
);

// Compile-time proof that the zod schema and the hand-written Course type agree,
// so parse() needs no cast. Editing either side past the other breaks the build.
type Equals<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;
type Expect<T extends true> = T;
export type AssertSchemaMatchesCourse = Expect<Equals<z.infer<typeof courseSchema>, Course>>;

export function validateCourse(data: unknown): Course {
  return courseSchema.parse(data);
}
