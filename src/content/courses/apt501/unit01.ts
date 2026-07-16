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
      { citation: 'NSCA — Essentials of Personal Training, 3rd ed. (professional responsibilities, legal aspects, and referral chapters)', year: 2021, evidenceType: 'Textbook', verified: false },
      { citation: 'ACSM — Guidelines for Exercise Testing and Prescription, 11th ed. (preparticipation screening and professional practice sections)', year: 2021, evidenceType: 'Guideline', verified: false },
      { citation: 'Eickhoff-Shemek, Herbert & Connaughton — Risk Management for Health/Fitness Professionals: Legal Issues and Strategies', year: 2009, evidenceType: 'Textbook', verified: false },
      { citation: 'ACSM Code of Ethics for Certified and Registered Professionals', evidenceType: 'Professional standard', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-07-16',
    reviewBy: '2027-07-16',
    jurisdictionNotes:
      'Negligence elements described here follow common-law jurisdictions (Canada, US, UK, Australia); civil-law systems reach similar duties by different routes. Nutrition-advice boundaries are set provincially/at state level.',
    scopeWarning:
      'A trainer does not diagnose, treat disease, prescribe medication, or provide medical nutrition therapy. When in doubt, refer.',
    controversies:
      'Exact legal boundaries (e.g., what counts as "nutrition advice" or "corrective exercise") vary by country, state/province, and credential; the term "corrective exercise" itself is debated because it borrows clinical language for non-clinical work.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
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
        { id: 'p3', kind: 'single', cognitive: 'recall',
          prompt: 'A client with diagnosed type 2 diabetes wants an individualized eating plan built around her medication. Who does that work?',
          options: [
            { id: 'a', text: 'A registered dietitian', correct: true, rationale: 'Individualized plans for a medical condition are medical nutrition therapy — dietitian scope.' },
            { id: 'b', text: 'Her personal trainer, if experienced with diabetic clients', correct: false, rationale: 'Experience does not move medical nutrition therapy into trainer scope.' },
            { id: 'c', text: 'Either, as long as the plan is sensible', correct: false, rationale: 'Scope is set by credential and law, not by how sensible the plan sounds.' },
          ] },
        { id: 'p4', kind: 'single', cognitive: 'application',
          prompt: 'Mid-session, a client goes pale and says she feels light-headed. After you seat her and symptoms pass, what should your session note contain?',
          options: [
            { id: 'a', text: 'What you observed, what you did, what you advised, and when — facts only', correct: true, rationale: 'Factual, dated documentation protects the client and you.' },
            { id: 'b', text: 'Your best guess about what medical problem caused it', correct: false, rationale: 'Speculating about causes in writing is diagnosis by another name.' },
            { id: 'c', text: 'Nothing — it resolved, so there is nothing to record', correct: false, rationale: 'Unrecorded incidents cannot protect anyone later.' },
          ] },
        { id: 'p5', kind: 'multi', cognitive: 'analysis',
          prompt: 'Which statements would be red flags in a trainer’s advertising? (Select all that apply.)',
          options: [
            { id: 'a', text: '“Guaranteed 10 kg loss in 10 weeks or your money back”', correct: true, rationale: 'Outcome guarantees misrepresent what any professional can promise.' },
            { id: 'b', text: '“I cure back pain without physio”', correct: true, rationale: 'A treatment claim, and it disparages a licensed profession while claiming its work.' },
            { id: 'c', text: '“Certified personal trainer — strength and conditioning focus”', correct: false, rationale: 'A plain, accurate credential statement is fine.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt501-u1-outcomes',
      outcomes: [
        { level: 'recall', text: 'State what a personal trainer is and is not responsible for, and name the four elements of negligence.' },
        { level: 'application', text: 'Given a client situation, decide whether to proceed, adapt, collaborate, or refer — and document the decision.' },
        { level: 'analysis', text: 'Explain why a specific action falls inside or outside scope, citing the underlying principle rather than a memorised list.' },
        { level: 'synthesis', text: 'Compose a referral message and a client-facing explanation of your boundaries that stay in scope and preserve the relationship.' },
      ],
    },

    // 3 ── core instruction (five concept blocks) ────────────────────────────
    {
      type: 'concept', id: 'apt501-u1-c1', heading: 'What "scope of practice" actually means',
      body:
        'Scope of practice is the set of activities you are trained, permitted, and insured to do. It is not about how much you personally know. You might read widely about knee injuries, but reading does not put diagnosis inside your scope. Scope is defined by three things working together: your training and certification, the law where you work, and the terms of your insurance.\n\nThink of scope as a fence around a field. Inside the fence you can move freely: teaching exercise, building programs for healthy people, coaching technique, motivating and educating. The fence exists to protect the client, not to limit you for its own sake. Crossing it — diagnosing, treating disease, prescribing medication or medical diets — means doing work that other professionals are trained, licensed, and insured to do, and that you are not.\n\nScope is also different from competence. Scope is the outer legal boundary; competence is your honest skill level inside it. Programming for a healthy postpartum client may be inside your scope, but if you have never studied it, it is outside your current competence — and working beyond your competence, even inside scope, is itself a professional failure. You need both: permitted and able.',
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
      type: 'concept', id: 'apt501-u1-c4', heading: 'Negligence, standard of care, and why paperwork protects people',
      body:
        'When something goes wrong and a client sues, courts in common-law countries ask four questions, called the elements of negligence. Did you owe the client a duty of care? (As their trainer, always.) Did you breach the standard of care — meaning, did you act differently from what a reasonably prudent professional with your training would have done? Did that breach cause the harm? And did real damage result? All four must be present. This is why scope matters legally: the moment you act like a clinician, you are judged against a clinician’s standard — one you cannot meet.\n\nThe standard of care is not perfection. It is what a careful, similarly-trained peer would have done: screening before training, honouring red flags, keeping equipment safe, progressing sensibly, respecting professional guidance. Working inside that standard is your strongest legal protection.\n\nDocumentation is how you prove it. Screening records, session notes, incident reports, and referral notes are not bureaucracy — they are the only evidence of careful practice that survives memory. A useful note records facts: what you observed, what you did, what you advised, who was told, and when. It never speculates about causes. “Client reported light-headedness on standing; session stopped; advised physician follow-up; client agreed” protects everyone. “Probably her blood pressure meds” is a diagnosis in writing.',
    },
    {
      type: 'concept', id: 'apt501-u1-c5', heading: 'The allied-health map: who does what, and how to work together',
      body:
        'Knowing who to refer to is as important as knowing when. Physicians diagnose, treat disease, prescribe and adjust medication, and give medical clearance for exercise. Physiotherapists assess and rehabilitate diagnosed injuries and movement disorders, and hand you restriction lists you can train within. Registered dietitians own medical nutrition therapy — individualized plans for conditions like diabetes or eating disorders — while you may share general healthy-eating guidance from national public-health guidelines with well clients. Psychologists and other licensed therapists treat mental-health conditions; you may coach motivation, habits, and general stress management, but treatment plans are theirs. Clinical exercise physiologists deliver exercise for people with established chronic disease, usually under medical direction.\n\nCollaboration has mechanics. Get the client’s consent before contacting another professional about them. Work strictly within any restrictions you are given, and when in doubt about a restriction, ask the professional who wrote it rather than interpret it loosely. Close the loop: report back what you observed so the clinician’s next decision is better informed. Trainers who do this become the practitioner other professionals like referring to — which is how careers are built.',
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt501-u1-visual',
      title: 'When to train, modify, refer, or stop',
      diagramId: 'scope-decision-tree',
      caption: 'The decision path you run silently in every session.',
      callouts: [
        { id: 'v1', label: '1', text: 'Red flags end the session first — before any scope reasoning. Safety outranks everything.' },
        { id: 'v2', label: '2', text: 'Scope and competence are separate tests: scope is the legal/credential boundary, competence is your honest skill inside it. You need a yes to both.' },
        { id: 'v3', label: '3', text: '“Refer or collaborate” is rarely all-or-nothing — you usually keep training the client within the other professional’s limits.' },
        { id: 'v4', label: '4', text: 'Every exit ends in documentation: what you observed, what you decided, what you advised, and when.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt501-u1-worked',
      title: 'A scope decision, reasoned step by step',
      scenario:
        'Thirty minutes into a session, a long-term client mentions her knee has “clicked and ached” since yesterday’s run. She laughs: “You’re basically my physio — can you fix it?”',
      steps: [
        { id: 'w1', title: 'Separate the request from the symptom',
          reasoning: 'She has asked for treatment (“fix it”) — that word is the signal that the conversation is drifting out of scope. The symptom itself is new-onset knee pain: a fact you can work with, not a condition you can name.' },
        { id: 'w2', title: 'Screen, don’t diagnose',
          reasoning: 'Ask factual questions: when did it start, what movement provokes it, how strong is the ache, any locking, giving way, or swelling? Gathering facts to decide whether to refer is squarely in scope. Naming the pathology is not.' },
        { id: 'w3', title: 'Check red flags',
          reasoning: 'Significant swelling, instability, inability to bear weight, or trauma would mean stopping and referring today. Her answers: mild ache, no swelling, no instability. Not an emergency — but new and unexplained.' },
        { id: 'w4', title: 'Decide today’s session',
          reasoning: 'Remove knee-loading work today and substitute upper-body and core blocks. You are not treating the knee; you are choosing not to stress a symptomatic joint until someone qualified has seen it.' },
        { id: 'w5', title: 'Refer forward without diagnosing',
          reasoning: '“That’s worth a physio look before we load it again — I’ll adjust your sessions until you’ve been seen.” Then write the note: symptom reported, session modified, referral advised, date.' },
      ],
      takeaway:
        'You never named the injury and never treated it — yet the client got a safe session, a clear plan, and a professional referral. That is what expert scope practice looks like.',
    },

    // 6 ── interactive lab (classification) ──────────────────────────────────
    {
      type: 'classification', id: 'apt501-u1-lab',
      title: 'Lab: whose job is it?',
      instructions:
        'For each situation, decide whether it is within your scope, needs a referral out, or is a collaboration — training the client within another professional’s guidance.',
      buckets: [
        { id: 'scope', label: 'Within your scope' },
        { id: 'refer', label: 'Refer out' },
        { id: 'collab', label: 'Collaborate' },
      ],
      items: [
        { id: 'l1', text: 'Design a 12-week progressive strength program for a healthy adult',
          bucketId: 'scope', rationale: 'Needs analysis and program design for well clients is the core of trainer scope.' },
        { id: 'l2', text: 'A client asks which supplement stack will fix her constant fatigue',
          bucketId: 'refer', rationale: 'Persistent fatigue is a medical symptom, and recommending supplements to treat it is treatment. Physician first; a dietitian may follow.' },
        { id: 'l3', text: 'Train a post-ACL-surgery client who arrives with her physiotherapist’s written restriction list',
          bucketId: 'collab', rationale: 'You train within the stated restrictions and report progress back — classic collaboration.' },
        { id: 'l4', text: 'Walk a healthy client through the national healthy-eating guidelines',
          bucketId: 'scope', rationale: 'Sharing general public-health nutrition guidance with well clients is trainer scope in most jurisdictions (check local rules).' },
        { id: 'l5', text: 'A client with diagnosed depression asks you to tweak the homework her therapist assigned',
          bucketId: 'refer', rationale: 'Therapy homework is part of a treatment plan. Encourage her to raise it with her therapist; you do not adjust clinical treatment.' },
        { id: 'l6', text: 'Teach slow breathing during cooldowns as general stress management',
          bucketId: 'scope', rationale: 'General relaxation and stress-management coaching for well clients is wellness scope — as long as it is not framed as treating a condition.' },
        { id: 'l7', text: 'A pregnant client brings written exercise guidance from her physician',
          bucketId: 'collab', rationale: 'Prenatal training within medical guidance is collaboration; the guidance sets your limits.' },
        { id: 'l8', text: 'Interpret the cholesterol panel a client brought from the lab',
          bucketId: 'refer', rationale: 'Interpreting lab results is clinical work, full stop.' },
      ],
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt501-u1-case',
      title: 'Case: the intake that wasn’t routine',
      brief:
        'Maria, 52, books you for weight loss. Her intake form notes blood-pressure medication and “sometimes dizzy when standing quickly”. Walk the case; every decision is scored against best practice.',
      startNodeId: 'n1',
      nodes: [
        {
          id: 'n1',
          situation:
            'You are reviewing Maria’s intake form before her first session. Blood-pressure medication; occasional dizziness on standing.',
          choices: [
            { id: 'n1a', text: 'Ask follow-up questions about the dizziness — how often, when it started, any fainting — before deciding anything', to: 'n2',
              quality: 'best', feedback: 'Exactly right: screening detail first, decisions second.' },
            { id: 'n1b', text: 'Proceed with a light first workout and just avoid quick position changes', to: 'n3',
              quality: 'poor', feedback: 'Dizziness plus blood-pressure medication is a screening flag you cannot wave through with programming tweaks.' },
            { id: 'n1c', text: 'Decline to train her — too risky', to: null,
              quality: 'poor', feedback: 'Blanket refusal without gathering facts abandons a client who can very likely train with the right guidance. Over-referral is also a professional failure.' },
          ],
        },
        {
          id: 'n2',
          situation:
            'Maria says the dizziness happens about twice a week when she stands quickly, started after her doctor changed her dose last month, and she has never fainted.',
          choices: [
            { id: 'n2a', text: 'Ask her to tell her physician about the new dizziness before starting training; offer a seated mobility introduction meanwhile', to: 'n4',
              quality: 'best', feedback: 'You connected the symptom to the medication change and kept her engaged without risk — textbook.' },
            { id: 'n2b', text: 'Start cautiously at very low intensity with slow position changes while she books a check-up', to: 'n4',
              quality: 'acceptable', feedback: 'Defensible with care, but a new symptom that tracks a dose change deserves the prescriber’s eyes before loading — best practice is physician contact first.' },
          ],
        },
        {
          id: 'n3',
          situation:
            'Ten minutes into the workout, Maria stands up from a bench, grabs the rack, and goes pale.',
          choices: [
            { id: 'n3a', text: 'Seat her, monitor until symptoms pass, end the session, document, and advise physician contact', to: null,
              quality: 'best', feedback: 'The correct recovery from a poor start: safety, documentation, referral.' },
            { id: 'n3b', text: 'Give her water and continue at lower intensity once the colour returns', to: null,
              quality: 'poor', feedback: 'Continuing after a near-faint is indefensible against any standard of care.' },
          ],
        },
        {
          id: 'n4',
          situation:
            'Two weeks later Maria returns: her physician adjusted the dose and cleared her for exercise, adding “avoid rapid positional changes initially”.',
          choices: [
            { id: 'n4a', text: 'Program gradual position transitions and longer warm-ups, watch for symptoms, and file the clearance note', to: null,
              quality: 'best', feedback: 'Collaboration done properly: the clearance condition shapes the program and lives in her file.' },
            { id: 'n4b', text: 'Train her normally — she is cleared now', to: null,
              quality: 'acceptable', feedback: 'She is cleared, but the clearance came with a condition; ignoring it throws away the collaboration you just built.' },
          ],
        },
      ],
    },

    // 8 ── error identification ──────────────────────────────────────────────
    {
      type: 'errorId', id: 'apt501-u1-errorid',
      title: 'Audit this trainer’s website bio',
      brief:
        'Flag every statement that oversteps scope or professional marketing standards. Leave acceptable statements unflagged.',
      document:
        '“Certified personal trainer, 10 years’ experience. I diagnose muscle imbalances and prescribe corrective exercise plans that cure chronic back pain. Nutrition included: I’ll build you a personalized meal plan to reverse your pre-diabetes. Every client gets my guaranteed 8-kg-in-8-weeks transformation — results or your money back! I work alongside local physiotherapists and refer out whenever something needs medical eyes.”',
      findings: [
        { id: 'e1', text: '“I diagnose muscle imbalances”', isError: true,
          rationale: '“Diagnose” is clinical work and clinical language; assessment of movement is not diagnosis of pathology.' },
        { id: 'e2', text: '“prescribe corrective exercise plans”', isError: true,
          rationale: '“Prescribe” claims clinical authority; trainers design and coach programs.' },
        { id: 'e3', text: '“cure chronic back pain”', isError: true,
          rationale: 'A treatment-and-cure claim about a medical condition — scope violation and legally reckless.' },
        { id: 'e4', text: '“personalized meal plan to reverse your pre-diabetes”', isError: true,
          rationale: 'An individualized plan targeting a diagnosed condition is medical nutrition therapy — dietitian scope.' },
        { id: 'e5', text: '“guaranteed 8-kg-in-8-weeks … money back”', isError: true,
          rationale: 'Outcome guarantees misrepresent what any professional can promise and invite consumer-protection and negligence exposure.' },
        { id: 'e6', text: '“Certified personal trainer, 10 years’ experience”', isError: false,
          rationale: 'Accurate credentials and experience are exactly what a bio should state.' },
        { id: 'e7', text: '“I work alongside local physiotherapists and refer out …”', isError: false,
          rationale: 'Advertising collaboration and referral is a mark of professionalism, not a violation.' },
      ],
    },

    // 9 ── active-recall set ─────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt501-u1-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'r1', front: 'What three things define your scope of practice?',
          back: 'Your training/certification, the law where you work, and your insurance terms — all three together.' },
        { id: 'r2', front: 'Scope vs competence — what’s the difference?',
          back: 'Scope is the outer legal/credential boundary; competence is your honest skill level inside it. Professional practice needs both.' },
        { id: 'r3', front: 'The three questions that keep you in scope?',
          back: '1) Does this need diagnosis or treatment? 2) Is there professional guidance I can work within? 3) Is this ordinary coaching for a well person?' },
        { id: 'r4', front: 'Name the four elements of negligence.',
          back: 'Duty of care, breach of the standard of care, causation, and damages — all four must be present.' },
        { id: 'r5', front: 'What is the “standard of care”?',
          back: 'What a reasonably prudent professional with your training would have done in the same situation. It is the benchmark you are judged against.' },
        { id: 'r6', front: 'Where is the trainer’s nutrition boundary?',
          back: 'General healthy-eating guidance from public guidelines for well clients: in scope. Individualized plans for medical conditions (medical nutrition therapy): dietitian.' },
        { id: 'r7', front: 'What belongs in a note after an incident?',
          back: 'Facts only: what you observed, what you did, what you advised, who was informed, and when. Never speculation about causes.' },
        { id: 'r8', front: 'When does a red flag end a session?',
          back: 'Immediately — before any scope reasoning. Safety first, then referral, then documentation.' },
        { id: 'r9', front: 'Who owns exercise for people with established chronic disease?',
          back: 'Clinical exercise physiologists, usually under medical direction — trainers collaborate within provided guidance.' },
      ],
    },

    // 10 ── unit quiz ────────────────────────────────────────────────────────
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
        { id: 'u1q4', kind: 'single', cognitive: 'recall',
          prompt: 'Which are the four elements of negligence?',
          options: [
            { id: 'a', text: 'Duty, breach of the standard of care, causation, damages', correct: true },
            { id: 'b', text: 'Intent, harm, injury, compensation', correct: false, rationale: 'Negligence does not require intent — that is what separates it from intentional wrongs.' },
            { id: 'c', text: 'Contract, liability, insurance, waiver', correct: false, rationale: 'These are risk-management tools, not the legal elements of negligence.' },
          ] },
        { id: 'u1q5', kind: 'single', cognitive: 'application',
          prompt: 'A client stumbles off a treadmill, shaken but apparently fine, and asks you not to make a fuss. What do you write in your notes?',
          explanation: 'Incidents get documented factually even when the client minimises them; unrecorded events cannot protect either of you later.',
          options: [
            { id: 'a', text: 'Nothing, respecting her wishes', correct: false, rationale: 'Her comfort matters, but documentation duty is yours, not hers to waive.' },
            { id: 'b', text: 'The facts: what happened, what you checked, what you advised, and the time', correct: true, rationale: 'Correct — factual, dated, complete.' },
            { id: 'c', text: 'A note that the treadmill probably needs servicing and likely caused it', correct: false, rationale: 'Speculation about causes in writing creates liability instead of managing it.' },
          ] },
        { id: 'u1q6', kind: 'single', cognitive: 'analysis',
          prompt: 'Why does a “guaranteed results or your money back” promise increase legal risk rather than just marketing risk?',
          options: [
            { id: 'a', text: 'It raises the standard you are judged against and misrepresents outcomes no professional controls', correct: true, rationale: 'Guarantees invite both consumer-protection claims and a harsher negligence comparison.' },
            { id: 'b', text: 'It only matters if a client actually asks for the refund', correct: false, rationale: 'The exposure exists the moment the claim is published.' },
            { id: 'c', text: 'It is fine as long as most clients do lose the weight', correct: false, rationale: 'A mostly-kept promise is still a misrepresentation to the clients for whom it fails.' },
          ] },
        { id: 'u1q7', kind: 'single', cognitive: 'synthesis',
          prompt: 'Your client’s knee has ached for a week. Which message best combines referral, scope, and the relationship?',
          explanation: 'A strong referral names the observation without diagnosing, explains the why, keeps you involved, and makes the next step easy.',
          options: [
            { id: 'a', text: '“I think it’s your meniscus — rest two weeks and we’ll retest it.”', correct: false, rationale: 'Names a pathology (diagnosis) and prescribes management for it.' },
            { id: 'b', text: '“A week of knee pain is worth a physiotherapist’s eyes before we load it again. I’ll adapt your sessions around it until you’ve been seen — want a recommendation?”', correct: true, rationale: 'Observation without diagnosis, clear reason, continued care, easy next step.' },
            { id: 'c', text: '“I can’t help with injuries. Come back when it stops hurting.”', correct: false, rationale: 'Technically in scope but abandons the client and the relationship.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt501-u1-teach',
      title: 'Teach it back',
      prompt:
        'A frustrated client says: “Why won’t you just tell me what’s wrong with my shoulder? You know more about training than my doctor.” In plain, warm language, explain why you won’t diagnose — and what you will do instead.',
      modelAnswer:
        'I take that as a compliment — and I want to earn it by staying honest about what I’m trained for. Diagnosing what’s inside a joint takes clinical training, examination skills, and sometimes imaging, and the people licensed for that are also accountable for getting it right. What I’m expert at is what happens next: watching how you move, adjusting your training so we don’t aggravate anything, and building your program around whatever the clinician finds. So here’s my plan: get those eyes on the shoulder — I can suggest someone good — and meanwhile I’ll keep you training hard on everything that doesn’t bother it. You lose nothing, and we both get answers we can trust.',
      rubric: [
        { id: 't1', text: 'Explains why diagnosis is outside a trainer’s role without jargon or self-deprecation' },
        { id: 't2', text: 'Says concretely what the trainer will do (adapt training, keep coaching)' },
        { id: 't3', text: 'Names the right professional and makes the next step easy' },
        { id: 't4', text: 'Keeps a warm, confident tone that preserves the relationship' },
      ],
    },

    // 12 ── cumulative review ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u1-cumulative', role: 'cumulative', title: 'Pulling it together',
      questions: [
        { id: 'cu1', kind: 'single', cognitive: 'application',
          prompt: 'Across everything in this unit: what is the FIRST check in every session decision, before any scope reasoning?',
          options: [
            { id: 'a', text: 'Red flags — symptoms or events that end the session and trigger referral', correct: true, rationale: 'Safety outranks scope logic; the decision tree starts there.' },
            { id: 'b', text: 'Whether the client’s goals have changed', correct: false },
            { id: 'c', text: 'Whether your insurance covers the exercise selection', correct: false },
          ] },
        { id: 'cu2', kind: 'multi', cognitive: 'analysis',
          prompt: 'Match the boundary correctly: which pairings of professional → work-only-they-do are right? (Select all that apply.)',
          options: [
            { id: 'a', text: 'Registered dietitian → individualized nutrition plans for medical conditions', correct: true },
            { id: 'b', text: 'Physician → diagnosis, medication, and medical clearance', correct: true },
            { id: 'c', text: 'Personal trainer → interpreting lab results for training decisions', correct: false, rationale: 'Lab interpretation is clinical, whatever it is used for.' },
            { id: 'd', text: 'Physiotherapist → rehabilitation of diagnosed injuries and restriction lists', correct: true },
          ] },
        { id: 'cu3', kind: 'single', cognitive: 'synthesis',
          prompt: 'A dizzy-on-standing client (recent medication change), a marketing page promising guaranteed results, and an undocumented near-faint walk into your practice review. Which single principle fixes all three?',
          explanation: 'Each failure is a departure from the standard of care: screen and involve the prescriber; promise process, not outcomes; document incidents factually.',
          options: [
            { id: 'a', text: 'Act as a reasonably prudent professional would — screen and refer, market honestly, document facts', correct: true, rationale: 'The standard of care is the thread through screening, marketing, and documentation.' },
            { id: 'b', text: 'Carry more insurance so mistakes are covered', correct: false, rationale: 'Insurance transfers cost; it does not make practice defensible or safe.' },
            { id: 'c', text: 'Avoid training anyone with any medical history', correct: false, rationale: 'Over-refusal is its own professional failure; screening exists so you can train people safely.' },
          ] },
      ],
    },
  ],
};
