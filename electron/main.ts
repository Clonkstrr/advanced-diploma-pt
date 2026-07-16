import { app, BrowserWindow } from 'electron';
import * as path from 'path';

// Dev-server URL is honoured only in unpackaged runs so a stray env var can
// never redirect a shipped binary.
const startUrl = app.isPackaged ? undefined : process.env.ELECTRON_START_URL;

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

  if (startUrl) {
    void win.loadURL(startUrl);
  } else {
    void win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
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
    createWindow();
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
}
