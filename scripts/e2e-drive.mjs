// End-to-end driver for the Task 17 acceptance flow (docs/plans/
// 2026-07-15-platform-foundation.md). Launches the real Electron app twice:
// once fresh (pretest -> concepts -> quiz), then again to prove resume.
//
// Prereqs: vite dev server on :5173, `tsc -p electron/tsconfig.json` output
// plus the CJS marker in dist-electron/ (see write-electron-pkg.mjs).
// Run: node scripts/e2e-drive.mjs
// Screenshots land in e2e-shots/. Exit code 0 only if every check passes.
import { _electron as electron } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SHOTS = path.join(ROOT, 'e2e-shots');
const DEV_URL = process.env.ELECTRON_START_URL ?? 'http://localhost:5173';
// Electron resolves userData from the package.json "name".
const USER_DATA = path.join(process.env.APPDATA ?? '', 'advanced-diploma-pt');

const results = [];
function check(name, ok) {
  results.push({ name, ok });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`);
}

async function launch() {
  const app = await electron.launch({
    executablePath: path.join(ROOT, 'node_modules', 'electron', 'dist', 'electron.exe'),
    args: [path.join(ROOT, 'dist-electron', 'main.js')],
    env: { ...process.env, ELECTRON_START_URL: DEV_URL },
    timeout: 30_000,
  });
  const page = await app.firstWindow();
  await page.waitForSelector('#root .app', { timeout: 15_000 });
  return { app, page };
}

const bodyText = (page) => page.evaluate(() => document.body.innerText);
const shot = (page, name) => page.screenshot({ path: path.join(SHOTS, `${name}.png`) });

async function waitText(page, pattern) {
  await page.waitForFunction(
    (src) => new RegExp(src).test(document.body.innerText),
    pattern.source,
    { timeout: 10_000 },
  );
}

// DOM click by visible text (react-router Links and buttons both respond to
// a real dispatched click).
async function clickText(page, text, scope = 'a, button') {
  const r = await page.evaluate(({ text, scope }) => {
    const els = [...document.querySelectorAll(scope)];
    const el = els.find((e) => e.textContent.trim() === text)
      ?? els.find((e) => e.textContent.includes(text));
    if (!el) return 'NOT_FOUND';
    el.click();
    return 'OK';
  }, { text, scope });
  if (r !== 'OK') throw new Error(`clickText: no element matching ${JSON.stringify(text)}`);
}

// Select a question option by a substring of its label text.
async function chooseOption(page, labelText) {
  const r = await page.evaluate((t) => {
    const label = [...document.querySelectorAll('.question-set label')]
      .find((l) => l.textContent.includes(t));
    if (!label) return 'NO_LABEL';
    const input = label.querySelector('input');
    if (!input) return 'NO_INPUT';
    input.click();
    return 'OK';
  }, labelText);
  if (r !== 'OK') throw new Error(`chooseOption(${JSON.stringify(labelText)}): ${r}`);
}

async function main() {
  fs.rmSync(USER_DATA, { recursive: true, force: true }); // pristine first-run state
  fs.mkdirSync(SHOTS, { recursive: true });

  // ---- Phase 1: fresh run through the whole unit -------------------------
  let { app, page } = await launch();
  check('fresh Home shows "Start the program"',
    (await bodyText(page)).includes('Start the program'));
  await shot(page, '01-home-fresh');

  await clickText(page, 'Catalog');
  await waitText(page, /Course catalog/);
  check('catalog lists APT 501.1', (await bodyText(page)).includes('APT 501.1'));
  await shot(page, '02-catalog');

  await clickText(page, 'APT 501.1');
  await waitText(page, /Before we begin/);
  check('unit opens on pretest (1 / 6)', (await bodyText(page)).includes('1 / 6'));
  await shot(page, '03-pretest');

  await chooseOption(page, 'Explain you cannot interpret imaging');
  await chooseOption(page, 'Teaching and progressing a squat');
  await clickText(page, 'Submit answers', 'button');
  await waitText(page, /Score: 2 \/ 2 correct \(100%\)/);
  check('pretest graded with rationales',
    (await bodyText(page)).includes('Correct: stay in scope'));
  await shot(page, '04-pretest-graded');

  await clickText(page, 'Next', 'button');
  await waitText(page, /2 \/ 6/);
  await shot(page, '05-outcomes');

  const concepts = [
    ['actually means', '06-concept1'],
    ['three questions', '07-concept2'],
    ['Referral is a skill', '08-concept3'],
  ];
  for (const [snippet, name] of concepts) {
    await clickText(page, 'Next', 'button');
    await waitText(page, new RegExp(snippet));
    await shot(page, name);
  }
  check('paged through all three concept blocks', true);

  await clickText(page, 'Next', 'button');
  await waitText(page, /Unit quiz/);
  check('quiz is last component (6 / 6)', (await bodyText(page)).includes('6 / 6'));
  await shot(page, '09-quiz');

  await chooseOption(page, 'Stop the session for that concern');
  await chooseOption(page, 'deadlift over several weeks');
  await chooseOption(page, 'Coaching general healthy-eating habits');
  await chooseOption(page, 'stated movement restrictions');
  await chooseOption(page, 'the law where you work');
  await clickText(page, 'Submit answers', 'button');
  await waitText(page, /Score: 3 \/ 3 correct \(100%\)/);
  check('quiz graded with rationales',
    (await bodyText(page)).includes('referral trigger'));
  await shot(page, '10-quiz-graded');

  // Let the 300ms debounced write-through land before closing.
  await page.waitForTimeout(1500);
  await app.close();

  // ---- Phase 2: relaunch, resume exactly where we left off ---------------
  ({ app, page } = await launch());
  check('relaunch Home shows "Continue where you left off"',
    (await bodyText(page)).includes('Continue where you left off'));
  await shot(page, '11-home-resume');

  await clickText(page, 'Continue where you left off');
  await waitText(page, /Unit quiz/);
  const resumed = await bodyText(page);
  check('resumes on the exact component (quiz, 6 / 6)', resumed.includes('6 / 6'));
  check('restored quiz shows retained score',
    /Score: 3 \/ 3 correct \(100%\)/.test(resumed));
  check('restored quiz is graded (no resubmit button)',
    !(await page.evaluate(() =>
      [...document.querySelectorAll('button')].some((b) => b.textContent.includes('Submit answers')))));
  check('prior answers restored checked + locked',
    await page.evaluate(() => {
      const inputs = [...document.querySelectorAll('.question-set input')];
      return inputs.length > 0
        && inputs.every((i) => i.disabled)
        && inputs.filter((i) => i.checked).length === 5;
    }));
  await shot(page, '12-quiz-restored');

  await clickText(page, 'Catalog');
  await waitText(page, /Course catalog/);
  check('catalog marks the unit complete (✓)', (await bodyText(page)).includes('✓'));
  await shot(page, '13-catalog-complete');

  await app.close();

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
  process.exit(failed.length === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error('DRIVER ERROR:', err);
  process.exit(2);
});
