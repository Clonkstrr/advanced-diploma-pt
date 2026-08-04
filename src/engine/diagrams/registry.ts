import type { FC } from 'react';
import { EvidenceHierarchy } from './EvidenceHierarchy';
import { ConfoundingTriangle } from './ConfoundingTriangle';
import { ConfidenceIntervalPlot } from './ConfidenceIntervalPlot';
import { ForestPlotAnatomy } from './ForestPlotAnatomy';
import { ClaimEvaluationPipeline } from './ClaimEvaluationPipeline';
import { DesignComparatorSwap } from './DesignComparatorSwap';
import { DesignObservationTimeline } from './DesignObservationTimeline';
import { DesignTrialFlow } from './DesignTrialFlow';
import { BiasFourStories } from './BiasFourStories';
import { BiasStudyPipeline } from './BiasStudyPipeline';
import { BiasRegressionToMean } from './BiasRegressionToMean';
import { StatsRelativeVsAbsolute } from './StatsRelativeVsAbsolute';
import { StatsPValueNullWorld } from './StatsPValueNullWorld';
import { StatsSampleSizePrecision } from './StatsSampleSizePrecision';
import { ReviewSystematicSieve } from './ReviewSystematicSieve';
import { ReviewFunnelPublicationBias } from './ReviewFunnelPublicationBias';
import { ReviewGradeCertaintyLadder } from './ReviewGradeCertaintyLadder';
import { ClaimSentenceAnatomy } from './ClaimSentenceAnatomy';
import { ClaimEvidenceLadder } from './ClaimEvidenceLadder';
import { ClaimRegulationGates } from './ClaimRegulationGates';
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
  // APT 501.1 — answerable questions and study designs
  'evidence-hierarchy': EvidenceHierarchy,
  'design-comparator-swap': DesignComparatorSwap,
  'design-observation-timeline': DesignObservationTimeline,
  'design-trial-flow': DesignTrialFlow,

  // APT 501.2 — correlation, causation, bias, confounding
  'confounding-triangle': ConfoundingTriangle,
  'bias-four-stories': BiasFourStories,
  'bias-study-pipeline': BiasStudyPipeline,
  'bias-regression-to-mean': BiasRegressionToMean,

  // APT 501.3 — statistics, confidence intervals, effect sizes
  'confidence-interval-plot': ConfidenceIntervalPlot,
  'stats-relative-vs-absolute': StatsRelativeVsAbsolute,
  'stats-p-value-null-world': StatsPValueNullWorld,
  'stats-sample-size-precision': StatsSampleSizePrecision,

  // APT 501.4 — systematic reviews, meta-analyses, guidelines
  'forest-plot-anatomy': ForestPlotAnatomy,
  'review-systematic-sieve': ReviewSystematicSieve,
  'review-funnel-asymmetry': ReviewFunnelPublicationBias,
  'review-grade-ladder': ReviewGradeCertaintyLadder,

  // APT 501.5 — evaluating claims, supplements, trends
  'claim-evaluation-pipeline': ClaimEvaluationPipeline,
  'claim-sentence-anatomy': ClaimSentenceAnatomy,
  'claim-evidence-ladder': ClaimEvidenceLadder,
  'claim-regulation-gates': ClaimRegulationGates,

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
