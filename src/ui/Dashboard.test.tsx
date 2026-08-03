import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { Dashboard } from './Dashboard';
import { getUnit, courses } from '../content/registry';

const NOW = '2026-07-20T12:00:00.000Z';
const UNIT_COUNT = courses.flatMap((c) => c.units).length;
const FIRST_UNIT_ID = courses[0].units[0].id;

function makeStore() {
  return createProgressStore(new StorageAdapter('dash-' + Math.random()), () => NOW);
}

function renderDash(store: ReturnType<typeof makeStore>) {
  render(<StoreProvider store={store}><MemoryRouter><Dashboard /></MemoryRouter></StoreProvider>);
}

// Marks on every gradeable component, derived from the content itself so the
// helper survives content changes.
const GRADEABLE = new Set(['classification', 'numericLab', 'errorId', 'branchingCase', 'evidenceAppraisal']);
function masterTheUnit(store: ReturnType<typeof makeStore>, unitId = FIRST_UNIT_ID, score = 1) {
  const { unit } = getUnit('apt501', unitId)!;
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

describe('Dashboard', () => {
  it('fresh state: 0 mastered, Start CTA, next action is the first unit', () => {
    renderDash(makeStore());
    expect(screen.getByText(new RegExp(`0 of ${UNIT_COUNT} units mastered`, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /start the program/i })).toBeInTheDocument();
    const next = screen.getByRole('link', { name: /next up/i });
    expect(next).toHaveAttribute('href', `/course/apt501/unit/${FIRST_UNIT_ID}`);
  });

  it('saved location: Continue CTA and next action continues there', () => {
    const store = makeStore();
    store.getState().setLocation('apt501', FIRST_UNIT_ID, courses[0].units[0].components[0].id);
    renderDash(store);
    expect(screen.getByRole('link', { name: /continue where you left off/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /next up/i }))
      .toHaveAttribute('href', `/course/apt501/unit/${FIRST_UNIT_ID}`);
  });

  it('a saved location pointing at a removed unit falls back to Start, not a dead link', () => {
    const store = makeStore();
    // apt501-u1 was the scope unit, removed in v0.2.0; her real save data can hold this.
    store.getState().setLocation('apt501', 'apt501-u1', 'apt501-u1-c1');
    renderDash(store);
    expect(screen.getByRole('link', { name: /start the program/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /continue where you left off/i })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /next up/i }))
      .toHaveAttribute('href', `/course/apt501/unit/${FIRST_UNIT_ID}`);
  });

  it('due reviews outrank everything as the next action', () => {
    const store = makeStore();
    store.getState().setLocation('apt501', FIRST_UNIT_ID, courses[0].units[0].components[0].id);
    store.setState({
      state: {
        ...store.getState().state,
        recall: { [`apt501/${FIRST_UNIT_ID}/r1`]: { step: 0, due: '2026-07-19T00:00:00.000Z', lapses: 0 } },
      },
    });
    renderDash(store);
    expect(screen.getByRole('link', { name: /next up.*review/i }))
      .toHaveAttribute('href', '/review');
  });

  it('mastered unit: counts it, shows 100% ✓ in the course row, next action moves to the next unit', () => {
    const store = makeStore();
    masterTheUnit(store);
    renderDash(store);
    expect(screen.getByText(new RegExp(`1 of ${UNIT_COUNT} units mastered`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/100% ✓/)).toBeInTheDocument();
    const secondUnit = courses[0].units[1];
    expect(screen.getByRole('link', { name: /next up/i }))
      .toHaveAttribute('href', `/course/apt501/unit/${secondUnit.id}`);
  });
});
