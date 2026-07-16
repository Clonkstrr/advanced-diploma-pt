import type { FC } from 'react';
import { ScopeDecisionTree } from './ScopeDecisionTree';

// Content references diagrams by id (spec §12: all diagrams are in-code SVG).
export const diagrams: Record<string, FC> = {
  'scope-decision-tree': ScopeDecisionTree,
};
