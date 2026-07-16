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
