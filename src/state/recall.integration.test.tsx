import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { Home } from '../ui/Home';
import { Review } from '../ui/Review';
import { getUnit } from '../content/registry';
import { dueItems } from './recall';

const DAY0 = '2026-07-16T12:00:00.000Z';
const plusDays = (d: number) =>
  new Date(new Date(DAY0).getTime() + d * 86_400_000).toISOString();

// The full spaced-recall loop with a controllable clock: finish the lesson's
// recall set on day 0, come back on day 3, review, and verify the schedule
// survives a full store reload.
describe('spaced recall over time', () => {
  it('lesson ratings surface for review three days later and persist rescheduling', async () => {
    let clock = DAY0;
    const adapter = new StorageAdapter('loop-' + Math.random().toString(36).slice(2));
    const store = createProgressStore(adapter, () => clock);
    const { unit } = getUnit('apt501', 'apt501-u1')!;
    const cards = unit.components.find((c) => c.type === 'recallSet')!;
    const cardIds = (cards as { cards: { id: string }[] }).cards.map((c) => c.id);

    // Day 0: the lesson's recall set is completed, everything rated good.
    store.getState().scheduleRecall('apt501', unit.id,
      Object.fromEntries(cardIds.map((id) => [id, 'good' as const])));
    expect(dueItems(store.getState().state.recall!, clock)).toEqual([]);

    // Day 3: everything is due; Home says so.
    clock = plusDays(3);
    const home = render(
      <StoreProvider store={store}><MemoryRouter><Home /></MemoryRouter></StoreProvider>,
    );
    expect(screen.getByRole('link', { name: /review due: 9/i })).toBeInTheDocument();
    home.unmount();

    // Review the queue: first card 'again', the rest 'good'.
    render(
      <StoreProvider store={store}><MemoryRouter><Review /></MemoryRouter></StoreProvider>,
    );
    for (let i = 0; i < cardIds.length; i++) {
      fireEvent.click(screen.getByRole('button', { name: /show answer/i }));
      fireEvent.click(screen.getByRole('button', { name: i === 0 ? /again/i : /knew it/i }));
    }
    expect(screen.getByText(/all done — 9 cards reviewed/i)).toBeInTheDocument();

    // Day 4: only the lapsed card is due again (+1d); goods moved to +7d.
    clock = plusDays(4);
    await store.getState().flush();
    const reloaded = createProgressStore(adapter, () => clock);
    await reloaded.getState().hydrate();
    const due = dueItems(reloaded.getState().state.recall!, clock);
    expect(due).toHaveLength(1);
    expect(reloaded.getState().state.recall![due[0]].lapses).toBe(1);

    // Day 10+: the goods (due day 10) are back too.
    clock = plusDays(10.5);
    expect(dueItems(reloaded.getState().state.recall!, clock)).toHaveLength(9);
  });
});
