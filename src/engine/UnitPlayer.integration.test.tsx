import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { StorageAdapter } from '../storage/StorageAdapter';
import { createProgressStore } from '../state/progressStore';
import { StoreProvider } from '../state/StoreProvider';
import { UnitPlayer } from './UnitPlayer';
import { getUnit } from '../content/registry';

// Walks the real APT 501.1 unit through every one of its 16 components the way
// a learner would, and expects the store to end at 100% completion.
describe('APT 501.1 end-to-end through the player', () => {
  it('completes every component of the full spine', () => {
    const store = createProgressStore(new StorageAdapter('int-' + Math.random()), () => 'now');
    const { course, unit } = getUnit('apt501', 'apt501-u1')!;
    render(<StoreProvider store={store}><UnitPlayer course={course!} unit={unit} /></StoreProvider>);

    const next = () => fireEvent.click(screen.getByRole('button', { name: /^next$/i }));
    const pick = (label: string | RegExp) => fireEvent.click(screen.getByLabelText(label));
    const submit = (name: RegExp) => fireEvent.click(screen.getByRole('button', { name }));

    // 1 pretest (5 questions)
    pick(/explain you cannot interpret imaging/i);
    pick(/teaching and progressing a squat/i);
    pick(/a registered dietitian/i);
    pick(/what you observed, what you did, what you advised/i);
    pick(/guaranteed 10 kg loss/i);
    pick(/i cure back pain without physio/i);
    submit(/submit answers/i);
    next();

    // 2 outcomes + 3–7 five concepts + 8 visual + 9 worked example (view types)
    for (let i = 0; i < 8; i++) next();

    // 10 classification lab — place all eight items correctly
    const placements: Array<[RegExp, string]> = [
      [/design a 12-week progressive strength program/i, 'scope'],
      [/which supplement stack will fix her constant fatigue/i, 'refer'],
      [/post-acl-surgery client/i, 'collab'],
      [/national healthy-eating guidelines/i, 'scope'],
      [/tweak the homework her therapist assigned/i, 'refer'],
      [/slow breathing during cooldowns/i, 'scope'],
      [/pregnant client brings written exercise guidance/i, 'collab'],
      [/interpret the cholesterol panel/i, 'refer'],
    ];
    for (const [label, bucket] of placements) {
      fireEvent.change(screen.getByLabelText(label), { target: { value: bucket } });
    }
    submit(/submit answers/i);
    next();

    // 11 branching case — best path: screen, physician first, conditioned return
    fireEvent.click(screen.getByRole('button', { name: /ask follow-up questions/i }));
    fireEvent.click(screen.getByRole('button', { name: /tell her physician about the new dizziness/i }));
    fireEvent.click(screen.getByRole('button', { name: /program gradual position transitions/i }));
    expect(screen.getByText(/3 \/ 3 best-practice decisions/i)).toBeInTheDocument();
    next();

    // 12 error-ID — flag exactly the five violations
    pick(/i diagnose muscle imbalances/i);
    pick(/prescribe corrective exercise plans/i);
    pick(/cure chronic back pain/i);
    pick(/personalized meal plan to reverse your pre-diabetes/i);
    pick(/guaranteed 8-kg-in-8-weeks/i);
    submit(/submit review/i);
    expect(screen.getByText(/score: 7 \/ 7/i)).toBeInTheDocument();
    next();

    // 13 recall set — grade all nine cards
    for (let i = 0; i < 9; i++) {
      fireEvent.click(screen.getByRole('button', { name: /show answer/i }));
      fireEvent.click(screen.getByRole('button', { name: /knew it/i }));
    }
    expect(screen.getByText(/9 of 9 known/i)).toBeInTheDocument();
    next();

    // 14 unit quiz (7 questions, all four cognitive levels)
    pick(/stop the session for that concern/i);
    pick(/progressing a healthy client’s deadlift/i);
    pick(/coaching general healthy-eating habits/i);
    pick(/working within a physiotherapist’s stated movement restrictions/i);
    pick(/your training\/certification, the law where you work/i);
    pick(/duty, breach of the standard of care/i);
    pick(/the facts: what happened, what you checked/i);
    pick(/raises the standard you are judged against/i);
    pick(/worth a physiotherapist’s eyes before we load it again/i);
    submit(/submit answers/i);
    expect(screen.getByText(/score: 7 \/ 7/i)).toBeInTheDocument();
    next();

    // 15 teach-back — respond, self-assess all four rubric points
    fireEvent.change(screen.getByLabelText(/won.t diagnose/i),
      { target: { value: 'Diagnosis needs clinical training; I adapt your program and refer you well.' } });
    submit(/submit response/i);
    pick(/explains why diagnosis is outside/i);
    pick(/says concretely what the trainer will do/i);
    pick(/names the right professional/i);
    pick(/keeps a warm, confident tone/i);
    submit(/confirm self-assessment/i);
    next();

    // 16 cumulative review
    pick(/red flags — symptoms or events that end the session/i);
    pick(/registered dietitian → individualized nutrition plans/i);
    pick(/physician → diagnosis, medication, and medical clearance/i);
    pick(/physiotherapist → rehabilitation of diagnosed injuries/i);
    pick(/act as a reasonably prudent professional would/i);
    submit(/submit answers/i);

    // Everything completed?
    const progress = store.getState().state.courses['apt501'].units['apt501-u1'];
    const incomplete = unit.components
      .filter((c) => !progress.components[c.id]?.completed)
      .map((c) => c.id);
    expect(incomplete).toEqual([]);
  });
});
