import type { Unit } from '../../../types/content';

export const unit03: Unit = {
  id: 'apt501-u3',
  code: 'APT 501.2',
  title: 'Correlation, Causation and How Studies Mislead',
  summary:
    'Why “users get better results” and “it worked for me” so often mislead. Confounding, reverse causation, the named biases, expectancy and regression to the mean, plus how to weigh a causal claim when no trial exists.',
  // New material even for a certified PT, so this unit keeps the full mastery gate.
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
      'The size of true placebo effects is debated. On outcomes a machine can measure they may be small to nil, with placebo pain relief the best supported case, and the open-label placebo literature is young, small and centred on outcomes people report about themselves. How far modern causal-inference methods can rescue observational data for causal claims is an active methodological argument. Bradford Hill’s considerations are widely misused as a scoring checklist, which Hill himself explicitly warned against.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u3-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt501-u3-p1', kind: 'single', cognitive: 'application',
          prompt: 'A supplement brand posts: “Gym members who use our protein powder hit personal records 40% more often than members who don’t.” What is the strongest reason to doubt that the powder is the cause?',
          options: [
            { id: 'a', text: 'People who buy and use protein powder consistently are likely to train harder, eat better and sleep more, and those habits could be driving the personal records', correct: true, rationale: 'A third factor, health-conscious behaviour, can produce both the powder use and the personal records.' },
            { id: 'b', text: 'Personal records can’t be measured objectively', correct: false, rationale: 'Personal records are among the more measurable things in a gym, so measurement is not the core problem here.' },
            { id: 'c', text: 'A 40% difference is too large to be real', correct: false, rationale: 'Large differences can be perfectly real and still say nothing about what caused them.' },
          ] },
        { id: 'apt501-u3-p2', kind: 'single', cognitive: 'recall',
          prompt: 'A coach’s Instagram shows forty striking before-and-after transformations. Which bias makes this weak evidence that the coaching works?',
          options: [
            { id: 'a', text: 'Survivorship bias: you see only the people it worked for, and clients who quit or did not respond appear nowhere', correct: true },
            { id: 'b', text: 'Recall bias: the clients probably misremember their starting weight', correct: false, rationale: 'Memory is not the issue, because the photos are accurate. The issue is who is missing.' },
            { id: 'c', text: 'Nocebo: expecting harm harmed the clients who are not shown', correct: false, rationale: 'Nocebo is about expecting harm and then getting it. It does not explain a curated photo wall.' },
          ] },
        { id: 'apt501-u3-p3', kind: 'single', cognitive: 'application',
          prompt: 'A client’s knee pain hit 9 out of 10 last week, the worst it has ever been, so she bought a massage gun. A week later it is a 4 and she is convinced. What alternative explanation should you have in mind?',
          options: [
            { id: 'a', text: 'Pain at an all-time extreme tends to drift back toward its usual level whatever you do. That is regression to the mean', correct: true, rationale: 'She acted at her worst, which is exactly when improvement was most likely to happen anyway.' },
            { id: 'b', text: 'The massage gun increased local blood flow', correct: false, rationale: 'That is the claim being tested, not an alternative explanation for the pattern.' },
            { id: 'c', text: 'She probably exaggerated the original 9', correct: false, rationale: 'You do not need to doubt her honesty. The pattern is expected even with perfectly accurate reports.' },
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
        { level: 'synthesis', text: 'Talk a client through a misleading claim kindly, using regression to the mean, expectancy or confounding, without lecturing or belittling anyone.' },
      ],
    },

    // 3 ── core instruction (five concept blocks, visuals interleaved) ───────
    {
      type: 'concept', id: 'apt501-u3-c1', heading: 'Four stories every correlation could be telling',
      body:
        'Walk through any gym and you will notice it. The members who take supplements are, on the whole, in better shape than the ones who do not. The greens-powder crowd is leaner. The creatine users lift more. Deciding that the products are working is the most natural thing in the world, and it is exactly the conclusion the industry needs you to reach.\n\n' +

        '## Two things moving together\n\n' +

        'A **correlation** just means two things vary together: when one is high the other tends to be high as well, or, if they run in opposite directions, reliably low. Whenever you see one, at least four different stories could be producing it. Only one of them is the story the headline wants.\n\n' +

        'Story one is the obvious one. X really does cause Y, so the supplement works. Keep this story on the table, because reflex suspicion is every bit as lazy as reflex belief. Creatine really does add a little strength and lean mass, and the trials show it.\n\n' +

        'Story two runs the arrow backwards. Y causes X, which is called **reverse causation**. Ask yourself: do strong people deadlift, or does deadlifting make people strong? Both, almost certainly. People whose build and temperament suit heavy pulling get early wins, enjoy them and keep pulling. People who find it awkward drift toward other lifts. So a snapshot showing “deadlifters are stronger” cannot tell you how much of that strength the deadlift built and how much walked in the door with them. Health data is full of this. Illness wrecks sleep, so long broken nights turn up alongside poor health partly because the sickness produced the sleep pattern, rather than only the reverse.\n\n' +

        '## Something else, or nothing at all\n\n' +

        'Story three is the big one: a third thing drives both. That is **confounding**, and it gets the whole next section, because it is the machinery behind the supplement pattern you started with.\n\n' +

        'Story four is the humblest: **chance**. Measure enough things in a small enough group and some of them will line up by luck. The client who hits a personal record every time she wears her grey shirt has not discovered sports science. She has discovered that small samples throw patterns the way a campfire throws sparks. This is also why a study that measured forty outcomes and reports the two that came out impressive deserves a raised eyebrow. With forty rolls of the dice, two interesting numbers are what you would expect even if nothing at all was happening.\n\n' +

        '> Key idea: “these two things go together” and “this thing causes that thing” are different claims. The gap between them is where most fitness misinformation lives.\n\n' +

        '## The two questions to ask first\n\n' +

        'A client asked you last week whether she should start training fasted, because “the people who do it are all lean”. That claim has a shape you will meet a thousand times: people who do X get Y. Clients who train fasted lose more fat. Athletes who take ice baths recover faster. Members who buy coaching packages progress quicker.\n\n' +

        'Do not ask “is that true?” first, because it usually is true as a description and useless as a reason. Ask two better questions instead. Could Y be producing X? And what else is true of the people who do X? Fasted trainers, for instance, tend to be people who already eat inside a set window, already weigh their food and already care enough to organise their mornings around training. Only when both questions come up empty does “X causes Y” start to earn its place at the table.\n\n' +

        'Neither question is a way of brushing your client off. They are the two things a good study would have had to rule out before anyone printed the claim, and you can run both of them in the time it takes to load a barbell.',
    },
    {
      type: 'visual', id: 'apt501-u3-visual-stories',
      title: 'The same two lines, four different worlds',
      diagramId: 'bias-four-stories',
      caption: 'What the study saw is drawn once at the top: two things moving together. Underneath are the four arrangements that could have produced it, only one of which is the arrangement being sold to you.',
      callouts: [
        { id: 'apt501-u3-vs1', label: '1', text: 'The story the advert is telling. Keep it in play, because some products do work. Creatine is the clearest example in the supplement aisle, and it earned that status in trials rather than in testimonials.' },
        { id: 'apt501-u3-vs2', label: '2', text: 'The arrow can run the other way. People who are already progressing buy more supplements, and strong people gravitate toward the deadlift. A single snapshot cannot tell you which end of the arrow came first.' },
        { id: 'apt501-u3-vs3', label: '3', text: 'The confounding arrangement. The two boxes at the bottom have no arrow between them at all, and the box doing the work is usually the one nobody measured.' },
        { id: 'apt501-u3-vs4', label: '4', text: 'Chance needs no mechanism. In small groups, or in studies that measured a long list of outcomes, some pairs will line up for no reason. That is why a single striking result is a reason to look again rather than to act.' },
      ],
    },
    {
      type: 'concept', id: 'apt501-u3-c2', heading: 'Confounding, and why randomization is the honest referee',
      body:
        'Think hard about the person who takes a greens powder every single morning for a year. Not the powder. The person. Someone who buys a health product, remembers it daily and sticks with it for twelve months is showing you a whole pattern of behaviour. She probably also sleeps on a schedule, trains without being chased, cooks more than she orders in, drinks less than average, and books the dentist before the tooth hurts.\n\n' +

        '## The person, not the powder\n\n' +

        'Researchers call that cluster health-conscious behaviour, and here is the problem. The cluster produces better health and better gym results all by itself. Powder-takers will outperform non-takers even if the powder is ground-up lawn clippings, because the behaviour pattern drives both the taking and the results.\n\n' +

        'That is **confounding**: a third thing that influences both the exposure (taking the supplement) and the outcome (getting results), manufacturing a correlation between two things that may have no causal connection at all. The version you just met is so common it has its own name, **healthy-user bias**, and it flatters nearly every voluntary health behaviour ever studied.\n\n' +

        'It is also behind one of the most expensive lessons in modern medicine. For years, observational studies showed that women taking hormone replacement therapy had less heart disease, and prescribing practice leaned on that finding. When a large randomized trial finally tested the question, the apparent heart protection did not hold up. The women who chose hormone replacement had simply been healthier, wealthier and better connected to healthcare in the first place. The correlation was real. The causation was not.\n\n' +

        '## Why a coin flip works\n\n' +

        '**Randomization** is the tool that deals with this, and it is worth knowing exactly why it works. If a coin flip decides who takes the supplement and who takes an identical dummy, health-conscious people land in both groups in roughly equal numbers. So do lazy people, wealthy people, good sleepers and hard trainers. Here is the part that matters most: so do people who differ in ways nobody measured, or even thought of.\n\n' +

        '> Key idea: randomization does not need to know what the confounders are in order to balance them. Given enough participants, the only systematic difference left between the two groups is the thing being tested.\n\n' +

        'That is the entire reason the randomized controlled trial sits where it does in the evidence hierarchy from your study-design unit. Notice the phrase “given enough participants”. A coin flip in a trial of sixteen people can still deal you two lopsided groups by luck, which is why any decent trial report prints a table showing how closely the groups matched at the start, and why you should glance at it.\n\n' +

        '## What adjustment cannot reach\n\n' +

        'Observational researchers are not helpless. They adjust. Measure age, training experience and diet quality, and you can compare powder-takers with non-takers who match on those things, holding the differences you worried about still while you look at the powder.\n\n' +

        '**Adjustment** has a ceiling, though, and the ceiling is the whole story. It only works on confounders somebody measured, and only as well as they measured them. Diet quality captured by a two-page questionnaire is measured badly, so some of its confounding survives the adjustment untouched. That leftover has a name of its own: **residual confounding**. And conscientiousness, the trait that got her to swallow a capsule every morning for a year, almost certainly was not measured at all.\n\n' +

        'So when you read “adjusted for age, sex and BMI” in a paper, read it as a short list of the confounders that were dealt with, then ask what is missing from the list. This is why adjusted observational findings are better than raw ones and still not proof. It is also why, when a good randomized trial and an observational study disagree about causation, the trial usually deserves your vote.',
    },
    {
      type: 'concept', id: 'apt501-u3-c3', heading: 'Biases with names, and who paid for the study',
      body:
        'Bias in research does not mean anyone lied. It means the way the data was collected tilted the answer before anyone analysed a number. The tilt comes in a few recurring shapes, and the shapes have names worth knowing, because once you can name them you start seeing them everywhere.\n\n' +

        '## Who got into the study\n\n' +

        '**Selection bias** is about who gets into the study at all. Recruit for a training study with posters in a powerlifting gym and your sample already trains, already believes and already tolerates heavy loading. Whatever you find may say nothing about the deconditioned 55-year-old who walks into your studio on Monday. A survey shared inside a fasting community will discover that fasting communities like fasting.\n\n' +

        '**Survivorship bias** is selection at its sneakiest, because you only see the cases that made it. A coach’s page with forty stunning transformation photos looks like overwhelming evidence, but a wall of survivors tells you nothing about how many people started. If two hundred began and a hundred and sixty quietly quit, the photos document the forty. The other hundred and sixty have no photo, no testimonial and no voice. The classic illustration comes from the Second World War. Analysts studying returning bombers mapped where the planes had been shot and proposed armouring those places, until the statistician Abraham Wald pointed out that they were only looking at planes that came back. The fatal hits were on the planes nobody could examine. A transformation wall is a returning bomber.\n\n' +

        '> Key idea: ask of every study, and every transformation wall, who had the chance to appear in this and who was never going to. The people missing from the picture are the ones who would have changed it.\n\n' +

        '## What people remember, and who stays\n\n' +

        '**Recall bias** corrupts what people remember, and it corrupts unevenly. Ask anyone what they ate last month and they will under-report it, not because they are dishonest but because memory smooths, forgets and flatters. Worse, people with a problem search their memory harder than people without one. The client whose shoulder started hurting will comb through everything she did that week and land on the deadlifts. A pain-free client who had an identical week never audits it at all. Any study that asks injured and uninjured people to remember their training is fighting this, and usually losing.\n\n' +

        '**Attrition** is the study-length version of survivorship: people drop out, and they do not drop out at random. In diet trials, the people a diet is failing are exactly the ones who stop turning up to weigh-ins. Count only the finishers and every diet looks like a winner. Well-run trials therefore analyse everyone who was randomized, dropouts included, even the ones who never swallowed a single capsule. That rule is called **intention-to-treat**, and it is why honest trial results always look modest next to testimonial land. The modesty is the honesty.\n\n' +

        '## After the data is in\n\n' +

        'Two more distortions operate once the numbers exist. **Publication bias** means exciting positive results get written up and published while null results sit in file drawers, so the literature you can read is sunnier than the research that was actually done. You will take that apart properly in unit five.\n\n' +

        'Money shapes what exists in the first place. Sponsored research is not automatically wrong, but across nutrition and supplement science, industry-funded studies reach sponsor-friendly conclusions more often than independently funded ones. That happens through the question asked, the comparison chosen and what gets submitted for publication, rather than through fraud.\n\n' +

        'Your defence takes thirty seconds. Find the disclosure. Near the end of almost every published paper sits a conflict-of-interest statement and a funding statement, and both are written in plain English. “This study was funded by the manufacturer” does not end the conversation, but it does change the standard: a sponsor-funded finding earns your belief once independent teams reproduce it, and not before. And when an advert cites “a clinical study” with no authors, no journal and no disclosure you could check, that is not evidence being offered. It is the costume evidence wears.',
    },
    {
      type: 'visual', id: 'apt501-u3-visual-pipeline',
      title: 'Where the tilt enters, from recruitment to published result',
      diagramId: 'bias-study-pipeline',
      caption: 'The path a study takes runs down the left, from everyone the question is about to the paragraph you eventually read. Each bias enters at a specific point on that path. The dashed band underneath is funding, which is not a stage at all: it leans on every stage above it, shaping the question asked, the comparison chosen and whether a disappointing result is ever submitted.',
      callouts: [
        { id: 'apt501-u3-vp1', label: '1', text: 'Selection enters first and taints everything downstream. A study can be run flawlessly from here on and still answer a question about the wrong people, which is why “who could have been in this?” is the first thing to ask of any sample.' },
        { id: 'apt501-u3-vp2', label: '2', text: 'Recall bias enters at the measuring stage, and it is the reason questionnaire studies of diet and injury are so shaky. The distortion is not random: people who have a problem look harder for a cause than people who do not.' },
        { id: 'apt501-u3-vp3', label: '3', text: 'Attrition is survivorship happening slowly. The defence is to analyse everyone who was randomized, dropouts included, which is intention-to-treat. It makes results look smaller, and smaller is what honest looks like.' },
        { id: 'apt501-u3-vp4', label: '4', text: 'Publication bias enters after the science is finished. Nothing about the study changes, only whether you ever get to see it, so the shelf of published papers is systematically cheerier than the work that was done.' },
      ],
    },
    {
      type: 'concept', id: 'apt501-u3-c4', heading: 'Placebo, nocebo, and what “I felt it work” actually tells you',
      body:
        'A client starts a new pre-workout and has her best session in a month. “Don’t tell me this stuff doesn’t work. I felt it.” She is not wrong about the feeling. The mistake would be about what the feeling proves.\n\n' +

        '## Belief does real work\n\n' +

        'Expecting something to work changes your body, not just your opinion of it. Believing you have taken something effective changes arousal, how much pain you notice, how hard the work feels and, in sports studies, measured output. Cyclists told they have received caffeine produce more power when they have had none. Lifters handed a “new performance aid” that is actually cornstarch pull harder. That is the **placebo effect**, and the point to hold onto is that it is real: genuine changes in output, produced by belief and ritual rather than by the ingredient. The ingredient in her pre-workout may well do something too, and the caffeine in it certainly does. Her great session simply cannot tell her how the credit splits.\n\n' +

        'So “I felt it work” is information about her perception, not about the mechanism. A feeling is the output of a whole system: what she swallowed, what she expected, how she slept, how the last session went, and what the label promised her.\n\n' +

        '> Key idea: “I felt it work” is honest reporting of a real experience, and it still cannot tell you which part of the experience did the work.\n\n' +

        '## Why trials hide the pill\n\n' +

        'This is the entire reason trials **blind** their participants, which means neither the participants nor the staff testing them know who got the real thing. Give one group the supplement and the other an identical dummy, keep everyone in the dark, and expectation is now running equally in both groups. Whatever the real group does over and above the dummy group is what the ingredient did on its own. A supplement that only beats a dummy when people know they are taking it is not beating the dummy at all. What is being bought is the belief.\n\n' +

        'Two practical consequences follow. A trial where participants could easily guess their group, a strongly flavoured drink against plain water for instance, is only half blinded, and you should read its results with that in mind. And any ingredient with a loud sensation attached, like the skin tingle from beta-alanine or the buzz from a big caffeine dose, gives its own group away, which makes proper blinding harder and leaves a bigger share of the result sitting with expectation.\n\n' +

        '## The reverse, and the honest use\n\n' +

        'The effect runs backwards too, and the reverse concerns you professionally. **Nocebo** is expecting harm and then getting it. Tell a client her knees are fragile, her spine is “out”, or that deadlifts are dangerous for someone “like her”, and you can produce guarding, apprehension and genuine pain that the barbell never caused. Words are active ingredients in coaching. That is not an argument for hiding real risk. It is an argument for describing bodies as adaptable rather than breakable, because clients live inside the descriptions they are given.\n\n' +

        'One genuinely interesting wrinkle before we move on. In several trials, researchers handed people pill bottles labelled “placebo”, explained openly that placebos can still help, and measured improvement anyway. That is **open-label placebo**, and it suggests the ritual and the expectation can do work without any deception at all. Keep the caveat attached to it: the research is young, the improvements sit almost entirely in things people report about themselves such as pain, fatigue and gut symptoms, and nothing like it has been shown for muscle growth or strength.\n\n' +

        'The practical reading for you is short. Never lie to clients, and notice that you never need to. Confidence, ceremony and a plan the client believes in are legitimate tools. You just do not get to sell the ceremony as chemistry.',
    },
    {
      type: 'concept', id: 'apt501-u3-c5', heading: 'Regression to the mean, and thinking causally without a trial',
      body:
        'Anything that goes up and down, whether that is pain, sleep, motivation, bodyweight or bar speed, spends most of its time near its own average and visits its extremes only occasionally. An unusually bad reading is usually part real and part bad luck, and the bad-luck part does not repeat. Measure again next week and the number has drifted back toward normal. Nothing intervened. That is simply what a bouncing measure does, and statisticians call it **regression to the mean**. It may be the single most profitable illusion in the fitness industry.\n\n' +

        '## People act at their extremes\n\n' +

        'Here is why it matters so much to you. Nobody hires a trainer during an average week. Clients call when the pain is worst, the scale is highest and the motivation crisis is deepest, so whatever they try next collects the credit for a return toward normal that was already on its way.\n\n' +

        '> Key idea: people buy at their worst moment, so whatever they buy at that moment gets credited with a recovery that was coming anyway.\n\n' +

        'The same trap powers the plateau-buster economy. A lifter stalls, which is an extreme low in progress, buys the “plateau-shattering” program, and progress resumes, because plateaus end. The program earns a glowing testimonial for something the calendar did. It is also why testimonials cluster at rock bottom. “I was at my lowest point when I found X” is not a touching coincidence. It is the mechanism.\n\n' +

        '## The uncomfortable part\n\n' +

        'Some of your own results are this. Clients improve after hiring you partly because they hired you at their worst. That is not a reason for false modesty, because coaching genuinely works. It is a reason to judge your methods by something sturdier than after minus before. Compare a client against her own trend across months rather than against her worst week. Watch what happens when she takes six weeks off. Notice whether the clients who came to you at an ordinary moment progress as well as the ones who arrived in crisis.\n\n' +

        'It is also a reason for kindness. The client crediting her detox tea is not being stupid. She is running the same cause-seeking software everyone runs, yours included. Human minds see stories, not sampling noise. Your job is never to sneer at the software. Your job is to know when it misfires.\n\n' +

        '## Weighing cause without a trial\n\n' +

        'So if only a controlled comparison can truly separate cause from coincidence, are you helpless whenever no trial exists? Not quite. In 1965 the epidemiologist Austin Bradford Hill faced exactly that problem with smoking and lung cancer, where a randomized trial would have been both impossible and monstrous. He set out a list for weighing causal claims built on observational evidence, now known as **Bradford Hill’s considerations**. Not a checklist, he insisted in print, and people have been misusing it as one ever since. They are prompts for judgement.\n\n' +

        'Is the association strong, or a sliver? Is it consistent, turning up across different studies, populations and methods? Is there a **dose-response**, meaning more exposure brings more effect? Does the cause come before the effect? That one, **temporality**, is the only item with no exceptions. Is there a believable biological mechanism, and does experimental evidence, wherever any exists, point the same way?\n\n' +

        'Run “resistance training builds bone density” through those prompts. The association is consistent across dozens of populations. Loading shows a dose-response. Mechanical strain driving bone adaptation is believable and fits everything else known about bone. Trials confirm it where they exist. You can hold that causal claim with real confidence and no single decisive mega-trial. Now run “greens powder causes vitality” through the same prompts and watch it fail nearly every one.\n\n' +

        'That is the skill this unit has been building. Not cynicism about every claim, but calibrated confidence: knowing which stories about a correlation survive questioning, and which were never more than two lines crossing on a chart.',
    },
    {
      type: 'visual', id: 'apt501-u3-visual-regression',
      title: 'Why the thing bought at rock bottom always looks like it worked',
      diagramId: 'bias-regression-to-mean',
      caption: 'Fourteen weeks of one client rating her knee pain every Monday. The readings bounce around her usual level, spike to a 9 in week eight, and are back near her usual level by week nine. Week eight is also the week she bought something.',
      callouts: [
        { id: 'apt501-u3-vr1', label: '1', text: 'The dashed line is her usual level. Individual readings scatter around it because each one is her real level plus whatever else that week held: sleep, stress, how much she walked, how she happened to feel at the moment of asking.' },
        { id: 'apt501-u3-vr2', label: '2', text: 'Week eight is the extreme. Extremes are where the luck piles up in one direction, which is exactly why they do not repeat, and also exactly when people finally act.' },
        { id: 'apt501-u3-vr3', label: '3', text: 'The drop from 9 to 5 is the biggest change on the whole chart, and it needed no treatment to happen. Any purchase made in week eight would have inherited that drop as its evidence.' },
        { id: 'apt501-u3-vr4', label: '4', text: 'The defence is to read the trend, not the rebound. Ask what her average month looks like now against six months ago, which is a comparison a single dramatic week cannot fake.' },
      ],
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt501-u3-visual',
      title: 'Why supplement-takers look healthier: the confounding triangle',
      diagramId: 'confounding-triangle',
      caption: 'The dashed line is what the study observed. The solid arrows are what produced it.',
      callouts: [
        { id: 'apt501-u3-v1', label: '1', text: 'The study only ever measured the bottom two corners, supplement use and results. The top corner is invisible in the data unless someone thought to measure it.' },
        { id: 'apt501-u3-v2', label: '2', text: 'Health-conscious behaviour drives both corners: the person who takes the powder daily also sleeps, trains and eats in ways that produce results on their own.' },
        { id: 'apt501-u3-v3', label: '3', text: 'Randomization cuts the left arrow. When a coin flip decides who takes the supplement, health-conscious people land equally in both groups, measured and unmeasured traits alike.' },
        { id: 'apt501-u3-v4', label: '4', text: 'Statistical adjustment can only shrink arrows researchers measured, and only as well as they measured them. What survives is residual confounding.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt501-u3-worked',
      title: 'Unpicking a plausible claim, step by step',
      scenario:
        'Your client Sarah forwards you an article: “Study of 12,000 gym-goers finds fish-oil users gained 15% more lean mass over two years.” She is on the checkout page and wants your blessing.',
      steps: [
        { id: 'apt501-u3-w1', title: 'Find the causal jump',
          reasoning: 'The study observed that fish-oil use and lean-mass gain go together. The headline, and Sarah’s shopping cart, quietly upgrade that to “fish oil builds muscle”. The whole question is whether the upgrade is earned. Nothing about 12,000 participants earns it, because sample size fixes chance and does nothing about confounding.' },
        { id: 'apt501-u3-w2', title: 'Run the reverse-causation check',
          reasoning: 'Could gaining muscle lead to fish-oil use, rather than the reverse? Plausibly. People who see themselves progressing invest in their training identity, supplements included, while people whose training is going nowhere buy less of everything. The arrow could point backwards, at least partly.' },
        { id: 'apt501-u3-w3', title: 'Audit the confounders',
          reasoning: 'Who takes a capsule daily for two years? Someone conscientious. The habitual fish-oil taker is also likely to train more consistently, eat more protein, sleep better and earn more, since capsules and salmon both cost money. Every one of those builds lean mass on its own. The paper “adjusted for age, sex, and training frequency”, which is three measured confounders, leaving diet, sleep, income and conscientiousness untouched.' },
        { id: 'apt501-u3-w4', title: 'Ask what design would settle it',
          reasoning: 'A randomized trial: assign fish oil or an identical dummy by coin flip, keep everyone in the dark about which they got, measure lean mass. Randomization balances the conscientiousness that adjustment cannot reach, and blinding takes expectancy out of both groups equally. Such trials exist for many supplements, and their effects run far smaller than the observational ones. That shrinkage is the confounding being squeezed out.' },
        { id: 'apt501-u3-w5', title: 'Say what the study can honestly support',
          reasoning: 'Not nothing. The association is real and worth testing properly, fish oil is safe for most people, and Sarah is free to buy it. The honest framing for her: “The 15% belongs to the whole package of habits fish-oil users have. If you want the 15%, copy the habits. The capsules are optional.”' },
      ],
      takeaway:
        'Big observational numbers are where claims begin, not where they are settled. Run the same three checks every time: could the arrow run backwards, what kind of person chooses this exposure, and has anyone tested it against a fair comparison?',
    },

    // 6 ── interactive lab (classification) ──────────────────────────────────
    {
      type: 'classification', id: 'apt501-u3-lab',
      title: 'Lab: name that trap',
      instructions:
        'Each scenario illustrates one thinking trap more strongly than the others. Sort them. The point is not pedantry. It is speed: with practice you will spot these mid-conversation, while the client is still talking.',
      buckets: [
        { id: 'apt501-u3-b-conf', label: 'Confounding / healthy-user bias' },
        { id: 'apt501-u3-b-rev', label: 'Reverse causation' },
        { id: 'apt501-u3-b-surv', label: 'Survivorship bias' },
        { id: 'apt501-u3-b-reg', label: 'Regression to the mean' },
        { id: 'apt501-u3-b-recall', label: 'Recall bias' },
      ],
      items: [
        { id: 'apt501-u3-l1', text: 'Members who pre-pay for ten PT sessions progress faster than drop-ins, so the gym claims its trainers cause faster progress',
          bucketId: 'apt501-u3-b-conf', rationale: 'People who pre-pay are more committed and more organised before a single session happens, and that commitment drives both the purchase and the progress.' },
        { id: 'apt501-u3-l2', text: 'A survey finds people who sleep nine-plus hours are less healthy than seven-hour sleepers; a blogger concludes long sleep damages health',
          bucketId: 'apt501-u3-b-rev', rationale: 'Illness produces long, unrefreshing sleep. The arrow plausibly runs from poor health to long sleep, and a snapshot cannot rule that out.' },
        { id: 'apt501-u3-l3', text: 'A fasting forum polls its members: 92% say fasting transformed their lives',
          bucketId: 'apt501-u3-b-surv', rationale: 'The people fasting did not help quit the forum long before the poll. The remaining members are the survivors, voting on themselves.' },
        { id: 'apt501-u3-l4', text: 'A client joins in January at her heaviest-ever weight and loses 3 kg in a month; the gym’s ad credits its “metabolic reset”',
          bucketId: 'apt501-u3-b-reg', rationale: 'She acted at her extreme, so some drift back toward her usual weight was likely regardless. Training helps too, but the ad is claiming all of it.' },
        { id: 'apt501-u3-l5', text: 'In an injury study, lifters with sore shoulders report far more “bad technique days” last month than pain-free lifters',
          bucketId: 'apt501-u3-b-recall', rationale: 'Injured people ransack their memory for causes and find them. Pain-free people with the identical month never audit it at all.' },
        { id: 'apt501-u3-l6', text: 'The lifters with the biggest squats spend the most hours squatting, so a coach concludes volume is everything',
          bucketId: 'apt501-u3-b-rev', rationale: 'People who respond well to squatting keep squatting. Enjoyment and results drive the volume at least as much as volume drives the results.' },
        { id: 'apt501-u3-l7', text: 'In a national survey, multivitamin users have lower disease rates than non-users',
          bucketId: 'apt501-u3-b-conf', rationale: 'The textbook healthy-user pattern: the vitamin habit marks the kind of person who does many protective things, any of which could drive the outcome.' },
        { id: 'apt501-u3-l8', text: 'A coach’s sales pitch: “Every one of the twelve athletes I’ve coached to nationals used my program”',
          bucketId: 'apt501-u3-b-surv', rationale: 'The athletes the program did not take to nationals are not in the pitch. You are being shown the planes that came back.' },
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
              quality: 'best', feedback: 'Curiosity first. You cannot coach someone out of a belief you have not let them explain, and the reel itself usually contains the counter-evidence.' },
            { id: 'apt501-u3-n1b', text: 'Say: “That’s marketing junk, Priya. Cortisol powders are pseudoscience.”', to: 'apt501-u3-n3',
              quality: 'poor', feedback: 'You may be right about the powder, but a verdict delivered first makes her defend it. Now the powder has two allies: the influencer and her pride.' },
            { id: 'apt501-u3-n1c', text: 'Say it is probably harmless and she can try it, but ask to look at it together before she orders', to: 'apt501-u3-n2',
              quality: 'acceptable', feedback: 'Keeping the door open is good. Leading with “probably harmless” concedes the causal claim before either of you has looked at it.' },
          ],
        },
        {
          id: 'apt501-u3-n2',
          situation:
            'Watching again, you both notice: the woman mentions she also started lifting three times a week and quit alcohol “around the same time”. And every comment comes from the brand’s own hashtag.',
          choices: [
            { id: 'apt501-u3-n2a', text: 'Point out the two other changes and ask Priya which of the three she thinks did the heavy lifting, then mention who never posts: the buyers it did not work for', to: 'apt501-u3-n4',
              quality: 'best', feedback: 'You let the reel argue against itself: confounded changes, plus survivorship in the comments. Priya reaches the conclusion herself, which means she keeps it.' },
            { id: 'apt501-u3-n2b', text: 'Declare the testimonials fake', to: 'apt501-u3-n4',
              quality: 'poor', feedback: 'Probably wrong and definitely weak. The testimonials are likely real people. Real survivors telling real stories is exactly how survivorship bias works, and no fakery is required.' },
            { id: 'apt501-u3-n2c', text: 'Suggest she just try the powder for a month and judge by her own results', to: 'apt501-u3-n4',
              quality: 'acceptable', feedback: 'Respecting her autonomy is right, but a one-person before-and-after with no plan cannot separate the powder from expectancy, her training, or a rebound from her worst. You would be manufacturing the next testimonial.' },
          ],
        },
        {
          id: 'apt501-u3-n3',
          situation:
            'Priya goes quiet, then says: “You always shoot my ideas down. Forget I asked.”',
          choices: [
            { id: 'apt501-u3-n3a', text: 'Apologise for the delivery, say the question deserves better than a one-liner, and ask to watch it together', to: 'apt501-u3-n2',
              quality: 'best', feedback: 'Full recovery. The relationship carries the evidence. Without it, the best reasoning in the world goes unheard.' },
            { id: 'apt501-u3-n3b', text: 'Hold your ground: “I’m just protecting you from wasting money.”', to: null,
              quality: 'poor', feedback: 'You win the argument and lose the influence. Next time she will not ask. She will just buy.' },
          ],
        },
        {
          id: 'apt501-u3-n4',
          situation:
            'Priya, thoughtful now: “Okay. So what do I actually do? Buy it or not?”',
          choices: [
            { id: 'apt501-u3-n4a', text: 'Give the honest position: the results in the reel ride on training and alcohol changes she can copy for free. If she still wants the powder, that is her call, and you will track sleep, training and measurements either way so credit lands where it belongs. And if her weight has truly been stuck a year despite solid habits, a GP visit is worth it.', to: null,
              quality: 'best', feedback: 'Autonomy, honesty, a measurement plan and a scope-aware referral flag: the whole unit in one answer.' },
            { id: 'apt501-u3-n4b', text: 'Say “I wouldn’t bother” and move on to the session', to: null,
              quality: 'acceptable', feedback: 'Honest and efficient, but a teaching moment died here. Unexplained verdicts do not transfer to the next reel she sees.' },
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
        '“ThermaLean™: join 12,000 real members of our transformation community! In our customer survey, ThermaLean users lost TWICE as much fat as non-users. You’ll feel it working within 48 hours, just read the comments. Backed by science: a clinical study run by our own research team found significant fat-loss results. Stuck at a plateau nothing else could break? ThermaLean is what finally works. Contains green tea extract and 200 mg caffeine per serving. Not recommended for people sensitive to stimulants.”',
      findings: [
        { id: 'apt501-u3-e1', text: '“join 12,000 real members of our transformation community”', isError: true,
          rationale: 'Survivorship: a community is made of the people who stayed. The buyers it failed left quietly and are members of nothing.' },
        { id: 'apt501-u3-e2', text: '“ThermaLean users lost TWICE as much fat as non-users”', isError: true,
          rationale: 'A confounded comparison of self-selected groups: people who buy fat-loss products differ from non-buyers in diet, training and motivation before the first capsule.' },
        { id: 'apt501-u3-e3', text: '“You’ll feel it working within 48 hours”', isError: true,
          rationale: 'Expectancy priming. With 200 mg of caffeine, buyers will certainly feel something, and the ad has pre-framed that sensation as fat loss. Feeling it work is information about perception, not about mechanism.' },
        { id: 'apt501-u3-e4', text: '“a clinical study run by our own research team”', isError: true,
          rationale: 'A sponsor-run study with no authors, journal or independent replication to check. Funding shapes findings, and this line is doing sales work dressed as science.' },
        { id: 'apt501-u3-e5', text: '“Stuck at a plateau nothing else could break? ThermaLean is what finally works”', isError: true,
          rationale: 'Regression-to-the-mean farming: it recruits people at their extreme, whose plateaus were the most likely to end anyway. That is the next crop of testimonials being planted.' },
        { id: 'apt501-u3-e6', text: '“Contains green tea extract and 200 mg caffeine per serving”', isError: false,
          rationale: 'A plain, checkable ingredient disclosure. This is what honesty looks like inside an advert.' },
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
          back: 'X causes Y; Y causes X (reverse causation); a third thing drives both (confounding); or chance.' },
        { id: 'apt501-u3-r2', front: 'What is a confounder?',
          back: 'A third variable that influences both the exposure and the outcome, creating an association between them that may not be causal at all.' },
        { id: 'apt501-u3-r3', front: 'Why does randomization beat statistical adjustment?',
          back: 'Adjustment only handles confounders that were measured, and only as well as they were measured. Randomization balances measured and unmeasured confounders alike, including ones nobody thought of.' },
        { id: 'apt501-u3-r4', front: 'What is healthy-user bias?',
          back: 'People who voluntarily adopt a health behaviour (supplements, check-ups, gym memberships) differ in many protective ways, so the behaviour looks beneficial even when it does nothing.' },
        { id: 'apt501-u3-r5', front: 'Why are transformation photos weak evidence?',
          back: 'Survivorship bias: you see only the responders. The clients who quit or failed have no photo, so you never learn how many people started.' },
        { id: 'apt501-u3-r6', front: 'What is intention-to-treat, and which bias does it fight?',
          back: 'Analysing everyone who was randomized, dropouts included. It fights attrition bias, because dropouts are disproportionately the people the intervention was failing.' },
        { id: 'apt501-u3-r7', front: 'Placebo and nocebo, one line each.',
          back: 'Placebo: expecting benefit produces real, measurable benefit. Nocebo: expecting harm produces real harm, including pain that follows being told a movement is dangerous.' },
        { id: 'apt501-u3-r8', front: 'What have open-label placebo trials shown, and what is the key caveat?',
          back: 'Improvement in things people report about themselves (pain, fatigue, gut symptoms) even when they knew they were taking placebo. Caveat: young research, and nothing similar has been shown for muscle growth or strength.' },
        { id: 'apt501-u3-r9', front: 'Why do clients improve after hiring you, regardless of programming?',
          back: 'They act at their extremes: worst pain, highest weight, lowest motivation. Measures that bounce around drift back toward their average, which is regression to the mean.' },
        { id: 'apt501-u3-r10', front: 'Bradford Hill in one sentence, and which consideration has no exceptions?',
          back: 'Prompts for judging causal claims when no randomized trial exists: strength, consistency, dose-response, temporality, plausibility, experiment. Prompts, not a checklist. Temporality, meaning the cause comes before the effect, is the only absolute requirement.' },
      ],
    },

    // 10 ── unit quiz ────────────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u3-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'apt501-u3-q1', kind: 'single', cognitive: 'analysis',
          prompt: 'Observational studies almost always make supplements look better than randomized trials later show them to be. What is the main reason?',
          explanation: 'Self-selection is the engine: choosing to supplement travels with training, diet, sleep, income and conscientiousness, and those drive results the supplement then gets credit for.',
          options: [
            { id: 'a', text: 'People who choose to take supplements differ from people who do not in training, diet, sleep, income and conscientiousness, and those differences drive results the supplement gets credit for', correct: true },
            { id: 'b', text: 'Randomized trials use doses that are too low to work', correct: false, rationale: 'Trial doses typically match or exceed real-world use, so dosing does not explain the systematic gap.' },
            { id: 'c', text: 'Observational studies have bigger samples, and big samples create bias', correct: false, rationale: 'Bigger samples reduce chance error. They do nothing about confounding.' },
          ] },
        { id: 'apt501-u3-q2', kind: 'single', cognitive: 'application',
          prompt: 'A 12-month diet trial starts with 200 people; 80 drop out. The paper reports impressive results for “the 120 who completed the program”. What is wrong?',
          options: [
            { id: 'a', text: 'Attrition bias: dropouts are disproportionately the people the diet was failing, so results from finishers only flatter the diet', correct: true },
            { id: 'b', text: 'Nothing. Analysing only the people who finished is standard practice', correct: false, rationale: 'Good trials analyse everyone randomized, which is intention-to-treat, precisely to avoid this flattery.' },
            { id: 'c', text: 'The trial was too long; diets should be tested for a month', correct: false, rationale: 'Longer is generally more informative for diets, not less. Duration is not the flaw here.' },
          ] },
        { id: 'apt501-u3-q3', kind: 'single', cognitive: 'recall',
          prompt: 'What have open-label placebo trials suggested?',
          explanation: 'Several trials found improvement in outcomes people report about themselves even with full disclosure, so the ritual and the expectation did work without deception. The literature is young and sits almost entirely in self-reported outcomes.',
          options: [
            { id: 'a', text: 'People can improve on outcomes they report themselves, such as pain and fatigue, even when they know they are taking a placebo', correct: true },
            { id: 'b', text: 'Placebos only work when patients are deceived', correct: false, rationale: 'That is the assumption open-label trials undermined.' },
            { id: 'c', text: 'Placebos build muscle as effectively as training does', correct: false, rationale: 'Open-label effects appear in self-reported outcomes, not in things a machine measures, such as muscle growth.' },
          ] },
        { id: 'apt501-u3-q4', kind: 'single', cognitive: 'application', safetyCritical: true,
          prompt: 'Your client announces she is stopping her prescribed blood-pressure medication because a testimonial-filled website says beetroot powder “works better, naturally”. What is your response?',
          explanation: 'Medication decisions belong to the prescriber. Your role combines last unit’s scope rules with this unit’s evidence skills: keep her safe, keep her trust, and get her into the right room.',
          options: [
            { id: 'a', text: 'Urge her not to change any medication before talking to her prescriber, and offer to help her write down her questions for that appointment', correct: true, rationale: 'In scope, safe, and it keeps you beside her rather than against her.' },
            { id: 'b', text: 'Suggest she taper the medication slowly while starting the beetroot, to be safe', correct: false, rationale: 'Any advice about medication dosing is out of scope and genuinely dangerous.' },
            { id: 'c', text: 'Tell her testimonials are worthless and refuse to discuss it further', correct: false, rationale: 'Dismissiveness loses the trust you need to keep her safe. The weakness of testimonials is a conversation, not a door slam.' },
          ] },
        { id: 'apt501-u3-q5', kind: 'multi', cognitive: 'analysis',
          prompt: 'An ad claims: “In our survey, users of our recovery drink reported twice the recovery of non-users.” Which features should make you suspicious? (Select all that apply.)',
          options: [
            { id: 'a', text: 'Users chose to buy the drink, so they differ from non-users in ways beyond the drink', correct: true, rationale: 'Self-selection means confounding, and this is the healthy-user pattern.' },
            { id: 'b', text: 'Recovery here is something each person rates for herself, which leaves it wide open to expectancy', correct: true, rationale: 'People who paid for a recovery drink expect to recover, and they report accordingly.' },
            { id: 'c', text: 'The survey was run by the company selling the drink', correct: true, rationale: 'Sponsor-run research with no independent check is a funding-effect red flag.' },
            { id: 'd', text: 'The comparison used a randomized, blinded control group', correct: false, rationale: 'That design would strengthen the claim. It is also exactly what a survey of self-selected users is not.' },
          ] },
        { id: 'apt501-u3-q6', kind: 'single', cognitive: 'recall',
          prompt: 'Among Bradford Hill’s considerations, which one has no exceptions for any causal claim?',
          options: [
            { id: 'a', text: 'Temporality: the cause must come before the effect', correct: true },
            { id: 'b', text: 'Strength: the association must be at least twofold', correct: false, rationale: 'Strong associations persuade, but weak causes are still causes, and no fixed threshold exists.' },
            { id: 'c', text: 'Analogy: a similar claim must already be proven', correct: false, rationale: 'Analogy is one of the weaker prompts, useful but never required.' },
          ] },
        { id: 'apt501-u3-q7', kind: 'single', cognitive: 'synthesis',
          prompt: 'A client says: “My friend’s chronic fatigue disappeared a month after she started cold plunges, and I want to copy her.” Which reply best combines honesty, kindness and this unit’s thinking?',
          explanation: 'The best reply validates the friend’s experience, explains the timing mechanism in plain words, stays honest about uncertainty, and converts enthusiasm into a small tracked experiment.',
          options: [
            { id: 'a', text: '“That’s just regression to the mean and placebo. It wouldn’t survive a controlled trial.”', correct: false, rationale: 'Accurate and useless: jargon delivered as a verdict teaches nothing and dents the relationship.' },
            { id: 'b', text: '“Great that she feels better. People usually try new things when they’re at their worst, so some rebound was probably coming anyway. The plunges may genuinely help how she feels on top of that. Want to try it and track your energy against your sleep and training, so we learn what’s doing what?”', correct: true, rationale: 'Validates, explains the mechanism plainly, stays honest about uncertainty, and turns it into an experiment.' },
            { id: 'c', text: '“Cold plunges are well proven for fatigue, so let’s add them tomorrow.”', correct: false, rationale: 'Endorses a causal claim on the strength of one testimonial.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt501-u3-teach',
      title: 'Teach it back',
      prompt:
        'Your client Maya says: “My sister’s back pain disappeared three weeks after she bought one of those €90 posture-correcting braces. At that point she could barely sit through a movie. I’m getting one.” In plain, warm language, explain regression to the mean without making her sister sound gullible, and without pretending the brace is proven.',
      modelAnswer:
        'I believe her completely, and I am glad she is better. Here is something worth knowing about pain, though. It does not sit still. It swings, and it tends to swing back from its extremes. When your sister bought the brace she was at her absolute worst, barely able to sit through a movie, and the worst moment is exactly when people finally try something. It is also exactly the point pain was most likely to ease from anyway. So the brace collects the credit for a recovery that was probably already partly on its way. Maybe it helped as well. I honestly cannot rule that out. What I can tell you is that back pain responds well to things we can do together for free: moving often, building up gradually, and not treating your spine as fragile. If after a few weeks of that you still want the brace, buy it with clear eyes. Just do not buy it because of week three.',
      rubric: [
        { id: 'apt501-u3-t1', text: 'Explains that fluctuating symptoms drift back from their extremes, in everyday words, without needing the term “regression to the mean”' },
        { id: 'apt501-u3-t2', text: 'Connects the mechanism to timing: people try remedies at their worst, so improvement was already likely' },
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
          explanation: 'Randomization balances the habit differences, measured and unmeasured, and blinding takes expectancy out of both groups equally. No amount of observation substitutes for either.',
          options: [
            { id: 'a', text: 'A randomized, placebo-controlled, blinded trial', correct: true },
            { id: 'b', text: 'A much larger survey of powder users across many gyms', correct: false, rationale: 'Scaling up an observational design scales up its confounding along with its sample.' },
            { id: 'c', text: 'A cohort study following users and non-users for five years', correct: false, rationale: 'Longer observation still cannot remove self-selection into powder use.' },
          ] },
        { id: 'apt501-u3-cu2', kind: 'single', cognitive: 'analysis',
          prompt: 'A prospective cohort study finds coffee drinkers complete 20% more training sessions, even after adjusting for age, sex and training experience. Why can’t you conclude that coffee causes better attendance?',
          options: [
            { id: 'a', text: 'Adjustment only handles the confounders somebody measured. Things like conscientiousness or sleep habits were not measured, and either could drive both coffee routines and gym routines', correct: true, rationale: 'Unmeasured and badly measured confounders survive adjustment. Only randomization balances them.' },
            { id: 'b', text: 'Cohort studies cannot measure attendance accurately', correct: false, rationale: 'Attendance is one of the easier outcomes to measure. The problem is causal, not clerical.' },
            { id: 'c', text: 'A 20% difference is too small to matter', correct: false, rationale: 'Effect size is a separate question from causation. A small effect can be causal and a large one confounded.' },
          ] },
        { id: 'apt501-u3-cu3', kind: 'single', cognitive: 'synthesis',
          prompt: 'You decide to frame the fish-oil question properly using PICO from last unit. Which framing is best?',
          explanation: 'A usable PICO names a population, an intervention, a true comparator and a defined, measurable outcome. Weak framings leave doors open for expectancy, confounding and recall to walk through.',
          options: [
            { id: 'a', text: 'P: recreational lifters; I: fish-oil supplementation; C: identical placebo; O: change in lean mass over 12 weeks', correct: true, rationale: 'Population, intervention, a real comparator, and a defined, measurable outcome.' },
            { id: 'b', text: 'P: everyone; I: fish oil; C: nothing; O: feeling better', correct: false, rationale: 'No comparison group, and a vague outcome each person judges for herself. Those are the two doors expectancy and confounding walk through.' },
            { id: 'c', text: 'P: lifters who already take fish oil; I: continuing it; C: memory of how things were before; O: whether they feel it worked', correct: false, rationale: 'Self-selected users, before-and-after memory, and an outcome people rate for themselves: healthy-user bias, recall bias and placebo in a single design.' },
          ] },
      ],
    },
  ],
};
