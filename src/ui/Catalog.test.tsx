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

  // Mastery answers: full marks on every gradeable component, safety items correct.
  function masterUnit(store: Parameters<NonNullable<Parameters<typeof renderCatalog>[0]>>[0],
    quizSafetyAnswer: string) {
    const { unit } = getUnit('apt501', 'apt501-u1')!;
    const record = (id: string, answers: Record<string, string[]>, score: number) =>
      store.getState().recordAnswers('apt501', unit.id, id, answers, score);
    record('apt501-u1-pretest', {}, 1);
    record('apt501-u1-lab', {}, 1);
    record('apt501-u1-case', {}, 1);
    record('apt501-u1-errorid', {}, 1);
    record('apt501-u1-quiz', { u1q1: [quizSafetyAnswer] }, 1);
    record('apt501-u1-cumulative', { cu1: ['a'] }, 1);
    for (const c of unit.components) {
      store.getState().completeComponent('apt501', unit.id, c.id);
    }
  }

  it('shows a check mark with mastery percent when mastered', () => {
    renderCatalog((store) => masterUnit(store, 'b')); // 'b' = correct safety answer
    expect(unitListItem().textContent).toMatch(/100% ✓/);
  });

  it('shows "needs review" when complete but a safety-critical item failed', () => {
    renderCatalog((store) => masterUnit(store, 'a')); // wrong safety answer
    expect(unitListItem().textContent).toMatch(/needs review/);
    expect(unitListItem().textContent).not.toMatch(/✓/);
  });
});
