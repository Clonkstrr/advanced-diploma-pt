import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import type { createProgressStore } from '../state/progressStore';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore as makeStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { Catalog } from './Catalog';
import { getUnit, courses } from '../content/registry';

const FIRST_UNIT_ID = courses[0].units[0].id;

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

// Marks on every gradeable component, derived from the content itself.
const GRADEABLE = new Set(['classification', 'numericLab', 'errorId', 'branchingCase', 'evidenceAppraisal']);
function completeTheUnit(store: ReturnType<typeof createProgressStore>, score: number) {
  const { unit } = getUnit('apt501', FIRST_UNIT_ID)!;
  for (const c of unit.components) {
    if (c.type === 'questionSet') {
      const answers = Object.fromEntries(
        c.questions.map((q) => [q.id, q.options.filter((o) => o.correct).map((o) => o.id)]));
      store.getState().recordAnswers('apt501', unit.id, c.id, answers, score);
    } else if (GRADEABLE.has(c.type)) {
      store.getState().recordAnswers('apt501', unit.id, c.id, {}, score);
    }
    store.getState().completeComponent('apt501', unit.id, c.id);
  }
}

describe('Catalog', () => {
  it('shows no status marker for an untouched unit', () => {
    renderCatalog();
    expect(unitListItem().textContent).not.toMatch(/✓|in progress/);
  });

  it('shows the whole program: unauthored courses appear as coming soon', () => {
    renderCatalog();
    expect(screen.getByText(/APT 502 — Functional Human Anatomy/)).toBeInTheDocument();
    expect(screen.getByText(/APT 706 — Supervised Practicum/)).toBeInTheDocument();
    expect(screen.getAllByText(/coming soon/i)).toHaveLength(23); // 24 courses, 1 authored
  });

  it('shows "in progress" once any component is completed', () => {
    const { unit } = getUnit('apt501', FIRST_UNIT_ID)!;
    renderCatalog((store) => {
      store.getState().completeComponent('apt501', unit.id, unit.components[0].id);
    });
    expect(unitListItem().textContent).toMatch(/in progress/);
    expect(unitListItem().textContent).not.toMatch(/✓/);
  });

  it('shows a check mark with mastery percent when mastered', () => {
    renderCatalog((store) => completeTheUnit(store, 1));
    expect(unitListItem().textContent).toMatch(/100% ✓/);
  });

  it('shows "needs review" when complete but below the mastery threshold', () => {
    renderCatalog((store) => completeTheUnit(store, 0.6));
    expect(unitListItem().textContent).toMatch(/needs review/);
    expect(unitListItem().textContent).not.toMatch(/✓/);
  });
});
