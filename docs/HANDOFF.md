# Handoff — resume here next session

**Last worked:** 2026-07-15. **Branch:** `feat/platform-foundation` (20 commits, clean tree, NOT merged to `master`).
**Where we are:** Plan 1 (Platform Foundation) — Phases A–E implemented and committed; **Phase F not started.**
**Health:** `npm test` → 26 passing (12 files); `npx tsc --noEmit -p tsconfig.json` → clean; `npm run build` → clean (no src/ pollution).

We are building this via the plan at `docs/plans/2026-07-15-platform-foundation.md` using subagent-driven development (fresh subagent per phase, review between). Design spec: `docs/specs/2026-07-15-advanced-diploma-pt-design.md`.

---

## DO THIS FIRST — Open item #1: verify the Electron app actually launches (likely a one-line fix)

We built the Electron shell but have **not launched it yet** (the build subagents were told not to run GUI/blocking processes). There is a known, likely runtime problem to check:

- Root `package.json` has `"type": "module"`, but `dist-electron/main.js` / `preload.js` are **CommonJS** (they use `require`/`exports`). When Electron loads `dist-electron/main.js`, Node may try to parse it as ESM and fail with **`require is not defined`** or `Cannot use import statement` / `ERR_REQUIRE_ESM`-style errors.

**How to check:** run `npm run electron:dev` and watch the terminal / the window.

**If it fails with a CJS/ESM error, the fix** (standard pattern for CJS Electron output inside an ESM project) is to make `dist-electron/` a CommonJS scope by emitting a tiny `dist-electron/package.json` containing:
```json
{ "type": "commonjs" }
```
`dist-electron/` is gitignored and regenerated, so don't just create the file by hand once — make the build emit it. Simplest: add a step to the `electron:dev` and `electron:build` scripts that writes it, e.g. a small Node one-liner or a `scripts/` helper run before `electron`. (Alternative: rename the electron output to `.cjs`, but the package.json-scope approach is cleaner.)

**Once it launches:** confirm the core promise by hand —
1. Open Catalog → APT 501.1; answer the pretest; page through the three concept blocks; take the unit quiz (rationales + score appear).
2. Fully close the window; relaunch `npm run electron:dev`; confirm Home shows "Continue where you left off" and it returns to the **exact** component, with the quiz showing your prior answers as already graded.
This is the whole point of Plan 1 — verify it in the real app, not just tests.

---

## Then finish Phase F (Task 17 in the plan)

1. `npm test` (all green) — record counts.
2. Drive the app in Electron (the manual steps above) and write results into `docs/VERIFICATION.md` (template is in the plan's Task 17). Commit.
3. **Final full-implementation code review** of the whole Plan 1 branch (dispatch a reviewer subagent, most-capable model), then address anything it raises.
4. Use `superpowers:finishing-a-development-branch` to decide how to integrate `feat/platform-foundation` (merge to `master` or PR). Currently all work is on the feature branch.

---

## Notes / deviations already made (all intentional, committed)

- Installed dependency majors are newer than the plan's prose assumed (React 19, react-router-dom 7, Zod 4, Vite 8, Vitest 4, Zustand 5, **TypeScript 7**). Everything works on these; no downgrade needed.
- `tsconfig.json`: added `"vite/client"` to `types` (needed so `import './styles.css'` type-checks).
- `package.json` `build` script changed to `tsc --noEmit && vite build` (the old `tsc -b` silently emitted stray `.js` into `src/`).
- `electron/tsconfig.json`: `moduleResolution` changed `Node` → `Bundler` (TS 7 removed the `node10` alias); still emits CommonJS (verified). This is what makes Open item #1's CJS/ESM tension exist.

## Review findings already fixed on this branch (don't re-litigate)

An opus review of Phases A–D flagged that resume tracked "last completed quiz" instead of "last viewed component," and that completed quizzes re-rendered blank. Both are **fixed and tested** (commit `6cb3eb9`): `UnitPlayer` now resumes from `lastLocation.componentId`; `QuestionSet` restores `initialAnswers`/`initialSubmitted`; Catalog shows an honest in-progress/✓ indicator; multi-select submit guard, hydrate version guard, and an unknown-component fallback were added.

## Task tracker (this session's phases)

- Phase A Scaffolding — ✅ done
- Phase B Content types/schema/seed — ✅ done
- Phase C Storage/progress core — ✅ done
- Phase D Renderer/UnitPlayer/shell — ✅ done (reviewed + fixed)
- Phase E Electron shell — ✅ code done/committed; **live launch unverified (Open item #1)**
- Phase F Verification + final review — ⏳ not started
