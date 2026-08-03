// Shape of the narrow update channel the Electron preload exposes. It is
// absent in a plain browser (and in tests unless stubbed), so every consumer
// must treat window.updates as optional.

export interface UpdateCheckResult {
  supported: boolean;
  available: boolean;
  currentVersion: string;
  reason?: string;
  version?: string;
  notes?: string;
}

export interface UpdateDownloadResult {
  ok: boolean;
  version?: string;
  reason?: string;
}

export interface UpdateBridge {
  current(): Promise<{ version: string; supported: boolean }>;
  check(): Promise<UpdateCheckResult>;
  download(): Promise<UpdateDownloadResult>;
  apply(version: string): Promise<void>;
  bootOk(): Promise<void>;
}

declare global {
  interface Window {
    updates?: UpdateBridge;
  }
}

export {};
