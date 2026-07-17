import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { StorageAdapter } from './storage/StorageAdapter';
import { createProgressStore } from './state/progressStore';
import { loadSettings, applySettings } from './state/settings';
import { StoreProvider } from './state/StoreProvider';
import { Layout, Home, Catalog, Review, UnitRoute } from './App';
import './styles.css';

const adapter = new StorageAdapter();
const store = createProgressStore(adapter);

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/catalog', element: <Catalog /> },
      { path: '/review', element: <Review /> },
      { path: '/course/:courseId/unit/:unitId', element: <UnitRoute /> },
    ],
  },
]);

async function boot() {
  // hydrate() contains its own error handling, but nothing before render is
  // allowed to leave the window permanently blank — so guard here too.
  try {
    await store.getState().hydrate();
  } catch (err) {
    console.error('Boot hydration failed; starting with in-memory state.', err);
  }
  try {
    applySettings(await loadSettings(adapter), document.documentElement);
  } catch (err) {
    console.error('Settings failed to load; using defaults.', err);
  }
  // Flush pending saves when the window is hidden or closed (belt-and-braces).
  // Note: the beforeunload flush is best-effort only — the async IndexedDB write it
  // triggers may not finish before an abrupt close. The real safety net is that every
  // action already writes through (via the debounced saver) plus the visibilitychange
  // flush, which fires reliably before beforeunload in practice.
  const flush = () => { void store.getState().flush(); };
  window.addEventListener('visibilitychange', flush);
  window.addEventListener('beforeunload', flush);

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <StoreProvider store={store}>
        <RouterProvider router={router} />
      </StoreProvider>
    </React.StrictMode>,
  );
}

void boot();
