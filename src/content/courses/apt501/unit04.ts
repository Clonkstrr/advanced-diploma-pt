import type { Unit } from '../../../types/content';

export const unit04: Unit = {
  id: 'apt501-u4',
  code: 'APT 501.3',
  title: 'Statistics That Change Decisions',
  summary:
    'How to read means, intervals, p-values, effect sizes, and risk claims so that a number changes your coaching only when it deserves to.',
  qc: {
    sources: [
      { citation: 'Cohen, J. — Statistical Power Analysis for the Behavioral Sciences, 2nd ed. (Lawrence Erlbaum)', year: 1988, evidenceType: 'Textbook', verified: false },
      { citation: 'Wasserstein, R. L. & Lazar, N. A. — "The ASA’s Statement on p-Values: Context, Process, and Purpose", The American Statistician 70(2)', year: 2016, evidenceType: 'Position statement', verified: false },
      { citation: 'Vincent, W. J. & Weir, J. P. — Statistics in Kinesiology, 4th ed. (Human Kinetics)', year: 2012, evidenceType: 'Textbook', verified: false },
      { citation: 'Greenhalgh, T. — How to Read a Paper: The Basics of Evidence-Based Medicine (BMJ Books / Wiley)', evidenceType: 'Textbook', verified: false },
      { citation: 'Hopkins, W. G., Marshall, S. W., Batterham, A. M. & Hanin, J. — "Progressive statistics for studies in sports medicine and exercise science", Medicine & Science in Sports & Exercise 41(1)', year: 2009, evidenceType: 'Methods review', verified: false },
      { citation: 'Amrhein, V., Greenland, S. & McShane, B. — "Scientists rise up against statistical significance", Nature 567', year: 2019, evidenceType: 'Commentary', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-08-03',
    reviewBy: '2027-08-03',
    controversies:
      'Significance testing itself is contested: the ASA’s 2016 statement warned against bright-line p < 0.05 reasoning, and a widely co-signed 2019 Nature comment argued for retiring the phrase “statistically significant” entirely, while others defend thresholds as practical error control. There is no agreed replacement. Smallest-worthwhile-change and MCID values also differ by estimation method (anchor-based vs distribution-based), and how to identify true “responders” to training remains an open methods debate.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u4-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt501-u4-p1', kind: 'single', cognitive: 'recall',
          prompt: 'A study reports p = 0.04 for a supplement’s effect on strength. What does that number actually mean?',
          options: [
            { id: 'a', text: 'There is a 96% chance the supplement works', correct: false, rationale: 'That flips the logic. A p-value cannot tell you the probability that an effect is real.' },
            { id: 'b', text: 'If the supplement truly did nothing, results at least this extreme would occur about 4% of the time', correct: true, rationale: 'Correct — p is computed in an imaginary world where the effect is zero, and describes how surprising the data would be there.' },
            { id: 'c', text: 'The effect is large enough to matter for your clients', correct: false, rationale: 'A p-value says nothing about size or importance — only about compatibility with “no effect”.' },
          ] },
        { id: 'apt501-u4-p2', kind: 'single', cognitive: 'application',
          prompt: '“New warm-up protocol cuts injury risk by 50%!” What must you know before this changes your coaching?',
          options: [
            { id: 'a', text: 'The absolute risk — 50% of what, falling to what?', correct: true, rationale: 'A relative change is a multiplier with no units. Halving 10 in 100 and halving 2 in 1,000 are different worlds.' },
            { id: 'b', text: 'Nothing more — halving risk is halving risk', correct: false, rationale: 'Without the base rate you cannot tell whether the halving prevents one injury per 20 people or per 2,000.' },
            { id: 'c', text: 'Whether the study’s authors are certified trainers', correct: false, rationale: 'Credentials of the authors are not what decides whether a risk claim is meaningful.' },
          ] },
        { id: 'apt501-u4-p3', kind: 'single', cognitive: 'analysis',
          prompt: 'A trial reports a mean strength gain of +3 kg with a 95% confidence interval of −1 to +7 kg. What is the best conclusion?',
          options: [
            { id: 'a', text: 'The program doesn’t work — the interval includes zero', correct: false, rationale: 'An interval that includes zero means “no effect” is still plausible, not proven.' },
            { id: 'b', text: 'The data are consistent with anything from a trivial loss to a solid gain — the study is too small to decide', correct: true, rationale: 'Correct — read both ends. They lead to different decisions, so this study alone cannot settle the question.' },
            { id: 'c', text: 'The true effect is +3 kg', correct: false, rationale: 'The point estimate is one sample’s best guess, not the truth. The interval shows how loose that guess is.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt501-u4-outcomes',
      outcomes: [
        { level: 'recall', text: 'Define standard deviation, standard error, confidence interval, p-value, Cohen’s d, and absolute versus relative risk — and state what each one does and does not tell you.' },
        { level: 'application', text: 'Given a study result (mean difference, confidence interval, p-value), read it correctly and decide whether it should change a client’s programming.' },
        { level: 'analysis', text: 'Spot statistical spin — relative-risk headlines, “trending toward significance”, responder subgroups, significant-but-trivial effects — and name the specific move being made.' },
        { level: 'synthesis', text: 'Rebuild a scary or seductive claim in absolute terms (risk difference, number needed to treat, effect size against a smallest worthwhile change) and explain it to a client in plain language.' },
      ],
    },

    // 3 ── core instruction (five concept blocks) ────────────────────────────
    {
      type: 'concept', id: 'apt501-u4-c1', heading: 'A mean describes a crowd, not your client',
      body:
        'Picture the study behind a headline like “program adds 5 kg to your squat in ten weeks”. Twenty people trained, everyone got tested, and the gains were averaged. That average — the mean — is the group’s centre of gravity, and the standard deviation (SD) is the typical distance people sat from it. If the mean gain was 5 kg with an SD of 4 kg, then roughly two-thirds of participants landed somewhere between 1 and 9 kg (assuming the results were roughly bell-shaped), and a few gained almost nothing or even went backwards. Nobody is obliged to be average. The mean is what happened to the group divided by the headcount; it is a description of a crowd, not a promise to the individual in front of you.\n\nWhy do individuals scatter like that? Some of it is real: genetics, sleep, stress, training history, how faithfully each person actually did the program. But a surprising amount is not about the person at all. Strength tests wobble from day to day — the same lifter, tested twice in a week on an unchanged program, will not post identical numbers. So any one client’s observed change is really three things stacked together: the true effect of the program, the biology of that particular week, and plain measurement noise.\n\nThat stack is why “responder” and “non-responder” labels need more evidence than they usually get. It is tempting to test a client before and after a block, see +1 kg, and conclude the program “doesn’t work for her”. But a single pre-and-post pair cannot separate her true response from a bad testing day. Making that claim honestly requires repeated measurements over time — or, in research, comparing the spread of changes in the training group against the spread in a control group, because a control group that trained on nothing still shows a spread of “responses” built entirely from noise. If the trained group’s spread is no wider than the control group’s, the dramatic “individual differences” may be mostly measurement error wearing a costume.\n\nThe practical takeaway is modest and useful. Group means tell you where to start — they are the best available prior for an untested client. Whether it is working for this client is a different question, answered by tracking her over weeks, retesting, and looking at the trend rather than any single reading. You are always running a statistics-of-one experiment; run it with enough data points to mean something.',
    },
    {
      type: 'concept', id: 'apt501-u4-c2', heading: 'Why small studies bounce: sampling variability and standard error',
      body:
        'Run the same ten-week program in five different gyms with fifteen people each, and you will get five different mean gains — say 3.1, 6.4, 4.8, 2.2, and 7.0 kg. Nobody lied and nothing changed about the program. Each study simply drew a different handful of people from the great barrel of possible participants, and small handfuls are lumpy. This is sampling variability, and it is the single most under-appreciated fact in fitness research: any one study is one draw, not the truth.\n\nStatisticians quantify the lumpiness with the standard error (SE): how much the group mean itself would wobble if you re-drew the sample again and again. The formula is friendly: SE = SD ÷ √n. If individual gains spread with an SD of 4 kg, a study of 16 people has a standard error of 4 ÷ 4 = 1 kg, while a study of 100 people has 4 ÷ 10 = 0.4 kg. Notice the square root — it is the cruel part. To cut the wobble in half you need four times as many people, which is why precision is so expensive and why so much of the fitness literature, built on samples of ten or twenty, jumps around from paper to paper.\n\nKeep SD and SE firmly separate in your head, because figures blur them constantly. The standard deviation describes people — how much individuals differ from each other. The standard error describes an estimate — how precisely the study pinned down the mean. A bar chart with tiny error bars might be showing SE, which makes the human variation look far smaller than it is. When a graph looks suspiciously tidy, check the caption.\n\nThere is one more trap worth naming. When a very small study reports a very large effect, the honest reading is usually not “wow” but “of course”. Small samples swing wide in both directions, and the swings that reach a journal or a headline are the flattering ones — studies that happened to swing low are quietly unimpressive and often unpublished. A single small study is weather. You are interested in climate.',
    },
    {
      type: 'concept', id: 'apt501-u4-c3', heading: 'Confidence intervals: read both ends',
      body:
        'A confidence interval takes the honest wobble from the last section and draws it on the page. When a paper reports a mean difference of +2.5 kg with a 95% CI of −0.5 to +5.5 kg, it is saying: given this data and the method’s assumptions, the effect sizes reasonably compatible with what we observed run from −0.5 all the way to +5.5. Mechanically, a 95% interval is roughly the estimate plus or minus two standard errors — which is why big, consistent studies produce narrow intervals and small, noisy ones produce barn doors.\n\nNow the fine print, because it matters and almost everyone gets it wrong. The “95%” describes the method, not this particular interval. If you ran endless studies and built an interval this way each time, about 95% of those intervals would capture the true value. Any single interval either contains the truth or it doesn’t — you just can’t know which kind you’re holding, so strictly speaking you don’t get to say “there’s a 95% chance the true value is in here”. Statisticians argue about how much this distinction matters in practice; for your purposes, the working translation — “the range of effect sizes the data can’t rule out” — will not lead you astray.\n\nThe skill that changes decisions is simple: read both ends of the interval as if each were the truth, and ask what you would do. Take that +2.5 kg with a CI of −0.5 to +5.5. If the truth were −0.5, the program did nothing — perhaps a shade worse than nothing. If the truth were +5.5, it is clearly worth having. The study cannot tell those two worlds apart, so the study is inconclusive — which is not the same as “the program doesn’t work”. Contrast an interval of +3.5 to +7.5: now even the most pessimistic end is a gain you would take, and the result deserves to change your coaching.\n\nWidth is information. A wide interval says “we still know little”; a narrow one says “we measured carefully with enough people”. And notice the two ways an interval can sit near zero. Crossing zero means no effect remains plausible — absence of evidence, not evidence of absence. But a narrow interval hugging zero is a genuinely informative null: it doesn’t just fail to find an effect, it rules out any effect big enough to care about. Both ends, always. That habit alone puts you ahead of most abstract-skimmers.',
    },
    {
      type: 'concept', id: 'apt501-u4-c4', heading: 'What a p-value actually says',
      body:
        'Every p-value is born from a thought experiment. Assume the boring hypothesis — the program does nothing, the supplement is inert, the two groups differ only by luck. In that imaginary world, how often would chance alone produce a difference at least as large as the one observed? That frequency is the p-value. If p = 0.03, then in the no-effect world, data this extreme would turn up about 3% of the time. That is the entire content of the number: one conditional probability, computed under an assumption of nothing.\n\nHold on to what it is not. It is not the probability that the null is true. It is not “a 97% chance the effect is real”. And the popular phrasing “only a 3% probability the result was due to chance” quietly commits the same crime, because it turns a statement about data-given-no-effect into a statement about hypotheses-given-data. The two directions are as different as “if she’s a competitive powerlifter, she probably deadlifts” and “if she deadlifts, she’s probably a competitive powerlifter”. Flipping a conditional feels natural and is completely wrong.\n\nThen there is the threshold. Nothing in nature changes between p = 0.051 and p = 0.049; the 0.05 line is a convention that hardened out of early twentieth-century practice — useful as a shared filter, meaningless as a truth detector. The American Statistical Association said this in plain words in 2016: scientific conclusions should not be based on whether a p-value crosses an arbitrary line. And significance is silent about size — with enough participants, a difference too small for any client to notice will still earn an impressively tiny p.\n\nOnce you hold the real definition, the spin becomes easy to spot. “The result showed a trend toward significance (p = 0.07)” treats the p-value as if it were travelling somewhere and just needed more time; it isn’t on a journey, it is a fixed summary of this data. The honest sentence for p = 0.07 is usually “the data are compatible with no effect and also with a real one — here is the confidence interval”. Be suspicious, too, of a study that measured twenty outcomes and celebrates the one with p < 0.05: test twenty true nothings and you expect one “significant” fluke by arithmetic alone. Cherry-picked endpoints are that arithmetic, dressed up as a discovery.',
    },
    {
      type: 'concept', id: 'apt501-u4-c5', heading: 'How big, and does it matter? Effect sizes and risk numbers',
      body:
        'Statistical significance answers one narrow question — can we distinguish this from zero? — and coaching runs on a different one: is this worth my client’s Tuesday? To answer the second, you need a yardstick for “meaningful”. Clinicians call it the minimal clinically important difference (MCID): the smallest change a patient would actually notice and value. Sport scientists talk about the smallest worthwhile change. Neither is a law of nature — different estimation methods give different values, and a change that is trivial for a beginner can be career-altering for a competitor — but even a rough, honest yardstick transforms how you read results, because it gives the confidence interval something to be compared against.\n\nEffect sizes exist to make magnitudes comparable across studies that used different tests and units. The workhorse is Cohen’s d: the difference between group means divided by the standard deviation. A d of 0.5 means the groups differ by half a typical person-to-person spread. Cohen’s famous anchors — 0.2 small, 0.5 medium, 0.8 large — are useful shorthand, and Cohen himself offered them reluctantly, as conventions for when you know nothing better about your field. Context overrules them. In highly trained athletes, where everyone is close together and contests are decided by fractions, a d of 0.2 on strength or speed can decide who medals — which is exactly why some sport scientists define the smallest worthwhile change as 0.2 of the between-athlete standard deviation. Small on the label is not small on the podium.\n\nRisk claims deserve their own arithmetic, because they are where headlines do the most damage. “50% higher risk” is a multiplier: take the base rate and multiply by 1.5. If the base risk of some injury is 2 in 1,000 per year, a 50% increase moves it to 3 in 1,000. The relative jump — fifty percent! — sounds alarming. The absolute change is one extra case per 1,000 person-years, and the number needed to harm is 1,000: a thousand people doing the scary thing for a year to produce one additional case. Same data, two costumes.\n\nThe benefit direction works identically. “Cuts risk in half” on a base of 10 in 100 takes you to 5 in 100 — an absolute reduction of 5 percentage points, and 1 ÷ 0.05 gives a number needed to treat of 20. Twenty people follow the program for one prevented event; genuinely useful. The same “half” on a base of 2 in 1,000 takes you to 1 in 1,000 — NNT 1,000, a rounding error in a training decision. Relative numbers are dimensionless; the meaning lives entirely in the absolute ones. The reflex to build: from what, to what, and how many people per event?\n\nMarketing knows all of this, which is why it runs the same plays on repeat: relative risks for both scares and miracle cures; error bars showing SE so the spread looks tidy; “responders” showcased while the full sample stays in a drawer; the one significant endpoint out of twenty on the label; “clinically proven” stapled to an effect that is real, precisely measured, and too small for anyone to feel. Your whole defence is two questions asked calmly: how big is this in absolute terms, and how does it compare to the smallest change that would matter here? Most claims do not survive both.',
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt501-u4-visual',
      title: 'Three studies, one chart, three different verdicts',
      diagramId: 'confidence-interval-plot',
      caption: 'Point estimates with 95% confidence intervals, read against a zero line and the shaded band of changes too small to matter.',
      callouts: [
        { id: 'apt501-u4-v1', label: '1', text: 'The zero line: an interval crossing it means “no effect” is still on the table — not that no effect has been proven.' },
        { id: 'apt501-u4-v2', label: '2', text: 'The shaded band marks effects too small to matter. It comes from your smallest worthwhile change — a coaching judgment — not from any statistic. Real-but-irrelevant lives here.' },
        { id: 'apt501-u4-v3', label: '3', text: 'Study A: the entire interval clears the band, so even the most cautious end is worth having. This is what a decision-changing result looks like.' },
        { id: 'apt501-u4-v4', label: '4', text: 'Study B: a narrow interval hugging zero, inside the band — an informative null. It doesn’t just fail to find an effect; it rules out a worthwhile one.' },
        { id: 'apt501-u4-v5', label: '5', text: 'Study C: the interval excludes zero, so p < 0.05 — yet the whole thing sits inside the band. Statistically significant and practically trivial at the same time.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt501-u4-worked',
      title: 'Reading one result, start to finish',
      scenario:
        'A colleague forwards a study with the subject line “velocity-based training wins!”. You pull the paper: twenty-four trained lifters, ten weeks, twelve per group. The result: mean difference in squat 1RM gain of +2.5 kg favouring velocity-based over percentage-based loading, 95% CI −0.5 to +5.5 kg, p = 0.12. Your client — a trained lifter — asks whether you should switch her programming.',
      steps: [
        { id: 'apt501-u4-w1', title: 'Say the point estimate in plain words',
          reasoning: 'The single best guess from this data: velocity-based training added about 2.5 kg more over ten weeks. That is a best guess from one small sample — twelve people per group — not the truth. Write it down and hold it loosely.' },
        { id: 'apt501-u4-w2', title: 'Read the left end of the interval as if it were the truth',
          reasoning: 'If the true difference were −0.5 kg, the fancier method did nothing — a shade worse than the standard approach, and nothing a lifter would ever feel. The data are fully compatible with that world.' },
        { id: 'apt501-u4-w3', title: 'Read the right end the same way',
          reasoning: 'If the truth were +5.5 kg over ten weeks, that is a real, wanted edge for a trained lifter. The data are equally compatible with this world. One study, two very different worlds, no way to choose between them from this result alone.' },
        { id: 'apt501-u4-w4', title: 'Put the p-value in its place',
          reasoning: 'p = 0.12 means: if the methods were truly identical, a difference at least this large would show up about 12% of the time. It does not prove the methods are equal — it reflects a small study that cannot tell “nothing” apart from “something worthwhile”. “VBT doesn’t work — p was 0.12” over-reads this study exactly as badly as “VBT wins” does.' },
        { id: 'apt501-u4-w5', title: 'Bring in the yardstick, then decide',
          reasoning: 'Suppose you judge that anything under about 2 kg per block is not worth reorganizing her training around. The interval runs from below that bar to well above it, so the study cannot settle the question. The decision writes itself: no overhaul on this evidence. If velocity work is cheap to try — she has the equipment, she enjoys the feedback — run it as a low-cost experiment and watch her own numbers. Her trend line will eventually out-argue this paper either way.' },
      ],
      takeaway:
        'One small study whose interval spans “nothing” to “worthwhile” settles nothing — and that itself is actionable: no overhaul, low-cost experiments only, monitor the individual. Notice what did the work: the two ends of the interval and the smallest change that matters. The p-value never entered the decision.',
    },

    // 6 ── numeric lab ───────────────────────────────────────────────────────
    {
      type: 'numericLab', id: 'apt501-u4-lab',
      title: 'Lab: strip a headline to its absolute numbers',
      brief:
        '“TEAM-WIDE PREVENTION PROGRAM SLASHES HAMSTRING INJURIES BY 50%!” Behind the headline sits a season-long trial. Control clubs: 20 hamstring injuries among 200 players. Program clubs: 10 injuries among 200 players. Work out what the headline actually means for one player. Enter percentages as plain numbers (e.g. 12.5 for 12.5%).',
      fields: [
        { id: 'apt501-u4-f1', label: 'Risk of hamstring injury in the control group', unit: '%', answer: 10, tolerance: 0.1 },
        { id: 'apt501-u4-f2', label: 'Risk of hamstring injury in the program group', unit: '%', answer: 5, tolerance: 0.1 },
        { id: 'apt501-u4-f3', label: 'Relative risk reduction', unit: '%', answer: 50, tolerance: 1 },
        { id: 'apt501-u4-f4', label: 'Absolute risk reduction', unit: 'percentage points', answer: 5, tolerance: 0.1 },
        { id: 'apt501-u4-f5', label: 'Number needed to treat (players completing the program to prevent one injury)', unit: 'players', answer: 20, tolerance: 0.5 },
      ],
      solution:
        'Control risk: 20 injuries among 200 players is 20 ÷ 200 = 0.10, so 10%. Program risk: 10 ÷ 200 = 0.05, so 5%.\n\nThe relative risk reduction compares the drop to the starting point: (10 − 5) ÷ 10 = 0.50, so 50% — the headline is arithmetically honest. The absolute risk reduction is the plain difference: 10% − 5% = 5 percentage points.\n\nThe number needed to treat converts that into people: NNT = 1 ÷ absolute risk reduction as a proportion = 1 ÷ 0.05 = 20. Twenty players complete the program for one prevented hamstring injury over a season — for a cheap exercise program, genuinely worth doing.\n\nNow see why the absolute numbers had to be checked. The identical headline — “slashes injuries by 50%!” — would also be true if risk fell from 0.2% to 0.1%: an absolute reduction of 0.1 percentage points and an NNT of 1 ÷ 0.001 = 1,000. Same relative claim, one-fiftieth of the benefit. The relative number is the costume; the absolute risk reduction and NNT are the body underneath. Always undress the claim.',
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt501-u4-case',
      title: 'Case: the headline that followed her to the gym',
      brief:
        'Priya, 34, two years into training with you, arrives holding her phone: “Deadlifts double your risk of back injury — that’s what this article says. I want them out of my program.” Walk the conversation; every decision is scored against best practice.',
      startNodeId: 'apt501-u4-n1',
      nodes: [
        {
          id: 'apt501-u4-n1',
          situation:
            'Priya is genuinely rattled. The article is from a major news site and quotes a real study. She is waiting for your reaction.',
          choices: [
            { id: 'apt501-u4-n1a', text: 'Take it seriously: agree to look at the numbers behind the headline together before changing anything', to: 'apt501-u4-n2',
              quality: 'best', feedback: 'Exactly right. You neither obeyed the headline nor dismissed her — you moved the conversation from the scary sentence to the actual numbers.' },
            { id: 'apt501-u4-n1b', text: '“Headlines always exaggerate — ignore it, deadlifts are fine.”', to: 'apt501-u4-n3',
              quality: 'poor', feedback: 'Often true, but you’ve asked her to pick your authority over her fear without showing her anything. Unanswered worry doesn’t leave; it trains next to you.' },
            { id: 'apt501-u4-n1c', text: 'Pull deadlifts from her program — client comfort comes first', to: null,
              quality: 'poor', feedback: 'That isn’t client-centred, it’s conflict avoidance. If she still prefers alternatives after seeing the numbers, honouring that is an informed choice — this one wasn’t. You also just taught her that any headline can rewrite her program.' },
          ],
        },
        {
          id: 'apt501-u4-n2',
          situation:
            'You find the study behind the article. It followed gym members over several years: back injuries occurred at 2 per 1,000 training-years among people who didn’t deadlift and 4 per 1,000 among people who did. That’s the “doubled”. It is observational — people chose their own training.',
          choices: [
            { id: 'apt501-u4-n2a', text: 'Show her both framings — “doubled” and “from 2 in 1,000 to 4 in 1,000, two extra injuries per thousand years of training” — then explain why self-selected groups muddy cause and effect', to: 'apt501-u4-n4',
              quality: 'best', feedback: 'Both the arithmetic and the design caveat, in plain words. She now owns the tool, not just today’s answer.' },
            { id: 'apt501-u4-n2b', text: 'Lead with “it’s only 4 in 1,000 — tiny” and move on', to: 'apt501-u4-n4',
              quality: 'acceptable', feedback: 'The absolute framing is the right medicine, but skipping the design point arms her against this headline only — and “tiny, moving on” can sound like you’re waving away something that felt big to her.' },
            { id: 'apt501-u4-n2c', text: '“It’s observational garbage — proves nothing, forget it.”', to: 'apt501-u4-n3',
              quality: 'poor', feedback: 'Observational studies are weaker for cause, not worthless — and wholesale dismissal is spin in the opposite direction. She can hear the motivated reasoning, and it costs you credibility you’ll want later.' },
          ],
        },
        {
          id: 'apt501-u4-n3',
          situation:
            'Next session, Priya is still uneasy. “My sister says her physio told her deadlifts wreck your back. Maybe I should just stick to machines.”',
          choices: [
            { id: 'apt501-u4-n3a', text: '“Fair enough — let’s actually look at what that article’s study found. Give me two minutes with the numbers.”', to: 'apt501-u4-n2',
              quality: 'best', feedback: 'The right recovery. Anxiety that never got an answer doesn’t fade — it recruits allies. The numbers conversation you skipped is still the way through.' },
            { id: 'apt501-u4-n3b', text: '“Machines it is, then.”', to: null,
              quality: 'poor', feedback: 'A headline and a second-hand anecdote just redesigned your programming. If a deadlift alternative genuinely suits her goals better, choose it for that reason and say so — this was surrender, not judgment.' },
          ],
        },
        {
          id: 'apt501-u4-n4',
          situation:
            'Priya follows the arithmetic, nods slowly, then asks the honest question: “So is the risk real or not?”',
          choices: [
            { id: 'apt501-u4-n4a', text: 'Be straight: this kind of study can’t prove deadlifts caused anything, and even taken at face value the absolute risk is small; you’ll keep coaching her technique and progression, and adjust the moment anything ever hurts', to: null,
              quality: 'best', feedback: 'Honest on both counts — no zero-risk promise, no scare. She leaves with real numbers, unproven cause named as unproven, and a plan she can feel in every session.' },
            { id: 'apt501-u4-n4b', text: 'Offer a trap-bar deadlift for a few weeks while her confidence rebuilds, alongside the honest risk summary', to: null,
              quality: 'acceptable', feedback: 'Legitimate coaching — as long as you say out loud that the swap is for her comfort, not a concession that conventional deadlifts are dangerous. Left unsaid, the swap quietly confirms the headline.' },
            { id: 'apt501-u4-n4c', text: '“There’s zero risk if your form is good — I guarantee it.”', to: null,
              quality: 'poor', feedback: 'Nothing in training carries zero risk, and she will remember the guarantee the first time her back twinges. Overselling safety is the same sin as the headline — a certainty the data cannot support.' },
          ],
        },
      ],
    },

    // 8 ── error identification ──────────────────────────────────────────────
    {
      type: 'errorId', id: 'apt501-u4-errorid',
      title: 'Audit this supplement blog’s study write-up',
      brief:
        'A supplement company’s blog summarizes a trial of its product. Flag every statistically illegitimate statement; leave legitimate reporting unflagged.',
      document:
        '“A new randomized trial has confirmed what we’ve been saying all along: Supplement X works. Lifters taking X gained more lean mass than the placebo group (p = 0.04) — in other words, there’s a 96% chance the effect is real. X also halved the risk of training-related joint pain. Among the responders — the lifters X worked best for — gains were nearly double the average. Strength improved too, and although that result didn’t reach significance (p = 0.07), it was clearly trending toward it. With 18 dedicated participants completing the full protocol, the findings are definitive. Bottom line: the lean-mass effect was statistically significant, so you can expect serious gains.”',
      findings: [
        { id: 'apt501-u4-e1', text: '“there’s a 96% chance the effect is real” (from p = 0.04)', isError: true,
          rationale: 'The inverse-probability fallacy. p = 0.04 is the probability of data this extreme if X did nothing — it cannot be flipped into the probability that X works.' },
        { id: 'apt501-u4-e2', text: '“X also halved the risk of training-related joint pain”', isError: true,
          rationale: 'A relative claim with no base rate. Halving 20-in-100 and halving 2-in-1,000 are wildly different benefits; without absolute numbers this sentence carries no usable information.' },
        { id: 'apt501-u4-e3', text: '“Among the responders … gains were nearly double the average”', isError: true,
          rationale: 'Selecting the best outcomes after the fact guarantees an impressive number — noise alone creates “responders” on a single pre-post measure. The full sample is the result; the subgroup is a spotlight.' },
        { id: 'apt501-u4-e4', text: '“didn’t reach significance (p = 0.07) … clearly trending toward it”', isError: true,
          rationale: 'p-values are not on a journey. p = 0.07 is a fixed summary of this data; the honest report is the confidence interval, which likely spans no effect through a real one.' },
        { id: 'apt501-u4-e5', text: '“With 18 dedicated participants … the findings are definitive”', isError: true,
          rationale: 'Eighteen people means a large standard error and results that would bounce on a re-run. “Definitive” and n = 18 cannot share a sentence.' },
        { id: 'apt501-u4-e6', text: '“statistically significant, so you can expect serious gains”', isError: true,
          rationale: 'Significance means distinguishable from zero, not big. “Serious gains” needs the effect size read against a meaningful yardstick — which the post never provides.' },
        { id: 'apt501-u4-e7', text: '“A new randomized trial”', isError: false,
          rationale: 'If the trial genuinely randomized participants, that is a real design strength worth reporting — randomization is what separates fair comparisons from self-selected ones.' },
        { id: 'apt501-u4-e8', text: '“Lifters taking X gained more lean mass than the placebo group (p = 0.04)”', isError: false,
          rationale: 'Reporting the comparison against placebo and the exact p-value is legitimate. The sins begin with the interpretations bolted onto it.' },
      ],
    },

    // 9 ── active-recall set ─────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt501-u4-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'apt501-u4-r1', front: 'Standard deviation vs standard error — what does each describe?',
          back: 'SD describes people: how much individuals spread around the mean. SE describes the estimate: how much the group mean itself would wobble across repeated samples. Tiny error bars are often SE — check the caption.' },
        { id: 'apt501-u4-r2', front: 'Formula and behaviour of the standard error?',
          back: 'SE = SD ÷ √n. Because of the square root, halving the wobble takes four times the participants — precision is expensive, which is why small studies bounce.' },
        { id: 'apt501-u4-r3', front: 'The correct practical reading of a 95% confidence interval?',
          back: 'The range of effect sizes reasonably compatible with the data under the method’s assumptions. The “95%” is the method’s long-run capture rate, not a 95% probability for this one interval. Read both ends.' },
        { id: 'apt501-u4-r4', front: 'Define the p-value in one sentence.',
          back: 'The probability of results at least this extreme if the null (no effect) were true — a statement about data given no-effect, nothing more.' },
        { id: 'apt501-u4-r5', front: 'Three things a p-value is NOT?',
          back: 'Not the probability the null is true; not the probability the effect is real; not a measure of the effect’s size or importance.' },
        { id: 'apt501-u4-r6', front: 'Cohen’s d — formula and anchors?',
          back: 'Mean difference ÷ standard deviation. Conventional anchors: 0.2 small, 0.5 medium, 0.8 large — but context rules; d = 0.2 on strength in trained athletes can decide competitions.' },
        { id: 'apt501-u4-r7', front: 'What is the smallest worthwhile change (or MCID)?',
          back: 'The smallest change the client would actually notice and value — a coaching/clinical judgment, estimated imperfectly. It is the yardstick you hold confidence intervals and effect sizes against; no p-value can supply it.' },
        { id: 'apt501-u4-r8', front: 'Convert it: “50% higher risk” on a base rate of 2 in 1,000.',
          back: '2 × 1.5 = 3 in 1,000. Absolute increase: 1 per 1,000 — about a thousand people exposed for one extra case. A relative number means nothing until you know the base rate.' },
        { id: 'apt501-u4-r9', front: 'Number needed to treat — formula and meaning?',
          back: 'NNT = 1 ÷ absolute risk reduction (as a proportion). An ARR of 5 percentage points gives NNT = 1 ÷ 0.05 = 20: twenty people follow the program to prevent one event.' },
        { id: 'apt501-u4-r10', front: 'What’s wrong with “a trend toward significance”?',
          back: 'It pretends the p-value is travelling and just needs time. p = 0.07 is a finished summary of this data; the honest reading is the confidence interval — usually “compatible with nothing and with something real”.' },
      ],
    },

    // 10 ── unit quiz ────────────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u4-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'apt501-u4-q1', kind: 'single', cognitive: 'recall',
          prompt: 'Which statement correctly defines a p-value?',
          explanation: 'The p-value conditions on the null being true. It describes data in that imaginary world; it cannot be flipped into a probability about hypotheses.',
          options: [
            { id: 'a', text: 'The probability that the null hypothesis is true, given the data', correct: false, rationale: 'That is the flipped conditional — exactly what a p-value is not.' },
            { id: 'b', text: 'If the true effect were zero, the probability of data at least this extreme', correct: true, rationale: 'Correct — one conditional probability, computed under the assumption of no effect.' },
            { id: 'c', text: 'The probability that the result happened by chance', correct: false, rationale: 'Sounds close, but it is a statement about hypotheses given data — the same flip, in friendlier clothes.' },
          ] },
        { id: 'apt501-u4-q2', kind: 'single', cognitive: 'application',
          prompt: 'A program shows a mean 1RM difference of +4 kg, 95% CI +1 to +7 kg, p = 0.01. Your client’s smallest worthwhile change for a block is 5 kg. Best reading?',
          explanation: 'The interval excludes zero, so an effect is likely — but its size runs from trivial (1 kg) to clearly worthwhile (7 kg). Significance answers “is it real?”, never “does it clear my client’s bar?”.',
          options: [
            { id: 'a', text: 'It’s significant, so switch programs', correct: false, rationale: 'Significance says distinguishable from zero — it does not say the effect clears her 5 kg yardstick.' },
            { id: 'b', text: 'Probably a real effect, but its size is uncertain — the data are compatible with a trivial 1 kg and a clearly worthwhile 7 kg, so weigh the cost of switching', correct: true, rationale: 'Correct — both ends read, yardstick applied, decision framed as a trade-off.' },
            { id: 'c', text: 'p = 0.01 means the effect is 4 kg with 99% certainty', correct: false, rationale: 'The p-value is not a certainty rating for the point estimate.' },
          ] },
        { id: 'apt501-u4-q3', kind: 'single', cognitive: 'application',
          prompt: 'Change scores have SD 8 kg. With 16 participants the standard error of the mean is 2 kg. Roughly how many participants for an SE of 1 kg?',
          explanation: 'SE = SD ÷ √n. To halve SE you need √n to double, so n must quadruple: 16 → 64 (8 ÷ √64 = 1).',
          options: [
            { id: 'a', text: '24', correct: false, rationale: 'Adding 50% more people barely dents the square root.' },
            { id: 'b', text: '32', correct: false, rationale: 'Doubling n only shrinks SE by √2 — to about 1.4 kg, not 1.' },
            { id: 'c', text: '64', correct: true, rationale: 'Correct: halving the standard error costs four times the sample.' },
          ] },
        { id: 'apt501-u4-q4', kind: 'single', cognitive: 'analysis',
          prompt: 'A paper writes: “The improvement did not reach significance (p = 0.07) but showed a clear trend toward significance.” What exactly is wrong?',
          explanation: 'A p-value is a fixed summary of the observed data, not a traveller approaching a destination — and 0.05 is a convention, not a cliff edge.',
          options: [
            { id: 'a', text: 'Nothing — 0.07 is close enough to 0.05', correct: false, rationale: '“Close” concedes the threshold is arbitrary while still worshipping it.' },
            { id: 'b', text: 'It treats p as if it were in motion toward a magic line; the honest report is the confidence interval, which shows which effect sizes remain compatible', correct: true, rationale: 'Correct — the phrase is spin; the CI is the information.' },
            { id: 'c', text: 'The phrase is fine as long as the sample was small', correct: false, rationale: 'A small sample explains a wide interval; it does not license narrating p-values as a journey.' },
          ] },
        { id: 'apt501-u4-q5', kind: 'multi', cognitive: 'analysis',
          prompt: 'Which claims should trigger your “in absolute terms — from what, to what?” reflex? (Select all that apply.)',
          explanation: 'Every relative (percentage-change) risk claim is unreadable without its base rate. A plain mean with an SD is already absolute.',
          options: [
            { id: 'a', text: '“Doubles the risk of tendon injury”', correct: true, rationale: 'Double of what? 1-in-10,000 doubling is a different conversation from 1-in-50 doubling.' },
            { id: 'b', text: '“Cuts cold risk by 40%”', correct: true, rationale: 'A relative reduction — meaningless until you know the starting risk.' },
            { id: 'c', text: '“Members lost an average of 4.2 kg (SD 3.1) in 12 weeks”', correct: false, rationale: 'Already in absolute units, with spread reported. Other questions apply, but not this reflex.' },
            { id: 'd', text: '“Halves dropout from training programs”', correct: true, rationale: 'Another relative claim wearing a helpful face — base rate required.' },
          ] },
        { id: 'apt501-u4-q6', kind: 'single', cognitive: 'application',
          prompt: 'A recovery product claims “40% lower risk of missing training through illness”. Base risk: 5 in 100 athletes per winter. What is the risk with the product?',
          explanation: 'A 40% relative reduction multiplies the base rate by 0.6: 5 × 0.6 = 3 in 100. The absolute reduction is 2 percentage points — NNT = 1 ÷ 0.02 = 50 athletes per prevented absence.',
          options: [
            { id: 'a', text: '3 in 100', correct: true, rationale: 'Correct: 5 × 0.6 = 3. Two fewer cases per hundred athletes — now judge whether that is worth the price.' },
            { id: 'b', text: '1 in 100', correct: false, rationale: 'That would be an 80% reduction. The claim was 40%.' },
            { id: 'c', text: '4.6 in 100', correct: false, rationale: 'That subtracts 0.4 from 5 — mixing up “40% lower” with “lower by 0.4”.' },
          ] },
        { id: 'apt501-u4-q7', kind: 'single', cognitive: 'recall',
          prompt: 'A study reports Cohen’s d = 0.5 between training methods. What does that mean?',
          explanation: 'd expresses the mean difference in units of standard deviation. The 0.2 / 0.5 / 0.8 anchors are conventions — in trained athletes even d = 0.2 can matter.',
          options: [
            { id: 'a', text: 'The group means differ by half a standard deviation', correct: true, rationale: 'Correct — a “medium” effect by convention, but context sets what actually matters.' },
            { id: 'b', text: 'The program worked for half the participants', correct: false, rationale: 'd says nothing about how many individuals responded.' },
            { id: 'c', text: 'There is a 50% chance the effect is real', correct: false, rationale: 'd is a size measure, not a probability of anything.' },
          ] },
        { id: 'apt501-u4-q8', kind: 'single', cognitive: 'synthesis',
          prompt: 'A 400-person trial in trained lifters: a new bench accessory protocol beat the standard one by +0.7 kg over 8 weeks, 95% CI +0.2 to +1.2 kg, p = 0.006. Your client read “statistically proven” and wants to switch. Your best response?',
          explanation: 'Large samples detect small effects with precision. Here the entire interval sits below any sensible smallest worthwhile change — the effect is real, well measured, and too small to reorganize training around.',
          options: [
            { id: 'a', text: '“It’s proven — we’ll switch your programming this week.”', correct: false, rationale: '“Proven” here means distinguishable from zero, not worth the disruption.' },
            { id: 'b', text: '“With 400 people, even tiny effects earn tiny p-values. The whole interval — 0.2 to 1.2 kg over 8 weeks — sits under anything you’d feel. Real, precisely measured, and not worth rebuilding your program for.”', correct: true, rationale: 'Correct — significance acknowledged, size read against a yardstick, decision explained in her terms.' },
            { id: 'c', text: '“The study must be flawed — effects that small can’t be detected reliably.”', correct: false, rationale: 'Backwards: detecting small effects reliably is precisely what large samples do.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt501-u4-teach',
      title: 'Teach it back',
      prompt:
        'A long-term client, Dana, messages you: “I just read that women who lift heavy have a 50% higher risk of pelvic floor problems. Should I stop? I’m really worried.” The study behind the headline reports risk rising from 2 in 1,000 per year to 3 in 1,000. In plain, warm language, explain what “50% higher” actually means for her — without dismissing the study or her worry.',
      modelAnswer:
        'That headline would have worried me too, so let’s look at what the number actually says. “50% higher” is a multiplier, not a count — it means “take the starting risk and add half of it”. The study’s starting risk was 2 women in 1,000 per year. Add half of that and you get 3 in 1,000. So the headline, translated: out of a thousand women lifting for a year, the study saw about one additional case — 997 of them unaffected instead of 998. One extra case per thousand woman-years. That’s the whole “50%”. I won’t tell you the risk is zero — it isn’t, and studies like this also can’t fully prove lifting caused the difference, since women who lift differ in lots of ways from women who don’t. Here’s what I’d suggest: we keep coaching your breathing and bracing like we already do, you tell me straight away if you ever notice symptoms, and you decide with the real numbers — 3 in 1,000 versus 2 in 1,000 — rather than with the headline. Whatever you choose with those numbers in hand, I’m behind it.',
      rubric: [
        { id: 'apt501-u4-t1', text: 'Translates the relative figure into absolute numbers: 2 in 1,000 rising to 3 in 1,000 — one extra case per 1,000 woman-years' },
        { id: 'apt501-u4-t2', text: 'Explains that a relative increase is unreadable without its base rate' },
        { id: 'apt501-u4-t3', text: 'Stays honest — no zero-risk promise, no ridiculing the study or the client’s worry, notes that observational data can’t settle cause' },
        { id: 'apt501-u4-t4', text: 'Ends with a collaborative plan: monitor, keep coaching relevant technique, client decides with real numbers' },
        { id: 'apt501-u4-t5', text: 'Uses plain, warm language a non-statistician can follow' },
      ],
    },

    // 12 ── cumulative review ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u4-cumulative', role: 'cumulative', title: 'Pulling it together',
      questions: [
        { id: 'apt501-u4-cu1', kind: 'single', cognitive: 'analysis',
          prompt: 'A large survey finds that people doing high-intensity mixed-modal training have twice the injury rate of machine-circuit users. Why can’t you conclude the training style caused the difference?',
          explanation: 'When people choose their own groups, the groups differ in more than the treatment — that is confounding, and random assignment is the design tool that removes it.',
          options: [
            { id: 'a', text: 'People chose their own training — the groups likely differ in intensity appetite, training history, and hours of exposure, and only random assignment untangles that', correct: true, rationale: 'Correct: self-selection means the comparison is between different kinds of people, not just different programs.' },
            { id: 'b', text: 'Because the result wasn’t statistically significant', correct: false, rationale: 'Nothing says it wasn’t — and significance would not fix self-selection anyway.' },
            { id: 'c', text: 'Because injury can’t be measured objectively', correct: false, rationale: 'Measurement quality matters, but the core problem here is who ended up in which group.' },
          ] },
        { id: 'apt501-u4-cu2', kind: 'single', cognitive: 'application',
          prompt: 'An observational study behind a “doubles injury risk” headline shows risk moving from 3 to 6 per 1,000 training-years. Which client-facing summary is most honest?',
          explanation: 'Honest communication carries both the absolute size (3 extra per 1,000 training-years) and the design limit (self-selected groups, cause unproven) — without dismissing the study.',
          options: [
            { id: 'a', text: '“Twice the risk — we should avoid it.”', correct: false, rationale: 'The relative frame alone, doing exactly what the headline did.' },
            { id: 'b', text: '“About 3 extra injuries per 1,000 training-years, in a study where people picked their own training — small in absolute terms and cause unproven. We’ll keep coaching form and progression and adjust if anything ever hurts.”', correct: true, rationale: 'Correct: absolute numbers, design caveat, and a plan — all three, no spin in either direction.' },
            { id: 'c', text: '“It’s observational, so it tells us nothing at all.”', correct: false, rationale: 'Over-dismissal is spin too. Observational evidence is weaker for cause, not empty.' },
          ] },
        { id: 'apt501-u4-cu3', kind: 'multi', cognitive: 'synthesis',
          prompt: 'Which features together mark a result you would actually reprogram a client around? (Select all that apply.)',
          explanation: 'Decision-grade evidence combines fair group assignment, an interval that clears your meaningfulness yardstick at both ends, and an outcome that was the study’s stated target rather than a lucky survivor of many.',
          options: [
            { id: 'a', text: 'Participants were randomly assigned to groups', correct: true, rationale: 'Randomization makes the comparison about the program instead of about who chose it.' },
            { id: 'b', text: 'The entire confidence interval clears your smallest worthwhile change', correct: true, rationale: 'Then even the cautious end of the estimate is worth having — the CI habit paying off.' },
            { id: 'c', text: 'p = 0.049 rather than p = 0.051', correct: false, rationale: 'A hair’s width across a conventional line changes nothing about the evidence.' },
            { id: 'd', text: 'The outcome was the study’s stated primary endpoint, not one of twenty explored', correct: true, rationale: 'Pre-stated endpoints protect you from the one-in-twenty fluke that cherry-picking sells as a discovery.' },
          ] },
      ],
    },
  ],
};
