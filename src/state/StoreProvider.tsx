import React, { createContext, useContext } from 'react';
import { useStore } from 'zustand';
import type { StoreApi } from 'zustand/vanilla';
import type { ProgressActions } from './progressStore';

const StoreContext = createContext<StoreApi<ProgressActions> | null>(null);

export function StoreProvider(
  { store, children }: { store: StoreApi<ProgressActions>; children: React.ReactNode },
) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export function useProgress<T>(selector: (s: ProgressActions) => T): T {
  const store = useContext(StoreContext);
  if (!store) throw new Error('useProgress must be used within StoreProvider');
  return useStore(store, selector);
}
