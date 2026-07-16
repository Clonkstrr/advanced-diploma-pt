# Plan 3 — Spaced Repetition & Assessment (Mastery Gates)

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:executing-plans (inline).
> Same tight format as Plan 2: interfaces locked here, renderer JSX TDD'd by the executor.

**Goal:** A real spaced-recall scheduler with a Review surface, plus unit mastery computation with non-offsettable safety/scope items and remediation flags.

**Architecture:** Progress stays **version 1** — recall state is an *optional* field on `ProgressState` (old blobs hydrate unchanged; no migration machinery). All scheduling and mastery logic is pure functions (`src/state/recall.ts`, `src/engine/mastery.ts`) exercised through the existing store; date arithmetic uses the store's injected `now()` so tests stay deterministic.

**Deliberately deferred:** cumulative semester exams, escalating-difficulty re-asks (needs the Plan 4+ item banks), practical-station 85% gate (no practical sims authored yet), export/import.

---

## Interface contract

### Recall scheduling (`src/state/recall.ts`)
- Key: `courseId/unitId/cardId`. State per item: `{ step: number; due: string /*ISO*/; lapses: number }`.
- Ladder (spec §8): steps are days-from-review `[3, 7, 14, 90]` (end-of-lesson → ~3d → 1w → 2w → semester end).
- `scheduleFromRatings(recall, courseId, unitId, ratings, nowIso)` → new map. `good` → step 0 due +3d (or advance one rung if item exists); `again` → step stays 0, due +1d, lapses+1.
- `gradeReview(recall, key, rating, nowIso)` → same rules from the item's current step: `good` advances one rung (capped at last), `again` resets to step 0, due +1d, lapses+1.
- `dueItems(recall, nowIso)` → keys with `due <= now`, oldest first.
- `ProgressState.recall?: Record<string, RecallItemState>` (optional → still version 1; `isProgressState` unchanged).
- Store actions: `scheduleRecall(courseId, unitId, ratings)` and `reviewCard(key, rating)`; both write-through via the existing debounced saver.
- UnitPlayer: when a `recallSet` completes, also call `scheduleRecall` with the good/again ratings.

### Review surface (`src/ui/Review.tsx`, route `/review`)
- Resolves due keys back to cards via the content registry (unknown keys — e.g. renamed content — are skipped silently).
- Flip-and-grade UI identical in feel to RecallSet; each grade calls `reviewCard` immediately (write-through).
- Empty state: "Nothing due — come back tomorrow."
- Home shows "Review due: N" linking to `/review` when N > 0.

### Mastery (`src/engine/mastery.ts`)
- `unitMastery(unit, unitProgress)` → `{ percent: number | null; safetyPassed: boolean; complete: boolean; remediate: string[] }`.
  - `percent`: mean of recorded scores over the unit's *gradeable* components (questionSet, classification, numericLab, errorId, branchingCase, evidenceAppraisal — not recallSet/teachBack, which are self-assessed), `null` until at least one is recorded.
  - Safety: `Question.safetyCritical?: boolean` (type + zod). A safety item passes only if its question was answered correctly in the recorded answers. **Cannot be offset**: `complete` requires all components completed AND percent ≥ 80 AND safetyPassed.
  - `remediate`: ids of failed safety questions + gradeable components scoring < 0.8.
- Catalog: shows mastery % per started unit; ✓ only when `complete`; "· needs review" flag when finished-but-not-mastered.
- Content: tag the chest-tightness quiz item and the red-flags cumulative item `safetyCritical: true`.

## File map
Create: `src/state/recall.ts` + test · `src/engine/mastery.ts` + test · `src/ui/Review.tsx` + test.
Modify: `src/types/progress.ts`, `src/types/content.ts`, `src/content/schema.ts`, `src/state/progressStore.ts` (+2 actions), `src/engine/UnitPlayer.tsx` (recallSet completion), `src/ui/Home.tsx`, `src/ui/Catalog.tsx`, `src/main.tsx` (route), `src/content/courses/apt501/unit01.ts` (safety tags), `src/styles.css`.

### Task 1: recall module + store actions (TDD; ladder/lapse/due-order/persistence tests)
### Task 2: UnitPlayer wiring + Review surface + Home due-count (TDD; includes unknown-key skip test)
### Task 3: mastery module + safetyCritical + Catalog display + content tags (TDD; non-offsettable test: 100% score with failed safety item ≠ complete)
### Task 4: integration test (finish unit → items due after +3d clock → review them), e2e untouched (mastery visible in catalog check), docs, review, merge on sign-off.

## Acceptance
- Suite green, typecheck clean.
- Completing the recall set schedules 9 items; advancing the injected clock 3 days surfaces them in `/review`; grading updates due dates and persists across store reload.
- A perfect quiz score with a failed safety-critical item leaves the unit un-mastered with a remediation flag.
