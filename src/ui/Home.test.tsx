import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { Home } from './Home';

function renderHome(withLocation: boolean) {
  const store = createProgressStore(new StorageAdapter('home-' + Math.random()), () => 'now');
  if (withLocation) store.getState().setLocation('apt501', 'apt501-u1', 'apt501-u1-c1');
  render(
    <StoreProvider store={store}>
      <MemoryRouter><Home /></MemoryRouter>
    </StoreProvider>,
  );
}

describe('Home', () => {
  it('shows a Continue link when there is a saved location', () => {
    renderHome(true);
    expect(screen.getByRole('link', { name: /continue where you left off/i })).toBeInTheDocument();
  });
  it('shows a Start link when there is no saved location', () => {
    renderHome(false);
    expect(screen.getByRole('link', { name: /start the program/i })).toBeInTheDocument();
  });
});
