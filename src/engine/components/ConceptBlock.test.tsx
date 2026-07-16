import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ConceptBlock } from './ConceptBlock';
import { OutcomesBlock } from './OutcomesBlock';

describe('ConceptBlock', () => {
  it('renders the heading and each paragraph', () => {
    render(<ConceptBlock heading="Scope" body={'First para.\n\nSecond para.'} />);
    expect(screen.getByRole('heading', { name: 'Scope' })).toBeInTheDocument();
    expect(screen.getByText('First para.')).toBeInTheDocument();
    expect(screen.getByText('Second para.')).toBeInTheDocument();
  });
});

describe('OutcomesBlock', () => {
  it('renders one item per outcome with its level', () => {
    render(<OutcomesBlock outcomes={[{ level: 'recall', text: 'State X' }, { level: 'analysis', text: 'Explain Y' }]} />);
    expect(screen.getByText('State X')).toBeInTheDocument();
    expect(screen.getByText('Explain Y')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
