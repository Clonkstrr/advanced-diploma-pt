import type { Unit } from '../../../types/content';

export const unit02: Unit = {
  id: 'apt501-u2',
  code: 'APT 501.1',
  title: 'Asking Answerable Questions and Study Designs',
  summary:
    'How to turn a vague training question into one that research can actually answer, and how to read each study design for what it can tell you about the client in front of you, and for what it cannot.',
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
      'Evidence-hierarchy diagrams differ between organizations. Modern appraisal frameworks, GRADE most of all, deliberately move past design labels: they rate a whole body of evidence down for bias, imprecision and inconsistency, or up for large and consistent effects. Any single pyramid is therefore a simplification. There is also live methodological debate about how intention-to-treat analyses should handle missing data, and about how far per-protocol estimates can be rescued with modern statistical methods.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u2-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt501-u2-p1', kind: 'single', cognitive: 'application',
          prompt: 'A client asks: “Does fasted cardio burn more fat?” Before any study can answer that, what has to be pinned down?',
          options: [
            { id: 'a', text: 'Who is training, compared with what alternative, and which fat-loss outcome over what time frame', correct: true, rationale: 'A question needs a population, a comparator and a defined outcome before evidence can address it.' },
            { id: 'b', text: 'Which expert made the claim first', correct: false, rationale: 'Where a claim came from does not make the question answerable.' },
            { id: 'c', text: 'Nothing. A good study answers the question exactly as asked', correct: false, rationale: 'As asked, the question has no population, no comparator and no outcome. No study can answer it.' },
          ] },
        { id: 'apt501-u2-p2', kind: 'single', cognitive: 'recall',
          prompt: 'Which study design gives the most direct evidence that an intervention causes an outcome?',
          options: [
            { id: 'a', text: 'A cross-sectional survey', correct: false, rationale: 'A snapshot can show association, never direction.' },
            { id: 'b', text: 'A randomized controlled trial', correct: true, rationale: 'Assignment by chance is what licenses causal language.' },
            { id: 'c', text: 'A case report', correct: false, rationale: 'One described case raises questions. It cannot answer them.' },
          ] },
        { id: 'apt501-u2-p3', kind: 'single', cognitive: 'analysis',
          prompt: 'A strength study enrolled twelve resistance-trained college men. Your client is 55 and new to lifting. What is the FIRST question before applying its findings to her?',
          options: [
            { id: 'a', text: 'How similar the study’s participants are to her, and so whether the result travels at all', correct: true, rationale: 'External validity. A result can be internally sound and still fail to transfer across age, sex and training history.' },
            { id: 'b', text: 'Whether the journal it appeared in is prestigious', correct: false, rationale: 'Journal prestige is a weak proxy. The population gap is the live issue.' },
            { id: 'c', text: 'Whether the study was published in the last twelve months', correct: false, rationale: 'Recency does not close the gap between trained young men and an untrained 55-year-old.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt501-u2-outcomes',
      outcomes: [
        { level: 'recall', text: 'Name the four parts of a PICO question and state what each major study design can and cannot conclude.' },
        { level: 'application', text: 'Rewrite a client’s vague training question as a PICO question, and identify a study’s design from its methods description.' },
        { level: 'analysis', text: 'Appraise an exercise trial’s assignment method, blinding, choice of control group and analysis method, and explain how each one changes what the results may claim.' },
        { level: 'synthesis', text: 'Weigh a study’s internal and external validity against a specific client’s situation, and communicate an honest, calibrated recommendation.' },
      ],
    },

    // 3 ── core instruction (five concept blocks, visuals interleaved) ───────
    {
      type: 'concept', id: 'apt501-u2-c1', heading: 'From a vague question to an answerable one',
      body:
        'A client racks her dumbbells and asks whether those blood-flow restriction cuffs actually work. It sounds like a question science could settle. As asked, no study on earth can answer it. Work for whom? For her, for a 24-year-old rugby winger, for a woman three weeks out of knee surgery? Compared with what? With doing nothing, with her normal light training, with heavy lifting? And work at what? Building muscle, building strength, easing pain? Until those blanks are filled in, any answer you give is an opinion in a lab coat.\n\n' +
        '## Four blanks to fill\n\n' +
        'Researchers fill those blanks with a four-part template called **PICO**. The letters stand for population, intervention, comparator and outcome. The **population** is who you mean. The intervention is the thing being done. The **comparator** is what it is measured against. The **outcome** is what gets counted, and when.\n\n' +
        'Rebuilt that way, the cuff question turns into something a study could be designed around. In adults who cannot yet tolerate heavy loads, early-stage knee rehabilitation for instance, does low-load resistance training with blood-flow restriction, compared with the same low-load training without cuffs, produce greater gains in quadriceps size and strength over eight weeks? Notice what just happened. A vague feeling became a question. You can now hold an existing paper up against it and see in ninety seconds whether it answers your question or merely orbits it.\n\n' +
        '## Compared with what?\n\n' +
        'The comparator is the part beginners skip and experienced readers check first. “Cuff training increased strength” is true against almost any comparator, because training beats not training. The useful questions are comparative, and swapping the comparator swaps the question underneath it. Does adding cuffs beat the same light training on its own? That is the rehabilitation question, and it is the one that tells you whether to buy cuffs. Does cuff training get close to what heavy lifting delivers? That is the healthy-client question, and it is a far harder bar to clear. Same population, same intervention, same outcome, and still two different studies with two different answers.\n\n' +
        '> Key idea: change the comparator and you change the study, the answer, and who the answer is for. Read the comparator before you read the effect size.\n\n' +
        '## The outcome is not one thing\n\n' +
        'The outcome deserves the same suspicion. Muscle size, maximal strength, pain and day-to-day function are four separate things and they do not have to move together. A protocol can grow muscle without shifting strength much, because strength is specific to the loads you practise. Another can ease pain while growing nothing. A third can improve a laboratory measure that nobody outside the laboratory cares about. Working out which outcome your client is actually after, before you go looking, is half the job.\n\n' +
        'Time belongs inside the outcome too. Eight weeks and eight months are different questions. A supplement that helps for a fortnight and then stops has produced a real two-week result and a useless one-year result, and a trial that stopped counting at week two would never know the difference.\n\n' +
        'So the habit is small and it repays you daily. When a question matters enough to look up, write the PICO down first. Four short lines on your phone. It turns aimless scrolling into a targeted search, and it tells you straight away whether the study a colleague is waving at you is about your client or about somebody else entirely.',
    },
    {
      type: 'visual', id: 'apt501-u2-visual-comparator',
      title: 'One question, three comparators',
      diagramId: 'design-comparator-swap',
      caption: 'The same population, the same intervention and the same outcome, set against three different comparators, so you can watch the question change under your hands.',
      callouts: [
        { id: 'apt501-u2-vc1', label: '1', text: 'Only one slot moves. Population, intervention and outcome are identical down all three rows, and the study still becomes a different study each time.' },
        { id: 'apt501-u2-vc2', label: '2', text: 'Against nothing at all, a win is close to guaranteed before anyone enrols, because training beats not training. This is the comparator that advertising prefers.' },
        { id: 'apt501-u2-vc3', label: '3', text: 'The two useful rows ask different things. Against the same light work you learn whether the cuffs add anything. Against heavy lifting you learn whether light loads can stand in for heavy ones.' },
        { id: 'apt501-u2-vc4', label: '4', text: 'A large effect against a weak comparator is a smaller finding than a modest effect against a strong one. That is why you read the comparator first.' },
      ],
    },
    {
      type: 'concept', id: 'apt501-u2-c2', heading: 'The four designs that only watch',
      body:
        'Most of what we know about training and health does not come from experiments. It comes from watching people who already do things, running, lifting, sitting, sleeping badly, and counting what happens to them. These observational designs differ in two details only: when the researchers look, and how people ended up in the study. Those two details decide exactly what each design is allowed to conclude.\n\n' +
        '## One person, one snapshot\n\n' +
        'The humblest is the **case report**, a careful description of one person. A paper describes a single CrossFit athlete who developed rhabdomyolysis after a competition workout: her symptoms, her blood results, her treatment, her recovery. One case cannot tell you how often this happens, or whether the workout caused it. Ten thousand athletes may have done the same session that weekend without trouble. What a case report does is raise a hand and say that this can happen and somebody should look properly. Case reports generate questions. They never answer them.\n\n' +
        'A **cross-sectional study** measures everything at one moment. Survey five hundred gym members this week on sitting hours and low-back pain and you may find the two travel together. What a snapshot cannot show you is direction. Did the sitting lead to the pain, did the pain lead to the sitting, or does something else, a desk job, low fitness, age, drive both at once? Cross-sectional work is the right tool for asking how common something is, and a treacherous one for asking what causes it. Most of the correlation headlines that reach your clients come from exactly this design.\n\n' +
        '## Looking back, looking forward\n\n' +
        'A **case-control study** starts at the outcome and walks backwards. Researchers find eighty masters runners with Achilles tendinopathy and eighty similar runners without, then compare their pasts: training history, footwear, old injuries. It is an efficient way to study outcomes that are rare, or that take years to appear, because nobody has to wait for them. The price is bias. People with a problem ransack their memories for a cause in a way healthy people never do, which is called recall bias. And picking the wrong comparison group quietly rigs the result before a single number is collected.\n\n' +
        'A **cohort study** runs time forwards. Define a group before anything has happened, two thousand military recruits on their first day of basic training, measure them, then follow them and count what occurs. Because the exposure was written down before the outcome existed, the order in time is finally solid, and you can work out real rates and compare risks between groups. A retrospective cohort does the same job using records that already exist. What makes it a cohort is the forward logic, not when the filing happened.\n\n' +
        '> Key idea: nobody assigned anyone to anything, so a difference between groups may be the exposure or may be the people. That is why these designs earn “was associated with” and never “caused”.\n\n' +
        '## What none of them escape\n\n' +
        'No observational design escapes **confounding**. Nobody assigned anyone to run eighty kilometres a week. The people who choose to do that differ from the people who do not in fitness, sleep, diet, income and a hundred things nobody measured, and any of those could be producing the result on the page. Statistical adjustment helps, and it is worth respecting when it is done carefully, but it can only correct for the differences somebody thought to write down.\n\n' +
        'None of this makes the family worthless, and treating it that way would be its own mistake. For plenty of your questions there is no trial coming: how common an injury is, what usually happens to somebody over the next five years, whether a rare event is dangerous. For those, watching people is not a poor substitute for an experiment. It is the right design. What it never buys you is the last word in the sentence.',
    },
    {
      type: 'visual', id: 'apt501-u2-visual-timeline',
      title: 'What each observational design can see',
      diagramId: 'design-observation-timeline',
      caption: 'The four watching designs laid on one timeline, showing where each is standing when it looks, which direction it looks in, and the sentence it is therefore allowed to write.',
      callouts: [
        { id: 'apt501-u2-vt1', label: '1', text: 'A cross-sectional study has no width in time at all. Exposure and outcome are captured in the same week, which is why it can never tell you which one arrived first.' },
        { id: 'apt501-u2-vt2', label: '2', text: 'Case-control starts at the outcome and walks backwards into a past nobody was recording at the time. That is what makes it efficient, and what makes recall bias so hard to rule out.' },
        { id: 'apt501-u2-vt3', label: '3', text: 'A cohort is the only watching design that writes the exposure down before the outcome exists. That fixes the order in time, and the order in time is the thing the other three cannot buy.' },
        { id: 'apt501-u2-vt4', label: '4', text: 'Not one row assigns anybody to anything, so every row earns “was associated with” and no row earns “caused”, however many people it followed and for however long.' },
      ],
    },
    {
      type: 'concept', id: 'apt501-u2-c3', heading: 'The randomized controlled trial, taken apart',
      body:
        'Everything worth checking in a trial lives in its methods section, and it all traces back to one difference. The randomized controlled trial changes the thing no observational design can change: who decides the exposure. A researcher assigns people to groups by chance.\n\n' +
        '## What chance actually buys\n\n' +
        'The coin flip is powerful because it is ignorant. **Randomization** knows nothing about anyone’s age, genetics, motivation, pain tolerance or sleep. Because it knows nothing, it deals all of those evenly into both groups on average, including the ones nobody has thought of yet. That last clause is the whole trick. Statistical adjustment can only balance the things somebody measured and wrote down. Chance also balances the things nobody measured.\n\n' +
        'Two caveats keep the claim honest. The balancing is a property of the long run, so a small trial can still be dealt an unlucky hand and finish with the fitter people in one group. And randomization protects the starting line only. What happens afterwards, dropouts, people swapping groups, programs followed halfway, can pull the comparison out of balance again.\n\n' +
        '## Blinding on a sliding scale\n\n' +
        '**Blinding** exists because knowing your group changes what happens. Participants try harder, or report more improvement than they feel. Coaches nudge. Assessors round a borderline measurement in the hoped-for direction. Drug trials hide the assignment behind identical pills.\n\n' +
        'Exercise has no identical pill. Your client knows whether she spent eight weeks squatting, her coach knows too, and no design cleverness fixes that. Almost everything else can still be hidden: the assessor reading muscle thickness off an ultrasound, the statistician running the numbers, sometimes even the participants’ beliefs about which group is the real treatment, by comparing two programs that both sound credible.\n\n' +
        'So read exercise trials with a dial, not a tick box. An unblinded participant rating her own pain is the design’s soft spot. An unblinded participant whose bone density is measured by a technician who does not know her group is barely a problem at all. Objective outcomes and blinded assessors buy back most of what unblindable participants cost.\n\n' +
        '## The comparator and the count\n\n' +
        'The **control group** is a decision, and it decides which question the trial answers. Against a no-exercise waiting list, almost any program works: you have shown it beats nothing, plus all the attention, structure and expectation that came with it. Against an active comparator, the training people would otherwise be doing, you learn whether the new thing adds anything. Two trials of the same intervention can both be honest and report very different effect sizes purely because they picked different comparators. When a finding looks too good, check what it beat before you check anything else.\n\n' +
        'Then people start dropping out, and they do not leave at random. The poor responders, the injured and the bored go first. **Intention-to-treat** analysis keeps everyone in the group they were assigned to, whether or not they did the program. That sounds perverse until you see why. The assigned groups are the only comparison randomization still protects, so it is the only comparison that keeps the causal claim. It also answers the question your gym floor faces: what happens when people are offered this program?\n\n' +
        '**Per-protocol** analysis keeps the finishers only. It answers a genuinely interesting different question, what happens to people who do the whole thing, but its answer is biased, because the finishers sorted themselves. A trial reporting only a per-protocol result after heavy dropout has quietly turned back into an observational study while keeping the trial badge on its jacket. Well-run trials follow the CONSORT reporting standard: they show the flow of every participant from enrolment to analysis, and they lead with the intention-to-treat result. When a paper hides that flow, ask why.\n\n' +
        '> Key idea: randomization buys a fair starting line and nothing else. Blinding, the comparator and who gets counted at the end decide whether the trial still deserves the word caused.',
    },
    {
      type: 'visual', id: 'apt501-u2-visual-trial',
      title: 'Where a trial is won and lost',
      diagramId: 'design-trial-flow',
      caption: 'Twenty-four people from enrolment to analysis, with what each stage protects written beside it, and the two different questions the same trial answers depending on who gets counted at the end.',
      callouts: [
        { id: 'apt501-u2-vr1', label: '1', text: 'Chance does something adjustment cannot. It spreads the confounders nobody measured, and that is the whole reason this design is allowed causal language.' },
        { id: 'apt501-u2-vr2', label: '2', text: 'The split into two arms is where the question gets set. Change what the second arm does and you have changed what the trial is asking, whatever the abstract says.' },
        { id: 'apt501-u2-vr3', label: '3', text: 'Blinding here is a sliding scale, not a yes or a no. Participants cannot be blinded to eight weeks of squatting. Assessors and analysts almost always can be.' },
        { id: 'apt501-u2-vr4', label: '4', text: 'The three who stopped are the whole reason the two boxes at the bottom differ. Counting everyone answers what happens when a program is offered. Counting finishers answers what happens to people who finish, and those people chose themselves.' },
      ],
    },
    {
      type: 'concept', id: 'apt501-u2-c4', heading: 'The pyramid is a starting point, not a verdict',
      body:
        'Stack the designs by how many ways each one can fool you and you get the famous evidence pyramid. Case reports at the base, then cross-sectional studies, case-control, cohort, randomized trials, and at the top **systematic reviews**: studies of studies, which hunt down every trial on a question using stated, repeatable methods and, when the trials are similar enough, pool their results into a single estimate called a **meta-analysis**.\n\n' +
        '## What the stack is for\n\n' +
        'As a first sorting instinct the pyramid earns its place. Each level up removes one way of being wrong. A claim resting only on the bottom layers deserves more suspicion than one resting on the top, and if you have thirty seconds and nothing else to go on, the level is a decent guess.\n\n' +
        'It also has a blind spot worth naming out loud. The pyramid was built for questions about whether a treatment works. Plenty of your questions are not that. How common is this injury? What usually happens to somebody with this problem over five years? Is this rare thing dangerous? For those, a cohort study is not a poor substitute for a trial. It is the correct design, and no trial is on its way.\n\n' +
        '## You read studies, not designs\n\n' +
        'The deeper trouble is that the levels rank designs, and you never read a design. You read a study, and studies are run well or badly. A systematic review of five sloppy trials is a tidy summary of sloppiness.\n\n' +
        'A good review admits that out loud. It reports how it searched, which studies it threw out and why, and how it rated the risk of bias in each one it kept. Read that section before you read the pooled number at the end, because it tells you whether the pooled number is worth reading.\n\n' +
        'Set a forty-person trial with unblinded self-rated outcomes, forty percent dropout and a finishers-only analysis beside a ten-thousand-person cohort with objective outcomes, careful adjustment and near-complete follow-up. The pyramid says trust the trial. A competent reader trusts the cohort.\n\n' +
        'This is not a rebel position. It is how modern evidence grading works. **GRADE**, the framework behind most major guidelines, treats the study design as nothing more than a starting score. It then moves the rating down for bias, imprecision and inconsistency, or up for very large and consistent effects. The label starts the conversation. Execution finishes it.\n\n' +
        '## The trade inside every study\n\n' +
        'The pyramid also hides a trade sitting inside every single study. **Internal validity** asks whether the design really pinned down cause and effect in the people it studied. **External validity** asks whether that answer travels to the person standing in front of you.\n\n' +
        'A tightly supervised laboratory trial on resistance-trained 22-year-old men, controlled diets and all, can be close to airtight internally. Your client is 55, has a desk job, a hip that clicks and three training hours a week. The very tightness that makes the trial’s answer trustworthy is what makes it hard to carry across that gap. A messier pragmatic trial in ordinary gym-goers gives up some causal certainty in exchange for an answer that already lives in your world. Neither one is better. They answer different halves of your problem.\n\n' +
        '> Key idea: the level tells you where to start. How well this study was run, and how far it sits from this client, tell you how much weight it gets.\n\n' +
        'So use the pyramid the way experienced readers use it: as a first sort, followed by two questions it cannot answer for you. How well was this particular study run? And how far is it from my particular client?',
    },
    {
      type: 'concept', id: 'apt501-u2-c5', heading: 'Why “a study proved X” is usually the wrong sentence',
      body:
        'Monday morning, and a client forwards you a post: “New study PROVES this fat-loss protocol works.” She wants to start it today. Before you answer her, look hard at the word in capitals, because it is doing dishonest work. A study does not weigh truth. It takes a sample, usually a few dozen people in exercise science, and produces an estimate.\n\n' +
        '## One draw, not a verdict\n\n' +
        'Run the identical trial again with a different few dozen people and you get a different number. Occasionally you get a number pointing the other way, through nothing but the luck of who walked through the door. That scatter has a name, **sampling variation**, and it never goes away. Larger samples shrink it. Nothing removes it.\n\n' +
        'So one study is one draw from a noisy process. Treating a single draw as a verdict is like judging a lifter from one rep, on video, filmed from across the street. You saw something real. You did not see enough of it to grade anybody.\n\n' +
        '## The record leans optimistic\n\n' +
        'The machinery around single studies tilts the same way, and it tilts against you.\n\n' +
        '**Statistically significant** means, roughly, that the data would be surprising if the intervention truly did nothing. It is not the probability that the finding is real, and it says nothing about how big the effect is. In a field full of small studies, the conventional threshold hands out false alarms generously.\n\n' +
        'Then the record itself gets filtered. Picture twenty trials of the same useless supplement, thirty people in each. By luck alone one or two land on a flattering number. Journals and authors both prefer positive results, so the eighteen that found nothing sit unpublished in file drawers while the two lucky draws get press releases. That is **publication bias**, and it means what reaches your feed has been selected for excitement twice: once by chance, once by the market. The average published effect therefore runs a little larger than the truth, and sometimes a lot larger.\n\n' +
        '## What earns confidence instead\n\n' +
        'What earns confidence is never one study. It is **replication** and agreement arriving from several directions at once. The same answer turning up when the trial is repeated. Trials agreeing with cohorts, and both agreeing with a plausible mechanism. The effect showing up in different populations. Larger doses producing larger effects.\n\n' +
        'That is why the honest scale runs from “a study suggests” through “evidence is accumulating” to “evidence consistently shows”, and why nothing on that scale says “proved”. Certainty in this trade is graded and provisional, always one good study away from moving. That is not a weakness in science. It is the mechanism doing its job.\n\n' +
        '> Key idea: your confidence should track the evidence, not outrun it. “Proved” is a promise you cannot keep, and it is the client who pays when it breaks.\n\n' +
        'This lands directly on how you speak. Professional marketing promises a process and never an outcome, and the same discipline applies to evidence. “A study proved this works” is the verbal cousin of “guaranteed results”. It borrows certainty you do not have and pays for it with your credibility. The sentence that replaces it is longer and much better: the best evidence so far suggests this, here is how strong that evidence is, and here is what it means for you. Clients keep trusting the trainer whose confidence tracks the evidence, especially on the day the evidence shifts and you are the one who tells them first.',
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt501-u2-visual',
      title: 'The evidence pyramid, and why it bends',
      diagramId: 'evidence-hierarchy',
      caption: 'The classic hierarchy, annotated the way an experienced reader actually uses it: a starting point, with execution and applicability judged separately.',
      callouts: [
        { id: 'apt501-u2-v1', label: '1', text: 'The top is not automatically true. A systematic review of weak trials inherits every one of their weaknesses, just more tidily.' },
        { id: 'apt501-u2-v2', label: '2', text: 'The dashed arrows are the point. The levels rank designs, but you read studies, and execution moves a study up or down past its label.' },
        { id: 'apt501-u2-v3', label: '3', text: 'Design decides what kind of sentence a study may write, “was associated with” against “caused”. It does not decide whether you should believe it.' },
        { id: 'apt501-u2-v4', label: '4', text: 'Applicability sits outside the pyramid entirely. How close the study’s population is to your client is a judgment no hierarchy makes for you.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt501-u2-worked',
      title: 'Reading the study behind a friend’s headline',
      scenario:
        'A trainer friend messages you: “Cuff training is proven. A study showed you get the same muscle growth from light weights as from heavy lifting. I am putting all my older clients on cuffs this month.” Before you borrow the idea for your own 55-year-old client rehabbing a knee, you find the study he means and read it properly.',
      steps: [
        { id: 'apt501-u2-w1', title: 'Find the design before the findings',
          reasoning: 'The methods say participants were randomly assigned, so this is a randomized controlled trial, the design that can support causal language. Twenty-four resistance-trained men in their twenties, eight weeks, low-load training with cuffs against traditional heavy training. Settling the design first tells you what kind of sentence the paper is allowed to end with.' },
        { id: 'apt501-u2-w2', title: 'Check who was actually studied',
          reasoning: 'Trained young men. Your client is a 55-year-old woman a few months past knee surgery. Nothing about the trial is wrong. The distance between its population and your client is now your problem, not the authors’. The study answers its own question, not yours.' },
        { id: 'apt501-u2-w3', title: 'Ask: compared with what?',
          reasoning: 'The comparator is heavy training, so the claim on offer is “similar muscle growth at much lower loads”. It is not “better than normal light training”, which would be a different comparator answering a different, rehabilitation-flavoured question. And in this trial muscle size grew similarly in both groups while the heavy group gained more maximal strength. That is unsurprising, because strength is specific to the loads you practise. “Same growth” made the headline. “Less strength gain” lived in the same table.' },
        { id: 'apt501-u2-w4', title: 'Look at how the outcome was measured',
          reasoning: 'Muscle size came from ultrasound, read by an assessor who did not know who was in which group. That matters. The participants obviously knew whether they had been lifting heavy, but a blinded technician measuring an objective outcome closes the main door that unblindable exercise trials leave open.' },
        { id: 'apt501-u2-w5', title: 'Follow every participant to the end',
          reasoning: 'Twenty-four started, twenty-one finished, and the authors analysed everyone in the group they were assigned to. In a trial this small that choice can move the result, so you check it every time. Three dropouts handled openly is ordinary science. Three dropouts handled silently is a warning sign.' },
        { id: 'apt501-u2-w6', title: 'Say only what you are licensed to say',
          reasoning: 'Verdict: in trained young men, low-load training with cuffs produced muscle growth comparable to heavy training over eight weeks, with smaller strength gains. Genuinely useful, because it makes the method plausible for people who cannot load heavily. For your client it is a reason to go looking next for cuff trials in older and post-surgical people, and to talk to her physiotherapist before any cuff goes near that leg. It is not a licence to call anything proven.' },
      ],
      takeaway:
        'Your friend read a headline. You read a study. Same paper, two different conclusions: his was “proved, for everyone”, yours was “shown, in whom, compared with what, and here is what to check next”. That gap is the entire skill.',
    },

    // 6 ── interactive lab (classification) ──────────────────────────────────
    {
      type: 'classification', id: 'apt501-u2-lab',
      title: 'Lab: name that design',
      instructions:
        'Each item describes a study’s methods. File it under the design being described. The clue is always in how people got into the study and when the data were collected. It is never in the topic.',
      buckets: [
        { id: 'apt501-u2-b-report', label: 'Case report' },
        { id: 'apt501-u2-b-cross', label: 'Cross-sectional' },
        { id: 'apt501-u2-b-cc', label: 'Case-control' },
        { id: 'apt501-u2-b-cohort', label: 'Cohort' },
        { id: 'apt501-u2-b-rct', label: 'Randomized controlled trial' },
      ],
      items: [
        { id: 'apt501-u2-l1', text: 'A paper describes one CrossFit athlete who developed rhabdomyolysis after a competition workout, with her blood results, treatment and recovery timeline',
          bucketId: 'apt501-u2-b-report', rationale: 'One person, described in depth after the fact. It can alert the field that something can happen. It cannot say how often, or why.' },
        { id: 'apt501-u2-l2', text: 'Five hundred gym members complete a one-time survey of weekly sitting hours and current low-back pain; the two are correlated',
          bucketId: 'apt501-u2-b-cross', rationale: 'Everything measured once, at the same moment, which makes it a snapshot. It shows the two travel together. It cannot say which came first, or whether a third factor drives both.' },
        { id: 'apt501-u2-l3', text: 'Researchers recruit eighty masters runners with Achilles tendinopathy and eighty without, then compare their training diaries from the previous five years',
          bucketId: 'apt501-u2-b-cc', rationale: 'Participants were selected by outcome status, then researchers looked backwards at exposure. That is case-control logic: efficient for slow-developing problems, and open to recall and selection bias.' },
        { id: 'apt501-u2-l4', text: 'Two thousand new military recruits are tested at entry, then followed for two years to see whether baseline movement-screen scores predict later injury',
          bucketId: 'apt501-u2-b-cohort', rationale: 'A defined group measured before anything happened, then followed forwards. The order in time is established. Confounding is not eliminated.' },
        { id: 'apt501-u2-l5', text: 'Sixty postmenopausal women are randomly assigned to heavy resistance training or a stretching program; bone density is measured at 0 and 12 months by a technician blinded to group',
          bucketId: 'apt501-u2-b-rct', rationale: 'The giveaway is “randomly assigned”: the researcher, not the participant, decides exposure by chance. The blinded technician adds assessor blinding on an objective outcome.' },
        { id: 'apt501-u2-l6', text: 'A national fitness survey measures VO2max and depression symptoms in the same week and reports that fitter people are less depressed',
          bucketId: 'apt501-u2-b-cross', rationale: 'Both variables captured in a single window, so a snapshot however large it is. Fitter people may be less depressed, less depressed people may train more, or both. The design cannot tell.' },
        { id: 'apt501-u2-l7', text: 'Using an injury registry, researchers trace every powerlifter who competed between 2010 and 2020 from their first meet onward, comparing injury rates by weight class',
          bucketId: 'apt501-u2-b-cohort', rationale: 'The records already exist, but entry is defined by exposure and outcomes are traced forwards through time. A retrospective cohort is still a cohort.' },
        { id: 'apt501-u2-l8', text: 'After several athletes on one team develop stress fractures, investigators compare them with unaffected teammates on menstrual history and energy intake',
          bucketId: 'apt501-u2-b-cc', rationale: 'Selection starts from the outcome, fractured against not fractured, then looks backwards at exposures. Case-control logic on a small scale.' },
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
            'Priya hands you her phone. The headline reads “Study proves lifting weights reverses ageing.” She says: “It’s proven. Shouldn’t we just do what they did?”',
          choices: [
            { id: 'apt501-u2-n1a', text: '“Great find. Let’s pull up the actual study and see what it did before we change anything.”', to: 'apt501-u2-n2',
              quality: 'best', feedback: 'Exactly right. You treated her curiosity as an asset and moved the conversation from a headline to a source.' },
            { id: 'apt501-u2-n1b', text: '“Headlines like that are clickbait. Trust the program.”', to: 'apt501-u2-n3',
              quality: 'poor', feedback: 'The headline probably is overcooked. But dismissing evidence without looking is the same error as swallowing it whole, and it teaches her that bringing you science is unwelcome.' },
            { id: 'apt501-u2-n1c', text: '“If it’s proven, it’s proven. We’ll switch you to the study’s routine this week.”', to: 'apt501-u2-n4',
              quality: 'poor', feedback: 'You just handed your professional judgment to a headline. You do not yet know the design, the population, or what “reverses ageing” even measured.' },
          ],
        },
        {
          id: 'apt501-u2-n2',
          situation:
            'You find the paper together. It is a prospective cohort study: four thousand adults over 50, followed for ten years. Those who did resistance training at least twice a week kept more muscle mass and physical function. Nobody was assigned to anything. Priya asks: “So is it proven?”',
          choices: [
            { id: 'apt501-u2-n2a', text: 'Explain: “It shows the lifters aged better, and that association is real. But people who choose to lift differ in lots of other ways, so this design cannot prove cause on its own. It does fit the trials we have, which point the same way.”', to: 'apt501-u2-n4',
              quality: 'best', feedback: 'Calibrated reading. You named what a cohort can claim, named its limit, and placed it against the wider evidence instead of judging it alone.' },
            { id: 'apt501-u2-n2b', text: '“No. It isn’t a randomized trial, so it’s basically worthless.”', to: 'apt501-u2-n4',
              quality: 'poor', feedback: 'Overcorrection. A large, careful cohort is real evidence, and the hierarchy is a starting point rather than a shredder. “Worthless until there is a trial” would throw out most of what we know about long-term training and health.' },
            { id: 'apt501-u2-n2c', text: '“Proven enough for me. Big study, long follow-up.”', to: 'apt501-u2-n4',
              quality: 'acceptable', feedback: 'Better than dismissal, but “proven” is still the wrong word. Size and duration tighten the estimate of the association. They do nothing at all about confounding.' },
          ],
        },
        {
          id: 'apt501-u2-n3',
          situation:
            'Priya puts her phone away, a little deflated. “Fine. I guess the science stuff isn’t really your thing.”',
          choices: [
            { id: 'apt501-u2-n3a', text: '“That came out wrong. The science stuff is exactly my thing. Let’s pull the study up right now and read it together.”', to: 'apt501-u2-n2',
              quality: 'acceptable', feedback: 'Good recovery. The brush-off cost you a little trust, and reading the source together is how you earn it back.' },
            { id: 'apt501-u2-n3b', text: '“Studies contradict each other every week. Twenty years on gym floors beats a journal.”', to: null,
              quality: 'poor', feedback: 'Experience is valuable and biased, because you remember your wins. A professional’s answer to imperfect evidence is better reading, not no reading. This ends with her trusting headlines more than she trusts you.' },
          ],
        },
        {
          id: 'apt501-u2-n4',
          situation:
            'Later, Priya asks the practical question: “So should I copy their exact routine? The study people trained twice a week. Should I drop my third session?”',
          choices: [
            { id: 'apt501-u2-n4a', text: '“The evidence supports the ingredient, which is regular progressive resistance training, and your program already delivers it. Twice a week is what those people happened to do, not a tested ceiling. We keep matching the dose to you.”', to: null,
              quality: 'best', feedback: 'Exactly. Observational studies describe what people did, not what anyone should do. You kept the principle and set the dose for the individual.' },
            { id: 'apt501-u2-n4b', text: '“Yes. Matching the study exactly is the safest bet.”', to: null,
              quality: 'poor', feedback: 'A cohort has no protocol to copy, because nobody assigned twice a week. You would be imitating an average behaviour rather than following tested instructions, and cutting a session she is thriving on to do it.' },
            { id: 'apt501-u2-n4c', text: '“Studies describe groups, not individuals. We never change anything based on papers.”', to: null,
              quality: 'acceptable', feedback: 'Right instinct about not copying blindly, wrong rule. Group evidence is exactly what should inform individual programming, without dictating it. “Never change anything” is how a practice fossilizes.' },
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
        '“TRIAL-PROVEN MUSCLE. In a groundbreaking clinical study, athletes using PowerFlow occlusion cuffs gained up to 3× more muscle. Nine elite rugby players trained with the cuffs for just 14 days (with zero dropouts) and every single one improved, so the results speak for themselves. A control group wasn’t needed: the gains were that obvious. The study was run in a university laboratory, and in our follow-up survey 92% of PowerFlow owners said they’d recommend the cuffs to a friend. Proven safe and effective for everyone from teen athletes to seniors recovering from surgery.”',
      findings: [
        { id: 'apt501-u2-e1', text: '“gained up to 3× more muscle”', isError: true,
          rationale: 'Three times more than what? No comparator is named, and “up to” reports the single best responder as if it were the typical result.' },
        { id: 'apt501-u2-e2', text: '“Nine elite rugby players trained with the cuffs for just 14 days”', isError: true,
          rationale: 'Two weeks is too short for meaningful, measurable muscle growth. Early changes are mostly neural adaptation and fluid shifts. And nine elite athletes say very little about the general customer.' },
        { id: 'apt501-u2-e3', text: '“every single one improved, so the results speak for themselves”', isError: true,
          rationale: 'With no comparison group, universal improvement is exactly what training, test familiarity and regression to the mean produce on their own. Results never speak for themselves. Comparators speak for them.' },
        { id: 'apt501-u2-e4', text: '“A control group wasn’t needed: the gains were that obvious”', isError: true,
          rationale: 'Backwards. The control group is how you learn how much would have happened anyway, and the more impressive the raw gains, the more you need one.' },
        { id: 'apt501-u2-e5', text: '“92% of PowerFlow owners said they’d recommend the cuffs”', isError: true,
          rationale: 'A satisfaction survey of people who already bought the product is testimony, not evidence of effect. The unsatisfied rarely stick around to be surveyed.' },
        { id: 'apt501-u2-e6', text: '“The study was run in a university laboratory”', isError: false,
          rationale: 'Where a study is run is a neutral fact. A laboratory setting neither validates nor invalidates anything. The design does that.' },
        { id: 'apt501-u2-e7', text: '“Proven safe and effective for everyone from teen athletes to seniors recovering from surgery”', isError: true,
          rationale: 'The study, such as it is, involved nine elite athletes. Stretching “proven safe” to post-surgical seniors, who were never studied at all, is the ad’s most dangerous sentence.' },
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
          back: 'Population, Intervention, Comparator, Outcome. They are the four blanks a vague question has to fill before evidence can answer it.' },
        { id: 'apt501-u2-r2', front: 'What is the built-in limit of a cross-sectional study?',
          back: 'Everything is measured at once, so it can show association but never direction. There is no way to tell what came first, or whether a third factor drives both.' },
        { id: 'apt501-u2-r3', front: 'Case-control against cohort: which way does each look through time?',
          back: 'Case-control starts from the outcome and looks backwards at exposures. A cohort starts from exposure and follows forwards to outcomes. Cohorts fix the order in time. Case-controls trade that away for efficiency.' },
        { id: 'apt501-u2-r4', front: 'What does randomization actually buy you?',
          back: 'On average it balances both known and unknown confounders across the groups, and the unknowns are the part no statistical adjustment can reach. A small trial can still be dealt an unlucky hand.' },
        { id: 'apt501-u2-r5', front: 'Who can and cannot be blinded in a typical exercise trial?',
          back: 'Participants and coaches usually cannot, because you know whether you squatted. Outcome assessors and analysts can be, and objective outcomes such as DXA, ultrasound and timed tests blunt what participant unblinding costs.' },
        { id: 'apt501-u2-r6', front: 'Intention-to-treat against per-protocol: what question does each answer?',
          back: 'Intention-to-treat analyses everyone in the group they were assigned to, and answers what happens when people are offered this program. That is the comparison randomization still protects. Per-protocol keeps the finishers only and answers what happens if they do all of it, at the price of self-selection bias.' },
        { id: 'apt501-u2-r7', front: 'When can a cohort study outweigh a randomized trial?',
          back: 'When execution beats the label. A large, careful cohort with objective outcomes and near-complete follow-up outweighs a tiny, unblinded trial with heavy dropout analysed on finishers only. Design is a starting score, not a verdict.' },
        { id: 'apt501-u2-r8', front: 'Internal against external validity: the trade in one line?',
          back: 'Internal validity asks whether the study pinned down cause and effect in its own participants. External validity asks whether the answer travels to your client. Tight control raises the first and usually costs the second.' },
        { id: 'apt501-u2-r9', front: 'What sentence replaces “a study proved X” with a client?',
          back: '“The best evidence so far suggests this. Here is how strong it is, and here is what it means for you.” Confidence should track the evidence, not outrun it.' },
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
            { id: 'c', text: 'Population, Inference, Correlation, Odds', correct: false, rationale: 'A mix of statistics vocabulary. Only the population belongs.' },
          ] },
        { id: 'apt501-u2-q2', kind: 'single', cognitive: 'application',
          prompt: 'Your 60-year-old client asks: “Should I take creatine?” Which rewrite turns that into an answerable question?',
          explanation: 'An answerable question names who, what, against what, and measured how over what period. The others leave every blank open.',
          options: [
            { id: 'a', text: '“In adults over 55 doing resistance training, does creatine plus training, compared with training plus placebo, improve lean mass and leg strength over 12 weeks?”', correct: true, rationale: 'Population, intervention, comparator and outcomes are all specified, so a study can answer this.' },
            { id: 'b', text: '“Is creatine good or bad?”', correct: false, rationale: 'No population, no comparator, no outcome. As unanswerable as the original.' },
            { id: 'c', text: '“Does creatine work if you train hard enough?”', correct: false, rationale: '“Work” is still undefined and the comparator is missing. Effort does not make a question answerable.' },
          ] },
        { id: 'apt501-u2-q3', kind: 'single', cognitive: 'application',
          prompt: 'Researchers identify sixty masters runners with Achilles tendinopathy and sixty without, then compare their past five years of training. What design is this?',
          options: [
            { id: 'a', text: 'A cohort study', correct: false, rationale: 'A cohort starts from exposure and follows forwards. Here selection started from the outcome.' },
            { id: 'b', text: 'A case-control study', correct: true, rationale: 'Selected by outcome status, then looking backwards at exposure. That is the defining case-control move.' },
            { id: 'c', text: 'A cross-sectional study', correct: false, rationale: 'Not a single-moment snapshot. Participants were chosen by outcome and their histories examined.' },
          ] },
        { id: 'apt501-u2-q4', kind: 'single', cognitive: 'analysis',
          prompt: 'What is the real reason randomization earns causal language?',
          explanation: 'Adjustment can only handle confounders somebody measured. Assignment by chance balances the unmeasured ones too, on average, with small trials still at the mercy of luck.',
          options: [
            { id: 'a', text: 'It spreads known AND unknown confounders evenly across groups, on average, so outcome differences can be attributed to the intervention', correct: true },
            { id: 'b', text: 'It guarantees the two groups are identical', correct: false, rationale: 'It guarantees the process, not any single result. A small trial can still be dealt unlucky groups.' },
            { id: 'c', text: 'It makes the sample representative of the general population', correct: false, rationale: 'That is random sampling, a different thing. Randomization balances the groups internally and says nothing about who the results generalize to.' },
          ] },
        { id: 'apt501-u2-q5', kind: 'multi', cognitive: 'analysis',
          prompt: 'A balance-training trial reports large improvements against a no-exercise waiting-list control. Which cautions are warranted? (Select all that apply.)',
          explanation: 'A waiting-list comparator answers “better than nothing”, and part of that gap is attention and expectation. Missing blinding calls for caution, not automatic dismissal.',
          options: [
            { id: 'a', text: 'Part of the gap may reflect attention and expectation rather than the balance training itself', correct: true },
            { id: 'b', text: 'Beating a waiting list shows the program beats nothing, not that it beats the training people would otherwise do', correct: true },
            { id: 'c', text: 'Without blinding, the result must be a placebo effect and can be ignored', correct: false, rationale: 'Overcorrection. Unblinding warrants caution, especially on subjective outcomes. It does not erase the finding.' },
            { id: 'd', text: 'If the trial’s sample differs a lot from your client, carrying the numbers straight across is a stretch', correct: true },
          ] },
        { id: 'apt501-u2-q6', kind: 'single', cognitive: 'analysis',
          prompt: 'A 40-person unblinded trial with 40% dropout, analysed on finishers only, contradicts a large, careful cohort with objective outcomes. What does good practice say?',
          options: [
            { id: 'a', text: 'The trial wins automatically, because it sits higher on the pyramid', correct: false, rationale: 'The pyramid ranks designs. Appraisal ranks studies. This trial has surrendered most of what made it a trial.' },
            { id: 'b', text: 'Judge each on execution: the cohort’s evidence can outweigh a badly run trial', correct: true, rationale: 'Design is a starting score that execution moves, which is the reasoning GRADE formalizes.' },
            { id: 'c', text: 'Neither counts until a systematic review exists', correct: false, rationale: 'Reviews are built from studies like these, and somebody still has to read them. A review would weigh them the same way you just did.' },
          ] },
        { id: 'apt501-u2-q7', kind: 'single', cognitive: 'synthesis',
          prompt: 'A client asks whether the new tempo-training study she saw means she should switch programs. Which reply best reflects evidence-based practice?',
          explanation: 'Calibrated language, the wider evidence, applicability to her, and a shared decision. That is the whole unit in one sentence.',
          options: [
            { id: 'a', text: '“The study proved tempo training is superior. We switch tonight.”', correct: false, rationale: '“Proved” from one study, and the client’s own situation never entered the decision.' },
            { id: 'b', text: '“One trial, in people quite different from you, suggests a benefit. Here’s how it fits the rest of the evidence and your goals. Let’s decide together whether anything should change.”', correct: true, rationale: 'Honest about the strength of the evidence, checks applicability, and keeps the decision shared.' },
            { id: 'c', text: '“Studies flip-flop constantly. We ignore them and stick with what I’ve seen work.”', correct: false, rationale: 'Experience-only practice is its own bias, because you remember your wins. The answer to noisy evidence is better reading, not none.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt501-u2-teach',
      title: 'Teach it back',
      prompt:
        'Your client Dana read that “a study proved lifting weights is dangerous for people over 50” and wants to cancel her strength training. In plain, warm language, explain how you read studies, and why one headline does not settle it, without dismissing science or her worry.',
      modelAnswer:
        'I’m really glad you brought this to me instead of just cancelling. That is exactly what I want you to do. Here is how I read something like this. First I find the actual study, because headlines are written to be clicked, not to be right. Then I ask three questions. Who was studied, people like you or somebody very different? Compared with what, lifting against not lifting, or against something else entirely? And what was actually measured, injuries in a supervised program like ours, or something with nothing to do with what we do? One study is one estimate, and single studies swing around a lot. What I trust is the pile of evidence, not one draw out of it. On strength training for people over 50, that pile is unusually consistent and it points the other way. Done gradually and with decent technique, it is one of the best-supported things you can do for your bones, your muscle and staying independent, which is why the major health guidelines recommend it at every age. So here is my offer. I will find the study behind that headline and we will look at it together next session. If it turns up something genuinely new, I will be the first to change what we do. Until then, your program stays exactly as careful as it has always been.',
      rubric: [
        { id: 'apt501-u2-t1', text: 'Explains that a headline and a study are different things, and that one study is an estimate rather than proof, without jargon' },
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
          prompt: 'A colleague’s ad reads: “Science has proven my 6-week protocol doubles fat loss, guaranteed.” What makes this wrong?',
          explanation: 'Outcome guarantees misrepresent what any professional controls and raise legal exposure. And “proven” claims a certainty that neither one study nor a whole body of evidence licenses.',
          options: [
            { id: 'a', text: 'It pairs an outcome guarantee, which is a marketing and negligence problem, with “proven”, which claims a certainty no evidence licenses', correct: true },
            { id: 'b', text: 'Nothing, provided a study exists showing something similar', correct: false, rationale: 'A supporting study would repair neither the guarantee nor the word “proven”.' },
            { id: 'c', text: 'Only that the specific study isn’t cited', correct: false, rationale: 'A citation would decorate the claim. It would not repair it.' },
          ] },
        { id: 'apt501-u2-cu2', kind: 'single', cognitive: 'analysis',
          prompt: 'Your 55-year-old client asks whether she should train exactly like the subjects in a rigorous trial of resistance-trained 22-year-old men. What is the best professional response?',
          options: [
            { id: 'a', text: 'Carry over the supported principle, then set the dose from her situation. The trial answered its question in its own population, and bridging the gap is your professional judgment', correct: true, rationale: 'Internal validity is the trial’s job. External validity is yours.' },
            { id: 'b', text: 'Copy the protocol exactly, because a randomized trial is the highest form of evidence', correct: false, rationale: 'Design quality does not move a result across a population gap. That judgment is yours to make.' },
            { id: 'c', text: 'Ignore research on young men entirely when training older clients', correct: false, rationale: 'Overcorrection. Principles often transfer even when the specific numbers do not.' },
          ] },
        { id: 'apt501-u2-cu3', kind: 'single', cognitive: 'synthesis',
          prompt: 'You are weighing blood-flow restriction training for a post-surgical client whose physiotherapist has cleared light loading. Which reasoning order reflects professional practice?',
          explanation: 'Scope and the collaborating clinician’s guidance frame the decision. Appraisal of the evidence fills it in. Documentation closes it.',
          options: [
            { id: 'a', text: 'Confirm it sits inside your scope and the physiotherapist’s guidance, then appraise the evidence (design, population match, comparator), then decide with the client and document it', correct: true },
            { id: 'b', text: 'Appraise the evidence first; if it is strong enough, scope and clearance questions answer themselves', correct: false, rationale: 'No quantity of evidence moves an action into your scope or overrides a clinician’s restrictions.' },
            { id: 'c', text: 'If a randomized trial supports the method, proceed, because the physiotherapist’s clearance already covered training generally', correct: false, rationale: 'A general clearance is not clearance for a specific new modality. Collaboration means asking, not assuming.' },
          ] },
      ],
    },
  ],
};
