# Handoff — resume here (written 2026-07-16, model-agnostic: usable by any AI assistant or human)

> **UPDATE 2026-07-16 (later session): all 23 review findings below are FIXED** across
> commits `177909d` (batch 1), `7012aaa` (batch 2), `c171b6a` (batch 3), `d97338d`
> (batch 4), `5b081cc` + the docs/tooling commit (batch 5). Suite is now 55 passing
> (15 files), typecheck clean. The batch lists below are kept as the record of what
> changed and why. **NEXT: merge `feat/platform-foundation` → `master`** (needs
> Josh's go-ahead), then Plan 2. One caveat: the batch-3 Electron hardening (CSP,
> nav guards, single-instance lock) is verified headlessly but hasn't been exercised
> in a live launch — do one permission-gated `electron:dev` smoke test before or
> right after merging.

**Project:** Offline-first Electron + React 19 + TS 7 learning app ("Advanced Diploma in Personal Training Science and Coaching"). End user: Josh's wife, on a **MacBook**. Dev machine: Windows 11.
**Branch:** `feat/platform-foundation` (NOT merged to `master`).
**Health:** `npm test` → 55 passing (15 files) · `npx tsc --noEmit -p tsconfig.json` → clean · Electron launches and the full acceptance flow passed a scripted 13/13 e2e drive (`docs/VERIFICATION.md`).
**Plan:** `docs/plans/2026-07-15-platform-foundation.md` (Plan 1 — ALL phases A–F now complete). Design spec: `docs/specs/2026-07-15-advanced-diploma-pt-design.md`.

## Standing constraints (do not violate)

1. **NEVER run or open the app (Electron, `npm run dev`, e2e driver, anything that opens a window) without Josh's explicit permission.** Headless commands (vitest, tsc, builds without launching) are fine.
2. TDD for all code changes: failing test first, then minimal code (suite: `npx vitest run`).
3. Content must ultimately be **graduate-diploma depth with real, verified sources** — Josh has twice emphasised he wants a deep dive, not surface-level summaries. Never fabricate citations.
4. Commit in small units with conventional messages; work stays on this feature branch until merge is decided.

## Plan 1 status: DONE, verified

- Electron CJS/ESM launch bug fixed (`scripts/write-electron-pkg.mjs` emits `dist-electron/package.json` `{"type":"commonjs"}`; `cross-env` moved so `ELECTRON_START_URL` reaches Electron). Commit `5be5728`.
- Score line added to `QuestionSet` (plan acceptance required visible score). Commit `77eecc8`.
- End-to-end acceptance verified against the real Electron binary from a wiped profile: pretest→concepts→quiz graded with rationales+score → full close → relaunch → resumed on the exact component with answers locked and score retained → Catalog ✓. Details in `docs/VERIFICATION.md`. Commit `619473c`.
- E2E driver: `scripts/e2e-drive.mjs` (playwright-core `_electron`; needs Vite on :5173 and permission per constraint 1).

## NEXT: apply the final code-review findings, then merge

A 6-dimension adversarially-verified review of the whole branch (vs `master`, base `c37c312`) confirmed **23 findings — 0 critical, 11 important, 12 minor**. The passing e2e drive means none break the current happy path; the important ones are data-safety, latent-crash, and test-gap issues that should land before merge. Work through them as batches, TDD where testable, run the suite after each batch, commit per batch.

