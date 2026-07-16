import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorId } from './ErrorId';

const props = {
  title: 'Review this trainer bio',
  brief: 'Flag every statement that oversteps scope. Leave acceptable ones unflagged.',
  document: 'I diagnose muscle imbalances and prescribe corrective plans. I love coaching beginners.',
  findings: [
    { id: 'f1', text: '“I diagnose muscle imbalances”', isError: true, rationale: 'Diagnosis is clinical scope.' },
    { id: 'f2', text: '“I prescribe corrective plans”', isError: true, rationale: '“Prescribe” is clinical language.' },
    { id: 'f3', text: '“I love coaching beginners”', isError: false, rationale: 'Harmless statement.' },
  ],
};

describe('ErrorId', () => {
  it('grades flag-all-errors-no-false-flags and shows rationales', () => {
    const onComplete = vi.fn();
    render(<ErrorId {...props} onComplete={onComplete} />);
    expect(screen.getByText(/i diagnose muscle imbalances and prescribe/i)).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText(/“I diagnose muscle imbalances”/));
    fireEvent.click(screen.getByLabelText(/“I love coaching beginners”/)); // false flag
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // f1 flagged+error ✓, f2 unflagged+error ✗, f3 flagged+ok ✗ → 1/3
    expect(onComplete).toHaveBeenCalledWith({
      answers: { __flags: ['f1', 'f3'] }, score: 1 / 3,
    });
    expect(screen.getByText(/score: 1 \/ 3/i)).toBeInTheDocument();
    expect(screen.getByText(/Diagnosis is clinical scope\./)).toBeInTheDocument();
  });

  it('restores a graded attempt locked with prior flags checked', () => {
    render(
      <ErrorId {...props} onComplete={vi.fn()}
        initialAnswers={{ __flags: ['f1', 'f2'] }} initialSubmitted />,
    );
    expect(screen.getByText(/score: 3 \/ 3/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/“I diagnose muscle imbalances”/)).toBeChecked();
    expect(screen.getByLabelText(/“I diagnose muscle imbalances”/)).toBeDisabled();
    expect(screen.queryByRole('button', { name: /submit/i })).not.toBeInTheDocument();
  });
});
