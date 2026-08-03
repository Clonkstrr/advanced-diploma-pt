import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ConceptBlock, parseConceptBody } from './ConceptBlock';
import { OutcomesBlock } from './OutcomesBlock';

describe('ConceptBlock', () => {
  it('renders the heading and each paragraph', () => {
    render(<ConceptBlock heading="Scope" body={'First para.\n\nSecond para.'} />);
    expect(screen.getByRole('heading', { name: 'Scope' })).toBeInTheDocument();
    expect(screen.getByText('First para.')).toBeInTheDocument();
    expect(screen.getByText('Second para.')).toBeInTheDocument();
  });

  it('breaks a long block up with subheadings', () => {
    render(<ConceptBlock heading="Spine" body={'Intro para.\n\n## How the disc loads\n\nBody para.'} />);
    expect(screen.getByRole('heading', { name: 'How the disc loads', level: 3 })).toBeInTheDocument();
    expect(screen.getByText('Body para.')).toBeInTheDocument();
  });

  it('pulls a key idea out into its own highlighted box', () => {
    render(<ConceptBlock heading="Spine" body={'Para.\n\n> Load is not the enemy. Unaccustomed load is.'} />);
    const box = screen.getByText(/load is not the enemy/i);
    expect(box).toBeInTheDocument();
    expect(box.className).toContain('key-idea');
  });

  it('joins a multi-line key idea into one block', () => {
    render(<ConceptBlock heading="Spine" body={'> first line\n> second line'} />);
    expect(screen.getByText('first line second line')).toBeInTheDocument();
  });

  it('highlights key terms marked with double asterisks', () => {
    render(<ConceptBlock heading="Muscle" body={'The slant is the **pennation angle** of the muscle.'} />);
    const term = screen.getByText('pennation angle');
    expect(term.tagName).toBe('STRONG');
    expect(term.className).toContain('key-term');
    // the surrounding prose survives intact
    expect(screen.getByText(/the slant is the/i)).toBeInTheDocument();
  });

  it('leaves ordinary prose alone', () => {
    const pieces = parseConceptBody('Just a normal paragraph.\n\nAnd another.');
    expect(pieces).toEqual([
      { kind: 'paragraph', text: 'Just a normal paragraph.' },
      { kind: 'paragraph', text: 'And another.' },
    ]);
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
