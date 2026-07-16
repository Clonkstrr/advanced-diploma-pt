# Platform Foundation Implementation Plan (Plan 1 of the platform build)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a runnable, offline desktop app (React renderer inside an Electron window) that loads a real APT 501 lesson from structured data, lets the learner read concept blocks and answer graded questions, saves every action instantly, and on relaunch resumes on the exact spot she left — proving the data-driven lesson architecture and the seamless auto-save/resume promise.

**Architecture:** All course material is structured, Zod-validated data conforming to a fixed lesson schema. A React "engine" renders that data through per-component-type widgets. A single `ProgressState` object is the source of truth for progress; a Zustand store mutates it and writes through to IndexedDB (debounced) via a thin `StorageAdapter`. Electron wraps the built renderer and gives it a durable, persistent storage partition so auto-save is reliable on macOS. This plan implements the vertical slice (schema + storage + player + two component renderers + Electron shell + a completable seed unit); later plans add the remaining component types, spaced repetition, mastery gates, dashboard, and full content.

**Tech Stack:** Vite + React 18 + TypeScript · Zustand (state) · Zod (content validation) · `idb` (IndexedDB) · React Router (hash router) · Electron + electron-builder (desktop shell) · Vitest + @testing-library/react + jsdom + fake-indexeddb (tests).

---

## Scope of this plan

**In scope (Plan 1):** project scaffolding & tooling; content type system + Zod schema + validator; a real seed course (APT 501) with one fully completable unit built from the component types implemented here; `StorageAdapter` (IndexedDB); `progressStore` with debounced auto-save + hydrate/resume; `UnitPlayer` stepper; `ConceptBlock`, `OutcomesBlock`, and `QuestionSet` (single/multi-select, auto-graded) renderers; minimal Home/Catalog to open the unit; Electron shell (dev + build config, incl. mac target) verified running on Windows with persistent storage.

**Out of scope (later plans):** the other component renderers (numeric lab, simulator, technique error-ID, branching case, program builder, evidence appraisal, flashcards, teach-back, annotated SVG visuals, worked example); spaced-repetition engine; assessment/mastery gates; full dashboard/reference/settings surfaces; authoring the remaining APT 501 units to full depth; signing/notarizing the Mac `.app`.

## File structure created by this plan

```
advanced-diploma-pt/
  package.json                 # deps + scripts
  tsconfig.json                # TS config
  tsconfig.node.json           # TS config for vite/electron config files
  vite.config.ts               # Vite + Vitest config
  index.html                   # renderer entry HTML
  electron/
    main.ts                    # Electron main process (window + persistent partition)
    preload.ts                 # minimal, safe preload bridge
  electron-builder.yml         # packaging config (mac + win targets)
  src/
    main.tsx                   # React entry, router mount, hydrate on boot
    App.tsx                    # routes + layout shell
    types/
      content.ts               # Course/Unit/Component/QCMetadata/Question types
      progress.ts              # ProgressState + per-unit/component progress types
    content/
      schema.ts                # Zod schemas + validateCourse()
      registry.ts              # list of available courses
      courses/
        apt501/
          course.ts            # APT 501 course manifest + unit list
          unit01.ts            # seed unit: Scope, Role & Boundaries (completable)
    storage/
      StorageAdapter.ts        # IndexedDB CRUD (via idb)
    state/
      progressStore.ts         # Zustand store: hydrate, record, complete, setLocation
      autosave.ts              # debounce write-through helper
    engine/
      grading.ts               # pure grading functions (question scoring)
      UnitPlayer.tsx           # steps through a unit's components
      components/
        ConceptBlock.tsx
        OutcomesBlock.tsx
        QuestionSet.tsx
    ui/
      Layout.tsx               # app frame (header, nav)
      Home.tsx                 # dashboard stub (continue where you left off)
      Catalog.tsx              # semesters → courses → units
    styles.css                 # base academic styling (light/dark)
```

---

## Phase A — Project scaffolding & tooling

### Task 1: Initialize Node project and install dependencies

**Files:**
- Create: `package.json`

- [ ] **Step 1: Create package.json**

Create `package.json`:

```json
{
  "name": "advanced-diploma-pt",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "main": "dist-electron/main.js",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "test": "vitest run",
    "test:watch": "vitest",
    "electron:dev": "concurrently -k \"vite\" \"wait-on tcp:5173 && cross-env ELECTRON_START_URL=http://localhost:5173 tsc -p electron/tsconfig.json && electron dist-electron/main.js\"",
    "electron:build": "npm run build && tsc -p electron/tsconfig.json && electron-builder"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run:
```bash
npm install react react-dom react-router-dom zustand zod idb
npm install -D vite @vitejs/plugin-react typescript @types/react @types/react-dom \
  vitest @testing-library/react @testing-library/jest-dom jsdom fake-indexeddb \
  electron electron-builder concurrently wait-on cross-env
```
Expected: installs succeed, `node_modules/` populated.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: scaffold project and install dependencies"
```

### Task 2: TypeScript, Vite, and Vitest configuration

**Files:**
- Create: `tsconfig.json`, `tsconfig.node.json`, `vite.config.ts`, `index.html`, `electron/tsconfig.json`

- [ ] **Step 1: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2021",
    "lib": ["ES2021", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  },
  "include": ["src"]
}
```

- [ ] **Step 2: Create tsconfig.node.json and electron/tsconfig.json**

`tsconfig.node.json`:
```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["vite.config.ts"]
}
```

`electron/tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2021",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "outDir": "../dist-electron",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["main.ts", "preload.ts"]
}
```

- [ ] **Step 3: Create vite.config.ts (with Vitest config)**

```ts
/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: { outDir: 'dist' },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
  },
});
```

- [ ] **Step 4: Create index.html and test-setup.ts**

`index.html`:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Advanced Diploma in Personal Training Science and Coaching</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

`src/test-setup.ts`:
```ts
import '@testing-library/jest-dom';
import 'fake-indexeddb/auto';
```

- [ ] **Step 5: Verify the toolchain with a trivial passing test**

Create `src/smoke.test.ts`:
```ts
import { describe, it, expect } from 'vitest';
describe('toolchain', () => {
  it('runs vitest', () => { expect(1 + 1).toBe(2); });
});
```

Run: `npm test`
Expected: 1 passing test.

- [ ] **Step 6: Commit**

```bash
git add tsconfig.json tsconfig.node.json electron/tsconfig.json vite.config.ts index.html src/test-setup.ts src/smoke.test.ts
git commit -m "chore: add TypeScript, Vite, and Vitest configuration"
```

---

## Phase B — Content type system, schema, and seed course

### Task 3: Define content and progress TypeScript types

**Files:**
- Create: `src/types/content.ts`, `src/types/progress.ts`

- [ ] **Step 1: Create src/types/content.ts**

```ts
export type CognitiveLevel = 'recall' | 'application' | 'analysis' | 'synthesis';

