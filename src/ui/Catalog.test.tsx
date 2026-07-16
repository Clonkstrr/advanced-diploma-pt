import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import type { createProgressStore } from '../state/progressStore';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore as makeStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { Catalog } from './Catalog';
import { getUnit } from '../content/registry';

// Progress is seeded before render, mirroring a relaunch that lands on the catalog.
function renderCatalog(seed?: (store: ReturnType<typeof createProgressStore>) => void) {
  const store = makeStore(new StorageAdapter('cat-' + Math.random()), () => 'now');
  seed?.(store);
  render(
    <StoreProvider store={store}>
      <MemoryRouter><Catalog /></MemoryRouter>
    </StoreProvider>,
  );
}

function unitListItem(): HTMLElement {
  return screen.getByRole('link', { name: /APT 501\.1/ }).closest('li')!;
}

describe('Catalog', () => {
  it('shows no status marker for an untouched unit', () => {
    renderCatalog();
    expect(unitListItem().textContent).not.toMatch(/✓|in progress/);
  });

  it('shows "in progress" once any component is completed', () => {
    const { unit } = getUnit('apt501', 'apt501-u1')!;
    renderCatalog((store) => {
      store.getState().completeComponent('apt501', unit.id, unit.components[0].id);
    });
    expect(unitListItem().textContent).toMatch(/in progress/);
    expect(unitListItem().textContent).not.toMatch(/✓/);
  });

  it('shows a check mark when every component is completed', () => {
    const { unit } = getUnit('apt501', 'apt501-u1')!;
    renderCatalog((store) => {
      for (const c of unit.components) {
        store.getState().completeComponent('apt501', unit.id, c.id);
      }
    });
    expect(unitListItem().textContent).toMatch(/✓/);
  });
});
