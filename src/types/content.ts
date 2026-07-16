export type CognitiveLevel = 'recall' | 'application' | 'analysis' | 'synthesis';

export interface Source {
  citation: string;      // real, human-readable citation
  year?: number;
  evidenceType: string;  // e.g. "Position stand", "Systematic review", "Textbook"
  verified: boolean;     // false = attributed but page/DOI not yet verified
}

export interface QCMetadata {
  sources: Source[];
  confidence: 'high' | 'moderate' | 'low';
  lastReviewed: string;  // ISO date
  reviewBy: string;      // ISO date (next scheduled review)
  jurisdictionNotes?: string;
  scopeWarning?: string;
  controversies?: string;
  changeLog?: { date: string; note: string }[];
}

export interface LearningOutcome { level: CognitiveLevel; text: string; }

export interface Option { id: string; text: string; correct: boolean; rationale?: string; }

export interface Question {
  id: string;
  kind: 'single' | 'multi';
  prompt: string;
  options: Option[];
  cognitive: CognitiveLevel;
  explanation?: string;      // shown after answering
  safetyCritical?: boolean;  // must be answered correctly for unit mastery (never offset)
}

// Plan 2 component payload pieces.
export interface Callout { id: string; label: string; text: string; }
export interface WorkedStep { id: string; title: string; reasoning: string; }
export interface Bucket { id: string; label: string; }
export interface ClassificationItem { id: string; text: string; bucketId: string; rationale: string; }
export interface NumericField { id: string; label: string; unit?: string; answer: number; tolerance: number; }
export interface Finding { id: string; text: string; isError: boolean; rationale: string; }
export interface CaseChoice {
  id: string; text: string;
  to: string | null;                          // null = terminal choice (case ends)
  quality: 'best' | 'acceptable' | 'poor';
  feedback: string;
}
export interface CaseNode { id: string; situation: string; choices: CaseChoice[]; }
export interface Claim {
  id: string; claim: string; evidenceDescription: string;
  correctLevel: string;                       // one of the component's hierarchy entries
  rationale: string;
}
export interface RecallCard { id: string; front: string; back: string; }
export interface RubricItem { id: string; text: string; }

// Discriminated union of all engine component payloads.
export type UnitComponent =
  | { type: 'outcomes'; id: string; outcomes: LearningOutcome[] }
  | { type: 'concept'; id: string; heading: string; body: string }  // body is plain paragraphs separated by blank lines
  | { type: 'questionSet'; id: string; role: 'pretest' | 'quiz' | 'cumulative'; title: string; questions: Question[] }
  | { type: 'visual'; id: string; title: string; diagramId: string; caption: string; callouts: Callout[] }
  | { type: 'workedExample'; id: string; title: string; scenario: string; steps: WorkedStep[]; takeaway: string }
  | { type: 'classification'; id: string; title: string; instructions: string; buckets: Bucket[]; items: ClassificationItem[] }
  | { type: 'numericLab'; id: string; title: string; brief: string; fields: NumericField[]; solution: string }
  | { type: 'errorId'; id: string; title: string; brief: string; document: string; findings: Finding[] }
  | { type: 'branchingCase'; id: string; title: string; brief: string; startNodeId: string; nodes: CaseNode[] }
  | { type: 'evidenceAppraisal'; id: string; title: string; brief: string; hierarchy: string[]; claims: Claim[]; briefPrompt: string; modelBrief: string }
  | { type: 'recallSet'; id: string; title: string; cards: RecallCard[] }
  | { type: 'teachBack'; id: string; title: string; prompt: string; modelAnswer: string; rubric: RubricItem[] };

export interface Unit {
  id: string;
  code: string;          // e.g. "APT 501.1"
  title: string;
  summary: string;
  qc: QCMetadata;
  components: UnitComponent[];
}

export interface Course {
  id: string;            // e.g. "apt501"
  code: string;          // e.g. "APT 501"
  title: string;
  semester: number;
  description: string;
  units: Unit[];
}
