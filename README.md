# Advanced Diploma in Personal Training Science and Coaching

An offline, interactive, university-level course application. The learner works entirely inside a macOS desktop app: deep evidence-based lessons, annotated diagrams, interactive labs, branching client cases, quizzes, spaced recall, and a progress/mastery system. It auto-saves every action and resumes exactly where she left off.

> **New here / next session? Read `docs/HANDOFF.md` first** — it says exactly where we stopped and what to do next.

## Status (as of 2026-07-15)

**Plan 1 (Platform Foundation): Phases A–E implemented; Phase F (live launch + final review) pending.**

- ✅ Vite + React 19 + TypeScript toolchain, Vitest tests
- ✅ Content schema (Zod) + data-driven lesson model + APT 501 seed Unit 1 (fully authored, completable)
- ✅ IndexedDB storage, debounced write-through progress store, hydrate + **resume-on-exact-component** (tested)
- ✅ Renderer: ConceptBlock / OutcomesBlock / QuestionSet, UnitPlayer stepper, app shell (Home/Catalog/routing), light+dark styling
- ✅ Electron main/preload + electron-builder config (mac dmg/zip + win dir)
- ⏳ **Not yet verified: launching the actual Electron app.** See `docs/HANDOFF.md` → "Open item #1" (a likely one-line CJS/ESM fix).
- ⏳ Phase F: live launch verification, `docs/VERIFICATION.md`, final full-implementation review, then merge `feat/platform-foundation`.

**Tests:** 26 passing (12 files). `npx tsc --noEmit` clean. `npm run build` builds cleanly. Branch: `feat/platform-foundation` (not yet merged to `master`).

## Run it

```bash
npm install            # if node_modules is missing
npm test               # run the test suite (Vitest)
npm run dev            # renderer only, in a browser (Vite dev server)
npm run electron:dev   # the desktop app (Vite + Electron)  ← see Open item #1 before trusting this
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
