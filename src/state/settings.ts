import type { StorageAdapter } from '../storage/StorageAdapter';

export interface Settings {
  theme: 'system' | 'light' | 'dark';
  textScale: 1 | 1.15 | 1.3;
}

const SETTINGS_KEY = 'settings';
const THEMES = ['system', 'light', 'dark'];
const SCALES = [1, 1.15, 1.3];

export function defaultSettings(): Settings {
  return { theme: 'system', textScale: 1 };
}

export function isSettings(value: unknown): value is Settings {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return THEMES.includes(v.theme as string) && SCALES.includes(v.textScale as number);
}

// data-theme overrides the prefers-color-scheme default; 'system' removes it.
export function applySettings(settings: Settings, root: HTMLElement): void {
  if (settings.theme === 'system') delete root.dataset.theme;
  else root.dataset.theme = settings.theme;
  root.style.fontSize = settings.textScale === 1 ? '' : `${Math.round(settings.textScale * 100)}%`;
}

export async function loadSettings(adapter: StorageAdapter): Promise<Settings> {
  const stored = await adapter.loadValue(SETTINGS_KEY);
  return isSettings(stored) ? stored : defaultSettings();
}

export async function saveSettings(adapter: StorageAdapter, settings: Settings): Promise<void> {
  await adapter.saveValue(SETTINGS_KEY, settings);
}
