import { describe, it, expect, beforeEach } from 'vitest';
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
});
