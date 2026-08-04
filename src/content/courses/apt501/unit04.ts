import type { Unit } from '../../../types/content';

export const unit04: Unit = {
  id: 'apt501-u4',
  code: 'APT 501.3',
  title: 'Statistics That Change Decisions',
  summary:
    'How to read means, spread, confidence intervals, p-values, effect sizes and risk claims, so that a number changes your coaching only when it has earned the right to.',
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
      'Significance testing itself is contested. The ASA’s 2016 statement warned against bright-line p < 0.05 reasoning, and a widely co-signed 2019 Nature comment argued for retiring the phrase “statistically significant” entirely, while others defend thresholds as practical error control. There is no agreed replacement. Smallest-worthwhile-change and MCID values also differ by estimation method (anchor-based versus distribution-based), and how to identify true “responders” to training remains an open methods debate.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u4-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt501-u4-p1', kind: 'single', cognitive: 'recall',
          prompt: 'A study reports p = 0.04 for a supplement’s effect on strength. What does that number actually mean?',
          options: [
            { id: 'a', text: 'There is a 96% chance the supplement works', correct: false, rationale: 'That flips the logic round. A p-value cannot tell you the probability that an effect is real.' },
            { id: 'b', text: 'If the supplement truly did nothing, results at least this extreme would occur about 4% of the time', correct: true, rationale: 'Correct. The p-value is worked out inside an imaginary world where the effect is exactly zero, and it describes how surprising the data would look there.' },
            { id: 'c', text: 'The effect is large enough to matter for your clients', correct: false, rationale: 'A p-value says nothing about how big an effect is or whether it matters. It only reports how well the data fit “no effect”.' },
          ] },
        { id: 'apt501-u4-p2', kind: 'single', cognitive: 'application',
          prompt: '“New warm-up protocol cuts injury risk by 50%!” What must you know before this changes your coaching?',
          options: [
            { id: 'a', text: 'The absolute risk: 50% of what, falling to what?', correct: true, rationale: 'A relative change is a multiplier with no units. Halving 10 in 100 and halving 2 in 1,000 are different worlds.' },
            { id: 'b', text: 'Nothing more. Halving risk is halving risk', correct: false, rationale: 'Without the base rate you cannot tell whether the halving prevents one injury per 20 people or per 2,000.' },
            { id: 'c', text: 'Whether the study’s authors are certified trainers', correct: false, rationale: 'The credentials of the authors are not what decides whether a risk claim is meaningful.' },
          ] },
        { id: 'apt501-u4-p3', kind: 'single', cognitive: 'analysis',
          prompt: 'A trial reports a mean strength gain of +3 kg with a 95% confidence interval of −1 to +7 kg. What is the best conclusion?',
          options: [
            { id: 'a', text: 'The program doesn’t work, because the interval includes zero', correct: false, rationale: 'An interval that includes zero means “no effect” is still plausible. It has not been proven.' },
            { id: 'b', text: 'The data are consistent with anything from a trivial loss to a solid gain, so the study is too small to decide', correct: true, rationale: 'Correct. Read both ends. They lead to different decisions, so this study on its own cannot settle the question.' },
            { id: 'c', text: 'The true effect is +3 kg', correct: false, rationale: 'The point estimate is one sample’s best guess, not the truth. The interval shows how loose that guess is.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt501-u4-outcomes',
      outcomes: [
        { level: 'recall', text: 'Define standard deviation, standard error, confidence interval, p-value, Cohen’s d, and absolute versus relative risk. State what each one does and does not tell you.' },
        { level: 'application', text: 'Given a study result (mean difference, confidence interval, p-value), read it correctly and decide whether it should change a client’s programming.' },
        { level: 'analysis', text: 'Spot statistical spin such as relative-risk headlines, “trending toward significance”, responder subgroups and effects that are significant but trivial, then name the move being made.' },
        { level: 'synthesis', text: 'Rebuild a scary or seductive claim in absolute terms (risk difference, number needed to treat, effect size against a smallest worthwhile change) and explain it to a client in plain language.' },
      ],
    },

    // 3 ── core instruction (five concept blocks, visuals interleaved) ───────
    {
      type: 'concept', id: 'apt501-u4-c1', heading: 'A mean describes a crowd, not your client',
      body:
        'Kemi sends you a link at eleven at night. The headline says a ten-week program adds 5 kg to your squat, and she wants to know whether that is what she is going to get. Start with where the 5 kg came from. Twenty people trained, everyone was tested before and after, the gains were added up and divided by twenty. That is the whole recipe, and it explains both what the number is good for and what it cannot promise her.\n\n' +

        '## What an average hides\n\n' +

        'The 5 kg is the **mean**, the centre of gravity of that group. On its own it says nothing about how tightly people sat around the centre. The number that does say is the **standard deviation** (SD): the typical distance between one person and the mean. Suppose the mean gain was 5 kg with an SD of 4 kg, and the results were roughly bell shaped. Then about two thirds of the group finished somewhere between 1 and 9 kg. A few gained almost nothing. One or two probably went backwards. Nobody in that study was under any obligation to be average, and neither is Kemi. A mean printed with no spread beside it has described the middle of a crowd while hiding the size of it, which is why a bare average in an advertisement should read to you as an unfinished sentence.\n\n' +

        '## Three things stacked in one number\n\n' +

        'Why do people scatter like that? Some of the scatter is real: genetics, sleep, stress, training history, and how faithfully each person actually ran the program. A surprising share of it has nothing to do with the person at all. Strength tests wobble. Take the same lifter, test her twice in one week with nothing changed in between, and she will not post identical numbers. Grip, warm-up, caffeine, the bar she used and who was watching all move the result by a kilo or two. That wobble is **measurement error**, and it does not politely cancel out inside one person’s result. So any single client’s before-and-after change is three things stacked on top of each other: the true effect of the program, the biology of that particular fortnight, and the noise of the test itself. The number on the sheet is the total. Nothing about it labels the parts.\n\n' +

        '## The word “responder”, handed out too fast\n\n' +

        'That stack is why you should be slow with the words **responder** and non-responder. It is tempting to test Kemi in week one, retest her in week ten, see +1 kg and decide the program does not work for her. One pair of numbers cannot separate a genuinely poor response from a flat testing day. Research meets the same problem and has a way through it: compare the spread of change scores in the training group against the spread of change scores in a **control group**. People who trained on nothing still produce a range of apparent responses, built entirely out of biology and measurement error. If the trained group’s spread is no wider than the control group’s, the dramatic individual differences in that paper are mostly noise in a costume. Real differences in response do exist. Proving one in a particular person takes more than two data points.\n\n' +

        '> Key idea: one before-and-after pair cannot tell a real response apart from a bad testing day, and only repeated measurements over weeks can.\n\n' +

        'So what is a group mean actually good for? It is the best starting guess you have for a client you have never trained. It tells you what to program on Monday and roughly what to expect on average. Whether it is working for this client is a different question needing a different method: retest on the same equipment at the same time of day, more than once, and read the trend rather than any single point. You are running a study with one participant, and you get to choose how many measurements it has. Two is a rumour. Six across twelve weeks is evidence.',
    },
    {
      type: 'concept', id: 'apt501-u4-c2', heading: 'Why small studies bounce: sampling variability and standard error',
      body:
        'Five gyms run the same ten-week program, fifteen people in each. The mean gains come back as 3.1, 6.4, 4.8, 2.2 and 7.0 kg. Nobody cheated and nothing changed about the program. Each gym simply pulled a different handful of people out of the enormous barrel of everyone who might have volunteered, and small handfuls are lumpy. This is **sampling variability**, and it may be the most under-rated fact in fitness research, because it means any single study is one draw from the barrel rather than the truth about the barrel.\n\n' +

        '## The wobble has a formula\n\n' +

        'Statisticians measure that lumpiness with the **standard error** (SE): how far the group mean itself would jump around if you kept re-drawing samples of the same size. The formula is friendly. SE = SD ÷ √n. Say individual ten-week changes spread with an SD of 8 kg. A study of 16 people then has a standard error of 8 ÷ 4 = 2 kg. Take it to 64 people and the standard error halves to 8 ÷ 8 = 1 kg. Take it to 256 and it halves again to 0.5 kg. Look at what that cost. Halving the wobble took four times the participants, twice over. That square root is why **precision**, meaning how tightly a study has pinned its number down, is so expensive, and why a literature built on samples of twelve and twenty jumps around from paper to paper. It is also why a well-funded trial can look boring. It bought a narrow answer instead of an exciting one.\n\n' +

        '## SD is about people, SE is about the estimate\n\n' +

        'Keep those two apart, because figures blur them constantly and a great deal of misreading starts right here. The standard deviation describes people: how far individuals sit from one another. The standard error describes an estimate: how precisely this study measured the group mean. They answer different questions and they are rarely the same size, because SE shrinks as the study grows and SD does not. A bar chart with tiny error bars may well be plotting SE, which makes human variation look far smaller than it is. When a graph looks suspiciously tidy, read the caption and find out which one is drawn. If the caption does not say, that is information too.\n\n' +

        '## Why small and spectacular travel together\n\n' +

        'There is one more trap, and it is the one that fills your feed. When a very small study reports a very large effect, the useful reaction is not “wow” but “of course”. Small samples swing wide in both directions by arithmetic, so some land far above the truth and some far below it. Then a filter is applied. The flattering swings get written up, press-released and shared. The disappointing ones get a shrug and a drawer. That filter is **publication bias**, and it means the small studies you actually see are a biased sample of the small studies that were actually run. None of this makes small studies worthless. It makes any one of them weather rather than climate, and it explains why an effect so often shrinks as bigger trials arrive. Expecting that shrinkage in advance is what stops you being disappointed by it.\n\n' +

        '> Key idea: one study is a single draw from a lumpy barrel, so read it as weather and save your conclusions for the climate.',
    },
    {
      type: 'visual', id: 'apt501-u4-visual-precision',
      title: 'What sample size buys you',
      diagramId: 'stats-sample-size-precision',
      caption: 'The spread of people set against the spread of the estimate, and the same +3 kg result as reported by studies of 16, 64 and 256 participants.',
      callouts: [
        { id: 'apt501-u4-vp1', label: '1', text: 'The top row is people. Sixteen lifters, a standard deviation of 8 kg, and outcomes running from going backwards to gaining eighteen. That is what SD describes, and it does not shrink when the study gets bigger.' },
        { id: 'apt501-u4-vp2', label: '2', text: 'The bottom row is estimates. Re-run the same 16-person study over and over and its mean lands in a much tighter cluster, standard error 2 kg. Same centre, a quarter of the width, and a completely different question answered.' },
        { id: 'apt501-u4-vp3', label: '3', text: 'With 16 people the 95% interval runs from −1 to +7 kg. The two ends point to different decisions, so the study settles nothing. This is what a large share of fitness research looks like.' },
        { id: 'apt501-u4-vp4', label: '4', text: 'With 256 people it runs +2 to +4 kg. Sixteen times the participants bought four times the precision, which is the square root at work, and only now is the number tight enough to hold against a yardstick.' },
      ],
    },
    {
      type: 'concept', id: 'apt501-u4-c3', heading: 'Confidence intervals: read both ends',
      body:
        'A paper reports that a new program beat the usual one by 2.5 kg on the squat, with a 95% confidence interval of −0.5 to +5.5 kg. Most readers take the 2.5 and move on. The 2.5 is the least informative part of that sentence.\n\n' +

        '## The range the data cannot rule out\n\n' +

        'The 2.5 kg is the **point estimate**: the single best guess this sample can produce. The pair of numbers after it is the **confidence interval** (CI), and it is the honest wobble from the last section drawn on the page. Read it as the range of true effects that would not look strange sitting next to the data collected, given the study’s assumptions. Mechanically a 95% interval is roughly the estimate plus or minus two standard errors, which ties it straight back to sample size: large, consistent studies produce narrow intervals and small noisy ones produce barn doors. **Interval width** is therefore information in its own right. A wide interval is a study announcing in public that it did not learn much. A narrow one says it measured carefully with enough people. You can judge that before you read a word of the discussion section.\n\n' +

        '## What the 95% is actually counting\n\n' +

        'Now the fine print, because nearly everyone gets this wrong and you are about to not. The 95% describes the method, not this one interval. If you ran study after study and built an interval this way each time, about 95% of those intervals would contain the true value. Any single interval either contains it or it does not, and you cannot tell which kind you are holding. So the tempting sentence, “there is a 95% chance the true value is in here”, is not what the number means. Statisticians argue about how much that distinction matters in day-to-day reading. For your purposes the safe working translation is the one above: the range of effects the data cannot rule out. It keeps you honest and it still does everything you need on a gym floor.\n\n' +

        '## Read both ends, then decide\n\n' +

        'Here is the habit that changes decisions. Take each end of the interval in turn, pretend it is the truth, and ask what you would do. With +2.5 kg and a CI of −0.5 to +5.5: if the truth were −0.5, the new program did nothing at all, perhaps a shade worse than nothing. If the truth were +5.5, it is clearly worth having. The study cannot tell those two worlds apart, so the study is inconclusive, which is a very different statement from “the program does not work”. Now change the interval to +3.5 to +7.5 and run the same test. The most pessimistic end is still a gain you would take. That result has earned the right to change your coaching.\n\n' +

        'Notice, finally, the two ways an interval can sit near zero. One crosses it and is wide, which means no effect is still on the table alongside plenty of other possibilities. The other is narrow and hugs zero, and that is an **informative null**: it does not merely fail to find an effect, it rules out any effect big enough to care about. Same neighbourhood on the page, opposite messages for your Monday.\n\n' +

        '> Key idea: read both ends of the interval as if each were true, and if they point to different decisions, the study has not settled anything.',
    },
    {
      type: 'concept', id: 'apt501-u4-c4', heading: 'What a p-value actually says',
      body:
        'A supplement page tells you its trial reached p = 0.04 and treats that as the end of the argument. It is not even the start of one. To read the number you have to know which question it answers, and the question is stranger than most people expect.\n\n' +

        '## The imaginary world it comes from\n\n' +

        'Every p-value begins with an assumption you do not believe: that there is no effect at all. The program does nothing, the supplement is inert, the two groups differ only by luck of the draw. That assumption is the **null hypothesis**, and everything else is computed inside it. The question then asked is this. In that no-effect world, how often would chance alone hand us a difference at least as big as the one we actually saw? The answer is the **p-value**. If p = 0.03, then in the no-effect world data this extreme turn up about 3 times in 100. That is the entire content of the number: one conditional probability, calculated in a world where nothing is going on, describing how surprising your data would look there.\n\n' +

        '> Key idea: a p-value says how surprising this data would be if the effect were exactly zero, and says nothing about whether the effect is real or how big it is.\n\n' +

        '## The flip that gets it wrong\n\n' +

        'Because of that, the popular readings are not slightly loose. They are backwards. p = 0.04 is not a 96% chance the supplement works. It is not the probability that the null is true. And “only a 4% probability the result was down to chance” commits the same error in friendlier clothes, because it converts a statement about data-given-no-effect into a statement about hypotheses-given-data. Those two directions come apart hard. “If she competes in powerlifting, she probably deadlifts” is close to certain. “If she deadlifts, she probably competes in powerlifting” is close to false. Same two facts, reversed, completely different answer. Flipping a conditional feels natural, which is exactly why this mistake survives in print.\n\n' +

        '## The line, and the spin it invites\n\n' +

        'Nothing in nature changes between p = 0.051 and p = 0.049. The 0.05 line is a convention that hardened out of early twentieth-century practice: useful as a shared filter, useless as a truth detector. The American Statistical Association said so in plain words in 2016. Scientific conclusions should not be based on whether a p-value crosses an arbitrary threshold. **Statistical significance** is also silent about size. Recruit enough people and a difference far too small for any client to feel will still earn an impressively tiny p.\n\n' +

        'Once you hold the real definition, three moves become easy to spot. First, “a trend toward significance (p = 0.07)” pretends the p-value is travelling somewhere and merely needs more time. It is a finished summary of the data in hand, and the honest report is the confidence interval. Second, a study that measured twenty outcomes and celebrates the one that came in under 0.05 has usually just met arithmetic: test twenty true nothings at that line and about one comes back significant. That is **multiple testing**, and the defence is to ask which outcome the researchers named in advance. Third, “not significant” gets retold as “no effect”, when a small study can easily fail to detect something well worth having.',
    },
    {
      type: 'visual', id: 'apt501-u4-visual-pvalue',
      title: 'The imaginary world a p-value lives in',
      diagramId: 'stats-p-value-null-world',
      caption: 'The spread of differences luck alone would produce if the program did nothing, with the observed result marked and the tails beyond it shaded.',
      callouts: [
        { id: 'apt501-u4-vq1', label: '1', text: 'Everything in this curve is imaginary. It is built by assuming the program does nothing, and it shows how often luck alone would hand you each size of difference.' },
        { id: 'apt501-u4-vq2', label: '2', text: 'The shaded tails are the p-value. p = 0.03 means about 3 results in 100 sit at least this far from zero in that no-effect world. That is the whole number, and it is a statement about data rather than about the program.' },
        { id: 'apt501-u4-vq3', label: '3', text: 'Read the two boxes in order. A p-value gives the chance of this data if there were no effect. Almost every misquote swaps them round and reports the chance of no effect given the data, which is a different quantity entirely.' },
        { id: 'apt501-u4-vq4', label: '4', text: 'Twenty outcomes measured, none of them real, and about one still comes back under 0.05. Ask which outcome the researchers named before they collected anything.' },
      ],
    },
    {
      type: 'concept', id: 'apt501-u4-c5', heading: 'How big, and does it matter? Effect sizes and risk numbers',
      body:
        'Significance answers one narrow question: can we tell this apart from zero? Coaching runs on a different one: is this worth your client’s Tuesday evening? Nothing inside a p-value can answer the second, so you need a separate tool for it.\n\n' +

        '## A yardstick for “worth it”\n\n' +

        'Clinicians call that tool the **minimal clinically important difference** (MCID): the smallest change a patient would actually notice and value. Sport scientists use the **smallest worthwhile change** for the same idea. Neither is a law of nature. The two common ways of estimating them, asking people whether they feel better (anchor-based) and taking a fraction of the measured spread (distribution-based), return different values, and the same change can be trivial for a beginner and career-altering for a competitor. Even a rough yardstick transforms how you read a result, because it finally gives the confidence interval something to be measured against. Write yours down before you look at the numbers. Deciding what would count as worthwhile after seeing the effect is how everybody talks themselves into buying something.\n\n' +

        '## Effect size: how big, in units of spread\n\n' +

        'Studies use different tests and different units, so raw differences will not compare across them. Effect sizes fix that. The workhorse is **Cohen’s d**: the difference between two group means divided by the standard deviation. A d of 0.5 means the groups sit half a typical person-to-person spread apart. Cohen’s anchors of 0.2 small, 0.5 medium and 0.8 large are useful shorthand, and he offered them reluctantly, as a fallback for people who knew nothing better about their own field. Your field often does know better. In trained athletes, where everyone is bunched together and races are decided by fractions, a d of 0.2 in strength or speed can decide who medals, which is why some sport scientists set the smallest worthwhile change at 0.2 of the between-athlete standard deviation. Small on the label is not small on the podium. It runs the other way too: a large d in untrained beginners can simply mean that everybody improved from a very low bar.\n\n' +

        '## Relative numbers wear a costume\n\n' +

        'Risk claims need their own arithmetic, because that is where headlines do the most damage. “50% higher risk” is a **relative risk**: a multiplier applied to whatever the starting rate happened to be. If the base rate of an injury is 2 in 1,000 per year, adding 50% takes it to 3 in 1,000. The relative jump sounds alarming. The **absolute risk** change is one extra case per 1,000 people per year, so a thousand people would have to do the scary thing for a year to produce a single extra case. Same data, two costumes.\n\n' +

        'The benefit direction behaves identically. Cutting risk in half from a base of 10 in 100 lands at 5 in 100, an absolute reduction of 5 percentage points. Turn that into people with the **number needed to treat**, which is 1 divided by the absolute reduction expressed as a proportion. Here 1 ÷ 0.05 = 20, so twenty people follow the program to prevent one event. Genuinely useful. The identical “half” on a base of 2 in 1,000 gives an absolute reduction of 0.1 percentage points and a number needed to treat of 1,000, which is a rounding error in any training decision. The relative figure was the same in both worlds and told you nothing about either.\n\n' +

        '> Key idea: a relative number has no units and no meaning until you know the base rate it is multiplying, so ask from what, to what, and how many people per event.\n\n' +

        'Marketing knows all of this, which is why the same handful of plays keeps running: relative risks for the scares and the miracle cures alike, error bars drawn as SE so the spread looks tidy, a responder subgroup on the poster while the full sample stays in a drawer, one significant outcome out of twenty on the label, and “clinically proven” stapled to an effect that is real, precisely measured and far too small for anyone to feel. Two calm questions dismantle most of it. How big is this in absolute terms? And how does it compare with the smallest change that would matter to the person in front of me?',
    },
    {
      type: 'visual', id: 'apt501-u4-visual-risk',
      title: 'The same 50% in two different worlds',
      diagramId: 'stats-relative-vs-absolute',
      caption: 'One relative claim applied to two base rates, drawn on a single shared scale, with the difference counted in people underneath.',
      callouts: [
        { id: 'apt501-u4-vr1', label: '1', text: 'One headline sits over both panels. A relative claim is a multiplier, so it can be perfectly true in both worlds while meaning something completely different in each.' },
        { id: 'apt501-u4-vr2', label: '2', text: 'World A: 10 in 100 falls to 5 in 100. That is an absolute reduction of 5 percentage points, and 1 ÷ 0.05 gives a number needed to treat of 20. Worth doing.' },
        { id: 'apt501-u4-vr3', label: '3', text: 'World B: 2 in 1,000 falls to 1 in 1,000, drawn at the same scale, which is why you can barely see it. The number needed to treat is 1,000 and the headline is word for word the same.' },
        { id: 'apt501-u4-vr4', label: '4', text: 'Counted in people, the two worlds are one row of twenty against fifty of those rows. The reflex to build is three questions: from what, to what, and how many people per event?' },
      ],
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt501-u4-visual',
      title: 'Three studies, one chart, three different verdicts',
      diagramId: 'confidence-interval-plot',
      caption: 'Point estimates with 95% confidence intervals, read against a zero line and the shaded band of changes too small to matter.',
      callouts: [
        { id: 'apt501-u4-v1', label: '1', text: 'The zero line. An interval that crosses it means “no effect” is still on the table. It does not mean no effect has been proven.' },
        { id: 'apt501-u4-v2', label: '2', text: 'The shaded band marks effects too small to matter. It comes from your smallest worthwhile change, which is a coaching judgment rather than a statistic. Real but irrelevant lives in here.' },
        { id: 'apt501-u4-v3', label: '3', text: 'Study A: the entire interval clears the band, so even the most cautious end is worth having. This is what a decision-changing result looks like.' },
        { id: 'apt501-u4-v4', label: '4', text: 'Study B: a narrow interval hugging zero, sitting inside the band. This is an informative null. It does not merely fail to find an effect, it rules out a worthwhile one.' },
        { id: 'apt501-u4-v5', label: '5', text: 'Study C: the interval excludes zero, so p is under 0.05, and yet the whole thing sits inside the band. Statistically significant and practically trivial at the same time.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt501-u4-worked',
      title: 'Reading one result, start to finish',
      scenario:
        'A colleague forwards a study with the subject line “velocity-based training wins!”. You pull the paper. Twenty-four trained lifters, ten weeks, twelve per group. The result: a mean difference in squat 1RM gain of +2.5 kg favouring velocity-based loading over percentage-based loading, 95% CI −0.5 to +5.5 kg, p = 0.12. Your client Elena, a trained lifter, asks whether the two of you should switch her programming.',
      steps: [
        { id: 'apt501-u4-w1', title: 'Say the point estimate in plain words',
          reasoning: 'The single best guess this data can give: velocity-based training added about 2.5 kg more over ten weeks. It came from twelve people per group, so treat it as a guess rather than the truth. Write it down and hold it loosely.' },
        { id: 'apt501-u4-w2', title: 'Read the left end of the interval as if it were the truth',
          reasoning: 'If the true difference were −0.5 kg, the fancier method did nothing. A shade worse than the standard approach, in fact, and nothing Elena would ever feel. The data are fully compatible with that world.' },
        { id: 'apt501-u4-w3', title: 'Read the right end the same way',
          reasoning: 'If the truth were +5.5 kg over ten weeks, that is a real edge and a trained lifter would want it. The data are equally compatible with this world. One study, two very different worlds, and no way to choose between them from this result alone.' },
        { id: 'apt501-u4-w4', title: 'Put the p-value in its place',
          reasoning: 'p = 0.12 means that if the two methods were truly identical, a difference at least this large would turn up about 12 times in 100. It does not prove the methods are equal. It reflects a small study that cannot tell “nothing” apart from “something worthwhile”. Saying “velocity work does not do anything, p was 0.12” over-reads this paper exactly as badly as “velocity training wins” does.' },
        { id: 'apt501-u4-w5', title: 'Bring in the yardstick, then decide',
          reasoning: 'Suppose you judge that anything under about 2 kg per block is not worth reorganising her training around. The interval runs from below that bar to well above it, so the study cannot settle the question. The decision then writes itself: no overhaul on this evidence. If velocity work is cheap to try, and she has the equipment and enjoys the feedback, run it as a low-cost experiment and watch her own numbers. Her trend line will out-argue this paper either way.' },
      ],
      takeaway:
        'One small study whose interval spans “nothing” through to “worthwhile” settles nothing, and that is itself actionable: no overhaul, low-cost experiments only, monitor the individual. Notice what did the work. The two ends of the interval, and the smallest change that would matter. The p-value never entered the decision.',
    },

    // 6 ── numeric lab ───────────────────────────────────────────────────────
    {
      type: 'numericLab', id: 'apt501-u4-lab',
      title: 'Lab: strip a headline to its absolute numbers',
      brief:
        '“TEAM-WIDE PREVENTION PROGRAM SLASHES HAMSTRING INJURIES BY 50%!” Behind the headline sits a season-long trial. Control clubs: 20 hamstring injuries among 200 players. Program clubs: 10 injuries among 200 players. Work out what the headline actually means for one player. Enter percentages as plain numbers (for example, 12.5 for 12.5%).',
      fields: [
        { id: 'apt501-u4-f1', label: 'Risk of hamstring injury in the control group', unit: '%', answer: 10, tolerance: 0.1 },
        { id: 'apt501-u4-f2', label: 'Risk of hamstring injury in the program group', unit: '%', answer: 5, tolerance: 0.1 },
        { id: 'apt501-u4-f3', label: 'Relative risk reduction', unit: '%', answer: 50, tolerance: 1 },
        { id: 'apt501-u4-f4', label: 'Absolute risk reduction', unit: 'percentage points', answer: 5, tolerance: 0.1 },
        { id: 'apt501-u4-f5', label: 'Number needed to treat (players completing the program to prevent one injury)', unit: 'players', answer: 20, tolerance: 0.5 },
      ],
      solution:
        'Control risk: 20 injuries among 200 players is 20 ÷ 200 = 0.10, so 10%. Program risk: 10 ÷ 200 = 0.05, so 5%.\n\nThe relative risk reduction compares the drop with the starting point: (10 − 5) ÷ 10 = 0.50, so 50%. The headline is arithmetically honest. The absolute risk reduction is the plain difference: 10% − 5% = 5 percentage points.\n\nThe number needed to treat turns that into people. NNT = 1 ÷ absolute risk reduction as a proportion = 1 ÷ 0.05 = 20. Twenty players complete the program for one prevented hamstring injury across a season. For a cheap exercise program, that is genuinely worth doing.\n\nNow see why the absolute numbers had to be checked. The identical headline, “slashes injuries by 50%”, would also be true if risk fell from 0.2% to 0.1%: an absolute reduction of 0.1 percentage points and an NNT of 1 ÷ 0.001 = 1,000. Same relative claim, one fiftieth of the benefit. The relative number is the costume. The absolute risk reduction and the NNT are the body underneath. Always undress the claim.',
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt501-u4-case',
      title: 'Case: the headline that followed her to the gym',
      brief:
        'Priya, 34, two years into training with you, arrives holding her phone: “Deadlifts double your risk of back injury. That is what this article says. I want them out of my program.” Walk the conversation. Every decision is scored against best practice.',
      startNodeId: 'apt501-u4-n1',
      nodes: [
        {
          id: 'apt501-u4-n1',
          situation:
            'Priya is genuinely rattled. The article is from a major news site and quotes a real study. She is waiting for your reaction.',
          choices: [
            { id: 'apt501-u4-n1a', text: 'Take it seriously: agree to look at the numbers behind the headline together before changing anything', to: 'apt501-u4-n2',
              quality: 'best', feedback: 'Exactly right. You neither obeyed the headline nor dismissed her. You moved the conversation off the scary sentence and onto the actual numbers.' },
            { id: 'apt501-u4-n1b', text: '“Headlines always exaggerate. Ignore it, deadlifts are fine.”', to: 'apt501-u4-n3',
              quality: 'poor', feedback: 'Often true, but you have asked her to pick your authority over her fear without showing her anything. Unanswered worry does not leave. It trains next to you.' },
            { id: 'apt501-u4-n1c', text: 'Pull deadlifts from her program, because client comfort comes first', to: null,
              quality: 'poor', feedback: 'That is not client-centred, it is conflict avoidance. If she still prefers alternatives after seeing the numbers, honouring that is an informed choice. This one was not. You have also taught her that any headline can rewrite her program.' },
          ],
        },
        {
          id: 'apt501-u4-n2',
          situation:
            'You find the study behind the article. It followed gym members over several years. Back injuries occurred at 2 per 1,000 training-years among people who did not deadlift and 4 per 1,000 among people who did. That is the “doubled”. The study is observational: people chose their own training.',
          choices: [
            { id: 'apt501-u4-n2a', text: 'Show her both framings, “doubled” and “from 2 in 1,000 to 4 in 1,000, which is two extra injuries per thousand years of training”, then explain why self-selected groups muddy cause and effect', to: 'apt501-u4-n4',
              quality: 'best', feedback: 'Both the arithmetic and the design caveat, in plain words. She now owns the tool rather than just today’s answer.' },
            { id: 'apt501-u4-n2b', text: 'Lead with “it is only 4 in 1,000, which is tiny” and move on', to: 'apt501-u4-n4',
              quality: 'acceptable', feedback: 'The absolute framing is the right medicine, but skipping the design point arms her against this one headline only. “Tiny, moving on” can also sound like you are waving away something that felt big to her.' },
            { id: 'apt501-u4-n2c', text: '“It is observational garbage. It proves nothing, forget it.”', to: 'apt501-u4-n3',
              quality: 'poor', feedback: 'Observational studies are weaker for cause, not worthless, and wholesale dismissal is spin pointing the other way. She can hear the motivated reasoning, and it costs you credibility you will want later.' },
          ],
        },
        {
          id: 'apt501-u4-n3',
          situation:
            'Next session, Priya is still uneasy. “My sister says her physio told her deadlifts wreck your back. Maybe I should just stick to machines.”',
          choices: [
            { id: 'apt501-u4-n3a', text: '“Fair enough. Let’s actually look at what that article’s study found. Give me two minutes with the numbers.”', to: 'apt501-u4-n2',
              quality: 'best', feedback: 'The right recovery. Anxiety that never got an answer does not fade, it recruits allies. The numbers conversation you skipped is still the way through.' },
            { id: 'apt501-u4-n3b', text: '“Machines it is, then.”', to: null,
              quality: 'poor', feedback: 'A headline and a second-hand anecdote just redesigned your programming. If a deadlift alternative genuinely suits her goals better, choose it for that reason and say so. This was surrender, not judgment.' },
          ],
        },
        {
          id: 'apt501-u4-n4',
          situation:
            'Priya follows the arithmetic, nods slowly, then asks the honest question: “So is the risk real or not?”',
          choices: [
            { id: 'apt501-u4-n4a', text: 'Be straight: a study like this cannot prove deadlifts caused anything, and even taken at face value the absolute risk is small. You will keep coaching her technique and progression, and adjust the moment anything hurts', to: null,
              quality: 'best', feedback: 'Honest on both counts, with no zero-risk promise and no scare. She leaves with real numbers, an unproven cause named as unproven, and a plan she can feel in every session.' },
            { id: 'apt501-u4-n4b', text: 'Offer a trap-bar deadlift for a few weeks while her confidence rebuilds, alongside the honest risk summary', to: null,
              quality: 'acceptable', feedback: 'Legitimate coaching, as long as you say out loud that the swap is for her comfort and not a concession that conventional deadlifts are dangerous. Left unsaid, the swap quietly confirms the headline.' },
            { id: 'apt501-u4-n4c', text: '“There is zero risk if your form is good. I guarantee it.”', to: null,
              quality: 'poor', feedback: 'Nothing in training carries zero risk, and she will remember the guarantee the first time her back twinges. Overselling safety is the same sin as the headline: a certainty the data cannot support.' },
          ],
        },
      ],
    },

    // 8 ── error identification ──────────────────────────────────────────────
    {
      type: 'errorId', id: 'apt501-u4-errorid',
      title: 'Audit this supplement blog’s study write-up',
      brief:
        'A supplement company’s blog summarizes a trial of its product. Flag every statistically illegitimate statement, and leave legitimate reporting unflagged.',
      document:
        '“A new randomized trial has confirmed what we have been saying all along: Supplement X works. Lifters taking X gained more lean mass than the placebo group (p = 0.04), so there is a 96% chance the effect is real. X also halved the risk of training-related joint pain. Among the responders, the lifters X worked best for, gains were nearly double the average. Strength improved too, and although that result did not reach significance (p = 0.07), it was clearly trending toward it. With 18 dedicated participants completing the full protocol, the findings are definitive. Bottom line: the lean-mass effect was statistically significant, so you can expect serious gains.”',
      findings: [
        { id: 'apt501-u4-e1', text: '“so there is a 96% chance the effect is real” (from p = 0.04)', isError: true,
          rationale: 'The flipped conditional. p = 0.04 is the chance of data this extreme if X did nothing. It cannot be turned around into the chance that X works.' },
        { id: 'apt501-u4-e2', text: '“X also halved the risk of training-related joint pain”', isError: true,
          rationale: 'A relative claim with no base rate. Halving 20 in 100 and halving 2 in 1,000 are wildly different benefits, and without absolute numbers the sentence carries no usable information.' },
        { id: 'apt501-u4-e3', text: '“Among the responders … gains were nearly double the average”', isError: true,
          rationale: 'Picking out the best outcomes after the fact guarantees an impressive number. Noise alone manufactures “responders” on a single before-and-after measure. The full sample is the result; the subgroup is a spotlight.' },
        { id: 'apt501-u4-e4', text: '“did not reach significance (p = 0.07) … clearly trending toward it”', isError: true,
          rationale: 'p-values are not on a journey. p = 0.07 is a finished summary of this data, and the honest report is the confidence interval, which most likely spans no effect through to a real one.' },
        { id: 'apt501-u4-e5', text: '“With 18 dedicated participants … the findings are definitive”', isError: true,
          rationale: 'Eighteen people means a large standard error and a result that would bounce on a re-run. “Definitive” and n = 18 cannot share a sentence.' },
        { id: 'apt501-u4-e6', text: '“statistically significant, so you can expect serious gains”', isError: true,
          rationale: 'Significance means distinguishable from zero, not big. “Serious gains” needs the effect size read against a meaningful yardstick, which the post never provides.' },
        { id: 'apt501-u4-e7', text: '“A new randomized trial”', isError: false,
          rationale: 'If the trial genuinely randomized participants, that is a real design strength worth reporting. Randomization is what separates a fair comparison from a self-selected one.' },
        { id: 'apt501-u4-e8', text: '“Lifters taking X gained more lean mass than the placebo group (p = 0.04)”', isError: false,
          rationale: 'Reporting the comparison against placebo and the exact p-value is legitimate. The sins begin with the interpretations bolted onto it.' },
      ],
    },

    // 9 ── active-recall set ─────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt501-u4-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'apt501-u4-r1', front: 'Standard deviation against standard error: what does each one describe?',
          back: 'SD describes people: how far individuals spread around the mean. SE describes the estimate: how far the group mean itself would wobble across repeated samples. Tiny error bars are often SE, so check the caption.' },
        { id: 'apt501-u4-r2', front: 'Formula and behaviour of the standard error?',
          back: 'SE = SD ÷ √n. Because of the square root, halving the wobble takes four times the participants. Precision is expensive, which is why small studies bounce.' },
        { id: 'apt501-u4-r3', front: 'The correct practical reading of a 95% confidence interval?',
          back: 'The range of effect sizes reasonably compatible with the data under the method’s assumptions. The 95% is the method’s long-run capture rate, not a 95% probability for this one interval. Read both ends.' },
        { id: 'apt501-u4-r4', front: 'Define the p-value in one sentence.',
          back: 'The probability of results at least this extreme if the null (no effect) were true. A statement about data given no effect, and nothing more.' },
        { id: 'apt501-u4-r5', front: 'Three things a p-value is NOT?',
          back: 'Not the probability the null is true. Not the probability the effect is real. Not a measure of how big or how important the effect is.' },
        { id: 'apt501-u4-r6', front: 'Cohen’s d: formula and anchors?',
          back: 'Mean difference ÷ standard deviation. Conventional anchors: 0.2 small, 0.5 medium, 0.8 large. Context rules, though. A d of 0.2 on strength in trained athletes can decide competitions.' },
        { id: 'apt501-u4-r7', front: 'What is the smallest worthwhile change (or MCID)?',
          back: 'The smallest change the client would actually notice and value. It is a coaching or clinical judgment, estimated imperfectly, and it is the yardstick you hold confidence intervals and effect sizes against. No p-value can supply it.' },
        { id: 'apt501-u4-r8', front: 'Convert it: “50% higher risk” on a base rate of 2 in 1,000.',
          back: '2 × 1.5 = 3 in 1,000. Absolute increase: 1 per 1,000, so about a thousand people exposed for one extra case. A relative number means nothing until you know the base rate.' },
        { id: 'apt501-u4-r9', front: 'Number needed to treat: formula and meaning?',
          back: 'NNT = 1 ÷ absolute risk reduction (as a proportion). An ARR of 5 percentage points gives NNT = 1 ÷ 0.05 = 20: twenty people follow the program to prevent one event.' },
        { id: 'apt501-u4-r10', front: 'What’s wrong with “a trend toward significance”?',
          back: 'It pretends the p-value is travelling and just needs more time. p = 0.07 is a finished summary of this data, and the honest reading is the confidence interval, usually “compatible with nothing and with something real”.' },
      ],
    },

    // 10 ── unit quiz ────────────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u4-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'apt501-u4-q1', kind: 'single', cognitive: 'recall',
          prompt: 'Which statement correctly defines a p-value?',
          explanation: 'The p-value assumes the null is true and describes data in that imaginary world. It cannot be flipped into a probability about hypotheses.',
          options: [
            { id: 'a', text: 'The probability that the null hypothesis is true, given the data', correct: false, rationale: 'That is the flipped conditional, which is precisely what a p-value is not.' },
            { id: 'b', text: 'If the true effect were zero, the probability of data at least this extreme', correct: true, rationale: 'Correct. One conditional probability, worked out under the assumption of no effect.' },
            { id: 'c', text: 'The probability that the result happened by chance', correct: false, rationale: 'Sounds close, but it is a statement about hypotheses given data. The same flip in friendlier clothes.' },
          ] },
        { id: 'apt501-u4-q2', kind: 'single', cognitive: 'application',
          prompt: 'A program shows a mean 1RM difference of +4 kg, 95% CI +1 to +7 kg, p = 0.01. Your client’s smallest worthwhile change for a block is 5 kg. Best reading?',
          explanation: 'The interval excludes zero, so an effect is likely. Its size, though, runs from trivial (1 kg) to clearly worthwhile (7 kg). Significance answers “is it real?” and never “does it clear my client’s bar?”.',
          options: [
            { id: 'a', text: 'It’s significant, so switch programs', correct: false, rationale: 'Significance says distinguishable from zero. It does not say the effect clears her 5 kg yardstick.' },
            { id: 'b', text: 'Probably a real effect, but its size is uncertain. The data are compatible with a trivial 1 kg and with a clearly worthwhile 7 kg, so weigh the cost of switching', correct: true, rationale: 'Correct. Both ends read, yardstick applied, and the decision framed as a trade-off.' },
            { id: 'c', text: 'p = 0.01 means the effect is 4 kg with 99% certainty', correct: false, rationale: 'The p-value is not a certainty rating for the point estimate.' },
          ] },
        { id: 'apt501-u4-q3', kind: 'single', cognitive: 'application',
          prompt: 'Change scores have SD 8 kg. With 16 participants the standard error of the mean is 2 kg. Roughly how many participants for an SE of 1 kg?',
          explanation: 'SE = SD ÷ √n. To halve SE you need √n to double, so n must quadruple: 16 → 64, and 8 ÷ √64 = 1.',
          options: [
            { id: 'a', text: '24', correct: false, rationale: 'Adding 50% more people barely dents the square root.' },
            { id: 'b', text: '32', correct: false, rationale: 'Doubling n only shrinks SE by √2, to about 1.4 kg rather than 1.' },
            { id: 'c', text: '64', correct: true, rationale: 'Correct. Halving the standard error costs four times the sample.' },
          ] },
        { id: 'apt501-u4-q4', kind: 'single', cognitive: 'analysis',
          prompt: 'A paper writes: “The improvement did not reach significance (p = 0.07) but showed a clear trend toward significance.” What exactly is wrong?',
          explanation: 'A p-value is a fixed summary of the data observed, not a traveller approaching a destination, and 0.05 is a convention rather than a cliff edge.',
          options: [
            { id: 'a', text: 'Nothing. 0.07 is close enough to 0.05', correct: false, rationale: '“Close” concedes that the threshold is arbitrary while still worshipping it.' },
            { id: 'b', text: 'It treats p as if it were in motion toward a magic line. The honest report is the confidence interval, which shows which effect sizes remain compatible', correct: true, rationale: 'Correct. The phrase is spin; the interval is the information.' },
            { id: 'c', text: 'The phrase is fine as long as the sample was small', correct: false, rationale: 'A small sample explains a wide interval. It does not license narrating p-values as a journey.' },
          ] },
        { id: 'apt501-u4-q5', kind: 'multi', cognitive: 'analysis',
          prompt: 'Which claims should trigger your “in absolute terms, from what to what?” reflex? (Select all that apply.)',
          explanation: 'Every relative risk claim is unreadable without its base rate. A plain mean reported with an SD is already absolute.',
          options: [
            { id: 'a', text: '“Doubles the risk of tendon injury”', correct: true, rationale: 'Double of what? Doubling 1 in 10,000 is a different conversation from doubling 1 in 50.' },
            { id: 'b', text: '“Cuts cold risk by 40%”', correct: true, rationale: 'A relative reduction, and meaningless until you know the starting risk.' },
            { id: 'c', text: '“Members lost an average of 4.2 kg (SD 3.1) in 12 weeks”', correct: false, rationale: 'Already in absolute units, with the spread reported. Other questions apply, but not this reflex.' },
            { id: 'd', text: '“Halves dropout from training programs”', correct: true, rationale: 'Another relative claim wearing a helpful face. Base rate required.' },
          ] },
        { id: 'apt501-u4-q6', kind: 'single', cognitive: 'application',
          prompt: 'A recovery product claims “40% lower risk of missing training through illness”. Base risk: 5 in 100 athletes per winter. What is the risk with the product?',
          explanation: 'A 40% relative reduction multiplies the base rate by 0.6: 5 × 0.6 = 3 in 100. The absolute reduction is 2 percentage points, so NNT = 1 ÷ 0.02 = 50 athletes per prevented absence.',
          options: [
            { id: 'a', text: '3 in 100', correct: true, rationale: 'Correct: 5 × 0.6 = 3. Two fewer cases per hundred athletes. Now judge whether that is worth the price.' },
            { id: 'b', text: '1 in 100', correct: false, rationale: 'That would be an 80% reduction. The claim was 40%.' },
            { id: 'c', text: '4.6 in 100', correct: false, rationale: 'That subtracts 0.4 from 5, mixing up “40% lower” with “lower by 0.4”.' },
          ] },
        { id: 'apt501-u4-q7', kind: 'single', cognitive: 'recall',
          prompt: 'A study reports Cohen’s d = 0.5 between training methods. What does that mean?',
          explanation: 'd expresses the mean difference in units of standard deviation. The 0.2, 0.5 and 0.8 anchors are conventions, and in trained athletes even d = 0.2 can matter.',
          options: [
            { id: 'a', text: 'The group means differ by half a standard deviation', correct: true, rationale: 'Correct. A “medium” effect by convention, though context sets what actually matters.' },
            { id: 'b', text: 'The program worked for half the participants', correct: false, rationale: 'd says nothing about how many individuals responded.' },
            { id: 'c', text: 'There is a 50% chance the effect is real', correct: false, rationale: 'd is a size measure, not a probability of anything.' },
          ] },
        { id: 'apt501-u4-q8', kind: 'single', cognitive: 'synthesis',
          prompt: 'A 400-person trial in trained lifters: a new bench accessory protocol beat the standard one by +0.7 kg over 8 weeks, 95% CI +0.2 to +1.2 kg, p = 0.006. Your client read “statistically proven” and wants to switch. Your best response?',
          explanation: 'Large samples detect small effects with precision. Here the entire interval sits below any sensible smallest worthwhile change, so the effect is real, well measured, and too small to reorganise training around.',
          options: [
            { id: 'a', text: '“It’s proven. We’ll switch your programming this week.”', correct: false, rationale: '“Proven” here means distinguishable from zero, not worth the disruption.' },
            { id: 'b', text: '“With 400 people, even tiny effects earn tiny p-values. The whole interval, 0.2 to 1.2 kg over 8 weeks, sits under anything you would feel. Real, precisely measured, and not worth rebuilding your program for.”', correct: true, rationale: 'Correct. Significance acknowledged, size read against a yardstick, decision explained in her terms.' },
            { id: 'c', text: '“The study must be flawed. Effects that small can’t be detected reliably.”', correct: false, rationale: 'Backwards. Detecting small effects reliably is precisely what large samples do.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt501-u4-teach',
      title: 'Teach it back',
      prompt:
        'A long-term client, Dana, messages you: “I just read that women who lift heavy have a 50% higher risk of pelvic floor problems. Should I stop? I’m really worried.” The study behind the headline reports risk rising from 2 in 1,000 per year to 3 in 1,000. In plain, warm language, explain what “50% higher” actually means for her, without dismissing the study or her worry.',
      modelAnswer:
        'That headline would have worried me too, so let us look at what the number actually says. “50% higher” is a multiplier rather than a count. It means take the starting risk and add half of it. In that study the starting risk was 2 women in 1,000 per year. Add half and you get 3 in 1,000. So here is the headline, translated: out of a thousand women lifting for a year, the study saw about one extra case. Instead of 998 women unaffected, 997. That is the whole “50%”. I am not going to tell you the risk is zero, because it is not, and a study like this also cannot prove that lifting caused the difference, since women who lift differ from women who do not in plenty of other ways. Here is what I would suggest. We keep coaching your breathing and bracing exactly as we already do, you tell me straight away if you ever notice symptoms, and you make the decision with the real numbers in front of you, 3 in 1,000 against 2 in 1,000, rather than with the headline. Whatever you choose with those numbers in hand, I am behind it.',
      rubric: [
        { id: 'apt501-u4-t1', text: 'Translates the relative figure into absolute numbers: 2 in 1,000 rising to 3 in 1,000, which is one extra case per 1,000 woman-years' },
        { id: 'apt501-u4-t2', text: 'Explains that a relative increase is unreadable without its base rate' },
        { id: 'apt501-u4-t3', text: 'Stays honest: no zero-risk promise, no ridiculing the study or the client’s worry, and notes that observational data cannot settle cause' },
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
          explanation: 'When people choose their own groups, the groups differ in more than the treatment. That is confounding, and random assignment is the design tool that removes it.',
          options: [
            { id: 'a', text: 'People chose their own training, so the groups likely differ in appetite for intensity, training history and hours of exposure. Only random assignment untangles that', correct: true, rationale: 'Correct. Self-selection means the comparison is between different kinds of people, not just different programs.' },
            { id: 'b', text: 'Because the result wasn’t statistically significant', correct: false, rationale: 'Nothing says it was not, and significance would not fix self-selection anyway.' },
            { id: 'c', text: 'Because injury can’t be measured objectively', correct: false, rationale: 'Measurement quality matters, but the core problem here is who ended up in which group.' },
          ] },
        { id: 'apt501-u4-cu2', kind: 'single', cognitive: 'application',
          prompt: 'An observational study behind a “doubles injury risk” headline shows risk moving from 3 to 6 per 1,000 training-years. Which client-facing summary is most honest?',
          explanation: 'Honest communication carries both the absolute size (3 extra per 1,000 training-years) and the design limit (self-selected groups, cause unproven), without dismissing the study.',
          options: [
            { id: 'a', text: '“Twice the risk. We should avoid it.”', correct: false, rationale: 'The relative frame on its own, doing exactly what the headline did.' },
            { id: 'b', text: '“About 3 extra injuries per 1,000 training-years, in a study where people picked their own training. Small in absolute terms, and cause unproven. We’ll keep coaching form and progression, and adjust if anything ever hurts.”', correct: true, rationale: 'Correct: absolute numbers, design caveat and a plan, with no spin in either direction.' },
            { id: 'c', text: '“It’s observational, so it tells us nothing at all.”', correct: false, rationale: 'Over-dismissal is spin too. Observational evidence is weaker for cause, not empty.' },
          ] },
        { id: 'apt501-u4-cu3', kind: 'multi', cognitive: 'synthesis',
          prompt: 'Which features together mark a result you would actually reprogram a client around? (Select all that apply.)',
          explanation: 'Decision-grade evidence combines fair group assignment, an interval that clears your meaningfulness yardstick at both ends, and an outcome the study named as its target rather than a lucky survivor of many.',
          options: [
            { id: 'a', text: 'Participants were randomly assigned to groups', correct: true, rationale: 'Randomization makes the comparison about the program instead of about who chose it.' },
            { id: 'b', text: 'The entire confidence interval clears your smallest worthwhile change', correct: true, rationale: 'Then even the cautious end of the estimate is worth having. The confidence interval habit paying off.' },
            { id: 'c', text: 'p = 0.049 rather than p = 0.051', correct: false, rationale: 'A hair’s width across a conventional line changes nothing about the evidence.' },
            { id: 'd', text: 'The outcome was the study’s stated primary endpoint, not one of twenty explored', correct: true, rationale: 'Pre-stated endpoints protect you from the one-in-twenty fluke that cherry-picking sells as a discovery.' },
          ] },
      ],
    },
  ],
};
