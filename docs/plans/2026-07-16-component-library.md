# Plan 2 — Component Library, Diagrams & APT 501.1 Full Spine

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:executing-plans (inline).
> **Format note:** this plan is deliberately tighter than Plan 1: it locks interfaces
> (exact schema/types, grading semantics, progress encoding, content requirements) and
> leaves renderer JSX to be written once, TDD, by the executor in the same session.
> Every task still lists files, failing-test-first steps, and a commit.

**Goal:** All engine component types APT 501 needs, in-code SVG diagram support, and APT 501 Unit 1 enriched to the full 12-component lesson spine at real depth.

**Architecture:** Extend the `UnitComponent` discriminated union (zod schema is the single source of truth; the compile-checked `completesOn` map + exhaustive switch force every new type to be wired). Each new type = schema + renderer + grading, recorded through the existing `recordAnswers`/`completeComponent` store actions with **no progress-model change** (stays v1). Diagrams are React SVG components in a registry, referenced from content by id.

**Tech stack:** unchanged (React 19, TS 7, zod 4, Vitest 4, Zustand 5).

**Deliberately deferred (YAGNI until a course uses them):** interactive simulators (BP gauge — Semester 2), program builder (training-methods courses), force-vector/timeline SVG helpers. They get their own plan alongside the courses that need them.

---

## New component types (the interface contract)

All ids `z.string().min(1)`. Progress encoding uses the existing
`answers: Record<string, string[]>` — reserved keys start with `__`.

| type | payload (beyond `type`,`id`) | completes | grading / progress encoding |
|---|---|---|---|
| `visual` | `title`, `diagramId`, `caption`, `callouts: {id,label,text}[]` (≥1) | view | none |
| `workedExample` | `title`, `scenario`, `steps: {id,title,reasoning}[]` (≥2), `takeaway` | view | none (steps revealed one by one) |
| `classification` | `title`, `instructions`, `buckets: {id,label}[]` (≥2), `items: {id,text,bucketId,rationale}[]` (≥1) | submit | score = correctly bucketed / total; `answers[itemId]=[chosenBucketId]` |
| `numericLab` | `title`, `brief`, `fields: {id,label,unit?,answer:number,tolerance:number}[]` (≥1), `solution` (worked solution text) | submit | field correct iff `abs(entered-answer)<=tolerance`; score = correct/total; `answers[fieldId]=[enteredString]` |
| `errorId` | `title`, `brief`, `document: string` (the artifact under review), `findings: {id,text,isError:boolean,rationale}[]` (≥2) | submit | exact-set on flagged ids (flag all real errors, no false flags → per-item: flagged==isError); score = correct judgements/total; `answers['__flags']=[flaggedIds]` |
| `branchingCase` | `title`, `brief`, `nodes: {id,situation,choices:{id,text,to:string\|null,quality:'best'\|'acceptable'\|'poor',feedback}[]}[]`, `startNodeId` | submit (terminal reached) | score = Σ quality points (best=1, acceptable=0.5, poor=0) / decisions made; `answers['__path']=[choiceIds]` |
| `evidenceAppraisal` | `title`, `brief`, `hierarchy: string[]` (shown), `claims: {id,claim,evidenceDescription,correctLevel,rationale}[]` (≥1), `briefPrompt`, `modelBrief` | submit | score = correct level picks/claims; `answers[claimId]=[level]`, `answers['__brief']=[text]` (self-checked vs model, ungraded) |
| `recallSet` | `title`, `cards: {id,front,back}[]` (≥1) | submit (all cards self-graded) | ungraded (score=1 when done); `answers[cardId]=['good'\|'again']` — Plan 3's scheduler consumes these |
| `teachBack` | `title`, `prompt`, `modelAnswer`, `rubric: {id,text}[]` (≥2) | submit | score = self-checked rubric items/total; `answers['__response']=[text]`, `answers['__rubric']=[checkedIds]` |

Plus: `questionSet.role` enum gains `'cumulative'` (unit-final review reusing the existing renderer — no new component).

`completesOn` additions: view → `visual`, `workedExample`; submit → everything else.

Zod refinements per type: unique ids in `callouts`/`steps`/`items`/`buckets`/`fields`/`findings`/`nodes`/`claims`/`cards`/`rubric`; `classification.items[].bucketId` must exist in `buckets`; `branchingCase.startNodeId` and every `choice.to` (non-null) must exist in `nodes`; every `branchingCase` must have ≥1 terminal path (a reachable choice with `to:null`).

## Renderer behavioural contract (what the tests assert)

Every graded renderer follows the `QuestionSet` pattern: local state, `initialAnswers`/`initialSubmitted` props restore a graded attempt locked + scored, single `onComplete({answers, score})`, rationale/feedback + score line shown after submit, submit disabled until the interaction is complete (all items placed / fields filled / cards graded / terminal node reached / etc.).

