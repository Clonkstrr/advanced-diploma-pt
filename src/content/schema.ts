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

const questionSchema = z.object({
  id: z.string().min(1),
  kind: z.enum(['single', 'multi']),
  prompt: z.string().min(1),
  options: z.array(optionSchema).min(2),
  cognitive,
  explanation: z.string().optional(),
}).refine(
  (q) => q.options.some((o) => o.correct),
  { message: 'Question must have at least one correct option' },
).refine(
  (q) => q.kind !== 'single' || q.options.filter((o) => o.correct).length === 1,
  { message: 'Single-answer question must have exactly one correct option' },
);

const componentSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('outcomes'), id: z.string().min(1),
    outcomes: z.array(z.object({ level: cognitive, text: z.string().min(1) })).min(1) }),
  z.object({ type: z.literal('concept'), id: z.string().min(1),
    heading: z.string().min(1), body: z.string().min(1) }),
  z.object({ type: z.literal('questionSet'), id: z.string().min(1),
    role: z.enum(['pretest', 'quiz']), title: z.string().min(1),
    questions: z.array(questionSchema).min(1) }),
]);

const unitSchema = z.object({
  id: z.string().min(1), code: z.string().min(1), title: z.string().min(1),
  summary: z.string().min(1), qc: qcSchema, components: z.array(componentSchema).min(1),
});

const courseSchema = z.object({
  id: z.string().min(1), code: z.string().min(1), title: z.string().min(1),
  semester: z.number().int(), description: z.string().min(1),
  units: z.array(unitSchema).min(1),
});

export function validateCourse(data: unknown): Course {
  return courseSchema.parse(data) as Course;
}
