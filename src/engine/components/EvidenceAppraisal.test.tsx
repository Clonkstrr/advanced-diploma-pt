import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { EvidenceAppraisal } from './EvidenceAppraisal';

const props = {
  title: 'Grade the evidence',
  brief: 'For each claim, decide the strongest evidence level actually supporting it.',
  hierarchy: ['Clinical guideline / position stand', 'Systematic review', 'Single RCT', 'Observational study', 'Expert opinion'],
  claims: [
    { id: 'cm1', claim: 'Fat-burner X melts belly fat',
      evidenceDescription: 'A supplement-company blog citing one 8-person study without a control group.',
      correctLevel: 'Expert opinion',
      rationale: 'An uncontrolled 8-person study reported second-hand is no better than opinion.' },
    { id: 'cm2', claim: 'Resistance training improves bone density in postmenopausal women',
      evidenceDescription: 'Multiple randomised trials pooled in a Cochrane review.',
      correctLevel: 'Systematic review',
      rationale: 'A Cochrane meta-analysis is systematic-review level evidence.' },
  ],
  briefPrompt: 'Write a two-sentence brief for a client asking about Fat-burner X.',
  modelBrief: 'The evidence behind Fat-burner X is a single tiny uncontrolled study…',
};

describe('EvidenceAppraisal', () => {
  it('requires every claim graded and a brief before submit, then grades level picks', () => {
    const onComplete = vi.fn();
    render(<EvidenceAppraisal {...props} onComplete={onComplete} />);
    const submit = screen.getByRole('button', { name: /submit/i });
    expect(submit).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/fat-burner x melts/i), { target: { value: 'Single RCT' } });
    fireEvent.change(screen.getByLabelText(/bone density/i), { target: { value: 'Systematic review' } });
    expect(submit).toBeDisabled(); // brief still empty
    fireEvent.change(screen.getByLabelText(/write a two-sentence brief/i), { target: { value: 'My brief.' } });
    expect(submit).toBeEnabled();

    fireEvent.click(submit);
    expect(onComplete).toHaveBeenCalledWith({
      answers: { cm1: ['Single RCT'], cm2: ['Systematic review'], __brief: ['My brief.'] },
      score: 0.5,
    });
    expect(screen.getByText(/score: 1 \/ 2/i)).toBeInTheDocument();
    expect(screen.getByText(/no better than opinion/i)).toBeInTheDocument();
    expect(screen.getByText(/the evidence behind fat-burner x/i)).toBeInTheDocument();
  });

  it('restores a graded appraisal locked with score, brief and model answer', () => {
    render(
      <EvidenceAppraisal {...props} onComplete={vi.fn()}
        initialAnswers={{ cm1: ['Expert opinion'], cm2: ['Systematic review'], __brief: ['Saved brief.'] }}
        initialSubmitted />,
    );
    expect(screen.getByText(/score: 2 \/ 2/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('Saved brief.')).toBeDisabled();
    expect(screen.getByText(/the evidence behind fat-burner x/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /submit/i })).not.toBeInTheDocument();
  });
});
