import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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
    renderAt('/reference/apt501/apt501-u1');
    expect(screen.getByText(/sources & quality control/i)).toBeInTheDocument();
    expect(screen.getByText(/CSEP/)).toBeInTheDocument();
    expect(screen.getByText(/NSCA/)).toBeInTheDocument();
    // every APT 501.1 source is still awaiting page-level verification
    expect(screen.getAllByText(/pending verification/i).length).toBeGreaterThanOrEqual(5);
    expect(screen.queryAllByText(/^verified$/i)).toHaveLength(0);
  });

  it('shows the scope warning prominently plus confidence, review dates and controversies', () => {
    renderAt('/reference/apt501/apt501-u1');
    expect(screen.getByText(/does not diagnose, treat disease/i)).toBeInTheDocument();
    expect(screen.getByText(/confidence: high/i)).toBeInTheDocument();
    expect(screen.getByText(/last reviewed: 2026-07-16/i)).toBeInTheDocument();
    expect(screen.getByText(/next review: 2027-07-16/i)).toBeInTheDocument();
    expect(screen.getByText(/vary by country/i)).toBeInTheDocument();
  });

  it('handles unknown units without crashing', () => {
    renderAt('/reference/nope/nothing');
    expect(screen.getByText(/reference not found/i)).toBeInTheDocument();
  });
});
