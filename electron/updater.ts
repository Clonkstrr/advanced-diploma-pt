// Over-the-air updates for the renderer bundle.
//
// The installed .app is never modified, so this works on an unsigned macOS
// build (Squirrel/Sparkle-style updaters cannot — they replace the .app and
// fail its code-signature check). Instead each release attaches the ~600 KB
// React bundle as web-bundle.json; we download it into userData and load the
// window from there. Everything the learner sees — UI, courses, diagrams,
// styles — ships this way. Only changes to this Electron shell itself still
// need a .dmg reinstall.

import { app } from 'electron';
import { createHash } from 'node:crypto';
import * as fs from 'node:fs';
import * as fsp from 'node:fs/promises';
import * as path from 'node:path';
import {
  type BundleState, type UpdateCheck, emptyState, chooseBundle, validateBundle,
  evaluateRelease, stateAfterStaging, stateAfterBootOk, stateAfterBootFailure,
} from './updateLogic';

const REPO = 'Clonkstrr/advanced-diploma-pt';
const RELEASE_API = `https://api.github.com/repos/${REPO}/releases/latest`;
const USER_AGENT = 'advanced-diploma-pt-updater';
const TIMEOUT_MS = 30_000;

const bundlesRoot = () => path.join(app.getPath('userData'), 'bundles');
const statePath = () => path.join(bundlesRoot(), 'state.json');
const bundleDir = (version: string) => path.join(bundlesRoot(), version);

function bundleExists(version: string): boolean {
  return fs.existsSync(path.join(bundleDir(version), 'index.html'));
}

export function readState(): BundleState {
  try {
    const raw = JSON.parse(fs.readFileSync(statePath(), 'utf8')) as Partial<BundleState>;
    return {
      active: typeof raw.active === 'string' ? raw.active : null,
      pending: typeof raw.pending === 'string' ? raw.pending : null,
      lastGood: typeof raw.lastGood === 'string' ? raw.lastGood : null,
    };
  } catch {
    return { ...emptyState };
  }
}

function writeState(state: BundleState): void {
  fs.mkdirSync(bundlesRoot(), { recursive: true });
  fs.writeFileSync(statePath(), JSON.stringify(state, null, 2) + '\n', 'utf8');
}

// The version the learner is actually looking at: a downloaded bundle if one
// is in use, otherwise the version baked into the installed app.
export function currentVersion(): string {
  return chooseBundle(readState(), app.getVersion(), bundleExists) ?? app.getVersion();
}

// Which index.html the window should load.
export function resolveRendererEntry(packagedIndex: string): string {
  try {
    const chosen = chooseBundle(readState(), app.getVersion(), bundleExists);
    return chosen ? path.join(bundleDir(chosen), 'index.html') : packagedIndex;
  } catch (err) {
    console.error('Update state unreadable; loading the bundle shipped with the app.', err);
    return packagedIndex;
  }
}

// True when a downloaded bundle is booting for the first time and has not yet
// reported that it mounted successfully.
export function isAwaitingBootConfirmation(): boolean {
  return readState().pending !== null;
}

export function confirmBoot(): void {
  const state = readState();
  if (!state.pending) return;
  writeState(stateAfterBootOk(state));
  pruneOldBundles();
}

// A staged bundle failed to render. Drop back to the last one that worked (or
// to the app's own copy) and restart into it.
export function rollbackAndRelaunch(): void {
  const state = readState();
  if (!state.pending) return;
  console.error(`Bundle ${state.pending} failed to boot; rolling back.`);
  const reverted = stateAfterBootFailure(state);
  writeState(reverted);
  try {
    fs.rmSync(bundleDir(state.pending), { recursive: true, force: true });
  } catch { /* the rollback matters, the cleanup does not */ }
  app.relaunch();
  app.exit(0);
}

function pruneOldBundles(): void {
  const keep = new Set([readState().active, readState().lastGood].filter(Boolean) as string[]);
  let entries: string[] = [];
  try {
    entries = fs.readdirSync(bundlesRoot(), { withFileTypes: true })
      .filter((e) => e.isDirectory()).map((e) => e.name);
  } catch { return; }
  for (const entry of entries) {
    if (keep.has(entry)) continue;
    try { fs.rmSync(path.join(bundlesRoot(), entry), { recursive: true, force: true }); } catch { /* ignore */ }
  }
}

async function getText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: { 'User-Agent': USER_AGENT, Accept: 'application/octet-stream, application/json;q=0.9' },
    signal: AbortSignal.timeout(TIMEOUT_MS),
    redirect: 'follow',
  });
  if (!response.ok) throw new Error(`${url} responded ${response.status}`);
  return await response.text();
}

export async function checkForUpdate(): Promise<UpdateCheck & { supported: boolean }> {
  const version = currentVersion();
  if (!app.isPackaged) {
    return { supported: false, available: false, reason: 'not applicable in development', currentVersion: version };
  }
  try {
    const body = await getText(RELEASE_API);
    const result = evaluateRelease(JSON.parse(body), version);
    return { supported: true, ...result };
  } catch (err) {
    console.error('Update check failed.', err);
    const reason = err instanceof Error && err.name === 'TimeoutError'
      ? 'could not reach GitHub (timed out)'
      : 'could not reach GitHub';
    return { supported: true, available: false, reason, currentVersion: version };
  }
}

// Downloads, verifies and unpacks a release bundle. Nothing is activated here:
// staging only becomes live on the next launch, after applyUpdate().
export async function downloadUpdate(): Promise<{ ok: true; version: string } | { ok: false; reason: string }> {
  const check = await checkForUpdate();
  if (!check.available) return { ok: false, reason: check.reason };

  const { version, bundleUrl, checksumUrl } = check;
  try {
    const [payloadText, checksumText] = await Promise.all([getText(bundleUrl), getText(checksumUrl)]);

    const expected = checksumText.trim().split(/\s+/)[0]?.toLowerCase();
    const actual = createHash('sha256').update(payloadText, 'utf8').digest('hex');
    if (!expected || expected !== actual) {
      return { ok: false, reason: 'the download did not match its checksum' };
    }

    const validation = validateBundle(JSON.parse(payloadText), version);
    if (!validation.ok) return { ok: false, reason: validation.reason };

    // Unpack beside the target, then move into place, so an interrupted
    // download can never leave a half-written bundle that looks complete.
    const staging = `${bundleDir(version)}.incoming`;
    await fsp.rm(staging, { recursive: true, force: true });
    for (const [relative, base64] of Object.entries(validation.bundle.files)) {
      const destination = path.join(staging, relative);
      await fsp.mkdir(path.dirname(destination), { recursive: true });
      await fsp.writeFile(destination, Buffer.from(base64, 'base64'));
    }
    await fsp.rm(bundleDir(version), { recursive: true, force: true });
    await fsp.rename(staging, bundleDir(version));

    return { ok: true, version };
  } catch (err) {
    console.error('Update download failed.', err);
    return { ok: false, reason: 'the download failed' };
  }
}

export function applyUpdate(version: string): void {
  if (!bundleExists(version)) {
    console.error(`Refusing to activate bundle ${version}: it is not on disk.`);
    return;
  }
  writeState(stateAfterStaging(readState(), version));
  app.relaunch();
  app.exit(0);
}
