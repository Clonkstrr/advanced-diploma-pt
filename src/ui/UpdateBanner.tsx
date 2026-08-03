import { useEffect, useState } from 'react';
import '../types/updates';

// Confirming the boot is what stops the main process rolling this bundle back,
// so it must happen even when the update check itself fails.
type Phase =
  | { kind: 'quiet' }
  | { kind: 'available'; version: string }
  | { kind: 'installing' }
  | { kind: 'failed'; message: string; version: string };

export function UpdateBanner() {
  const [phase, setPhase] = useState<Phase>({ kind: 'quiet' });

  useEffect(() => {
    const bridge = window.updates;
    if (!bridge) return;
    let cancelled = false;

    void (async () => {
      try {
        await bridge.bootOk();
      } catch { /* the rollback watchdog will decide; never break the app over this */ }
      try {
        const result = await bridge.check();
        if (!cancelled && result.available && result.version) {
          setPhase({ kind: 'available', version: result.version });
        }
      } catch { /* offline is normal for this app; stay quiet */ }
    })();

    return () => { cancelled = true; };
  }, []);

  const install = async (version: string) => {
    const bridge = window.updates;
    if (!bridge) return;
    setPhase({ kind: 'installing' });
    try {
      const result = await bridge.download();
      if (result.ok && result.version) {
        // Relaunches into the new bundle; nothing after this runs.
        await bridge.apply(result.version);
      } else {
        setPhase({ kind: 'failed', message: result.reason ?? 'the download did not finish', version });
      }
    } catch {
      setPhase({ kind: 'failed', message: 'the download did not finish', version });
    }
  };

  if (phase.kind === 'quiet') return null;

  return (
    <div className="update-banner" role="status">
      {phase.kind === 'available' && (
        <>
          <span>Version {phase.version} is available — your progress is kept.</span>
          <button type="button" onClick={() => void install(phase.version)}>Update now</button>
        </>
      )}
      {phase.kind === 'installing' && <span>Downloading the update…</span>}
      {phase.kind === 'failed' && (
        <>
          <span>The update couldn’t be installed: {phase.message}.</span>
          <button type="button" onClick={() => void install(phase.version)}>Try again</button>
        </>
      )}
    </div>
  );
}
