import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Visual } from './Visual';

const props = {
  title: 'Where evidence types rank — and why rank is only the start',
  diagramId: 'evidence-hierarchy',
  caption: 'The hierarchy as a starting heuristic, not a verdict.',
  callouts: [
    { id: 'c1', label: '1', text: 'Higher designs control more sources of error.' },
    { id: 'c2', label: '2', text: 'Execution can move a study up or down the pyramid.' },
  ],
};

describe('Visual', () => {
  it('renders the registered diagram with title, caption and callouts', () => {
    render(<Visual {...props} />);
    expect(screen.getByText('Where evidence types rank — and why rank is only the start')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /hierarchy of evidence/i })).toBeInTheDocument();
    expect(screen.getByText('The hierarchy as a starting heuristic, not a verdict.')).toBeInTheDocument();
    expect(screen.getByText('Higher designs control more sources of error.')).toBeInTheDocument();
    expect(screen.getByText('Execution can move a study up or down the pyramid.')).toBeInTheDocument();
  });

  it('shows a placeholder instead of crashing for an unknown diagram id', () => {
    render(<Visual {...props} diagramId="does-not-exist" />);
    expect(screen.getByText(/diagram unavailable/i)).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
