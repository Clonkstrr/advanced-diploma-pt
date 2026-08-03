import type { Unit } from '../../../types/content';

export const unit03: Unit = {
  id: 'apt501-u3',
  code: 'APT 501.2',
  title: 'Correlation, Causation and How Studies Mislead',
  summary:
    'Why “users get better results” and “it worked for me” so often mislead: confounding, reverse causation, the named biases, expectancy, and regression to the mean — and how to weigh a causal claim when no trial exists.',
  // New material even for a certified PT — this unit keeps the full mastery gate.
  qc: {
    sources: [
      { citation: 'Celentano & Szklo — Gordis Epidemiology, 6th ed. (confounding, bias, and causal-inference chapters)', year: 2019, evidenceType: 'Textbook', verified: false },
      { citation: 'Hill, A.B. — “The Environment and Disease: Association or Causation?”, Proceedings of the Royal Society of Medicine 58(5): 295–300', year: 1965, evidenceType: 'Classic methods paper', verified: false },
      { citation: 'Kahneman, D. — Thinking, Fast and Slow (Part III: regression to the mean and causal illusions)', year: 2011, evidenceType: 'Book', verified: false },
      { citation: 'Greenhalgh, T. — How to Read a Paper: The Basics of Evidence-Based Medicine and Healthcare, 6th ed.', year: 2019, evidenceType: 'Textbook', verified: false },
      { citation: 'Beedie, C.J. & Foad, A.J. — “The Placebo Effect in Sports Performance: A Brief Review”, Sports Medicine 39(4): 313–329', year: 2009, evidenceType: 'Narrative review', verified: false },
      { citation: 'Bland, J.M. & Altman, D.G. — “Regression towards the mean” (BMJ Statistics Notes series)', year: 1994, evidenceType: 'Methods note', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-08-03',
    reviewBy: '2027-08-03',
    controversies:
      'The size of true placebo effects is debated — on objective outcomes they may be small to nil (placebo analgesia is the best-supported case), and the open-label placebo literature is young, small, and centred on self-reported outcomes. How far modern causal-inference methods can rescue observational data for causal claims is an active methodological argument. Bradford Hill’s considerations are widely misused as a scoring checklist, which Hill himself explicitly warned against.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u3-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt501-u3-p1', kind: 'single', cognitive: 'application',
          prompt: 'A supplement brand posts: “Gym members who use our protein powder hit personal records 40% more often than members who don’t.” What is the strongest reason to doubt that the powder is the cause?',
          options: [
            { id: 'a', text: 'People who buy and consistently use protein powder likely also train harder, eat better, and sleep more — those habits could be driving the PRs', correct: true, rationale: 'A third factor (health-conscious behaviour) can produce both the powder use and the PRs.' },
            { id: 'b', text: 'Personal records can’t be measured objectively', correct: false, rationale: 'PRs are among the more measurable things in a gym; measurement isn’t the core problem here.' },
            { id: 'c', text: 'A 40% difference is too large to be real', correct: false, rationale: 'Large differences can be perfectly real and still say nothing about what caused them.' },
          ] },
        { id: 'apt501-u3-p2', kind: 'single', cognitive: 'recall',
          prompt: 'A coach’s Instagram shows forty striking before-and-after transformations. Which bias makes this weak evidence that the coaching works?',
          options: [
            { id: 'a', text: 'Survivorship bias — you see only the people it worked for; clients who quit or didn’t respond appear nowhere', correct: true },
            { id: 'b', text: 'Recall bias — the clients probably misremember their starting weight', correct: false, rationale: 'Memory isn’t the issue; the photos are accurate. The issue is who is missing.' },
            { id: 'c', text: 'Nocebo — negative expectations harmed the clients not shown', correct: false, rationale: 'Nocebo is about expectation of harm producing harm; it doesn’t explain a curated photo wall.' },
          ] },
        { id: 'apt501-u3-p3', kind: 'single', cognitive: 'application',
          prompt: 'A client’s knee pain hit 9/10 last week — the worst it has ever been — so she bought a massage gun. A week later it’s a 4/10 and she’s convinced. What alternative explanation should you have in mind?',
          options: [
            { id: 'a', text: 'Pain at an all-time extreme tends to drift back toward its usual level regardless of what you do — regression to the mean', correct: true, rationale: 'She acted at her worst, which is exactly when improvement was most likely to happen anyway.' },
            { id: 'b', text: 'The massage gun increased local blood flow', correct: false, rationale: 'That is the claim being tested, not an alternative explanation for the pattern.' },
            { id: 'c', text: 'She probably exaggerated the original 9/10', correct: false, rationale: 'You don’t need to doubt her honesty; the pattern is expected even with perfectly accurate reports.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt501-u3-outcomes',
      outcomes: [
        { level: 'recall', text: 'Define confounding, reverse causation, placebo and nocebo effects, and regression to the mean, and name the biases that distort who is studied, who remains, what is remembered, and what gets published.' },
        { level: 'application', text: 'Given a fitness claim or testimonial, identify the most likely non-causal explanations and say what evidence would distinguish them.' },
        { level: 'analysis', text: 'Explain why randomization deals with confounding when statistical adjustment cannot, and appraise a sponsored study using its funding and disclosure statements.' },
        { level: 'synthesis', text: 'Talk a client through a misleading claim — kindly — using regression to the mean, expectancy, or confounding, without lecturing or belittling anyone.' },
      ],
    },

    // 3 ── core instruction (five concept blocks) ────────────────────────────
    {
      type: 'concept', id: 'apt501-u3-c1', heading: 'Four stories every correlation could be telling',
      body:
        'Walk through any gym and you’ll notice it: the members who take supplements are, on the whole, in better shape than the ones who don’t. The greens-powder crowd is leaner. The creatine users lift more. It’s the most natural thing in the world to conclude that the products are working — and it’s exactly the conclusion the industry needs you to draw. But “these two things go together” and “this thing causes that thing” are different claims, and the gap between them is where most fitness misinformation lives.\n\nA correlation just means two things vary together. Whenever you see one, there are at least four stories that could be producing it, and only one of them is the story the headline wants. Story one: X really does cause Y. The supplement works. Possible, and sometimes true. Story two runs the arrow backwards: Y causes X. Ask yourself — do strong people deadlift, or does deadlifting make people strong? Both, almost certainly. People whose build and temperament suit heavy pulling get early wins, enjoy them, and keep pulling, while people who find it awkward drift toward other lifts. A snapshot showing “deadlifters are stronger” can’t tell you how much of that strength the deadlift built and how much walked in the door with them. This is reverse causation, and it’s everywhere in health data: illness disrupts sleep, so long, broken sleep correlates with poor health partly because sickness produces the sleep pattern, not only the other way around.\n\nStory three is the big one: something else drives both. That’s confounding, and it gets the whole next lesson, because it’s the machinery behind the supplement-takers observation you started with. Story four is the humblest: chance. Measure enough things in a small enough group and some of them will line up by luck. The client who PRs every time she wears her grey shirt isn’t discovering sports science; she’s discovering that small samples throw patterns the way a campfire throws sparks.\n\nHere’s the habit this unit is trying to build. When a claim arrives in the shape “people who do X get Y” — clients who train fasted lose more fat, athletes who ice-bathe recover faster, members who buy coaching packages progress quicker — don’t ask “is that true?” first. Ask two better questions: could Y be producing X? And what else is true of the people who do X? Only when both of those come up empty does “X causes Y” start to earn its place at the table.',
    },
    {
      type: 'concept', id: 'apt501-u3-c2', heading: 'Confounding, and why randomization is the honest referee',
      body:
        'Think hard about the person who takes a greens powder every single morning for a year. Not the powder — the person. Someone who buys a health product, remembers it daily, and sticks with it for twelve months is showing you a whole pattern of behaviour: she probably also sleeps on a schedule, trains without being chased, cooks more than she orders in, drinks less than average, and books the dentist before the tooth hurts. Researchers call this cluster health-conscious behaviour, and here’s the problem — that cluster produces better health and better gym results all by itself. Powder-takers will outperform non-takers even if the powder is ground-up lawn clippings. The behaviour pattern drives both the taking and the results.\n\nThat’s confounding: a third variable that influences both the exposure (taking the supplement) and the outcome (getting results), manufacturing a correlation between two things that may have no causal connection at all. The version you just met is so common it has its own name — healthy-user bias — and it flatters nearly every voluntary health behaviour ever studied. It’s also behind one of the most expensive lessons in modern medicine. For years, observational studies showed that women taking hormone replacement therapy had less heart disease, and prescribing practice leaned on that. When a large randomized trial finally tested the question, the apparent heart protection didn’t hold up — the women who chose HRT had simply been healthier and better connected to healthcare in the first place. The correlation was real. The causation was not.\n\nRandomization is the tool that deals with this, and it’s worth understanding exactly why it works. If a coin flip decides who takes the supplement and who takes an identical dummy, then health-conscious people land in both groups in roughly equal numbers. So do lazy people, wealthy people, good sleepers, hard trainers — and, this is the part that matters most, so do people who differ in ways nobody measured or even thought of. Randomization doesn’t need to know what the confounders are in order to balance them. Given enough participants, the only systematic difference left between the groups is the thing being tested. That is the entire reason the randomized controlled trial sits where it does in the evidence hierarchy from your study-design unit.\n\nObservational researchers aren’t helpless — they adjust. Measure age, training experience, and diet quality, and you can statistically compare powder-takers and non-takers who match on those things. But adjustment has a ceiling: it only works on confounders you measured, and only as well as you measured them. Diet quality captured by a two-page questionnaire is measured badly, so some of its confounding survives the adjustment — that leftover is called residual confounding — and conscientiousness probably wasn’t measured at all. This is why adjusted observational findings are better than raw ones yet still not proof, and why, when a good randomized trial and an observational study disagree about causation, the trial usually deserves your vote.',
    },
    {
      type: 'concept', id: 'apt501-u3-c3', heading: 'Biases with names — and who paid for the study',
      body:
        'Bias in research doesn’t mean anyone lied. It means the way the data was collected tilted the answer before anyone analysed a number. The tilt comes in recurring shapes, and the shapes have names worth knowing, because once you can name them you start seeing them everywhere.\n\nSelection bias is about who gets into the study at all. Recruit for a training study with posters in a powerlifting gym and your sample already trains, already believes, and already tolerates heavy loading — whatever you find may say nothing about the deconditioned 55-year-old who walks into your studio on Monday. A survey shared inside a fasting community will discover that fasting communities like fasting. The question to ask of any study: who had the chance to be in this, and who was never going to be?\n\nSurvivorship bias is selection’s sneakiest form: you only see the cases that made it. A coach’s page with forty stunning transformation photos looks like overwhelming evidence, but a wall of survivors tells you nothing about the denominator. If two hundred people started and a hundred and sixty quietly quit, the photos document the forty — and the hundred and sixty have no photo, no testimonial, and no voice. The classic illustration comes from the Second World War: analysts studying returning bombers mapped where the planes had been shot and proposed armouring those spots, until the statistician Abraham Wald pointed out they were only looking at planes that came back. The fatal hits were on the planes nobody could examine. Transformation walls are returning bombers.\n\nRecall bias corrupts what people remember — and it corrupts unevenly. People asked to recall last month’s eating reliably under-report it, not because they’re dishonest but because memory smooths, forgets, and flatters. Worse, people with a problem search their memory harder than people without one. The client whose shoulder started hurting will comb through everything she did that week and land on the deadlifts; a pain-free client who had the identical week never files a report at all. Any study that asks injured and uninjured people to remember their training is fighting this, and usually losing.\n\nAttrition is the study-length version of survivorship: people drop out, and they don’t drop out at random. In diet trials, the people a diet is failing are exactly the ones who stop turning up to weigh-ins. Analyse only the completers and every diet looks like a winner. That’s why well-run trials analyse everyone who was randomized, dropouts included — a rule called intention-to-treat — and it’s why honest trial results always look modest next to testimonial land. The modesty is the honesty.\n\nTwo more distortions operate after the data is in. Publication bias means exciting positive results get written up and published while null results sit in file drawers, so the literature you can read is sunnier than the research that was actually done — you’ll take that apart properly in unit five. And money shapes what exists in the first place. Sponsored research isn’t automatically wrong, but across nutrition and supplement science, industry-funded studies reach sponsor-friendly conclusions more often than independently funded ones — through the questions asked, the comparators chosen, and what gets submitted for publication, not usually through fraud. Your defence is a thirty-second habit: find the disclosure. Near the end of almost every published paper sits a conflict-of-interest statement and a funding statement. “This study was funded by the manufacturer” doesn’t end the conversation, but it changes the standard — a sponsor-funded finding earns belief when independent teams reproduce it, not before. And when an ad cites “a clinical study” with no authors, no journal, and no disclosure to check, that isn’t evidence being offered. It’s the costume evidence wears.',
    },
    {
      type: 'concept', id: 'apt501-u3-c4', heading: 'Placebo, nocebo, and what “I felt it work” actually tells you',
      body:
        'A client starts a new pre-workout and has her best session in a month. “Don’t tell me this stuff doesn’t work — I felt it.” She’s not wrong about the feeling. The mistake would be about what the feeling proves.\n\nExpectation has physiology. Believing you’ve taken something effective changes arousal, pain perception, perceived effort, and — in sports studies — measurable performance. Cyclists told they’ve received caffeine produce more power even when they’ve had none; lifters handed a “new ergogenic aid” that is actually cornstarch pull harder. This is the placebo effect, and the point to hold onto is that it’s real: genuine changes in output, produced by belief and ritual rather than by the ingredient. The ingredient in her pre-workout may also do something — caffeine certainly does — but her great session can’t tell her how the credit splits.\n\nThat’s why “I felt it work” is data about perception, not about mechanism. A feeling is the output of a system that includes what you swallowed, what you expected, how you slept, and how the last session went. The feeling is genuine; its cause is up for grabs. This is the entire reason trials blind their participants: give one group the real thing and another an identical dummy, let nobody know who got what, and you can subtract expectation to see what the ingredient does on its own. A supplement that only beats placebo when people know they’re taking it isn’t beating placebo at all — what’s being purchased is the belief.\n\nThe effect runs in reverse too, and the reverse concerns you professionally. Nocebo is expectation of harm producing harm. Tell a client her knees are fragile, her spine is “out”, or that deadlifts are dangerous for someone “like her”, and you can generate guarding, apprehension, and genuine pain experiences the barbell never caused. Words are active substances in coaching. That doesn’t mean sugar-coating real risk; it means describing bodies as adaptable rather than fragile, because clients live inside the descriptions they’re given.\n\nOne genuinely interesting wrinkle before we move on. In several trials, researchers have handed people pill bottles labelled “placebo”, explained openly that placebos can help, and still measured improvement — mostly in subjective outcomes like pain, fatigue, and irritable-bowel symptoms. Open-label placebo suggests the ritual and the expectancy can do work without any deception, though the research is young and nothing similar has been shown for objective outcomes like muscle growth. The practical reading for you: never lie to clients, and notice that you never need to. Confidence, ceremony, and a plan the client believes in are legitimate tools — you just don’t get to sell the ceremony as chemistry.',
    },
    {
      type: 'concept', id: 'apt501-u3-c5', heading: 'Regression to the mean, and thinking causally without a trial',
      body:
        'Anything that fluctuates — pain, sleep, motivation, bodyweight, bar speed — spends most of its time near its own average and visits its extremes only occasionally. An unusually bad reading is usually part real, part bad luck, and the bad-luck part doesn’t repeat. Measure again next week and the number has drifted back toward normal: not because anything intervened, but because that’s what fluctuating measures do. Statisticians call it regression to the mean, and it may be the single most profitable illusion in the fitness industry.\n\nHere’s why it matters so much to you: people act at their extremes. Nobody hires a trainer during an average week. Clients call when the pain is worst, the scale is highest, the motivation crisis is deepest — and whatever they try next collects the credit for a return toward normal that was already on its way. The same trap powers the plateau-buster economy. A lifter stalls (an extreme low in progress), buys the “plateau-shattering” program, and — since plateaus end — progress resumes. The program earns a glowing testimonial for something the calendar did. It’s also why testimonials cluster at rock bottom: “I was at my lowest point when I found X” isn’t a moving coincidence. It’s the mechanism.\n\nNow sit with the uncomfortable part: some of your own results are this. Clients improve after hiring you partly because they hired you at their worst. That isn’t a reason for false modesty — coaching genuinely works — it’s a reason to judge your methods by something sturdier than after-minus-before. It’s also a reason for kindness. The client crediting her detox tea isn’t being stupid; she’s running the same cause-seeking software everyone runs. Human minds see stories, not sampling error. Your job is never to sneer at the software. Your job is to know when it misfires.\n\nSo if only a controlled comparison can truly separate cause from coincidence, are you helpless whenever no trial exists? Not quite. In 1965 the epidemiologist Austin Bradford Hill — facing exactly this problem with smoking and lung cancer, where a randomized trial would have been both impossible and monstrous — set out a list of considerations for weighing causal claims built on observational evidence. Not a checklist, he insisted: prompts for judgement. Is the association strong, rather than a sliver? Is it consistent, showing up across different studies, populations, and methods? Is there a dose-response — more exposure, more effect? Does the cause come before the effect? (That one is non-negotiable.) Is it biologically plausible, and does experimental evidence, wherever any exists, point the same way?\n\nRun “resistance training builds bone density” through those prompts: the association is consistent across dozens of populations, loading shows a dose-response, mechanical strain driving bone adaptation is plausible and fits everything else known about bone, and trials confirm it where they exist. You can hold that causal claim with confidence and no single decisive mega-trial. Run “greens powder causes vitality” through the same prompts and watch it fail nearly every one. That’s the skill this unit has been building — not cynicism about every claim, but calibrated confidence: knowing which stories about a correlation survive interrogation, and which were never more than two lines crossing on a chart.',
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt501-u3-visual',
      title: 'Why supplement-takers look healthier: the confounding triangle',
      diagramId: 'confounding-triangle',
      caption: 'The dashed line is what the study observed. The solid arrows are what produced it.',
      callouts: [
        { id: 'apt501-u3-v1', label: '1', text: 'The study only ever measured the bottom two corners — supplement use and results. The top corner is invisible in the data unless someone thought to measure it.' },
        { id: 'apt501-u3-v2', label: '2', text: 'Health-conscious behaviour drives both corners: the person who takes the powder daily also sleeps, trains, and eats in ways that produce results on their own.' },
        { id: 'apt501-u3-v3', label: '3', text: 'Randomization cuts the left arrow. When a coin flip decides who takes the supplement, health-conscious people land equally in both groups — measured and unmeasured traits alike.' },
        { id: 'apt501-u3-v4', label: '4', text: 'Statistical adjustment can only shrink arrows researchers measured, and only as well as they measured them. What survives is residual confounding.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt501-u3-worked',
      title: 'Unpicking a plausible claim, step by step',
      scenario:
        'Your client Sarah forwards you an article: “Study of 12,000 gym-goers finds fish-oil users gained 15% more lean mass over two years.” She’s on the checkout page and wants your blessing.',
      steps: [
        { id: 'apt501-u3-w1', title: 'Find the causal jump',
          reasoning: 'The study observed that fish-oil use and lean-mass gain go together. The headline — and Sarah’s shopping cart — quietly upgrade that to “fish oil builds muscle”. The whole question is whether the upgrade is earned. Nothing about 12,000 participants earns it: sample size fixes chance, not confounding.' },
        { id: 'apt501-u3-w2', title: 'Run the reverse-causation check',
          reasoning: 'Could gaining muscle lead to fish-oil use, rather than the reverse? Plausibly. People who see themselves progressing invest in their training identity — supplements included — while people whose training is going nowhere buy less of everything. The arrow could point backwards, at least partly.' },
        { id: 'apt501-u3-w3', title: 'Audit the confounders',
          reasoning: 'Who takes a capsule daily for two years? Someone conscientious. The habitual fish-oil taker likely also trains more consistently, eats more protein, sleeps better, and earns more (capsules and salmon both cost money). Every one of those independently builds lean mass. The paper “adjusted for age, sex, and training frequency” — three measured confounders, leaving diet, sleep, income, and conscientiousness untouched.' },
        { id: 'apt501-u3-w4', title: 'Ask what design would settle it',
          reasoning: 'A randomized trial: assign fish oil or an identical placebo by coin flip, blind everyone, measure lean mass. Randomization balances the conscientiousness that adjustment can’t reach, and blinding subtracts expectancy. Such trials exist for many supplements, and their effects run far smaller than the observational ones — that shrinkage is the confounding being squeezed out.' },
        { id: 'apt501-u3-w5', title: 'Say what the study can honestly support',
          reasoning: 'Not nothing. The association is real and worth testing properly, fish oil is safe for most people, and Sarah is free to buy it. The honest framing for her: “The 15% belongs to the whole package of habits fish-oil users have. If you want the 15%, copy the habits — the capsules are optional.”' },
      ],
      takeaway:
        'Big observational numbers are where claims begin, not where they’re settled. Run the same three checks every time: could the arrow run backwards, what kind of person chooses this exposure, and has anyone tested it against a fair comparison?',
    },

    // 6 ── interactive lab (classification) ──────────────────────────────────
    {
      type: 'classification', id: 'apt501-u3-lab',
      title: 'Lab: name that trap',
      instructions:
        'Each scenario illustrates one thinking trap more strongly than the others. Sort them. The point isn’t pedantry — it’s speed: with practice you’ll spot these mid-conversation, while the client is still talking.',
      buckets: [
        { id: 'apt501-u3-b-conf', label: 'Confounding / healthy-user bias' },
        { id: 'apt501-u3-b-rev', label: 'Reverse causation' },
        { id: 'apt501-u3-b-surv', label: 'Survivorship bias' },
        { id: 'apt501-u3-b-reg', label: 'Regression to the mean' },
        { id: 'apt501-u3-b-recall', label: 'Recall bias' },
      ],
      items: [
        { id: 'apt501-u3-l1', text: 'Members who pre-pay for ten PT sessions progress faster than drop-ins, so the gym claims its trainers cause faster progress',
          bucketId: 'apt501-u3-b-conf', rationale: 'People who pre-pay are more committed and organised before a single session happens; the commitment drives both the purchase and the progress.' },
        { id: 'apt501-u3-l2', text: 'A survey finds people who sleep nine-plus hours are less healthy than seven-hour sleepers; a blogger concludes long sleep damages health',
          bucketId: 'apt501-u3-b-rev', rationale: 'Illness produces long, unrefreshing sleep — the arrow plausibly runs from poor health to long sleep, and a snapshot can’t rule that out.' },
        { id: 'apt501-u3-l3', text: 'A fasting forum polls its members: 92% say fasting transformed their lives',
          bucketId: 'apt501-u3-b-surv', rationale: 'The people fasting didn’t help quit the forum long before the poll. The remaining members are the survivors, voting on themselves.' },
        { id: 'apt501-u3-l4', text: 'A client joins in January at her heaviest-ever weight and loses 3 kg in a month; the gym’s ad credits its “metabolic reset”',
          bucketId: 'apt501-u3-b-reg', rationale: 'She acted at her extreme, so some drift back toward her usual weight was likely regardless. Training helps too — but the ad is claiming all of it.' },
        { id: 'apt501-u3-l5', text: 'In an injury study, lifters with sore shoulders report far more “bad technique days” last month than pain-free lifters',
          bucketId: 'apt501-u3-b-recall', rationale: 'Injured people ransack their memory for causes and find them; pain-free people with the identical month never audit it at all.' },
        { id: 'apt501-u3-l6', text: 'The lifters with the biggest squats spend the most hours squatting, so a coach concludes volume is everything',
          bucketId: 'apt501-u3-b-rev', rationale: 'People who respond well to squatting keep squatting — enjoyment and results drive the volume at least as much as volume drives the results.' },
        { id: 'apt501-u3-l7', text: 'In a national survey, multivitamin users have lower disease rates than non-users',
          bucketId: 'apt501-u3-b-conf', rationale: 'The textbook healthy-user pattern: the vitamin habit marks the kind of person who does many protective things, any of which could drive the outcome.' },
        { id: 'apt501-u3-l8', text: '“Every one of the twelve athletes I’ve coached to nationals used my program” — a coach’s sales pitch',
          bucketId: 'apt501-u3-b-surv', rationale: 'The athletes the program didn’t take to nationals aren’t in the pitch. You’re being shown the planes that came back.' },
      ],
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt501-u3-case',
      title: 'Case: the 40,000-like testimonial',
      brief:
        'Priya, a client of eight months, arrives buzzing about a reel: a woman her age credits a “cortisol-balancing” powder for losing 8 kg after being stuck for a year. Forty thousand likes, hundreds of glowing comments. Priya’s finger is hovering over “buy now”. Walk the conversation; every choice is scored against best practice.',
      startNodeId: 'apt501-u3-n1',
      nodes: [
        {
          id: 'apt501-u3-n1',
          situation:
            'Priya plays you the reel and asks, half excited, half defensive: “This is legit, right? Look at the comments.”',
          choices: [
            { id: 'apt501-u3-n1a', text: 'Ask what grabbed her about it, and suggest watching it again together to see what else the woman changed', to: 'apt501-u3-n2',
              quality: 'best', feedback: 'Curiosity first. You can’t coach someone out of a belief you haven’t let them explain — and the reel itself usually contains the counter-evidence.' },
            { id: 'apt501-u3-n1b', text: 'Say: “That’s marketing junk, Priya. Cortisol powders are pseudoscience.”', to: 'apt501-u3-n3',
              quality: 'poor', feedback: 'You may be right about the powder, but verdict-first delivery makes her defend it. Now the powder has two allies: the influencer and her pride.' },
            { id: 'apt501-u3-n1c', text: 'Say it’s probably harmless and she can try it — but ask to look at it together before she orders', to: 'apt501-u3-n2',
              quality: 'acceptable', feedback: 'Keeping the door open is good; leading with “probably harmless” concedes the causal claim before either of you has looked at it.' },
          ],
        },
        {
          id: 'apt501-u3-n2',
          situation:
            'Watching again, you both notice: the woman mentions she also started lifting three times a week and quit alcohol “around the same time”. And every comment comes from the brand’s own hashtag.',
          choices: [
            { id: 'apt501-u3-n2a', text: 'Point out the two other changes and ask Priya which of the three she thinks did the heavy lifting — then mention who never posts: the buyers it didn’t work for', to: 'apt501-u3-n4',
              quality: 'best', feedback: 'You let the reel argue against itself: confounded changes, plus survivorship in the comments. Priya reaches the conclusion herself, which means she keeps it.' },
            { id: 'apt501-u3-n2b', text: 'Declare the testimonials fake', to: 'apt501-u3-n4',
              quality: 'poor', feedback: 'Probably wrong and definitely weak. The testimonials are likely real people — real survivors telling real stories is exactly how survivorship bias works. No fakery required.' },
            { id: 'apt501-u3-n2c', text: 'Suggest she just try the powder for a month and judge by her own results', to: 'apt501-u3-n4',
              quality: 'acceptable', feedback: 'Respecting her autonomy is right, but a one-person before-and-after with no plan can’t separate the powder from expectancy, her training, or a rebound from her worst. You’d be manufacturing the next testimonial.' },
          ],
        },
        {
          id: 'apt501-u3-n3',
          situation:
            'Priya goes quiet, then says: “You always shoot my ideas down. Forget I asked.”',
          choices: [
            { id: 'apt501-u3-n3a', text: 'Apologise for the delivery, say the question deserves better than a one-liner, and ask to watch it together', to: 'apt501-u3-n2',
              quality: 'best', feedback: 'Full recovery. The relationship carries the evidence — without it, the best reasoning in the world goes unheard.' },
            { id: 'apt501-u3-n3b', text: 'Hold your ground: “I’m just protecting you from wasting money.”', to: null,
              quality: 'poor', feedback: 'You win the argument and lose the influence. Next time she won’t ask — she’ll just buy.' },
          ],
        },
        {
          id: 'apt501-u3-n4',
          situation:
            'Priya, thoughtful now: “Okay. So what do I actually do — buy it or not?”',
          choices: [
            { id: 'apt501-u3-n4a', text: 'Give the honest position: the results in the reel ride on training and alcohol changes she can copy for free; if she still wants the powder, fine — you’ll track sleep, training, and measurements either way so credit lands where it belongs. And if her weight has truly been stuck a year despite solid habits, a GP visit is worth it.', to: null,
              quality: 'best', feedback: 'Autonomy, honesty, a measurement plan, and a scope-aware referral flag — the whole unit in one answer.' },
            { id: 'apt501-u3-n4b', text: 'Say “I wouldn’t bother” and move on to the session', to: null,
              quality: 'acceptable', feedback: 'Honest and efficient, but a teaching moment died here — and unexplained verdicts don’t transfer to the next reel she sees.' },
          ],
        },
      ],
    },

    // 8 ── error identification ──────────────────────────────────────────────
    {
      type: 'errorId', id: 'apt501-u3-errorid',
      title: 'Audit this supplement ad',
      brief:
        'A fat-burner ad, exactly as posted. Flag every statement that leans on a misleading reasoning pattern from this unit; leave honest statements unflagged. Try to name the pattern in your head before checking the rationale.',
      document:
        '“ThermaLean™ — join 12,000 real members of our transformation community! In our customer survey, ThermaLean users lost TWICE as much fat as non-users. You’ll feel it working within 48 hours — just read the comments. Backed by science: a clinical study run by our own research team found significant fat-loss results. Stuck at a plateau nothing else could break? ThermaLean is what finally works. Contains green tea extract and 200 mg caffeine per serving. Not recommended for people sensitive to stimulants.”',
      findings: [
        { id: 'apt501-u3-e1', text: '“join 12,000 real members of our transformation community”', isError: true,
          rationale: 'Survivorship: a community is made of the people who stayed. The buyers it failed left quietly and aren’t members of anything.' },
        { id: 'apt501-u3-e2', text: '“ThermaLean users lost TWICE as much fat as non-users”', isError: true,
          rationale: 'A confounded comparison of self-selected groups: people who buy fat-loss products differ from non-buyers in diet, training, and motivation before the first capsule.' },
        { id: 'apt501-u3-e3', text: '“You’ll feel it working within 48 hours”', isError: true,
          rationale: 'Expectancy priming. With 200 mg of caffeine, buyers will certainly feel something — and the ad pre-frames that sensation as fat loss. Feeling it work is perception data, not mechanism data.' },
        { id: 'apt501-u3-e4', text: '“a clinical study run by our own research team”', isError: true,
          rationale: 'A sponsor-run study with no authors, journal, or independent replication to check. Funding shapes findings; this line is doing sales work dressed as science.' },
        { id: 'apt501-u3-e5', text: '“Stuck at a plateau nothing else could break? ThermaLean is what finally works”', isError: true,
          rationale: 'Regression-to-the-mean farming: it recruits people at their extreme, whose plateaus were the most likely to end anyway. That’s the next crop of testimonials being planted.' },
        { id: 'apt501-u3-e6', text: '“Contains green tea extract and 200 mg caffeine per serving”', isError: false,
          rationale: 'A plain, checkable ingredient disclosure — this is what honesty looks like inside an ad.' },
        { id: 'apt501-u3-e7', text: '“Not recommended for people sensitive to stimulants”', isError: false,
          rationale: 'An appropriate safety caution, not a reasoning error.' },
      ],
    },

    // 9 ── active-recall set ─────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt501-u3-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'apt501-u3-r1', front: 'A correlation between X and Y has four possible explanations. Name them.',
          back: 'X causes Y; Y causes X (reverse causation); a third variable drives both (confounding); or chance.' },
        { id: 'apt501-u3-r2', front: 'What is a confounder?',
          back: 'A third variable that influences both the exposure and the outcome, creating an association between them that may not be causal at all.' },
        { id: 'apt501-u3-r3', front: 'Why does randomization beat statistical adjustment?',
          back: 'Adjustment only handles confounders that were measured, as well as they were measured. Randomization balances measured and unmeasured confounders alike — including ones nobody thought of.' },
        { id: 'apt501-u3-r4', front: 'What is healthy-user bias?',
          back: 'People who voluntarily adopt a health behaviour (supplements, check-ups, gym memberships) differ in many protective ways, so the behaviour looks beneficial even when it does nothing.' },
        { id: 'apt501-u3-r5', front: 'Why are transformation photos weak evidence?',
          back: 'Survivorship bias: you see only the responders. The clients who quit or failed have no photo — the denominator is invisible.' },
        { id: 'apt501-u3-r6', front: 'What is intention-to-treat, and which bias does it fight?',
          back: 'Analysing everyone who was randomized, dropouts included. It fights attrition bias — dropouts are disproportionately the people the intervention was failing.' },
        { id: 'apt501-u3-r7', front: 'Placebo vs nocebo, one line each.',
          back: 'Placebo: expecting benefit produces real, measurable benefit. Nocebo: expecting harm produces real harm — including pain from being told a movement is dangerous.' },
        { id: 'apt501-u3-r8', front: 'What have open-label placebo trials shown — and the key caveat?',
          back: 'Improvement in subjective outcomes (pain, fatigue, gut symptoms) even when people knew they were taking placebo. Caveat: young research, mostly self-reported outcomes — nothing similar shown for muscle growth or strength.' },
        { id: 'apt501-u3-r9', front: 'Why do clients improve after hiring you, regardless of programming?',
          back: 'They act at their extremes — worst pain, highest weight, lowest motivation — and fluctuating measures drift back toward their average: regression to the mean.' },
        { id: 'apt501-u3-r10', front: 'Bradford Hill in one sentence — and which consideration is non-negotiable?',
          back: 'Prompts for judging causal claims without an RCT — strength, consistency, dose-response, temporality, plausibility, experiment — prompts, not a checklist. Temporality (cause precedes effect) is the only absolute requirement.' },
      ],
    },

    // 10 ── unit quiz ────────────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u3-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'apt501-u3-q1', kind: 'single', cognitive: 'analysis',
          prompt: 'Observational studies almost always make supplements look better than randomized trials later show them to be. What is the main reason?',
          explanation: 'Self-selection is the engine: choosing to supplement travels with training, diet, sleep, income, and conscientiousness, and those drive results the supplement then gets credit for.',
          options: [
            { id: 'a', text: 'People who choose to take supplements differ from people who don’t — in training, diet, sleep, income, and conscientiousness — and those differences drive results the supplement gets credit for', correct: true },
            { id: 'b', text: 'Randomized trials use doses that are too low to work', correct: false, rationale: 'Trial doses typically match or exceed real-world use; dosing doesn’t explain the systematic gap.' },
            { id: 'c', text: 'Observational studies have bigger samples, and big samples create bias', correct: false, rationale: 'Bigger samples reduce chance error; they do nothing about confounding.' },
          ] },
        { id: 'apt501-u3-q2', kind: 'single', cognitive: 'application',
          prompt: 'A 12-month diet trial starts with 200 people; 80 drop out. The paper reports impressive results for “the 120 who completed the program”. What is wrong?',
          options: [
            { id: 'a', text: 'Attrition bias: dropouts are disproportionately the people the diet was failing, so completers-only results flatter the diet', correct: true },
            { id: 'b', text: 'Nothing — analysing completers is standard practice', correct: false, rationale: 'Good trials analyse everyone randomized (intention-to-treat) precisely to avoid this flattery.' },
            { id: 'c', text: 'The trial was too long; diets should be tested for a month', correct: false, rationale: 'Longer is generally more informative for diets, not less. Duration isn’t the flaw here.' },
          ] },
        { id: 'apt501-u3-q3', kind: 'single', cognitive: 'recall',
          prompt: 'What have open-label placebo trials suggested?',
          explanation: 'Several trials found improvement in subjective outcomes even with full disclosure — the ritual and expectancy did work without deception. The literature is young and centred on self-reported outcomes.',
          options: [
            { id: 'a', text: 'People can improve on subjective outcomes like pain and fatigue even when they know they’re taking a placebo', correct: true },
            { id: 'b', text: 'Placebos only work when patients are deceived', correct: false, rationale: 'That’s the assumption open-label trials undermined.' },
            { id: 'c', text: 'Placebos build muscle as effectively as training does', correct: false, rationale: 'Open-label effects appear in self-reported outcomes, not objective ones like muscle growth.' },
          ] },
        { id: 'apt501-u3-q4', kind: 'single', cognitive: 'application', safetyCritical: true,
          prompt: 'Your client announces she’s stopping her prescribed blood-pressure medication because a testimonial-filled website says beetroot powder “works better, naturally”. What is your response?',
          explanation: 'Medication decisions belong to the prescriber. Your role combines last unit’s scope rules with this unit’s evidence skills: keep her safe, keep her trust, and get her into the right room.',
          options: [
            { id: 'a', text: 'Urge her not to change any medication before talking to her prescriber, and offer to help her write down her questions for that appointment', correct: true, rationale: 'In scope, safe, and it keeps you beside her rather than against her.' },
            { id: 'b', text: 'Suggest she taper the medication slowly while starting the beetroot, to be safe', correct: false, rationale: 'Any advice about medication dosing is out of scope and genuinely dangerous.' },
            { id: 'c', text: 'Tell her testimonials are worthless and refuse to discuss it further', correct: false, rationale: 'Dismissiveness loses the trust you need to keep her safe. The weakness of testimonials is a conversation, not a door slam.' },
          ] },
        { id: 'apt501-u3-q5', kind: 'multi', cognitive: 'analysis',
          prompt: 'An ad claims: “In our survey, users of our recovery drink reported twice the recovery of non-users.” Which features should make you suspicious? (Select all that apply.)',
          options: [
            { id: 'a', text: 'Users chose to buy the drink, so they differ from non-users in ways beyond the drink', correct: true, rationale: 'Self-selection means confounding — the healthy-user pattern.' },
            { id: 'b', text: 'Reported recovery is a subjective outcome, wide open to expectancy effects', correct: true, rationale: 'People who paid for a recovery drink expect to recover — and report accordingly.' },
            { id: 'c', text: 'The survey was run by the company selling the drink', correct: true, rationale: 'Sponsor-run research with no independent check is a funding-effect red flag.' },
            { id: 'd', text: 'The comparison used a randomized, blinded control group', correct: false, rationale: 'That design would strengthen the claim — and it’s exactly what a survey of self-selected users is not.' },
          ] },
        { id: 'apt501-u3-q6', kind: 'single', cognitive: 'recall',
          prompt: 'Among Bradford Hill’s considerations, which one is non-negotiable for any causal claim?',
          options: [
            { id: 'a', text: 'Temporality — the cause must come before the effect', correct: true },
            { id: 'b', text: 'Strength — the association must be at least twofold', correct: false, rationale: 'Strong associations persuade, but weak causes are still causes; no fixed threshold exists.' },
            { id: 'c', text: 'Analogy — a similar claim must already be proven', correct: false, rationale: 'Analogy is one of the weaker prompts, useful but never required.' },
          ] },
        { id: 'apt501-u3-q7', kind: 'single', cognitive: 'synthesis',
          prompt: 'A client says: “My friend’s chronic fatigue disappeared a month after she started cold plunges — I want to copy her.” Which reply best combines honesty, kindness, and this unit’s thinking?',
          explanation: 'The best reply validates the friend’s experience, explains the timing mechanism in plain words, stays honest about uncertainty, and converts enthusiasm into a small tracked experiment.',
          options: [
            { id: 'a', text: '“That’s just regression to the mean and placebo. It wouldn’t survive a controlled trial.”', correct: false, rationale: 'Accurate and useless: jargon delivered as a verdict teaches nothing and dents the relationship.' },
            { id: 'b', text: '“Great that she feels better. People usually try new things when they’re at their worst, so some rebound was probably coming anyway — and the plunges may genuinely help how she feels. Want to try it and track your energy against your sleep and training, so we learn what’s doing what?”', correct: true, rationale: 'Validates, explains the mechanism plainly, stays honest about uncertainty, and turns it into an experiment.' },
            { id: 'c', text: '“Cold plunges are well proven for fatigue — let’s add them tomorrow.”', correct: false, rationale: 'Endorses a causal claim on the strength of one testimonial.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt501-u3-teach',
      title: 'Teach it back',
      prompt:
        'Your client Maya says: “My sister’s back pain disappeared three weeks after she bought one of those €90 posture-correcting braces — at that point she could barely sit through a movie. I’m getting one.” In plain, warm language, explain regression to the mean — without making her sister sound gullible, and without pretending the brace is proven.',
      modelAnswer:
        'I believe her completely — and I’m glad she’s better. Here’s something worth knowing about pain, though: it doesn’t sit still. It swings, and it tends to swing back from its extremes. When your sister bought the brace she was at her absolute worst — barely sitting through a movie — and the worst moment is exactly when people finally try something. It’s also exactly the point pain was most likely to ease from anyway. So the brace collects the credit for a recovery that was probably already partly on its way. Maybe it helped too — I honestly can’t rule that out. What I can tell you is that back pain responds well to things we can do together for free: moving often, building up gradually, and not treating your spine as fragile. If after a few weeks of that you still want the brace, buy it with clear eyes. Just don’t buy it because of week three.',
      rubric: [
        { id: 'apt501-u3-t1', text: 'Explains that fluctuating symptoms drift back from their extremes, in everyday words, without needing the term “regression to the mean”' },
        { id: 'apt501-u3-t2', text: 'Connects the mechanism to timing — people try remedies at their worst, so improvement was already likely' },
        { id: 'apt501-u3-t3', text: 'Stays kind: validates the sister’s experience and never implies she was foolish' },
        { id: 'apt501-u3-t4', text: 'Offers an honest next step and leaves the client’s autonomy intact' },
      ],
    },

    // 12 ── cumulative review ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u3-cumulative', role: 'cumulative', title: 'Pulling it together',
      questions: [
        { id: 'apt501-u3-cu1', kind: 'single', cognitive: 'application',
          prompt: 'Bringing in last unit’s designs: you want to know whether the greens powder itself improves recovery, separate from the habits of the people who buy it. Which study design answers that question?',
          explanation: 'Randomization balances the habit differences — measured and unmeasured — and blinding subtracts expectancy. No amount of observation substitutes for either.',
          options: [
            { id: 'a', text: 'A randomized, placebo-controlled, blinded trial', correct: true },
            { id: 'b', text: 'A much larger survey of powder users across many gyms', correct: false, rationale: 'Scaling up an observational design scales up its confounding along with its sample.' },
            { id: 'c', text: 'A cohort study following users and non-users for five years', correct: false, rationale: 'Longer observation still can’t remove self-selection into powder use.' },
          ] },
        { id: 'apt501-u3-cu2', kind: 'single', cognitive: 'analysis',
          prompt: 'A prospective cohort study finds coffee drinkers complete 20% more training sessions, even after adjusting for age, sex, and training experience. Why can’t you conclude that coffee causes better attendance?',
          options: [
            { id: 'a', text: 'Adjustment only handles measured confounders — things like conscientiousness or sleep habits weren’t measured and could drive both coffee routines and gym routines', correct: true, rationale: 'Unmeasured and badly measured confounders survive adjustment; only randomization balances them.' },
            { id: 'b', text: 'Cohort studies cannot measure attendance accurately', correct: false, rationale: 'Attendance is one of the easier outcomes to measure; the problem is causal, not clerical.' },
            { id: 'c', text: 'A 20% difference is too small to matter', correct: false, rationale: 'Effect size is a separate question from causation — a small effect can be causal and a large one confounded.' },
          ] },
        { id: 'apt501-u3-cu3', kind: 'single', cognitive: 'synthesis',
          prompt: 'You decide to frame the fish-oil question properly using PICO from last unit. Which framing is best?',
          explanation: 'A usable PICO names a population, an intervention, a true comparator, and a defined, measurable outcome. Weak framings leave doors open for expectancy, confounding, and recall to walk through.',
          options: [
            { id: 'a', text: 'P: recreational lifters; I: fish-oil supplementation; C: identical placebo; O: change in lean mass over 12 weeks', correct: true, rationale: 'Population, intervention, a real comparator, and a defined, measurable outcome.' },
            { id: 'b', text: 'P: everyone; I: fish oil; C: nothing; O: feeling better', correct: false, rationale: 'No comparator and a vague, subjective outcome — the two doors expectancy and confounding use.' },
            { id: 'c', text: 'P: lifters who already take fish oil; I: continuing it; C: memory of how things were before; O: whether they feel it worked', correct: false, rationale: 'Self-selected users, before-and-after memory, and a subjective outcome: healthy-user bias, recall bias, and placebo in a single design.' },
          ] },
      ],
    },
  ],
};
