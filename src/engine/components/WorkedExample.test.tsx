import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { WorkedExample } from './WorkedExample';

const props = {
  title: 'A scope decision, reasoned out loud',
  scenario: 'Mid-session, your client mentions knee pain.',
  steps: [
    { id: 's1', title: 'Pause and gather facts', reasoning: 'Ask when it started.' },
    { id: 's2', title: 'Screen for red flags', reasoning: 'Sharp pain means stop.' },
    { id: 's3', title: 'Decide and document', reasoning: 'Modify today, refer if it persists.' },
  ],
  takeaway: 'You never diagnose; you decide train, modify, refer, or stop.',
};

describe('WorkedExample', () => {
  it('reveals steps one at a time and the takeaway only at the end', () => {
    render(<WorkedExample {...props} />);
    expect(screen.getByText('Mid-session, your client mentions knee pain.')).toBeInTheDocument();
    expect(screen.getByText('Pause and gather facts')).toBeInTheDocument();
    expect(screen.queryByText('Screen for red flags')).not.toBeInTheDocument();
    expect(screen.queryByText(/you never diagnose/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /reveal next step/i }));
    expect(screen.getByText('Screen for red flags')).toBeInTheDocument();
    expect(screen.queryByText(/you never diagnose/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /reveal next step/i }));
    expect(screen.getByText('Decide and document')).toBeInTheDocument();
    expect(screen.getByText(/you never diagnose/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /reveal next step/i })).not.toBeInTheDocument();
  });

  it('shows everything at once when restored as already viewed', () => {
    render(<WorkedExample {...props} initialRevealed />);
    expect(screen.getByText('Decide and document')).toBeInTheDocument();
    expect(screen.getByText(/you never diagnose/i)).toBeInTheDocument();
  });
});
