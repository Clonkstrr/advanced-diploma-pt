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
  explanation?: string;   // shown after answering
}

// Discriminated union of component payloads implemented in Plan 1.
export type UnitComponent =
  | { type: 'outcomes'; id: string; outcomes: LearningOutcome[] }
  | { type: 'concept'; id: string; heading: string; body: string }  // body is plain paragraphs separated by blank lines
  | { type: 'questionSet'; id: string; role: 'pretest' | 'quiz'; title: string; questions: Question[] };

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
