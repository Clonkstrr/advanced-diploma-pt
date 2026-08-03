import type { Unit } from '../../../types/content';

export const unit02: Unit = {
  id: 'apt501-u2',
  code: 'APT 501.1',
  title: 'Asking Answerable Questions and Study Designs',
  summary:
    'How to turn a vague training question into one research can answer, and how to read each study design for what it can — and cannot — tell you about the client in front of you.',
  qc: {
    sources: [
      { citation: 'Guyatt G, Rennie D, Meade MO, Cook DJ (eds) — Users’ Guides to the Medical Literature: A Manual for Evidence-Based Clinical Practice, 3rd ed. McGraw-Hill', year: 2015, evidenceType: 'Textbook', verified: false },
      { citation: 'Straus SE, Glasziou P, Richardson WS, Haynes RB — Evidence-Based Medicine: How to Practice and Teach EBM, 5th ed. Elsevier', year: 2019, evidenceType: 'Textbook', verified: false },
      { citation: 'Greenhalgh T — How to Read a Paper: The Basics of Evidence-Based Medicine and Healthcare, 6th ed. Wiley-Blackwell', year: 2019, evidenceType: 'Textbook', verified: false },
      { citation: 'Schulz KF, Altman DG, Moher D, for the CONSORT Group — CONSORT 2010 Statement: updated guidelines for reporting parallel group randomised trials. BMJ 2010;340:c332', year: 2010, evidenceType: 'Reporting guideline', verified: false },
      { citation: 'Rothman KJ, Greenland S, Lash TL — Modern Epidemiology, 3rd ed. Lippincott Williams & Wilkins', year: 2008, evidenceType: 'Textbook', verified: false },
      { citation: 'Guyatt GH, Oxman AD, Vist GE, et al. — GRADE: an emerging consensus on rating quality of evidence and strength of recommendations. BMJ 2008;336:924–926', year: 2008, evidenceType: 'Methodology paper', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-08-03',
    reviewBy: '2027-08-03',
    controversies:
      'Evidence-hierarchy diagrams differ between organizations, and modern appraisal frameworks (notably GRADE) deliberately move past design labels by rating bodies of evidence down for bias, imprecision, and inconsistency or up for large consistent effects — so any single pyramid is a simplification. There is also live methodological debate about how intention-to-treat analyses should handle missing data, and how far per-protocol estimates can be rescued with modern statistical methods.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u2-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt501-u2-p1', kind: 'single', cognitive: 'application',
          prompt: 'A client asks: “Does fasted cardio burn more fat?” Before any study can answer that, what has to be pinned down?',
          options: [
            { id: 'a', text: 'Who is training, compared with what alternative, and which fat-loss outcome over what time frame', correct: true, rationale: 'A question needs a population, a comparator, and a defined outcome before evidence can address it.' },
            { id: 'b', text: 'Which expert made the claim first', correct: false, rationale: 'The claim’s origin story doesn’t make the question answerable.' },
            { id: 'c', text: 'Nothing — a good study answers the question exactly as asked', correct: false, rationale: 'As asked, the question has no population, comparator, or outcome; no study can answer it.' },
          ] },
        { id: 'apt501-u2-p2', kind: 'single', cognitive: 'recall',
          prompt: 'Which study design gives the most direct evidence that an intervention causes an outcome?',
          options: [
            { id: 'a', text: 'A cross-sectional survey', correct: false, rationale: 'A snapshot can show association, never direction.' },
            { id: 'b', text: 'A randomized controlled trial', correct: true, rationale: 'Random assignment is what licenses causal language.' },
            { id: 'c', text: 'A case report', correct: false, rationale: 'One described case raises questions; it cannot answer them.' },
          ] },
        { id: 'apt501-u2-p3', kind: 'single', cognitive: 'analysis',
          prompt: 'A strength study enrolled twelve resistance-trained college men. Your client is 55 and new to lifting. What is the FIRST question before applying its findings to her?',
          options: [
            { id: 'a', text: 'How similar the study’s participants are to her — whether the result travels', correct: true, rationale: 'External validity: an internally sound result may still not transfer across age, sex, and training history.' },
            { id: 'b', text: 'Whether the journal it appeared in is prestigious', correct: false, rationale: 'Journal prestige is a weak proxy; the population gap is the live issue.' },
            { id: 'c', text: 'Whether the study was published in the last twelve months', correct: false, rationale: 'Recency doesn’t close the gap between trained young men and an untrained 55-year-old.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt501-u2-outcomes',
      outcomes: [
        { level: 'recall', text: 'Name the four parts of a PICO question and state what each major study design can and cannot conclude.' },
        { level: 'application', text: 'Rewrite a client’s vague training question as a PICO question, and identify a study’s design from its methods description.' },
        { level: 'analysis', text: 'Appraise an exercise trial’s randomization, blinding, control-group choice, and analysis method, and explain how each affects what the results may claim.' },
        { level: 'synthesis', text: 'Weigh a study’s internal and external validity against a specific client’s situation and communicate an honest, calibrated recommendation.' },
      ],
    },

    // 3 ── core instruction (five concept blocks) ────────────────────────────
    {
      type: 'concept', id: 'apt501-u2-c1', heading: 'From a vague question to an answerable one',
      body:
        'A client racks her dumbbells and asks: “Do those blood-flow restriction cuffs actually work?” It sounds like a question science could settle, but as asked, no study on earth can answer it. Work for whom — her, a 24-year-old rugby winger, a woman three weeks out of knee surgery? Compared to what — doing nothing, normal light training, heavy training? And “work” at what — building muscle, building strength, easing pain? Until those blanks are filled in, any answer is an opinion wearing a lab coat.\n\nResearchers fill the blanks with a four-part template called PICO: Population, Intervention, Comparator, Outcome. Rebuilt as a PICO question, the cuff question might become: in adults who can’t yet tolerate heavy loads — early-stage knee rehab, say (population) — does low-load resistance training with blood-flow restriction (intervention), compared with the same low-load training without cuffs (comparator), produce greater gains in quadriceps size and strength over eight weeks (outcome)? Notice what just happened. A vibe became a question a study could be designed to answer — and, just as usefully, one you can hold existing studies against to see whether they answer it or merely orbit it.\n\nThe comparator is the element beginners skip and experienced readers check first. “BFR training increased strength” is true against almost any comparator, because training beats not training. The questions worth asking are comparative, and they are different questions: does adding cuffs beat the same light training alone (the rehab question), and does cuff training approach what heavy training delivers (the healthy-client question)? Change the comparator and you change the study, the answer, and what the answer is for. So when any claim sounds impressive, your first move is always the same three words: compared to what?\n\nThe outcome deserves equal suspicion, because muscle size, maximal strength, pain, and day-to-day function are separate outcomes that don’t have to move together. A protocol can grow muscle without much strength change, or ease pain without growing anything. Deciding which outcome your client actually cares about — before you search — is half the work. The habit to build is small and repays daily: when a question matters, write the PICO down. It takes ninety seconds, turns aimless scrolling into a targeted look, and tells you instantly whether the study a colleague waves at you is about your question or just near it.',
    },
    {
      type: 'concept', id: 'apt501-u2-c2', heading: 'Watching without intervening: the observational designs',
      body:
        'Most of what we know about training and health doesn’t come from experiments. It comes from watching people who already do things — run, lift, sit, sleep badly — and counting what happens to them. These observational designs differ mainly in when they look and how people get into the study, and those two details decide exactly what each design is allowed to conclude.\n\nThe humblest is the case report: a careful description of one person. A paper describes a single CrossFit athlete who developed rhabdomyolysis after a competition workout — symptoms, labs, treatment, recovery. One case can’t tell you how often this happens or whether the workout caused it; for all you know, ten thousand athletes did the same workout uneventfully that weekend. What a case report does is raise a hand. It says: this can happen, someone should look properly. Case reports generate questions; they never answer them.\n\nA cross-sectional study measures everything at once — a snapshot. Survey five hundred gym members this week on sitting time and low-back pain and you may find the two travel together. What you cannot find in a snapshot is direction: did sitting lead to pain, did pain lead to sitting, or does a third factor — a desk job, low fitness, age — drive both? Cross-sectional studies are the right tool for “how common is this?” and a treacherous one for “what causes this?”, and most of the correlational headlines that reach your clients come from exactly this design.\n\nA case-control study starts from the outcome and walks backwards. Researchers find eighty masters runners with Achilles tendinopathy and eighty similar runners without, then compare their pasts — training history, footwear, previous injuries. It’s an efficient way to study outcomes too rare or too slow to wait for. The price is paid in bias: people with a problem ransack their memories for explanations in a way healthy controls don’t (recall bias), and choosing the wrong control group quietly rigs the comparison before any data arrive.\n\nA cohort study runs time forwards: define a group before anything has happened — two thousand military recruits at basic-training entry — measure them, then follow them and count outcomes. Because exposure was recorded before the outcome existed, the time order is finally solid, and you can calculate real incidence and compare risks. (A retrospective cohort does the same using records that already exist; what makes a cohort is the forward logic, not when the filing happened.) What no observational design escapes is confounding. Nobody assigned anyone to run eighty kilometres a week, and the people who choose to differ in fitness, sleep, diet, and a hundred unmeasured ways. That is why every design in this family earns association sentences — “was associated with” — and none of them, alone, earns “caused”.',
    },
    {
      type: 'concept', id: 'apt501-u2-c3', heading: 'The randomized controlled trial, taken apart',
      body:
        'The RCT changes the one thing no observational design can: who decides exposure. The researcher assigns participants to groups by chance, and the coin flip’s power is its ignorance. It doesn’t know anyone’s age, genetics, motivation, pain tolerance, or sleep habits — so, on average, it deals all of those evenly into both groups, including the confounders nobody has thought of yet. That last clause is the whole magic: statistical adjustment can only balance what you measured, while randomization balances what you didn’t. Two caveats keep the claim honest. The balance is a property of the long run, so a small trial can still be dealt an unlucky hand. And randomization protects the starting comparison only — what happens afterwards (dropouts, group-swapping, half-followed programs) can unbalance it again.\n\nBlinding exists because knowing your group changes things: participants try harder or report more improvement, coaches nudge, assessors round measurements in the hoped-for direction. Drug trials hide the assignment behind identical pills. Exercise has no identical pill — a participant knows whether she spent eight weeks squatting, and so does her coach, and no design cleverness fixes that. What can still be blinded is nearly everything else: the assessor measuring muscle by ultrasound, the statistician running the analysis, sometimes the participants’ beliefs about which arm is the “real” treatment (by comparing two credible-sounding programs). So read exercise trials with a sliding scale rather than a checkbox. An unblinded participant self-rating her pain is the design’s soft spot; an unblinded participant whose bone density is measured by a technician who doesn’t know her group is barely a problem at all. Objective outcomes and blinded assessors buy back most of what unblindable participants cost.\n\nThe control group is a decision, and it decides which question the trial answers. Against a no-exercise waitlist, almost any program “works” — you’ve shown it beats nothing, plus all the attention, structure, and expectation that came along. Against an active comparator — the training people would otherwise do — you learn whether the new thing adds anything, which is usually what you and your client actually need to know. Two trials of the same intervention can both be honest and report very different effect sizes purely because they chose different comparators. When a finding seems too good, check what the intervention beat before you ask anything else.\n\nThen people start dropping out, and they don’t drop out at random — the poor responders, the injured, and the bored leave first. Intention-to-treat analysis keeps everyone in the group they were randomized to, whether or not they complied, because that is the only comparison randomization still protects; it answers the question your practice actually faces: what happens when people are offered this program? Per-protocol analysis keeps only the completers and answers a different question — what happens to people who do the whole program? — but its answer is biased, because completers selected themselves. A trial that reports only a per-protocol result after heavy dropout has quietly turned back into an observational study while keeping the RCT badge. Well-reported trials (the CONSORT standard) show the flow of every participant from enrolment to analysis and lead with the intention-to-treat result; when a paper hides that flow, ask why.',
    },
    {
      type: 'concept', id: 'apt501-u2-c4', heading: 'The pyramid is a heuristic, not a law',
      body:
        'Stack the designs by how many ways they can fool you and you get the famous pyramid: case reports at the base, then cross-sectional, case-control, cohort, RCTs, and on top systematic reviews — studies of studies, which gather every trial on a question using explicit, reproducible methods and, when the trials are similar enough, pool them statistically as a meta-analysis. As a first sorting instinct the pyramid is genuinely useful: each level up removes a way of being wrong, and a claim resting only on the bottom layers deserves more suspicion than one resting on the top.\n\nBut the levels rank designs, and you never read a design — you read a study, and studies are executed well or badly. A systematic review of five sloppy trials is a tidy summary of sloppiness. Set a forty-person RCT with unblinded self-rated outcomes, forty percent dropout, and a per-protocol-only analysis against a ten-thousand-person cohort with objective outcomes, careful adjustment, and near-complete follow-up: the pyramid says trust the trial; a competent reader trusts the cohort. This isn’t a rebel position — it is how modern evidence grading works. GRADE, the framework most major guidelines now use, treats study design as nothing more than a starting score, then moves the rating down for bias, imprecision, and inconsistency, or up for very large and consistent effects. The label starts the conversation; execution finishes it.\n\nThe other thing the pyramid doesn’t show is the trade wedged inside every study, between internal validity — did the design nail cause and effect in these participants? — and external validity — does the answer travel to the person in front of you? A tightly supervised lab trial on resistance-trained 22-year-old men, controlled diets and all, may be nearly airtight internally. Your client is a 55-year-old woman with a desk job, a hip that clicks, and three available training hours a week. The tight control that makes the trial’s answer trustworthy is exactly what makes it hard to carry across that gap, while a messier pragmatic trial in ordinary gym-goers trades some causal certainty for answers that already live in your world. Neither is better; they answer different halves of your problem.\n\nSo use the pyramid the way experienced readers do: as a first sort, followed by two questions the pyramid cannot answer. How well was this particular study run? And how far is it from my particular client? Those two questions — not the level — decide how much weight a study gets in your decision.',
    },
    {
      type: 'concept', id: 'apt501-u2-c5', heading: 'Why “a study proved X” is usually the wrong sentence',
      body:
        '“Proved” is doing dishonest work in that sentence. A study doesn’t weigh truth; it takes a sample — a few dozen people, usually, in exercise science — and produces an estimate. Run the identical trial again with a different few dozen and you will get a different number, occasionally a differently signed one, through nothing but the luck of who enrolled. That scatter is called sampling variation and it never goes away: large samples shrink it, nothing removes it. One study is one draw from a noisy process, and treating one draw as a verdict is like judging a lifter from a single rep, on video, filmed from across the street.\n\nThe machinery around single studies leans optimistic, too. “Statistically significant” means, roughly, that the data would be surprising if there were truly no effect — it is not the probability that the finding is real, and in a field full of small studies the conventional threshold hands out false alarms generously. Then publication filters the record: journals and authors favour positive results, so trials that found nothing sit in file drawers while the lucky draws get press releases. What reaches your feed has been selected for excitement twice — once by chance, once by the market.\n\nWhat earns confidence is never one study; it is convergence. The same answer appearing across replications; across designs, with trials agreeing with cohorts agreeing with mechanism; across populations; with larger doses producing larger effects. That is why the honest scale runs from “a study suggests” through “evidence is accumulating” to “evidence consistently shows” — and why nothing on the scale says “proved”. Certainty in this trade is graded and provisional, always waiting for the next study. That is not a weakness of science; it is the mechanism doing its job.\n\nThis lands directly on how you talk. Professional marketing promises process, not outcomes; the same discipline applies to evidence. “A study proved this works” is the verbal cousin of “guaranteed results” — it borrows certainty you don’t have and spends your credibility on it. The sentence that replaces it is longer and better: “The best evidence so far suggests X, here’s how strong it is, and here’s what it means for you.” Clients keep trusting the trainer whose confidence tracks the evidence — especially on the day the evidence shifts and you’re the one who tells them first.',
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt501-u2-visual',
      title: 'The evidence pyramid — and why it bends',
      diagramId: 'evidence-hierarchy',
      caption: 'The classic hierarchy, annotated the way an experienced reader actually uses it: a starting point, with execution and applicability judged separately.',
      callouts: [
        { id: 'apt501-u2-v1', label: '1', text: 'The top is not automatically true: a systematic review of weak trials inherits every one of their weaknesses, just more tidily.' },
        { id: 'apt501-u2-v2', label: '2', text: 'The dashed arrows are the point. The levels rank designs, but you read studies — and execution moves a study up or down past its label.' },
        { id: 'apt501-u2-v3', label: '3', text: 'Design determines what kind of sentence a study may say — “was associated with” versus “caused” — not whether you should believe it.' },
        { id: 'apt501-u2-v4', label: '4', text: 'Applicability sits outside the pyramid entirely: how close the study’s population is to your client is a judgment no hierarchy makes for you.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt501-u2-worked',
      title: 'Reading the study behind a friend’s headline',
      scenario:
        'A trainer friend messages you: “BFR is officially legit — a study PROVED you get the same growth as heavy lifting with baby weights. Putting all my older clients on cuffs this month.” Before you borrow the idea for your own 55-year-old client rehabbing a knee, you find the study he means and read it properly.',
      steps: [
        { id: 'apt501-u2-w1', title: 'Find the design before the findings',
          reasoning: 'The methods say participants were randomly assigned, so this is an RCT — the design that can support causal language. Twenty-four resistance-trained men in their twenties, eight weeks, low-load training with cuffs versus traditional heavy training. Establishing the design first tells you what kind of sentence the paper is allowed to end with.' },
        { id: 'apt501-u2-w2', title: 'Check who was actually studied',
          reasoning: 'Trained young men. Your client is a 55-year-old woman a few months past knee surgery. Nothing about the trial is wrong — but the distance between its population and your client is now your problem, not the authors’. The study answers its own PICO question, not yours.' },
        { id: 'apt501-u2-w3', title: 'Ask: compared to what?',
          reasoning: 'The comparator is heavy training, so the claim on offer is “similar muscle growth at much lower loads” — not “better than normal light training”, which would be a different comparator answering a different, rehab-flavoured question. And in this trial, muscle size grew similarly in both groups while the heavy group gained more maximal strength — unsurprising, since strength is specific to the loads you practise. “Same growth” made the headline; “less strength gain” lived in the same table.' },
        { id: 'apt501-u2-w4', title: 'Look at how the outcome was measured',
          reasoning: 'Muscle size came from ultrasound, read by an assessor who didn’t know group assignment. That matters: the participants obviously knew whether they lifted heavy, but a blinded technician measuring an objective outcome closes the main door that unblindable exercise trials leave open.' },
        { id: 'apt501-u2-w5', title: 'Follow every participant to the end',
          reasoning: 'Twenty-four started; twenty-one finished; the authors analysed everyone as randomized. In a trial this small, that choice — versus quietly analysing completers only — can move the result, so you check it every time. Three dropouts handled openly is normal science; three dropouts handled silently is a red flag.' },
        { id: 'apt501-u2-w6', title: 'Say only what you are licensed to say',
          reasoning: 'Verdict: in trained young men, low-load BFR produced hypertrophy comparable to heavy training over eight weeks, with smaller strength gains. Genuinely useful — it makes BFR plausible for people who can’t load heavily. For your client it is a reason to look next for BFR trials in older and post-surgical populations, and to talk with her physiotherapist before any cuff goes near that leg. It is not a licence to declare anything “proven”.' },
      ],
      takeaway:
        'Your friend read a headline; you read a study. Same paper, different conclusions — his was “proved, for everyone”, yours was “demonstrated, in whom, compared to what, and here’s what to check next”. That gap is the entire skill.',
    },

    // 6 ── interactive lab (classification) ──────────────────────────────────
    {
      type: 'classification', id: 'apt501-u2-lab',
      title: 'Lab: name that design',
      instructions:
        'Each item describes a study’s methods. File it under the design being described. The clue is always in how people got into the study and when the data were collected — never in the topic.',
      buckets: [
        { id: 'apt501-u2-b-report', label: 'Case report' },
        { id: 'apt501-u2-b-cross', label: 'Cross-sectional' },
        { id: 'apt501-u2-b-cc', label: 'Case-control' },
        { id: 'apt501-u2-b-cohort', label: 'Cohort' },
        { id: 'apt501-u2-b-rct', label: 'Randomized controlled trial' },
      ],
      items: [
        { id: 'apt501-u2-l1', text: 'A paper describes one CrossFit athlete who developed rhabdomyolysis after a competition workout, with her labs, treatment, and recovery timeline',
          bucketId: 'apt501-u2-b-report', rationale: 'One person, described in depth after the fact. It can alert the field that something can happen; it cannot say how often or why.' },
        { id: 'apt501-u2-l2', text: 'Five hundred gym members complete a one-time survey of weekly sitting hours and current low-back pain; the two are correlated',
          bucketId: 'apt501-u2-b-cross', rationale: 'Everything measured once, at the same moment — a snapshot. It shows the two travel together; it cannot say which came first or whether a third factor drives both.' },
        { id: 'apt501-u2-l3', text: 'Researchers recruit eighty masters runners with Achilles tendinopathy and eighty without, then compare their training diaries from the previous five years',
          bucketId: 'apt501-u2-b-cc', rationale: 'Participants were selected by outcome status, then researchers looked backwards at exposure — case-control logic. Efficient for slow-developing problems; vulnerable to recall and selection bias.' },
        { id: 'apt501-u2-l4', text: 'Two thousand new military recruits are tested at entry, then followed for two years to see whether baseline movement-screen scores predict later injury',
          bucketId: 'apt501-u2-b-cohort', rationale: 'A defined group measured before anything happened, then followed forwards. Time order is established; confounding is not eliminated.' },
        { id: 'apt501-u2-l5', text: 'Sixty postmenopausal women are randomly assigned to heavy resistance training or a stretching program; bone density is measured at 0 and 12 months by a technician blinded to group',
          bucketId: 'apt501-u2-b-rct', rationale: 'The giveaway is “randomly assigned”: the researcher, not the participant, decides exposure by chance. The blinded technician adds assessor blinding on an objective outcome.' },
        { id: 'apt501-u2-l6', text: 'A national fitness survey measures VO2max and depression symptoms in the same week and reports that fitter people are less depressed',
          bucketId: 'apt501-u2-b-cross', rationale: 'Both variables captured in a single window — a snapshot, however large. Fitter people may be less depressed, less depressed people may train more, or both; the design cannot tell.' },
        { id: 'apt501-u2-l7', text: 'Using an injury registry, researchers trace every powerlifter who competed between 2010 and 2020 from their first meet onward, comparing injury rates by weight class',
          bucketId: 'apt501-u2-b-cohort', rationale: 'The records already exist, but entry is defined by exposure and outcomes are traced forwards through time — a retrospective cohort is still a cohort.' },
        { id: 'apt501-u2-l8', text: 'After several athletes on one team develop stress fractures, investigators compare them with unaffected teammates on menstrual history and energy intake',
          bucketId: 'apt501-u2-b-cc', rationale: 'Selection starts from the outcome — fractured versus not — then looks backwards at exposures. Case-control logic on a small scale.' },
      ],
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt501-u2-case',
      title: 'Case: the headline that walked into the gym',
      brief:
        'Priya, 58, has trained with you for a year. She arrives holding her phone: “Study proves lifting weights reverses ageing in over-50s!” She wants to scrap her program and copy whatever the study did. Every decision is scored against best practice.',
      startNodeId: 'apt501-u2-n1',
      nodes: [
        {
          id: 'apt501-u2-n1',
          situation:
            'Priya hands you her phone. The headline reads “Study proves lifting weights reverses ageing.” She says: “It’s proven — shouldn’t we just do what they did?”',
          choices: [
            { id: 'apt501-u2-n1a', text: '“Great find — let’s pull up the actual study and see what it did before we change anything.”', to: 'apt501-u2-n2',
              quality: 'best', feedback: 'Exactly right. You treated her curiosity as an asset and moved the conversation from a headline to a source.' },
            { id: 'apt501-u2-n1b', text: '“Headlines like that are clickbait. Trust the program.”', to: 'apt501-u2-n3',
              quality: 'poor', feedback: 'The headline probably is overcooked — but dismissing evidence without looking is the same error as swallowing it whole, and it teaches her that bringing you science is unwelcome.' },
            { id: 'apt501-u2-n1c', text: '“If it’s proven, it’s proven — we’ll switch you to the study’s routine this week.”', to: 'apt501-u2-n4',
              quality: 'poor', feedback: 'You just outsourced your professional judgment to a headline. You don’t yet know the design, the population, or what “reverses ageing” even measured.' },
          ],
        },
        {
          id: 'apt501-u2-n2',
          situation:
            'You find the paper together. It is a prospective cohort: four thousand adults over 50, followed for ten years; those who did resistance training at least twice a week kept more muscle mass and physical function. Nobody was assigned to anything. Priya asks: “So… is it proven?”',
          choices: [
            { id: 'apt501-u2-n2a', text: 'Explain: “It shows lifters aged better — a real association. But people who choose to lift differ in lots of ways, so this design can’t prove cause on its own. It does fit the trials we have, which point the same way.”', to: 'apt501-u2-n4',
              quality: 'best', feedback: 'Calibrated reading: you named what a cohort can claim, named its limit, and placed it against the wider evidence instead of judging it alone.' },
            { id: 'apt501-u2-n2b', text: '“No. It’s not a randomized trial, so it’s basically worthless.”', to: 'apt501-u2-n4',
              quality: 'poor', feedback: 'Overcorrection. A large, careful cohort is real evidence — the hierarchy is a starting point, not a shredder. “Worthless until RCT” would throw out most of what we know about long-term training and health.' },
            { id: 'apt501-u2-n2c', text: '“Proven enough for me — big study, long follow-up.”', to: 'apt501-u2-n4',
              quality: 'acceptable', feedback: 'Better than dismissal, but “proven” is still the wrong word: size and duration tighten the estimate of the association; they do nothing about confounding.' },
          ],
        },
        {
          id: 'apt501-u2-n3',
          situation:
            'Priya puts her phone away, a little deflated. “Fine. I guess the science stuff isn’t really your thing.”',
          choices: [
            { id: 'apt501-u2-n3a', text: '“That came out wrong — the science stuff is exactly my thing. Let’s pull the study up right now and read it together.”', to: 'apt501-u2-n2',
              quality: 'acceptable', feedback: 'Good recovery. The brush-off cost you a little trust; reading the source together is how you earn it back.' },
            { id: 'apt501-u2-n3b', text: '“Studies contradict each other every week. Twenty years on gym floors beats a journal.”', to: null,
              quality: 'poor', feedback: 'Experience is valuable and biased — you remember your wins. A professional’s answer to imperfect evidence is better reading, not no reading. This ends with her trusting headlines more than she trusts you.' },
          ],
        },
        {
          id: 'apt501-u2-n4',
          situation:
            'Later, Priya asks the practical question: “So should I copy their exact routine? The study people trained twice a week — should I drop my third session?”',
          choices: [
            { id: 'apt501-u2-n4a', text: '“The evidence supports the ingredient — regular progressive resistance training — and your program already delivers it. Twice a week is what those people happened to do, not a tested ceiling. We keep tailoring the dose to you.”', to: null,
              quality: 'best', feedback: 'Exactly. Observational studies describe what people did, not what anyone should do. You kept the principle and individualized the dose.' },
            { id: 'apt501-u2-n4b', text: '“Yes — matching the study exactly is the safest bet.”', to: null,
              quality: 'poor', feedback: 'A cohort has no protocol to copy — nobody assigned twice-a-week. You would be imitating an average behaviour, not following tested instructions, and cutting a session she is thriving on to do it.' },
            { id: 'apt501-u2-n4c', text: '“Studies describe groups, not individuals — we never change anything based on papers.”', to: null,
              quality: 'acceptable', feedback: 'Right instinct about not copying blindly, wrong rule: group evidence is exactly what should inform — not dictate — individual programming. “Never change anything” is how a practice fossilizes.' },
          ],
        },
      ],
    },

    // 8 ── error identification ──────────────────────────────────────────────
    {
      type: 'errorId', id: 'apt501-u2-errorid',
      title: 'Audit this ad for “trial-proven” cuffs',
      brief:
        'Flag every claim that misuses evidence. Leave legitimate statements unflagged.',
      document:
        '“TRIAL-PROVEN MUSCLE. In a groundbreaking clinical study, athletes using PowerFlow occlusion cuffs gained up to 3× more muscle. Nine elite rugby players trained with the cuffs for just 14 days — with zero dropouts — and every single one improved, so the results speak for themselves. A control group wasn’t needed: the gains were that obvious. The study was run in a university laboratory, and in our follow-up survey 92% of PowerFlow owners said they’d recommend the cuffs to a friend. Proven safe and effective for everyone from teen athletes to seniors recovering from surgery.”',
      findings: [
        { id: 'apt501-u2-e1', text: '“gained up to 3× more muscle”', isError: true,
          rationale: 'Three times more than what? No comparator is named, and “up to” reports the single best responder as though it were the typical result.' },
        { id: 'apt501-u2-e2', text: '“Nine elite rugby players trained with the cuffs for just 14 days”', isError: true,
          rationale: 'Two weeks is too short for meaningful, measurable muscle growth — early changes are mostly neural adaptation and fluid shifts — and nine elite athletes say little about the general customer.' },
        { id: 'apt501-u2-e3', text: '“every single one improved, so the results speak for themselves”', isError: true,
          rationale: 'With no comparison group, universal improvement is exactly what training, test familiarity, and regression to the mean produce on their own. Results never speak for themselves; comparators speak for them.' },
        { id: 'apt501-u2-e4', text: '“A control group wasn’t needed: the gains were that obvious”', isError: true,
          rationale: 'Backwards. The control group is how you learn how much would have happened anyway — and the more impressive the raw gains, the more you need it.' },
        { id: 'apt501-u2-e5', text: '“92% of PowerFlow owners said they’d recommend the cuffs”', isError: true,
          rationale: 'A satisfaction survey of people who bought the product is testimony, not efficacy — and the unsatisfied rarely stick around to be surveyed.' },
        { id: 'apt501-u2-e6', text: '“The study was run in a university laboratory”', isError: false,
          rationale: 'Where a study is run is a neutral fact. A lab setting neither validates nor invalidates anything — the design does that.' },
        { id: 'apt501-u2-e7', text: '“Proven safe and effective for everyone from teen athletes to seniors recovering from surgery”', isError: true,
          rationale: 'The study, such as it is, involved nine elite athletes. Stretching “proven safe” to post-surgical seniors — never studied — is the ad’s most dangerous sentence.' },
        { id: 'apt501-u2-e8', text: '“with zero dropouts”', isError: false,
          rationale: 'Reporting retention honestly is legitimate, and over 14 days with sponsored athletes it is unremarkable. The problem is the conclusion built around it, not the fact itself.' },
      ],
    },

    // 9 ── active-recall set ─────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt501-u2-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'apt501-u2-r1', front: 'What do the four letters of PICO stand for?',
          back: 'Population, Intervention, Comparator, Outcome — the four blanks a vague question must fill before evidence can answer it.' },
        { id: 'apt501-u2-r2', front: 'What is the built-in limit of a cross-sectional study?',
          back: 'Everything is measured at once, so it can show association but never direction — no way to tell what came first, or whether a third factor drives both.' },
        { id: 'apt501-u2-r3', front: 'Case-control vs cohort: which way does each look through time?',
          back: 'Case-control starts from the outcome and looks backwards at exposures; a cohort starts from exposure and follows forwards to outcomes. Cohorts fix the time order; case-controls trade it for efficiency.' },
        { id: 'apt501-u2-r4', front: 'What does randomization actually buy you?',
          back: 'On average, it balances both known and unknown confounders across groups — the unknowns being the part no statistical adjustment can reach. Small trials can still be dealt an unlucky hand.' },
        { id: 'apt501-u2-r5', front: 'Who can and cannot be blinded in a typical exercise trial?',
          back: 'Participants and coaches usually cannot — you know if you squatted. Outcome assessors and analysts can, and objective outcomes (DXA, ultrasound, timed tests) blunt what participant unblinding costs.' },
        { id: 'apt501-u2-r6', front: 'Intention-to-treat vs per-protocol — what question does each answer?',
          back: 'ITT analyses everyone as randomized: “what happens when people are offered this program?” — the comparison randomization still protects. Per-protocol keeps completers only: “what if they do all of it?” — at the price of self-selection bias.' },
        { id: 'apt501-u2-r7', front: 'When can a cohort study outweigh an RCT?',
          back: 'When execution beats the label: a large, careful cohort with objective outcomes and near-complete follow-up outweighs a tiny, unblinded trial with heavy dropout analysed per-protocol only. Design is a starting score, not a verdict.' },
        { id: 'apt501-u2-r8', front: 'Internal vs external validity — the trade-off in one line?',
          back: 'Internal validity: did the study nail cause and effect in its participants? External validity: does the answer travel to your client? Tight control raises the first and usually costs the second.' },
        { id: 'apt501-u2-r9', front: 'What sentence replaces “a study proved X” with a client?',
          back: '“The best evidence so far suggests X — here’s how strong it is, and here’s what it means for you.” Confidence should track the evidence, not outrun it.' },
      ],
    },

    // 10 ── unit quiz ────────────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u2-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'apt501-u2-q1', kind: 'single', cognitive: 'recall',
          prompt: 'What are the four parts of a PICO question?',
          options: [
            { id: 'a', text: 'Population, Intervention, Comparator, Outcome', correct: true },
            { id: 'b', text: 'Protocol, Intensity, Compliance, Objective', correct: false, rationale: 'Training-plan words, not the anatomy of an answerable question.' },
            { id: 'c', text: 'Population, Inference, Correlation, Odds', correct: false, rationale: 'A mix of statistics vocabulary; only the population belongs.' },
          ] },
        { id: 'apt501-u2-q2', kind: 'single', cognitive: 'application',
          prompt: 'Your 60-year-old client asks: “Should I take creatine?” Which rewrite turns that into an answerable question?',
          explanation: 'An answerable question names who, what, against what, and measured how over what period. The others leave every blank open.',
          options: [
            { id: 'a', text: '“In adults over 55 doing resistance training, does creatine plus training, compared with training plus placebo, improve lean mass and leg strength over 12 weeks?”', correct: true, rationale: 'Population, intervention, comparator, and outcomes are all specified — a study can answer this.' },
            { id: 'b', text: '“Is creatine good or bad?”', correct: false, rationale: 'No population, no comparator, no outcome — as unanswerable as the original.' },
            { id: 'c', text: '“Does creatine work if you train hard enough?”', correct: false, rationale: '“Work” is still undefined and the comparator is missing; effort doesn’t make the question answerable.' },
          ] },
        { id: 'apt501-u2-q3', kind: 'single', cognitive: 'application',
          prompt: 'Researchers identify sixty masters runners with Achilles tendinopathy and sixty without, then compare their past five years of training. What design is this?',
          options: [
            { id: 'a', text: 'A cohort study', correct: false, rationale: 'A cohort starts from exposure and follows forwards; here selection started from the outcome.' },
            { id: 'b', text: 'A case-control study', correct: true, rationale: 'Selected by outcome status, then looking backwards at exposure — the defining case-control move.' },
            { id: 'c', text: 'A cross-sectional study', correct: false, rationale: 'Not a single-moment snapshot: participants were chosen by outcome and their histories examined.' },
          ] },
        { id: 'apt501-u2-q4', kind: 'single', cognitive: 'analysis',
          prompt: 'What is the real reason randomization earns causal language?',
          explanation: 'Adjustment can only handle confounders someone measured. Chance assignment balances the unmeasured ones too — on average, with small trials still at the mercy of luck.',
          options: [
            { id: 'a', text: 'It spreads known AND unknown confounders evenly across groups, on average, so outcome differences can be attributed to the intervention', correct: true },
            { id: 'b', text: 'It guarantees the two groups are identical', correct: false, rationale: 'It guarantees the process, not any single result — a small trial can still be dealt unlucky groups.' },
            { id: 'c', text: 'It makes the sample representative of the general population', correct: false, rationale: 'That is random sampling, a different thing. Randomization balances groups internally and says nothing about who the results generalize to.' },
          ] },
        { id: 'apt501-u2-q5', kind: 'multi', cognitive: 'analysis',
          prompt: 'A balance-training trial reports large improvements versus a no-exercise waitlist control. Which cautions are warranted? (Select all that apply.)',
          explanation: 'A waitlist comparator answers “better than nothing”, and part of that gap is attention and expectation. Missing blinding calls for caution, not automatic dismissal.',
          options: [
            { id: 'a', text: 'Part of the gap may reflect attention and expectation rather than balance training itself', correct: true },
            { id: 'b', text: 'Beating a waitlist shows the program beats nothing — not that it beats the training people would otherwise do', correct: true },
            { id: 'c', text: 'Without blinding, the result must be a placebo effect and can be ignored', correct: false, rationale: 'Overcorrection: unblinding warrants caution, especially on subjective outcomes — it doesn’t erase the finding.' },
            { id: 'd', text: 'If the trial’s sample differs a lot from your client, carrying the numbers straight across is a stretch', correct: true },
          ] },
        { id: 'apt501-u2-q6', kind: 'single', cognitive: 'analysis',
          prompt: 'A 40-person unblinded RCT with 40% dropout, analysed per-protocol only, contradicts a large, careful cohort with objective outcomes. What does good practice say?',
          options: [
            { id: 'a', text: 'The RCT wins automatically — it sits higher on the pyramid', correct: false, rationale: 'The pyramid ranks designs; appraisal ranks studies. This trial has surrendered most of what made it a trial.' },
            { id: 'b', text: 'Judge each on execution: the cohort’s evidence can outweigh a badly run trial', correct: true, rationale: 'Design is a starting score that execution moves — the reasoning GRADE formalizes.' },
            { id: 'c', text: 'Neither counts until a systematic review exists', correct: false, rationale: 'Reviews are built from studies like these; someone still has to read them — and a review would weigh them the same way.' },
          ] },
        { id: 'apt501-u2-q7', kind: 'single', cognitive: 'synthesis',
          prompt: 'A client asks whether the new tempo-training study she saw means she should switch programs. Which reply best reflects evidence-based practice?',
          explanation: 'Calibrated language, the wider evidence, applicability to her, and a shared decision — that is the whole unit in one sentence.',
          options: [
            { id: 'a', text: '“The study proved tempo training is superior — we switch tonight.”', correct: false, rationale: '“Proved” from one study, and the client’s own context never entered the decision.' },
            { id: 'b', text: '“One trial, in people quite different from you, suggests a benefit. Here’s how it fits the rest of the evidence and your goals — let’s decide together whether anything should change.”', correct: true, rationale: 'Honest strength-of-evidence, applicability check, and a shared decision.' },
            { id: 'c', text: '“Studies flip-flop constantly. We ignore them and stick with what I’ve seen work.”', correct: false, rationale: 'Experience-only practice is its own bias — you remember your wins. The answer to noisy evidence is better reading, not none.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt501-u2-teach',
      title: 'Teach it back',
      prompt:
        'Your client Dana read that “a study proved lifting weights is dangerous for people over 50” and wants to cancel her strength training. In plain, warm language, explain how you read studies — and why one headline doesn’t settle it — without dismissing science or her worry.',
      modelAnswer:
        'I’m really glad you brought this to me instead of just cancelling — that’s exactly what I’d want you to do. Here’s how I read something like this. First, I find the actual study, because headlines are written to be clicked, not to be right. Then I ask three questions. Who was studied — people like you, or somebody very different? Compared to what — lifting versus not lifting, or something else entirely? And what was actually measured — injuries in a supervised program like ours, or something that has nothing to do with what we do? One study is one estimate, and single studies swing around; what I trust is the pile of evidence. On strength training for people over 50, that pile is unusually consistent and points the other way — done gradually and with good technique, it’s one of the best-supported things you can do for your bones, your muscle, and staying independent, which is why the major health guidelines recommend it at every age. So here’s my offer: I’ll find the study behind that headline and we’ll look at it together next session. If it turns up something genuinely new, I’ll be the first to change what we do. Until then, your program stays exactly as careful as it’s always been.',
      rubric: [
        { id: 'apt501-u2-t1', text: 'Explains that a headline and a study are different things, and that one study is an estimate rather than proof — without jargon' },
        { id: 'apt501-u2-t2', text: 'Uses the three plain appraisal questions: who was studied, compared with what, and what outcome was measured' },
        { id: 'apt501-u2-t3', text: 'Places the single study against the wider, consistent body of evidence instead of dismissing either' },
        { id: 'apt501-u2-t4', text: 'Respects the client’s concern, keeps the decision shared, and commits to a concrete next step' },
      ],
    },

    // 12 ── cumulative review ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u2-cumulative', role: 'cumulative', title: 'Pulling it together',
      questions: [
        { id: 'apt501-u2-cu1', kind: 'single', cognitive: 'application',
          prompt: 'A colleague’s ad reads: “Science has proven my 6-week protocol doubles fat loss — guaranteed.” What makes this wrong?',
          explanation: 'Outcome guarantees misrepresent what any professional controls and raise legal exposure, and “proven” claims a certainty that neither one study nor a body of evidence licenses.',
          options: [
            { id: 'a', text: 'It pairs an outcome guarantee — a marketing and negligence problem — with “proven”, a certainty no evidence licenses', correct: true },
            { id: 'b', text: 'Nothing, provided a study exists showing something similar', correct: false, rationale: 'A supporting study wouldn’t fix either the guarantee or the word “proven”.' },
            { id: 'c', text: 'Only that the specific study isn’t cited', correct: false, rationale: 'A citation would decorate the claim, not repair it.' },
          ] },
        { id: 'apt501-u2-cu2', kind: 'single', cognitive: 'analysis',
          prompt: 'Your 55-year-old client asks whether she should train exactly like the subjects in a rigorous trial of resistance-trained 22-year-old men. What is the best professional response?',
          options: [
            { id: 'a', text: 'Carry over the supported principle, then set the dose from her situation — the trial answered its question in its population, and bridging the gap is your professional judgment', correct: true, rationale: 'Internal validity is the trial’s job; external validity is yours.' },
            { id: 'b', text: 'Copy the protocol exactly — an RCT is the highest form of evidence', correct: false, rationale: 'Design quality doesn’t move a result across a population gap; that judgment is yours to make.' },
            { id: 'c', text: 'Ignore research on young men entirely when training older clients', correct: false, rationale: 'Overcorrection: principles often transfer even when specific numbers don’t.' },
          ] },
        { id: 'apt501-u2-cu3', kind: 'single', cognitive: 'synthesis',
          prompt: 'You are weighing blood-flow restriction training for a post-surgical client whose physiotherapist has cleared light loading. Which reasoning order reflects professional practice?',
          explanation: 'Scope and the collaborating professional’s guidance frame the decision; appraisal of the evidence fills it in; documentation closes it.',
          options: [
            { id: 'a', text: 'Confirm it sits inside your scope and the physio’s guidance, then appraise the evidence — design, population match, comparator — then decide with the client and document', correct: true },
            { id: 'b', text: 'Appraise the evidence first; if it is strong enough, scope and clearance questions answer themselves', correct: false, rationale: 'No quantity of evidence moves an action into your scope or overrides a clinician’s restrictions.' },
            { id: 'c', text: 'If a randomized trial supports BFR, proceed — the physio’s clearance already covered training generally', correct: false, rationale: 'A general clearance is not a clearance for a specific new modality; collaboration means asking, not assuming.' },
          ] },
      ],
    },
  ],
};
