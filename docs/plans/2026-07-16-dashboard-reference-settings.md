# Plan 4 — Dashboard, Reference/QC Surfaces, Settings, Export/Import

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:executing-plans (inline).
> Same tight format as Plans 2–3: interfaces locked here, JSX TDD'd by the executor.

**Goal:** The remaining UI surfaces of the first deliverable: a real dashboard, per-unit reference/QC pages (sources + scope guardrails finally visible in-app), theme/text-size settings, and single-file progress export/import.

**Architecture:** Dashboard and Reference are pure reads over existing state + content (no store changes). Settings live in a separate tiny `settings` map persisted through the same adapter under its own key (never mixed into progress). Export/import serialises the *progress blob* via the adapter with a version-checked envelope. Only new store surface: `exportProgress()` / `importProgress(json)`.

**Deliberately deferred:** competency map (needs the Semester-0 diagnostic), glossary (needs glossary content), per-course exams (Plan 5+ content plans).

---

## Interface contract

### Dashboard (`src/ui/Dashboard.tsx`, replaces Home's body — route stays `/`)
- Shows: overall program progress (mastered units / total units), per-course rows with each unit's mastery % + status (reusing `unitMastery`), review-due count (link `/review`), and a single **next action** link: first due review if any, else `lastLocation` continue, else first unmastered unit, else catalog.
- Keeps the existing "Continue where you left off" / "Start the program" CTA semantics (e2e drive text must keep passing).

### Reference (`src/ui/Reference.tsx`, route `/reference/:courseId/:unitId`; linked from Catalog per unit and from the unit player header)
- Renders the unit's `qc` block: sources (citation, year, evidence type, verified badge — unverified shows "pending verification", honest per spec §10), confidence, last-reviewed/review-by dates, jurisdiction notes, scope warning (prominent), controversies.
- Unknown course/unit → "Reference not found." (no crash).

### Settings (`src/state/settings.ts` + `src/ui/Settings.tsx`, route `/settings`)
- `Settings = { theme: 'system' | 'light' | 'dark'; textScale: 1 | 1.15 | 1.3 }`, default `{ theme: 'system', textScale: 1 }`.
- Adapter gains generic `loadValue(key)` / `saveValue(key, value)` (backup helpers already exist — reuse the same kv store, key `settings`).
- Applied via attributes on `<html>`: `data-theme` (light/dark forces the palette; system = media query as today) and `style.fontSize` scaling. Pure helper `applySettings(settings, rootEl)` for testability; loaded before render in `main.tsx` boot.
- UI: radio groups for theme and text size; changes apply + persist immediately.

### Export / import (`src/state/transfer.ts`, surfaced in Settings)
- Envelope: `{ app: 'advanced-diploma-pt', kind: 'progress-export', version: 1, exportedAt: ISO, progress: ProgressState }`.
- `serializeProgress(state)` → JSON string; `parseProgressExport(json)` → `ProgressState` or throws with a human message (wrong app, wrong version, malformed shape → uses `isProgressState`).
- Settings UI: "Export progress" downloads a `.json` (Blob + anchor download, named `advdiploma-progress-<date>.json`); "Import progress" file input → parse → **confirm dialog is NOT used** (blocks Electron automation) → instead a two-step inline confirm (button arms, second click applies) → `importProgress` replaces state + write-through + navigate home.
- Store: `exportProgress(): string`, `importProgress(json: string): void` (throws on invalid input; caller shows the message inline).

## File map
Create: `src/ui/Dashboard.tsx`(+test) · `src/ui/Reference.tsx`(+test) · `src/ui/Settings.tsx`(+test) · `src/state/settings.ts`(+test) · `src/state/transfer.ts`(+test).
Modify: `src/ui/Home.tsx` (becomes Dashboard host or is replaced), `src/App.tsx` + `src/main.tsx` (routes, boot-time settings), `src/ui/Catalog.tsx` (+ reference links), `src/engine/UnitPlayer.tsx` (header reference link), `src/storage/StorageAdapter.ts` (generic kv), `src/state/progressStore.ts` (export/import), `src/styles.css`, `src/ui/Layout.tsx` (nav links).

### Task 1: settings module + adapter kv + apply-at-boot (TDD)
### Task 2: transfer module + store export/import (TDD; round-trip, wrong-version reject, malformed reject)
### Task 3: Dashboard (TDD; empty-state, in-progress, mastered, next-action precedence) — keep e2e CTA text
### Task 4: Reference surface + links (TDD; full QC render, verified badge honesty, not-found)
### Task 5: Settings UI wiring export/import (TDD) + Layout nav
### Task 6: integration checks, docs refresh, review, merge (live smoke needs Josh's permission)

## Acceptance
- Suite green, typecheck clean; e2e drive text expectations unchanged.
- Every APT 501.1 source, the scope warning, and controversies are visible in-app with honest verified/pending badges.
- Theme + text size persist across relaunch; export→wipe→import round-trips progress exactly.
