import { describe, it, expect, beforeEach, vi } from 'vitest';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from './progressStore';

function freshStore() {
  const adapter = new StorageAdapter('pstore-' + Math.random().toString(36).slice(2));
  return { adapter, store: createProgressStore(adapter, () => '2026-07-15T00:00:00.000Z') };
}

describe('progressStore', () => {
  let ctx: ReturnType<typeof freshStore>;
  beforeEach(() => { ctx = freshStore(); });

  it('records answers and marks components complete', async () => {
    const { store } = ctx;
    store.getState().recordAnswers('apt501', 'apt501-u1', 'apt501-u1-quiz', { u1q1: ['b'] }, 1);
    store.getState().completeComponent('apt501', 'apt501-u1', 'apt501-u1-quiz');
    const cp = store.getState().state.courses['apt501'].units['apt501-u1'].components['apt501-u1-quiz'];
    expect(cp.completed).toBe(true);
    expect(cp.score).toBe(1);
    expect(cp.answers).toEqual({ u1q1: ['b'] });
  });

  it('setLocation updates lastLocation for resume', () => {
    const { store } = ctx;
    store.getState().setLocation('apt501', 'apt501-u1', 'apt501-u1-c1');
    expect(store.getState().state.lastLocation)
      .toEqual({ courseId: 'apt501', unitId: 'apt501-u1', componentId: 'apt501-u1-c1' });
  });

  it('hydrate() restores a previously saved state through a new store', async () => {
    const adapter = new StorageAdapter('shared-' + Math.random().toString(36).slice(2));
    const a = createProgressStore(adapter, () => '2026-07-15T00:00:00.000Z');
    a.getState().setLocation('apt501', 'apt501-u1', 'apt501-u1-c2');
    await a.getState().flush();
    const b = createProgressStore(adapter, () => '2026-07-15T00:00:00.000Z');
    await b.getState().hydrate();
    expect(b.getState().state.lastLocation?.componentId).toBe('apt501-u1-c2');
  });

  it('scheduleRecall and reviewCard persist recall state across a reload', async () => {
    const adapter = new StorageAdapter('recall-' + Math.random().toString(36).slice(2));
    const a = createProgressStore(adapter, () => '2026-07-16T12:00:00.000Z');
    a.getState().scheduleRecall('apt501', 'apt501-u1', { r1: 'good', r2: 'again' });
    a.getState().reviewCard('apt501/apt501-u1/r2', 'good');
    await a.getState().flush();

    const b = createProgressStore(adapter, () => '2026-07-16T12:00:00.000Z');
    await b.getState().hydrate();
    const recall = b.getState().state.recall!;
    expect(recall['apt501/apt501-u1/r1'].step).toBe(0);
    expect(recall['apt501/apt501-u1/r1'].lapses).toBe(0);
    expect(recall['apt501/apt501-u1/r2'].lapses).toBe(1); // the again
    expect(recall['apt501/apt501-u1/r2'].due > '2026-07-18').toBe(true); // re-rated good -> +3d
  });

  it('hydrate resolves and keeps empty in-memory state when loading fails', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const broken = {
      loadProgress: () => Promise.reject(new Error('idb unavailable')),
      saveProgress: () => Promise.resolve(),
    } as unknown as StorageAdapter;
    const store = createProgressStore(broken, () => '2026-07-15T00:00:00.000Z');
    await expect(store.getState().hydrate()).resolves.toBeUndefined();
    expect(store.getState().state.courses).toEqual({});
    expect(errorSpy).toHaveBeenCalled();
    errorSpy.mockRestore();
  });

  it('hydrate backs up an unrecognised-version blob instead of adopting it', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const { adapter, store } = ctx;
    const oldBlob = { version: 999, courses: { legacy: { units: {} } }, updatedAt: 'x' };
    await adapter.saveProgress(oldBlob as never);
    await store.getState().hydrate();
    expect(store.getState().state.courses).toEqual({});
    expect(await adapter.loadBackup('progress.v999.bak')).toEqual(oldBlob);
    expect(errorSpy).toHaveBeenCalled();
    errorSpy.mockRestore();
  });

  it('hydrate backs up a malformed blob even when its version matches', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const { adapter, store } = ctx;
    const badBlob = { version: 1, updatedAt: 42 }; // no courses, wrong updatedAt type
    await adapter.saveProgress(badBlob as never);
    await store.getState().hydrate();
    expect(store.getState().state.courses).toEqual({});
    expect(await adapter.loadBackup('progress.v1.bak')).toEqual(badBlob);
    errorSpy.mockRestore();
  });
});
