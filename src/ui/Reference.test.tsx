import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Reference } from './Reference';

function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/reference/:courseId/:unitId" element={<Reference />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('Reference', () => {
  it('renders the unit QC block: sources with honest verification badges', () => {
    renderAt('/reference/apt501/apt501-u2');
    expect(screen.getByText(/sources & quality control/i)).toBeInTheDocument();
    expect(screen.getByText(/Greenhalgh/)).toBeInTheDocument();
    expect(screen.getByText(/CONSORT 2010 Statement/)).toBeInTheDocument();
    // every APT 501.1 source is still awaiting page-level verification.
    // Scoped to the source list: the explainer above it also says "page-checked".
    const sources = screen.getByRole('list');
    expect(within(sources).getAllByText(/not yet page-checked/i).length).toBeGreaterThanOrEqual(5);
    expect(within(sources).queryAllByText(/^page-checked$/i)).toHaveLength(0);
  });

  it('explains what the page-checked flag does and does not mean', () => {
    renderAt('/reference/apt501/apt501-u2');
    expect(screen.getByText(/every source below is a real, published work/i)).toBeInTheDocument();
  });

  it('shows confidence, review dates and controversies — with no scope banner', () => {
    renderAt('/reference/apt501/apt501-u2');
    expect(screen.queryByText(/^scope:/i)).not.toBeInTheDocument();
    expect(screen.getByText(/confidence: high/i)).toBeInTheDocument();
    expect(screen.getByText(/last reviewed: 2026-08-03/i)).toBeInTheDocument();
    expect(screen.getByText(/next review: 2027-08-03/i)).toBeInTheDocument();
    expect(screen.getByText(/known controversies:/i)).toBeInTheDocument();
  });

  it('handles unknown units without crashing', () => {
    renderAt('/reference/nope/nothing');
    expect(screen.getByText(/reference not found/i)).toBeInTheDocument();
  });
});
