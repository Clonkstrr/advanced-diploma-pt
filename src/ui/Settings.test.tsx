import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { loadSettings } from '../state/settings';
import { Settings } from './Settings';

const NOW = '2026-07-16T12:00:00.000Z';

function setup(download?: (filename: string, content: string) => void) {
  const adapter = new StorageAdapter('set-' + Math.random().toString(36).slice(2));
  const store = createProgressStore(adapter, () => NOW);
  render(
    <StoreProvider store={store}>
      <MemoryRouter><Settings adapter={adapter} download={download} /></MemoryRouter>
    </StoreProvider>,
  );
  return { adapter, store };
}

describe('Settings', () => {
  it('a slow initial load does not clobber a change the user already made', async () => {
    let resolveLoad: (v: unknown) => void;
    const saveValue = vi.fn().mockResolvedValue(undefined);
    const slowAdapter = {
      loadValue: () => new Promise((res) => { resolveLoad = res; }),
      saveValue,
    } as unknown as StorageAdapter;
    const store = createProgressStore(new StorageAdapter('slow-' + Math.random()), () => NOW);
    render(
      <StoreProvider store={store}>
        <MemoryRouter><Settings adapter={slowAdapter} /></MemoryRouter>
      </StoreProvider>,
    );
    // user flips to dark while the stored settings are still loading
    fireEvent.click(screen.getByLabelText(/^dark$/i));
    expect(document.documentElement.dataset.theme).toBe('dark');
    // the stored value (empty -> defaults) arrives late; flush its .then chain
    await act(async () => { resolveLoad!(null); });
    // the late load must not revert the user's choice…
    expect(screen.getByLabelText(/^dark$/i)).toBeChecked();
    // …including through a follow-up change built on current state
    fireEvent.click(screen.getByLabelText(/large \(\+15%\)/i));
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(saveValue).toHaveBeenLastCalledWith('settings', { theme: 'dark', textScale: 1.15 });
    delete document.documentElement.dataset.theme;
    document.documentElement.style.fontSize = '';
  });

  it('two rapid changes to different fields both stick', async () => {
    const { adapter } = setup();
    fireEvent.click(screen.getByLabelText(/^dark$/i));
    fireEvent.click(screen.getByLabelText(/large \(\+15%\)/i));
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(document.documentElement.style.fontSize).toBe('115%');
    await waitFor(async () => {
      expect(await loadSettings(adapter)).toEqual({ theme: 'dark', textScale: 1.15 });
    });
    delete document.documentElement.dataset.theme;
    document.documentElement.style.fontSize = '';
  });

  it('changing the theme applies it to the document and persists it', async () => {
    const { adapter } = setup();
    fireEvent.click(screen.getByLabelText(/^dark$/i));
    expect(document.documentElement.dataset.theme).toBe('dark');
    await waitFor(async () => {
      expect((await loadSettings(adapter)).theme).toBe('dark');
    });
    // clean up the shared document
    delete document.documentElement.dataset.theme;
  });

  it('changing text size applies the scale and persists it', async () => {
    const { adapter } = setup();
    fireEvent.click(screen.getByLabelText(/large \(\+15%\)/i));
    expect(document.documentElement.style.fontSize).toBe('115%');
    await waitFor(async () => {
      expect((await loadSettings(adapter)).textScale).toBe(1.15);
    });
    document.documentElement.style.fontSize = '';
  });

  it('import requires arming, then applies a valid export', async () => {
    const { store } = setup();
    const donor = createProgressStore(new StorageAdapter('donor-' + Math.random()), () => NOW);
    donor.getState().setLocation('apt501', 'apt501-u1', 'apt501-u1-c1');
    const json = donor.getState().exportProgress();

    const file = new File([json], 'progress.json', { type: 'application/json' });
    fireEvent.change(screen.getByLabelText(/import progress/i), { target: { files: [file] } });

    // two-step confirm: nothing applied until the armed button is clicked
    const arm = await screen.findByRole('button', { name: /replace my progress/i });
    expect(store.getState().state.lastLocation).toBeUndefined();
    fireEvent.click(arm);
    await waitFor(() => {
      expect(store.getState().state.lastLocation?.componentId).toBe('apt501-u1-c1');
    });
    expect(screen.getByText(/progress imported/i)).toBeInTheDocument();
  });

  it('shows the parse error for an invalid file and never arms', async () => {
    setup();
    const file = new File(['junk'], 'junk.json', { type: 'application/json' });
    fireEvent.change(screen.getByLabelText(/import progress/i), { target: { files: [file] } });
    expect(await screen.findByText(/could not be read/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /replace my progress/i })).not.toBeInTheDocument();
  });

  it('export hands the serialized progress to the download helper', () => {
    const download = vi.fn();
    const { store } = setup(download);
    store.getState().setLocation('apt501', 'apt501-u1', 'apt501-u1-c2');
    fireEvent.click(screen.getByRole('button', { name: /export progress/i }));
    expect(download).toHaveBeenCalledTimes(1);
    const [filename, content] = download.mock.calls[0];
    expect(filename).toMatch(/^advdiploma-progress-2026-07-16\.json$/);
    expect(JSON.parse(content).progress.lastLocation.componentId).toBe('apt501-u1-c2');
  });
});
