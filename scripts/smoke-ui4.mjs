// Live smoke of the Plan 3+4 surfaces: dashboard, reference/QC, settings
// (theme persistence across relaunch), review empty state.
// Prereqs: vite on :5173 + compiled dist-electron. Run: node scripts/smoke-ui4.mjs
import { _electron as electron } from 'playwright-core';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SHOTS = path.join(ROOT, 'e2e-shots');
const USER_DATA = path.join(os.tmpdir(), 'advdiploma-smoke4-profile');

const results = [];
function check(name, ok) {
  results.push({ name, ok });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`);
}

async function launch() {
  const app = await electron.launch({
    executablePath: path.join(ROOT, 'node_modules', 'electron', 'dist', 'electron.exe'),
    args: [path.join(ROOT, 'dist-electron', 'main.js')],
    env: { ...process.env, ELECTRON_START_URL: 'http://localhost:5173', ELECTRON_USER_DATA: USER_DATA },
    timeout: 30_000,
  });
  const page = await app.firstWindow();
  await page.waitForSelector('#root .app', { timeout: 15_000 });
  return { app, page };
}

const bodyText = (page) => page.evaluate(() => document.body.innerText);
async function clickText(page, text, scope = 'a, button') {
  const r = await page.evaluate(({ text, scope }) => {
    const els = [...document.querySelectorAll(scope)];
    const el = els.find((e) => e.textContent.trim() === text)
      ?? els.find((e) => e.textContent.includes(text));
    if (!el) return 'NOT_FOUND';
    el.click();
    return 'OK';
  }, { text, scope });
  if (r !== 'OK') throw new Error(`clickText: ${JSON.stringify(text)} not found`);
}
async function waitText(page, pattern) {
  await page.waitForFunction((src) => new RegExp(src).test(document.body.innerText),
    pattern.source, { timeout: 10_000 });
}

async function main() {
  fs.rmSync(USER_DATA, { recursive: true, force: true });
  fs.mkdirSync(SHOTS, { recursive: true });

  let { app, page } = await launch();

  // Dashboard
  const home = await bodyText(page);
  check('dashboard shows program progress', home.includes('0 of 1 units mastered'));
  check('dashboard keeps the Start CTA', home.includes('Start the program'));
  check('dashboard shows a next action', /Next up: APT 501\.1/.test(home));
  await page.screenshot({ path: path.join(SHOTS, 'ui4-dashboard.png') });

  // Reference via catalog "sources"
  await clickText(page, 'Catalog');
  await waitText(page, /Course catalog/);
  await clickText(page, 'sources');
  await waitText(page, /Sources & quality control/);
  const ref = await bodyText(page);
  check('reference lists the sources', ref.includes('CSEP') && ref.includes('NSCA'));
  check('reference is honest about verification', ref.includes('pending verification'));
  check('reference has no scope banner', !ref.includes('does not diagnose'));
  await page.screenshot({ path: path.join(SHOTS, 'ui4-reference.png') });

  // Review empty state
  await page.evaluate(() => { location.hash = '#/review'; });
  await waitText(page, /Nothing due/);
  check('review shows the empty state', true);

  // Settings: dark theme + large text
  await clickText(page, 'Settings');
  await waitText(page, /Text size/);
  await clickText(page, 'Dark', 'label');
  await clickText(page, 'Large (+15%)', 'label');
  await page.waitForTimeout(400); // let the async save land
  const applied = await page.evaluate(() => ({
    theme: document.documentElement.dataset.theme,
    font: document.documentElement.style.fontSize,
  }));
  check('dark theme applied', applied.theme === 'dark');
  check('text scale applied', applied.font === '115%');
  check('export button present', (await bodyText(page)).includes('Export progress'));
  await page.screenshot({ path: path.join(SHOTS, 'ui4-settings-dark.png') });
  await app.close();

  // Relaunch: settings persisted
  ({ app, page } = await launch());
  const persisted = await page.evaluate(() => ({
    theme: document.documentElement.dataset.theme,
    font: document.documentElement.style.fontSize,
  }));
  check('theme persists across relaunch', persisted.theme === 'dark');
  check('text scale persists across relaunch', persisted.font === '115%');
  await page.screenshot({ path: path.join(SHOTS, 'ui4-relaunch-dark.png') });
  await app.close();

  const failed = results.filter((r) => !r.ok);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
  process.exit(failed.length === 0 ? 0 : 1);
}

main().catch((err) => { console.error('DRIVER ERROR:', err); process.exit(2); });