### Batch 1 — data safety (all in the persistence layer)
1. `src/main.tsx:24` — `void boot()` swallows IndexedDB open/load failure → **permanently blank window**. Wrap hydrate in try/catch: log, render anyway with in-memory empty state (optionally a "progress cannot be saved" banner).
2. `src/state/progressStore.ts:45` — version-mismatch hydrate silently keeps `emptyProgress`, and the first `setLocation` write-through **destroys the old blob**. Before any save can overwrite: stash the unrecognised blob to a backup key (`progress.v<loaded.version>.bak`) via the adapter + `console.error`. (Real migration chain can wait for Plan 2/3, but the backup must ship in v1 binaries.)
3. `src/state/autosave.ts:19,26,31` — save rejections are swallowed (pending cleared *before* await; `void run()`), and `flush()` doesn't await an in-flight save. Fix: on rejection restore pending (if nothing newer) + log; track `inFlight` promise and have `flush()` await it; chain runs.
4. `src/storage/StorageAdapter.ts` — pass a `terminated` callback to `openDB` that resets the cached `dbPromise` so a Chromium-terminated connection reopens instead of failing every subsequent put. Also validate loaded shape beyond `version` (zod or minimal structural check) → fall back to empty (with the backup from #2).

### Batch 2 — React correctness (one-line fixes + tests)
5. `src/engine/UnitPlayer.tsx:56-69` — rendered components have no `key`; two adjacent questionSets would share `submitted/answers` state. Add `key={current.id}`.
6. `src/App.tsx:12` — `UnitPlayer` keeps its `index` state across unit changes (latent out-of-range crash / corrupted resume when unit-to-unit nav arrives). Render `<UnitPlayer key={courseId + '/' + unitId} …/>`. Consider a top-level ErrorBoundary.
7. `src/engine/UnitPlayer.tsx:36` — a unit whose *last* component is concept/outcomes can never be fully completed (completion fires on Next only). Mark the final non-interactive component complete on view, or add a Finish action.

### Batch 3 — Electron hardening (`electron/main.ts`)
8. No single-instance lock → two instances clobber the shared IndexedDB. `app.requestSingleInstanceLock()` / quit + focus on `second-instance`.
9. No `will-navigate` guard or `setWindowOpenHandler` → deny both (allow only the initial URL).
10. `main.ts:16` — `ELECTRON_START_URL` honoured in packaged builds; gate with `!app.isPackaged`.
11. `index.html` — add CSP meta: `default-src 'self'; style-src 'self' 'unsafe-inline'` (relax only for Vite dev if needed).
12. `vite.config.ts` — pin `server: { port: 5173, strictPort: true }` (wait-on can currently be satisfied by a foreign process).

### Batch 4 — test gaps (all confirmed real)
13. `UnitPlayer.test.tsx:27` — navigation test is tautological (passes with a broken Next). Assert `lastLocation.componentId` advances + next block renders; add cross-unit resume-fallback and unknown-component-type cases.
14. `QuestionSet.test.tsx` — no multi-select question is ever rendered; the 6cb3eb9 submit-guard fix has no regression test. Add check/uncheck/partial-answer disabled-submit tests.
15. `Catalog.tsx` has zero tests — add ✓ / "· in progress" / blank three-state tests with a real store.
16. `StorageAdapter.test.ts` — add a two-connection test (adapter A saves, adapter B with same name loads) to cover the relaunch path headlessly.
17. Add a hydrate-version-guard regression test (reverting the guard currently passes the whole suite).

### Batch 5 — structural (do before Plan 2 makes it expensive)
18. `UnitPlayer.tsx:70` — replace the if-chain with a typed renderer registry (`{ [K in UnitComponent['type']]: … }` + per-type `completesOn: 'view' | 'submit'`) so adding Plan 2's ~9 component types is compile-checked. An exhaustive switch + `assertNever` is acceptable minimum.
19. `src/content/schema.ts:65` — `as Course` cast links zod and TS types unsoundly; make zod the single source of truth (`z.infer`) or add a mutual-assignability compile check. Also consider enforcing unique component/question/option ids in the schema (unverified but plausible finding).
20. `package.json:9` — `vite.config.ts` is never type-checked; wire `tsconfig.node.json` into the build or delete it.
21. `scripts/e2e-drive.mjs:78` — driver `rm -rf`s the real userData; point it at an isolated temp dir (e.g. dev-only `ELECTRON_USER_DATA` env honoured in main.ts).
22. `README.md` — status section is stale (says Phase F pending / 26 tests); refresh to match `docs/VERIFICATION.md`.

### Then: integrate
- Merge `feat/platform-foundation` → `master` (or PR if remote exists; repo currently has no remote). All review findings above should be fixed or explicitly deferred with Josh's sign-off first.

## Content status (Josh asked: "deep dive or surface level?")

Honest answer, from a dedicated assessment: **sources are real and top-tier (CSEP scope standard, NSCA Essentials 3rd ed. 2021, ACSM Guidelines 11th ed. 2021 — nothing fabricated), but depth is NOT there yet**: one seed unit, ~355 words of instructional prose, 5 questions (max cognitive level: analysis; zero synthesis), certification-primer level. This matches Plan 1's deliberate scope (platform vertical slice), but the spec's promise — "APT 501 authored to full university depth", 12-component lesson spine, 20/40/30/10 recall/application/analysis/synthesis mix, page/DOI-verified citations, rendered reference/QC surfaces — is all still outstanding (Plans 2, 4, and the content plans). All three sources carry `verified: false` pending page-level checks, and no UI renders sourcing until Plan 4. **The content plans are where Josh's deep-dive demand gets met; treat that as a hard requirement, not polish.**

## macOS delivery (end user is on a MacBook)

- electron-builder mac config exists (`electron-builder.yml`: dmg + zip) but **mac targets cannot be built from Windows** — needs a Mac or CI (e.g. GitHub Actions `macos-latest` runner; repo currently has no remote/GitHub).
- Without an Apple Developer ID ($99/yr) the app will be unsigned: on first open his wife must right-click → Open (or `xattr -d com.apple.quarantine`). Acceptable for a personal app; signing/notarisation is optional. This is Plan 5.

## Token-economy notes for whoever continues

- The expensive adversarial review is DONE and fully recorded above — do not re-run it.
- Batches 1–5 are mechanical: read the cited file, write the failing test, apply the stated fix. No sub-agents or broad exploration needed; everything required is in this file plus the cited lines.
- Suggested session split if budget is tight: (1) Batches 1–2, (2) Batches 3–4, (3) Batch 5 + README + merge.
