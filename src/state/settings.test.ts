import { describe, it, expect } from 'vitest';
import { StorageAdapter } from '../storage/StorageAdapter';
import { defaultSettings, isSettings, applySettings, loadSettings, saveSettings } from './settings';

describe('settings', () => {
  it('defaults to system theme at normal scale', () => {
    expect(defaultSettings()).toEqual({ theme: 'system', textScale: 1 });
  });

  it('validates shapes', () => {
    expect(isSettings({ theme: 'dark', textScale: 1.15 })).toBe(true);
    expect(isSettings({ theme: 'blue', textScale: 1 })).toBe(false);
    expect(isSettings({ theme: 'dark', textScale: 2 })).toBe(false);
    expect(isSettings(null)).toBe(false);
  });

  it('applySettings sets data-theme and font scale on the root element', () => {
    const root = document.createElement('html');
    applySettings({ theme: 'dark', textScale: 1.3 }, root);
    expect(root.dataset.theme).toBe('dark');
    expect(root.style.fontSize).toBe('130%');
    applySettings({ theme: 'system', textScale: 1 }, root);
    expect(root.dataset.theme).toBeUndefined();
    expect(root.style.fontSize).toBe('');
  });

  it('round-trips through the adapter and falls back to defaults on garbage', async () => {
    const adapter = new StorageAdapter('settings-' + Math.random().toString(36).slice(2));
    expect(await loadSettings(adapter)).toEqual(defaultSettings());
    await saveSettings(adapter, { theme: 'light', textScale: 1.15 });
    expect(await loadSettings(adapter)).toEqual({ theme: 'light', textScale: 1.15 });
    await adapter.saveValue('settings', { junk: true });
    expect(await loadSettings(adapter)).toEqual(defaultSettings());
  });
});
