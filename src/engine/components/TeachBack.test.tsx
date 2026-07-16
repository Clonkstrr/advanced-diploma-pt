import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TeachBack } from './TeachBack';

const props = {
  title: 'Teach it back',
  prompt: 'A new client asks why you won’t give them a meal plan. Explain in plain language.',
  modelAnswer: 'Great question — detailed meal plans are actually a dietitian’s job…',
  rubric: [
    { id: 'r1', text: 'Names who can provide it (dietitian)' },
    { id: 'r2', text: 'Explains what you can help with instead' },
    { id: 'r3', text: 'Stays warm and client-friendly' },
  ],
};

describe('TeachBack', () => {
  it('gates submit on a response, then self-assesses against the rubric', () => {
    const onComplete = vi.fn();
    render(<TeachBack {...props} onComplete={onComplete} />);
    const submit = screen.getByRole('button', { name: /submit response/i });
    expect(submit).toBeDisabled();
    expect(screen.queryByText(/dietitian.s job/i)).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/explain in plain language/i),
      { target: { value: 'Meal plans are a dietitian thing; I can share healthy-eating guidelines.' } });
    fireEvent.click(submit);

    expect(screen.getByText(/dietitian.s job/i)).toBeInTheDocument(); // model answer revealed
    fireEvent.click(screen.getByLabelText(/names who can provide it/i));
    fireEvent.click(screen.getByLabelText(/explains what you can help with/i));
    fireEvent.click(screen.getByRole('button', { name: /confirm self-assessment/i }));

    expect(onComplete).toHaveBeenCalledWith({
      answers: {
        __response: ['Meal plans are a dietitian thing; I can share healthy-eating guidelines.'],
        __rubric: ['r1', 'r2'],
      },
      score: 2 / 3,
    });
    expect(screen.getByText(/2 \/ 3 rubric points/i)).toBeInTheDocument();
  });

  it('restores a confirmed teach-back locked with response, checks and score', () => {
    render(
      <TeachBack {...props} onComplete={vi.fn()}
        initialAnswers={{ __response: ['My saved answer.'], __rubric: ['r1', 'r2', 'r3'] }}
        initialSubmitted />,
    );
    expect(screen.getByDisplayValue('My saved answer.')).toBeDisabled();
    expect(screen.getByText(/3 \/ 3 rubric points/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/names who can provide it/i)).toBeChecked();
    expect(screen.getByLabelText(/names who can provide it/i)).toBeDisabled();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
