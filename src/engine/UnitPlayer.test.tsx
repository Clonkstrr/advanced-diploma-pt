import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { Course, Question, Unit } from '../types/content';
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
  const store = createProgressStore(new StorageAdapter('up-' + Math.random()), () => 'now');
  render(<StoreProvider store={store}><UnitPlayer course={course} unit={unit} /></StoreProvider>);
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
