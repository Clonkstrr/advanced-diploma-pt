// Pure update logic — no electron, fs, or network imports, so it is directly
// unit-testable and every decision the updater makes can be pinned by a test.
//
// The app ships as a large, rarely-changing Electron shell plus a small React
// bundle (~600 KB). Updates replace only the bundle: it is written into
// userData and loaded from there instead of the copy inside the .app. Nothing
// touches the installed application, so no code signature is involved — which
// is what makes over-the-air updates possible on an unsigned macOS build.

export interface BundleState {
  active: string | null;    // downloaded bundle currently in use (null = the one shipped in the app)
  pending: string | null;   // staged bundle that has not yet proved it can boot
  lastGood: string | null;  // newest downloaded bundle that booted successfully
}

export const emptyState: BundleState = { active: null, pending: null, lastGood: null };

export interface BundlePayload {
  version: string;
  files: Record<string, string>;  // relative path -> base64 contents
}

export function parseVersion(v: string): number[] {
  return v.trim().replace(/^v/i, '').split('.').map((p) => {
    const n = parseInt(p, 10);
    return Number.isFinite(n) ? n : 0;
  });
}

export function compareVersions(a: string, b: string): number {
  const pa = parseVersion(a);
  const pb = parseVersion(b);
  for (let i = 0; i < Math.max(pa.length, pb.length); i += 1) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (diff !== 0) return diff < 0 ? -1 : 1;
  }
  return 0;
}

export function isNewer(candidate: string, current: string): boolean {
  return compareVersions(candidate, current) > 0;
}

// A downloaded bundle is used only when it is present on disk AND strictly
// newer than the bundle baked into the installed app — so reinstalling a newer
// .dmg always wins over a stale download.
export function chooseBundle(
  state: BundleState,
  packagedVersion: string,
  bundleExists: (version: string) => boolean,
): string | null {
  const active = state.active;
  if (!active) return null;
  if (!isNewer(active, packagedVersion)) return null;
  if (!bundleExists(active)) return null;
  return active;
}

export function stateAfterStaging(state: BundleState, version: string): BundleState {
  return { active: version, pending: version, lastGood: state.lastGood };
}

// The renderer reports a successful mount; the bundle is then trusted.
export function stateAfterBootOk(state: BundleState): BundleState {
  return { active: state.active, pending: null, lastGood: state.active ?? state.lastGood };
}

// The bundle failed to load (or never reported in). Fall back to the last
// bundle known to work, or to the one inside the app.
export function stateAfterBootFailure(state: BundleState): BundleState {
  return { active: state.lastGood, pending: null, lastGood: state.lastGood };
}

// Guards against a corrupt or hostile payload escaping the bundle directory
// (path traversal, absolute paths, Windows drive letters, UNC paths).
export function isSafeRelativePath(p: string): boolean {
  if (!p || p.length > 200) return false;
  if (p.includes('\\') || p.includes(':')) return false;
  if (p.startsWith('/')) return false;
  if (p.includes('\0')) return false;
  const segments = p.split('/');
  return segments.every((s) => s.length > 0 && s !== '.' && s !== '..');
}

const BASE64 = /^[A-Za-z0-9+/]*={0,2}$/;

export type BundleCheck =
  | { ok: true; bundle: BundlePayload }
  | { ok: false; reason: string };

export function validateBundle(raw: unknown, expectedVersion: string): BundleCheck {
  if (typeof raw !== 'object' || raw === null) return { ok: false, reason: 'payload is not an object' };
  const candidate = raw as Partial<BundlePayload>;

  if (typeof candidate.version !== 'string' || !candidate.version) {
    return { ok: false, reason: 'payload has no version' };
  }
  if (compareVersions(candidate.version, expectedVersion) !== 0) {
    return { ok: false, reason: `payload is version ${candidate.version}, expected ${expectedVersion}` };
  }
  const files = candidate.files;
  if (typeof files !== 'object' || files === null || Array.isArray(files)) {
    return { ok: false, reason: 'payload has no files map' };
  }
  const names = Object.keys(files);
  if (names.length === 0) return { ok: false, reason: 'payload contains no files' };
  if (!names.includes('index.html')) return { ok: false, reason: 'payload has no index.html' };

  for (const name of names) {
    if (!isSafeRelativePath(name)) return { ok: false, reason: `unsafe path in payload: ${name}` };
    const contents = (files as Record<string, unknown>)[name];
    if (typeof contents !== 'string' || !BASE64.test(contents)) {
      return { ok: false, reason: `file ${name} is not base64` };
    }
  }
  return { ok: true, bundle: { version: candidate.version, files: files as Record<string, string> } };
}

export interface ReleaseAsset { name: string; browser_download_url: string }
export interface ReleaseInfo { tag_name?: string; assets?: ReleaseAsset[]; body?: string }

export const BUNDLE_ASSET = 'web-bundle.json';
export const CHECKSUM_ASSET = 'web-bundle.sha256';

export type UpdateCheck =
  | { available: false; reason: string; currentVersion: string }
  | { available: true; version: string; bundleUrl: string; checksumUrl: string; notes: string; currentVersion: string };

// Decides whether a GitHub release is a usable update for the running bundle.
export function evaluateRelease(release: ReleaseInfo, currentVersion: string): UpdateCheck {
  const tag = release.tag_name;
  if (!tag) return { available: false, reason: 'release has no tag', currentVersion };

  const version = tag.replace(/^v/i, '');
  if (!isNewer(version, currentVersion)) {
    return { available: false, reason: 'already up to date', currentVersion };
  }
  const assets = release.assets ?? [];
  const bundle = assets.find((a) => a.name === BUNDLE_ASSET);
  const checksum = assets.find((a) => a.name === CHECKSUM_ASSET);
  if (!bundle || !checksum) {
    return { available: false, reason: 'release has no web bundle attached', currentVersion };
  }
  return {
    available: true,
    version,
    bundleUrl: bundle.browser_download_url,
    checksumUrl: checksum.browser_download_url,
    notes: release.body ?? '',
    currentVersion,
  };
}
