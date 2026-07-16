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
});
