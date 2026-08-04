import type { FC } from 'react';
import { EvidenceHierarchy } from './EvidenceHierarchy';
import { ConfoundingTriangle } from './ConfoundingTriangle';
import { ConfidenceIntervalPlot } from './ConfidenceIntervalPlot';
import { ForestPlotAnatomy } from './ForestPlotAnatomy';
import { ClaimEvaluationPipeline } from './ClaimEvaluationPipeline';
import { MuscleArchitecture } from './MuscleArchitecture';
import { TissuePlaneAxisPairs } from './TissuePlaneAxisPairs';
import { TissueLoadCurve } from './TissueLoadCurve';
import { TissueJointFreedom } from './TissueJointFreedom';
import { TrunkCanister } from './TrunkCanister';
import { SpineFacetRails } from './SpineFacetRails';
import { SpineDiscDay } from './SpineDiscDay';
import { SpineAbdominalWall } from './SpineAbdominalWall';
import { ScapulohumeralRhythm } from './ScapulohumeralRhythm';
import { ShoulderStabilityStack } from './ShoulderStabilityStack';
import { ShoulderDeltoidCuffCouple } from './ShoulderDeltoidCuffCouple';
import { ShoulderToHandChain } from './ShoulderToHandChain';
import { LowerLimbChain } from './LowerLimbChain';
import { LowerLimbHipShape } from './LowerLimbHipShape';
import { LowerLimbPatellofemoralLoad } from './LowerLimbPatellofemoralLoad';
import { LowerLimbValgusDrivers } from './LowerLimbValgusDrivers';
import { MuscleRolesChain } from './MuscleRolesChain';
import { ChainKneeLoadByAngle } from './ChainKneeLoadByAngle';
import { ChainCarryLoadPath } from './ChainCarryLoadPath';
import { ChainTissueClocks } from './ChainTissueClocks';

// Content references diagrams by id (spec §12: all diagrams are in-code SVG).
// A missing entry renders as a "Diagram unavailable" placeholder above live
// callouts describing a picture the learner cannot see, and nothing else
// catches it — registry.test.ts asserts every id referenced by content resolves
// here, so adding a unit without its diagrams fails the suite.
export const diagrams: Record<string, FC> = {
  // APT 501 — evidence-based professional practice
  'evidence-hierarchy': EvidenceHierarchy,
  'confounding-triangle': ConfoundingTriangle,
  'confidence-interval-plot': ConfidenceIntervalPlot,
  'forest-plot-anatomy': ForestPlotAnatomy,
  'claim-evaluation-pipeline': ClaimEvaluationPipeline,

  // APT 502.1 — anatomical language, tissue architecture, joint mechanics
  'muscle-architecture': MuscleArchitecture,
  'tissue-plane-axis-pairs': TissuePlaneAxisPairs,
  'tissue-load-curve': TissueLoadCurve,
  'tissue-joint-freedom': TissueJointFreedom,

  // APT 502.2 — spine, rib cage, pelvis, trunk
  'trunk-canister': TrunkCanister,
  'spine-facet-rails': SpineFacetRails,
  'spine-disc-day': SpineDiscDay,
  'spine-abdominal-wall': SpineAbdominalWall,

  // APT 502.3 — shoulder complex and upper extremity
  'scapulohumeral-rhythm': ScapulohumeralRhythm,
  'shoulder-stability-stack': ShoulderStabilityStack,
  'shoulder-deltoid-cuff-couple': ShoulderDeltoidCuffCouple,
  'shoulder-to-hand-chain': ShoulderToHandChain,

  // APT 502.4 — hip, knee, ankle, foot
  'lower-limb-chain': LowerLimbChain,
  'lower-limb-hip-shape': LowerLimbHipShape,
  'lower-limb-patellofemoral-load': LowerLimbPatellofemoralLoad,
  'lower-limb-valgus-drivers': LowerLimbValgusDrivers,

  // APT 502.5 — muscle roles, movement chains, variation
  'muscle-roles-chain': MuscleRolesChain,
  'chain-knee-load-by-angle': ChainKneeLoadByAngle,
  'chain-carry-load-path': ChainCarryLoadPath,
  'chain-tissue-clocks': ChainTissueClocks,
};
