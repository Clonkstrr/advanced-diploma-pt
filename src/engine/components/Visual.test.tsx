import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Visual } from './Visual';

const props = {
  title: 'When to train, modify, refer, or stop',
  diagramId: 'scope-decision-tree',
  caption: 'The standing decision path for every session.',
  callouts: [
    { id: 'c1', label: '1', text: 'Red flags always stop the session first.' },
    { id: 'c2', label: '2', text: 'Scope and competence are separate questions.' },
  ],
};

describe('Visual', () => {
  it('renders the registered diagram with title, caption and callouts', () => {
    render(<Visual {...props} />);
    expect(screen.getByText('When to train, modify, refer, or stop')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /decision/i })).toBeInTheDocument();
    expect(screen.getByText('The standing decision path for every session.')).toBeInTheDocument();
    expect(screen.getByText('Red flags always stop the session first.')).toBeInTheDocument();
    expect(screen.getByText('Scope and competence are separate questions.')).toBeInTheDocument();
  });

  it('shows a placeholder instead of crashing for an unknown diagram id', () => {
    render(<Visual {...props} diagramId="does-not-exist" />);
    expect(screen.getByText(/diagram unavailable/i)).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
