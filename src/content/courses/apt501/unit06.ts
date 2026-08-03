import type { Unit } from '../../../types/content';

export const unit06: Unit = {
  id: 'apt501-u6',
  code: 'APT 501.5',
  title: 'Claims, Supplements and Your Professional Development',
  summary:
    'How to take a fitness claim apart, what the supplement shelf is actually worth, why regulation does not protect your client, and how to keep your practice honest for the next twenty years.',
  qc: {
    sources: [
      { citation: 'Kreider RB et al. — International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. Journal of the International Society of Sports Nutrition, 14:18', year: 2017, evidenceType: 'Position stand', verified: false },
      { citation: 'Guest NS et al. — International Society of Sports Nutrition position stand: caffeine and exercise performance. Journal of the International Society of Sports Nutrition, 18:1', year: 2021, evidenceType: 'Position stand', verified: false },
      { citation: 'Jäger R et al. — International Society of Sports Nutrition position stand: protein and exercise. Journal of the International Society of Sports Nutrition, 14:20', year: 2017, evidenceType: 'Position stand', verified: false },
      { citation: 'Trexler ET et al. — International Society of Sports Nutrition position stand: Beta-Alanine. Journal of the International Society of Sports Nutrition, 12:30', year: 2015, evidenceType: 'Position stand', verified: false },
      { citation: 'Australian Institute of Sport — AIS Sports Supplement Framework (Group A/B/C/D classification of supplements and sports foods)', evidenceType: 'Professional framework', verified: false },
      { citation: 'Maughan RJ et al. — IOC consensus statement: dietary supplements and the high-performance athlete. British Journal of Sports Medicine, 52(7):439–455', year: 2018, evidenceType: 'Consensus statement', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-08-03',
    reviewBy: '2027-08-03',
    jurisdictionNotes:
      'Supplement regulation differs by country and changes. United States: the Dietary Supplement Health and Education Act (1994) treats supplements as a category of food — no pre-market efficacy approval, manufacturers are responsible for safety and claim substantiation, and the FDA generally acts after products are on sale. Canada: Natural Health Products Regulations require a product licence (NPN) before sale, with evidence supporting the claims made — a stricter pre-market system than the US. Australia and New Zealand: most sports supplements have sat under food law (FSANZ), but since 2020 the TGA has captured sports supplements presented in medicine-like dosage forms with certain claims as therapeutic goods. EU and UK: food-supplement rules apply, and in the EU only health claims on the authorised register may be used. Everywhere: third-party programs such as Informed Sport and NSF Certified for Sport test batches for banned-substance contamination and label content — they say nothing about whether a product works. Verify the current rules where you practise before advising anyone.',
    controversies:
      'Evidence tiers describe average effects and get revised: the AIS framework and the ISSN stands are updated as trials accumulate, and honest people disagree about the middle tier (fish oil, curcumin, collagen with vitamin C, ashwagandha) where trials are small, mixed, or sponsored. The creatine–kidney claim is settled in healthy adults but persists publicly because creatine raises serum creatinine, a marker used to estimate kidney function. There is also a real distinction between "no evidence that it works" and "evidence that it does not work" — most of the marketing tier is the first, a few of its members are now the second.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u6-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt501-u6-p1', kind: 'single', cognitive: 'analysis',
          prompt: 'A supplement page states: “Peer-reviewed research shows our formula increases muscle protein synthesis by 33%.” What is the main problem with using that as a reason to buy it?',
          options: [
            { id: 'a', text: 'Muscle protein synthesis is a short-term signal, not the outcome the buyer cares about — muscle actually gained over months', correct: true, rationale: 'Correct: a raised signal is a hypothesis about muscle growth, not a measurement of it.' },
            { id: 'b', text: '33% is too small a difference to matter', correct: false, rationale: 'The size is not the issue — the outcome being measured is.' },
            { id: 'c', text: 'Peer review does not mean anything, so no published finding can be trusted', correct: false, rationale: 'Peer review is imperfect, not worthless. The flaw here is the leap from mechanism to result.' },
          ] },
        { id: 'apt501-u6-p2', kind: 'single', cognitive: 'recall',
          prompt: 'Which supplement has the strongest evidence for adding strength and lean mass when combined with resistance training?',
          options: [
            { id: 'a', text: 'Branched-chain amino acids', correct: false, rationale: 'BCAAs add little once total protein intake is adequate.' },
            { id: 'b', text: 'Creatine monohydrate', correct: true, rationale: 'Correct: the most-studied ergogenic aid there is, with consistent trial support.' },
            { id: 'c', text: 'A testosterone-support blend', correct: false, rationale: 'This category is sold hard and supported thinly.' },
          ] },
        { id: 'apt501-u6-p3', kind: 'single', cognitive: 'recall',
          prompt: 'In most countries, what does it tell you when a supplement is legally on the shelf?',
          options: [
            { id: 'a', text: 'A regulator reviewed the evidence and agreed the product works', correct: false, rationale: 'That is the standard for medicines, not for supplements in most places.' },
            { id: 'b', text: 'Supplements are mostly regulated as a category of food, so nobody has to prove effectiveness before sale', correct: true, rationale: 'Correct — and this single fact explains most of what is wrong with the shelf.' },
            { id: 'c', text: 'A third-party “certified for sport” logo confirms the product does what the label says', correct: false, rationale: 'Those programs test for contamination and label content, not effectiveness.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt501-u6-outcomes',
      outcomes: [
        { level: 'recall', text: 'State which supplements have strong, situational, and weak-to-absent evidence, and say what supplement regulation does and does not guarantee.' },
        { level: 'application', text: 'Run any claim — from an ad, a post, or a client — through the pipeline: what exactly is claimed, what evidence backs it, how big is the effect for this person, and what is the verdict.' },
        { level: 'analysis', text: 'Explain why a plausible mechanism with no outcome data is weak evidence, and name the specific evidence failure behind each common influencer red flag.' },
        { level: 'synthesis', text: 'Write an honest client-facing position on a claim she believes in, and build a development plan that schedules learning and retires practices the evidence has moved past.' },
      ],
    },

    // 3 ── core instruction (five concept blocks) ────────────────────────────
    {
      type: 'concept', id: 'apt501-u6-c1', heading: 'Two kinds of claim, and why one of them is a trap',
      body:
        'A client forwards you a video at eleven at night. A lean man in a car park holds up a tub and says the powder “activates mTOR, the master switch for muscle growth.” She wants to know if she should get some. Before you answer anything about that product, notice what kind of sentence he just said.\n\nThere are two kinds of claim in fitness and they behave completely differently. A mechanism claim says something happens inside the body: a pathway switches on, a hormone rises, fat oxidation goes up, blood flow improves. An outcome claim says something happens to the person: she gains five kilos of muscle in a year, loses four kilos of fat, adds twenty watts, runs the 5k ninety seconds faster. Mechanism claims are about the machinery. Outcome claims are about the human being standing in front of you, and they are the only kind she is actually buying.\n\nHere is the trap, and it is the most reliable one in the industry: the mechanism claim is often completely true. Leucine really does raise muscle protein synthesis signalling. Caffeine really does block adenosine receptors. Training fasted really does increase the proportion of fat you burn during the session. Because the mechanism is true and sounds technical, it borrows the authority of science — and then the seller quietly lets you finish the sentence yourself. He never says “this adds muscle.” He says “activates the master switch for muscle growth,” and your brain does the rest.\n\nThe reason you cannot finish that sentence for him is that a body is a system with a lot of steps between a signal and a result, and the steps are not additive. When researchers have measured the short-term protein-synthesis response and then measured the muscle those same people actually built over the following months, the short-term signal turned out to be a poor predictor of the long-term result. A raised signal is a reason to run a trial. It is not the trial.\n\nSo the habit to build is a question you ask out loud, every time: and then what? This raises muscle protein synthesis — and then what? It increases fat oxidation during the session — and then what happened to the fat on the person, measured over weeks, against a group who did the same training without it? If nobody has measured the “and then what” in humans doing roughly what your client does, you are holding a hypothesis with good marketing.\n\nWatch out for the middle case, because it fools careful people. Surrogate markers — fat oxidation during a session, blood lactate, testosterone thirty minutes after a dose, a soreness rating — are measured in real humans in a real lab, which makes them feel like outcomes. They are not. They are mechanism claims wearing a lab coat. A surrogate is only useful when someone has shown that moving it moves the thing you care about, and for most supplement marketing nobody has.\n\nOne more thing, because the logic runs both ways. An outcome without a mechanism is fine. Coaches were building strong people with progressive overload long before anyone could explain the molecular biology of it, and the explanation arrived late without changing the practice. A result that keeps replicating beats a beautiful mechanism nobody has tested. If you have to choose which half to trust, trust the half that was measured on people.',
    },
    {
      type: 'concept', id: 'apt501-u6-c2', heading: 'Reading an influencer like a researcher',
      body:
        'It would be easy to run this section as a complaint about influencers, and it would teach you nothing. Plenty of the people selling you bad information believe it themselves — they got a result, they were sincere, and they never learned the difference between a result and evidence. What is useful is that their claims fail in a small number of recognisable ways, and you already have names for every one of them from earlier in this course.\n\nStart with the testimonial and the before-and-after grid, because they are the load-bearing wall of the whole industry. A wall of transformation photos looks like a mountain of data and is actually a sample selected on the outcome. The forty people who bought the same program and did not change never got photographed, never got posted, and never got counted. That is survivorship in its purest form: the selection rule guarantees a positive result no matter what the product does. And even for the person in the photo, the supplement was never tested on its own. She also started training, ate more protein, slept better because she was excited, cut her drinking, and dropped water. Add the tan, the lighting, the posture and the pump, and the image cannot separate one variable from ten. Nothing in a before-and-after can tell you which change caused which.\n\nThen there is “studies show,” with no study named. Notice how cheap a citation is — one line, one link — and then notice what it means when the cheapest possible move is not made. When the link is there, follow it, because this is where most claims quietly die. The study is often on a different dose, a different form of the compound, a different population, or a different outcome entirely: a rat study offered as human evidence, an acute lab measure offered as a body-composition result, six grams in the trial and eight hundred milligrams in the tub.\n\nThe single-study leap is the more respectable version of the same error. One small trial found something, so now it is a fact. But one trial is a data point that comes with sampling variability, publication bias, and a hundred small analysis choices; the whole reason your field builds systematic reviews and position stands is that individual studies disagree with each other constantly. When you see a claim resting on exactly one paper, the honest reading is “this is worth watching,” not “this is now true.”\n\nPhysique as credential deserves its own sentence, because it is so persuasive and so useless. A visible six-pack is evidence about one person — their genetics, their training history, their age, what they earn, how many hours they train, and in some corners of the industry what they inject. It is a sample of one with every confounder turned up to maximum, and it tells you almost nothing about what will happen to your forty-six-year-old client with two kids and four training hours a week. Being lean is proof that someone got lean. It is not proof they know why.\n\nThe last pattern is the most commercially sophisticated: the person selling the solution is the person who diagnosed the problem. You did not know your cortisol was sabotaging your results until the man who sells the cortisol formula told you, and the urgency, the diagnosis and the fix all arrive from the same account in the same sixty seconds. In a journal, that relationship would appear as a declared funding statement and you would weight the paper accordingly. On a feed it appears as a link in the bio. Same conflict of interest, no declaration.\n\nNone of this means “distrust anyone with abs.” Some coaches with enormous followings are careful, and some quiet ones are terrible. The tell is not the platform, it is whether they let you check their work. Do they name the study, the dose and the population? Do they say “I don’t know” out loud? Have you ever seen them change their mind in public? Someone who does those three things is doing science in front of you, whatever their follower count.',
    },
    {
      type: 'concept', id: 'apt501-u6-c3', heading: 'What is actually in the tub: an honest tier list',
      body:
        'Two frameworks do most of the useful work here, and both are free to read. The Australian Institute of Sport publishes a Sports Supplement Framework that sorts products into four groups by how well the evidence supports them: Group A has strong evidence for use in specific situations, Group B is emerging and worth using only with monitoring or inside research, Group C has little or no proof of benefit, and Group D is banned or carries a high risk of contamination. The International Society of Sports Nutrition publishes position stands — long, referenced reviews on single topics that end by taking a stance instead of hiding behind “more research is needed.” Between them you can grade almost anything a client asks about without having to read the primary literature yourself every time.\n\nThe strong tier is short, which is the first honest thing anyone should tell a client. Creatine monohydrate is the most-studied ergogenic supplement in existence: it raises intramuscular phosphocreatine, improves repeated high-intensity efforts, and alongside resistance training produces greater gains in strength and lean mass than training alone. Around three to five grams a day, no loading phase required if you are willing to wait a few weeks, monohydrate specifically because that is the form the trials used, and it costs less than a coffee a week. Caffeine is the other genuine performer — roughly three to six milligrams per kilogram of body mass, taken about an hour before, improves endurance, and there is good support for muscular endurance, strength and sprint-type work too, though the response varies a lot between individuals and the sleep cost is real if she trains in the evening. Third is not exciting at all: adequate protein. Exercising people generally do well somewhere around 1.4 to 2.0 grams per kilogram per day, and a powder is a convenient way to hit that number rather than a substance with powers of its own. Protein powder is food in a tub.\n\nThe situational tier is where sports supplements earn their keep for competitive athletes and almost nobody else. Beta-alanine raises muscle carnosine over weeks of daily dosing and buffers the acidity that builds in hard efforts, with the benefit concentrated in efforts lasting roughly one to four minutes; it needs four to six grams a day for several weeks, and it makes your skin tingle. Dietary nitrate, usually as beetroot juice, can improve endurance performance, with larger effects generally seen in recreational than in elite athletes and a fussy dependence on dose and timing. Sodium bicarbonate helps high-intensity efforts of a few minutes at the price of a gut that may not forgive you. These are real, and they are also margins: they matter when someone is chasing one percent in a race, and they are noise for a client whose limiting factor is showing up three times a week.\n\nNow the tier that pays for the marketing. Branched-chain amino acids are sold as protection against muscle loss, and the mechanism is genuinely true — leucine does trigger the signalling. But you cannot build muscle from three amino acids; you need the full set, and once a client is eating enough complete protein, she is already getting the BCAAs in it. Adding them on top does very little, and the specific claim that they preserve muscle through fasted training runs well ahead of what has been shown in people. Fat burners are a stimulant with a story: caffeine is the only ingredient in most of them with a defensible effect, its contribution to fat loss over months is small, and everything else in the blend is either untested at that dose or untested at all. Detox products propose to remove unnamed toxins that your liver and kidneys are already removing continuously, and no such product has shown a named substance leaving the body with a health outcome attached. Testosterone boosters are the clearest case of a category built entirely on hope: in men with normal testosterone, the reliable finding is that these products do not produce changes worth having in hormones, strength or muscle. A couple of individual ingredients have small, mixed trial results. None of them come close to what the label implies.\n\nThere is a legitimate grey zone, and you should not pretend otherwise. Fish oil, curcumin, collagen with vitamin C, ashwagandha and others sit in a middle where the trials are small, inconsistent, often industry-funded, and sometimes promising. The honest phrase is “possible, not established,” which is a much better sentence than either the influencer’s or the cynic’s. Separately, some supplements are medical rather than performance products — iron, vitamin D, B12 — and those are decided by a blood test and a clinician, not by you. If a client is asking about them, the answer is a referral, not a recommendation.\n\nWhat holds the whole tier list together is proportion. Training that progresses, energy intake matched to the goal, enough protein, enough sleep, and years of consistency account for nearly everything that will ever happen to your client’s body. Supplements operate at the edges of that. Creatine is worth taking, costs almost nothing, and is still the least interesting thing about a good program — which is exactly why nobody makes a viral video about it.',
    },
    {
      type: 'concept', id: 'apt501-u6-c4', heading: 'Why “clinically proven” on a label means almost nothing',
      body:
        'Your client turns the tub around in her hand and reads out the reassuring words: clinically proven, GMP certified, third-party tested, all natural, manufactured in an FDA-registered facility. It sounds like a chain of authorities has looked at this product and signed off. Almost none of that is what those phrases mean.\n\nIn most countries, supplements are regulated as a category of food, not as medicines. That single sentence explains the industry. A medicine has to prove to a regulator, before it is sold, that it does what it claims and that its risks are acceptable — that is what the years of trials and the submission dossier are for. A food has to be safe to eat and must not carry certain illegal claims, and nobody is required to show that it works, because food is not supposed to make that kind of promise in the first place. Supplements slipped into the food category and then started making medicine-shaped promises. So when a product reaches the shelf, what you know is that a company decided to sell it. That is genuinely all.\n\nThe consequences follow directly. Claims are policed after the fact, unevenly, and usually only when something is egregious enough to draw attention — which means the burden of noticing falls on the regulator after the product has already sold for a year. Doses can be hidden: “proprietary blend, 1,200 mg” tells you the ingredients in descending order and not one useful number, so you cannot compare what is in the tub with the dose used in whatever study is being waved at you. That is not a labelling oversight, it is the point of the format. And what is on the label is not always what is in the powder. Independent analyses have repeatedly found products containing less of an active ingredient than claimed, more, or something that was never listed at all, including stimulants and steroid compounds — which is how athletes who never intentionally doped end up with a positive test. The IOC consensus statement on supplements treats contamination as a first-order risk for exactly this reason.\n\nThis is where third-party certification comes in, and where it is most often misunderstood. Programs such as Informed Sport and NSF Certified for Sport test batches for banned substances and verify that what is on the label is in the product. For a tested athlete that is genuinely valuable — arguably the only supplement decision that carries a career on it. But read what has been certified: the absence of contamination, not the presence of an effect. A certified-for-sport fat burner is a clean product that still does not burn fat. Anyone using that logo as proof of efficacy is either confused or counting on you to be.\n\nThe details change at every border, and you need to know your own. Some jurisdictions require a licence and evidence for claims before sale, some allow only health claims from an authorised list, some have started pulling medicine-shaped sports supplements back under medicines regulation, and the rules are revised regularly. Check the notes attached to this unit, then check your own regulator, because being confidently wrong about the law in your own country is a bad look on a professional.\n\nWhat does this mean when you are standing in front of her? You are not the regulator and you do not have to be. Three sentences carry most situations honestly: “Nobody had to prove that works before selling it.” “Here is what the evidence actually supports.” “If you want to try it, we will decide in advance what would count as it working.” And the boundary from your scope work still holds — if a supplement is going near a prescribed medication or a diagnosed condition, that conversation belongs to a pharmacist, prescriber or dietitian, not to you. Recommending a specific product puts your professional name on it. Spend that carefully.',
    },
    {
      type: 'concept', id: 'apt501-u6-c5', heading: 'The next big thing, and staying good for twenty years',
      body:
        'Every eighteen months something arrives. Vibration plates, blood-flow restriction, velocity-based training, cold plunges, sauna protocols, Zone 2, whatever is currently being explained to you in a thirty-second video with a whiteboard. Some of it is genuinely useful, most of it is a real thing described far beyond its evidence, and a little of it is pure merchandise. You need a way to tell which is which that does not depend on how many people are talking about it, because the volume of conversation and the strength of the evidence are almost unrelated.\n\nThe pipeline you have been using on supplements works on methods without modification. What exactly is being claimed — is this a mechanism story about muscle oxygen or heart-rate zones, or has someone measured an outcome? Who benefited in the study — trained athletes, untrained beginners, elderly participants, rats? Beginners improve on nearly anything, so a method that looks spectacular in novices may add nothing for a client who has been lifting for six years. And then the question almost nobody asks: how big was the effect, next to what it costs?\n\nCost is not only money. It is equipment, coaching time, session time taken from something that was already working, complexity your client has to remember, and risk. Set against that, an effect worth three percent is not automatically worth having. If a method is slightly better on paper and your client enjoys it half as much, you have made her worse off, because the largest term in the whole equation is whether she keeps turning up in March. Adherence is not a soft consideration you add at the end. It is usually the deciding one.\n\nThe fair reading of most trends is that they are a real thing scaled wrong. Blood-flow restriction genuinely helps when heavy loading is not available, which is why rehabilitation settings use it — it was never a replacement for heavy lifting in a healthy person who can simply lift heavy. Cold exposure does things; whether those things help a client whose goal is muscle is a different question with a less comfortable answer. So the question to ask of anything new is: what problem does this solve, and do my clients actually have that problem? Most of the time the honest answer is that they have a different problem, usually consistency, sleep, or protein.\n\nThat brings us to your own practice, because none of this survives on good intentions. A development plan starts with your sources, and the rule is fewer and better. Position stands and systematic reviews from professional bodies, one or two review journals, the current edition of the textbooks in your field, and a small number of practitioners who cite their sources and admit uncertainty will outperform a feed of two hundred accounts. Deliberately keep one careful person you often disagree with. An information diet made only of people who agree with you feels like learning and is closer to grooming.\n\nThen schedule it, because unscheduled reading does not happen. An hour a fortnight in the calendar, one topic a quarter that you actually go deep on, one significant review a year. Go in with a question — “what does the evidence say about training frequency for my time-poor clients?” — because reading without a question is entertainment, and you will remember none of it by Thursday.\n\nYour learning goals should come from your own last twenty clients rather than from what is trending. Look back honestly: where did you hand something off because you were not confident, where did you improvise, which questions made you uncomfortable, which client type do you quietly avoid booking? That list is your syllabus. Turn each item into something specific and finishable with a date attached — “by March, be able to program confidently around a client’s menopause symptoms, from two review articles and a workshop” beats “learn more about women’s health” by the width of the room.\n\nThe last part is the hardest and it is the one that separates a professional from a veteran with ten years of the same year. You are going to have to retire things. You will have taught cues and methods for years, sincerely, that the evidence has moved past — and the update will feel like an admission that you were wrong, in front of people who pay you. Say it plainly anyway: “We used to program this way because that was the best understanding at the time. We know more now, so here is what we are doing instead, and here is why.” Clients trust a coach who updates far more than one who has never changed a single thing, because they have all met the second kind. And be honest with yourself about which kind of update it is. Sometimes the evidence changed. Sometimes the evidence was always there, and you read it better this time.',
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt501-u6-visual',
      title: 'The claim evaluation pipeline',
      diagramId: 'claim-evaluation-pipeline',
      caption: 'The four questions that turn any claim — supplement, method or trend — into a defensible verdict.',
      callouts: [
        { id: 'apt501-u6-v1', label: '1', text: 'Step one decides everything downstream. Write the claim as a sentence about a person, not about a pathway. “Activates mTOR” has to become “adds muscle to someone like my client” before you can even ask whether it is true.' },
        { id: 'apt501-u6-v2', label: '2', text: 'Mechanism and anecdote are not weak evidence for the outcome — they are not evidence for the outcome at all. They tell you a trial is worth running, which is a different sentence.' },
        { id: 'apt501-u6-v3', label: '3', text: 'A surrogate measured in humans (fat oxidation, a hormone at thirty minutes, a soreness score) still sits on the left of this arrow. Being measured in people does not make it an outcome.' },
        { id: 'apt501-u6-v4', label: '4', text: 'Step three is the one that gets skipped. “It works” and “it is worth it for her” are different findings: a real 2% effect that costs $80 a month and three extra rules can still be the wrong call.' },
        { id: 'apt501-u6-v5', label: '5', text: '“Trial cautiously” is a real verdict, not a hedge — but only if you decide in advance what would count as it working, and when you will check. Otherwise it is just a yes with extra steps.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt501-u6-worked',
      title: 'Taking a viral fat burner apart, end to end',
      scenario:
        'A client sends you a thirty-second reel. A lean man in a gym doorway, tub in hand: “The 43% fat-burn hack the supplement industry doesn’t want you to know. Clinically proven thermogenic. Link in bio — code MEL10 for 10% off.” She has already opened the checkout page and wants to know if she should buy it. Work the pipeline out loud.',
      steps: [
        { id: 'apt501-u6-w1', title: 'Split the sentence into mechanism and outcome',
          reasoning: '“Increases fat burning by 43%” is a mechanism claim about substrate use. The outcome she is buying is “I will be leaner in eight weeks,” and he never actually said that — she completed the sentence herself, which is the design. So the question becomes: has anyone measured the outcome in people, or only the mechanism?' },
        { id: 'apt501-u6-w2', title: 'Find the study the number came from',
          reasoning: 'The product page cites one paper. Opened, it is a single acute crossover in twelve young men, measuring substrate use over two hours after one dose. Nobody was followed for weeks, no body composition was measured, and no group trained. It is a metabolism study being sold as a fat-loss study — a single small trial, on the wrong outcome, in the wrong population.' },
        { id: 'apt501-u6-w3', title: 'Compare the studied dose with what is in the tub',
          reasoning: 'The study used 500 mg of one isolated catechin. The label lists a “1,200 mg proprietary thermogenic blend” of nine ingredients. Because a proprietary blend discloses order but not amounts, the studied ingredient could be 400 mg or 40 mg and you cannot tell. Any claim that rests on a study whose dose you cannot confirm is being made on your credulity, not their evidence.' },
        { id: 'apt501-u6-w4', title: 'Convert the effect into units that mean something',
          reasoning: 'A 43% increase on a small base is still small. If she oxidises roughly ten grams of fat in that two-hour window, a 43% lift is about four grams — around 36 kilocalories, less than a third of an apple. And using more fat in one window is not the same as losing fat: over a day, energy balance decides, and the body adjusts what it burns later. The impressive percentage and the trivial quantity are the same number.' },
        { id: 'apt501-u6-w5', title: 'Ask who was studied, and who paid',
          reasoning: 'Twelve lean young men lying in a lab for two hours are not a 46-year-old woman who trains three times a week and eats out on Fridays. The funding line names the ingredient supplier. That does not make the finding false — sponsored research can be perfectly good — but it moves your starting position, and it makes you ask whether anyone independent has reproduced it. Nobody has.' },
        { id: 'apt501-u6-w6', title: 'Price the decision and give the verdict',
          reasoning: 'Seventy-nine dollars a month, a stimulant load stacked on her morning coffee, mild jitters, and one more thing to remember — bought against 36 kilocalories in a laboratory. Verdict: ignore. The one ingredient in there with real evidence is caffeine, and she already drinks coffee, so she can have that effect for nothing.' },
        { id: 'apt501-u6-w7', title: 'Answer her in a way she can use next time',
          reasoning: '“Here is the study they cited, and here is what it actually measured. That $79 gets you about 36 calories in a lab. What we do have evidence for is your protein target, a deficit you can hold, and the three sessions you already do. Want me to show you how I checked, so you can do it to the next one?” You have refused the product and handed her the method.' },
      ],
      takeaway:
        'Notice how little of that required specialist knowledge. Split mechanism from outcome, read what the study actually measured, check the dose, convert the percentage into a real quantity, and ask who it was measured in. Five moves, and the biggest supplement category in the industry falls over.',
    },

    // 6 ── signature lab (evidence appraisal) ────────────────────────────────
    {
      type: 'evidenceAppraisal', id: 'apt501-u6-lab',
      title: 'Signature lab: five claims your clients will bring you',
      brief:
        'These five turn up in gyms constantly, and each one fails — or holds — for a different reason. For each claim, read what the evidence actually consists of, then grade the strongest support that exists for the claim as stated. Grade the support for the outcome being promised, not for the mechanism underneath it. The list runs roughly weakest to strongest, and the first five rungs are all versions of the same failure in different disguises: something real was measured, but it was not the thing being claimed.',
      hierarchy: [
        'Mechanism, cell, or animal data only',
        'Anecdote, testimonial, or before-and-after photos',
        'Case reports, usually in people unlike your client',
        'Observational association with obvious confounding',
        'A short-term surrogate marker treated as a long-term outcome',
        'A single small human trial',
        'Multiple consistent randomised trials',
        'Systematic review, meta-analysis, or position stand',
      ],
      claims: [
        { id: 'apt501-u6-cl1',
          claim: 'Fasted cardio burns more fat, so you will get leaner faster',
          evidenceDescription:
            'The posts link to lab studies showing that a higher proportion of energy comes from fat when you exercise before eating. When trials instead run for several weeks and compare fasted with fed training at matched calories, measuring actual fat mass, the groups end up in the same place.',
          correctLevel: 'A short-term surrogate marker treated as a long-term outcome',
          rationale:
            'The mechanism part is true: fasted exercise really does shift substrate use toward fat during the session. That in-session measurement is a surrogate, and it has been carried straight over to a body-composition claim it does not support — the body adjusts what it burns over the rest of the day, and total energy balance decides fat loss. What you can honestly tell a client: train fasted if you prefer it and it sits well with you. It is a preference, not a fat-loss lever.' },
        { id: 'apt501-u6-cl2',
          claim: 'BCAAs protect your muscle while you are dieting',
          evidenceDescription:
            'The sales page explains that leucine activates the mTOR pathway that switches on muscle protein synthesis, and shows the signalling diagram. Human trials adding BCAAs on top of an adequate protein intake show little to no additional benefit, and reviews conclude that the full set of essential amino acids is needed to build muscle at all.',
          correctLevel: 'Mechanism, cell, or animal data only',
          rationale:
            'This is the purest example of the mechanism trap in the whole industry. The signalling story is accurate and irrelevant, because you cannot build tissue from three of the twenty amino acids, and a client eating enough complete protein already gets those three inside her food. Sold as insurance against muscle loss; functions as expensive flavoured water beside a protein intake that was already doing the job.' },
        { id: 'apt501-u6-cl3',
          claim: 'Creatine damages your kidneys',
          evidenceDescription:
            'The claim traces to a small number of published case reports in individuals who had pre-existing kidney disease or were taking other agents, plus the observation that creatine supplementation raises serum creatinine — the very marker used to estimate kidney function. Controlled trials in healthy people, some running for years, together with the ISSN position stand, find no adverse effect on kidney function at recommended doses.',
          correctLevel: 'Case reports, usually in people unlike your client',
          rationale:
            'Case reports cannot establish that a substance caused anything — there is no comparison group and no way to separate the supplement from the illness that brought the person to attention. The creatinine detail is what keeps the myth alive: creatine is broken down to creatinine, so the number on the blood test rises without kidney function changing, and a doctor reading that number without knowing about the supplement can reasonably be alarmed. The practical action is not avoidance, it is disclosure — tell your doctor you take creatine before bloods, and anyone with existing kidney disease clears it with their clinician first.' },
        { id: 'apt501-u6-cl4',
          claim: 'Eating carbohydrate after 6pm makes you gain fat',
          evidenceDescription:
            'Supporting material points to surveys and cohort data showing that people who eat more of their food late in the evening tend to weigh more. Controlled trials that match total calories and protein and simply move the carbohydrate around the day do not find a fat-gain effect from clock time.',
          correctLevel: 'Observational association with obvious confounding',
          rationale:
            'The association is real and the causal story is imported. Late eating travels with the things that actually add energy: takeaway, alcohol, snacking in front of a screen, short sleep, shift work, and skipping meals earlier so the evening is enormous. Control the calories and the clock stops mattering. This one is worth handling gently, though, because the rule is often working for the client for a completely different reason — it stops her nightly grazing. Keep the habit if it helps; drop the physiology story that came with it.' },
        { id: 'apt501-u6-cl5',
          claim: 'Caffeine improves training performance',
          evidenceDescription:
            'Dozens of randomised controlled trials in humans across endurance, sprint, and resistance work, pooled in meta-analyses and summarised in an ISSN position stand, which supports doses of roughly 3–6 mg per kilogram of body mass taken about an hour before exercise, while noting that individual responses vary considerably.',
          correctLevel: 'Systematic review, meta-analysis, or position stand',
          rationale:
            'This is what the top of the hierarchy looks like, and it is worth studying precisely because it is the true one. Many trials, in humans, on outcomes people care about, pooled and then interpreted by a body that had to take a public position on it. Note what the strong evidence still does not say: it does not promise your particular client will respond, it comes with a dose and a timing, and it has costs — sleep disruption, tolerance, and a jittery client is not a better client. Strong evidence tells you the average effect is real. It does not remove your judgement about this person.' },
      ],
      briefPrompt:
        'Now write the brief. In 150–250 words, aimed at a client rather than a colleague, set out what a trainer may responsibly say about each of these five claims. For each one, give the verdict and the one honest sentence you would actually say out loud in a session. No hedging into false balance — where the evidence is clear, say so plainly.',
      modelBrief:
        'Five things clients ask me about, answered honestly.\n\nFasted cardio. Verdict: do it if you like it. You do burn a higher share of fat during the session, but over weeks the fat you lose comes out the same either way. “Train fasted because it suits your morning, not because it burns more.”\n\nBCAAs. Verdict: skip them. The mechanism on the label is real and doesn’t reach the outcome — you need all the essential amino acids to build muscle, and your protein already contains them. “If you’re hitting your protein, BCAAs are the most expensive water in the shop.”\n\nCreatine and kidneys. Verdict: myth, and the evidence here is strong rather than balanced. Controlled trials in healthy people show no harm to kidney function at normal doses. It does raise creatinine on a blood test without anything being wrong. “Take it, and mention it to your doctor before bloods so nobody misreads the number. If you have kidney disease, ask your doctor first.”\n\nCarbs after 6pm. Verdict: the clock isn’t doing it. Late eaters do tend to weigh more, but that travels with wine, takeaway and grazing, not the hour. “If a 6pm cutoff stops your evening snacking, keep it — just know it’s the snacking, not the carbs.”\n\nCaffeine. Verdict: this one works. Many trials, pooled and reviewed: roughly 3–6 mg per kg an hour before helps most kinds of training. “Coffee is the cheapest legal thing in the gym that works — just not so late it costs you sleep, because that trade is a loss.”\n\nAnd the general rule: I’ll always tell you what the evidence is, including when the answer is “nobody knows yet.”',
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt501-u6-case',
      title: 'Case: the client who arrived with a protocol',
      brief:
        'Priya, 38, has trained with you for five months. She arrives at her Tuesday session holding her phone with a screenshot of “The 6-Week Shred” from an influencer with 900,000 followers: 5am fasted cardio daily, BCAAs during training, a thermogenic stack, no carbs after 6pm, and a “detox week” to finish. She has already bought the stack. She is excited, and she is watching your face.',
      startNodeId: 'apt501-u6-n1',
      nodes: [
        {
          id: 'apt501-u6-n1',
          situation:
            '“I found the thing! Marc’s 6-Week Shred — his clients get insane results. I ordered the stack last night. Can we build my program around it?”',
          choices: [
            { id: 'apt501-u6-n1a', text: 'Ask what appealed to her about it and what she is hoping it will fix, before commenting on any of the content', to: 'apt501-u6-n2',
              quality: 'best', feedback: 'Right move. The protocol is the answer to a question you have not heard yet, and until you know the question you are arguing with a screenshot.' },
            { id: 'apt501-u6-n1b', text: 'Tell her straight away that it is nonsense and walk her through the studies on fasted training and BCAAs', to: 'apt501-u6-n3',
              quality: 'poor', feedback: 'Everything you would say is true, and you will still lose. She just told you she is excited and has spent money; being corrected before being heard reads as contempt, and she will simply stop telling you what she is doing.' },
            { id: 'apt501-u6-n1c', text: 'Agree to run the whole protocol — adherence beats accuracy, and she is motivated', to: 'apt501-u6-n3',
              quality: 'poor', feedback: 'Motivation is not a reason to endorse a stack you have not looked at. You would be attaching your professional name to a product page you have not read, and to a “detox week” you know is fiction.' },
            { id: 'apt501-u6-n1d', text: 'Say nothing about it and quietly write her program the way you were going to anyway', to: 'apt501-u6-n3',
              quality: 'poor', feedback: 'Silence is not neutrality. She will read it as approval, and in six weeks she will credit the results to the supplement she paid for rather than the training you actually gave her.' },
          ],
        },
        {
          id: 'apt501-u6-n2',
          situation:
            '“My sister’s wedding is ten weeks out and I want to feel good in the dress. And honestly — Marc looks exactly how I want to look. He must be doing something right.” She adds that the 5am starts sound brutal but she will do them if that is what it takes.',
          choices: [
            { id: 'apt501-u6-n2a', text: 'Sort the protocol out loud into three piles in front of her: harmless preferences, the parts that are actually doing the work, and the parts you will not support', to: 'apt501-u6-n4',
              quality: 'best', feedback: 'This is the move. You are not attacking her plan, you are grading it — and she gets to watch the method, which is worth more than the verdict. It also lets you keep the parts she is attached to that cost nothing.' },
            { id: 'apt501-u6-n2b', text: 'Tell her the fasted cardio is fine if she likes early mornings, and refocus the conversation on protein, her deficit and the three lifting sessions', to: 'apt501-u6-n4',
              quality: 'acceptable', feedback: 'Sound advice and a decent redirect, but you have skipped the stack she has already bought and paid for. It will arrive on Thursday and you will have said nothing about it.' },
            { id: 'apt501-u6-n2c', text: 'Reassure her that if she follows the protocol exactly she will get the same result Marc has', to: null,
              quality: 'poor', feedback: 'You have promised an outcome you cannot deliver, based on one man’s physique — the least transferable evidence there is. When the ten weeks do not produce Marc, she will conclude she failed.' },
          ],
        },
        {
          id: 'apt501-u6-n3',
          situation:
            'She has gone quiet and a bit flat. “Okay… so you think I’m stupid for buying it.” The relationship is still recoverable, but you have spent something.',
          choices: [
            { id: 'apt501-u6-n3a', text: 'Own the delivery, not the content: tell her she is not stupid, that the marketing is engineered by professionals, and ask her to walk you through what she wants from the six weeks', to: 'apt501-u6-n2',
              quality: 'best', feedback: 'Good repair. You separate the person from the claim, keep your position on the evidence, and reopen the conversation you should have started with.' },
            { id: 'apt501-u6-n3b', text: 'Back down and tell her to go ahead with it, to smooth things over', to: null,
              quality: 'poor', feedback: 'Now you have been both blunt and unreliable — you criticised it, then endorsed it under mild social pressure. She has learned that your professional opinion moves when someone frowns.' },
          ],
        },
        {
          id: 'apt501-u6-n4',
          situation:
            'You reach the stack. She reads the label aloud: a proprietary thermogenic blend, 200 mg caffeine, and a “metabolism support” complex. Then, offhand: “Oh — will it clash with my thyroid tablets? I’ve been on those for years.”',
          choices: [
            { id: 'apt501-u6-n4a', text: 'Tell her you are not the person to answer that, and to check with her pharmacist or prescriber before taking anything from the tub — and hold the recommendation until she has', to: 'apt501-u6-n5',
              quality: 'best', feedback: 'Correct, and the only defensible answer. Interactions between an undisclosed stimulant blend and prescribed medication are outside your scope no matter how confident you feel, and a pharmacist will answer it for free that afternoon.' },
            { id: 'apt501-u6-n4b', text: 'Tell her it is basically just caffeine and green tea, so she will be fine', to: null,
              quality: 'poor', feedback: 'You do not know what is in it — that is what “proprietary blend” means — and you have just given medication advice. This is the exact sentence that ends up in a complaint, and it was avoidable in ten seconds.' },
            { id: 'apt501-u6-n4c', text: 'Suggest she stop the thyroid medication on training days so nothing interferes', to: null,
              quality: 'poor', feedback: 'This is not a scope error, it is a serious one. Never advise a client to alter prescribed medication, in any direction, for any reason. If this thought crossed your mind, the fix is a firm personal rule, not better judgement in the moment.' },
          ],
        },
        {
          id: 'apt501-u6-n5',
          situation:
            'Six weeks on. Priya is down four kilos, lifting more, and delighted. The pharmacist told her to skip the thermogenic, so she never took it. She hits you with: “The 5am cardio was the game changer. Should I buy Marc’s next stack for the last four weeks?”',
          choices: [
            { id: 'apt501-u6-n5a', text: 'Open her own training log with her: protein up, steps up, three sessions a week held for six weeks, and a stack she never took — then ask her what that tells her', to: null,
              quality: 'best', feedback: 'The whole unit in one move. She has an experiment she ran on herself with a natural control group of one, and she reaches the conclusion herself, which is the only way it sticks. Now she can grade the next claim without you.' },
            { id: 'apt501-u6-n5b', text: 'Tell her to save her money — the next stack will not do anything either', to: null,
              quality: 'acceptable', feedback: 'The verdict is right and you have kept her safe from a bad purchase, but you handed her a conclusion instead of a method. Next time a new product appears, she will need you again.' },
            { id: 'apt501-u6-n5c', text: 'Let the fasted-cardio belief stand — it is keeping her consistent, and consistency is what matters', to: null,
              quality: 'poor', feedback: 'Tempting, and it is how superstition gets built into a training career. She will hold that belief for a decade, pass it to friends, and buy things on the strength of it. You can keep the 5am habit she loves without keeping the false explanation.' },
          ],
        },
      ],
    },

    // 8 ── error identification ──────────────────────────────────────────────
    {
      type: 'errorId', id: 'apt501-u6-errorid',
      title: 'Audit this product page',
      brief:
        'This is a supplement sales page of the kind a client will send you. Flag every statement that is a genuine red flag — misleading evidence, a hidden dose, an unsupported claim, or a misused certification. Leave the statements that are honest, or at least harmless, unflagged.',
      document:
        'APEX SHRED™ — Advanced Thermogenic Matrix.\n\n“I dropped 11 kg in 8 weeks on APEX. Before and after below — and I didn’t even join a gym!” — Chloe R., verified customer.\n\nCLINICALLY PROVEN: studies show a 43% increase in fat burning. Contains our 1,200 mg APEX Proprietary Thermogenic Blend (green tea extract, L-carnitine, raspberry ketones, garcinia, bitter orange, caffeine anhydrous 200 mg per serve). Detoxes the liver so trapped fat can finally be released. Naturally boosts free testosterone for faster results. 100% natural — which means no side effects.\n\nAs used by IFBB pro and 2.1M-follower coach Dane Voss. Manufactured in an FDA-registered facility. Batch tested by Informed Sport, so you know it works.\n\nNot suitable during pregnancy or breastfeeding. If you take prescription medication, speak with your doctor or pharmacist before use.',
      findings: [
        { id: 'apt501-u6-e1', text: '“I dropped 11 kg in 8 weeks… and I didn’t even join a gym!” with before-and-after photos', isError: true,
          rationale: 'A testimonial is a sample selected on the outcome — the buyers who changed nothing were never photographed. Even for Chloe, the product was never isolated from everything else she changed, and “no gym required” quietly removes the one variable with actual evidence behind it.' },
        { id: 'apt501-u6-e2', text: '“CLINICALLY PROVEN: studies show a 43% increase in fat burning”', isError: true,
          rationale: 'Three failures in one line: no study is named, “fat burning” is a short-term surrogate rather than fat lost, and a percentage with no base quantity is unreadable — 43% of a very small number is still a very small number.' },
        { id: 'apt501-u6-e3', text: '“1,200 mg APEX Proprietary Thermogenic Blend”', isError: true,
          rationale: 'A proprietary blend lists ingredients without amounts, so you cannot compare what is in the tub against the dose used in any study. That is not an oversight in the label design — concealment is the purpose of the format.' },
        { id: 'apt501-u6-e4', text: '“Detoxes the liver so trapped fat can finally be released”', isError: true,
          rationale: 'Invented physiology. The liver is not clogged and fat is not trapped; no supplement of this kind has ever shown a named substance leaving the body with a health outcome attached. The sentence exists because it sounds like a reason.' },
        { id: 'apt501-u6-e5', text: '“Naturally boosts free testosterone for faster results”', isError: true,
          rationale: 'A mechanism claim with the outcome bolted onto the end. In men with normal testosterone this product category does not produce changes worth having in hormones, strength or muscle — and the buyer here is being sold it for fat loss, which is a further leap again.' },
        { id: 'apt501-u6-e6', text: '“100% natural — which means no side effects”', isError: true,
          rationale: 'Natural origin says nothing about safety; plenty of potent drugs are plant-derived. This particular blend pairs bitter orange with 200 mg of caffeine, which is a real stimulant load for someone who also drinks coffee or takes prescription medication.' },
        { id: 'apt501-u6-e7', text: '“As used by IFBB pro and 2.1M-follower coach Dane Voss”', isError: true,
          rationale: 'Physique and follower count as credentials. One competitor’s body reflects his genetics, training history, years of work and possibly his pharmacology — it is a sample of one with every confounder maximised, and it transfers to your client not at all.' },
        { id: 'apt501-u6-e8', text: '“Manufactured in an FDA-registered facility”', isError: true,
          rationale: 'Deliberate sleight of hand. Facility registration is an administrative fact about the building; no regulator approved this product’s effectiveness, because supplements are regulated as food and nobody has to prove they work before sale.' },
        { id: 'apt501-u6-e9', text: '“Batch tested by Informed Sport, so you know it works”', isError: true,
          rationale: 'The subtle one, because the testing is real and genuinely useful. Programs like Informed Sport screen batches for banned-substance contamination and verify label content — they certify that the product is clean, not that it does anything. A certified fat burner is a clean product that still does not burn fat.' },
        { id: 'apt501-u6-e10', text: '“caffeine anhydrous 200 mg per serve”', isError: false,
          rationale: 'Not a red flag — this is the one honest number on the page. A disclosed dose of the one ingredient with solid evidence behind it is exactly what good labelling looks like, and it lets a client add it to what she already drinks.' },
        { id: 'apt501-u6-e11', text: '“Not suitable during pregnancy or breastfeeding. If you take prescription medication, speak with your doctor or pharmacist before use.”', isError: false,
          rationale: 'Also not a red flag. It is an appropriate warning that sends the medication question to the right professional — the same referral you would make yourself.' },
      ],
    },

    // 9 ── active-recall set ─────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt501-u6-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'apt501-u6-r1', front: 'Mechanism claim vs outcome claim — what is the difference, and which is being sold?',
          back: 'A mechanism claim says something happens inside the body (a pathway activates, a hormone rises). An outcome claim says something happens to the person (muscle gained, fat lost, faster time). Marketing states the mechanism and lets you finish the sentence with the outcome.' },
        { id: 'apt501-u6-r2', front: 'The one question to ask of any mechanism claim.',
          back: '“And then what?” — has anyone measured what happened to real people over a meaningful period, in a population like my client? If not, it is a hypothesis with good marketing.' },
        { id: 'apt501-u6-r3', front: 'Why is a wall of before-and-after photos not evidence?',
          back: 'It is a sample selected on the outcome — everyone who did not change was never posted. And each photo confounds the product with training, protein, sleep, water, lighting and pose.' },
        { id: 'apt501-u6-r4', front: 'Name the supplements with genuinely strong evidence.',
          back: 'Creatine monohydrate (3–5 g/day, strength and lean mass with resistance training), caffeine (roughly 3–6 mg/kg about an hour before), and adequate total protein (around 1.4–2.0 g/kg/day for exercising people).' },
        { id: 'apt501-u6-r5', front: 'Which supplements are situational rather than general?',
          back: 'Beta-alanine (efforts of roughly 1–4 minutes, 4–6 g/day for weeks), dietary nitrate/beetroot for endurance, sodium bicarbonate for short high-intensity efforts. They matter for competitors chasing a percent, not for a client who trains three times a week.' },
        { id: 'apt501-u6-r6', front: 'What are the marketing heavyweights with weak-to-no evidence?',
          back: 'BCAAs on top of adequate protein, fat burners beyond their caffeine content, detox products, and testosterone boosters in men with normal testosterone.' },
        { id: 'apt501-u6-r7', front: 'What does it mean that supplements are regulated as foods?',
          back: 'No one has to prove effectiveness before sale. Medicines must show efficacy and safety to a regulator first; supplements only have to be safe and avoid illegal claims, and are policed after the fact.' },
        { id: 'apt501-u6-r8', front: 'What does a “certified for sport” logo actually certify?',
          back: 'That the batch was screened for banned-substance contamination and that the label matches the contents. It says nothing whatsoever about whether the product works.' },
        { id: 'apt501-u6-r9', front: 'Why does creatine get blamed for kidney damage?',
          back: 'Creatine is broken down to creatinine, the marker used to estimate kidney function, so the blood value rises without kidney function changing. Controlled trials in healthy people show no harm at recommended doses. Tell your doctor you take it before bloods.' },
        { id: 'apt501-u6-r10', front: 'The three questions for evaluating any new training trend.',
          back: 'What exactly is claimed (mechanism or outcome)? Who benefited in the study, and are they like my client? How big is the effect against the cost — money, time, complexity, risk and adherence?' },
        { id: 'apt501-u6-r11', front: 'What makes a development plan real rather than aspirational?',
          back: 'Few, credible sources; check-ins booked in the calendar; a question to read against; learning goals taken from your own last twenty clients; and a standing willingness to retire practices out loud when the evidence moves.' },
      ],
    },

    // 10 ── unit quiz ────────────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u6-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'apt501-u6-q1', kind: 'single', cognitive: 'analysis', safetyCritical: true,
          prompt: 'A client on prescribed blood-pressure medication asks whether the pre-workout she just bought — a proprietary blend with 300 mg caffeine — is safe to take with it. What do you do?',
          explanation: 'Interactions between an undisclosed stimulant blend and prescribed medication are a clinical question. A pharmacist can answer it the same day, for free, and it is not yours to answer however confident you feel.',
          options: [
            { id: 'a', text: 'Tell her to check with her pharmacist or prescriber before taking it, and hold off on any recommendation until she has', correct: true, rationale: 'Correct: the right professional, a fast answer, and no advice given outside your scope.' },
            { id: 'b', text: 'Reassure her that it is mostly caffeine, so it is fine with any medication', correct: false, rationale: 'You cannot know what is in a proprietary blend, and stimulants and blood-pressure medication are precisely the combination not to guess at.' },
            { id: 'c', text: 'Suggest she take half a scoop to test her tolerance', correct: false, rationale: 'Dose-tinkering around prescribed medication is medical advice by another route.' },
            { id: 'd', text: 'Tell her to skip her medication on training days so it does not interfere', correct: false, rationale: 'Never advise a client to alter prescribed medication, in any direction, for any reason.' },
          ] },
        { id: 'apt501-u6-q2', kind: 'single', cognitive: 'recall',
          prompt: 'Which statement about supplement regulation is true in most jurisdictions?',
          options: [
            { id: 'a', text: 'Supplements are regulated broadly as foods, so no pre-market proof of effectiveness is required', correct: true, rationale: 'Correct — and this is the single fact that explains most of the shelf.' },
            { id: 'b', text: 'Supplements must pass the same efficacy trials as medicines before sale', correct: false, rationale: 'That is the medicines pathway; supplements sit under food law in most places.' },
            { id: 'c', text: 'Any product making a performance claim must have that claim approved by a regulator first', correct: false, rationale: 'Claims are generally policed after the product is already on sale, and unevenly.' },
          ] },
        { id: 'apt501-u6-q3', kind: 'multi', cognitive: 'analysis',
          prompt: 'An influencer post reads: “New research proves this blend triples muscle protein synthesis — that’s why my clients grow so fast. Grab it with code GAINS.” Which evidence failures are present? (Select all that apply.)',
          explanation: 'Mechanism substituted for outcome, an uncited single study, results attributed to the product rather than the training, and the seller diagnosing the problem he profits from solving.',
          options: [
            { id: 'a', text: 'A mechanism measure is being offered as an outcome', correct: true },
            { id: 'b', text: '“New research” with no citation, and one study treated as proof', correct: true },
            { id: 'c', text: 'Client results attributed to the supplement rather than the program they were also doing', correct: true },
            { id: 'd', text: 'A financial interest in the conclusion, undeclared', correct: true },
            { id: 'e', text: 'The claim is invalid simply because it appeared on social media rather than in a journal', correct: false, rationale: 'The platform is not the problem. Careful people post on social media; the failures above are what make this one worthless.' },
          ] },
        { id: 'apt501-u6-q4', kind: 'single', cognitive: 'application',
          prompt: 'A general client, three sessions a week, wants one supplement that is actually worth her money for strength and lean mass. What do you point her at?',
          options: [
            { id: 'a', text: 'Creatine monohydrate, around 3–5 g a day', correct: true, rationale: 'Correct: the strongest evidence base of any ergogenic supplement, and it costs very little.' },
            { id: 'b', text: 'A BCAA drink to sip during sessions', correct: false, rationale: 'Once total protein is adequate, added BCAAs contribute little.' },
            { id: 'c', text: 'A thermogenic fat burner, since body composition is her goal', correct: false, rationale: 'Beyond its caffeine content there is nothing dependable in the category.' },
            { id: 'd', text: 'A testosterone-support blend to improve her training response', correct: false, rationale: 'No dependable effect on hormones or training outcomes, and marketed to the wrong person besides.' },
          ] },
        { id: 'apt501-u6-q5', kind: 'single', cognitive: 'analysis',
          prompt: 'Why is “fasted training increases fat oxidation during the session” a weak reason to prescribe fasted cardio for fat loss?',
          options: [
            { id: 'a', text: 'In-session substrate use is a surrogate; when trials match calories and follow people for weeks, fat mass changes the same either way', correct: true, rationale: 'Correct: the mechanism is real, the outcome claim does not follow from it.' },
            { id: 'b', text: 'The measurement is unreliable, so the finding is probably false', correct: false, rationale: 'The measurement is fine. It just is not the outcome anyone cares about.' },
            { id: 'c', text: 'Fasted training is dangerous for most clients', correct: false, rationale: 'For most healthy clients it is simply a preference, neither dangerous nor superior.' },
          ] },
        { id: 'apt501-u6-q6', kind: 'single', cognitive: 'application',
          prompt: 'A client shows you a tub labelled “1,500 mg proprietary performance blend” and asks whether the dose matches the study cited on the front. What is the honest answer?',
          options: [
            { id: 'a', text: 'You cannot tell, because a proprietary blend discloses ingredients but not amounts — and that is the reason the format exists', correct: true, rationale: 'Correct: an unverifiable dose makes the cited study irrelevant to this product.' },
            { id: 'b', text: 'Divide 1,500 mg by the number of ingredients to estimate each dose', correct: false, rationale: 'Blends are not equal splits; the cheap ingredients are usually most of the mass.' },
            { id: 'c', text: 'If the study ingredient is listed first, the dose must be adequate', correct: false, rationale: 'Order tells you rank, not quantity. First could still be far below the studied dose.' },
          ] },
        { id: 'apt501-u6-q7', kind: 'single', cognitive: 'analysis',
          prompt: 'A new recovery method shows a statistically significant 3% improvement in a trial of well-trained athletes. It needs $2,000 of equipment and twenty minutes after every session. What is the sound conclusion for your general population clients?',
          explanation: 'Effect size has to be weighed against cost, time, complexity and adherence — and a finding in trained athletes may not transfer to a client whose limiting factor is turning up.',
          options: [
            { id: 'a', text: 'The effect is real but small, was found in a different population, and costs more than it is likely to return for these clients', correct: true, rationale: 'Correct: real, small, and not worth it here. All three parts matter.' },
            { id: 'b', text: 'Statistical significance means the effect is large enough to adopt', correct: false, rationale: 'Significance is about whether an effect exists, not whether it is big enough to be worth having.' },
            { id: 'c', text: 'It should be ignored because it was only one trial', correct: false, rationale: 'Single-trial caution is fair, but the deciding issues here are effect size, population and cost.' },
          ] },
        { id: 'apt501-u6-q8', kind: 'multi', cognitive: 'synthesis',
          prompt: 'You are building your development plan for the year. Which choices reflect the principles in this unit? (Select all that apply.)',
          options: [
            { id: 'a', text: 'Book a recurring hour a fortnight and go into it with a specific question', correct: true },
            { id: 'b', text: 'Prefer position stands and systematic reviews over single studies and single personalities', correct: true },
            { id: 'c', text: 'Take your learning goals from where your own last twenty clients exposed a gap', correct: true },
            { id: 'd', text: 'Follow only sources that agree with how you already coach, to avoid confusion', correct: false, rationale: 'That builds an echo chamber. Keep at least one careful person you disagree with.' },
            { id: 'e', text: 'Plan to tell clients openly when you change a practice, and why', correct: true },
          ] },
        { id: 'apt501-u6-q9', kind: 'single', cognitive: 'recall',
          prompt: 'A client is worried that creatine will damage her kidneys. What is the accurate response?',
          explanation: 'The claim rests on case reports in people with existing disease plus a misread marker. Controlled trials and the ISSN position stand find no harm to kidney function in healthy people at recommended doses.',
          options: [
            { id: 'a', text: 'Controlled trials in healthy people show no harm at recommended doses; creatine does raise creatinine on a blood test without kidney function changing, so mention it to her doctor before bloods', correct: true, rationale: 'Correct: the mainstream position, plus the one practical action that matters.' },
            { id: 'b', text: 'The risk is real, so she should cycle off every eight weeks to give her kidneys a rest', correct: false, rationale: 'Cycling is a folk remedy for a risk that has not been demonstrated in healthy people.' },
            { id: 'c', text: 'The evidence is genuinely split, so it is a personal decision either way', correct: false, rationale: 'False balance. Case reports on one side and years of controlled trials plus a position stand on the other is not a split.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt501-u6-teach',
      title: 'Teach it back',
      prompt:
        'Your client has taken a BCAA drink to every session for two years. She loves it, it is part of her routine, and she has told you more than once that it is what keeps her from “losing her gains.” She asks you today, genuinely curious, whether she should switch to the new flavour. Tell her the truth about it — without making her feel stupid, and without losing the parts of the habit that are doing her good.',
      modelAnswer:
        'Honestly? The flavour is the part I would choose on. Here is the thing about BCAAs, and it is not a knock on you for buying them — the marketing on these is genuinely clever. The science on the label is real: leucine, one of the amino acids in there, does switch on the muscle-building signal. What gets left off is that you can’t build muscle out of three amino acids. You need the full set, and you’re already getting all of them in your protein — chicken, yoghurt, your shake, all of it. So the signal they’re selling you is one your lunch already sent. If your protein was falling short, we would have a real conversation, but yours has been solid for a year. The habit itself, though, I would keep. You drink 700 ml of fluid across a session because of that tub, you never turn up flat, and it is a cue that puts you in work mode. So keep the ritual and stop paying for it — a bottle with a squeeze of cordial does the same job, and if you want to spend that forty dollars a month on something with evidence behind it, five grams of creatine costs about eight. Want me to show you how I checked this one? It took about four minutes, and you can do it to the next thing anyone tries to sell you.',
      rubric: [
        { id: 'apt501-u6-t1', text: 'States the verdict plainly — BCAAs add little on top of adequate protein — without hedging into false balance' },
        { id: 'apt501-u6-t2', text: 'Explains the mechanism-versus-outcome trap in plain language, so she understands why the label is technically true and still misleading' },
        { id: 'apt501-u6-t3', text: 'Protects her dignity: names the marketing, not her judgement, and does not lecture' },
        { id: 'apt501-u6-t4', text: 'Keeps what the habit was actually doing (hydration, routine, readiness) and offers a concrete replacement' },
        { id: 'apt501-u6-t5', text: 'Redirects the money to something with real evidence, and offers to teach her the method rather than just the answer' },
      ],
    },

    // 12 ── cumulative review ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt501-u6-cumulative', role: 'cumulative', title: 'Pulling the whole course together',
      questions: [
        { id: 'apt501-u6-cu1', kind: 'single', cognitive: 'analysis',
          prompt: 'You find three papers on the same ingredient: a rodent study, a twelve-person acute crossover, and a meta-analysis of fourteen randomised trials in humans that found no meaningful effect. The brand’s website cites the rodent study. What is the correct read?',
          explanation: 'The synthesis of randomised human trials sits at the top of the design hierarchy and outranks both. That the brand reached past it for the weakest paper is itself information about the brand.',
          options: [
            { id: 'a', text: 'The meta-analysis outranks both, and the brand’s choice to cite the weakest paper tells you something about the brand', correct: true, rationale: 'Correct on both counts — the hierarchy decides, and selective citation is a red flag in its own right.' },
            { id: 'b', text: 'All three are evidence, so the truth sits somewhere in the middle', correct: false, rationale: 'Study designs are not weighted equally. Averaging across the hierarchy discards the reason the hierarchy exists.' },
            { id: 'c', text: 'The rodent study may be right, because mechanisms are more fundamental than outcomes', correct: false, rationale: 'A mechanism that fails to produce the outcome in humans is a mechanism that did not matter.' },
          ] },
        { id: 'apt501-u6-cu2', kind: 'multi', cognitive: 'analysis',
          prompt: 'Survey data show that people who take supplement X have 20% lower body fat than people who do not. A randomised trial of the same supplement finds a 0.3 kg difference in fat mass over twelve weeks, and it is statistically significant. Which readings are sound? (Select all that apply.)',
          explanation: 'The observational gap is confounded by who chooses to supplement; the trial gives you the causal estimate, and its size — not its p-value — decides whether it is worth anything to a client.',
          options: [
            { id: 'a', text: 'The 20% gap is likely confounded — people who buy supplements also tend to train, sleep and eat differently', correct: true },
            { id: 'b', text: 'The trial result can be real and still be too small to matter next to adherence and total intake', correct: true },
            { id: 'c', text: 'A very large survey sample would fix the confounding and establish cause', correct: false, rationale: 'Sample size shrinks random error, not bias. A bigger confounded study gives you a more precise wrong answer.' },
            { id: 'd', text: 'Statistical significance in the trial shows the effect is large enough to recommend', correct: false, rationale: 'Significance answers “is there an effect at all,” not “is it big enough to be worth having.”' },
            { id: 'e', text: 'Reporting the result to a client as “0.3 kg over three months” is more useful than “statistically significant improvement”', correct: true },
          ] },
        { id: 'apt501-u6-cu3', kind: 'single', cognitive: 'synthesis',
          prompt: 'A client arrives with a new method, a new supplement and a screenshot. Which response best demonstrates everything this course has taught you?',
          options: [
            { id: 'a', text: 'Ask what she is hoping it solves, name what is claimed and what evidence backs it, size the effect against what it costs her, give a plain verdict, and show her how you checked', correct: true, rationale: 'Relationship first, then the pipeline, then a decision she can reproduce without you. That is the whole course in one conversation.' },
            { id: 'b', text: 'Tell her that unless it appears in a systematic review, it does not exist', correct: false, rationale: 'Absence of evidence is not proof of absence, and this stance would have you rejecting reasonable things and lecturing your client into silence.' },
            { id: 'c', text: 'Let her try it — belief helps adherence, and no harm is done', correct: false, rationale: 'It attaches your professional name to a claim you have not checked and teaches her that the next purchase is how progress is made.' },
          ] },
      ],
    },
  ],
};
