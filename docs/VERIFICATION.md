# Plan verification log

## Plan 2 verification (2026-07-16)

- `npm test`: PASS (90 tests, 25 files) · `npm run build`: PASS · electron tsc: PASS
- Live e2e drive (`scripts/e2e-drive.mjs`, isolated temp profile, run with Josh's permission): **19/19** —
  full 16-component spine driven end-to-end in the real Electron app: 5-question pretest,
  outcomes, five concepts, annotated SVG visual, worked example, classification lab 8/8,
  branching case best-path 3/3, error-ID audit 7/7, recall set 9/9, quiz 7/7 (all four
  cognitive levels), then **close → relaunch → exact resume on the graded quiz** (score
  retained, answers locked), then teach-back 4/4 and cumulative review 3/3 to 16/16 and
  the catalog ✓. Screenshots inspected (`e2e-shots/`): decision-tree SVG and case
  outcome render correctly in light theme.

# Plan 1 verification

- Date: 2026-07-15
- Node version: v24.14.0
- OS (dev): Windows 11 Pro (10.0.26200)
- `npm test`: PASS (28 tests, 12 files)
- `npx tsc --noEmit -p tsconfig.json`: PASS (clean)
- Electron launch: PASS
- Resume-exactly-where-left-off: PASS
- Notes:
  - Electron initially failed to launch: root `package.json` declares `"type": "module"` while `dist-electron/` output is CommonJS, so Electron parsed `main.js` as ESM ("exports is not defined in ES module scope"). Fixed by emitting `dist-electron/package.json` (`{"type":"commonjs"}`) during `electron:dev`/`electron:build` (`scripts/write-electron-pkg.mjs`).
  - Second launch bug found and fixed in the same pass: `cross-env ELECTRON_START_URL=...` wrapped `tsc` instead of `electron`, so the dev URL never reached Electron.
  - Gap closed during verification: the plan's acceptance requires a visible score with rationales, but `QuestionSet` only recorded the score to the store. A score line ("Score: N / M correct (X%)") now renders after submit and on restored graded sets (TDD; +2 tests, 26 → 28).
  - The acceptance flow was driven programmatically against the real Electron binary via `scripts/e2e-drive.mjs` (playwright-core `_electron`), starting from a wiped user profile: fresh Home shows "Start the program" → Catalog → APT 501.1 → pretest answered/graded with rationales and score → three concept blocks paged → unit quiz graded (3/3, rationales + score) → full app close → relaunch → Home shows "Continue where you left off" → resumes on the exact component (quiz, 6/6) with prior answers checked, locked, and the score retained → Catalog shows the unit ✓. 13/13 checks passed; screenshots reviewed in `e2e-shots/` (gitignored).
  - macOS packaging (`.dmg` for the target MacBook) remains Plan 5; electron-builder mac config is present but a mac build must run on macOS/CI.

## Post-review re-verification (2026-07-16, after all 23 review findings were fixed)

- `npm test`: PASS (55 tests, 15 files) · `npm run build` (app + vite-config typecheck): PASS · electron tsc: PASS
- Production-path smoke (`scripts/smoke-prod.mjs`, loadFile from `dist/` exactly as a packaged build runs): 7/7 —
  app boots under the new CSP, stylesheet loads, `window.open` denied, navigation away blocked,
  zero CSP violations in the console, rendered Home screenshot inspected (`e2e-shots/smoke-prod.png`).
- Full acceptance drive (`scripts/e2e-drive.mjs`, dev-server path, isolated temp profile): 13/13 —
  the dev path also works under the CSP (the react-refresh inline preamble precedes the meta tag,
  which meta-delivered CSP does not govern), and the pretest→quiz→relaunch→exact-resume flow is intact.
