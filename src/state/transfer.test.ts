import { describe, it, expect } from 'vitest';
import { emptyProgress } from '../types/progress';
import { serializeProgress, parseProgressExport } from './transfer';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from './progressStore';

const NOW = '2026-07-16T12:00:00.000Z';

describe('progress transfer', () => {
  it('round-trips a progress state through the export envelope', () => {
    const state = emptyProgress(NOW);
    state.courses['apt501'] = { units: {} };
    state.recall = { 'a/u/c': { step: 1, due: NOW, lapses: 0 } };
    const parsed = parseProgressExport(serializeProgress(state, NOW));
    expect(parsed).toEqual(state);
  });

  it('rejects JSON from a different app or kind', () => {
    expect(() => parseProgressExport(JSON.stringify({ app: 'other', progress: {} })))
      .toThrow(/not .*progress export/i);
  });

  it('rejects an unsupported export version', () => {
    const good = JSON.parse(serializeProgress(emptyProgress(NOW), NOW));
    good.version = 99;
    expect(() => parseProgressExport(JSON.stringify(good))).toThrow(/version/i);
  });

  it('rejects a malformed progress payload', () => {
    const good = JSON.parse(serializeProgress(emptyProgress(NOW), NOW));
    good.progress = { version: 1 }; // missing courses/updatedAt
    expect(() => parseProgressExport(JSON.stringify(good))).toThrow(/malformed/i);
  });

  it('rejects non-JSON with a readable message', () => {
    expect(() => parseProgressExport('not json at all')).toThrow(/could not be read/i);
  });

  it('store: export -> wipe -> import restores everything and persists', async () => {
    const adapter = new StorageAdapter('xfer-' + Math.random().toString(36).slice(2));
    const a = createProgressStore(adapter, () => NOW);
    a.getState().recordAnswers('apt501', 'apt501-u1', 'apt501-u1-quiz', { q: ['a'] }, 1);
    a.getState().scheduleRecall('apt501', 'apt501-u1', { r1: 'good' });
    const exported = a.getState().exportProgress();

    const fresh = createProgressStore(
      new StorageAdapter('xfer2-' + Math.random().toString(36).slice(2)), () => NOW);
    fresh.getState().importProgress(exported);
    expect(fresh.getState().state.courses['apt501'].units['apt501-u1']
      .components['apt501-u1-quiz'].score).toBe(1);
    expect(fresh.getState().state.recall!['apt501/apt501-u1/r1']).toBeDefined();
    expect(() => fresh.getState().importProgress('garbage')).toThrow();
  });
});
