import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BranchingCase } from './BranchingCase';

const props = {
  title: 'First consultation',
  brief: 'A new client fills in their intake form. Decide how to proceed.',
  startNodeId: 'n1',
  nodes: [
    {
      id: 'n1',
      situation: 'The form mentions occasional chest tightness when climbing stairs.',
      choices: [
        { id: 'c-refer', text: 'Pause onboarding; require physician clearance', to: null,
          quality: 'best' as const, feedback: 'Chest symptoms need medical clearance first.' },
        { id: 'c-train', text: 'Start with light training and monitor', to: 'n2',
          quality: 'poor' as const, feedback: 'Unscreened chest symptoms are a hard stop.' },
      ],
    },
    {
      id: 'n2',
      situation: 'Ten minutes in, the client stops and rubs their chest.',
      choices: [
        { id: 'c-stop', text: 'Stop the session and arrange medical follow-up', to: null,
          quality: 'best' as const, feedback: 'Right call — and document it.' },
      ],
    },
  ],
};

describe('BranchingCase', () => {
  it('walks decisions to a terminal outcome and grades the path', () => {
    const onComplete = vi.fn();
    render(<BranchingCase {...props} onComplete={onComplete} />);
    expect(screen.getByText(/chest tightness when climbing stairs/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /start with light training/i }));
    expect(screen.getByText(/rubs their chest/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /stop the session/i }));
    // poor (0) + best (1) over 2 decisions
    expect(onComplete).toHaveBeenCalledWith({
      answers: { __path: ['c-train', 'c-stop'] }, score: 0.5,
    });
    expect(screen.getByText(/unscreened chest symptoms are a hard stop/i)).toBeInTheDocument();
    expect(screen.getByText(/right call — and document it/i)).toBeInTheDocument();
    expect(screen.getByText(/score: 1 \/ 2/i)).toBeInTheDocument();
  });

  it('grades a single best decision as a perfect score', () => {
    const onComplete = vi.fn();
    render(<BranchingCase {...props} onComplete={onComplete} />);
    fireEvent.click(screen.getByRole('button', { name: /require physician clearance/i }));
    expect(onComplete).toHaveBeenCalledWith({
      answers: { __path: ['c-refer'] }, score: 1,
    });
  });

  it('restores a finished case as a locked outcome summary', () => {
    render(
      <BranchingCase {...props} onComplete={vi.fn()}
        initialAnswers={{ __path: ['c-train', 'c-stop'] }} initialSubmitted />,
    );
    expect(screen.getByText(/score: 1 \/ 2/i)).toBeInTheDocument();
    expect(screen.getByText(/unscreened chest symptoms are a hard stop/i)).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
