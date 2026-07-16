import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { Review } from './Review';
import { Home } from './Home';

const NOW = '2026-07-20T12:00:00.000Z'; // 4 days after scheduling day

function makeStore(now = NOW) {
  return createProgressStore(new StorageAdapter('rev-' + Math.random()), () => now);
}

function renderWithStore(store: ReturnType<typeof makeStore>, ui: React.ReactElement) {
  render(<StoreProvider store={store}><MemoryRouter>{ui}</MemoryRouter></StoreProvider>);
}

describe('Review surface', () => {
  it('shows the empty state when nothing is due', () => {
    const store = makeStore();
    renderWithStore(store, <Review />);
    expect(screen.getByText(/nothing due/i)).toBeInTheDocument();
  });

  it('reviews a due card: flip, grade, reschedule, then empty state', () => {
    const store = makeStore();
    // Rated good on the 16th -> due on the 19th -> due now (the 20th).
    store.setState({
      state: {
        ...store.getState().state,
        recall: { 'apt501/apt501-u1/r1': { step: 0, due: '2026-07-19T12:00:00.000Z', lapses: 0 } },
      },
    });
    renderWithStore(store, <Review />);

    // real card front resolved from the content registry
    expect(screen.getByText(/what three things define your scope/i)).toBeInTheDocument();
    expect(screen.queryByText(/your training\/certification/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /show answer/i }));
    expect(screen.getByText(/your training\/certification/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /knew it/i }));
    // rescheduled to rung 1 (+7d) -> no longer due
    expect(store.getState().state.recall!['apt501/apt501-u1/r1'].step).toBe(1);
    expect(screen.getByText(/all done/i)).toBeInTheDocument();
  });

  it('skips keys that no longer resolve to content', () => {
    const store = makeStore();
    store.setState({
      state: {
        ...store.getState().state,
        recall: { 'gone-course/gone-unit/x1': { step: 0, due: '2026-07-01T00:00:00.000Z', lapses: 0 } },
      },
    });
    renderWithStore(store, <Review />);
    expect(screen.getByText(/nothing due/i)).toBeInTheDocument();
  });
});

describe('Home review-due count', () => {
  it('shows a review link when items are due and hides it when none are', () => {
    const store = makeStore();
    store.setState({
      state: {
        ...store.getState().state,
        recall: {
          'apt501/apt501-u1/r1': { step: 0, due: '2026-07-19T12:00:00.000Z', lapses: 0 },
          'apt501/apt501-u1/r2': { step: 0, due: '2026-07-18T12:00:00.000Z', lapses: 0 },
          'apt501/apt501-u1/r3': { step: 1, due: '2026-08-30T12:00:00.000Z', lapses: 0 },
        },
      },
    });
    renderWithStore(store, <Home />);
    expect(screen.getByRole('link', { name: /review due: 2/i })).toBeInTheDocument();
  });

  it('shows no review link when nothing is due', () => {
    renderWithStore(makeStore(), <Home />);
    expect(screen.queryByRole('link', { name: /review due/i })).not.toBeInTheDocument();
  });
});
