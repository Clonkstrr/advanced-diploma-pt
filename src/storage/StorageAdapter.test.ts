import { describe, it, expect, beforeEach } from 'vitest';
import { StorageAdapter } from './StorageAdapter';
import { emptyProgress } from '../types/progress';

describe('StorageAdapter', () => {
  let store: StorageAdapter;
  beforeEach(() => { store = new StorageAdapter('test-db-' + Math.random().toString(36).slice(2)); });

  it('returns null before anything is saved', async () => {
    expect(await store.loadProgress()).toBeNull();
  });

  it('persists and reloads a progress object', async () => {
    const p = emptyProgress('2026-07-15T00:00:00.000Z');
    p.courses['apt501'] = { units: {} };
    await store.saveProgress(p);
    const loaded = await store.loadProgress();
    expect(loaded?.courses['apt501']).toBeDefined();
  });

  it('saves and reloads a backup blob under its own key', async () => {
    const blob = { version: 999, courses: { legacy: { units: {} } }, updatedAt: 'x' };
    await store.saveBackup('progress.v999.bak', blob);
    expect(await store.loadBackup('progress.v999.bak')).toEqual(blob);
  });

  it('loadBackup returns null when no backup exists', async () => {
    expect(await store.loadBackup('progress.v0.bak')).toBeNull();
  });

  it('a backup does not disturb the main progress key', async () => {
    const p = emptyProgress('2026-07-15T00:00:00.000Z');
    await store.saveProgress(p);
    await store.saveBackup('progress.v999.bak', { version: 999 });
    expect((await store.loadProgress())?.version).toBe(p.version);
  });
});
