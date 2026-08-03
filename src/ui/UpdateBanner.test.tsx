import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { UpdateBanner } from './UpdateBanner';
import type { UpdateBridge, UpdateCheckResult, UpdateDownloadResult } from '../types/updates';

function stubBridge(over: {
  check?: UpdateCheckResult;
  download?: UpdateDownloadResult;
} = {}): UpdateBridge {
  const bridge: UpdateBridge = {
    current: vi.fn().mockResolvedValue({ version: '0.2.0', supported: true }),
    check: vi.fn().mockResolvedValue(
      over.check ?? { supported: true, available: false, reason: 'already up to date', currentVersion: '0.2.0' }),
    download: vi.fn().mockResolvedValue(over.download ?? { ok: true, version: '0.3.0' }),
    apply: vi.fn().mockResolvedValue(undefined),
    bootOk: vi.fn().mockResolvedValue(undefined),
  };
  window.updates = bridge;
  return bridge;
}

afterEach(() => { delete window.updates; });

const AVAILABLE: UpdateCheckResult = {
  supported: true, available: true, version: '0.3.0', currentVersion: '0.2.0', notes: '',
};

describe('UpdateBanner', () => {
  it('renders nothing outside Electron', () => {
    const { container } = render(<UpdateBanner />);
    expect(container).toBeEmptyDOMElement();
  });

  it('stays quiet when the app is already up to date', async () => {
    const bridge = stubBridge();
    const { container } = render(<UpdateBanner />);
    await waitFor(() => expect(bridge.check).toHaveBeenCalled());
    expect(container).toBeEmptyDOMElement();
  });

  it('confirms a successful boot so the main process keeps the new bundle', async () => {
    const bridge = stubBridge();
    render(<UpdateBanner />);
    await waitFor(() => expect(bridge.bootOk).toHaveBeenCalled());
  });

  it('offers an update button when a newer version is published', async () => {
    stubBridge({ check: AVAILABLE });
    render(<UpdateBanner />);
    expect(await screen.findByRole('button', { name: /update now/i })).toBeInTheDocument();
    expect(screen.getByText(/version 0\.3\.0 is available/i)).toBeInTheDocument();
  });

  it('downloads and applies the update when the button is pressed', async () => {
    const bridge = stubBridge({ check: AVAILABLE });
    render(<UpdateBanner />);
    fireEvent.click(await screen.findByRole('button', { name: /update now/i }));
    await waitFor(() => expect(bridge.download).toHaveBeenCalled());
    await waitFor(() => expect(bridge.apply).toHaveBeenCalledWith('0.3.0'));
  });

  it('reports a failed download and offers a retry instead of applying it', async () => {
    const bridge = stubBridge({
      check: AVAILABLE,
      download: { ok: false, reason: 'the download did not match its checksum' },
    });
    render(<UpdateBanner />);
    fireEvent.click(await screen.findByRole('button', { name: /update now/i }));
    expect(await screen.findByText(/did not match its checksum/i)).toBeInTheDocument();
    expect(bridge.apply).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
  });

  it('survives an update check that throws', async () => {
    const bridge = stubBridge();
    (bridge.check as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('offline'));
    const { container } = render(<UpdateBanner />);
    await waitFor(() => expect(bridge.check).toHaveBeenCalled());
    expect(container).toBeEmptyDOMElement();
  });
});
