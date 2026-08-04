import { describe, it, expect } from 'vitest';
import { courses } from './registry';
import { parseConceptBody } from '../engine/components/ConceptBlock';
import type { Unit } from '../types/content';

// The owner's content rules, enforced instead of remembered. Every one of these
// was a real defect that shipped: dashes reading as AI output, reading blocks
// with no anchor, a unit carrying a single diagram.
//
// Courses are opted in as they complete the plain-language and structure pass.
// APT 501 predates it and is not in this list yet.
const PASSED = ['apt502'];

const DASH = /[—–]/;

// Everything the learner reads, minus qc.sources: citation strings legitimately
// keep author separators and page ranges.
function learnerFacingText(unit: Unit): string {
  return [unit.summary, unit.qc.controversies ?? '', JSON.stringify(unit.components)].join('\n');
}

function conceptBlocks(unit: Unit) {
  return unit.components.filter((c) => c.type === 'concept');
}

describe('content standards', () => {
  it('covers the courses that have been through the pass', () => {
    expect(courses.filter((c) => PASSED.includes(c.id)).length).toBe(PASSED.length);
  });

  for (const course of courses.filter((c) => PASSED.includes(c.id))) {
    for (const unit of course.units) {
      describe(`${unit.code}`, () => {
        it('uses no dashes as punctuation', () => {
          const offenders = learnerFacingText(unit)
            .split('\n')
            .filter((line) => DASH.test(line))
            .map((line) => line.slice(0, 120));
          expect(offenders).toEqual([]);
        });

        it('gives every reading block exactly one key idea', () => {
          const offenders = conceptBlocks(unit)
            .map((c) => ({
              id: c.id,
              keyIdeas: parseConceptBody(c.body).filter((p) => p.kind === 'keyIdea').length,
            }))
            .filter((x) => x.keyIdeas !== 1);
          expect(offenders).toEqual([]);
        });

        it('breaks every reading block up with at least two subheadings', () => {
          const offenders = conceptBlocks(unit)
            .map((c) => ({
              id: c.id,
              subheadings: parseConceptBody(c.body).filter((p) => p.kind === 'subheading').length,
            }))
            .filter((x) => x.subheadings < 2);
          expect(offenders).toEqual([]);
        });

        it('highlights key terms in every reading block', () => {
          const offenders = conceptBlocks(unit)
            .map((c) => ({ id: c.id, terms: (c.body.match(/\*\*[^*]+\*\*/g) ?? []).length }))
            .filter((x) => x.terms < 3);
          expect(offenders).toEqual([]);
        });

        it('uses no markup syntax the renderer does not support', () => {
          const offenders = conceptBlocks(unit)
            .flatMap((c) => c.body.split(/\n/).map((line) => ({ id: c.id, line: line.trim() })))
            .filter(({ line }) => /^#{3,}\s/.test(line) || /^[-*]\s/.test(line))
            .map((x) => `${x.id}: ${x.line.slice(0, 80)}`);
          expect(offenders).toEqual([]);
        });

        it('carries at least three diagrams', () => {
          const visuals = unit.components.filter((c) => c.type === 'visual').length;
          expect(visuals).toBeGreaterThanOrEqual(3);
        });
      });
    }
  }
});
