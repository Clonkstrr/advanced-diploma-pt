import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { Home } from './Home';
import { courses } from '../content/registry';

const FIRST_UNIT = courses[0].units[0];

function renderHome(location?: { unitId: string; componentId: string }) {
  const store = createProgressStore(new StorageAdapter('home-' + Math.random()), () => 'now');
  if (location) store.getState().setLocation('apt501', location.unitId, location.componentId);
  render(
    <StoreProvider store={store}>
      <MemoryRouter><Home /></MemoryRouter>
    </StoreProvider>,
  );
}

describe('Home', () => {
  it('shows a Continue link when there is a saved location', () => {
    renderHome({ unitId: FIRST_UNIT.id, componentId: FIRST_UNIT.components[0].id });
    expect(screen.getByRole('link', { name: /continue where you left off/i })).toBeInTheDocument();
  });
  it('shows a Start link when there is no saved location', () => {
    renderHome();
    expect(screen.getByRole('link', { name: /start the program/i })).toBeInTheDocument();
  });
  it('shows a Start link when the saved location points at a removed unit', () => {
    renderHome({ unitId: 'apt501-u1', componentId: 'apt501-u1-c1' }); // removed scope unit
    expect(screen.getByRole('link', { name: /start the program/i })).toBeInTheDocument();
  });
});
