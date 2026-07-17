# Advanced Diploma in Personal Training Science and Coaching

An offline, interactive, university-level course application. The learner works entirely inside a macOS desktop app: deep evidence-based lessons, annotated diagrams, interactive labs, branching client cases, quizzes, spaced recall, and a progress/mastery system. It auto-saves every action and resumes exactly where she left off.

> **New here / next session? Read `docs/HANDOFF.md` first** — it says exactly where we stopped and what to do next.

## Status (as of 2026-07-16)

**Plan 1 (Platform Foundation): complete, verified, review-hardened, merged to `master`.**
**Plan 2 (Component Library & Diagrams): complete, verified live (19/19), merged to `master`** — all nine new engine component types plus the in-code SVG diagram registry, and APT 501.1 authored to the full 12-component lesson spine (16 components).
**Plan 3 (Spaced Repetition & Assessment): complete, merged to `master`** — spaced-recall scheduler (3/7/14/90-day ladder with relearning on lapses), `/review` surface with due-count, and mastery gates (80% over gradeable components, non-offsettable safety-critical items, remediation flags).
**Plan 4 (Dashboard, Reference, Settings): implemented on `feat/dashboard-reference-settings`** — dashboard home with program progress and a precedence-ordered next action, per-unit Sources & QC reference pages (honest verified/pending badges, scope warnings), theme + text-size settings, and versioned progress export/import. Pending: merge; live smoke folds into Plan 5 packaging.

- ✅ Vite + React 19 + TypeScript toolchain, Vitest tests
- ✅ Content schema (Zod, single source of truth, unique-id enforcement) + data-driven lesson model + APT 501 seed Unit 1 (fully authored, completable)
- ✅ IndexedDB storage (backup-before-overwrite, connection recovery), debounced write-through progress store with failure retry, hydrate + **resume-on-exact-component** (tested)
- ✅ Renderer: ConceptBlock / OutcomesBlock / QuestionSet, UnitPlayer stepper (compile-checked component dispatch), app shell (Home/Catalog/routing), light+dark styling
- ✅ Electron shell hardened (single-instance lock, navigation guards, CSP, packaged-build env gating) + electron-builder config (mac dmg/zip + win dir)
- ✅ Electron launch verified end-to-end: full pretest→concepts→quiz→relaunch→resume flow, 13/13 scripted checks (`docs/VERIFICATION.md`)
- ✅ Final 6-dimension code review: all 23 confirmed findings fixed (see `docs/HANDOFF.md`)
- ⏳ Merge `feat/platform-foundation` → `master`

**Tests:** 55 passing (15 files). `npm run build` (typechecks app + vite config, then builds) clean. Branch: `feat/platform-foundation` (not yet merged to `master`).

## Run it

```bash
npm install            # if node_modules is missing
npm test               # run the test suite (Vitest)
npm run dev            # renderer only, in a browser (Vite dev server)
npm run electron:dev   # the desktop app (Vite + Electron)
npm run build          # type-check + build renderer to dist/
npm run electron:build # build renderer + compile electron + package (.dmg/.zip on a Mac)
```

## How it's structured

- `docs/specs/2026-07-15-advanced-diploma-pt-design.md` — the product design spec (the vision, decisions, promises).
- `docs/plans/2026-07-15-platform-foundation.md` — Plan 1, the task-by-task build plan (Phases A–F + follow-on plans 2–5 listed at the bottom).
- `docs/HANDOFF.md` — current state + next steps (start here each session).
- `src/types/` — content + progress TypeScript types.
- `src/content/` — Zod schema, course registry, and authored course data (`courses/apt501/`).
- `src/storage/` — IndexedDB `StorageAdapter`.
- `src/state/` — progress store (Zustand), autosave, React provider/hook.
- `src/engine/` — grading, `UnitPlayer`, and the per-component-type renderers (`components/`).
- `src/ui/` — Layout, Home, Catalog.
- `electron/` — desktop shell (main + preload).

## What comes after Plan 1

The remaining first-deliverable work (see the bottom of the Plan 1 doc):
- **Plan 2** — the other component renderers (numeric lab, simulators, technique error-ID, branching case, program builder, evidence appraisal, flashcards, teach-back) + in-code SVG diagrams; enrich APT 501 Unit 1 to the full 12-component spine.
- **Plan 3** — spaced-repetition engine + assessment/mastery gates (80% / 85% practical / non-offsettable safety & scope).
- **Plan 4** — dashboard, reference/QC surfaces, settings, export/import.
- **Plan 5** — macOS packaging/signing.
- **Content plans** — author APT 501 to full depth, then courses 502 → 706, all from credible sources with QC metadata.
