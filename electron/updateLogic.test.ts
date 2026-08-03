import { describe, it, expect } from 'vitest';
import {
  compareVersions, isNewer, chooseBundle, emptyState, validateBundle,
  isSafeRelativePath, evaluateRelease, stateAfterStaging, stateAfterBootOk,
  stateAfterBootFailure, BUNDLE_ASSET, CHECKSUM_ASSET,
} from './updateLogic';

const b64 = (s: string) => Buffer.from(s, 'utf8').toString('base64');

describe('version comparison', () => {
  it('orders versions numerically, not lexically', () => {
    expect(compareVersions('0.10.0', '0.9.0')).toBe(1);
    expect(compareVersions('0.2.0', '0.10.0')).toBe(-1);
    expect(compareVersions('1.0.0', '1.0.0')).toBe(0);
  });
  it('tolerates a leading v and uneven segment counts', () => {
    expect(compareVersions('v0.3.0', '0.3')).toBe(0);
    expect(isNewer('v0.3.1', '0.3.0')).toBe(true);
  });
});

describe('chooseBundle', () => {
  const exists = () => true;
  it('uses the app-shipped bundle when nothing has been downloaded', () => {
    expect(chooseBundle(emptyState, '0.2.0', exists)).toBeNull();
  });
  it('uses a downloaded bundle that is newer than the installed app', () => {
    expect(chooseBundle({ ...emptyState, active: '0.3.0' }, '0.2.0', exists)).toBe('0.3.0');
  });
  it('ignores a downloaded bundle older than a freshly installed app', () => {
    // she reinstalled a newer .dmg — the app's own copy must win
    expect(chooseBundle({ ...emptyState, active: '0.3.0' }, '0.4.0', exists)).toBeNull();
  });
  it('ignores a downloaded bundle whose files have gone missing', () => {
    expect(chooseBundle({ ...emptyState, active: '0.3.0' }, '0.2.0', () => false)).toBeNull();
  });
});

describe('boot confirmation and rollback', () => {
  it('trusts a bundle once the renderer reports a successful mount', () => {
    const staged = stateAfterStaging(emptyState, '0.3.0');
    expect(staged).toEqual({ active: '0.3.0', pending: '0.3.0', lastGood: null });
    expect(stateAfterBootOk(staged)).toEqual({ active: '0.3.0', pending: null, lastGood: '0.3.0' });
  });
  it('falls back to the last good bundle when a staged one fails to boot', () => {
    const state = { active: '0.4.0', pending: '0.4.0', lastGood: '0.3.0' };
    expect(stateAfterBootFailure(state)).toEqual({ active: '0.3.0', pending: null, lastGood: '0.3.0' });
  });
  it('falls back to the app-shipped bundle when there is no last good one', () => {
    const state = { active: '0.3.0', pending: '0.3.0', lastGood: null };
    expect(stateAfterBootFailure(state)).toEqual({ active: null, pending: null, lastGood: null });
  });
});

describe('isSafeRelativePath', () => {
  it('accepts ordinary bundle paths', () => {
    expect(isSafeRelativePath('index.html')).toBe(true);
    expect(isSafeRelativePath('assets/index-abc123.js')).toBe(true);
  });
  it('rejects traversal, absolute, UNC and drive-letter paths', () => {
    for (const bad of ['../evil.js', 'a/../../evil.js', '/etc/passwd', 'C:/evil.js',
      'assets\\evil.js', '', './x.js']) {
      expect(isSafeRelativePath(bad), bad).toBe(false);
    }
  });
});

describe('validateBundle', () => {
  const good = { version: '0.3.0', files: { 'index.html': b64('<html></html>') } };

  it('accepts a well-formed payload of the expected version', () => {
    const result = validateBundle(good, '0.3.0');
    expect(result.ok).toBe(true);
  });
  it('rejects a payload whose version does not match the release', () => {
    const result = validateBundle(good, '0.4.0');
    expect(result).toMatchObject({ ok: false });
  });
  it('rejects a payload with no index.html', () => {
    const result = validateBundle({ version: '0.3.0', files: { 'a.js': b64('x') } }, '0.3.0');
    expect(result).toMatchObject({ ok: false });
  });
  it('rejects a payload containing a traversal path', () => {
    const result = validateBundle(
      { version: '0.3.0', files: { 'index.html': b64('x'), '../evil.js': b64('x') } }, '0.3.0');
    expect(result).toMatchObject({ ok: false });
  });
  it('rejects non-base64 file contents', () => {
    const result = validateBundle(
      { version: '0.3.0', files: { 'index.html': 'not base64!!' } }, '0.3.0');
    expect(result).toMatchObject({ ok: false });
  });
  it('rejects junk', () => {
    expect(validateBundle(null, '0.3.0').ok).toBe(false);
    expect(validateBundle({ version: '0.3.0' }, '0.3.0').ok).toBe(false);
  });
});

describe('evaluateRelease', () => {
  const assets = [
    { name: BUNDLE_ASSET, browser_download_url: 'https://example.test/web-bundle.json' },
    { name: CHECKSUM_ASSET, browser_download_url: 'https://example.test/web-bundle.sha256' },
  ];

  it('offers a newer release that has a bundle attached', () => {
    const result = evaluateRelease({ tag_name: 'v0.3.0', assets, body: 'notes' }, '0.2.0');
    expect(result).toMatchObject({ available: true, version: '0.3.0', notes: 'notes' });
  });
  it('does not offer the version already running', () => {
    expect(evaluateRelease({ tag_name: 'v0.2.0', assets }, '0.2.0')).toMatchObject({ available: false });
  });
  it('does not offer a release that only ships a .dmg', () => {
    const dmgOnly = [{ name: 'App-0.3.0.dmg', browser_download_url: 'https://example.test/a.dmg' }];
    expect(evaluateRelease({ tag_name: 'v0.3.0', assets: dmgOnly }, '0.2.0'))
      .toMatchObject({ available: false, reason: 'release has no web bundle attached' });
  });
});
