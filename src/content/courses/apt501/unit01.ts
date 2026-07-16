import type { Unit } from '../../../types/content';

export const unit01: Unit = {
  id: 'apt501-u1',
  code: 'APT 501.1',
  title: 'Scope of Practice, Role, and Professional Boundaries',
  summary:
    'What a personal trainer is responsible for, where that responsibility ends, and how to tell the difference in real situations.',
  qc: {
    sources: [
      { citation: 'CSEP — Canadian Society for Exercise Physiology: Scope of Practice for the Certified Personal Trainer (CSEP-CPT)', evidenceType: 'Professional standard', verified: false },
      { citation: 'NSCA — Essentials of Personal Training, 3rd ed. (Ch. on professional responsibilities and referral)', year: 2021, evidenceType: 'Textbook', verified: false },
      { citation: 'ACSM — Guidelines for Exercise Testing and Prescription, 11th ed. (professional practice/scope sections)', year: 2021, evidenceType: 'Guideline', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-07-15',
    reviewBy: '2027-07-15',
    scopeWarning: 'A trainer does not diagnose, treat disease, prescribe medication, or provide medical nutrition therapy. When in doubt, refer.',
    controversies: 'Exact legal boundaries (e.g., what counts as "nutrition advice") vary by country, state/province, and credential.',
  },
  components: [
    {
      type: 'questionSet', id: 'apt501-u1-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'p1', kind: 'single', cognitive: 'application',
          prompt: 'A client shows you an MRI report and asks what it means for her training. What is the most appropriate first action?',
          options: [
            { id: 'a', text: 'Interpret the MRI and adjust her program accordingly', correct: false, rationale: 'Interpreting medical imaging is outside a trainer’s scope.' },
            { id: 'b', text: 'Explain you cannot interpret imaging, and ask what her doctor or physiotherapist advised about activity', correct: true, rationale: 'Correct: stay in scope and work from the clinician’s guidance.' },
            { id: 'c', text: 'Tell her the report is probably nothing to worry about', correct: false, rationale: 'Reassuring her about a medical result is both out of scope and potentially harmful.' },
          ] },
        { id: 'p2', kind: 'single', cognitive: 'recall',
          prompt: 'Which of these is clearly inside a personal trainer’s scope?',
          options: [
            { id: 'a', text: 'Prescribing a knee brace', correct: false },
            { id: 'b', text: 'Teaching and progressing a squat for a healthy client', correct: true },
            { id: 'c', text: 'Diagnosing the cause of a client’s shoulder pain', correct: false },
          ] },
      ],
    },
    {
      type: 'outcomes', id: 'apt501-u1-outcomes',
      outcomes: [
        { level: 'recall', text: 'State what a personal trainer is and is not responsible for.' },
        { level: 'application', text: 'Given a client situation, decide whether to proceed, adapt, or refer.' },
        { level: 'analysis', text: 'Explain why a specific action falls inside or outside scope, citing the underlying principle.' },
        { level: 'synthesis', text: 'Write a short, respectful referral message that stays within scope.' },
      ],
    },
    {
      type: 'concept', id: 'apt501-u1-c1', heading: 'What "scope of practice" actually means',
      body:
        'Scope of practice is the set of activities you are trained, permitted, and insured to do. It is not about how much you personally know. You might read widely about knee injuries, but reading does not put diagnosis inside your scope. Scope is defined by three things working together: your training and certification, the law where you work, and the terms of your insurance.\n\nThink of scope as a fence around a field. Inside the fence you can move freely: teaching exercise, building programs for healthy people, coaching technique, motivating and educating. The fence exists to protect the client, not to limit you for its own sake. Crossing it — diagnosing, treating disease, prescribing medication or medical diets — means doing work that other professionals are trained, licensed, and insured to do, and that you are not.',
    },
    {
      type: 'concept', id: 'apt501-u1-c2', heading: 'The three questions that keep you in scope',
      body:
        'When a situation is unclear, ask three questions in order. First: is this a health problem that needs diagnosis or treatment? If yes, it belongs to a clinician, and your job is to refer. Second: has a qualified professional already given guidance I can work from? If yes, you can coach within those limits — for example, training around a physiotherapist’s restrictions. Third: is this ordinary fitness coaching for someone who is well? If yes, you are on home ground.\n\nMost day-to-day decisions are answered by these three questions. The skill is not memorising a list of banned actions; it is noticing when a situation has quietly changed from coaching into healthcare, and responding by referring rather than guessing.',
    },
    {
      type: 'concept', id: 'apt501-u1-c3', heading: 'Referral is a skill, not a failure',
      body:
        'New trainers sometimes feel that referring a client makes them look less capable. The opposite is true. Knowing exactly when to bring in a physician, physiotherapist, dietitian, or psychologist is one of the clearest signs of an expert. It protects the client, protects you legally, and builds trust — clients notice when you put their safety above your ego.\n\nA good referral is specific and warm. You name what you have noticed (without diagnosing it), explain why it is worth a professional opinion, and make the next step easy. You are not abandoning the client; you are widening the team around them.',
    },
    {
      type: 'questionSet', id: 'apt501-u1-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'u1q1', kind: 'single', cognitive: 'analysis',
          prompt: 'A long-time client mentions new chest tightness during warm-ups this week. What does staying in scope require?',
          explanation: 'New chest tightness is a red flag that needs medical evaluation. Continuing to train through it would ignore a referral trigger.',
          options: [
            { id: 'a', text: 'Lower the intensity and keep training as usual', correct: false, rationale: 'A new cardiac-type symptom is not something to train through.' },
            { id: 'b', text: 'Stop the session for that concern and advise prompt medical evaluation before continuing', correct: true, rationale: 'Correct: this is a referral trigger, not a programming tweak.' },
            { id: 'c', text: 'Tell her it is probably just muscle soreness from the new program', correct: false, rationale: 'That is reassurance about a medical symptom — out of scope and risky.' },
          ] },
        { id: 'u1q2', kind: 'multi', cognitive: 'application',
          prompt: 'Which of the following are inside a personal trainer’s scope? (Select all that apply.)',
          explanation: 'Trainers coach exercise and general habits for well clients and work within clinician guidance; they do not diagnose or prescribe medication/medical diets.',
          options: [
            { id: 'a', text: 'Progressing a healthy client’s deadlift over several weeks', correct: true },
            { id: 'b', text: 'Coaching general healthy-eating habits and referring to a dietitian for a medical diet', correct: true },
            { id: 'c', text: 'Adjusting a client’s insulin dose', correct: false, rationale: 'Medication management belongs to the prescriber.' },
            { id: 'd', text: 'Working within a physiotherapist’s stated movement restrictions after injury', correct: true },
          ] },
        { id: 'u1q3', kind: 'single', cognitive: 'recall',
          prompt: 'Scope of practice is defined by three things working together. Which set is correct?',
          options: [
            { id: 'a', text: 'Your training/certification, the law where you work, and your insurance terms', correct: true },
            { id: 'b', text: 'Your confidence, your client’s trust, and your years of experience', correct: false },
            { id: 'c', text: 'How much you have read, how busy you are, and the gym’s rules', correct: false },
          ] },
      ],
    },
  ],
};
