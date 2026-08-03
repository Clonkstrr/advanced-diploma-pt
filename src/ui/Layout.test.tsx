import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from './Layout';

describe('Layout', () => {
  it('offers home, catalog, review and settings in the main navigation', () => {
    render(<MemoryRouter><Layout /></MemoryRouter>);
    const nav = screen.getByRole('navigation', { name: /main/i });
    for (const name of [/^home$/i, /^catalog$/i, /^review$/i, /^settings$/i]) {
      expect(within(nav).getByRole('link', { name })).toBeInTheDocument();
    }
  });
});
