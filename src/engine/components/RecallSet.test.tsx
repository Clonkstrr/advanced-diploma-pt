import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecallSet } from './RecallSet';

const props = {
  title: 'Key ideas to keep',
  cards: [
    { id: 'k1', front: 'What makes a symptom a red flag?', back: 'It suggests possible undiagnosed medical risk…' },
    { id: 'k2', front: 'Scope vs competence?', back: 'Scope is the legal boundary; competence is your personal skill within it.' },
  ],
};

describe('RecallSet', () => {
  it('flips and self-grades each card, then reports all ratings', () => {
    const onComplete = vi.fn();
    render(<RecallSet {...props} onComplete={onComplete} />);
    expect(screen.getByText(/what makes a symptom a red flag/i)).toBeInTheDocument();
    expect(screen.queryByText(/undiagnosed medical risk/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /show answer/i }));
    expect(screen.getByText(/undiagnosed medical risk/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /knew it/i }));

    expect(screen.getByText(/scope vs competence/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /show answer/i }));
    fireEvent.click(screen.getByRole('button', { name: /again/i }));

    expect(onComplete).toHaveBeenCalledWith({
      answers: { k1: ['good'], k2: ['again'] }, score: 1,
    });
    expect(screen.getByText(/1 of 2 known/i)).toBeInTheDocument();
  });

  it('restores a finished set as a locked summary', () => {
    render(
      <RecallSet {...props} onComplete={vi.fn()}
        initialAnswers={{ k1: ['good'], k2: ['good'] }} initialSubmitted />,
    );
    expect(screen.getByText(/2 of 2 known/i)).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
