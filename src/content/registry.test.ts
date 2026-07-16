import { describe, it, expect } from 'vitest';
import { courses, getCourse } from './registry';
import { validateCourse } from './schema';

describe('course registry', () => {
  it('every registered course validates against the schema', () => {
    for (const c of courses) expect(() => validateCourse(c)).not.toThrow();
  });
  it('APT 501 unit 1 contains a pretest, concepts, and a quiz', () => {
    const c = getCourse('apt501')!;
    const types = c.units[0].components.map((x) => x.type);
    expect(types).toContain('questionSet');
    expect(types).toContain('concept');
    expect(types).toContain('outcomes');
  });
});
