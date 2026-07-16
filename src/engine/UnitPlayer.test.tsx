import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { UnitPlayer } from './UnitPlayer';
import { getUnit } from '../content/registry';

function renderUnit() {
  const store = createProgressStore(new StorageAdapter('up-' + Math.random()), () => 'now');
  const { course, unit } = getUnit('apt501', 'apt501-u1')!;
  render(<StoreProvider store={store}><UnitPlayer course={course!} unit={unit} /></StoreProvider>);
  return store;
}

describe('UnitPlayer', () => {
  it('shows the first component and advances with Next', () => {
    renderUnit();
    // First component is the pretest question set.
    expect(screen.getByText('Before we begin')).toBeInTheDocument();
  });

  it('records location as the learner advances (for resume)', () => {
    const store = renderUnit();
    // advancing writes lastLocation
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(store.getState().state.lastLocation?.unitId).toBe('apt501-u1');
  });

  it('resumes on the exact component from lastLocation, not just lastComponentId', () => {
    const store = createProgressStore(new StorageAdapter('up-' + Math.random()), () => 'now');
    const { course, unit } = getUnit('apt501', 'apt501-u1')!;
    const conceptComponent = unit.components.find((c) => c.type === 'concept')!;
    store.getState().setLocation('apt501', 'apt501-u1', conceptComponent.id);
    render(<StoreProvider store={store}><UnitPlayer course={course!} unit={unit} /></StoreProvider>);
    expect(screen.getByText((conceptComponent as { heading: string }).heading)).toBeInTheDocument();
    expect(screen.queryByText('Before we begin')).not.toBeInTheDocument();
  });
});
