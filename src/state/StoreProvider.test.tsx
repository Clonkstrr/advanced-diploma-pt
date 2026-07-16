import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from './progressStore';
import { StoreProvider, useProgress } from './StoreProvider';

function Probe() {
  const loc = useProgress((s) => s.state.lastLocation?.componentId ?? 'none');
  const set = useProgress((s) => s.setLocation);
  return <button onClick={() => set('apt501', 'apt501-u1', 'apt501-u1-c1')}>{loc}</button>;
}

describe('StoreProvider', () => {
  it('exposes store state to components and re-renders on change', () => {
    const store = createProgressStore(new StorageAdapter('ctx-' + Math.random()), () => 'now');
    render(<StoreProvider store={store}><Probe /></StoreProvider>);
    const btn = screen.getByRole('button');
    expect(btn.textContent).toBe('none');
    act(() => btn.click());
    expect(btn.textContent).toBe('apt501-u1-c1');
  });
});