- `visual`: renders the diagram from the registry + numbered callouts; unknown `diagramId` → placeholder box (never crash).
- `workedExample`: shows scenario; "Reveal next step" until all steps out, then takeaway. Restored state shows everything.
- `branchingCase`: shows current node + choices; choosing appends to path and moves to `to`; `to:null` → outcome summary (per-decision feedback + score) → onComplete.
- `recallSet`: card front → "Show answer" → back + "Knew it"/"Again" buttons; after last card, summary + onComplete.
- `teachBack`: textarea → submit reveals model answer + rubric checklist → learner self-checks → confirm → onComplete with rubric score.

## File map

- `src/types/content.ts` — extend `UnitComponent` union + payload interfaces.
- `src/content/schema.ts` — matching zod schemas + refinements (Equals assertion keeps both honest).
- `src/engine/components/` — one file per renderer + colocated `.test.tsx`:
  `Visual.tsx`, `WorkedExample.tsx`, `Classification.tsx`, `NumericLab.tsx`,
  `ErrorId.tsx`, `BranchingCase.tsx`, `EvidenceAppraisal.tsx`, `RecallSet.tsx`, `TeachBack.tsx`.
- `src/engine/diagrams/` — `registry.ts` (`Record<string, FC>`), `ScopeDecisionTree.tsx` + test.
- `src/engine/UnitPlayer.tsx` — `completesOn` entries + switch cases (compiler enforces).
- `src/content/courses/apt501/unit01.ts` — full 12-component spine.
- `src/styles.css` — minimal styles for new components.
- `scripts/e2e-drive.mjs` — update component-count expectations (run needs Josh's permission).
- `docs/VERIFICATION.md`, `README.md`, `docs/HANDOFF.md` — refresh at the end.

---

### Task 1: schema + types for all nine components (wired to placeholder)

- [ ] Failing zod tests: one accept + key reject per type (missing diagram callouts, dangling `bucketId`, dangling `choice.to`, missing terminal path, `role:'cumulative'` accepted).
- [ ] Extend `types/content.ts` + `schema.ts`; `Equals` assertion must stay green.
- [ ] Add all nine `completesOn` entries; add switch cases returning the existing placeholder `<p className="unsupported">` for now (compilation forces this immediately).
- [ ] Suite green → commit `feat: content schema for the nine Plan 2 component types`.

### Tasks 2–10: one renderer per task (order: Visual, WorkedExample, Classification, NumericLab, ErrorId, BranchingCase, EvidenceAppraisal, RecallSet, TeachBack)

Each task: failing render/interaction/restore tests per the behavioural contract → minimal renderer → replace the placeholder switch case → suite green → commit `feat: <Type> renderer`. Diagram registry + `ScopeDecisionTree` (annotated train/modify/refer/terminate decision tree SVG) land inside the Visual task.

### Task 11: APT 501.1 authored to the full 12-component spine

Spine order: pretest · outcomes (all four cognitive levels incl. synthesis) · concepts (expand to 5 deep blocks: the legal/regulatory landscape; scope vs competence; the allied-health map & when each referral applies; negligence, standard of care & documentation; working agreements/consent/boundaries) · visual (ScopeDecisionTree) · workedExample (mid-session knee-pain scope decision) · classification lab (within scope / refer / collaborate, 8 scenarios) · branchingCase (new-client consult with red-flag disclosure) · errorId (trainer bio + program document with scope/marketing violations) · recallSet (≥8 cards) · quiz (grow toward the 20/40/30/10 recall/application/analysis/synthesis mix, incl. ≥1 synthesis item) · teachBack (explain scope boundaries client-friendly) · cumulative questionSet (`role:'cumulative'`).

Content bar (non-negotiable): graduate-diploma depth, plain language; **real sources only** — CSEP scope-of-practice standard, NSCA *Essentials of Personal Training* 3rd ed. (legal aspects/professional boundaries chapters), ACSM *Guidelines* 11th ed. (preparticipation screening), ACSM Code of Ethics; all flagged `verified:false` until page-level check; scope guardrails (§11 of the spec) woven through; QC metadata updated (confidence, controversies, review date).

- [ ] Failing test first: unit01 has 12+ components in spine order, validates against the schema, quiz has ≥1 of each cognitive level.
- [ ] Author content → suite green → commit `content: APT 501.1 full 12-component spine`.

### Task 12: integration + docs

- [ ] UnitPlayer integration test: walk the full enriched unit to 100% completion with a real store.
- [ ] Update `scripts/e2e-drive.mjs` expectations (component count, new flow) — **live run only with Josh's permission**.
- [ ] Refresh README/VERIFICATION/HANDOFF status; commit `docs: Plan 2 status`.
- [ ] Code review (requesting-code-review) before merge; merge on Josh's sign-off.

## Acceptance

- Suite green, typecheck clean (app + electron + vite config).
- APT 501.1 completable end-to-end through all 12 components with grading + restore-locked state on every graded type.
- Content meets the depth bar with real, flagged sources.
