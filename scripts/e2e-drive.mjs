// End-to-end driver for the acceptance flow, updated for the Plan 2 full
// 12-component spine (16 components total in APT 501.1). Launches the real
// Electron app twice: once fresh (pretest -> ... -> quiz), then again to prove
// exact resume, then finishes the unit (teach-back + cumulative) to the ✓.
//
// Prereqs: vite dev server on :5173, `tsc -p electron/tsconfig.json` output
// plus the CJS marker in dist-electron/ (see write-electron-pkg.mjs).
// Run: node scripts/e2e-drive.mjs   (opens windows — needs Josh's permission)
// Screenshots land in e2e-shots/. Exit code 0 only if every check passes.
import { _electron as electron } from 'playwright-core';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SHOTS = path.join(ROOT, 'e2e-shots');
const DEV_URL = process.env.ELECTRON_START_URL ?? 'http://localhost:5173';
// Isolated profile (honoured by main.ts when unpackaged) so the drive never
// touches or wipes the real user's progress.
const USER_DATA = path.join(os.tmpdir(), 'advdiploma-e2e-profile');

const results = [];
function check(name, ok) {
  results.push({ name, ok });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`);
}

async function launch() {
  const app = await electron.launch({
    executablePath: path.join(ROOT, 'node_modules', 'electron', 'dist', 'electron.exe'),
    args: [path.join(ROOT, 'dist-electron', 'main.js')],
    env: { ...process.env, ELECTRON_START_URL: DEV_URL, ELECTRON_USER_DATA: USER_DATA },
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

// Check a radio/checkbox by a substring of its label text.
async function chooseOption(page, labelText, scope = '.question-set label') {
  const r = await page.evaluate(({ t, scope }) => {
    const label = [...document.querySelectorAll(scope)].find((l) => l.textContent.includes(t));
    if (!label) return 'NO_LABEL';
    const input = label.querySelector('input');
    if (!input) return 'NO_INPUT';
    input.click();
    return 'OK';
  }, { t: labelText, scope });
  if (r !== 'OK') throw new Error(`chooseOption(${JSON.stringify(labelText)}): ${r}`);
}

// Set a <select> inside a label (React-safe: native setter + change event).
async function setSelect(page, labelText, value) {
  const r = await page.evaluate(({ t, value }) => {
    const label = [...document.querySelectorAll('label')].find((l) => l.textContent.includes(t));
    const select = label?.querySelector('select');
    if (!select) return 'NO_SELECT';
    const setter = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set;
    setter.call(select, value);
    select.dispatchEvent(new Event('change', { bubbles: true }));
    return 'OK';
  }, { t: labelText, value });
  if (r !== 'OK') throw new Error(`setSelect(${JSON.stringify(labelText)}): ${r}`);
}

// Type into a textarea (React-safe: native setter + input event).
async function setTextArea(page, text) {
  const r = await page.evaluate((text) => {
    const el = document.querySelector('textarea');
    if (!el) return 'NO_TEXTAREA';
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
    setter.call(el, text);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    return 'OK';
  }, text);
  if (r !== 'OK') throw new Error(`setTextArea: ${r}`);
}

async function main() {
  fs.rmSync(USER_DATA, { recursive: true, force: true }); // pristine first-run state
  fs.mkdirSync(SHOTS, { recursive: true });

  // ---- Phase 1: fresh run up to and including the unit quiz ---------------
  let { app, page } = await launch();
  check('fresh Home shows "Start the program"',
    (await bodyText(page)).includes('Start the program'));
  await shot(page, '01-home-fresh');

  await clickText(page, 'Catalog');
  await waitText(page, /Course catalog/);
  check('catalog lists APT 501.1', (await bodyText(page)).includes('APT 501.1'));

  await clickText(page, 'APT 501.1');
  await waitText(page, /Before we begin/);
  check('unit opens on pretest (1 / 16)', (await bodyText(page)).includes('1 / 16'));
  await shot(page, '02-pretest');

  await chooseOption(page, 'Explain you cannot interpret imaging');
  await chooseOption(page, 'Teaching and progressing a squat');
  await chooseOption(page, 'A registered dietitian');
  await chooseOption(page, 'What you observed, what you did, what you advised');
  await chooseOption(page, 'Guaranteed 10 kg loss');
  await chooseOption(page, 'I cure back pain without physio');
  await clickText(page, 'Submit answers', 'button');
  await waitText(page, /Score: 5 \/ 5 correct \(100%\)/);
  check('pretest (5 questions) graded with rationales',
    (await bodyText(page)).includes('Correct: stay in scope'));
  await shot(page, '03-pretest-graded');

  // outcomes + five concepts + visual + worked example = 8 view components
  const viewStops = [
    [/2 \/ 16/, null], [/actually means/, null], [/three questions/, null],
    [/Referral is a skill/, null], [/why paperwork protects people/, '04-concept-negligence'],
    [/allied-health map/, null], [/When to train, modify, refer, or stop/, '05-visual'],
    [/reasoned step by step/, '06-worked-example'],
  ];
  for (const [pattern, name] of viewStops) {
    await clickText(page, 'Next', 'button');
    await waitText(page, pattern);
    if (name) await shot(page, name);
  }
  check('paged through outcomes, five concepts, visual and worked example', true);

  await clickText(page, 'Next', 'button');
  await waitText(page, /whose job is it\?/i);
  await setSelect(page, 'Design a 12-week progressive strength program', 'scope');
  await setSelect(page, 'which supplement stack', 'refer');
  await setSelect(page, 'post-ACL-surgery client', 'collab');
  await setSelect(page, 'national healthy-eating guidelines', 'scope');
  await setSelect(page, 'homework her therapist assigned', 'refer');
  await setSelect(page, 'slow breathing during cooldowns', 'scope');
  await setSelect(page, 'pregnant client brings written exercise guidance', 'collab');
  await setSelect(page, 'cholesterol panel', 'refer');
  await clickText(page, 'Submit answers', 'button');
  await waitText(page, /Score: 8 \/ 8 correct \(100%\)/);
  check('classification lab graded 8/8', true);
  await shot(page, '07-lab-graded');

  await clickText(page, 'Next', 'button');
  await waitText(page, /the intake that wasn’t routine/i);
  await clickText(page, 'Ask follow-up questions', 'button');
  await waitText(page, /twice a week when she stands quickly/);
  await clickText(page, 'tell her physician about the new dizziness', 'button');
  await waitText(page, /adjusted the dose and cleared her/);
  await clickText(page, 'Program gradual position transitions', 'button');
  await waitText(page, /3 \/ 3 best-practice decisions/);
  check('branching case: best path scored 3/3', true);
  await shot(page, '08-case-outcome');

  await clickText(page, 'Next', 'button');
  await waitText(page, /Audit this trainer’s website bio/);
  for (const flag of ['I diagnose muscle imbalances', 'prescribe corrective exercise plans',
    'cure chronic back pain', 'reverse your pre-diabetes', 'guaranteed 8-kg-in-8-weeks']) {
    await chooseOption(page, flag, '.error-id label');
  }
  await clickText(page, 'Submit review', 'button');
  await waitText(page, /Score: 7 \/ 7 correct \(100%\)/);
  check('error-ID audit graded 7/7', true);

  await clickText(page, 'Next', 'button');
  await waitText(page, /Key ideas to keep/);
  for (let i = 0; i < 9; i++) {
    await clickText(page, 'Show answer', 'button');
    await clickText(page, 'Knew it', 'button');
  }
  await waitText(page, /9 of 9 known/);
  check('recall set: all nine cards graded', true);

  await clickText(page, 'Next', 'button');
  await waitText(page, /Unit quiz/);
  check('quiz sits at 14 / 16', (await bodyText(page)).includes('14 / 16'));
  await chooseOption(page, 'Stop the session for that concern');
  await chooseOption(page, 'deadlift over several weeks');
  await chooseOption(page, 'Coaching general healthy-eating habits');
  await chooseOption(page, 'stated movement restrictions');
  await chooseOption(page, 'the law where you work');
  await chooseOption(page, 'Duty, breach of the standard of care');
  await chooseOption(page, 'The facts: what happened, what you checked');
  await chooseOption(page, 'raises the standard you are judged against');
  await chooseOption(page, 'worth a physiotherapist’s eyes');
  await clickText(page, 'Submit answers', 'button');
  await waitText(page, /Score: 7 \/ 7 correct \(100%\)/);
  check('quiz (7 questions, four cognitive levels) graded 7/7', true);
  await shot(page, '09-quiz-graded');

  // Let the 300ms debounced write-through land before closing.
  await page.waitForTimeout(1500);
  await app.close();

  // ---- Phase 2: relaunch, resume exactly on the graded quiz ---------------
  ({ app, page } = await launch());
  check('relaunch Home shows "Continue where you left off"',
    (await bodyText(page)).includes('Continue where you left off'));

  await clickText(page, 'Continue where you left off');
  await waitText(page, /Unit quiz/);
  const resumed = await bodyText(page);
  check('resumes on the exact component (quiz, 14 / 16)', resumed.includes('14 / 16'));
  check('restored quiz shows retained score', /Score: 7 \/ 7 correct \(100%\)/.test(resumed));
  check('restored quiz is graded (no resubmit button)',
    !(await page.evaluate(() =>
      [...document.querySelectorAll('button')].some((b) => b.textContent.includes('Submit answers')))));
  check('prior answers restored checked + locked',
    await page.evaluate(() => {
      const inputs = [...document.querySelectorAll('.question-set input')];
      return inputs.length > 0
        && inputs.every((i) => i.disabled)
        && inputs.filter((i) => i.checked).length === 9;
    }));
  await shot(page, '10-quiz-restored');

  // ---- Phase 3: finish the unit (teach-back + cumulative) -----------------
  await clickText(page, 'Next', 'button');
  await waitText(page, /Teach it back/);
  await setTextArea(page,
    'Diagnosis needs clinical training and accountability; I adapt your training and refer you well.');
  await clickText(page, 'Submit response', 'button');
  await waitText(page, /Model answer/);
  for (const point of ['Explains why diagnosis is outside', 'Says concretely what the trainer',
    'Names the right professional', 'Keeps a warm, confident tone']) {
    await chooseOption(page, point, '.teach-back label');
  }
  await clickText(page, 'Confirm self-assessment', 'button');
  await waitText(page, /4 \/ 4 rubric points/);
  check('teach-back self-assessed 4/4', true);
  await shot(page, '11-teachback');

  await clickText(page, 'Next', 'button');
  await waitText(page, /Pulling it together/);
  await chooseOption(page, 'Red flags — symptoms or events');
  await chooseOption(page, 'Registered dietitian → individualized nutrition plans');
  await chooseOption(page, 'Physician → diagnosis, medication');
  await chooseOption(page, 'Physiotherapist → rehabilitation of diagnosed injuries');
  await chooseOption(page, 'reasonably prudent professional');
  await clickText(page, 'Submit answers', 'button');
  await waitText(page, /Score: 3 \/ 3 correct \(100%\)/);
  check('cumulative review graded 3/3 (16 / 16)', (await bodyText(page)).includes('16 / 16'));
  await shot(page, '12-cumulative-graded');

  await page.waitForTimeout(1500);
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