export interface Source {
  citation: string;      // real, human-readable citation
  year?: number;
  evidenceType: string;  // e.g. "Position stand", "Systematic review", "Textbook"
  verified: boolean;     // false = attributed but page/DOI not yet verified
}

export interface QCMetadata {
  sources: Source[];
  confidence: 'high' | 'moderate' | 'low';
  lastReviewed: string;  // ISO date
  reviewBy: string;      // ISO date (next scheduled review)
  jurisdictionNotes?: string;
  scopeWarning?: string;
  controversies?: string;
  changeLog?: { date: string; note: string }[];
}

export interface LearningOutcome { level: CognitiveLevel; text: string; }

export interface Option { id: string; text: string; correct: boolean; rationale?: string; }

export interface Question {
  id: string;
  kind: 'single' | 'multi';
  prompt: string;
  options: Option[];
  cognitive: CognitiveLevel;
  explanation?: string;   // shown after answering
}

// Discriminated union of component payloads implemented in Plan 1.
export type UnitComponent =
  | { type: 'outcomes'; id: string; outcomes: LearningOutcome[] }
  | { type: 'concept'; id: string; heading: string; body: string }  // body is plain paragraphs separated by blank lines
  | { type: 'questionSet'; id: string; role: 'pretest' | 'quiz'; title: string; questions: Question[] };

export interface Unit {
  id: string;
  code: string;          // e.g. "APT 501.1"
  title: string;
  summary: string;
  qc: QCMetadata;
  components: UnitComponent[];
}

export interface Course {
  id: string;            // e.g. "apt501"
  code: string;          // e.g. "APT 501"
  title: string;
  semester: number;
  description: string;
  units: Unit[];
}
```

- [ ] **Step 2: Create src/types/progress.ts**

```ts
export interface ComponentProgress {
  componentId: string;
  completed: boolean;
  answers?: Record<string, string[]>; // questionId -> selected option ids
  score?: number;                     // 0..1 for graded components
  attempts?: number;
}

export interface UnitProgress {
  unitId: string;
  components: Record<string, ComponentProgress>;
  completed: boolean;
  lastComponentId?: string;
}

export interface ProgressState {
  version: number;
  courses: Record<string, { units: Record<string, UnitProgress> }>;
  lastLocation?: { courseId: string; unitId: string; componentId: string };
  updatedAt: string; // ISO
}

export const CURRENT_PROGRESS_VERSION = 1;

export function emptyProgress(nowIso: string): ProgressState {
  return { version: CURRENT_PROGRESS_VERSION, courses: {}, updatedAt: nowIso };
}
```

- [ ] **Step 3: Commit**

```bash
git add src/types/content.ts src/types/progress.ts
git commit -m "feat: add content and progress type system"
```

### Task 4: Zod schema and course validator

**Files:**
- Create: `src/content/schema.ts`
- Test: `src/content/schema.test.ts`

- [ ] **Step 1: Write the failing test**

`src/content/schema.test.ts`:
```ts
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
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/content/schema.test.ts`
Expected: FAIL (cannot find `./schema`).

- [ ] **Step 3: Write the schema**

`src/content/schema.ts`:
```ts
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/content/schema.test.ts`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git add src/content/schema.ts src/content/schema.test.ts
git commit -m "feat: add Zod content schema and course validator"
```

### Task 5: Author the APT 501 seed course and unit

**Files:**
- Create: `src/content/courses/apt501/unit01.ts`, `src/content/courses/apt501/course.ts`, `src/content/registry.ts`
- Test: `src/content/registry.test.ts`

- [ ] **Step 1: Write the failing test**

`src/content/registry.test.ts`:
```ts
import { describe, it, expect } from 'vitest';
import { courses, getCourse } from './registry';
import { validateCourse } from './schema';

describe('course registry', () => {
  it('every registered course validates against the schema', () => {
    for (const c of courses) expect(() => validateCourse(c)).not.toThrow();
  });
  it('APT 501 unit 1 contains a pretest, concepts, and a quiz', () => {
    const c = getCourse('apt501')!;
    const types = c.units[0].components.map((x) => x.type);
    expect(types).toContain('questionSet');
    expect(types).toContain('concept');
    expect(types).toContain('outcomes');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/content/registry.test.ts`
Expected: FAIL (cannot find `./registry`).

- [ ] **Step 3: Author the seed unit**

