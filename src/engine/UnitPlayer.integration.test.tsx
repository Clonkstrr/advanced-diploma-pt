import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { UnitPlayer } from './UnitPlayer';
import { getCourse } from '../content/registry';

// Walks every unit of APT 501 through the player: renders each component in
// order via Next, expecting no renderer crashes and the stepper to reach the
// end. Grading and completion flows are covered by UnitPlayer.test.tsx.
describe('APT 501 units through the player', () => {
  const course = getCourse('apt501')!;
  for (const unit of course.units) {
    it(`walks every component of ${unit.code} — ${unit.title}`, () => {
      const store = createProgressStore(
        new StorageAdapter('int-' + Math.random()), () => '2026-08-03T12:00:00.000Z');
      render(
        <StoreProvider store={store}>
          <MemoryRouter><UnitPlayer course={course} unit={unit} /></MemoryRouter>
        </StoreProvider>,
      );
      const total = unit.components.length;
      expect(total).toBeGreaterThanOrEqual(16);
      for (let i = 0; i < total - 1; i++) {
        expect(screen.getByText(`${i + 1} / ${total}`)).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', { name: /^next$/i }));
      }
      expect(screen.getByText(`${total} / ${total}`)).toBeInTheDocument();
      // view-type components along the way registered as completed
      const progress = store.getState().state.courses['apt501']?.units[unit.id];
      expect(progress).toBeDefined();
    });
  }
});
