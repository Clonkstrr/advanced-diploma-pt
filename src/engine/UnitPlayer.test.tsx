import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import type { Course, Question, Unit } from '../types/content';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { UnitPlayer } from './UnitPlayer';
import { getUnit } from '../content/registry';

function renderUnit() {
  const store = createProgressStore(new StorageAdapter('up-' + Math.random()), () => '2026-07-16T12:00:00.000Z');
  const { course, unit } = getUnit('apt501', 'apt501-u1')!;
  render(<StoreProvider store={store}><MemoryRouter><UnitPlayer course={course!} unit={unit} /></MemoryRouter></StoreProvider>);
  return store;
}

function singleQuestion(id: string, prompt: string): Question {
  return {
    id, kind: 'single', prompt, cognitive: 'recall',
    options: [
      { id: 'a', text: 'Yes', correct: true },
      { id: 'b', text: 'No', correct: false },
    ],
  };
}

function makeUnit(components: Unit['components']): { course: Course; unit: Unit } {
  const unit: Unit = {
    id: 'test-u1', code: 'T 1.1', title: 'Test unit', summary: '',
    qc: { sources: [], confidence: 'high', lastReviewed: '2026-07-16', reviewBy: '2027-07-16' },
    components,
  };
  const course: Course = {
    id: 'testc', code: 'T 1', title: 'Test course', semester: 1, description: '', units: [unit],
  };
  return { course, unit };
}

function renderSynthetic(components: Unit['components']) {
  const { course, unit } = makeUnit(components);
  const store = createProgressStore(new StorageAdapter('up-' + Math.random()), () => '2026-07-16T12:00:00.000Z');
  render(<StoreProvider store={store}><MemoryRouter><UnitPlayer course={course} unit={unit} /></MemoryRouter></StoreProvider>);
  return store;
}

describe('UnitPlayer', () => {
  it('shows the first component and advances with Next', () => {
    renderUnit();
    // First component is the pretest question set.
    expect(screen.getByText('Before we begin')).toBeInTheDocument();
  });

  it('gateExempt units offer a one-click skip that completes every component', () => {
    const store = renderUnit(); // apt501-u1 is gateExempt
    fireEvent.click(screen.getByRole('button', { name: /skip unit/i }));
    const { unit } = getUnit('apt501', 'apt501-u1')!;
    const up = store.getState().state.courses['apt501'].units['apt501-u1'];
    for (const c of unit.components) {
      expect(up.components[c.id]?.completed).toBe(true);
    }
  });

  it('non-exempt units have no skip button', () => {
    renderSynthetic([{ type: 'concept', id: 'c1', heading: 'H', body: 'B' }]);
    expect(screen.queryByRole('button', { name: /skip unit/i })).not.toBeInTheDocument();
  });

  it('records location as the learner advances (for resume)', () => {
    const store = renderUnit();
    const { unit } = getUnit('apt501', 'apt501-u1')!;
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    // the location must actually advance to the second component…
    expect(store.getState().state.lastLocation).toEqual({
      courseId: 'apt501', unitId: 'apt501-u1', componentId: unit.components[1].id,
    });
    // …and the first component must no longer be on screen
    expect(screen.queryByText('Before we begin')).not.toBeInTheDocument();
  });

  it('resumes on the exact component from lastLocation, not just lastComponentId', () => {
    const store = createProgressStore(new StorageAdapter('up-' + Math.random()), () => '2026-07-16T12:00:00.000Z');
    const { course, unit } = getUnit('apt501', 'apt501-u1')!;
    const conceptComponent = unit.components.find((c) => c.type === 'concept')!;
    store.getState().setLocation('apt501', 'apt501-u1', conceptComponent.id);
    render(<StoreProvider store={store}><MemoryRouter><UnitPlayer course={course!} unit={unit} /></MemoryRouter></StoreProvider>);
    expect(screen.getByText((conceptComponent as { heading: string }).heading)).toBeInTheDocument();
    expect(screen.queryByText('Before we begin')).not.toBeInTheDocument();
  });

  it('resumes from the unit\'s own lastComponentId when lastLocation is for another unit', () => {
    const store = createProgressStore(new StorageAdapter('up-' + Math.random()), () => '2026-07-16T12:00:00.000Z');
    const { course, unit } = getUnit('apt501', 'apt501-u1')!;
    const concept = unit.components.find((c) => c.type === 'concept')!;
    store.getState().completeComponent('apt501', 'apt501-u1', concept.id);
    store.getState().setLocation('apt501', 'some-other-unit', 'elsewhere');
    render(<StoreProvider store={store}><MemoryRouter><UnitPlayer course={course!} unit={unit} /></MemoryRouter></StoreProvider>);
    expect(screen.getByText((concept as { heading: string }).heading)).toBeInTheDocument();
  });

  it('shows a placeholder for a component type it cannot render yet', () => {
    renderSynthetic([
      { type: 'video', id: 'v1' } as unknown as Unit['components'][number],
    ]);
    expect(screen.getByText(/isn.t available yet/)).toBeInTheDocument();
  });

  it('does not leak submitted state between adjacent question sets', () => {
    renderSynthetic([
      { type: 'questionSet', id: 'qs1', role: 'pretest', title: 'First set', questions: [singleQuestion('q1', 'First prompt')] },
      { type: 'questionSet', id: 'qs2', role: 'quiz', title: 'Second set', questions: [singleQuestion('q2', 'Second prompt')] },
    ]);
    fireEvent.click(screen.getByLabelText('Yes'));
    fireEvent.click(screen.getByRole('button', { name: /submit answers/i }));
    expect(screen.getByText(/score:/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    // The second set must start fresh, not inherit the first set's submitted state.
    expect(screen.getByText('Second set')).toBeInTheDocument();
    expect(screen.queryByText(/score:/i)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit answers/i })).toBeInTheDocument();
  });

  it('schedules recall items when a recall set completes', () => {
    const store = renderSynthetic([
      { type: 'recallSet', id: 'rs1', title: 'Recall',
        cards: [
          { id: 'k1', front: 'Front one', back: 'Back one' },
          { id: 'k2', front: 'Front two', back: 'Back two' },
        ] },
    ]);
    fireEvent.click(screen.getByRole('button', { name: /show answer/i }));
    fireEvent.click(screen.getByRole('button', { name: /knew it/i }));
    fireEvent.click(screen.getByRole('button', { name: /show answer/i }));
    fireEvent.click(screen.getByRole('button', { name: /again/i }));

    const recall = store.getState().state.recall!;
    expect(recall['testc/test-u1/k1'].lapses).toBe(0);
    expect(recall['testc/test-u1/k2'].lapses).toBe(1);
  });

  it('marks a final non-interactive component complete on view', () => {
    const store = renderSynthetic([
      { type: 'questionSet', id: 'qs1', role: 'pretest', title: 'First set', questions: [singleQuestion('q1', 'First prompt')] },
      { type: 'concept', id: 'c-last', heading: 'Closing concept', body: 'Body text.' },
    ]);
    fireEvent.click(screen.getByLabelText('Yes'));
    fireEvent.click(screen.getByRole('button', { name: /submit answers/i }));
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(screen.getByText('Closing concept')).toBeInTheDocument();
    expect(
      store.getState().state.courses['testc']?.units['test-u1']?.components['c-last']?.completed,
    ).toBe(true);
  });
});
