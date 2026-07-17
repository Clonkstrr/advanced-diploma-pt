import { useEffect, useRef, useState } from 'react';
import type { StorageAdapter } from '../storage/StorageAdapter';
import type { Settings as SettingsValue } from '../state/settings';
import { defaultSettings, loadSettings, saveSettings, applySettings } from '../state/settings';
import { useProgress } from '../state/StoreProvider';

const THEME_OPTIONS = [
  { value: 'system', label: 'Match system' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
] as const;

const SCALE_OPTIONS = [
  { value: 1, label: 'Normal' },
  { value: 1.15, label: 'Large (+15%)' },
  { value: 1.3, label: 'Extra large (+30%)' },
] as const;

function anchorDownload(filename: string, content: string) {
  const url = URL.createObjectURL(new Blob([content], { type: 'application/json' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function Settings(
  { adapter, download = anchorDownload }:
  { adapter: StorageAdapter; download?: (filename: string, content: string) => void },
) {
  const exportProgress = useProgress((s) => s.exportProgress);
  const importProgress = useProgress((s) => s.importProgress);
  const now = useProgress((s) => s.now);

  const [settings, setSettings] = useState<SettingsValue>(defaultSettings);
  const [pendingImport, setPendingImport] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  // latest guards against stale render closures on rapid changes; dirty stops
  // the async initial load from clobbering an edit the user already made.
  const latest = useRef(settings);
  const dirty = useRef(false);

  useEffect(() => {
    let cancelled = false;
    void loadSettings(adapter).then((loaded) => {
      if (cancelled || dirty.current) return;
      latest.current = loaded;
      setSettings(loaded);
    });
    return () => { cancelled = true; };
  }, [adapter]);

  const update = (patch: Partial<SettingsValue>) => {
    dirty.current = true;
    const next = { ...latest.current, ...patch };
    latest.current = next;
    setSettings(next);
    applySettings(next, document.documentElement);
    void saveSettings(adapter, next).catch((err) => {
      console.error('Failed to save settings.', err);
    });
  };

  const onExport = () => {
    download(`advdiploma-progress-${now().slice(0, 10)}.json`, exportProgress());
  };

  const onImportFile = async (file: File | undefined) => {
    setMessage(null);
    setPendingImport(null);
    if (!file) return;
    const text = await file.text();
    try {
      // validate now so a bad file never even arms the confirm button
      const { parseProgressExport } = await import('../state/transfer');
      parseProgressExport(text);
      setPendingImport(text);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : String(err));
    }
  };

  const confirmImport = () => {
    if (pendingImport === null) return;
    try {
      importProgress(pendingImport);
      setMessage('Progress imported.');
    } catch (err) {
      setMessage(err instanceof Error ? err.message : String(err));
    }
    setPendingImport(null);
  };

  return (
    <section className="settings">
      <h1>Settings</h1>

      <fieldset>
        <legend>Theme</legend>
        {THEME_OPTIONS.map((o) => (
          <label key={o.value}>
            <input type="radio" name="theme" checked={settings.theme === o.value}
              onChange={() => update({ theme: o.value })} />
            {o.label}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Text size</legend>
        {SCALE_OPTIONS.map((o) => (
          <label key={o.value}>
            <input type="radio" name="textScale" checked={settings.textScale === o.value}
              onChange={() => update({ textScale: o.value })} />
            {o.label}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Progress transfer</legend>
        <p>
          <button onClick={onExport}>Export progress</button>
        </p>
        <label>
          Import progress
          <input type="file" accept="application/json,.json"
            onChange={(e) => void onImportFile(e.target.files?.[0])} />
        </label>
        {pendingImport !== null && (
          <p>
            This will replace everything currently saved on this machine.
            <button onClick={confirmImport}>Replace my progress</button>
          </p>
        )}
        {message && <p className="transfer-message">{message}</p>}
      </fieldset>
    </section>
  );
}
