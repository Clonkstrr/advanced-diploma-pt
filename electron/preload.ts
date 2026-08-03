// Minimal preload. The renderer gets no filesystem or network access — only a
// narrow, named update channel it can ask questions on. Progress persistence
// still happens entirely via IndexedDB inside the renderer.
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('updates', {
  current: () => ipcRenderer.invoke('updates:current'),
  check: () => ipcRenderer.invoke('updates:check'),
  download: () => ipcRenderer.invoke('updates:download'),
  apply: (version: string) => ipcRenderer.invoke('updates:apply', version),
  bootOk: () => ipcRenderer.invoke('updates:bootOk'),
});
