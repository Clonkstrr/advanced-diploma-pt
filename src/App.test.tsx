import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { StorageAdapter } from './storage/StorageAdapter';
import { createProgressStore } from './state/progressStore';
import { StoreProvider } from './state/StoreProvider';
import { UnitRoute } from './App';

// Two synthetic units of different lengths so navigating between them exposes
// any player state carried across unit changes.
vi.mock('./content/registry', () => {
  const qc = { sources: [], confidence: 'high', lastReviewed: '2026-07-16', reviewBy: '2027-07-16' };
  const concept = (id: string, heading: string) => ({ type: 'concept', id, heading, body: 'x' });
  const u1 = {
    id: 'u1', code: 'T 1.1', title: 'Unit one', summary: '', qc,
    components: [concept('u1-a', 'U1 first'), concept('u1-b', 'U1 second'), concept('u1-c', 'U1 third')],
  };
  const u2 = {
    id: 'u2', code: 'T 1.2', title: 'Unit two', summary: '', qc,
    components: [concept('u2-a', 'U2 first'), concept('u2-b', 'U2 second')],
  };
  const course = { id: 'tc', code: 'T 1', title: 'Test course', semester: 1, description: '', units: [u1, u2] };
  return {
    courses: [course],
    getCourse: (id: string) => (id === 'tc' ? course : undefined),
    getUnit: (courseId: string, unitId: string) => {
      const unit = course.units.find((u) => u.id === unitId);
      return courseId === 'tc' && unit ? { course, unit } : undefined;
    },
  };
});

describe('UnitRoute', () => {
  it('starts a freshly navigated unit at its own resume point, not the previous unit\'s index', async () => {
    const store = createProgressStore(new StorageAdapter('app-' + Math.random()), () => '2026-07-16T12:00:00.000Z');
    const router = createMemoryRouter(
      [{ path: '/course/:courseId/unit/:unitId', element: <UnitRoute /> }],
      { initialEntries: ['/course/tc/unit/u1'] },
    );
    render(<StoreProvider store={store}><RouterProvider router={router} /></StoreProvider>);

    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    expect(screen.getByText('U1 third')).toBeInTheDocument();

    // Unit two only has two components; a stale index of 2 would crash or corrupt resume.
    await act(() => router.navigate('/course/tc/unit/u2'));
    expect(screen.getByText('U2 first')).toBeInTheDocument();
  });
});