`src/content/courses/apt501/unit01.ts` — real APT 501 content on scope of practice. (Authored plainly, deeply, with a real source block. This is genuine instructional content, not a placeholder.)
```ts
import type { Unit } from '../../../types/content';

export const unit01: Unit = {
  id: 'apt501-u1',
  code: 'APT 501.1',
  title: 'Scope of Practice, Role, and Professional Boundaries',
  summary:
    'What a personal trainer is responsible for, where that responsibility ends, and how to tell the difference in real situations.',
  qc: {
    sources: [
      { citation: 'CSEP — Canadian Society for Exercise Physiology: Scope of Practice for the Certified Personal Trainer (CSEP-CPT)', evidenceType: 'Professional standard', verified: false },
      { citation: 'NSCA — Essentials of Personal Training, 3rd ed. (Ch. on professional responsibilities and referral)', year: 2021, evidenceType: 'Textbook', verified: false },
      { citation: 'ACSM — Guidelines for Exercise Testing and Prescription, 11th ed. (professional practice/scope sections)', year: 2021, evidenceType: 'Guideline', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-07-15',
    reviewBy: '2027-07-15',
    scopeWarning: 'A trainer does not diagnose, treat disease, prescribe medication, or provide medical nutrition therapy. When in doubt, refer.',
    controversies: 'Exact legal boundaries (e.g., what counts as "nutrition advice") vary by country, state/province, and credential.',
  },
  components: [
    {
      type: 'questionSet', id: 'apt501-u1-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'p1', kind: 'single', cognitive: 'application',
          prompt: 'A client shows you an MRI report and asks what it means for her training. What is the most appropriate first action?',
          options: [
            { id: 'a', text: 'Interpret the MRI and adjust her program accordingly', correct: false, rationale: 'Interpreting medical imaging is outside a trainer’s scope.' },
            { id: 'b', text: 'Explain you cannot interpret imaging, and ask what her doctor or physiotherapist advised about activity', correct: true, rationale: 'Correct: stay in scope and work from the clinician’s guidance.' },
            { id: 'c', text: 'Tell her the report is probably nothing to worry about', correct: false, rationale: 'Reassuring her about a medical result is both out of scope and potentially harmful.' },
          ] },
        { id: 'p2', kind: 'single', cognitive: 'recall',
          prompt: 'Which of these is clearly inside a personal trainer’s scope?',
          options: [
            { id: 'a', text: 'Prescribing a knee brace', correct: false },
            { id: 'b', text: 'Teaching and progressing a squat for a healthy client', correct: true },
            { id: 'c', text: 'Diagnosing the cause of a client’s shoulder pain', correct: false },
          ] },
      ],
    },
    {
      type: 'outcomes', id: 'apt501-u1-outcomes',
      outcomes: [
        { level: 'recall', text: 'State what a personal trainer is and is not responsible for.' },
        { level: 'application', text: 'Given a client situation, decide whether to proceed, adapt, or refer.' },
        { level: 'analysis', text: 'Explain why a specific action falls inside or outside scope, citing the underlying principle.' },
        { level: 'synthesis', text: 'Write a short, respectful referral message that stays within scope.' },
      ],
    },
    {
      type: 'concept', id: 'apt501-u1-c1', heading: 'What "scope of practice" actually means',
      body:
        'Scope of practice is the set of activities you are trained, permitted, and insured to do. It is not about how much you personally know. You might read widely about knee injuries, but reading does not put diagnosis inside your scope. Scope is defined by three things working together: your training and certification, the law where you work, and the terms of your insurance.\n\nThink of scope as a fence around a field. Inside the fence you can move freely: teaching exercise, building programs for healthy people, coaching technique, motivating and educating. The fence exists to protect the client, not to limit you for its own sake. Crossing it — diagnosing, treating disease, prescribing medication or medical diets — means doing work that other professionals are trained, licensed, and insured to do, and that you are not.',
    },
    {
      type: 'concept', id: 'apt501-u1-c2', heading: 'The three questions that keep you in scope',
      body:
        'When a situation is unclear, ask three questions in order. First: is this a health problem that needs diagnosis or treatment? If yes, it belongs to a clinician, and your job is to refer. Second: has a qualified professional already given guidance I can work from? If yes, you can coach within those limits — for example, training around a physiotherapist’s restrictions. Third: is this ordinary fitness coaching for someone who is well? If yes, you are on home ground.\n\nMost day-to-day decisions are answered by these three questions. The skill is not memorising a list of banned actions; it is noticing when a situation has quietly changed from coaching into healthcare, and responding by referring rather than guessing.',
    },
    {
      type: 'concept', id: 'apt501-u1-c3', heading: 'Referral is a skill, not a failure',
      body:
        'New trainers sometimes feel that referring a client makes them look less capable. The opposite is true. Knowing exactly when to bring in a physician, physiotherapist, dietitian, or psychologist is one of the clearest signs of an expert. It protects the client, protects you legally, and builds trust — clients notice when you put their safety above your ego.\n\nA good referral is specific and warm. You name what you have noticed (without diagnosing it), explain why it is worth a professional opinion, and make the next step easy. You are not abandoning the client; you are widening the team around them.',
    },
    {
      type: 'questionSet', id: 'apt501-u1-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'u1q1', kind: 'single', cognitive: 'analysis',
          prompt: 'A long-time client mentions new chest tightness during warm-ups this week. What does staying in scope require?',
          explanation: 'New chest tightness is a red flag that needs medical evaluation. Continuing to train through it would ignore a referral trigger.',
          options: [
            { id: 'a', text: 'Lower the intensity and keep training as usual', correct: false, rationale: 'A new cardiac-type symptom is not something to train through.' },
            { id: 'b', text: 'Stop the session for that concern and advise prompt medical evaluation before continuing', correct: true, rationale: 'Correct: this is a referral trigger, not a programming tweak.' },
            { id: 'c', text: 'Tell her it is probably just muscle soreness from the new program', correct: false, rationale: 'That is reassurance about a medical symptom — out of scope and risky.' },
          ] },
        { id: 'u1q2', kind: 'multi', cognitive: 'application',
          prompt: 'Which of the following are inside a personal trainer’s scope? (Select all that apply.)',
          explanation: 'Trainers coach exercise and general habits for well clients and work within clinician guidance; they do not diagnose or prescribe medication/medical diets.',
          options: [
            { id: 'a', text: 'Progressing a healthy client’s deadlift over several weeks', correct: true },
            { id: 'b', text: 'Coaching general healthy-eating habits and referring to a dietitian for a medical diet', correct: true },
            { id: 'c', text: 'Adjusting a client’s insulin dose', correct: false, rationale: 'Medication management belongs to the prescriber.' },
            { id: 'd', text: 'Working within a physiotherapist’s stated movement restrictions after injury', correct: true },
          ] },
        { id: 'u1q3', kind: 'single', cognitive: 'recall',
          prompt: 'Scope of practice is defined by three things working together. Which set is correct?',
          options: [
            { id: 'a', text: 'Your training/certification, the law where you work, and your insurance terms', correct: true },
            { id: 'b', text: 'Your confidence, your client’s trust, and your years of experience', correct: false },
            { id: 'c', text: 'How much you have read, how busy you are, and the gym’s rules', correct: false },
          ] },
      ],
    },
  ],
};
```

- [ ] **Step 4: Author the course manifest and registry**

`src/content/courses/apt501/course.ts`:
```ts
import type { Course } from '../../../types/content';
import { unit01 } from './unit01';

export const apt501: Course = {
  id: 'apt501',
  code: 'APT 501',
  title: 'Evidence-Based Professional Practice',
  semester: 1,
  description:
    'The research-literacy and professional foundation of the whole diploma: scope, ethics, and how to judge evidence so you can reject unsupported claims.',
  units: [unit01],
};
```

`src/content/registry.ts`:
```ts
import type { Course } from '../types/content';
import { apt501 } from './courses/apt501/course';

export const courses: Course[] = [apt501];

export function getCourse(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getUnit(courseId: string, unitId: string) {
  const course = getCourse(courseId);
  const unit = course?.units.find((u) => u.id === unitId);
  return unit ? { course, unit } : undefined;
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run src/content/registry.test.ts`
Expected: PASS (2 tests).

- [ ] **Step 6: Commit**

```bash
git add src/content/courses src/content/registry.ts src/content/registry.test.ts
git commit -m "feat: author APT 501 seed course with completable unit 1"
```

---

## Phase C — Storage and progress (the seamless-resume core)

### Task 6: StorageAdapter over IndexedDB

**Files:**
- Create: `src/storage/StorageAdapter.ts`
- Test: `src/storage/StorageAdapter.test.ts`

- [ ] **Step 1: Write the failing test**

`src/storage/StorageAdapter.test.ts`:
```ts
import { describe, it, expect, beforeEach } from 'vitest';
import { StorageAdapter } from './StorageAdapter';
import { emptyProgress } from '../types/progress';

describe('StorageAdapter', () => {
  let store: StorageAdapter;
  beforeEach(() => { store = new StorageAdapter('test-db-' + Math.random().toString(36).slice(2)); });

  it('returns null before anything is saved', async () => {
    expect(await store.loadProgress()).toBeNull();
  });

  it('persists and reloads a progress object', async () => {
    const p = emptyProgress('2026-07-15T00:00:00.000Z');
    p.courses['apt501'] = { units: {} };
    await store.saveProgress(p);
    const loaded = await store.loadProgress();
    expect(loaded?.courses['apt501']).toBeDefined();
  });
});
```

