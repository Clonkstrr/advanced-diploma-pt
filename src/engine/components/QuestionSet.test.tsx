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

  const multi: Question[] = [
    { id: 'm1', kind: 'multi', prompt: 'Pick X and Z', cognitive: 'application',
      options: [{ id: 'x', text: 'X', correct: true },
                { id: 'y', text: 'Y', correct: false },
                { id: 'z', text: 'Z', correct: true }] },
  ];

  it('multi-select: options toggle on and off before submit', () => {
    render(<QuestionSet title="Quiz" questions={multi} onComplete={vi.fn()} />);
    fireEvent.click(screen.getByLabelText('X'));
    fireEvent.click(screen.getByLabelText('Y'));
    fireEvent.click(screen.getByLabelText('Y')); // uncheck again
    fireEvent.click(screen.getByLabelText('Z'));
    expect(screen.getByLabelText('X')).toBeChecked();
    expect(screen.getByLabelText('Y')).not.toBeChecked();
    expect(screen.getByLabelText('Z')).toBeChecked();
  });

  it('multi-select: the exact correct set scores 1', () => {
    const onComplete = vi.fn();
    render(<QuestionSet title="Quiz" questions={multi} onComplete={onComplete} />);
    fireEvent.click(screen.getByLabelText('X'));
    fireEvent.click(screen.getByLabelText('Z'));
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(onComplete).toHaveBeenCalledWith({ answers: { m1: ['x', 'z'] }, score: 1 });
  });

  it('multi-select: a partial selection scores 0', () => {
    const onComplete = vi.fn();
    render(<QuestionSet title="Quiz" questions={multi} onComplete={onComplete} />);
    fireEvent.click(screen.getByLabelText('X'));
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(onComplete).toHaveBeenCalledWith({ answers: { m1: ['x'] }, score: 0 });
  });

  it('disables submit until every question has at least one answer', () => {
    render(<QuestionSet title="Quiz" questions={[...questions, ...multi]} onComplete={vi.fn()} />);
    const submit = screen.getByRole('button', { name: /submit/i });
    expect(submit).toBeDisabled();
    fireEvent.click(screen.getByLabelText('A'));
    expect(submit).toBeDisabled(); // multi question still unanswered
    fireEvent.click(screen.getByLabelText('X'));
    expect(submit).toBeEnabled();
  });

  it('re-disables submit when a multi answer is fully unchecked', () => {
    render(<QuestionSet title="Quiz" questions={multi} onComplete={vi.fn()} />);
    const submit = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(screen.getByLabelText('X'));
    expect(submit).toBeEnabled();
    fireEvent.click(screen.getByLabelText('X')); // empty selection again
    expect(submit).toBeDisabled();
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
