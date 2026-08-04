import type { Unit } from '../../../types/content';

export const unit05: Unit = {
  id: 'apt501-u5',
  code: 'APT 501.4',
  title: 'Reading Reviews, Meta-Analyses and Guidelines',
  summary:
    'How to read the papers that summarise other papers: systematic reviews, meta-analyses and position stands. Read them well enough to know when a pooled diamond should change your coaching, and when it should not.',
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
      'The I² bands (roughly 25/50/75%) are conventions, not cut-offs, and methodologists argue about how much weight I² deserves at all, especially when a review has only a few studies. The choice between a fixed-effect and a random-effects model can change pooled results, and it remains debated. Funnel-plot asymmetry tests are unreliable below roughly ten studies. Guideline panels reading the same evidence sometimes issue different recommendations because values, costs and judgement calls differ. How to handle those disagreements is itself an open methods question.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u5-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt501-u5-p1', kind: 'single', cognitive: 'recall',
          prompt: 'What actually makes a review “systematic”?',
          options: [
            { id: 'apt501-u5-p1a', text: 'It is written by a committee of recognised experts', correct: false, rationale: 'Expertise does not fix selective citation. Method does.' },
            { id: 'apt501-u5-p1b', text: 'The question, search strategy, and inclusion rules are fixed and documented before the results are gathered', correct: true, rationale: 'Correct: pre-commitment is what the word buys you.' },
            { id: 'apt501-u5-p1c', text: 'It includes a meta-analysis with a forest plot', correct: false, rationale: 'Pooling is optional; many good systematic reviews rightly never pool.' },
          ] },
        { id: 'apt501-u5-p2', kind: 'single', cognitive: 'application',
          prompt: 'At the bottom of a forest plot sits a diamond. What is it?',
          options: [
            { id: 'apt501-u5-p2a', text: 'The largest and most trustworthy single study', correct: false, rationale: 'Individual studies are the rows; the diamond is what they combine into.' },
            { id: 'apt501-u5-p2b', text: 'The pooled estimate: its centre is the combined result and its width is the confidence interval', correct: true, rationale: 'Correct: the diamond has no whiskers because it is the interval.' },
            { id: 'apt501-u5-p2c', text: 'The average of only the statistically significant studies', correct: false, rationale: 'Pooling uses every included study, weighted by precision, whether or not it reached significance.' },
          ] },
        { id: 'apt501-u5-p3', kind: 'single', cognitive: 'analysis',
          prompt: 'Nine small industry-funded trials, all positive, pool into a meta-analysis with a narrow confidence interval and a lopsided funnel plot. The narrow interval tells you…',
          options: [
            { id: 'apt501-u5-p3a', text: 'The effect is now beyond reasonable doubt', correct: false, rationale: 'Precision is not validity; a biased pool gives a precise wrong answer.' },
            { id: 'apt501-u5-p3b', text: 'The pooled estimate is precise, which is not the same as unbiased, because pooling cannot restore the null trials that never got published', correct: true, rationale: 'Correct: pooling shrinks random error only. Missing studies stay missing.' },
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
        { level: 'analysis', text: 'Judge whether a pooled result deserves to change practice, by testing heterogeneity, risk of bias in the included trials, publication-bias signals, and the match between the studied populations and your client.' },
        { level: 'synthesis', text: 'Run the full reading workflow on a live client question: find the best available synthesis, appraise it, reconcile it with current guidelines, and decide what, if anything, changes in the program.' },
      ],
    },

    // 3 ── core instruction (five concept blocks, visuals interleaved) ───────
    {
      type: 'concept', id: 'apt501-u5-c1', heading: 'Two kinds of review, and what “systematic” buys you',
      body:
        'Your 7am client, Bex, sends you two links before she has finished her coffee. Both have the word “review” in the title. Both are written by people with doctorates. She wants to know which one to believe. They are not the same kind of document, and the difference has nothing to do with who wrote them. It is about what the authors promised before they started reading.\n\n' +

        '## The guided tour\n\n' +

        'In the first link, a respected researcher walks you through fifteen years of studies the way a local walks you through their home town. The streets they know. The stories they like. The shortcuts they trust. That is a **narrative review**, and at its best it is the fastest way to absorb how an expert thinks about a subject. You get the shape of a whole field in twenty minutes. What you never get is any way of knowing what got left out. The tour is real. Somebody chose the route, and the route is invisible to you.\n\n' +

        'Here is the uncomfortable part. An expert can mislead you without writing a single dishonest sentence. Memory hands back the studies that fit. Loyalty to a training philosophy quietly decides which papers get cited. The trial that confirmed a career stays vivid, and the one that undercut it fades. None of that needs bad faith. It is simply how human recall works, which is exactly why the second kind of document was invented.\n\n' +

        '## Three promises, made in advance\n\n' +

        'A **systematic review** makes three promises before it looks at a single result. It fixes a precise question: which people, which intervention, compared with what, measuring which outcome. It runs a search that anyone could repeat: these databases, these dates, these search terms, all written down. And it sets the rules for letting a study in or keeping it out before anyone knows which studies will pass. Many teams publish that plan on a public register as a **protocol**, months before any results exist.\n\n' +

        'Think about what that costs the authors. Once the question and the rules are on the record, they cannot quietly drop the three trials that spoiled the answer, because the search that found those trials is printed in the paper and you can run it yourself. That is the whole trick. Pre-commitment does not make anyone smarter or more honest. It makes cherry-picking visible.\n\n' +

        'One check takes ten seconds and tells you a great deal. Good systematic reviews print a flow diagram of the numbers at every stage: how many records the search returned, how many were duplicates, how many titles were read, how many full papers were pulled off the shelf, and how many survived into the analysis. That format is called a **PRISMA flow diagram**. Read the bottom number against the top one, and check that reasons are given for the big drops.\n\n' +

        '> Key idea: “systematic” describes how the studies were found and chosen. It says nothing at all about how good those studies were.\n\n' +

        '## What the label does not cover\n\n' +

        'A systematic review and a **meta-analysis** are not the same thing, and the two words get swapped around constantly. The review is the searching and the sorting. The meta-analysis is the optional arithmetic at the end that combines the results into one number. Plenty of excellent systematic reviews look at what they found, decide the studies are too different to average, and never pool at all. That is a judgement, and it is often the right one.\n\n' +

        'Then the caution that matters most on a gym floor. A review can follow every reporting rule ever written and still pool fourteen weak trials into a confident looking answer. The rules govern the finding and the choosing. They do not govern the quality of what was found. So the label earns a review your attention, not your trust. When Bex asks which link to believe, the honest answer is that the systematic one is the one you can check, and checking it is what the rest of this unit teaches you to do.',
    },
    {
      type: 'visual', id: 'apt501-u5-visual-sieve',
      title: 'How a systematic review gets built',
      diagramId: 'review-systematic-sieve',
      caption:
        'The numbers a systematic review has to print at every stage, from the raw search hits down to the handful of trials that end up inside the diamond.',
      callouts: [
        { id: 'apt501-u5-vs1', label: '1', text: 'The top number is the raw search, not a judgement about quality. Thousands of hits is normal, because a search built to miss nothing also catches a great deal of noise.' },
        { id: 'apt501-u5-vs2', label: '2', text: 'Two people usually screen every title independently, and a third settles disagreements. That is the step a narrative review skips entirely, and skipping it is where selection quietly enters.' },
        { id: 'apt501-u5-vs3', label: '3', text: 'Every exclusion at the full paper stage has to be counted and given a reason. If a review prints the counts but not the reasons, you cannot check whether an inconvenient trial was shown the door.' },
        { id: 'apt501-u5-vs4', label: '4', text: 'Fewer studies get pooled than get included. Trials that measured the outcome a different way are described in the text instead, so the diamond usually rests on a smaller set than the abstract implies.' },
      ],
    },
    {
      type: 'concept', id: 'apt501-u5-c2', heading: 'Meta-analysis: pooling, weights, and the forest plot',
      body:
        'One trial is one glimpse. Twenty participants, eight weeks, one gym, one way of measuring. Run that same study ten times and you get ten different numbers even if the true effect never moved, because twenty people is a small enough sample that luck has room to work. Meta-analysis is the fix. It gathers the scattered glimpses into one estimate, and it does not treat them as equals.\n\n' +

        '## Loud voices and whispers\n\n' +

        'Each study gets a say in proportion to how much information it carries. A large trial with tightly clustered results gets a loud voice. A small, wobbly one gets a whisper. That share is the study’s **weight**, and it is printed as a percentage beside each row.\n\n' +

        'Weight is not a quality score. It is a precision score. A large, badly run trial can carry more weight than a small, beautifully run one, which is the first reason you cannot let the arithmetic decide what is good. You still have to read the paper.\n\n' +

        '## Reading the plot, row by row\n\n' +

        'The **forest plot** is where you watch the pooling happen, and it is the most useful single picture in this course. Each row is one study. The square is that study’s result, and the size of the square is its weight, so the picture tells you who is doing the talking before you have read a word.\n\n' +

        'The horizontal whiskers coming off each square are that study’s 95% **confidence interval**. Read it as the range of true effects that would not look surprising given what this study measured. Be careful with the wording here, because almost everybody gets it wrong. If you ran the same study over and over, intervals built this way would capture the true value about 95 times in 100. What you cannot say about the one interval in front of you is that there is a 95% chance the answer sits inside it. The 95% belongs to the method, not to this particular interval.\n\n' +

        'The vertical line down the middle is the **line of no effect**. It sits at zero when the outcome is a difference, such as kilograms of lean mass gained or seconds off a 5k. It sits at one when the outcome is a ratio, such as the risk of a hamstring strain in one group compared with another, because a ratio of one means the two groups came out the same. Whiskers that cross that line mean this study, on its own, cannot tell benefit from nothing.\n\n' +

        'At the bottom sits the **diamond**. Its centre is the pooled estimate and its width is the pooled confidence interval. It carries no whiskers because it does not need any. The tips are the bounds.\n\n' +

        '> Key idea: read the rows before you read the diamond. The diamond is a summary, and until you have read the rows you do not know what it is a summary of.\n\n' +

        '## Three questions for the rows\n\n' +

        'Do the studies roughly agree, or are the squares scattered on both sides of the line? Agreement means the diamond speaks for a chorus. Scatter means it is speaking over an argument.\n\n' +

        'Is one giant trial supplying half the weight? If a single study carries 48% of the pool, the pooled answer is mostly that one study wearing a coat, and you should go and read it as a trial in its own right.\n\n' +

        'Are the biggest effects coming from the smallest squares? Small studies swing hardest on chance, so one or two big results from tiny trials is unremarkable. A pattern where every small trial is impressive and every large one is modest is a different matter, and you will meet the reason for it two sections from now.\n\n' +

        'Take Priya, who trains at six in the morning and wants to know whether creatine is worth the money. The abstract of the review she found says the effect is significant. The plot shows eleven rows. One of them carries 44% of the weight, and that one ran for six months in people who had never lifted before. Priya has trained for nine years. None of that came from the abstract, and all of it came from thirty seconds spent looking at a picture.',
    },
    {
      type: 'concept', id: 'apt501-u5-c3', heading: 'Heterogeneity: when the diamond stops meaning anything',
      body:
        'Suppose a review pools three trials. One is eight weeks of machine work in untrained college men. One is a year of planned, varied training in national level lifters. One is twelve weeks of chair based exercise in nursing home residents. The software will not object. It will hand back a tidy diamond, because pooling is arithmetic and arithmetic has no opinion about whether the studies belonged together. The question the maths cannot answer is the one you have to answer: is the average of those three results an answer to anything? A mean of apples and oranges is a very precise description of fruit salad.\n\n' +

        '## What I² actually measures\n\n' +

        '**Heterogeneity** is the technical name for the rows disagreeing with each other. Some disagreement is guaranteed. Every trial recruited different people on different days, so results scatter by chance alone. **I²** estimates how much of the spread you can see goes beyond what chance would produce. In plain words, it is the share of the disagreement that looks real rather than random.\n\n' +

        'An I² near zero says the scatter looks like noise around one common effect, so one number can fairly speak for the set. An I² of 75% says the studies are genuinely answering differently, and no single number speaks for all of them. The bands you will see quoted, roughly 25% for low, 50% for moderate and 75% for high, are conventions meant to start a conversation rather than thresholds meant to end one. Methodologists argue about how much weight I² deserves at all, and the argument sharpens when a review has only a handful of studies, because the estimate of I² is then itself unsteady.\n\n' +

        '> Key idea: high heterogeneity is not a reason to bin a review. It is an instruction to stop reading the diamond and start reading further down the page.\n\n' +

        '## Chasing the disagreement\n\n' +

        'Good reviews go hunting for the source of the spread, and they do it with **subgroup analyses**: splitting the studies by training status, by dose, by how long the programme ran, by sex, by which outcome was measured. Sometimes the heterogeneity turns out to be the finding. The effect is real in beginners and absent in trained lifters. The effect appears at three sessions a week and vanishes at one. That split is worth far more to you than any overall average, because the woman standing in front of you is a beginner or she is not.\n\n' +

        'Treat subgroup findings with a little suspicion all the same. If a review tests fifteen subgroups, one or two will look impressive by luck alone. A subgroup you can lean on is one the authors said in advance they would examine, and one with a mechanism behind it that makes sense.\n\n' +

        '## Two models, one honest choice\n\n' +

        'Every meta-analysis names the model it used, and the choice changes the numbers. A **fixed effect** analysis assumes every study is estimating one identical true effect, so any difference between them is pure sampling noise. A **random effects** analysis assumes a family of related true effects, one sitting behind each study, drawn from a distribution. In exercise science, where no two protocols match and no two gyms recruit the same people, the second assumption is almost always the honest one.\n\n' +

        'Random effects gives small studies relatively more say, and it usually produces a wider pooled interval. That widening is the model being honest about the extra uncertainty that comes from studies not agreeing. If a review reports both models and the two answers differ noticeably, that gap is itself telling you about the spread.\n\n' +

        'No model rescues a pool that never made sense, though. Go back to the three trials at the top of this section. Random effects will happily average the college men, the elite lifters and the nursing home residents, and hand you a wider interval for its trouble. The wider interval is not the problem. The problem is that when studies should never have been averaged at all, the diamond is not so much wrong as meaningless, and a meaningless number with honest error bars drawn around it is still a meaningless number.',
    },
    {
      type: 'concept', id: 'apt501-u5-c4', heading: 'Publication bias, and why pooling cannot clean up weak trials',
      body:
        'A trial that finds something exciting gets written up fast, accepted somewhere visible and pushed out with a press release. A trial that finds nothing tends to stall. The authors drift onto the next project, journals are lukewarm about a paper whose headline is “no difference”, and the manuscript retires quietly to a drawer. Multiply that across a whole field, add sponsors with products on the line, and the research you can search stops being the research that was done. It becomes the research that survived.\n\n' +

        'That is **publication bias**. It means the phrase “the literature shows” always carries a silent word in front of it. The published literature shows.\n\n' +

        '## Looking for the gap\n\n' +

        'The **funnel plot** is the standard way to look for the damage, and once you have seen one you cannot unsee it. Every study gets a dot. Its position left to right is its result. Its position top to bottom is its size or precision, with the big trials at the top and the small ones at the bottom.\n\n' +

        'Now think about what that should look like when nothing is missing. Big trials have little room to wander, so they sit near the top in a tight cluster. Small trials swing hard on luck, so they spread out along the bottom, some overshooting and some undershooting. The shape is a symmetrical funnel turned upside down.\n\n' +

        'The tell is a missing corner. Plenty of small flattering trials along the bottom, and none of the small disappointing ones that chance alone must have produced, means those disappointing trials were probably run and never surfaced. Use the tool honestly, though. Below about ten studies a funnel plot cannot separate real asymmetry from coincidence, and asymmetry has innocent explanations too. Small trials often study more responsive people, or run a more intensive version of the programme than a big multi-centre trial could manage.\n\n' +

        '## Pooling shrinks noise, not slant\n\n' +

        'The deeper trap is believing that pooling purifies. It does not, and this is the most expensive misunderstanding in the whole unit.\n\n' +

        'Split error into two kinds. **Random error** is noise: the wobble that comes from having sampled these forty people rather than another forty. It has no direction, so averaging enough studies together shrinks it, and that is precisely what pooling is for. **Systematic error**, which is what bias means, has a direction. Randomisation that staff could see coming and steer. Assessors who knew which group they were measuring. Dropouts quietly left out of the final numbers. Each of those pushes the result the same way in every trial that shares the flaw.\n\n' +

        '> Key idea: pooling shrinks random error and nothing else. Twenty trials that all lean the same way produce a pooled answer that leans the same way, with a narrower interval drawn around the lean.\n\n' +

        'What comes out is a biased answer wearing a tight confidence interval, and that is more dangerous than an honest wide one because it looks finished. A wide interval announces its own uncertainty. A narrow one built on twenty flawed trials announces nothing at all.\n\n' +

        '## What to check before you trust a diamond\n\n' +

        'This is why serious reviews publish a **risk of bias** assessment for every trial they included, usually as a table or a grid of judgements, rating each study on how it randomised, whether people knew which group they were in, and how it handled dropouts. Read that grid before you read the diamond. It is the ingredients list, and the diamond is only the cooking.\n\n' +

        'It is also why a meta-analysis of three well run trials can outrank one built from twenty shaky ones, which feels wrong until you remember that the twenty are all leaning together. And it is why funding is a prompt rather than a verdict. A supplement company paying for a trial proves nothing on its own. It is a reason to read the methods more slowly, and to notice if all nine trials came from the same sponsor and all nine agreed.',
    },
    {
      type: 'visual', id: 'apt501-u5-visual-funnel',
      title: 'What missing trials do to the pooled answer',
      diagramId: 'review-funnel-asymmetry',
      caption:
        'The same body of research drawn twice: once with every trial published, and once with the small disappointing ones still sitting in drawers.',
      callouts: [
        { id: 'apt501-u5-vf1', label: '1', text: 'Big trials sit at the top in a tight cluster, because they have little room to wander. Small trials spread along the bottom, and that spread is chance doing its ordinary job rather than a fault.' },
        { id: 'apt501-u5-vf2', label: '2', text: 'On the left the funnel is symmetrical. Small trials overshoot and undershoot in roughly equal numbers, which is what a complete literature looks like.' },
        { id: 'apt501-u5-vf3', label: '3', text: 'On the right the bottom corner on the null side is empty. Chance alone had to produce those trials, so their absence from the published record is the fingerprint of publication bias.' },
        { id: 'apt501-u5-vf4', label: '4', text: 'Compare the two pooled markers. Nothing went wrong with the arithmetic; the input was already selected. Below roughly ten studies the shape cannot be read at all, so a tidy funnel is never proof that nothing is missing.' },
      ],
    },
    {
      type: 'concept', id: 'apt501-u5-c5', heading: 'GRADE, guidelines, and a reading routine that fits between clients',
      body:
        'After all that checking you still owe your client a verdict. How much should this paper change what you actually do on the gym floor? **GRADE** is the profession’s shorthand for that judgement, and once you can read it you can also audit it.\n\n' +

        '## Four levels and five reasons to drop\n\n' +

        'GRADE rates the evidence for each outcome separately as high, moderate, low or very low **certainty**. Certainty means one thing here: how confident we are that the true effect sits close to the estimate we have. It is not how big the effect is, and it is not how strongly anybody recommends doing it.\n\n' +

        'Randomised evidence starts at high and gets marked down for the five problems you now know how to spot. Risk of bias in the trials themselves. Inconsistency, meaning the trials disagree and nobody can explain why. **Indirectness**, meaning the evidence answers a neighbouring question: wrong population, wrong outcome, or the wrong comparison for what you are asking. Imprecision, meaning wide intervals built on few participants. And suspected publication bias. Observational evidence starts at low, because confounding is always in the room, and it can climb when the effect is very large or when a clear dose response appears.\n\n' +

        'So when a summary table says “moderate certainty”, read it as a claim with working attached. Go and find which of the five got marked down, and decide whether you agree. That is now something you can do.\n\n' +

        '## Two dials, not one\n\n' +

        'Position stands and clinical guidelines, from bodies such as ACSM, the NSCA and national health agencies, sit one layer above the reviews. They are part evidence synthesis, part expert consensus filling the gaps where evidence runs out, and part practical judgement about harms, costs and what real people will actually keep doing.\n\n' +

        'Read them with two separate dials in mind. The first dial is evidence certainty: how good is the underlying science. The second is **recommendation strength**: how firmly the panel says do this. The two dials move independently, and that is deliberate rather than sloppy.\n\n' +

        '> Key idea: a strong recommendation can rest on moderate certainty when the benefits clearly beat the harms, and a weak “consider this” can sit on high certainty when the effect is real but small. Collapsing the two dials into one is how guidelines get misquoted.\n\n' +

        'Guidelines also age by design. A panel closes its search months or years before publication, and revisions arrive every five to ten years, so a guideline always trails the front edge of the research. Check the search date, not the publication date. And when two credible bodies disagree, resist the urge to pick a villain. They asked slightly different questions, weighed different populations, closed their searches on different days, or made different judgement calls on the same borderline evidence. Two respected guidelines pointing different ways is a map of where the evidence is genuinely thin. Hold your own practice more lightly in exactly that spot.\n\n' +

        '## The routine that fits between clients\n\n' +

        'Here is the whole thing, compressed into something you can run in the twenty minutes between a 6am and a 7am.\n\n' +

        'Start with the real question, in your client’s terms. Not “is blood flow restriction any good”, but “will low load training with blood flow restriction grow muscle in a 52 year old woman six weeks after a knee replacement”. The second question can be answered. The first cannot.\n\n' +

        'Look for the highest level of **synthesis** first, meaning a paper whose job is to gather other papers: a recent systematic review or a guideline, not the newest single trial. Then check three stamps before you read a word of the conclusions. The date, because a 2019 review could not possibly have seen anything published in 2021. The population, because it either includes people like your client or it does not. The outcomes, because a trial measuring muscle thickness on an ultrasound is not measuring whether she can carry the shopping up two flights of stairs.\n\n' +

        'Then go to the forest plot before the abstract. The abstract was written by people who wanted the paper published and cited. The plot cannot spin. Finish with the only question that pays your invoice: what specifically changes for this client on Monday? Sometimes the answer is a genuine change in loading, protein or programming. Often the honest answer is that nothing changes yet, and being able to say exactly why is what separates a professional reader from somebody repeating headlines.',
    },
    {
      type: 'visual', id: 'apt501-u5-visual-grade',
      title: 'Certainty, and the separate dial for strength',
      diagramId: 'review-grade-ladder',
      caption:
        'Where GRADE starts each kind of evidence, the five problems that push it down a rung, and why the strength of a recommendation is a second dial that moves on its own.',
      callouts: [
        { id: 'apt501-u5-vg1', label: '1', text: 'Randomised trials start at high certainty and observational studies start at low. Those are starting positions, not scores. Every paper still has to hold its rung.' },
        { id: 'apt501-u5-vg2', label: '2', text: 'Each of the five problems can cost a level, and a serious one can cost two. They are the same five you have been practising all unit, which is why a certainty rating is auditable rather than decorative.' },
        { id: 'apt501-u5-vg3', label: '3', text: 'Observational evidence can climb when the effect is very large, or when a clear dose response shows up, because confounding of that size is hard to arrange by accident.' },
        { id: 'apt501-u5-vg4', label: '4', text: 'The grid at the bottom is the part that gets misquoted. All four boxes are legitimate. A weak recommendation sitting on high certainty usually means the effect is real and small, or that the choice belongs to the client.' },
      ],
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt501-u5-visual',
      title: 'Anatomy of a forest plot',
      diagramId: 'forest-plot-anatomy',
      caption:
        'Five invented trials of one intervention, pooled. Every meta-analysis you will ever read reduces to this picture. Learn it once and abstracts lose their power over you.',
      callouts: [
        { id: 'apt501-u5-v1', label: '1', text: 'Each square is one study’s result, and the square’s size is its weight. Study D’s 120 participants buy it the loudest voice, 41% of the pooled answer.' },
        { id: 'apt501-u5-v2', label: '2', text: 'Whiskers are each study’s 95% confidence interval. Cross the vertical line and that study, alone, cannot tell benefit from nothing. That is true for A, C and E here.' },
        { id: 'apt501-u5-v3', label: '3', text: 'The dashed vertical is the line of no effect: zero for difference outcomes like this one, 1.0 when the outcome is a ratio such as injury risk.' },
        { id: 'apt501-u5-v4', label: '4', text: 'The diamond is the pooled estimate. Its width IS the confidence interval, so the tips are the bounds. That is why it carries no whiskers of its own.' },
        { id: 'apt501-u5-v5', label: '5', text: 'Study C sits on the other side of the line from the rest. That spread is heterogeneity, summarised by the I² beneath the diamond. Treat it as your cue to ask whether these five belonged in one pool at all.' },
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
          reasoning: 'Who was pooled? Nine trials in untrained young men, three in trained adults, two in older adults. Dana is a trained 48-year-old woman. That mismatch has a name, indirectness, and you note it before you look at a single number, because it caps how directly any finding can transfer to her.' },
        { id: 'apt501-u5-w2', title: 'Check the machinery',
          reasoning: 'Search documented and dated (through 2022, so anything newer is invisible to this paper), protocol registered in advance, inclusion rules stated. Good: this is a systematic review, not a curated tour. If this step fails, you stop here, because the rest is decoration.' },
        { id: 'apt501-u5-w3', title: 'Read the forest plot before the abstract',
          reasoning: 'Pooled mean difference: +0.30 kg lean mass over roughly twelve weeks, 95% CI 0.09 to 0.51. Real, but small. The low end of that interval is under 100 grams. “Significant” in the abstract meant statistically distinguishable from zero, not big. The plot just told you what the abstract chose not to.' },
        { id: 'apt501-u5-w4', title: 'Interrogate the spread',
          reasoning: 'I² = 55%, so the trials disagree more than chance explains. The subgroup table finds the pattern: solid effects where habitual protein intake was low, effects near zero where participants already ate about 1.6 g/kg/day. That subgroup line matters more to Dana than the diamond does.' },
        { id: 'apt501-u5-w5', title: 'Check who paid and what might be missing',
          reasoning: 'Six of fourteen trials were supplement-industry funded; the funnel plot leans a little; five trials never blinded the people measuring body composition. None of this kills the finding. It downgrades your certainty a notch, GRADE style, from high toward moderate.' },
        { id: 'apt501-u5-w6', title: 'Decide for Dana',
          reasoning: 'First estimate her current intake. If she already eats near 1.6 g/kg/day, this evidence says a supplement buys her very little. If she is at 0.9 g/kg, raising protein is well supported, from food or powder, whichever she will actually sustain. That sentence is the deliverable, and no abstract will ever hand it to you.' },
      ],
      takeaway:
        'The abstract said “significant”. The plot said “small, and mostly in people whose protein was low to begin with”. Two readings of the same paper, and only one of them can program for Dana.',
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
          bucketId: 'apt501-u5-b-rob', rationale: 'Unblinded assessment and ignored dropouts are flaws in how the trials were run. That is systematic error in the ingredients, so risk of bias takes the downgrade.' },
        { id: 'apt501-u5-l2', text: 'I² = 84%, with individual trials sitting on both sides of the line of no effect and no explanation found',
          bucketId: 'apt501-u5-b-incon', rationale: 'Unexplained disagreement that large is inconsistency: the studies are answering differently and no subgroup accounts for it.' },
        { id: 'apt501-u5-l3', text: 'Every included trial studied untrained college-aged men; the question being asked is about trained women in their fifties',
          bucketId: 'apt501-u5-b-indir', rationale: 'The evidence answers a neighbouring question about a different population. That mismatch is indirectness even if every trial was pristine.' },
        { id: 'apt501-u5-l4', text: 'The pooled interval runs from a harmful effect to a large benefit, built on 140 participants across all trials combined',
          bucketId: 'apt501-u5-b-imprec', rationale: 'An interval spanning harm to large benefit on so few participants cannot support a decision. That is imprecision.' },
        { id: 'apt501-u5-l5', text: 'The funnel plot is missing its bottom corner on the null side, and trial registries list three completed studies that never published results',
          bucketId: 'apt501-u5-b-pub', rationale: 'A hollow funnel corner plus registered-but-unpublished trials is the fingerprint of missing null results.' },
        { id: 'apt501-u5-l6', text: 'The trials measured eight-week isometric strength; your client cares about season-long injury rates',
          bucketId: 'apt501-u5-b-indir', rationale: 'A surrogate outcome standing in for the one that matters is indirectness of outcome. The trials can be flawless and still not answer the question.' },
        { id: 'apt501-u5-l7', text: 'All nine trials were run by the product’s manufacturer, all nine are positive, and the smallest trials show the biggest effects',
          bucketId: 'apt501-u5-b-pub', rationale: 'A uniformly positive, sponsor-run literature where small studies carry the largest effects is the classic small-study pattern of publication bias.' },
        { id: 'apt501-u5-l8', text: 'Group allocation was predictable in most trials, so staff could steer stronger participants into the training arm',
          bucketId: 'apt501-u5-b-rob', rationale: 'Predictable allocation lets selection leak into the groups. That is a randomisation failure, so risk of bias takes it rather than any of the statistical categories.' },
      ],
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt501-u5-case',
      title: 'Case: “a meta-analysis proved it”',
      brief:
        'Marcus, a trainer you share a gym floor with, has pulled every stretch from his clients’ warm-ups: “A meta-analysis proved static stretching kills strength. Top of the evidence pyramid. Done deal.” His clients talk to your clients. Walk through how you handle the claim. Every decision is scored against best practice.',
      startNodeId: 'apt501-u5-n1',
      nodes: [
        {
          id: 'apt501-u5-n1',
          situation:
            'Marcus shows you a headline on his phone: “Meta-analysis: stretching reduces strength by 5%.” He is waiting for you to concede.',
          choices: [
            { id: 'apt501-u5-n1a', text: 'Ask him to send the actual paper, and hold your verdict until you have seen what was pooled', to: 'apt501-u5-n2',
              quality: 'best', feedback: 'Right move. “Meta-analysis” names a method, not a verdict. What it can claim depends entirely on which trials went in and what they measured.' },
            { id: 'apt501-u5-n1b', text: 'Concede, because a meta-analysis outranks anything you could say against it', to: 'apt501-u5-n3',
              quality: 'poor', feedback: 'The pyramid ranks study designs on average; it cannot tell you whether these pooled trials match this question. Conceding to a label, sight unseen, is how bad claims spread through gyms.' },
            { id: 'apt501-u5-n1c', text: 'Wave it off: “you can prove anything with statistics”', to: 'apt501-u5-n3',
              quality: 'poor', feedback: 'Reflex cynicism is the lazy twin of credulity, and the paper might be excellent. Either way you cannot know from a headline, and Marcus now has no reason to take your later reading seriously.' },
          ],
        },
        {
          id: 'apt501-u5-n2',
          situation:
            'You read the review. It pools 28 crossover trials. In almost all of them, participants held static stretches for 60 seconds or more and then tested maximal strength within minutes. Pooled result: roughly a 4 to 5% acute strength reduction. No trial tested strength after a complete warm-up, and none lasted beyond a single session.',
          choices: [
            { id: 'apt501-u5-n2a', text: 'Conclude the finding is real but narrow. It covers long holds immediately before maximal efforts, says little about brief stretches inside a full warm-up, and nothing about long-term effects', to: 'apt501-u5-n4',
              quality: 'best', feedback: 'Exactly. The review answers its own question well; the error would be applying that answer to questions it never asked. This is indirectness, spotted in the wild.' },
            { id: 'apt501-u5-n2b', text: 'Go hunting for subgroup analyses by stretch duration before concluding anything', to: 'apt501-u5-n4',
              quality: 'acceptable', feedback: 'Good instinct. Duration subgroups are where the nuance in this literature lives. Just pair it with the larger observation: every trial tested strength minutes after stretching, so the gap between an acute dip and a long-term effect stands whatever the subgroups say.' },
            { id: 'apt501-u5-n2c', text: 'The pooled effect is statistically clear, so the direction is settled: stretching harms strength', to: 'apt501-u5-n4',
              quality: 'poor', feedback: 'A statistically clear answer to a different question is still a different question. “Harms strength for a few minutes after a 60-second hold” and “harms strength” are not the same claim.' },
          ],
        },
        {
          id: 'apt501-u5-n3',
          situation:
            'A week later one of your own clients asks anxiously whether she has to stop, because “Marcus says the science is settled.” She is 61, stretches daily, lifts pain-free and loves her routine.',
          choices: [
            { id: 'apt501-u5-n3a', text: 'Tell her you will read the actual review this week and come back with exactly what it does and does not show for someone like her', to: 'apt501-u5-n2',
              quality: 'best', feedback: 'The professional recovery: you decline to transmit a claim you have not verified, and you have promised her an answer scaled to her rather than to a headline.' },
            { id: 'apt501-u5-n3b', text: 'Tell her to drop the stretching, on the grounds that it is better to be safe than sorry', to: null,
              quality: 'poor', feedback: '“Better safe” assumes the paper showed danger in her situation. It showed a small, brief strength dip after long holds. It said nothing about her health, her enjoyment or her actual training. You have now repeated Marcus’s mistake inside her program.' },
          ],
        },
        {
          id: 'apt501-u5-n4',
          situation:
            'You have read the paper properly. Meanwhile Marcus is telling anyone who will listen that “science says never stretch.” What do you do with what you now know?',
          choices: [
            { id: 'apt501-u5-n4a', text: 'Fit your practice to the actual finding, so no long static holds right before maximal lifts while brief stretching stays where clients value it, and offer to walk Marcus through the forest plot over a coffee', to: null,
              quality: 'best', feedback: 'Programming matched to what was actually studied, plus the quiet collegial correction. Notice that the paper partly supports him. Conceding that openly is what makes the rest of your reading credible.' },
            { id: 'apt501-u5-n4b', text: 'Fix your own programming and let Marcus be', to: null,
              quality: 'acceptable', feedback: 'Your clients are well served, and picking battles is legitimate. But unchallenged, “the science is settled” keeps spreading to people who train beside your clients, and showing one colleague one forest plot is cheap.' },
            { id: 'apt501-u5-n4c', text: 'Post in the gym group chat that Marcus doesn’t understand research', to: null,
              quality: 'poor', feedback: 'Public point-scoring turns an evidence question into a status fight. Everyone remembers the argument and nobody remembers the finding, which, awkwardly, partly supports him.' },
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
        '“SCIENCE CONFIRMS: collagen builds muscle. A new review from researchers at a leading supplement company pooled the eight best collagen trials, hand-picked for quality, weighting the larger trials more heavily, and found a significant effect on lean mass (SMD 0.21, 95% CI −0.05 to 0.47). Results were remarkably consistent across studies (I² = 78%). With all eight trials pointing the same way, publication bias is clearly not a concern. The search covered the major databases. And since meta-analysis is the highest form of evidence, the debate is over: every adult who trains should be supplementing collagen today.”',
      findings: [
        { id: 'apt501-u5-e1', text: '“hand-picked for quality”', isError: true,
          rationale: 'Hand-picking is the opposite of systematic. Inclusion criteria are fixed in advance precisely so authors cannot choose the studies that flatter their answer.' },
        { id: 'apt501-u5-e2', text: '“a significant effect … (SMD 0.21, 95% CI −0.05 to 0.47)”', isError: true,
          rationale: 'The interval crosses zero. By the paper’s own numbers this result is not statistically significant, and the point estimate is small besides.' },
        { id: 'apt501-u5-e3', text: '“remarkably consistent across studies (I² = 78%)”', isError: true,
          rationale: 'I² = 78% is high heterogeneity: the trials substantially disagree. The sentence claims the opposite of its own statistic.' },
        { id: 'apt501-u5-e4', text: '“publication bias is clearly not a concern”', isError: true,
          rationale: 'Eight uniformly positive trials from one industry is a reason for more suspicion, not less. Eight studies is also too few for any funnel-plot method to rule bias out.' },
        { id: 'apt501-u5-e5', text: '“The search covered the major databases”', isError: true,
          rationale: 'A systematic search names its databases, dates, and terms so it can be repeated. “The major databases” is unverifiable, which defeats the point of searching systematically.' },
        { id: 'apt501-u5-e6', text: '“meta-analysis is the highest form of evidence, the debate is over”', isError: true,
          rationale: 'The label buys nothing by itself. A pooled estimate is only as good as the trials inside it and its match to your question. Hierarchy positions are starting assumptions, not verdicts.' },
        { id: 'apt501-u5-e7', text: '“every adult who trains should be supplementing collagen today”', isError: true,
          rationale: 'A universal practice command from one small, non-significant, heterogeneous pooled estimate skips certainty, population match and cost entirely. That is several layers of judgement compressed into marketing.' },
        { id: 'apt501-u5-e8', text: '“from researchers at a leading supplement company”', isError: false,
          rationale: 'Disclosing who did the work is proper practice. Funding is a reason to raise your scrutiny of the methods. By itself it is not an error.' },
        { id: 'apt501-u5-e9', text: '“weighting the larger trials more heavily”', isError: false,
          rationale: 'That is simply how meta-analysis works. Precision-based weighting is correct method, not spin.' },
      ],
    },

    // 9 ── active-recall set ─────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt501-u5-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'apt501-u5-r1', front: 'What makes a review systematic rather than narrative?',
          back: 'A pre-specified question, a documented and repeatable search, and inclusion rules fixed before the results are known. The choosing process is visible.' },
        { id: 'apt501-u5-r2', front: 'On a forest plot, what does the size of each square mean?',
          back: 'That study’s weight in the pooled result. Larger, more precise trials get bigger squares and more influence.' },
        { id: 'apt501-u5-r3', front: 'What is the diamond, and where is its confidence interval?',
          back: 'The pooled estimate. Its width IS the interval, so the tips are the bounds and it carries no whiskers.' },
        { id: 'apt501-u5-r4', front: 'What does I² tell you, in plain terms?',
          back: 'Roughly what share of the between-study spread is real disagreement rather than chance. About 25/50/75% mark low, moderate and high, as rough guides rather than verdicts.' },
        { id: 'apt501-u5-r5', front: 'A funnel plot missing its bottom corner on the null side means…',
          back: 'Small null studies are likely missing from the published record, so the literature you can find overstates the effect.' },
        { id: 'apt501-u5-r6', front: 'Garbage in, garbage out, in one sentence?',
          back: 'Pooling shrinks random error only; bias in the trials pools right along with the data, so a meta-analysis of weak trials is a precise estimate of a biased answer.' },
        { id: 'apt501-u5-r7', front: 'The four GRADE certainty levels?',
          back: 'High, moderate, low and very low. Each says how confident we are that the true effect sits close to the estimate.' },
        { id: 'apt501-u5-r8', front: 'The five standard reasons GRADE downgrades certainty?',
          back: 'Risk of bias, inconsistency, indirectness, imprecision, and publication bias.' },
        { id: 'apt501-u5-r9', front: 'Recommendation strength versus evidence certainty: why are they separate dials?',
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
          explanation: 'Pre-specified questions, searches, and inclusion rules exist because honest experts still select evidence unconsciously. Memory and allegiance do the cherry-picking for them.',
          options: [
            { id: 'apt501-u5-q1a', text: 'His study selection is invisible, so nobody, including him, can check what memory and allegiance left out', correct: true, rationale: 'Correct: the failure mode is unauditable selection, not dishonesty.' },
            { id: 'apt501-u5-q1b', text: 'Narrative reviews are not permitted to cite randomised trials', correct: false, rationale: 'They can cite anything; the problem is how the citations get chosen.' },
            { id: 'apt501-u5-q1c', text: 'Coaches cannot understand statistics well enough to review evidence', correct: false, rationale: 'Credentials are not the issue. The method of selection is.' },
          ] },
        { id: 'apt501-u5-q2', kind: 'single', cognitive: 'application',
          prompt: 'On a forest plot, one study’s square is tiny and its whiskers stretch well across both sides of the line of no effect. What have you learned about that study?',
          options: [
            { id: 'apt501-u5-q2a', text: 'It found that the intervention does not work', correct: false, rationale: 'Its interval is compatible with benefit, harm and nothing. That is not a null finding, it is an uninformative one.' },
            { id: 'apt501-u5-q2b', text: 'It is small and imprecise: little weight in the pool, and on its own it cannot tell benefit from harm from nothing', correct: true, rationale: 'Correct. Small square, wide whiskers: low weight, low information.' },
            { id: 'apt501-u5-q2c', text: 'It should have been excluded from the review', correct: false, rationale: 'Imprecise studies still carry information; the weighting already scales their influence honestly.' },
          ] },
        { id: 'apt501-u5-q3', kind: 'single', cognitive: 'recall',
          prompt: 'A meta-analysis reports I² = 80%. What does that mean?',
          options: [
            { id: 'apt501-u5-q3a', text: '80% of participants improved', correct: false, rationale: 'I² says nothing about individual responses.' },
            { id: 'apt501-u5-q3b', text: 'Most of the spread between study results appears to be real disagreement rather than chance', correct: true, rationale: 'Correct. High heterogeneity means the studies are answering differently.' },
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
            { id: 'apt501-u5-q5b', text: 'Random error is small, but the systematic bias in every trial pooled right along with the data, so this may be a precise estimate of a wrong answer', correct: true, rationale: 'Correct: garbage in, garbage out, with a tidy interval drawn around the garbage.' },
            { id: 'apt501-u5-q5c', text: 'Nothing, because confidence intervals are meaningless in meta-analysis', correct: false, rationale: 'The interval means exactly what it says about random error; it is silent about bias.' },
          ] },
        { id: 'apt501-u5-q6', kind: 'single', cognitive: 'analysis',
          prompt: 'Two respected bodies publish guidelines on aerobic training for the same population, and their recommendations differ. What is the most professionally useful reading of that disagreement?',
          options: [
            { id: 'apt501-u5-q6a', text: 'One of the panels must be incompetent or bought', correct: false, rationale: 'Honest panels split on borderline evidence; corruption is not the default explanation.' },
            { id: 'apt501-u5-q6b', text: 'Different questions, search dates and judgement calls can honestly split panels. The disagreement maps where evidence is thin, so hold your own practice more lightly there', correct: true, rationale: 'Correct: guideline disagreement is information about uncertainty, not a scandal.' },
            { id: 'apt501-u5-q6c', text: 'Ignore both and follow the newest single trial instead', correct: false, rationale: 'One trial is the weakest possible tiebreaker between two syntheses.' },
          ] },
        { id: 'apt501-u5-q7', kind: 'single', cognitive: 'synthesis',
          prompt: 'A client asks whether she should switch to blood-flow-restriction training after seeing a transformation post. Which reading sequence best matches this unit?',
          explanation: 'Synthesis first, three stamps next, plot before abstract, and a client-specific decision at the end. That is the whole workflow in one sentence.',
          options: [
            { id: 'apt501-u5-q7a', text: 'Find the most recent systematic review or guideline, check its date, population, and outcomes against her, read the forest plot before the abstract, then decide what changes for her program', correct: true, rationale: 'Correct. The full routine, aimed at her rather than at the literature in general.' },
            { id: 'apt501-u5-q7b', text: 'Find the single most recent RCT, since the newest evidence supersedes older reviews', correct: false, rationale: 'Recency does not outrank synthesis; one trial is one row on the plot.' },
            { id: 'apt501-u5-q7c', text: 'Read the abstracts of the top five search results and go with the majority conclusion', correct: false, rationale: 'An abstract vote is a spin vote; abstracts are the most polished and least reliable part of a paper.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt501-u5-teach',
      title: 'Teach it back',
      prompt:
        'Your client Priya arrives rattled. Her brother-in-law sent her a study, one randomised trial with twenty participants, “proving” that the moderate-intensity cardio in her program is a waste of time and only intervals work. She wants to scrap her plan. In plain, warm language, explain why one study contradicting her program isn’t the whole story, and what you’ll do about it.',
      modelAnswer:
        'I’m glad you sent this instead of quietly worrying about it, and I promise your program isn’t built on wishful thinking. Here’s the thing about a single study: it’s one row on a much bigger chart. Twenty people for a few weeks is a glimpse, and small glimpses swing hard on chance. Run that exact study ten times and you’d get ten different answers. That’s not a flaw in science; it’s the reason scientists pool trials before changing their minds. And when researchers do pool the cardio trials, steady work and intervals both build fitness. The reviews and the major guidelines agree on that, and the gap between the two styles is tiny next to the gap between doing either one and doing neither. So one small trial pointing the other way doesn’t erase the pile; it joins it. Here’s what I’ll do: I’ll read it properly this week and check whether the people in it even resemble you. Half the time they don’t. If the bigger picture ever genuinely shifts, your program shifts with it, and you’ll hear it from me first. Deal?',
      rubric: [
        { id: 'apt501-u5-t1', text: 'Explains why one small study cannot overturn a body of evidence, without dismissing research itself' },
        { id: 'apt501-u5-t2', text: 'Places the study accurately: one row in a larger synthesis, with reviews and guidelines carrying more weight' },
        { id: 'apt501-u5-t3', text: 'Checks applicability by asking whether the study’s population and protocol resemble the client' },
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
            { id: 'apt501-u5-cu1a', text: 'When the review pools trials that are biased, wildly heterogeneous, or aimed at a different population than yours. Position in the hierarchy is a starting assumption, not a guarantee', correct: true, rationale: 'Correct: the hierarchy ranks designs on average; each individual paper still has to earn its rank.' },
            { id: 'apt501-u5-cu1b', text: 'Never, because the hierarchy is fixed', correct: false, rationale: 'A pooled estimate built from weak or mismatched trials can be worth less than one strong, relevant trial.' },
            { id: 'apt501-u5-cu1c', text: 'Whenever the single RCT is newer than the review', correct: false, rationale: 'Recency alone does not outrank synthesis. The new trial becomes one more row for the next review.' },
          ] },
        { id: 'apt501-u5-cu2', kind: 'single', cognitive: 'application',
          prompt: 'A pooled result reads: mean difference +0.3 kg lean mass over 12 weeks, 95% CI 0.09 to 0.51, described as “significant”. Recalling what you learned about confidence intervals and effect sizes, what is the fair client-facing translation?',
          explanation: '“Significant” answered “is it distinguishable from zero?”, which is a different question from “is it big enough to care about?”. The interval answers both if you actually read it.',
          options: [
            { id: 'apt501-u5-cu2a', text: 'The effect is real but small. Even the optimistic end of the interval is modest, so whether it matters depends on her goals', correct: true, rationale: 'Correct: statistically clear, practically small, decision left where it belongs, with the client’s context.' },
            { id: 'apt501-u5-cu2b', text: '“Significant” means the gains are large and reliable for her', correct: false, rationale: 'Statistical significance says distinguishable from zero, not big.' },
            { id: 'apt501-u5-cu2c', text: 'The result is meaningless because 0.3 kg is tiny', correct: false, rationale: 'Dismissing a real, precisely estimated effect is as sloppy as inflating it. Small and real is exactly what she deserves to hear.' },
          ] },
        { id: 'apt501-u5-cu3', kind: 'single', cognitive: 'analysis',
          prompt: 'A meta-analysis pools fifteen observational cohort studies linking a supplement to longer life. Thinking back to confounding: what has the pooling fixed?',
          explanation: 'People who buy supplements also exercise more, smoke less, and see doctors sooner. That healthy-user pattern sits inside every cohort, so it sits inside the pool too, with a narrower interval around it.',
          options: [
            { id: 'apt501-u5-cu3a', text: 'Only the random error. The healthy-user confounding lives inside every cohort and pools right along with them', correct: true, rationale: 'Correct: pooling narrows intervals; it cannot randomise anyone after the fact.' },
            { id: 'apt501-u5-cu3b', text: 'Both chance and confounding, since the combined sample is now enormous', correct: false, rationale: 'Sample size shrinks chance, never confounding. A bigger biased sample is just more confidently biased.' },
            { id: 'apt501-u5-cu3c', text: 'It has upgraded the evidence to randomised-trial level', correct: false, rationale: 'Design does not change by aggregation; fifteen cohorts pooled are still observational.' },
          ] },
      ],
    },
  ],
};
