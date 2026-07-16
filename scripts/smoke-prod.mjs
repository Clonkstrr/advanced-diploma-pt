// Production-path smoke test: launches the app the way a packaged build runs
// (loadFile from dist/, no dev server) and checks that the CSP lets the app
// boot and the navigation guards hold.
//
// Prereqs: `npm run build` and `tsc -p electron/tsconfig.json` +
// scripts/write-electron-pkg.mjs. Run: node scripts/smoke-prod.mjs
import { _electron as electron } from 'playwright-core';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const USER_DATA = path.join(os.tmpdir(), 'advdiploma-smoke-profile');
const SHOTS = path.join(ROOT, 'e2e-shots');

const results = [];
function check(name, ok) {
  results.push({ name, ok });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`);
}

async function main() {
  fs.rmSync(USER_DATA, { recursive: true, force: true });
  fs.mkdirSync(SHOTS, { recursive: true });

  const env = { ...process.env, ELECTRON_USER_DATA: USER_DATA };
  delete env.ELECTRON_START_URL; // force the packaged loadFile path

  const app = await electron.launch({
    executablePath: path.join(ROOT, 'node_modules', 'electron', 'dist', 'electron.exe'),
    args: [path.join(ROOT, 'dist-electron', 'main.js')],
    env,
    timeout: 30_000,
  });
  const page = await app.firstWindow();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.waitForSelector('#root .app', { timeout: 15_000 });
  check('app boots from dist/ under CSP', true);

  const body = await page.evaluate(() => document.body.innerText);
  check('fresh Home renders "Start the program"', body.includes('Start the program'));

  const styled = await page.evaluate(() => document.styleSheets.length > 0);
  check('stylesheet loaded under CSP', styled);

  const opened = await page.evaluate(() => {
    const w = window.open('https://example.com');
    return w === null ? 'DENIED' : 'OPENED';
  });
  check('window.open is denied', opened === 'DENIED');
  check('still a single window after window.open', app.windows().length === 1);

  const hrefBefore = await page.evaluate(() => location.href);
  await page.evaluate(() => { location.href = 'https://example.com'; });
  await page.waitForTimeout(500);
  const hrefAfter = await page.evaluate(() => location.href);
  check('navigation away from the app is blocked', hrefAfter === hrefBefore);

  const cspNoise = consoleErrors.filter((t) => /Content.Security.Policy|Refused to/i.test(t));
  check('no CSP violations in console', cspNoise.length === 0);
  if (cspNoise.length) cspNoise.forEach((t) => console.log('  CSP:', t));

  await page.screenshot({ path: path.join(SHOTS, 'smoke-prod.png') });
  await app.close();

  const failed = results.filter((r) => !r.ok).length;
  console.log(`\n${results.length - failed}/${results.length} checks passed`);
  process.exit(failed ? 1 : 0);
}

main().catch((err) => { console.error(err); process.exit(1); });
