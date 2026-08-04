import { describe, it, expect } from 'vitest';
import { diagrams } from './registry';
import { courses } from '../../content/registry';

// A unit can reference a diagram id that was never registered. Nothing else
// catches it: types pass, the schema passes, and the unit renders — with
// "Diagram unavailable in this version." where the picture should be, above
// callouts that describe a diagram the learner cannot see. It shipped exactly
// that way for all five APT 502 units, so it gets its own guard.
describe('diagram registry', () => {
  const referenced = courses.flatMap((course) =>
    course.units.flatMap((unit) =>
      unit.components
        .filter((c) => c.type === 'visual')
        .map((c) => ({ where: `${unit.code} / ${c.id}`, diagramId: c.diagramId })),
    ),
  );

  it('every diagram referenced by course content is registered', () => {
    const missing = referenced.filter((r) => !diagrams[r.diagramId]);
    expect(missing).toEqual([]);
  });

  it('finds visual components to check', () => {
    // guards the test above from passing vacuously if content stops using visuals
    expect(referenced.length).toBeGreaterThan(0);
  });

  it('every registered diagram is a renderable component', () => {
    for (const [id, Diagram] of Object.entries(diagrams)) {
      expect(typeof Diagram, id).toBe('function');
    }
  });
});
