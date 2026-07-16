import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NumericLab } from './NumericLab';

const props = {
  title: 'Heart-rate reserve',
  brief: 'Client: max HR 190, resting HR 60. Work these out.',
  fields: [
    { id: 'hrr', label: 'Heart-rate reserve', unit: 'bpm', answer: 130, tolerance: 0 },
    { id: 'thr', label: 'Target HR at 60% HRR', unit: 'bpm', answer: 138, tolerance: 1 },
  ],
  solution: 'HRR = 190 − 60 = 130. Target = 130 × 0.6 + 60 = 138.',
};

describe('NumericLab', () => {
  it('disables submit until all fields are filled, grades with tolerance, shows the solution', () => {
    const onComplete = vi.fn();
    render(<NumericLab {...props} onComplete={onComplete} />);
    const submit = screen.getByRole('button', { name: /submit/i });
    expect(submit).toBeDisabled();
    expect(screen.queryByText(/HRR = 190/)).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/heart-rate reserve/i), { target: { value: '130' } });
    expect(submit).toBeDisabled();
    fireEvent.change(screen.getByLabelText(/target hr/i), { target: { value: '139' } }); // within ±1
    expect(submit).toBeEnabled();

    fireEvent.click(submit);
    expect(onComplete).toHaveBeenCalledWith({
      answers: { hrr: ['130'], thr: ['139'] }, score: 1,
    });
    expect(screen.getByText(/score: 2 \/ 2/i)).toBeInTheDocument();
    expect(screen.getByText(/HRR = 190/)).toBeInTheDocument();
  });

  it('marks out-of-tolerance answers wrong and shows the expected value', () => {
    const onComplete = vi.fn();
    render(<NumericLab {...props} onComplete={onComplete} />);
    fireEvent.change(screen.getByLabelText(/heart-rate reserve/i), { target: { value: '128' } });
    fireEvent.change(screen.getByLabelText(/target hr/i), { target: { value: '138' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(onComplete).toHaveBeenCalledWith({
      answers: { hrr: ['128'], thr: ['138'] }, score: 0.5,
    });
    expect(screen.getByText(/expected 130/i)).toBeInTheDocument();
  });

  it('restores a graded attempt locked with score and solution visible', () => {
    render(
      <NumericLab {...props} onComplete={vi.fn()}
        initialAnswers={{ hrr: ['130'], thr: ['138'] }} initialSubmitted />,
    );
    expect(screen.getByText(/score: 2 \/ 2/i)).toBeInTheDocument();
    expect(screen.getByText(/HRR = 190/)).toBeInTheDocument();
    expect(screen.getByLabelText(/heart-rate reserve/i)).toBeDisabled();
  });
});
