import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { Dashboard } from './Dashboard';
import { getUnit } from '../content/registry';

const NOW = '2026-07-20T12:00:00.000Z';

function makeStore() {
  return createProgressStore(new StorageAdapter('dash-' + Math.random()), () => NOW);
}

function renderDash(store: ReturnType<typeof makeStore>) {
  render(<StoreProvider store={store}><MemoryRouter><Dashboard /></MemoryRouter></StoreProvider>);
}

// Full marks + correct safety answers on every gradeable component.
function masterTheUnit(store: ReturnType<typeof makeStore>) {
  const { unit } = getUnit('apt501', 'apt501-u1')!;
  const record = (id: string, answers: Record<string, string[]>, score: number) =>
    store.getState().recordAnswers('apt501', unit.id, id, answers, score);
  record('apt501-u1-pretest', {}, 1);
  record('apt501-u1-lab', {}, 1);
  record('apt501-u1-case', {}, 1);
  record('apt501-u1-errorid', {}, 1);
  record('apt501-u1-quiz', { u1q1: ['b'] }, 1);
  record('apt501-u1-cumulative', { cu1: ['a'] }, 1);
  for (const c of unit.components) store.getState().completeComponent('apt501', unit.id, c.id);
}

describe('Dashboard', () => {
  it('fresh state: 0 mastered, Start CTA, next action is the first unit', () => {
    renderDash(makeStore());
    expect(screen.getByText(/0 of 1 units mastered/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /start the program/i })).toBeInTheDocument();
    const next = screen.getByRole('link', { name: /next up/i });
    expect(next).toHaveAttribute('href', '/course/apt501/unit/apt501-u1');
  });

  it('saved location: Continue CTA and next action continues there', () => {
    const store = makeStore();
    store.getState().setLocation('apt501', 'apt501-u1', 'apt501-u1-c1');
    renderDash(store);
    expect(screen.getByRole('link', { name: /continue where you left off/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /next up/i }))
      .toHaveAttribute('href', '/course/apt501/unit/apt501-u1');
  });

  it('due reviews outrank everything as the next action', () => {
    const store = makeStore();
    store.getState().setLocation('apt501', 'apt501-u1', 'apt501-u1-c1');
    store.setState({
      state: {
        ...store.getState().state,
        recall: { 'apt501/apt501-u1/r1': { step: 0, due: '2026-07-19T00:00:00.000Z', lapses: 0 } },
      },
    });
    renderDash(store);
    expect(screen.getByRole('link', { name: /next up.*review/i }))
      .toHaveAttribute('href', '/review');
  });

  it('mastered unit: counts it, shows 100% ✓ in the course row, next action falls back to the catalog', () => {
    const store = makeStore();
    masterTheUnit(store);
    // no lastLocation, nothing due, nothing unmastered -> catalog
    renderDash(store);
    expect(screen.getByText(/1 of 1 units mastered/i)).toBeInTheDocument();
    expect(screen.getByText(/100% ✓/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /next up/i })).toHaveAttribute('href', '/catalog');
  });
});
