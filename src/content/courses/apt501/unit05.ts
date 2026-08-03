import type { Unit } from '../../../types/content';

export const unit05: Unit = {
  id: 'apt501-u5',
  code: 'APT 501.4',
  title: 'Reading Reviews, Meta-Analyses and Guidelines',
  summary:
    'How to read the papers that summarise other papers — systematic reviews, meta-analyses, position stands — well enough to know when a pooled diamond should change your coaching, and when it shouldn’t.',
  qc: {
    sources: [
      { citation: 'Higgins JPT, Thomas J, et al. (eds) — Cochrane Handbook for Systematic Reviews of Interventions, version 6 (Cochrane)', evidenceType: 'Methodological handbook', verified: false },
      { citation: 'Page MJ, et al. — The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ 2021;372:n71', year: 2021, evidenceType: 'Reporting guideline', verified: false },
      { citation: 'Guyatt GH, et al. — GRADE guidelines series (introductory and rating-the-certainty papers), Journal of Clinical Epidemiology', year: 2011, evidenceType: 'Methodological guidance', verified: false },
      { citation: 'Greenhalgh T — How to Read a Paper: The Basics of Evidence-Based Medicine and Healthcare (Wiley-Blackwell)', evidenceType: 'Textbook', verified: false },
      { citation: 'Borenstein M, Hedges LV, Higgins JPT, Rothstein HR — Introduction to Meta-Analysis (Wiley)', evidenceType: 'Textbook', verified: false },
      { citation: 'Higgins JPT, Thompson SG — Quantifying heterogeneity in a meta-analysis. Statistics in Medicine 2002;21:1539–1558', year: 2002, evidenceType: 'Methods paper', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-08-03',
    reviewBy: '2027-08-03',
    controversies:
      'The I² bands (~25/50/75%) are conventions, not cut-offs, and methodologists argue about how much weight I² deserves at all, especially with few studies. Fixed- versus random-effects model choice can change pooled results and remains debated. Funnel-plot asymmetry tests are unreliable below roughly ten studies. Guideline panels reading the same evidence sometimes issue different recommendations because values, costs, and judgement calls differ — how to handle such disagreements is itself an open methods question.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u5-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt501-u5-p1', kind: 'single', cognitive: 'recall',
          prompt: 'What actually makes a review “systematic”?',
          options: [
            { id: 'apt501-u5-p1a', text: 'It is written by a committee of recognised experts', correct: false, rationale: 'Expertise doesn’t fix selective citation — method does.' },
            { id: 'apt501-u5-p1b', text: 'The question, search strategy, and inclusion rules are fixed and documented before the results are gathered', correct: true, rationale: 'Correct: pre-commitment is what the word buys you.' },
            { id: 'apt501-u5-p1c', text: 'It includes a meta-analysis with a forest plot', correct: false, rationale: 'Pooling is optional; many good systematic reviews rightly never pool.' },
          ] },
        { id: 'apt501-u5-p2', kind: 'single', cognitive: 'application',
          prompt: 'At the bottom of a forest plot sits a diamond. What is it?',
          options: [
            { id: 'apt501-u5-p2a', text: 'The largest and most trustworthy single study', correct: false, rationale: 'Individual studies are the rows; the diamond is what they combine into.' },
            { id: 'apt501-u5-p2b', text: 'The pooled estimate — its centre is the combined result and its width is the confidence interval', correct: true, rationale: 'Correct: the diamond has no whiskers because it is the interval.' },
            { id: 'apt501-u5-p2c', text: 'The average of only the statistically significant studies', correct: false, rationale: 'Pooling uses every included study, weighted by precision — significant or not.' },
          ] },
        { id: 'apt501-u5-p3', kind: 'single', cognitive: 'analysis',
          prompt: 'Nine small industry-funded trials, all positive, pool into a meta-analysis with a narrow confidence interval and a lopsided funnel plot. The narrow interval tells you…',
          options: [
            { id: 'apt501-u5-p3a', text: 'The effect is now beyond reasonable doubt', correct: false, rationale: 'Precision is not validity; a biased pool gives a precise wrong answer.' },
            { id: 'apt501-u5-p3b', text: 'The pooled estimate is precise — which is not the same as unbiased, because pooling cannot restore the null trials that never got published', correct: true, rationale: 'Correct: pooling shrinks random error only. Missing studies stay missing.' },
            { id: 'apt501-u5-p3c', text: 'Heterogeneity must be low', correct: false, rationale: 'Interval width and between-study disagreement are separate questions.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt501-u5-outcomes',
      outcomes: [
        { level: 'recall', text: 'Define narrative review, systematic review, and meta-analysis; name each part of a forest plot; and state the four GRADE certainty levels and the five standard reasons for downgrading.' },
        { level: 'application', text: 'Given a forest plot, extract each study’s estimate, interval, and weight, interpret the pooled diamond, and read I² as a statement about between-study disagreement.' },
        { level: 'analysis', text: 'Judge whether a pooled result deserves to change practice — interrogating heterogeneity, risk of bias in the included trials, publication-bias signals, and the match between studied populations and your client.' },
        { level: 'synthesis', text: 'Run the full reading workflow on a live client question: find the best available synthesis, appraise it, reconcile it with current guidelines, and decide what — if anything — changes in the program.' },
      ],
    },

    // 3 ── core instruction (five concept blocks) ────────────────────────────
    {
      type: 'concept', id: 'apt501-u5-c1', heading: 'Two kinds of review — and what “systematic” actually buys you',
      body:
        'Two documents can both be called “a review” and have almost nothing in common. In one, a respected researcher walks you through fifteen years of literature the way a local walks you through their home town: the streets they know, the stories they like, the shortcuts they trust. That is a narrative review. At its best it is the fastest way to absorb how an expert thinks about a field. Its weakness is built into its method — you are seeing the streets the guide chose to show you, and you have no way of knowing what got left out.\n\nA systematic review makes three promises before it looks at a single result. It fixes a precise question in advance: which population, which intervention, compared with what, measuring which outcomes. It runs a documented search that anyone could repeat — these databases, these dates, these terms. And it writes the inclusion and exclusion rules down before anyone knows which studies will pass them. That pre-commitment is what the word “systematic” actually buys you. It does not guarantee the answer is right; it makes the finding-and-choosing process visible, so cherry-picking has nowhere to hide. If the authors bent their own rules, you can catch them at it.\n\nHere is the uncomfortable part: an expert’s narrative review can mislead without one dishonest sentence in it. Memory retrieves the studies that fit; loyalty to a training philosophy quietly weights the citations; the trial that confirmed a career’s work stays vivid while the one that undercut it fades. None of that needs bad faith — it is just how human recall works, which is exactly why the systematic format was invented. The reverse caution matters too. “Systematic” describes how the studies were found and chosen, not how good they were. A review can follow every reporting rule and still pool weak trials into a confident-looking answer. The label earns a review your attention, not your trust.',
    },
    {
      type: 'concept', id: 'apt501-u5-c2', heading: 'Meta-analysis: pooling, weights, and the forest plot',
      body:
        'Why pool studies at all? Because any single trial is a noisy glimpse. Twenty participants, eight weeks, one gym, one way of measuring — the result carries as much chance as signal. Run ten such trials and you will get ten different numbers even if the true effect never moved. Meta-analysis takes those scattered glimpses and combines them into one estimate, giving each study a say in proportion to how much information it carries. A large, tight trial gets a loud voice; a small, wobbly one gets a whisper. Done on the right studies, the pooled estimate is steadier than anything a single trial could give you.\n\nThe forest plot is where you watch that happen. Each row is one study. The square is that study’s result, and the size of the square is its weight — its share of the final answer. The horizontal whiskers are its 95% confidence interval: the range of effects that study is reasonably compatible with. The vertical line is the line of no effect — zero when the outcome is a difference (kilograms gained, seconds faster), one when it is a ratio (risk of injury). Whiskers that cross the line mean that study, on its own, cannot tell benefit from nothing. And at the bottom sits the diamond: its centre is the pooled estimate, its width is the pooled confidence interval. The diamond has no whiskers because it is the interval — its tips are the bounds.\n\nRead the rows before you read the diamond. Do the studies roughly agree, or are they scattered on both sides of the line? Is one giant trial supplying half the weight, so the “pool” is mostly that single study wearing a coat? Are the biggest effects coming from the smallest squares — a pattern that should make you think of chance, and of small null studies that never made it to print? The diamond is a summary of the rows. If you have not read the rows, you do not know what it is a summary of.',
    },
    {
      type: 'concept', id: 'apt501-u5-c3', heading: 'Heterogeneity: when the diamond stops meaning anything',
      body:
        'Suppose a review pools an eight-week machine-only study on untrained college men, a year-long periodised program in national-level lifters, and a twelve-week chair-based trial in nursing-home residents. The software will not object. It will produce a tidy diamond either way, because pooling is arithmetic, and arithmetic has no opinion about whether the studies belong together. The question the maths cannot answer is the one you must: is the average of those answers an answer to anything? A mean of apples and oranges is a precise description of fruit salad.\n\nHeterogeneity is the technical name for the rows disagreeing, and I² is its most common measure. Study results always differ somewhat by chance alone; I² estimates how much of the spread you see goes beyond what chance would produce — disagreement that reflects real differences in who was studied, what was done, and how it was measured. An I² near zero says the scatter looks like noise around one common effect. An I² of 75% says the studies are genuinely answering differently, and one number cannot speak for them all. The bands you will see quoted — roughly 25% low, 50% moderate, 75% high — are conventions meant to start a conversation, not verdicts meant to end one.\n\nHigh heterogeneity is not a reason to bin a review; it is an instruction to read further down. Good reviews chase the disagreement into subgroups — training status, dose, duration, sex, outcome measure — and sometimes the heterogeneity is the finding: the effect is real in beginners and absent in the trained, which is worth far more to you than any overall average. The modelling choice matters here too. A fixed-effect analysis assumes every study estimates one identical true effect; a random-effects analysis assumes a family of related true effects, which is almost always the honest choice in exercise science, where no two protocols match. But no model rescues a pool that never made sense. When the studies should not have been averaged, the diamond is not so much wrong as meaningless.',
    },
    {
      type: 'concept', id: 'apt501-u5-c4', heading: 'Publication bias — and why pooling can’t launder weak trials',
      body:
        'A trial with an exciting positive result gets written up quickly, accepted somewhere visible, and press-released. A trial that finds nothing tends to stall: the authors drift to other projects, journals are lukewarm, and the manuscript retires to a drawer. Multiply that across a field, add sponsors with products on the line, and the literature you can search stops being the research that was done and becomes the research that survived. That is publication bias, and it means the phrase “the literature shows” always carries a silent qualifier — the published literature shows.\n\nThe funnel plot is the standard way to look for the damage. Plot every study with its effect on the horizontal axis and its size or precision on the vertical. Large trials sit near the top, huddled close to the true effect; small trials scatter widely across the bottom, because small samples swing hard on chance. If nothing is missing, the shape is a symmetrical inverted funnel. When the bottom corner on the null side is empty — plenty of small flattering trials, none of the small disappointing ones that chance alone must have produced — the missing studies were probably run, and never surfaced. Use the tool honestly, though: with fewer than about ten studies, a funnel plot can barely tell asymmetry from coincidence.\n\nThe deeper trap is believing that pooling purifies. It does not. Combining studies shrinks random error — the noise of small samples — and nothing else. Bias is systematic error: randomisation that could be gamed, assessors who knew the group, dropouts quietly ignored. Pool twenty trials that all lean the same way for those reasons, and the lean pools right along with the data. What comes out is a biased answer wearing a narrow confidence interval — a precise estimate of the wrong number, which is more dangerous than an honest wide one because it looks so finished. This is why serious reviews publish a risk-of-bias table for every included trial, and why a meta-analysis of three well-run studies can outrank one built from twenty shaky ones. Before the diamond earns your respect, ask what went into it.',
    },
    {
      type: 'concept', id: 'apt501-u5-c5', heading: 'GRADE, guidelines, and a reading routine that fits between clients',
      body:
        'After all that checking, you still need a verdict you can act on: how much should this change what I do on the gym floor? GRADE is the profession’s shorthand for exactly that judgement. Evidence for each outcome is rated high, moderate, low, or very low certainty — in plain terms, how confident we are that the true effect sits close to the estimate. Randomised evidence starts at high and gets marked down for the five problems you now know how to spot: risk of bias in the trials, inconsistency between them, indirectness (wrong population, wrong outcome, or wrong comparison for your question), imprecision (wide intervals, few participants), and suspected publication bias. Observational evidence starts at low and can climb when effects are very large. So when a summary table says “moderate certainty”, that is not decoration — it is a claim you can now audit yourself, problem by problem.\n\nPosition stands and clinical guidelines — from ACSM, the NSCA, national health agencies and their peers — are the next layer up: part evidence synthesis, part expert consensus filling the gaps, part practical judgement about harms, costs, and what real people will actually do. Read them with two separate dials in mind. One dial is evidence certainty: how good is the underlying science. The other is recommendation strength: how firmly the panel says do this. The dials move independently, and that is deliberate. A strong recommendation can rest on moderate-certainty evidence when the benefits clearly outweigh the harms; a weak, “consider this” recommendation can sit on high-certainty evidence when the effect is real but small, or hinges on individual preference. Collapsing the two dials into one is how guidelines get misquoted.\n\nGuidelines also age — by design, not neglect. A panel’s search closes months or years before publication, and revisions arrive every five to ten years, so a guideline always trails the front edge of the literature. And credible bodies sometimes disagree with each other, because they asked slightly different questions, weighed different populations, closed their searches on different dates, or made different judgement calls on the same borderline evidence. Two respected guidelines pointing different ways is not a scandal; it is a map of exactly where the evidence is genuinely thin. Treat the disagreement itself as information.\n\nHere, finally, is the routine that makes all of this usable between clients. Start with the actual question in your client’s terms — “will low-load training with blood-flow restriction grow muscle during her rehab?”, not “is BFR good?”. Look for the highest level of synthesis first: a recent systematic review or guideline, not the newest single trial. Before reading a word of the conclusions, check three stamps — the date (what could it not have seen?), the population (does it include people like your client?), and the outcomes (the thing she cares about, or a lab proxy?). Then go to the forest plot before the abstract, because the plot cannot spin: the abstract was written by people who wanted the paper published, and the diamond was not. Finish with the only question that matters professionally: what, specifically, changes for this client? Sometimes the answer is a real change in loading, protein, or programming. Often the honest answer is “nothing yet” — and being able to say exactly why is what separates a professional reader from a headline repeater.',
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt501-u5-visual',
      title: 'Anatomy of a forest plot',
      diagramId: 'forest-plot-anatomy',
      caption:
        'Five invented trials of one intervention, pooled. Every meta-analysis you will ever read reduces to this picture — learn it once and abstracts lose their power over you.',
      callouts: [
        { id: 'apt501-u5-v1', label: '1', text: 'Each square is one study’s result, and the square’s size is its weight. Study D’s 120 participants buy it the loudest voice — 41% of the pooled answer.' },
        { id: 'apt501-u5-v2', label: '2', text: 'Whiskers are each study’s 95% confidence interval. Cross the vertical line and that study, alone, cannot tell benefit from nothing — true for A, C, and E here.' },
        { id: 'apt501-u5-v3', label: '3', text: 'The dashed vertical is the line of no effect: zero for difference outcomes like this one, 1.0 when the outcome is a ratio such as injury risk.' },
        { id: 'apt501-u5-v4', label: '4', text: 'The diamond is the pooled estimate. Its width IS the confidence interval — the tips are the bounds — which is why it carries no whiskers of its own.' },
        { id: 'apt501-u5-v5', label: '5', text: 'Study C sits on the other side of the line from the rest. That spread is heterogeneity, summarised by the I² beneath the diamond — your cue to ask whether these five belonged in one pool at all.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt501-u5-worked',
      title: 'Reading a meta-analysis before it reads you',
      scenario:
        'Your client Dana, 48, lifts three times a week and asks whether a protein supplement is worth the money. You find a systematic review with meta-analysis: fourteen randomised trials of protein supplementation during supervised resistance training, pooled outcome lean-mass change. The abstract announces that protein “significantly increases” lean mass. Time to read it properly.',
      steps: [
        { id: 'apt501-u5-w1', title: 'Check the question against your client',
          reasoning: 'Who was pooled? Nine trials in untrained young men, three in trained adults, two in older adults. Dana is a trained 48-year-old woman. That mismatch — indirectness — is noted before you look at a single number, because it caps how directly any finding can transfer to her.' },
        { id: 'apt501-u5-w2', title: 'Check the machinery',
          reasoning: 'Search documented and dated (through 2022 — anything newer is invisible to this paper), protocol registered in advance, inclusion rules stated. Good: this is a systematic review, not a curated tour. If this step fails, you stop here — the rest is decoration.' },
        { id: 'apt501-u5-w3', title: 'Read the forest plot before the abstract',
          reasoning: 'Pooled mean difference: +0.30 kg lean mass over roughly twelve weeks, 95% CI 0.09 to 0.51. Real, but small — the interval’s low end is under 100 grams. “Significant” in the abstract meant statistically distinguishable from zero, not big. The plot just told you what the abstract chose not to.' },
        { id: 'apt501-u5-w4', title: 'Interrogate the spread',
          reasoning: 'I² = 55% — the trials disagree more than chance explains. The subgroup table finds the pattern: solid effects where habitual protein intake was low, effects near zero where participants already ate about 1.6 g/kg/day. That subgroup line matters more to Dana than the diamond does.' },
        { id: 'apt501-u5-w5', title: 'Check who paid and what might be missing',
          reasoning: 'Six of fourteen trials were supplement-industry funded; the funnel plot leans a little; five trials never blinded the people measuring body composition. None of this kills the finding — it downgrades your certainty a notch, GRADE-style, from high toward moderate.' },
        { id: 'apt501-u5-w6', title: 'Decide for Dana',
          reasoning: 'First estimate her current intake. If she already eats near 1.6 g/kg/day, this evidence says a supplement buys her very little. If she is at 0.9 g/kg, raising protein is well supported — food or powder, whichever she will actually sustain. That sentence is the deliverable, and no abstract will ever hand it to you.' },
      ],
      takeaway:
        'The abstract said “significant”. The plot said “small, and mostly in people whose protein was low to begin with”. Two readings of the same paper — and only one of them can program for Dana.',
    },

    // 6 ── interactive lab (classification) ──────────────────────────────────
    {
      type: 'classification', id: 'apt501-u5-lab',
      title: 'Lab: why did the certainty drop?',
      instructions:
        'GRADE starts randomised evidence at high certainty, then downgrades for specific, nameable problems. For each meta-analysis finding below, pick the main reason a GRADE panel would mark it down.',
      buckets: [
        { id: 'apt501-u5-b-rob', label: 'Risk of bias' },
        { id: 'apt501-u5-b-incon', label: 'Inconsistency' },
        { id: 'apt501-u5-b-indir', label: 'Indirectness' },
        { id: 'apt501-u5-b-imprec', label: 'Imprecision' },
        { id: 'apt501-u5-b-pub', label: 'Publication bias' },
      ],
      items: [
        { id: 'apt501-u5-l1', text: 'Half the pooled trials never blinded the people measuring the outcome, and dropouts were simply ignored',
          bucketId: 'apt501-u5-b-rob', rationale: 'Unblinded assessment and ignored dropouts are flaws in trial conduct — systematic error in the ingredients, so risk of bias takes the downgrade.' },
        { id: 'apt501-u5-l2', text: 'I² = 84%, with individual trials sitting on both sides of the line of no effect and no explanation found',
          bucketId: 'apt501-u5-b-incon', rationale: 'Unexplained disagreement that large is inconsistency — the studies are answering differently and no subgroup accounts for it.' },
        { id: 'apt501-u5-l3', text: 'Every included trial studied untrained college-aged men; the question being asked is about trained women in their fifties',
          bucketId: 'apt501-u5-b-indir', rationale: 'The evidence answers a neighbouring question — a different population. That mismatch is indirectness even if every trial was pristine.' },
        { id: 'apt501-u5-l4', text: 'The pooled interval runs from a harmful effect to a large benefit, built on 140 participants across all trials combined',
          bucketId: 'apt501-u5-b-imprec', rationale: 'An interval spanning harm to large benefit on so few participants cannot support a decision — that is imprecision.' },
        { id: 'apt501-u5-l5', text: 'The funnel plot is missing its bottom corner on the null side, and trial registries list three completed studies that never published results',
          bucketId: 'apt501-u5-b-pub', rationale: 'A hollow funnel corner plus registered-but-unpublished trials is the fingerprint of missing null results.' },
        { id: 'apt501-u5-l6', text: 'The trials measured eight-week isometric strength; your client cares about season-long injury rates',
          bucketId: 'apt501-u5-b-indir', rationale: 'A surrogate outcome standing in for the one that matters is indirectness of outcome — the trials can be flawless and still not answer the question.' },
        { id: 'apt501-u5-l7', text: 'All nine trials were run by the product’s manufacturer, all nine are positive, and the smallest trials show the biggest effects',
          bucketId: 'apt501-u5-b-pub', rationale: 'A uniformly positive, sponsor-run literature where small studies carry the largest effects is the classic small-study pattern of publication bias.' },
        { id: 'apt501-u5-l8', text: 'Group allocation was predictable in most trials — staff could steer stronger participants into the training arm',
          bucketId: 'apt501-u5-b-rob', rationale: 'Predictable allocation lets selection leak into the groups. That is a randomisation failure — risk of bias, not any of the statistical categories.' },
      ],
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt501-u5-case',
      title: 'Case: “a meta-analysis proved it”',
      brief:
        'Marcus, a trainer you share a gym floor with, has pulled every stretch from his clients’ warm-ups: “A meta-analysis proved static stretching kills strength. Top of the evidence pyramid. Done deal.” His clients talk to your clients. Walk through how you handle the claim — every decision is scored against best practice.',
      startNodeId: 'apt501-u5-n1',
      nodes: [
        {
          id: 'apt501-u5-n1',
          situation:
            'Marcus shows you a headline on his phone: “Meta-analysis: stretching reduces strength by 5%.” He is waiting for you to concede.',
          choices: [
            { id: 'apt501-u5-n1a', text: 'Ask him to send the actual paper, and hold your verdict until you have seen what was pooled', to: 'apt501-u5-n2',
              quality: 'best', feedback: 'Right move. “Meta-analysis” names a method, not a verdict — what it can claim depends entirely on which trials went in and what they measured.' },
            { id: 'apt501-u5-n1b', text: 'Concede — a meta-analysis outranks anything you could say against it', to: 'apt501-u5-n3',
              quality: 'poor', feedback: 'The pyramid ranks study designs on average; it cannot tell you whether these pooled trials match this question. Conceding to a label, sight unseen, is how bad claims spread through gyms.' },
            { id: 'apt501-u5-n1c', text: 'Wave it off: “you can prove anything with statistics”', to: 'apt501-u5-n3',
              quality: 'poor', feedback: 'Reflex cynicism is credulity’s lazy twin — the paper might be excellent. Either way you cannot know from a headline, and Marcus now has no reason to take your later reading seriously.' },
          ],
        },
        {
          id: 'apt501-u5-n2',
          situation:
            'You read the review. It pools 28 crossover trials. In almost all of them, participants held static stretches for 60 seconds or more and then tested maximal strength within minutes. Pooled result: roughly a 4–5% acute strength reduction. No trial tested strength after a complete warm-up, and none lasted beyond a single session.',
          choices: [
            { id: 'apt501-u5-n2a', text: 'Conclude the finding is real but narrow: long holds immediately before maximal efforts — it says little about brief stretches inside a full warm-up, and nothing about long-term effects', to: 'apt501-u5-n4',
              quality: 'best', feedback: 'Exactly. The review answers its own question well; the error would be applying that answer to questions it never asked. This is indirectness, spotted in the wild.' },
            { id: 'apt501-u5-n2b', text: 'Go hunting for subgroup analyses by stretch duration before concluding anything', to: 'apt501-u5-n4',
              quality: 'acceptable', feedback: 'Good instinct — duration subgroups are where this literature’s nuance lives. Just pair it with the larger observation: every trial tested strength minutes after stretching, so the acute-versus-chronic gap stands whatever the subgroups say.' },
            { id: 'apt501-u5-n2c', text: 'The pooled effect is statistically clear, so the direction is settled: stretching harms strength', to: 'apt501-u5-n4',
              quality: 'poor', feedback: 'A statistically clear answer to a different question is still a different question. “Harms strength for a few minutes after a 60-second hold” and “harms strength” are not the same claim.' },
          ],
        },
        {
          id: 'apt501-u5-n3',
          situation:
            'A week later, one of your own clients — 61, stretches daily, lifts pain-free and loves her routine — asks anxiously whether she has to stop, because “Marcus says the science is settled.”',
          choices: [
            { id: 'apt501-u5-n3a', text: 'Tell her you will read the actual review this week and come back with exactly what it does and does not show for someone like her', to: 'apt501-u5-n2',
              quality: 'best', feedback: 'The professional recovery: you decline to transmit a claim you have not verified, and you have promised her an answer scaled to her — not to a headline.' },
            { id: 'apt501-u5-n3b', text: 'Tell her to drop the stretching — better safe than sorry', to: null,
              quality: 'poor', feedback: '“Better safe” assumes the paper showed danger in her situation. It showed a small, brief strength dip after long holds — nothing about her health, her enjoyment, or her actual training. You have now repeated Marcus’s mistake inside her program.' },
          ],
        },
        {
          id: 'apt501-u5-n4',
          situation:
            'You have read the paper properly. Meanwhile Marcus is telling anyone who will listen that “science says never stretch.” What do you do with what you now know?',
          choices: [
            { id: 'apt501-u5-n4a', text: 'Fit your practice to the actual finding — no long static holds right before maximal lifts, brief stretching stays where clients value it — and offer to walk Marcus through the forest plot over a coffee', to: null,
              quality: 'best', feedback: 'Programming matched to what was actually studied, plus the quiet collegial correction. Notice the paper partly supports him — conceding that openly is what makes the rest of your reading credible.' },
            { id: 'apt501-u5-n4b', text: 'Fix your own programming and let Marcus be', to: null,
              quality: 'acceptable', feedback: 'Your clients are well served, and picking battles is legitimate. But unchallenged, “the science is settled” keeps spreading to people who train beside your clients — showing one colleague one forest plot is cheap.' },
            { id: 'apt501-u5-n4c', text: 'Post in the gym group chat that Marcus doesn’t understand research', to: null,
              quality: 'poor', feedback: 'Public point-scoring turns an evidence question into a status fight. Everyone remembers the argument and nobody remembers the finding — which, awkwardly, partly supports him.' },
          ],
        },
      ],
    },

    // 8 ── error identification ──────────────────────────────────────────────
    {
      type: 'errorId', id: 'apt501-u5-errorid',
      title: 'Audit this “evidence-based” article',
      brief:
        'A fitness site summarises a new review. Flag every statement that misuses evidence; leave the sound ones alone.',
      document:
        '“SCIENCE CONFIRMS: collagen builds muscle. A new review from researchers at a leading supplement company pooled the eight best collagen trials — hand-picked for quality — weighting the larger trials more heavily, and found a significant effect on lean mass (SMD 0.21, 95% CI −0.05 to 0.47). Results were remarkably consistent across studies (I² = 78%). With all eight trials pointing the same way, publication bias is clearly not a concern. The search covered the major databases. And since meta-analysis is the highest form of evidence, the debate is over: every adult who trains should be supplementing collagen today.”',
      findings: [
        { id: 'apt501-u5-e1', text: '“hand-picked for quality”', isError: true,
          rationale: 'Hand-picking is the opposite of systematic. Inclusion criteria are fixed in advance precisely so authors cannot choose the studies that flatter their answer.' },
        { id: 'apt501-u5-e2', text: '“a significant effect … (SMD 0.21, 95% CI −0.05 to 0.47)”', isError: true,
          rationale: 'The interval crosses zero — by the paper’s own numbers this result is not statistically significant, and the point estimate is small besides.' },
        { id: 'apt501-u5-e3', text: '“remarkably consistent across studies (I² = 78%)”', isError: true,
          rationale: 'I² = 78% is high heterogeneity: the trials substantially disagree. The sentence claims the opposite of its own statistic.' },
        { id: 'apt501-u5-e4', text: '“publication bias is clearly not a concern”', isError: true,
          rationale: 'Eight uniformly positive trials from one industry is a reason for more suspicion, not less — and eight studies is too few for any funnel-plot method to rule bias out.' },
        { id: 'apt501-u5-e5', text: '“The search covered the major databases”', isError: true,
          rationale: 'A systematic search names its databases, dates, and terms so it can be repeated. “The major databases” is unverifiable, which defeats the point of searching systematically.' },
        { id: 'apt501-u5-e6', text: '“meta-analysis is the highest form of evidence, the debate is over”', isError: true,
          rationale: 'The label buys nothing by itself — a pooled estimate is only as good as the trials inside it and its match to your question. Hierarchy positions are starting assumptions, not verdicts.' },
        { id: 'apt501-u5-e7', text: '“every adult who trains should be supplementing collagen today”', isError: true,
          rationale: 'A universal practice command from one small, non-significant, heterogeneous pooled estimate skips certainty, population match, and cost entirely — several layers of judgement compressed into marketing.' },
        { id: 'apt501-u5-e8', text: '“from researchers at a leading supplement company”', isError: false,
          rationale: 'Disclosing who did the work is proper practice. Funding is a reason to raise your scrutiny of the methods — it is not, by itself, an error.' },
        { id: 'apt501-u5-e9', text: '“weighting the larger trials more heavily”', isError: false,
          rationale: 'That is simply how meta-analysis works — precision-based weighting is correct method, not spin.' },
      ],
    },

    // 9 ── active-recall set ─────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt501-u5-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'apt501-u5-r1', front: 'What makes a review systematic rather than narrative?',
          back: 'A pre-specified question, a documented and repeatable search, and inclusion rules fixed before the results are known — the choosing process is visible.' },
        { id: 'apt501-u5-r2', front: 'On a forest plot, what does the size of each square mean?',
          back: 'That study’s weight in the pooled result. Larger, more precise trials get bigger squares and more influence.' },
        { id: 'apt501-u5-r3', front: 'What is the diamond, and where is its confidence interval?',
          back: 'The pooled estimate. Its width IS the interval — the tips are the bounds — so it carries no whiskers.' },
        { id: 'apt501-u5-r4', front: 'What does I² tell you, in plain terms?',
          back: 'Roughly what share of the between-study spread is beyond chance — real disagreement. About 25/50/75% mark low/moderate/high, as rough guides rather than verdicts.' },
        { id: 'apt501-u5-r5', front: 'A funnel plot missing its bottom corner on the null side means…',
          back: 'Small null studies are likely missing from the published record, so the literature you can find overstates the effect.' },
        { id: 'apt501-u5-r6', front: 'Garbage in, garbage out — in one sentence?',
          back: 'Pooling shrinks random error only; bias in the trials pools right along with the data, so a meta-analysis of weak trials is a precise estimate of a biased answer.' },
        { id: 'apt501-u5-r7', front: 'The four GRADE certainty levels?',
          back: 'High, moderate, low, very low — how confident we are that the true effect sits close to the estimate.' },
        { id: 'apt501-u5-r8', front: 'The five standard reasons GRADE downgrades certainty?',
          back: 'Risk of bias, inconsistency, indirectness, imprecision, and publication bias.' },
        { id: 'apt501-u5-r9', front: 'Recommendation strength versus evidence certainty — why are they separate dials?',
          back: 'Guidelines add values, harms, costs, and consensus to the evidence. A strong recommendation can rest on moderate certainty, and a weak one on high certainty.' },
        { id: 'apt501-u5-r10', front: 'The professional reading workflow, in order?',
          back: 'Client’s question → highest-level recent synthesis → check date, population, outcomes → forest plot before the abstract → decide what changes for this client.' },
      ],
    },

    // 10 ── unit quiz ────────────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u5-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'apt501-u5-q1', kind: 'single', cognitive: 'analysis',
          prompt: 'A famous coach publishes a narrative review concluding that periodisation is essential. He is honest and deeply read. Why can his review still mislead you in a way a systematic review is designed to prevent?',
          explanation: 'Pre-specified questions, searches, and inclusion rules exist because honest experts still select evidence unconsciously — memory and allegiance do the cherry-picking for them.',
          options: [
            { id: 'apt501-u5-q1a', text: 'His study selection is invisible — nobody, including him, can check what memory and allegiance left out', correct: true, rationale: 'Correct: the failure mode is unauditable selection, not dishonesty.' },
            { id: 'apt501-u5-q1b', text: 'Narrative reviews are not permitted to cite randomised trials', correct: false, rationale: 'They can cite anything; the problem is how the citations get chosen.' },
            { id: 'apt501-u5-q1c', text: 'Coaches cannot understand statistics well enough to review evidence', correct: false, rationale: 'Credentials are not the issue — the method of selection is.' },
          ] },
        { id: 'apt501-u5-q2', kind: 'single', cognitive: 'application',
          prompt: 'On a forest plot, one study’s square is tiny and its whiskers stretch well across both sides of the line of no effect. What have you learned about that study?',
          options: [
            { id: 'apt501-u5-q2a', text: 'It found that the intervention does not work', correct: false, rationale: 'Its interval is compatible with benefit, harm, and nothing — that is not a null finding, it is an uninformative one.' },
            { id: 'apt501-u5-q2b', text: 'It is small and imprecise: little weight in the pool, and on its own it cannot tell benefit from harm from nothing', correct: true, rationale: 'Correct — small square, wide whiskers: low weight, low information.' },
            { id: 'apt501-u5-q2c', text: 'It should have been excluded from the review', correct: false, rationale: 'Imprecise studies still carry information; the weighting already scales their influence honestly.' },
          ] },
        { id: 'apt501-u5-q3', kind: 'single', cognitive: 'recall',
          prompt: 'A meta-analysis reports I² = 80%. What does that mean?',
          options: [
            { id: 'apt501-u5-q3a', text: '80% of participants improved', correct: false, rationale: 'I² says nothing about individual responses.' },
            { id: 'apt501-u5-q3b', text: 'Most of the spread between study results appears to be real disagreement rather than chance', correct: true, rationale: 'Correct — high heterogeneity: the studies are answering differently.' },
            { id: 'apt501-u5-q3c', text: 'The pooled result has an 80% chance of being correct', correct: false, rationale: 'I² is about between-study variability, not the probability the answer is right.' },
          ] },
        { id: 'apt501-u5-q4', kind: 'multi', cognitive: 'application',
          prompt: 'Which findings should raise your suspicion of publication bias? (Select all that apply.)',
          explanation: 'Publication bias leaves fingerprints in what is missing: absent small null studies, unpublished registered trials, and inflated effects among the smallest studies. Interval width is a different property altogether.',
          options: [
            { id: 'apt501-u5-q4a', text: 'The funnel plot is missing its small-study corner on the null side', correct: true },
            { id: 'apt501-u5-q4b', text: 'Trial registries list completed studies on the question that never published results', correct: true },
            { id: 'apt501-u5-q4c', text: 'The smallest trials show the largest effects while the largest sit near zero', correct: true },
            { id: 'apt501-u5-q4d', text: 'The pooled confidence interval is narrow', correct: false, rationale: 'Precision tells you nothing about what never got published.' },
          ] },
        { id: 'apt501-u5-q5', kind: 'single', cognitive: 'analysis',
          prompt: 'Twenty trials with unblinded assessors and breakable randomisation are pooled, producing a narrow confidence interval. What does the narrow interval tell you?',
          options: [
            { id: 'apt501-u5-q5a', text: 'The effect is precisely estimated, which answers the bias concerns', correct: false, rationale: 'Precision and validity are different axes; pooling addresses only one.' },
            { id: 'apt501-u5-q5b', text: 'Random error is small — but the systematic bias in every trial pooled right along with the data, so this may be a precise estimate of a wrong answer', correct: true, rationale: 'Correct: garbage in, garbage out — with a tidy interval around the garbage.' },
            { id: 'apt501-u5-q5c', text: 'Nothing — confidence intervals are meaningless in meta-analysis', correct: false, rationale: 'The interval means exactly what it says about random error; it is silent about bias.' },
          ] },
        { id: 'apt501-u5-q6', kind: 'single', cognitive: 'analysis',
          prompt: 'Two respected bodies publish guidelines on aerobic training for the same population — and their recommendations differ. What is the most professionally useful reading of that disagreement?',
          options: [
            { id: 'apt501-u5-q6a', text: 'One of the panels must be incompetent or bought', correct: false, rationale: 'Honest panels split on borderline evidence; corruption is not the default explanation.' },
            { id: 'apt501-u5-q6b', text: 'Different questions, search dates, and judgement calls can honestly split panels — the disagreement maps where evidence is thin, so hold your own practice more lightly there', correct: true, rationale: 'Correct: guideline disagreement is information about uncertainty, not a scandal.' },
            { id: 'apt501-u5-q6c', text: 'Ignore both and follow the newest single trial instead', correct: false, rationale: 'One trial is the weakest possible tiebreaker between two syntheses.' },
          ] },
        { id: 'apt501-u5-q7', kind: 'single', cognitive: 'synthesis',
          prompt: 'A client asks whether she should switch to blood-flow-restriction training after seeing a transformation post. Which reading sequence best matches this unit?',
          explanation: 'Synthesis first, three stamps next, plot before abstract, and a client-specific decision at the end — that is the whole workflow in one sentence.',
          options: [
            { id: 'apt501-u5-q7a', text: 'Find the most recent systematic review or guideline, check its date, population, and outcomes against her, read the forest plot before the abstract, then decide what changes for her program', correct: true, rationale: 'Correct — the full routine, aimed at her rather than at the literature in general.' },
            { id: 'apt501-u5-q7b', text: 'Find the single most recent RCT, since the newest evidence supersedes older reviews', correct: false, rationale: 'Recency does not outrank synthesis; one trial is one row on the plot.' },
            { id: 'apt501-u5-q7c', text: 'Read the abstracts of the top five search results and go with the majority conclusion', correct: false, rationale: 'An abstract vote is a spin vote — abstracts are the most polished and least reliable part of a paper.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt501-u5-teach',
      title: 'Teach it back',
      prompt:
        'Your client Priya arrives rattled: her brother-in-law sent her a study — one randomised trial, twenty participants — “proving” that the moderate-intensity cardio in her program is a waste of time and only intervals work. She wants to scrap her plan. In plain, warm language, explain why one study contradicting her program isn’t the whole story, and what you’ll do about it.',
      modelAnswer:
        'I’m glad you sent this instead of quietly worrying about it — and I promise your program isn’t built on wishful thinking. Here’s the thing about a single study: it’s one row on a much bigger chart. Twenty people for a few weeks is a glimpse, and small glimpses swing hard on chance — run that exact study ten times and you’d get ten different answers. That’s not a flaw in science; it’s the reason scientists pool trials before changing their minds. And when researchers do pool the cardio trials, steady work and intervals both build fitness — the reviews and the major guidelines agree on that, and the gap between the two styles is tiny next to the gap between doing either one and doing neither. So one small trial pointing the other way doesn’t erase the pile; it joins it. Here’s what I’ll do: I’ll read it properly this week and check whether the people in it even resemble you — half the time they don’t. If the bigger picture ever genuinely shifts, your program shifts with it, and you’ll hear it from me first. Deal?',
      rubric: [
        { id: 'apt501-u5-t1', text: 'Explains why one small study cannot overturn a body of evidence, without dismissing research itself' },
        { id: 'apt501-u5-t2', text: 'Places the study accurately: one row in a larger synthesis, with reviews and guidelines carrying more weight' },
        { id: 'apt501-u5-t3', text: 'Checks applicability — whether the study’s population and protocol resemble the client' },
        { id: 'apt501-u5-t4', text: 'Ends with a concrete commitment, keeping the tone warm and the client’s confidence in the plan intact' },
      ],
    },

    // 12 ── cumulative review ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u5-cumulative', role: 'cumulative', title: 'Pulling it together',
      questions: [
        { id: 'apt501-u5-cu1', kind: 'single', cognitive: 'analysis',
          prompt: 'A systematic review of RCTs usually outranks any single RCT in the evidence hierarchy you met earlier. When does that ordering break down?',
          options: [
            { id: 'apt501-u5-cu1a', text: 'When the review pools trials that are biased, wildly heterogeneous, or aimed at a different population than yours — position in the hierarchy is a starting assumption, not a guarantee', correct: true, rationale: 'Correct: the hierarchy ranks designs on average; each individual paper still has to earn its rank.' },
            { id: 'apt501-u5-cu1b', text: 'Never — the hierarchy is fixed', correct: false, rationale: 'A pooled estimate built from weak or mismatched trials can be worth less than one strong, relevant trial.' },
            { id: 'apt501-u5-cu1c', text: 'Whenever the single RCT is newer than the review', correct: false, rationale: 'Recency alone does not outrank synthesis — the new trial becomes one more row for the next review.' },
          ] },
        { id: 'apt501-u5-cu2', kind: 'single', cognitive: 'application',
          prompt: 'A pooled result reads: mean difference +0.3 kg lean mass over 12 weeks, 95% CI 0.09 to 0.51, described as “significant”. Recalling what you learned about confidence intervals and effect sizes, what is the fair client-facing translation?',
          explanation: '“Significant” answered “is it distinguishable from zero?” — a different question from “is it big enough to care about?”. The interval answers both if you actually read it.',
          options: [
            { id: 'apt501-u5-cu2a', text: 'The effect is real but small — even the interval’s optimistic end is modest, so whether it matters depends on her goals', correct: true, rationale: 'Correct: statistically clear, practically small, decision left where it belongs — with the client’s context.' },
            { id: 'apt501-u5-cu2b', text: '“Significant” means the gains are large and reliable for her', correct: false, rationale: 'Statistical significance says distinguishable from zero, not big.' },
            { id: 'apt501-u5-cu2c', text: 'The result is meaningless because 0.3 kg is tiny', correct: false, rationale: 'Dismissing a real, precisely estimated effect is as sloppy as inflating it — small and real is exactly what she deserves to hear.' },
          ] },
        { id: 'apt501-u5-cu3', kind: 'single', cognitive: 'analysis',
          prompt: 'A meta-analysis pools fifteen observational cohort studies linking a supplement to longer life. Thinking back to confounding: what has the pooling fixed?',
          explanation: 'People who buy supplements also exercise more, smoke less, and see doctors sooner. That healthy-user pattern sits inside every cohort, so it sits inside the pool too — with a narrower interval around it.',
          options: [
            { id: 'apt501-u5-cu3a', text: 'Only the random error — the healthy-user confounding lives inside every cohort and pools right along with them', correct: true, rationale: 'Correct: pooling narrows intervals; it cannot randomise anyone after the fact.' },
            { id: 'apt501-u5-cu3b', text: 'Both chance and confounding, since the combined sample is now enormous', correct: false, rationale: 'Sample size shrinks chance, never confounding — a bigger biased sample is just more confidently biased.' },
            { id: 'apt501-u5-cu3c', text: 'It has upgraded the evidence to randomised-trial level', correct: false, rationale: 'Design does not change by aggregation; fifteen cohorts pooled are still observational.' },
          ] },
      ],
    },
  ],
};
