import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Classification } from './Classification';

const props = {
  title: 'Whose job is it?',
  instructions: 'Place each request where it belongs.',
  buckets: [
    { id: 'scope', label: 'Within your scope' },
    { id: 'refer', label: 'Refer out' },
  ],
  items: [
    { id: 'i1', text: 'Design a strength program', bucketId: 'scope', rationale: 'Core trainer work.' },
    { id: 'i2', text: 'Adjust blood-pressure medication', bucketId: 'refer', rationale: 'Physician only.' },
  ],
};

describe('Classification', () => {
  it('disables submit until every item is placed, then grades with rationale and score', () => {
    const onComplete = vi.fn();
    render(<Classification {...props} onComplete={onComplete} />);
    const submit = screen.getByRole('button', { name: /submit/i });
    expect(submit).toBeDisabled();

    fireEvent.change(screen.getByLabelText('Design a strength program'), { target: { value: 'scope' } });
    expect(submit).toBeDisabled();
    fireEvent.change(screen.getByLabelText('Adjust blood-pressure medication'), { target: { value: 'scope' } });
    expect(submit).toBeEnabled();

    fireEvent.click(submit);
    expect(onComplete).toHaveBeenCalledWith({
      answers: { i1: ['scope'], i2: ['scope'] }, score: 0.5,
    });
    expect(screen.getByText(/score: 1 \/ 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Physician only\./)).toBeInTheDocument();
    expect(screen.getByText(/Belongs under “Refer out”/)).toBeInTheDocument();
  });

  it('restores a graded attempt locked with the score', () => {
    render(
      <Classification {...props} onComplete={vi.fn()}
        initialAnswers={{ i1: ['scope'], i2: ['refer'] }} initialSubmitted />,
    );
    expect(screen.getByText(/score: 2 \/ 2/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Design a strength program')).toBeDisabled();
    expect(screen.queryByRole('button', { name: /submit/i })).not.toBeInTheDocument();
  });
});
