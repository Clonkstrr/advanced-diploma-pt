import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { StorageAdapter } from './storage/StorageAdapter';
import { createProgressStore } from './state/progressStore';
import { StoreProvider } from './state/StoreProvider';
import { Layout, Home, Catalog, UnitRoute } from './App';
import './styles.css';

const store = createProgressStore(new StorageAdapter());

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/catalog', element: <Catalog /> },
      { path: '/course/:courseId/unit/:unitId', element: <UnitRoute /> },
    ],
  },
]);

async function boot() {
  await store.getState().hydrate();
  // Flush pending saves when the window is hidden or closed (belt-and-braces).
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
