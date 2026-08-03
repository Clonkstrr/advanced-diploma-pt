import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import {
  resolveRendererEntry, currentVersion, checkForUpdate, downloadUpdate,
  applyUpdate, confirmBoot, isAwaitingBootConfirmation, rollbackAndRelaunch,
} from './updater';

// Dev-server URL is honoured only in unpackaged runs so a stray env var can
// never redirect a shipped binary.
const startUrl = app.isPackaged ? undefined : process.env.ELECTRON_START_URL;

// Dev/e2e only: run against an isolated profile so scripted drives never
// touch (or wipe) the real user's progress.
if (!app.isPackaged && process.env.ELECTRON_USER_DATA) {
  app.setPath('userData', process.env.ELECTRON_USER_DATA);
}

// A freshly downloaded bundle gets one chance to prove it can render. If the
// window fails to load, or the renderer never reports in, we roll back to the
// last bundle that worked rather than leaving her with a dead window.
const BOOT_CONFIRM_TIMEOUT_MS = 25_000;
let bootWatchdog: NodeJS.Timeout | undefined;
let rolledBack = false;

function failBoot(reason: string) {
  if (rolledBack || !isAwaitingBootConfirmation()) return;
  rolledBack = true;
  clearTimeout(bootWatchdog);
  console.error(`Renderer boot failed (${reason}).`);
  rollbackAndRelaunch();
}

function armBootWatchdog() {
  if (!isAwaitingBootConfirmation()) return;
  bootWatchdog = setTimeout(() => failBoot('no confirmation from the renderer'), BOOT_CONFIRM_TIMEOUT_MS);
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 800,
    title: 'Advanced Diploma in Personal Training Science and Coaching',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // The app is fully offline: no new windows, no navigation away from the
  // initially loaded page (hash-route changes don't emit will-navigate).
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', (event, url) => {
    if (url !== win.webContents.getURL()) event.preventDefault();
  });

  win.webContents.on('did-fail-load', (_event, code, description, _url, isMainFrame) => {
    if (isMainFrame) failBoot(`${code} ${description}`);
  });
  win.webContents.on('render-process-gone', (_event, details) => failBoot(details.reason));

  if (startUrl) {
    void win.loadURL(startUrl);
  } else {
    // Loads a downloaded bundle when one is active, else the copy inside the app.
    void win.loadFile(resolveRendererEntry(path.join(__dirname, '../dist/index.html')));
  }
}

function registerUpdateHandlers() {
  ipcMain.handle('updates:current', () => ({ version: currentVersion(), supported: app.isPackaged }));
  ipcMain.handle('updates:check', () => checkForUpdate());
  ipcMain.handle('updates:download', () => downloadUpdate());
  ipcMain.handle('updates:apply', (_event, version: string) => {
    applyUpdate(version);
  });
  // The renderer mounted successfully, so a newly downloaded bundle is trusted.
  ipcMain.handle('updates:bootOk', () => {
    clearTimeout(bootWatchdog);
    confirmBoot();
  });
}

// Two instances sharing one profile would clobber the IndexedDB progress store.
if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    const [win] = BrowserWindow.getAllWindows();
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    }
  });

  app.whenReady().then(() => {
    registerUpdateHandlers();
    createWindow();
    armBootWatchdog();
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
}
