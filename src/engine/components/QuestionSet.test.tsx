import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuestionSet } from './QuestionSet';
import type { Question } from '../../types/content';

const questions: Question[] = [
  { id: 'q1', kind: 'single', prompt: 'Pick A', cognitive: 'recall',
    options: [{ id: 'a', text: 'A', correct: true, rationale: 'Yes A' },
              { id: 'b', text: 'B', correct: false, rationale: 'No B' }] },
];

describe('QuestionSet', () => {
  it('grades on submit, shows rationale, and reports the score', () => {
    const onComplete = vi.fn();
    render(<QuestionSet title="Quiz" questions={questions} onComplete={onComplete} />);
    fireEvent.click(screen.getByLabelText('A'));
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText('Yes A')).toBeInTheDocument();
    expect(onComplete).toHaveBeenCalledWith({ answers: { q1: ['a'] }, score: 1 });
  });

  it('a wrong single-select answer scores 0', () => {
    const onComplete = vi.fn();
    render(<QuestionSet title="Quiz" questions={questions} onComplete={onComplete} />);
    fireEvent.click(screen.getByLabelText('B'));
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(onComplete).toHaveBeenCalledWith({ answers: { q1: ['b'] }, score: 0 });
  });

  it('shows the score after submit', () => {
    const two: Question[] = [
      ...questions,
      { id: 'q2', kind: 'single', prompt: 'Pick C', cognitive: 'recall',
        options: [{ id: 'c', text: 'C', correct: true },
                  { id: 'd', text: 'D', correct: false }] },
    ];
    render(<QuestionSet title="Quiz" questions={two} onComplete={vi.fn()} />);
    fireEvent.click(screen.getByLabelText('A'));
    fireEvent.click(screen.getByLabelText('D'));
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/Score: 1 \/ 2 correct \(50%\)/)).toBeInTheDocument();
  });

  it('shows the score on a restored graded set', () => {
    render(
      <QuestionSet
        title="Quiz"
        questions={questions}
        onComplete={vi.fn()}
        initialAnswers={{ q1: ['a'] }}
        initialSubmitted={true}
      />,
    );
    expect(screen.getByText(/Score: 1 \/ 1 correct \(100%\)/)).toBeInTheDocument();
  });

  it('restores saved answers and graded state on revisit', () => {
    const onComplete = vi.fn();
    render(
      <QuestionSet
        title="Quiz"
        questions={questions}
        onComplete={onComplete}
        initialAnswers={{ q1: ['a'] }}
        initialSubmitted={true}
      />,
    );
    expect(screen.getByLabelText(/^A/)).toBeChecked();
    expect(screen.getByText('Yes A')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /submit/i })).not.toBeInTheDocument();
  });
});