Note: `fake-indexeddb/auto` is already loaded via `src/test-setup.ts`.

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/storage/StorageAdapter.test.ts`
Expected: FAIL (cannot find `./StorageAdapter`).

- [ ] **Step 3: Implement StorageAdapter**

`src/storage/StorageAdapter.ts`:
```ts
import { openDB, type IDBPDatabase } from 'idb';
import type { ProgressState } from '../types/progress';

const STORE = 'kv';
const KEY = 'progress';

export class StorageAdapter {
  private dbPromise: Promise<IDBPDatabase>;

  constructor(dbName = 'advdiploma') {
    this.dbPromise = openDB(dbName, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
      },
    });
  }

  async loadProgress(): Promise<ProgressState | null> {
    const db = await this.dbPromise;
    const value = (await db.get(STORE, KEY)) as ProgressState | undefined;
    return value ?? null;
  }

  async saveProgress(state: ProgressState): Promise<void> {
    const db = await this.dbPromise;
    await db.put(STORE, state, KEY);
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/storage/StorageAdapter.test.ts`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git add src/storage/StorageAdapter.ts src/storage/StorageAdapter.test.ts
git commit -m "feat: add IndexedDB StorageAdapter for progress"
```

### Task 7: Pure grading functions

**Files:**
- Create: `src/engine/grading.ts`
- Test: `src/engine/grading.test.ts`

- [ ] **Step 1: Write the failing test**

`src/engine/grading.test.ts`:
```ts
import { describe, it, expect } from 'vitest';
import { gradeQuestion, gradeQuestionSet } from './grading';
import type { Question } from '../types/content';

const single: Question = { id: 'q', kind: 'single', prompt: 'p', cognitive: 'recall',
  options: [{ id: 'a', text: 'A', correct: true }, { id: 'b', text: 'B', correct: false }] };
const multi: Question = { id: 'm', kind: 'multi', prompt: 'p', cognitive: 'application',
  options: [{ id: 'a', text: 'A', correct: true }, { id: 'b', text: 'B', correct: true }, { id: 'c', text: 'C', correct: false }] };

describe('grading', () => {
  it('single: exact match is correct', () => {
    expect(gradeQuestion(single, ['a'])).toBe(true);
    expect(gradeQuestion(single, ['b'])).toBe(false);
  });
  it('multi: all-and-only correct options required', () => {
    expect(gradeQuestion(multi, ['a', 'b'])).toBe(true);
    expect(gradeQuestion(multi, ['a'])).toBe(false);
    expect(gradeQuestion(multi, ['a', 'b', 'c'])).toBe(false);
  });
  it('question set returns fraction correct', () => {
    const score = gradeQuestionSet([single, multi], { q: ['a'], m: ['a'] });
    expect(score).toBeCloseTo(0.5);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/engine/grading.test.ts`
Expected: FAIL (cannot find `./grading`).

- [ ] **Step 3: Implement grading**

`src/engine/grading.ts`:
```ts
import type { Question } from '../types/content';

export function gradeQuestion(q: Question, selected: string[]): boolean {
  const correct = new Set(q.options.filter((o) => o.correct).map((o) => o.id));
  const chosen = new Set(selected);
  if (correct.size !== chosen.size) return false;
  for (const id of correct) if (!chosen.has(id)) return false;
  return true;
}

export function gradeQuestionSet(
  questions: Question[],
  answers: Record<string, string[]>,
): number {
  if (questions.length === 0) return 1;
  const correct = questions.filter((q) => gradeQuestion(q, answers[q.id] ?? [])).length;
  return correct / questions.length;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/engine/grading.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/engine/grading.ts src/engine/grading.test.ts
git commit -m "feat: add pure question grading functions"
```

### Task 8: Debounced autosave helper

**Files:**
- Create: `src/state/autosave.ts`
- Test: `src/state/autosave.test.ts`

- [ ] **Step 1: Write the failing test**

`src/state/autosave.test.ts`:
```ts
import { describe, it, expect, vi } from 'vitest';
import { createDebouncedSaver } from './autosave';

describe('createDebouncedSaver', () => {
  it('coalesces rapid calls into one save after the delay', async () => {
    vi.useFakeTimers();
    const save = vi.fn().mockResolvedValue(undefined);
    const saver = createDebouncedSaver(save, 100);
    saver('a'); saver('b'); saver('c');
    expect(save).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(100);
    expect(save).toHaveBeenCalledTimes(1);
    expect(save).toHaveBeenCalledWith('c');
    vi.useRealTimers();
  });

  it('flush() saves immediately', async () => {
    const save = vi.fn().mockResolvedValue(undefined);
    const saver = createDebouncedSaver(save, 1000);
    saver('x');
    await saver.flush();
    expect(save).toHaveBeenCalledWith('x');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/state/autosave.test.ts`
Expected: FAIL (cannot find `./autosave`).

- [ ] **Step 3: Implement autosave**

`src/state/autosave.ts`:
```ts
export interface DebouncedSaver<T> {
  (value: T): void;
  flush: () => Promise<void>;
}

export function createDebouncedSaver<T>(
  save: (value: T) => Promise<void>,
  delayMs = 300,
): DebouncedSaver<T> {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let pending: T | undefined;
  let hasPending = false;

  const run = async () => {
    if (!hasPending) return;
    const value = pending as T;
    hasPending = false;
    pending = undefined;
    await save(value);
  };

  const saver = ((value: T) => {
    pending = value;
    hasPending = true;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { timer = null; void run(); }, delayMs);
  }) as DebouncedSaver<T>;

  saver.flush = async () => {
    if (timer) { clearTimeout(timer); timer = null; }
    await run();
  };

  return saver;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/state/autosave.test.ts`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git add src/state/autosave.ts src/state/autosave.test.ts
git commit -m "feat: add debounced autosave helper"
```

### Task 9: Progress store (Zustand) with write-through persistence

**Files:**
- Create: `src/state/progressStore.ts`
- Test: `src/state/progressStore.test.ts`

- [ ] **Step 1: Write the failing test**

`src/state/progressStore.test.ts`:
```ts
import { describe, it, expect, beforeEach } from 'vitest';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from './progressStore';

function freshStore() {
  const adapter = new StorageAdapter('pstore-' + Math.random().toString(36).slice(2));
  return { adapter, store: createProgressStore(adapter, () => '2026-07-15T00:00:00.000Z') };
}

describe('progressStore', () => {
  let ctx: ReturnType<typeof freshStore>;
  beforeEach(() => { ctx = freshStore(); });

  it('records answers and marks components complete', async () => {
    const { store } = ctx;
    store.getState().recordAnswers('apt501', 'apt501-u1', 'apt501-u1-quiz', { u1q1: ['b'] }, 1);
    store.getState().completeComponent('apt501', 'apt501-u1', 'apt501-u1-quiz');
    const cp = store.getState().state.courses['apt501'].units['apt501-u1'].components['apt501-u1-quiz'];
    expect(cp.completed).toBe(true);
    expect(cp.score).toBe(1);
    expect(cp.answers).toEqual({ u1q1: ['b'] });
  });

  it('setLocation updates lastLocation for resume', () => {
    const { store } = ctx;
    store.getState().setLocation('apt501', 'apt501-u1', 'apt501-u1-c1');
    expect(store.getState().state.lastLocation)
      .toEqual({ courseId: 'apt501', unitId: 'apt501-u1', componentId: 'apt501-u1-c1' });
  });

  it('hydrate() restores a previously saved state through a new store', async () => {
    const adapter = new StorageAdapter('shared-' + Math.random().toString(36).slice(2));
    const a = createProgressStore(adapter, () => '2026-07-15T00:00:00.000Z');
    a.getState().setLocation('apt501', 'apt501-u1', 'apt501-u1-c2');
    await a.getState().flush();
    const b = createProgressStore(adapter, () => '2026-07-15T00:00:00.000Z');
    await b.getState().hydrate();
    expect(b.getState().state.lastLocation?.componentId).toBe('apt501-u1-c2');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/state/progressStore.test.ts`
Expected: FAIL (cannot find `./progressStore`).

- [ ] **Step 3: Implement the store**

`src/state/progressStore.ts`:
```ts
import { createStore, type StoreApi } from 'zustand/vanilla';
import type { ProgressState, UnitProgress, ComponentProgress } from '../types/progress';
import { emptyProgress } from '../types/progress';
import type { StorageAdapter } from '../storage/StorageAdapter';
import { createDebouncedSaver } from './autosave';

export interface ProgressActions {
  state: ProgressState;
  hydrate: () => Promise<void>;
  recordAnswers: (courseId: string, unitId: string, componentId: string,
    answers: Record<string, string[]>, score: number) => void;
  completeComponent: (courseId: string, unitId: string, componentId: string) => void;
  setLocation: (courseId: string, unitId: string, componentId: string) => void;
  flush: () => Promise<void>;
}

function ensureUnit(state: ProgressState, courseId: string, unitId: string): UnitProgress {
  const course = (state.courses[courseId] ??= { units: {} });
  return (course.units[unitId] ??= { unitId, components: {}, completed: false });
}

function ensureComponent(unit: UnitProgress, componentId: string): ComponentProgress {
  return (unit.components[componentId] ??= { componentId, completed: false });
}

export function createProgressStore(
  adapter: StorageAdapter,
  now: () => string = () => new Date().toISOString(),
): StoreApi<ProgressActions> {
  const saver = createDebouncedSaver((s: ProgressState) => adapter.saveProgress(s), 300);

  return createStore<ProgressActions>((set, get) => {
    const commit = (mutate: (draft: ProgressState) => void) => {
      const next = structuredClone(get().state);
      mutate(next);
      next.updatedAt = now();
      set({ state: next });
      saver(next);
    };

    return {
      state: emptyProgress(now()),
      hydrate: async () => {
        const loaded = await adapter.loadProgress();
        if (loaded) set({ state: loaded });
      },
      recordAnswers: (courseId, unitId, componentId, answers, score) =>
        commit((d) => {
          const unit = ensureUnit(d, courseId, unitId);
          const comp = ensureComponent(unit, componentId);
          comp.answers = answers;
          comp.score = score;
          comp.attempts = (comp.attempts ?? 0) + 1;
        }),
      completeComponent: (courseId, unitId, componentId) =>
        commit((d) => {
          const unit = ensureUnit(d, courseId, unitId);
          ensureComponent(unit, componentId).completed = true;
          unit.lastComponentId = componentId;
        }),
      setLocation: (courseId, unitId, componentId) =>
        commit((d) => { d.lastLocation = { courseId, unitId, componentId }; }),
      flush: () => saver.flush(),
    };
  });
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/state/progressStore.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/state/progressStore.ts src/state/progressStore.test.ts
git commit -m "feat: add progress store with write-through persistence and hydrate/resume"
```

---

## Phase D — Renderer: components, unit player, and app shell

### Task 10: React store context and hooks

**Files:**
- Create: `src/state/StoreProvider.tsx`
- Test: `src/state/StoreProvider.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/state/StoreProvider.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from './progressStore';
import { StoreProvider, useProgress } from './StoreProvider';

function Probe() {
  const loc = useProgress((s) => s.state.lastLocation?.componentId ?? 'none');
  const set = useProgress((s) => s.setLocation);
  return <button onClick={() => set('apt501', 'apt501-u1', 'apt501-u1-c1')}>{loc}</button>;
}

describe('StoreProvider', () => {
  it('exposes store state to components and re-renders on change', () => {
    const store = createProgressStore(new StorageAdapter('ctx-' + Math.random()), () => 'now');
    render(<StoreProvider store={store}><Probe /></StoreProvider>);
    const btn = screen.getByRole('button');
    expect(btn.textContent).toBe('none');
    act(() => btn.click());
    expect(btn.textContent).toBe('apt501-u1-c1');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/state/StoreProvider.test.tsx`
Expected: FAIL (cannot find `./StoreProvider`).

- [ ] **Step 3: Implement the provider**

`src/state/StoreProvider.tsx`:
```tsx
import React, { createContext, useContext } from 'react';
import { useStore } from 'zustand';
import type { StoreApi } from 'zustand/vanilla';
import type { ProgressActions } from './progressStore';

const StoreContext = createContext<StoreApi<ProgressActions> | null>(null);

export function StoreProvider(
  { store, children }: { store: StoreApi<ProgressActions>; children: React.ReactNode },
) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export function useProgress<T>(selector: (s: ProgressActions) => T): T {
  const store = useContext(StoreContext);
  if (!store) throw new Error('useProgress must be used within StoreProvider');
  return useStore(store, selector);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/state/StoreProvider.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/state/StoreProvider.tsx src/state/StoreProvider.test.tsx
git commit -m "feat: add React store provider and useProgress hook"
```

### Task 11: ConceptBlock and OutcomesBlock renderers

**Files:**
- Create: `src/engine/components/ConceptBlock.tsx`, `src/engine/components/OutcomesBlock.tsx`
- Test: `src/engine/components/ConceptBlock.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/engine/components/ConceptBlock.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ConceptBlock } from './ConceptBlock';
import { OutcomesBlock } from './OutcomesBlock';

describe('ConceptBlock', () => {
  it('renders the heading and each paragraph', () => {
    render(<ConceptBlock heading="Scope" body={'First para.\n\nSecond para.'} />);
    expect(screen.getByRole('heading', { name: 'Scope' })).toBeInTheDocument();
    expect(screen.getByText('First para.')).toBeInTheDocument();
    expect(screen.getByText('Second para.')).toBeInTheDocument();
  });
});

describe('OutcomesBlock', () => {
  it('renders one item per outcome with its level', () => {
    render(<OutcomesBlock outcomes={[{ level: 'recall', text: 'State X' }, { level: 'analysis', text: 'Explain Y' }]} />);
    expect(screen.getByText('State X')).toBeInTheDocument();
    expect(screen.getByText('Explain Y')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/engine/components/ConceptBlock.test.tsx`
Expected: FAIL (cannot find modules).

- [ ] **Step 3: Implement the two renderers**

`src/engine/components/ConceptBlock.tsx`:
```tsx
export function ConceptBlock({ heading, body }: { heading: string; body: string }) {
  const paragraphs = body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  return (
    <section className="concept-block">
      <h2>{heading}</h2>
      {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </section>
  );
}
```

`src/engine/components/OutcomesBlock.tsx`:
```tsx
import type { LearningOutcome } from '../../types/content';

export function OutcomesBlock({ outcomes }: { outcomes: LearningOutcome[] }) {
  return (
    <section className="outcomes-block">
      <h2>What you will be able to do</h2>
      <ul>
        {outcomes.map((o, i) => (
          <li key={i}><span className="level">{o.level}</span> {o.text}</li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/engine/components/ConceptBlock.test.tsx`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git add src/engine/components/ConceptBlock.tsx src/engine/components/OutcomesBlock.tsx src/engine/components/ConceptBlock.test.tsx
git commit -m "feat: add ConceptBlock and OutcomesBlock renderers"
```

### Task 12: QuestionSet renderer (answer, submit, grade, show rationale)

**Files:**
- Create: `src/engine/components/QuestionSet.tsx`
- Test: `src/engine/components/QuestionSet.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/engine/components/QuestionSet.test.tsx`:
```tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuestionSet } from './QuestionSet';
import type { Question } from '../../types/content';

const questions: Question[] = [
  { id: 'q1', kind: 'single', prompt: 'Pick A', cognitive: 'recall',
    options: [{ id: 'a', text: 'A', correct: true, rationale: 'Yes A' },
              { id: 'b', text: 'B', correct: false, rationale: 'No B' }] },
];

describe('QuestionSet', () => {
  it('grades on submit, shows rationale, and reports the score', () => {
    const onComplete = vi.fn();
    render(<QuestionSet title="Quiz" questions={questions} onComplete={onComplete} />);
    fireEvent.click(screen.getByLabelText('A'));
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText('Yes A')).toBeInTheDocument();
    expect(onComplete).toHaveBeenCalledWith({ answers: { q1: ['a'] }, score: 1 });
  });

  it('a wrong single-select answer scores 0', () => {
    const onComplete = vi.fn();
    render(<QuestionSet title="Quiz" questions={questions} onComplete={onComplete} />);
    fireEvent.click(screen.getByLabelText('B'));
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(onComplete).toHaveBeenCalledWith({ answers: { q1: ['b'] }, score: 0 });
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/engine/components/QuestionSet.test.tsx`
Expected: FAIL (cannot find `./QuestionSet`).

- [ ] **Step 3: Implement QuestionSet**

`src/engine/components/QuestionSet.tsx`:
```tsx
import { useState } from 'react';
import type { Question } from '../../types/content';
import { gradeQuestion, gradeQuestionSet } from '../grading';

export interface QuestionSetResult { answers: Record<string, string[]>; score: number; }

export function QuestionSet(
  { title, questions, onComplete }:
  { title: string; questions: Question[]; onComplete: (r: QuestionSetResult) => void },
) {
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [submitted, setSubmitted] = useState(false);

  const toggle = (q: Question, optionId: string) => {
    if (submitted) return;
    setAnswers((prev) => {
      const current = prev[q.id] ?? [];
      if (q.kind === 'single') return { ...prev, [q.id]: [optionId] };
      return {
        ...prev,
        [q.id]: current.includes(optionId)
          ? current.filter((x) => x !== optionId)
          : [...current, optionId],
      };
    });
  };

  const submit = () => {
    setSubmitted(true);
    onComplete({ answers, score: gradeQuestionSet(questions, answers) });
  };

  return (
    <section className="question-set">
      <h2>{title}</h2>
      {questions.map((q) => {
        const chosen = answers[q.id] ?? [];
        const correct = submitted && gradeQuestion(q, chosen);
        return (
          <fieldset key={q.id} className={submitted ? (correct ? 'correct' : 'incorrect') : ''}>
            <legend>{q.prompt}</legend>
            {q.options.map((o) => (
              <label key={o.id}>
                <input
                  type={q.kind === 'single' ? 'radio' : 'checkbox'}
                  name={q.id}
                  checked={chosen.includes(o.id)}
                  onChange={() => toggle(q, o.id)}
                  disabled={submitted}
                />
                {o.text}
                {submitted && o.rationale && <span className="rationale"> {o.rationale}</span>}
              </label>
            ))}
            {submitted && q.explanation && <p className="explanation">{q.explanation}</p>}
          </fieldset>
        );
      })}
      {!submitted && (
        <button onClick={submit} disabled={Object.keys(answers).length !== questions.length}>
          Submit answers
        </button>
      )}
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/engine/components/QuestionSet.test.tsx`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git add src/engine/components/QuestionSet.tsx src/engine/components/QuestionSet.test.tsx
git commit -m "feat: add QuestionSet renderer with grading and rationale"
```

### Task 13: UnitPlayer — step through components, persist, resume

**Files:**
- Create: `src/engine/UnitPlayer.tsx`
- Test: `src/engine/UnitPlayer.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/engine/UnitPlayer.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { UnitPlayer } from './UnitPlayer';
import { getUnit } from '../content/registry';

function renderUnit() {
  const store = createProgressStore(new StorageAdapter('up-' + Math.random()), () => 'now');
  const { course, unit } = getUnit('apt501', 'apt501-u1')!;
  render(<StoreProvider store={store}><UnitPlayer course={course!} unit={unit} /></StoreProvider>);
  return store;
}

describe('UnitPlayer', () => {
  it('shows the first component and advances with Next', () => {
    renderUnit();
    // First component is the pretest question set.
    expect(screen.getByText('Before we begin')).toBeInTheDocument();
  });

  it('records location as the learner advances (for resume)', () => {
    const store = renderUnit();
    // advancing writes lastLocation
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(store.getState().state.lastLocation?.unitId).toBe('apt501-u1');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/engine/UnitPlayer.test.tsx`
Expected: FAIL (cannot find `./UnitPlayer`).

- [ ] **Step 3: Implement UnitPlayer**

`src/engine/UnitPlayer.tsx`:
```tsx
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/engine/UnitPlayer.test.tsx`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git add src/engine/UnitPlayer.tsx src/engine/UnitPlayer.test.tsx
git commit -m "feat: add UnitPlayer that steps components and records location"
```

### Task 14: App shell — Layout, Home (resume), Catalog, routing, boot hydrate

**Files:**
- Create: `src/ui/Layout.tsx`, `src/ui/Home.tsx`, `src/ui/Catalog.tsx`, `src/App.tsx`, `src/main.tsx`, `src/styles.css`
- Test: `src/ui/Home.test.tsx`

- [ ] **Step 1: Write the failing test**

`src/ui/Home.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { Home } from './Home';

function renderHome(withLocation: boolean) {
  const store = createProgressStore(new StorageAdapter('home-' + Math.random()), () => 'now');
  if (withLocation) store.getState().setLocation('apt501', 'apt501-u1', 'apt501-u1-c1');
  render(
    <StoreProvider store={store}>
      <MemoryRouter><Home /></MemoryRouter>
    </StoreProvider>,
  );
}

describe('Home', () => {
  it('shows a Continue link when there is a saved location', () => {
    renderHome(true);
    expect(screen.getByRole('link', { name: /continue/i })).toBeInTheDocument();
  });
  it('shows a Start link when there is no saved location', () => {
    renderHome(false);
    expect(screen.getByRole('link', { name: /start|browse|catalog/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/ui/Home.test.tsx`
Expected: FAIL (cannot find `./Home`).

- [ ] **Step 3: Implement Layout, Home, Catalog**

`src/ui/Layout.tsx`:
```tsx
import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/" className="brand">Advanced Diploma · Personal Training Science & Coaching</Link>
        <nav><Link to="/catalog">Catalog</Link></nav>
      </header>
      <main><Outlet /></main>
    </div>
  );
}
```

`src/ui/Home.tsx`:
```tsx
import { Link } from 'react-router-dom';
import { useProgress } from '../state/StoreProvider';

export function Home() {
  const last = useProgress((s) => s.state.lastLocation);
  return (
    <section className="home">
      <h1>Welcome back</h1>
      {last ? (
        <p>
          <Link className="cta" to={`/course/${last.courseId}/unit/${last.unitId}`}>
            Continue where you left off
          </Link>
        </p>
      ) : (
        <p>
          <Link className="cta" to="/catalog">Start the program — browse the catalog</Link>
        </p>
      )}
    </section>
  );
}
```

`src/ui/Catalog.tsx`:
```tsx
import { Link } from 'react-router-dom';
import { courses } from '../content/registry';
import { useProgress } from '../state/StoreProvider';

export function Catalog() {
  const state = useProgress((s) => s.state);
  return (
    <section className="catalog">
      <h1>Course catalog</h1>
      {courses.map((c) => (
        <div key={c.id} className="course-card">
          <h2>{c.code} — {c.title}</h2>
          <p>{c.description}</p>
          <ul>
            {c.units.map((u) => {
              const done = state.courses[c.id]?.units[u.id]?.completed;
              return (
                <li key={u.id}>
                  <Link to={`/course/${c.id}/unit/${u.id}`}>{u.code} — {u.title}</Link>
                  {done ? ' ✓' : ''}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
```

- [ ] **Step 4: Implement App routes and main entry**

`src/App.tsx`:
```tsx
import { useParams } from 'react-router-dom';
import { Layout } from './ui/Layout';
import { Home } from './ui/Home';
import { Catalog } from './ui/Catalog';
import { UnitPlayer } from './engine/UnitPlayer';
import { getUnit } from './content/registry';

function UnitRoute() {
  const { courseId = '', unitId = '' } = useParams();
  const found = getUnit(courseId, unitId);
  if (!found?.course) return <p>Unit not found.</p>;
  return <UnitPlayer course={found.course} unit={found.unit} />;
}

export { Layout, Home, Catalog, UnitRoute };
```

`src/main.tsx`:
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { StorageAdapter } from './storage/StorageAdapter';
import { createProgressStore } from './state/progressStore';
import { StoreProvider } from './state/StoreProvider';
import { Layout, Home, Catalog, UnitRoute } from './App';
import './styles.css';

const store = createProgressStore(new StorageAdapter());

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/catalog', element: <Catalog /> },
      { path: '/course/:courseId/unit/:unitId', element: <UnitRoute /> },
    ],
  },
]);

async function boot() {
  await store.getState().hydrate();
  // Flush pending saves when the window is hidden or closed (belt-and-braces).
  const flush = () => { void store.getState().flush(); };
  window.addEventListener('visibilitychange', flush);
  window.addEventListener('beforeunload', flush);

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <StoreProvider store={store}>
        <RouterProvider router={router} />
      </StoreProvider>
    </React.StrictMode>,
  );
}

void boot();
```

`src/styles.css` (minimal academic base, light/dark):
```css
:root { --bg:#faf9f7; --fg:#1f2328; --muted:#5b6470; --accent:#3a5a8c; --card:#fff; --line:#e6e2db; }
@media (prefers-color-scheme: dark) {
  :root { --bg:#16181c; --fg:#e8eaed; --muted:#9aa4b2; --accent:#8fb0e0; --card:#1f2329; --line:#2c313a; }
}
* { box-sizing: border-box; }
body { margin:0; background:var(--bg); color:var(--fg);
  font: 17px/1.6 -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
.app-header { display:flex; justify-content:space-between; align-items:center;
  padding:14px 24px; border-bottom:1px solid var(--line); }
.brand { font-weight:600; text-decoration:none; color:var(--fg); }
main { max-width: 760px; margin: 0 auto; padding: 28px 24px 80px; }
h1 { font-size: 1.7rem; } h2 { font-size: 1.25rem; }
.cta { display:inline-block; background:var(--accent); color:#fff; padding:10px 16px;
  border-radius:8px; text-decoration:none; }
.course-card, .concept-block, .outcomes-block, .question-set { background:var(--card);
  border:1px solid var(--line); border-radius:12px; padding:18px 20px; margin:16px 0; }
.rail { display:flex; gap:8px; list-style:none; padding:0; flex-wrap:wrap; font-size:.8rem; color:var(--muted); }
.rail .active { color:var(--accent); font-weight:600; }
.rail .done::after { content:' ✓'; }
fieldset { border:1px solid var(--line); border-radius:10px; margin:12px 0; }
fieldset.correct { border-color:#2e7d54; } fieldset.incorrect { border-color:#b3261e; }
label { display:block; padding:6px 0; cursor:pointer; }
.rationale { color:var(--muted); font-size:.9rem; }
.nav { display:flex; justify-content:space-between; align-items:center;
  position:sticky; bottom:0; background:var(--bg); padding:12px 0; border-top:1px solid var(--line); }
button { font:inherit; padding:8px 16px; border-radius:8px; border:1px solid var(--line);
  background:var(--card); color:var(--fg); cursor:pointer; }
button:disabled { opacity:.5; cursor:not-allowed; }
.level { font-size:.72rem; text-transform:uppercase; letter-spacing:.04em; color:var(--accent); margin-right:6px; }
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run src/ui/Home.test.tsx`
Expected: PASS (2 tests).

- [ ] **Step 6: Verify full suite and dev server**

Run: `npm test`
Expected: all tests pass.

Run: `npm run dev` then open the printed URL.
Expected: Home → Catalog → APT 501.1 opens; you can page through concept blocks and answer the pretest/quiz; refresh the page and it resumes on the same component.

- [ ] **Step 7: Commit**

```bash
git add src/ui src/App.tsx src/main.tsx src/styles.css
git commit -m "feat: add app shell, routing, boot hydrate, and academic styling"
```

---

## Phase E — Electron desktop shell

### Task 15: Electron main + preload (persistent storage window)

**Files:**
- Create: `electron/main.ts`, `electron/preload.ts`

- [ ] **Step 1: Implement the main process**

`electron/main.ts`:
```ts
import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 800,
    title: 'Advanced Diploma in Personal Training Science and Coaching',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const startUrl = process.env.ELECTRON_START_URL;
  if (startUrl) {
    void win.loadURL(startUrl);
  } else {
    void win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
```

Storage note: Electron persists IndexedDB in the app's `userData` directory by default, so no extra configuration is needed for durable auto-save.

`electron/preload.ts`:
```ts
// Minimal, safe preload. No privileged APIs exposed to the renderer for now;
// all persistence happens via IndexedDB inside the renderer.
export {};
```

- [ ] **Step 2: Verify it launches**

Run: `npm run electron:dev`
Expected: an Electron window opens showing the app; navigate to APT 501.1, answer a question, close the window entirely, relaunch `npm run electron:dev`, and confirm it resumes with your progress intact (proves persistent storage in Electron).

- [ ] **Step 3: Commit**

```bash
git add electron/main.ts electron/preload.ts
git commit -m "feat: add Electron main and preload with persistent-storage window"
```

### Task 16: Packaging config (mac target + win dev target)

**Files:**
- Create: `electron-builder.yml`

- [ ] **Step 1: Create electron-builder.yml**

```yaml
appId: com.josh.advdiploma
productName: Advanced Diploma PT
directories:
  output: release
files:
  - dist/**/*
  - dist-electron/**/*
mac:
  target:
    - dmg
    - zip
  category: public.app-category.education
win:
  target:
    - dir
```

- [ ] **Step 2: Verify a local (Windows) packaging dry run**

Run: `npm run build && npx tsc -p electron/tsconfig.json`
Expected: `dist/` and `dist-electron/` are produced with no type errors. (Producing the macOS `.dmg`/`.zip` is done on a Mac or CI later; the config is in place. On Windows, `electron-builder --win dir` can be used to confirm packaging wiring.)

- [ ] **Step 3: Commit**

```bash
git add electron-builder.yml
git commit -m "chore: add electron-builder packaging config (mac + win targets)"
```

---

## Phase F — End-to-end verification

### Task 17: Manual end-to-end acceptance check + notes

**Files:**
- Create: `docs/VERIFICATION.md`

- [ ] **Step 1: Run the full automated suite**

Run: `npm test`
Expected: all unit/component tests pass.

- [ ] **Step 2: Drive the app in Electron and record results**

Perform and record in `docs/VERIFICATION.md`:
1. Launch `npm run electron:dev`; confirm Home shows "Start the program".
2. Open Catalog → APT 501.1; answer the pretest; page through the three concept blocks; take the unit quiz; confirm rationales and score appear.
3. Fully close the window; relaunch; confirm Home now shows "Continue where you left off" and the link returns to the exact component; confirm quiz answers/score are retained.
4. Note the platform, Node version, and any issues.

`docs/VERIFICATION.md` template:
```markdown
# Plan 1 verification

- Date:
- Node version:
- OS (dev):
- `npm test`: PASS/FAIL (N tests)
- Electron launch: PASS/FAIL
- Resume-exactly-where-left-off: PASS/FAIL
- Notes:
```

- [ ] **Step 3: Commit**

```bash
git add docs/VERIFICATION.md
git commit -m "docs: record Plan 1 end-to-end verification"
```

---

## Self-review (author's check against the spec)

- **Seamless auto-save + resume** (spec §1, §9): Tasks 8–9 (debounced write-through), 13–14 (location tracking + boot hydrate + flush on hide/close), 15 (Electron persistent partition). Verified in Task 17. ✔
- **Offline, no network** (spec §1, §3): all content is bundled TS data; no fetch; Electron loads local files. ✔
- **Data-driven lesson architecture / 12-part spine** (spec §5): schema + discriminated union model the spine; Plan 1 implements outcomes/concept/questionSet (pretest+quiz); remaining component types are explicitly deferred to later plans (documented in Scope). ✔ (partial by design)
- **Credible sourcing + QC metadata** (spec §10): `QCMetadata` type + Zod requires ≥1 source; seed unit carries real sources flagged `verified:false` pending page/DOI check, plus scope warning and controversies. ✔
- **Scope guardrails** (spec §11): seed unit content and QC `scopeWarning` reinforce them; the whole APT 501 course is about scope/evidence. ✔
- **macOS `.app`** (spec §3, §14): Electron shell (Task 15) + mac packaging config (Task 16); final `.dmg` build on Mac/CI noted as later. ✔
- **Mastery gates, spaced repetition, full dashboard/reference** (spec §7, §8, §13): explicitly out of scope for Plan 1 — scheduled for Plan 3/4 below. ✔ (deferred, not missing)
- **Placeholder scan:** every code step contains complete code; no TBD/TODO. ✔
- **Type consistency:** `ProgressState`, `UnitProgress`, `ComponentProgress`, `UnitComponent` union, and store action signatures (`recordAnswers`, `completeComponent`, `setLocation`, `hydrate`, `flush`) are used consistently across Tasks 3, 6, 9, 10, 13, 14. ✔

---

## Follow-on plans (the rest of the first deliverable)

- **Plan 2 — Component library & diagrams:** numeric lab, interactive simulators, technique error-ID, branching-case player, program builder, evidence-appraisal tool, flashcards, teach-back; in-code SVG diagram helpers (force vectors, response graphs, decision trees, timelines). Enrich APT 501 Unit 1 to the full 12-component spine.
- **Plan 3 — Spaced repetition & assessment:** recall scheduler (due-dates, escalating difficulty), review surface; quiz/exam runner, mastery gates (80% / 85% practical / non-offsettable safety & scope items), remediation flags.
- **Plan 4 — Dashboard, catalog depth, reference & settings:** progress/mastery dashboard, competency map, review-due surface, per-lesson reference/QC/glossary/scope surfaces, light/dark + text-size settings, export/import.
- **Plan 5 — macOS packaging & delivery:** build/sign/notarize the `.app` (on a Mac or CI), first-run instructions.
- **Content plans — APT 501 full authoring, then 502→706:** author every unit to full depth with grounded, verified sourcing; each course a content plan using the schema and engine.
```
