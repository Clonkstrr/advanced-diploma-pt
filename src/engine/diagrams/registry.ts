import type { FC } from 'react';
import { EvidenceHierarchy } from './EvidenceHierarchy';
import { ConfoundingTriangle } from './ConfoundingTriangle';
import { ConfidenceIntervalPlot } from './ConfidenceIntervalPlot';
import { ForestPlotAnatomy } from './ForestPlotAnatomy';
import { ClaimEvaluationPipeline } from './ClaimEvaluationPipeline';
import { MuscleArchitecture } from './MuscleArchitecture';
import { TrunkCanister } from './TrunkCanister';
import { ScapulohumeralRhythm } from './ScapulohumeralRhythm';
import { LowerLimbChain } from './LowerLimbChain';
import { MuscleRolesChain } from './MuscleRolesChain';

// Content references diagrams by id (spec §12: all diagrams are in-code SVG).
// A missing entry renders as a "Diagram unavailable" placeholder with live
// callouts pointing at nothing, which is silent in every other check —
// registry.test.ts asserts every id referenced by content resolves here.
export const diagrams: Record<string, FC> = {
  // APT 501 — evidence-based practice
  'evidence-hierarchy': EvidenceHierarchy,
  'confounding-triangle': ConfoundingTriangle,
  'confidence-interval-plot': ConfidenceIntervalPlot,
  'forest-plot-anatomy': ForestPlotAnatomy,
  'claim-evaluation-pipeline': ClaimEvaluationPipeline,
  // APT 502 — functional human anatomy
  'muscle-architecture': MuscleArchitecture,
  'trunk-canister': TrunkCanister,
  'scapulohumeral-rhythm': ScapulohumeralRhythm,
  'lower-limb-chain': LowerLimbChain,
  'muscle-roles-chain': MuscleRolesChain,
};
