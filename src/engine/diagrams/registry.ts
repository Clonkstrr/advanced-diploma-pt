import type { FC } from 'react';
import { EvidenceHierarchy } from './EvidenceHierarchy';
import { ConfoundingTriangle } from './ConfoundingTriangle';
import { ConfidenceIntervalPlot } from './ConfidenceIntervalPlot';
import { ForestPlotAnatomy } from './ForestPlotAnatomy';
import { ClaimEvaluationPipeline } from './ClaimEvaluationPipeline';

// Content references diagrams by id (spec §12: all diagrams are in-code SVG).
export const diagrams: Record<string, FC> = {
  'evidence-hierarchy': EvidenceHierarchy,
  'confounding-triangle': ConfoundingTriangle,
  'confidence-interval-plot': ConfidenceIntervalPlot,
  'forest-plot-anatomy': ForestPlotAnatomy,
  'claim-evaluation-pipeline': ClaimEvaluationPipeline,
};
