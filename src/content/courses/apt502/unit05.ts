import type { Unit } from '../../../types/content';

export const unit05: Unit = {
  id: 'apt502-u5',
  code: 'APT 502.5',
  title: 'Muscle Roles, Movement Chains and Anatomical Variation',
  summary:
    'Agonist, antagonist, synergist and stabiliser are jobs a muscle takes in a task, not properties it owns. Once you see that, exercise charts stop being useful and anatomical reasoning takes over. This unit builds the reasoning: trunk muscles judged by what they resist rather than by what they are named for, what open and closed chain genuinely change, a repeatable route from regional anatomy to exercise selection, palpation with its real accuracy limits, the four different clocks on which bone, tendon, muscle and cartilage adapt, and the anatomical variation that makes a single movement standard indefensible.',
  qc: {
    sources: [
      { citation: 'Neumann DA — Kinesiology of the Musculoskeletal System: Foundations for Rehabilitation, 3rd ed. Elsevier/Mosby', year: 2017, evidenceType: 'Textbook', verified: false },
      { citation: 'Standring S (ed) — Gray’s Anatomy: The Anatomical Basis of Clinical Practice, 42nd ed. Elsevier', year: 2020, evidenceType: 'Textbook', verified: false },
      { citation: 'Bogduk N — Clinical Anatomy of the Lumbar Spine and Sacrum, 5th ed. Churchill Livingstone/Elsevier', year: 2012, evidenceType: 'Textbook', verified: false },
      { citation: 'Escamilla RF — Knee biomechanics of the dynamic squat exercise. Medicine & Science in Sports & Exercise 2001;33(1):127–141', year: 2001, evidenceType: 'Biomechanical review', verified: false },
      { citation: 'Steinkamp LA, Dillingham MF, Markel MD, Hill JA, Kaufman KR — Biomechanical considerations in patellofemoral joint rehabilitation. American Journal of Sports Medicine 1993;21(3):438–444', year: 1993, evidenceType: 'Biomechanical study', verified: false },
      { citation: 'Bohm S, Mersmann F, Arampatzis A — Human tendon adaptation in response to mechanical loading: a systematic review and meta-analysis of exercise intervention studies on healthy adults. Sports Medicine – Open 2015;1:7', year: 2015, evidenceType: 'Systematic review and meta-analysis', verified: false },
      { citation: 'Heinemeier KM, Schjerling P, Heinemeier J, Magnusson SP, Kjaer M — Lack of tissue renewal in human adult Achilles tendon is revealed by nuclear bomb 14C. FASEB Journal 2013;27(5):2074–2079', year: 2013, evidenceType: 'Primary research', verified: false },
      { citation: 'Broadbent CR, Maxwell WB, Ferrie R, Wilson DJ, Gawne-Cain M, Russell R — Ability of anaesthetists to identify a marked lumbar interspace. Anaesthesia 2000;55(11):1122–1126', year: 2000, evidenceType: 'Primary research', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-08-03',
    reviewBy: '2027-08-03',
    controversies:
      'Several live disagreements sit inside this unit, and they are taught as disagreements rather than as settled questions. Whether delayed transversus abdominis onset causes low back pain, and whether targeted deep muscle training beats general exercise, remains unsettled; the Cochrane evidence finds motor control exercise about equal to other exercise. Whether open versus closed chain is even a coherent classification is disputed, with several authors arguing that the terms should be replaced by an explicit description of boundary conditions; the timing and safety of open-chain quadriceps work after ACL reconstruction has moved substantially and is still moving. Whether tendon cross-sectional area reliably increases with training, or whether adaptation is almost entirely a change in material properties, is unresolved. Whether antagonist co-contraction should be read mainly as a cost or mainly as protective control is argued both ways, and surface EMG cross-talk makes the underlying measurements softer than published figures suggest. Finally, how much of a limit in squat depth or hip rotation comes from bone shape rather than soft tissue cannot be decided without imaging, and imaging findings such as cam morphology are common in people with no symptoms at all.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u5-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt502-u5-p1', kind: 'single', cognitive: 'application',
          prompt: 'A client lowers herself under control from a box, one leg, over three seconds. During the descent, what are her quadriceps doing?',
          options: [
            { id: 'a', text: 'Producing a knee extension moment while the knee bends: the same moment as on the way up, against a movement going the other way', correct: true, rationale: 'The muscle’s pull and its moment direction are unchanged. What changed is the direction the joint travels, and that is a property of the task, not of the muscle.' },
            { id: 'b', text: 'Producing a knee flexion moment, because the knee is bending', correct: false, rationale: 'Muscles pull; they cannot push. The quadriceps can only ever extend the knee. Here they are being lengthened while they do it.' },
            { id: 'c', text: 'Relaxing, since gravity is doing the work', correct: false, rationale: 'Gravity supplies the motion, but something has to meter it out. Switch the quadriceps off and she arrives on the floor.' },
          ] },
        { id: 'apt502-u5-p2', kind: 'single', cognitive: 'recall',
          prompt: 'What is the defining feature of a closed-chain movement, as the term is usually taught?',
          options: [
            { id: 'a', text: 'The distal segment is fixed against considerable external resistance', correct: true, rationale: 'Steindler’s original wording, and the one most texts still use, with the honest caveat that it is applied inconsistently.' },
            { id: 'b', text: 'More than one joint moves', correct: false, rationale: 'Plenty of open-chain movements involve several joints. A tennis serve is not a closed chain.' },
            { id: 'c', text: 'The exercise is performed standing and bearing weight', correct: false, rationale: 'A common shorthand, but a push-up is closed and standing is not enough on its own: a standing cable curl is open.' },
          ] },
        { id: 'apt502-u5-p3', kind: 'single', cognitive: 'analysis',
          prompt: 'Two clients squat with identical intent. One keeps a nearly upright trunk; the other must lean noticeably forward to keep the bar over her mid-foot. What is the most likely explanation to check first?',
          options: [
            { id: 'a', text: 'Segment proportions: femur length relative to tibia and torso sets the trunk angle by geometry, before technique enters the picture', correct: true, rationale: 'Where the bar must stay is fixed. The linkage that keeps it there is not. Different limb ratios produce different trunk angles for the same intent.' },
            { id: 'b', text: 'The second client has weak spinal extensors', correct: false, rationale: 'A forward trunk raises extensor demand, so weakness would be a consequence of the position rather than its cause.' },
            { id: 'c', text: 'The second client has poor ankle mobility and needs to stretch her calves', correct: false, rationale: 'Ankle range is worth checking, but it is one candidate among several, and it cannot explain a difference that is present at every ankle angle.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt502-u5-outcomes',
      outcomes: [
        { level: 'recall', text: 'Define agonist, antagonist, synergist, neutraliser and stabiliser as task-dependent roles, state the standard open- and closed-chain definitions, and name the approximate adaptation timescales of muscle, tendon, bone and cartilage.' },
        { level: 'application', text: 'Map a given exercise to its joint motions, the external moment at each joint, and the muscles positioned to meet that moment. Palpate the landmarks that orient you, and state the accuracy limits of what you felt.' },
        { level: 'analysis', text: 'Analyse how a change in load position, direction of travel or fixed segment reassigns muscle roles and redistributes joint demand, and explain what open- and closed-chain conditions genuinely change rather than what they are claimed to change.' },
        { level: 'synthesis', text: 'Build an exercise selection and progression argument for an individual client from regional anatomy, tissue adaptation rates and observed anatomical variation, and justify why a single movement standard is not defensible.' },
      ],
    },

    // 3 ── core instruction (five concept blocks) ────────────────────────────
    {
      type: 'concept', id: 'apt502-u5-c1', heading: 'A muscle does not have a role. It takes one.',
      body:
        'Marta is lowering herself off a thirty centimetre box on one leg, slowly, the way you asked. At the bottom she looks up: “What am I meant to be feeling here?” You start to say quadriceps and stop, because the honest answer is better than the poster behind her.\n\n' +
        'Going up, her quadriceps produced a turning effort that straightens the knee, which anatomists call a knee extension **moment**. How big that moment is depends on the force the muscle makes and on its moment arm, meaning the perpendicular distance from the line of that force across to the joint axis. Coming down, they produce that same moment while the knee travels the other way. Pulling while it shortens is called working concentrically. Pulling while it is being lengthened is working eccentrically. Nothing in the tissue changed. The task did. The poster says “step-up: glutes, quads” and has no column for direction of travel, load position, speed, or which end of the limb is fixed, which are the things that decide what a muscle is doing.\n\n' +
        '## Four words, four job titles\n\n' +
        'Each of the four names a job, not a tissue. The **agonist** produces the net joint moment the task demands, in the direction it demands. The **antagonist** produces the opposing moment. The **synergist** adds to the agonist’s moment or cancels an unwanted part of it. The **stabiliser**, sometimes called the fixator, holds a segment still so the agonist has something to pull against. None of them mentions anatomy. They describe a task, so when the task changes the assignments change with it. Arithmetic hides in the second one: net joint moment is agonist minus antagonist, so an antagonist that switches on does not merely fail to help. It subtracts.\n\n' +
        'The second half of the synergist definition gets dropped almost everywhere. A helping synergist pulls the same way as the agonist. A **neutraliser** cancels the part of the agonist’s action the task does not want. Biceps brachii bends the elbow and rolls the palm upward, so in a reverse curl with the palm down, pronator teres works through every repetition purely to stop the roll and let the bending survive alone. The abdominal wall runs the same trick in another plane: the right external oblique and the left internal oblique turn the trunk to the left, but bring all four in at once and the turning cancels, leaving flexion. Muscles a chart files under rotators end up producing flexion, because the half of each that the task did not want has been cancelled by its opposite number.\n\n' +
        '## One muscle, two jobs at once\n\n' +
        'A force couple is two or more muscles pulling in different directions whose combined effect is a turn. Upward rotation of the scapula takes three at once: upper trapezius, lower trapezius and serratus anterior. In that same instant the upper and lower trapezius are opponents for lifting the shoulder and partners for turning it.\n\n' +
        'At the shoulder joint, the deltoid pulls almost straight up the shaft of the humerus during early abduction, which alone would drag the head of the humerus toward the acromion. Subscapularis, infraspinatus and teres minor pull that head down into its socket and hold it centred while the deltoid raises the arm. Supraspinatus does both jobs at once: it abducts, which is agonist work, and it presses the head into the socket, which is stabiliser work.\n\n' +
        'Many certified trainers were taught something false about that same joint. The relay story, in which supraspinatus starts the first fifteen degrees of abduction and then hands over to deltoid, is tidy and wrong. Both are active from the first degree and both contribute to the top of the range. Lose deltoid function and you can still raise the arm; lose supraspinatus and you can still raise it with less force. The story matters because it produces relay coaching: deep muscles switch on first, big ones take over, and a client’s problem is a fault in the handover. There is no handover. Joint angle and task demand set the shares.\n\n' +
        '## What the antagonist costs\n\n' +
        'Pulling on both sides of a joint at once, called co-contraction, is not free. It raises the squeeze through the joint, costs energy, and by the arithmetic above eats into the moment left to move anything. Beginners do more of it than experts, and antagonist activity falling away is one sign that a movement is being learned. It is still not a fault. Stiffening a joint by pulling both sides is the right answer when the load is unpredictable, the surface is unstable, or the person does not know what is about to happen: the nervous system is buying control and paying in economy. That is why a first session on a new lift can feel far heavier than her numbers say. She is paying for stability she has not yet learned she does not need. One caution: co-contraction is measured with surface EMG, and signal from neighbouring muscles bleeds into the recording, so the published percentages are softer than they look.\n\n' +
        'All of which is why “what muscle does this exercise work?” cannot be answered as asked.\n\n' +
        '> Key idea: the question that does have an answer is “what moment does this position demand at each joint, and who is placed to meet it here?”\n\n' +
        'Ask that and the same step-up becomes a hip task or a knee task, depending on where the load line falls. Raise the box, let her lean forward, put the load in one hand, and the answer changes again. The chart’s question gives a list. This one gives a reason.',
    },
    {
      type: 'concept', id: 'apt502-u5-c2', heading: 'The trunk: the clearest case that roles are assigned, not owned',
      body:
        'Rosa arrives having spent two years with a trainer who taught her to pull her navel toward her spine before every repetition of everything. She does it faithfully. She also cannot get through forty metres of a loaded carry without going grey, because she is holding a moderate contraction of her whole abdominal wall while trying to breathe past it. She is not doing it wrong. She was handed a rule with no task attached, and the trunk is where that mistake does the most damage, because the trunk is where roles change fastest.\n\n' +
        '## Named for one job, doing another\n\n' +
        'Run the four role words across the trunk muscles and something odd shows up: almost none of them spend their working lives doing the action they are named for. Rectus abdominis flexes the trunk, and in nearly everything you will ever program it flexes nothing. It resists extension. The external oblique’s fibres run down and forward, the internal oblique’s run up and forward, and together they make a diagonal sling that turns the trunk when one side works and compresses and flexes it when both do. Transversus abdominis runs straight across the body, so it cannot bend or turn anything at all. It contributes **hoop tension**, a belt-like squeeze around the contents of the abdomen, plus tension carried into the **thoracolumbar fascia**, the broad connective sheet across the low back.\n\n' +
        'The back wall tells the same story. Quadratus lumborum runs from the iliac crest and the iliolumbar ligament up to the twelfth rib and the lumbar transverse processes, making it a side-to-side brake and, because it anchors that rib downward, part of the base the diaphragm pulls against. The erector spinae work on long lever arms and both produce and control large movement. The lumbar multifidus sits deeper, each fascicle spanning two to five segments, doing local work on segmental shear and lordosis rather than gross motion. Named as prime movers, employed as brakes and stabilisers.\n\n' +
        '## What bracing buys and what it costs\n\n' +
        'The cylinder picture you have met, with the diaphragm above, the pelvic floor below, the abdominal wall around and the extensors behind, is a fair first approximation, and the pressure it describes is real. Raising **intra-abdominal pressure**, the pressure inside the belly, does increase spinal stiffness. What gets left out is the price. The muscles that generate the pressure also generate flexion moments across the lumbar spine, and those moments add compression. That is why the old claim traced back to Bartelink in 1957, that intra-abdominal pressure unloads the spine, has not survived modelling. You buy stiffness and you pay in compression, and a trade like that is made per task.\n\n' +
        '> Key idea: brace to the demand of the task, not to the maximum you can produce. A maximal brace on every repetition of everything is a poor default rather than a safe one.\n\n' +
        'This is also where one study became an industry. In 1996 Hodges and Richardson reported that in people with low back pain, transversus abdominis switched on later than it did in people without pain, during rapid arm movements. A decade of hollowing drills followed. What the finding actually was: a small average timing difference, in one laboratory task, in a small sample, with no way to tell whether the delay caused the pain or the pain caused the delay. Later work questioned whether the muscle even behaves as a single evenly timed sheet.\n\n' +
        'Lederman put the case against the whole edifice bluntly in 2010, and the trials have since settled it about as far as trials can. **Motor control exercise**, meaning training aimed at the deep trunk muscles and their timing, works for chronic low back pain, probably beats minimal intervention, and shows no clear advantage over other exercise. That is the Cochrane conclusion, not a contrarian reading of it. Bracing versus hollowing has its own literature, with modelling from McGill’s group finding a general brace more stabilising than a targeted hollow. None of it is settled enough to teach as fact in either direction. Teach it as a live disagreement in which the strong version of the deep muscle story did not hold.\n\n' +
        '## Breathing competes with bracing\n\n' +
        'One more competition for these muscles gets almost no coaching time. The diaphragm has a postural job and a breathing job, and there is only one diaphragm. The abdominal wall does forced breathing out and trunk stiffness with the same tissue. Raise the demand for air, in the sixth minute of a conditioning piece or at the far end of a heavy carry, and the postural contribution measurably degrades. That is why the trunk gives way at the end of a set rather than the start, and why the client taught to brace maximally and continuously is least stable when she most needs stability. Where the load allows it, breathe between repetitions rather than through them.\n\n' +
        'One honest role analysis lands the chapter, and the figure after it lays the same carry out panel by panel. Rosa carries a twenty-four kilogram kettlebell in her right hand for forty metres. The load hangs out to the side of her spine, so it applies a right side-bending moment to the trunk for the whole distance, and the muscles meeting it are on the left: left quadratus lumborum, left obliques and left erector spinae, all working **isometrically**, meaning producing force without changing length. Those are the same obliques a chart calls rotators. Rectus abdominis is doing nothing it is named for, and transversus abdominis is contributing stiffness rather than motion. Meanwhile the hip abductor demand swaps sides with every step, falling on the side the load sits over and rising on the other. One exercise, four role assignments per second, none of them findable in a muscle list.',
    },

    // ── new visual: the carry ────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u5-visual-carry',
      title: 'One carry, two jobs: what the trunk resists and how the hip demand swaps sides',
      diagramId: 'chain-carry-load-path',
      caption:
        'A 24 kg kettlebell in the right hand, seen from behind. Left: the load line sits out to the side of the spine, so the muscles on her left hold a side-bending moment for the whole distance. Right: the same load makes hip abductor demand fall on one step and rise on the next.',
      callouts: [
        { id: 'apt502-u5-vc1', label: '1', text: 'Nothing in the left panel is moving. Every muscle named there is a brake, and every one of them is being used for something other than the action it is named for.' },
        { id: 'apt502-u5-vc2', label: '2', text: 'Distance d is the whole story at the trunk. Let the bell rest against her thigh and d shrinks. Hold it away from the body, or lean away from it, and d grows at exactly the same weight.' },
        { id: 'apt502-u5-vc3', label: '3', text: 'Compare the two step panels. When the loaded side is also the stance side, the weight line runs close to that hip and the abductors get an easy step. One stride later the same load is displaced away from the stance hip and the other side works hard. The demand swaps about once a second.' },
        { id: 'apt502-u5-vc4', label: '4', text: 'The notes at the bottom are why a carry is a poor test of the trunk on its own. Grip usually quits first, and the abdominal wall is running stiffness and forced breathing out with the same tissue, so the trunk fades late rather than early.' },
      ],
    },

    {
      type: 'concept', id: 'apt502-u5-c3', heading: 'Fixing the far end: what open and closed chain actually change',
      body:
        'The vocabulary comes from engineering by way of Steindler in 1955. A closed **kinematic chain**, meaning a set of linked segments, has its far end fixed against considerable external resistance. An open one does not. Be honest from the start that the definition is applied inconsistently and everybody in the field knows it. A bench press has the hands on a rigid bar meeting a large load, which reads as closed; the hands also travel freely through space, which reads as open. Cycling fixes the foot to a pedal that is itself moving. A freestyle pull meets substantial but yielding resistance. Several authors have argued the terms should be retired in favour of describing the boundary conditions, and the practical version of that advice costs one extra sentence.\n\n' +
        '> Key idea: say what is fixed, what moves, and where the force enters. That sentence is never ambiguous. The label often is.\n\n' +
        '## What actually changes when the foot is fixed\n\n' +
        'First, **degrees of freedom**, meaning how many things can vary independently. Fix the foot and the hip, knee and ankle angles stop being independent: given foot position and trunk orientation, choosing one very nearly settles the others. Free the foot and you have one joint doing one thing. The consequence is not academic. A closed chain offers redundancy, and redundancy is compensation: your client can shift load toward the other limb, change her trunk angle, or trade knee demand for hip demand, without doing anything that looks like cheating. An open chain offers her nothing. Which one you want depends on whether you are training a movement or loading a muscle, and those are different goals that get talked about as though they were one.\n\n' +
        'Second, where the load enters and how it spreads. In a closed chain a single external force line, the ground reaction under the fixed foot, serves every joint at once, and its perpendicular distance to each joint axis sets that joint’s share of the demand. Move that line three centimetres and every joint changes demand in the same instant, some up and some down.\n\n' +
        'In an open chain the resistance acts at a single point near the free end of the limb, so every joint between that point and the fixed base has to carry it and there is no second load path to trade the demand into. On a single-joint machine that means the whole moment lands on one joint. A lat pulldown is still an open chain, and its one resistance point loads elbow, shoulder and scapula together, but she cannot shift any of it onto a leg or a floor. That is why leg extensions produce quadriceps demand your client cannot dodge, and why squats produce quadriceps demand she can.\n\n' +
        'Third, **biarticular** muscles, the ones that cross two joints, stop behaving the way single-joint intuition predicts. During the ascent from a squat the hamstrings shorten at the hip while lengthening at the knee, so they build force with very little net change in length. That resolves Lombard’s paradox, the apparent nonsense of quadriceps and hamstrings both active while a person rises from a chair, as though two opponents were cooperating to straighten both joints. The arithmetic works because in that position the hamstrings’ hip extension moment arm is longer than their knee flexion moment arm, so their net effect straightens the body. Rectus femoris runs the mirror image at the other end. Once the far segment is fixed, a two-joint muscle is not doing anything you can read off a list of its actions.\n\n' +
        '## Safe for which tissue, at which angle?\n\n' +
        'Fourth, joint loading, and this is where the rehabilitation folklore needs care, because the honest picture depends on both angle and tissue. In open-chain knee extension the quadriceps pull through the patellar tendon and drag the tibia forward, and that drag is largest near full extension, so ACL strain peaks inside the first thirty degrees of bend and falls as the knee bends further. In a squat, compression through the joint and the hamstrings pulling backward reduce that drag, which is where “closed chain is safe for the ACL” came from.\n\n' +
        'The **patellofemoral** picture, meaning load between the kneecap and the thigh bone, runs the other way, and that is the half that gets forgotten. Steinkamp and colleagues found stress there higher in open-chain extension through the shallow range and higher in the leg press through the deep range, with the crossover near fifty degrees. So “which is safer” has no answer until you name the tissue and the angle. The blanket ban on open-chain quadriceps work after reconstruction has not held up either: recent systematic reviews find that introducing it, with sensible range limits early on, improves quadriceps strength without a clear increase in graft laxity. Know that this area is still moving, and ask the treating clinician rather than run a rule inherited from a textbook edition that is now fifteen years old.\n\n' +
        'Fifth, and least defensible, is the claim that closed chain is “more functional”. That is a slogan, not a finding. Kicking, throwing, swinging a racquet and the swing phase of every stride you have ever taken are open chain. Function is a property of the goal, not of the apparatus. And because strength transfers poorly between the two conditions, strength built in open-chain extension shows up most reliably in open-chain extension, which is an argument for choosing deliberately rather than an argument against either one. The reasoning that survives all of this is plain: name what is fixed, find where the force enters, work out its distance from each joint axis, then decide which muscles are placed to meet it. Do that and you never need the label.',
    },

    // ── new visual: knee loading by angle ────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u5-visual-knee',
      title: 'Two panels, one knee: why there is no blanket answer',
      diagramId: 'chain-knee-load-by-angle',
      caption:
        'Left: forward drag on the shin bone, which is what strains the ACL. Right: stress behind the kneecap. Open-chain knee extension and the leg press swap places between the two panels, which is why a single verdict on either exercise cannot be right.',
      callouts: [
        { id: 'apt502-u5-vk1', label: '1', text: 'In the left panel the open-chain curve peaks inside the first thirty degrees of bend and then drops away. That is the whole basis of early range limits after ACL reconstruction: the danger is not the exercise, it is the part of the range.' },
        { id: 'apt502-u5-vk2', label: '2', text: 'The dashed line in the left panel stays low because compression through the joint and backward pull from the hamstrings hold the shin in place. This panel on its own produced the rule that closed chain is safe.' },
        { id: 'apt502-u5-vk3', label: '3', text: 'The right panel is the forgotten half. The two curves cross near fifty degrees, so the machine that is kinder to the kneecap near a straight leg becomes the harsher one deep in the bend.' },
        { id: 'apt502-u5-vk4', label: '4', text: 'Put the panels together and the question changes shape. Not “is this exercise safe” but “which tissue, at which angle, in this person, today”. Both curves are schematic: they carry the direction and the crossover, not exact numbers.' },
      ],
    },

    {
      type: 'concept', id: 'apt502-u5-c4', heading: 'From regional anatomy to exercise selection, and what your fingers can honestly tell you',
      body:
        'A colleague leans over the desk and asks what a good exercise is for the posterior deltoid. It is a friendly question and it is the wrong shape, because it assumes a lookup table exists and that the only difficulty is finding the right row. What replaces the table is a method that runs the same way every time, on equipment you have never seen, with clients who do not match the diagram.\n\n' +
        '## Five questions, every time\n\n' +
        'Step one: name the joint motions the task requires and the positions they pass through, in anatomical language rather than gym language. Not “it is a back exercise” but “the humerus travels from here to here in this plane while the scapula does this”. Step two: find the external force line, which is gravity acting through a mass or the cable’s **line of pull**, and work out its perpendicular distance to each joint axis. Force times that distance is the moment the muscles must match, and it is the number no chart can see, because it depends on where your client is at that instant.\n\n' +
        'Step three: ask who crosses that joint on the side opposing the external moment, and whether their line of pull genuinely has a moment arm about that axis here, because a muscle can cross a joint and contribute almost nothing at a given angle. Step four: ask where those muscles sit on their length and moment-arm curves, and whether any of them cross two joints, in which case the other joint’s angle is setting their length behind your back. Step five: ask what takes the remainder, meaning the passive structures and contact surfaces that have no say in the matter, and whether that tissue is currently tolerating it.\n\n' +
        'Run those five steps on a bent-over row against a chest-supported row and the difference stops being a matter of taste. The shoulder and scapular demands are broadly similar. The lumbar demand is not, because in the bent-over version the mass of the trunk plus the bar sits on a long horizontal moment arm from the lumbar spine for every second of every set, and a pad has taken that job in the supported version. Neither is better. They are different products, and “posterior deltoid” was never the useful unit for choosing between them. The same method tells you why a cable row changes character when she stands half a metre further back, and why a step-up stops being a hip task when the box gets lower.\n\n' +
        '## What your fingers can find\n\n' +
        'Palpation is how you orient yourself inside this method. Start with bone, because bone does not change with muscle tone: iliac crest, the anterior and posterior superior iliac spines, greater trochanter, tibial tuberosity, head of the fibula, medial malleolus, the spine and inferior angle of the scapula, acromion, olecranon, radial styloid, the sternal angle and through it the second rib, and the vertebra prominens at the base of the neck. Then the muscles and tendons you can genuinely find and then confirm by asking for a contraction and feeling it change under your hand: upper trapezius, latissimus dorsi at the back wall of the armpit, the hamstring tendons either side of the hollow behind the knee, tibialis anterior, and the fibularis tendons behind the outer ankle bone. Confirming by function is the part people skip, and it is the only thing that turns a guess into a finding.\n\n' +
        '## What your fingers cannot tell you\n\n' +
        'Now the honest limits, because this is where confident practitioners are routinely wrong. The **intercristal line**, drawn between the tops of the iliac crests, is taught as crossing the fourth lumbar vertebra. Imaging places it anywhere from the gap between L3 and L4 down to the body of L5, and it sits systematically higher in women and in people with more tissue over the bone. Broadbent and colleagues asked anaesthetists, who palpate spines for a living, to identify a marked lumbar gap: they were right about twenty-nine per cent of the time, and their errors ran toward the head, usually by one or two levels.\n\n' +
        'Pelvic landmark symmetry and palpated leg length have poor **inter-rater reliability**, which is to say two competent clinicians examining the same pelvis frequently disagree. The greater trochanter is not the hip joint, since the head of the femur sits inward of it and roughly level with its top, so “hinge from where my thumb is” points at the wrong axis by several centimetres. And the deep abdominal contraction you were taught to feel two centimetres inward of the front hip bone lies underneath the internal oblique and its **aponeurosis**, the flat tendon sheet the muscle runs into. What your fingers register is the side wall of the abdomen behaving as a unit, not one sheet of it acting alone.\n\n' +
        '> Key idea: palpation orients you and it does not measure. If a programming decision would turn on eight millimetres felt through skin and fat, that decision needs a better input than fingers.\n\n' +
        'None of that makes palpation useless. It makes it a way of orienting yourself and of talking to a client about her own body. Three habits keep it honest. Say “about here” and mean it. Use two landmarks and the relationship between them rather than one landmark and a number, because relationships survive a centimetre of error and absolute claims do not. And never write a palpated finding into a record as though it were a measurement.',
    },
    {
      type: 'concept', id: 'apt502-u5-c5', heading: 'Four tissues on four clocks, and no two skeletons alike',
      body:
        'Hana came back six weeks ago after a year away. Her numbers are climbing beautifully, faster than either of you expected, and her Achilles has started talking to her in the mornings. There is no mystery in that. Her muscle is adapting on one clock and her tendon on another, and the gap between those two clocks is where a large share of avoidable overuse injury lives.\n\n' +
        '## Muscle and tendon keep different time\n\n' +
        'Muscle keeps the fastest time. Protein synthesis inside the fibres rises within hours of a session and stays up for a day or two. Measurable change in size usually needs six to ten weeks of consistent work, and the strength gained before that is mostly neural: better recruitment, better coordination, less co-contraction. Muscle also loses fast. Strict immobilisation or bed rest produces measurable loss of cross-sectional area inside a week, with strength falling faster than size, again because the neural part goes first. Fast to gain and fast to lose, which is why a returning client’s numbers climb so encouragingly.\n\n' +
        'Tendon keeps a stranger kind of time, and this is the part that surprises experienced trainers. Collagen synthesis rises within about a day of loading and stays up for two to three days, so the tissue is clearly responsive. But the core of a mature tendon barely renews itself at all. Heinemeier’s group used the carbon-14 left in the atmosphere by nuclear testing in the 1950s and 60s as a date stamp, and found the core of the human Achilles is essentially laid down by about seventeen years of age and hardly renewed after that.\n\n' +
        'What training changes is mostly material: **stiffness**, meaning how much force it takes to stretch the tendon a given amount. Change in cross-sectional area is slower and smaller, and whether it happens reliably is still argued. Bohm and colleagues found in meta-analysis that the size of the strain drives adaptation rather than volume or speed, with meaningful stiffness change over roughly eight to twelve weeks of high-load work. Note the mismatch: muscle is showing results at six weeks and tendon has barely started.\n\n' +
        '## Bone and cartilage run on seasons and decades\n\n' +
        'Bone is slower still and answers a different signal. **Remodelling**, the constant cycle of old bone being removed and new bone laid down, runs through crews of cells in which the removing takes roughly three weeks and the rebuilding roughly three months, so one full cycle is a season. Measurable change in density needs six to twelve months, and density can dip early in a program because removing leads rebuilding. Bone also does not care about the currency muscle cares about. Its stimulus is the size and rate of strain plus novelty in the direction of loading, and the response saturates after a few dozen loading cycles. Rest between bouts restores sensitivity, while more repetitions of the same thing do very little. Volume is the wrong lever for bone, which is why a program that grows muscle handsomely can leave bone almost unaddressed if every load is low, slow and identical.\n\n' +
        'Cartilage is the one you cannot train at all in the way the other three allow. It is **avascular** and aneural, meaning no blood supply and no nerves, and it is fed by cyclical loading squeezing fluid in and out. Its collagen network essentially does not renew in adulthood: matrix dating puts the half-life of type II collagen in adult joint cartilage in the range of many decades, while the proteoglycan fraction turns over in years. So the honest strategy is not to strengthen cartilage. It is to keep it fed with motion, keep the load history inside its tolerance, and avoid long unloaded stretches, since immobilisation thins it. You are managing an asset that does not rebuild, not building one that does.\n\n' +
        '## Age changes the rates, not the order\n\n' +
        '**Sarcopenia**, the loss of muscle with age, is disproportionately a fast-fibre story. Fast fibres shrink preferentially and motor units are remodelled in a way that converts fast units to slow, so power declines before strength and strength before mass. Tendon stiffness tends to fall, bone mass declines with a steep window around and after menopause, and cartilage thins while its matrix stiffens. What does not change with age is the order of the clocks. Only the rates change, and the capacity to adapt stays real in all four tissues into the ninth decade.\n\n' +
        '> Key idea: muscle accepts load increases faster than tendon and bone can follow, so the client who feels ready is systematically ahead of her passive tissues. The returning trainee is the most exposed version of that, because her muscle comes back fastest of all.\n\n' +
        'That is the anatomical basis for progression rate, and it is the argument to give a client who thinks you are being cautious for the sake of it. Hana is not fragile and she has not done anything wrong. She is six weeks into a muscle adaptation and two weeks into a tendon one.\n\n' +
        '## No two skeletons alike\n\n' +
        'The last argument of this course is an anatomical one. The angle between the neck and the shaft of the femur runs from roughly 115 to 140 degrees between healthy adults, with the average near 125. **Femoral anteversion**, the forward twist of that neck relative to the shaft, varies by tens of degrees between healthy people and takes the whole arc of comfortable hip rotation with it. Hip socket depth and orientation vary, so does the twist along the tibia, and so do femur to tibia to torso proportions, which decide by geometry alone how far a trunk must travel forward to keep a bar over the mid-foot.\n\n' +
        'Soft tissue varies as much. Palmaris longus is missing in about one person in seven, at rates that differ several-fold between populations, plantaris in perhaps one in ten, extra heads turn up on biceps brachii, and the sciatic nerve has several documented relationships to piriformis. Attachment points differ between individuals by centimetres, which changes moment arms measurably: differences in the Achilles tendon’s moment arm are large enough to show up in running economy between runners. Fibre-type proportion in vastus lateralis ranges from roughly a sixth to more than four-fifths type I across healthy people.\n\n' +
        'Set against all that, a movement standard is a claim about what a body should look like, and bodies do not agree. Hold the honest limit alongside it: variation is not a licence for anything at all. You cannot see anteversion, you cannot measure a moment arm on a gym floor, and movement screening batteries predict injury poorly enough that no score should decide a program. What you can do is define the standard by outcome rather than by shape, naming which joints must move, which tissues must take the load, and what she can control, repeat and tolerate without symptoms. Then let the shape land wherever her skeleton puts it.',
    },

    // ── new visual: the four clocks ──────────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u5-visual-clocks',
      title: 'Four tissues, four clocks, one program',
      diagramId: 'chain-tissue-clocks',
      caption:
        'Each row is one tissue on the same squashed timeline. The dashed vertical line marks week six, the point at which a returning client usually feels ready, and shows what has and has not adapted by then.',
      callouts: [
        { id: 'apt502-u5-vt1', label: '1', text: 'Read the dashed line downward. At week six muscle has completed a full adaptation, tendon stiffness has barely begun to change, bone is still inside its first remodelling cycle, and cartilage is not in the conversation at all.' },
        { id: 'apt502-u5-vt2', label: '2', text: 'Every tissue responds to a session within hours or days. Responding and adapting are different things, and the gap between the two is where progression rate lives.' },
        { id: 'apt502-u5-vt3', label: '3', text: 'The dashed bars on the far right are the tissue you cannot rebuild: tendon core and cartilage collagen. For those two the job is protection and load history, not stimulus.' },
        { id: 'apt502-u5-vt4', label: '4', text: 'Bone is the row that punishes the wrong lever. Adding sets does almost nothing once the response has saturated, so bone wants heavier, faster and more varied loading rather than more of the same.' },
      ],
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u5-visual',
      title: 'The same muscles in three tasks, and what changes when the far end is fixed',
      diagramId: 'muscle-roles-chain',
      caption:
        'Left: the external moment arms that decide how a step-up divides its demand between hip and knee. Centre: the four role words as jobs. Below: the same muscles reassigned across the ascent, the descent and a seated knee extension, then the open- and closed-chain conditions side by side.',
      callouts: [
        { id: 'apt502-u5-v1', label: '1', text: 'Reading down a column gives you one task with all four roles filled. Reading across a row holds the role and swaps the muscle. The idea itself lives on the diagonal: follow the quadriceps from the agonist cell of the step-up to the antagonist cell of the step-down, and nothing in the tissue moved between them.' },
        { id: 'apt502-u5-v2', label: '2', text: 'a and b are the only two numbers doing real work in the top-left figure. Lean the trunk, raise the box or shift the bar, and the two arms trade against each other. That is how one exercise becomes a hip task or a knee task.' },
        { id: 'apt502-u5-v3', label: '3', text: 'The step-down column is where the vocabulary breaks. Gravity supplies the motion, so no muscle is the prime mover, yet the extensors are working hardest of the three tasks. Some texts patch this with “eccentric agonist”, and the need for a patch tells you the taxonomy is a description rather than a law.' },
        { id: 'apt502-u5-v4', label: '4', text: 'In the closed-chain panel one force line serves three joints, so demand can be traded between them, and that redundancy is exactly what lets a client compensate. The open-chain panel has nowhere to hide, which is a weakness if you want a movement and a strength if you want one muscle loaded.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt502-u5-worked',
      title: '“It says this is a glute exercise, but I only feel my quads”',
      scenario:
        'Ife, 38, has been doing step-ups onto a twenty centimetre box holding two twelve kilogram dumbbells, three sets of ten each side. The app she uses lists the movement under “glutes”. She has done it for five weeks, reports feeling nothing but the front of her thighs, and wants to know whether she is doing it wrong. She is not. Work the problem the way the method says, and every one of her observations turns out to be information rather than error.',
      steps: [
        { id: 'apt502-u5-w1', title: 'Name the moments, not the muscles',
          reasoning: 'On a step-up the stance leg has to produce a hip extension moment and a knee extension moment. Which of the two is larger is decided by where the whole-system line of gravity falls relative to the hip axis and the knee axis at each instant. The exercise’s name has no say in it, and neither does the app. So the question is not “is this a glute exercise” but “where is her load line, and how far is it from each axis?”' },
        { id: 'apt502-u5-w2', title: 'Find the load line, and measure rather than guess',
          reasoning: 'You film her from the side. At the moment her trail foot leaves the floor, which is the hardest instant of the repetition, her lead hip is bent about forty-five degrees, her trunk is close to vertical, and the dumbbells hang at her sides. Drop a vertical from her combined centre of mass and it sits close to the hip axis and well behind the knee axis. Short external moment arm at the hip, long one at the knee. The app was not wrong about anatomy. It was wrong because it cannot see her.' },
        { id: 'apt502-u5-w3', title: 'Check where the muscle actually sits in this position',
          reasoning: 'Even the modest hip demand that does exist is being met by a gluteus maximus working at a relatively short length, with an extension moment arm that changes through the range rather than staying put. Cueing “squeeze the glute harder” cannot add a moment arm, and telling her to feel something she has no mechanical reason to feel just teaches her to distrust her own sensations. Sensation follows demand. Change the demand.' },
        { id: 'apt502-u5-w4', title: 'Account for her skeleton before calling anything a fault',
          reasoning: 'Ife has a long femur relative to her tibia and torso. At a fixed box height with an upright trunk, that geometry drives her knee further forward than it would for a shorter-femured client doing exactly the same thing, which lengthens the knee moment arm further still. Part of what she is reporting is a fact about her proportions rather than an error in her execution, and no cue will change it.' },
        { id: 'apt502-u5-w5', title: 'Change one variable at a time, and predict before you test',
          reasoning: 'Three candidate changes, three predictions. Raise the box to thirty-five centimetres: more hip bend at the start, so a longer hip moment arm and more hip extensor demand. Ask her to travel the trunk forward over the lead foot: the load line moves forward, the hip arm grows and the knee arm shrinks, which is the fastest single change available. Or move both dumbbells into the hand opposite the working leg: now the load is displaced away from the stance hip and the side-to-side demand on gluteus medius and minimus climbs, which is also “glutes”, just not the one she meant. Predicting first is what makes the test informative.' },
        { id: 'apt502-u5-w6', title: 'Name what you gave away',
          reasoning: 'A higher box with a forward trunk puts the lead knee into more bend at the hardest instant and adds lumbar extensor demand across the whole set, because the trunk’s own mass is now on a longer arm. Contralateral loading buys hip abductor demand at the price of a side-bending moment on the trunk that her obliques and quadratus lumborum have to cover for every repetition. Nothing here is free. The professional act is not finding the change that has no cost. It is knowing the price and deciding whether her current tissue tolerance can pay it.' },
      ],
      takeaway:
        'The step-up is not a glute exercise. The position is. Once you can say where the load line falls and how far it sits from each axis, you stop arguing with the app and start choosing setups on purpose. Ife’s “I only feel my quads” becomes the most useful thing she said all session.',
    },

    // 6 ── interactive lab (classification) ──────────────────────────────────
    {
      type: 'classification', id: 'apt502-u5-classify',
      title: 'Lab: open, closed, or a definition under strain',
      instructions:
        'File each movement by the standard definition: a closed chain has its distal segment fixed against considerable external resistance. Use the third bucket honestly, because some of the most common movements in a gym sit between the categories, and naming that is better practice than forcing a label. For every item, the useful sentence is what is fixed, what moves, and where the force enters.',
      buckets: [
        { id: 'apt502-u5-b-closed', label: 'Closed chain by the standard definition' },
        { id: 'apt502-u5-b-open', label: 'Open chain by the standard definition' },
        { id: 'apt502-u5-b-strain', label: 'The definition strains: describe what is fixed instead' },
      ],
      items: [
        { id: 'apt502-u5-i1', text: 'Barbell back squat',
          bucketId: 'apt502-u5-b-closed', rationale: 'The foot is fixed on the floor against the full system weight, and hip, knee and ankle angles are coupled by that constraint. This is the textbook case.' },
        { id: 'apt502-u5-i2', text: 'Seated knee extension machine',
          bucketId: 'apt502-u5-b-open', rationale: 'The shank is free and the resistance is applied at one point near its far end, so the whole external moment lands on the knee and nothing else in the body can take a share of it.' },
        { id: 'apt502-u5-i3', text: 'Push-up',
          bucketId: 'apt502-u5-b-closed', rationale: 'Hands fixed on the floor against body weight. Shoulder, elbow and wrist angles are coupled, and the trunk becomes part of the chain rather than a bystander.' },
        { id: 'apt502-u5-i4', text: 'Lat pulldown',
          bucketId: 'apt502-u5-b-open', rationale: 'The bar moves to the body. The distal segment is not fixed: it travels through space against resistance, which is the open-chain condition with a heavy load attached.' },
        { id: 'apt502-u5-i5', text: 'Pull-up on a fixed bar',
          bucketId: 'apt502-u5-b-closed', rationale: 'Same muscles as the pulldown, opposite boundary conditions: the hands are fixed and the body travels. Scapular and trunk demands differ accordingly, which is why the two are not interchangeable.' },
        { id: 'apt502-u5-i6', text: 'Prone leg curl machine',
          bucketId: 'apt502-u5-b-open', rationale: 'Femur supported by the pad, shank free, resistance applied at the ankle. One joint takes the whole moment, with no route to another segment.' },
        { id: 'apt502-u5-i7', text: 'Nordic hamstring lower',
          bucketId: 'apt502-u5-b-closed', rationale: 'The ankles are fixed against large resistance and the femur and trunk travel over the fixed shank. It is usually taught as an eccentric hamstring drill, but by the definition it is closed, which is exactly why the hip and trunk demands are so large.' },
        { id: 'apt502-u5-i8', text: 'Barbell bench press',
          bucketId: 'apt502-u5-b-strain', rationale: 'The hands grip a rigid bar meeting substantial resistance, which reads closed. The hands also travel freely through space and the trunk is supported out of the chain, which reads open. Texts disagree. Saying “hands loaded and moving, trunk fixed by the bench” conveys more than either label.' },
        { id: 'apt502-u5-i9', text: 'Cycling on a stationary bike with the foot clipped in',
          bucketId: 'apt502-u5-b-strain', rationale: 'The foot is fixed to the pedal, but the pedal itself travels a circle, so the distal segment is neither still nor free. The joint angles are coupled as in a closed chain, while the load path resembles neither category cleanly.' },
        { id: 'apt502-u5-i10', text: 'The pull phase of a freestyle swimming stroke',
          bucketId: 'apt502-u5-b-strain', rationale: 'The hand meets considerable but yielding resistance and is not fixed to anything. It is the case Steindler’s definition was never written for, and a reminder that the categories were built around a solid floor.' },
      ],
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt502-u5-case',
      title: 'Case: the client whose hips do not match the video',
      brief:
        'Deniz, 31, squats confidently to just above parallel, at which point her pelvis rolls under and her lumbar spine flexes. She has read online that this means tight hip flexors and poor ankle mobility, and she has been stretching daily for a month with nothing to show for it. She arrives slightly embarrassed about it. Every decision is scored against best practice.',
      startNodeId: 'apt502-u5-n1',
      nodes: [
        {
          id: 'apt502-u5-n1',
          situation:
            'You watch three sets. The pelvis rolls under at the same depth every single repetition, loaded or unloaded, warm or cold. Deniz says: “So what do I need to stretch?”',
          choices: [
            { id: 'apt502-u5-n1a', text: 'Run the cheap test first: change her stance width and foot rotation, and find the depth at which the pelvis tucks in each setup.', to: 'apt502-u5-n2',
              quality: 'best', feedback: 'Right move, and it costs ninety seconds. A limit that shifts the moment you change hip position behaves like a joint-shape limit. A limit that stays put wherever you put the hip behaves like something else. You cannot see bone shape, but you can test how the limit responds.' },
            { id: 'apt502-u5-n1b', text: 'Prescribe hip flexor and calf stretching for six weeks and retest then.', to: 'apt502-u5-n3',
              quality: 'poor', feedback: 'You have accepted her diagnosis without testing it, and committed six weeks to it. Note also that hip flexor length is not the tissue that stops a pelvis from rolling backward at depth. If anything the reasoning runs the other way.' },
            { id: 'apt502-u5-n1c', text: 'Tell her that below parallel is the standard and she should keep working toward it under load.', to: 'apt502-u5-n4',
              quality: 'poor', feedback: 'You have made a claim about what her skeleton should be able to do, based on a depth standard invented for a barbell sport she does not compete in. Loading through the point where her lumbar spine takes over is the one option here with a predictable cost.' },
          ],
        },
        {
          id: 'apt502-u5-n2',
          situation:
            'Widening her stance by about fifteen centimetres and turning both feet out roughly twenty degrees buys her a clear seven or eight centimetres of extra depth before the pelvis moves. Narrowing her stance takes it straight back. She asks what that means.',
          choices: [
            { id: 'apt502-u5-n2a', text: '“Your available depth moves with where your hip sits, which is what a joint-shape limit does rather than a tightness problem. We do not know your exact anatomy and we do not need to. We will set your working depth where you keep control, in the stance that gives you the most of it.”', to: 'apt502-u5-n5',
              quality: 'best', feedback: 'Accurate, appropriately uncertain, and immediately actionable. You described the behaviour of the limit, declined to name a structure you cannot see, and turned the finding into a setup.' },
            { id: 'apt502-u5-n2b', text: '“Your mobility improved instantly, so it was never tightness.”', to: 'apt502-u5-n5',
              quality: 'acceptable', feedback: 'You reached the right conclusion by a slightly loose route. Changing stance did not improve her mobility. It changed the geometry of the joint, so a different part of the available range was on offer. The distinction matters when she repeats your explanation to someone else.' },
            { id: 'apt502-u5-n2c', text: '“That is bony impingement. You have got FAI and you should get it imaged.”', to: 'apt502-u5-n5',
              quality: 'poor', feedback: 'Two errors in one sentence. Naming a pathology is outside your scope, and cam and pincer shapes are common in people with no symptoms at all, so imaging a pain-free hip mostly generates worry. She has a range, not a diagnosis.' },
          ],
        },
        {
          id: 'apt502-u5-n3',
          situation:
            'Six weeks of daily stretching later, the depth at which her pelvis tucks has not moved a centimetre. Deniz is discouraged and has started saying she thinks her hips are “just broken”.',
          choices: [
            { id: 'apt502-u5-n3a', text: 'Say plainly that you tested the wrong thing, and run the stance and foot-rotation test now.', to: 'apt502-u5-n2',
              quality: 'acceptable', feedback: 'Good recovery, and the honesty repairs more than the test does. The six weeks were not free, because she now half-believes something is wrong with her. Name that too rather than moving briskly on.' },
            { id: 'apt502-u5-n3b', text: 'Double the stretching volume and add a nightly hip flexor hold.', to: null,
              quality: 'poor', feedback: 'More of an intervention that produced nothing is not a plan, it is a refusal to update. This ends with a client who has stretched for three months, still tucks at the same depth, and has learned to think of her own hips as defective.' },
          ],
        },
        {
          id: 'apt502-u5-n4',
          situation:
            'Two weeks of squatting to a fixed depth under load later, Deniz mentions her low back is sore for a day or two after sessions. It was not before.',
          choices: [
            { id: 'apt502-u5-n4a', text: 'Stop, take the depth back above where the pelvis moves, and run the stance and foot-rotation test properly.', to: 'apt502-u5-n2',
              quality: 'acceptable', feedback: 'Correct action, two weeks late. Worth saying out loud to her that the depth standard was your idea and the soreness followed it, because a client who watches you own that will bring you the next symptom sooner.' },
            { id: 'apt502-u5-n4b', text: 'Reassure her that some soreness is normal and her back will adapt to the range over time.', to: null,
              quality: 'poor', feedback: 'You are asking a lumbar spine to adapt to a position it is entering only because a hip ran out of range. The tissue taking that load is passive, it adapts on a slow clock, and it is giving you the one warning it has. This is how an imported standard becomes an injury.' },
          ],
        },
        {
          id: 'apt502-u5-n5',
          situation:
            'Working depth is set, her sets look controlled, and she is loading again. At the end she asks the question she came in with: “So is my squat wrong?”',
          choices: [
            { id: 'apt502-u5-n5a', text: '“No. A squat standard is a claim about what everybody’s hips should be shaped like, and hips are not shaped alike. What we hold you to is what the movement has to achieve: the joints that move, the load they take, the control you keep. Your shape can land where it lands.”', to: null,
              quality: 'best', feedback: 'This is the argument of the whole unit in four sentences, and it is stated as a principle rather than as reassurance. She can now repeat it to the next person who tells her she is doing it wrong.' },
            { id: 'apt502-u5-n5b', text: '“Everyone is different, so there is no right way to squat.”', to: null,
              quality: 'acceptable', feedback: 'True in spirit and too loose to defend. There are positions that concentrate load on tissue in predictable ways. The point is not that anything goes. It is that the standard is set by what the movement must achieve, not by a shape.' },
            { id: 'apt502-u5-n5c', text: '“It is not wrong yet. We will keep chipping away and get you to full depth eventually.”', to: null,
              quality: 'poor', feedback: 'You have kept the imported standard and simply postponed it, which leaves her still working toward a shape her skeleton may not offer. It also quietly tells her that her current squat is a lesser version of a real one, which is not true.' },
          ],
        },
      ],
    },

    // 8 ── error identification ──────────────────────────────────────────────
    {
      type: 'errorId', id: 'apt502-u5-errorid',
      title: 'Audit this handover note',
      brief:
        'A junior colleague is passing a client to you and has written a handover note. Flag every claim that overstates what anatomy, palpation or tissue biology can support. Leave the sound statements unflagged, because several of them are good reasoning and should survive the audit.',
      document:
        'HANDOVER NOTE. Rosa T., 52, eight months post right knee arthroscopy, discharged from physiotherapy. Assessment: palpated transversus abdominis two centimetres medial to the ASIS and confirmed she can activate it independently of the other abdominals. Right leg measures 8 mm longer by PSIS palpation; issued a heel lift. Confirmed greater trochanter and iliac crest by palpation to orient her hip and pelvis, recorded as approximate. Gluteus maximus is not firing on the right, so I have added activation drills before every session to switch it on. Programmed seated knee extensions to load the quadriceps directly, since her closed-chain work lets her offload to the left leg. Removed all open-chain knee work from her program permanently, because open chain is unsafe for knees. Goal: measurable hip bone density improvement at the twelve-week review. Expecting patellar tendon stiffness to change over eight to twelve weeks of heavy slow resistance work. Cannot squat below parallel without the pelvis tucking; six-week target set to achieve full depth.',
      findings: [
        { id: 'apt502-u5-e1', text: '“palpated transversus abdominis two centimetres medial to the ASIS and confirmed she can activate it independently”', isError: true,
          rationale: 'Transversus abdominis lies deep to internal oblique and its aponeurosis. Fingers cannot separate it from the wall above it, and independent activation is not something palpation can confirm. That claim needs ultrasound, and even then the interpretation is contested.' },
        { id: 'apt502-u5-e2', text: '“Right leg measures 8 mm longer by PSIS palpation; issued a heel lift”', isError: true,
          rationale: 'Palpated pelvic landmark and leg-length assessments have poor inter-rater reliability, and 8 mm sits inside the measurement error of the method. Small asymmetries are also common in people with no symptoms. An intervention has been built on a number the technique cannot deliver.' },
        { id: 'apt502-u5-e3', text: '“Confirmed greater trochanter and iliac crest by palpation to orient her hip and pelvis, recorded as approximate”', isError: false,
          rationale: 'Sound, and the honest use of palpation. Both are bony landmarks that do not shift with muscle tone, they are used together as a relationship rather than turned singly into a number, the purpose is orientation rather than measurement, and the approximation is recorded as an approximation. The one caveat to carry with it: the greater trochanter is not the hip joint, because the head of the femur sits inward of it and roughly level with its top.' },
        { id: 'apt502-u5-e4', text: '“Gluteus maximus is not firing on the right, so I have added activation drills to switch it on”', isError: true,
          rationale: 'Whether a muscle is “firing” is not observable by eye or hand, and a healthy innervated muscle with a demand on it contracts. What varies is how much of the joint moment it is being asked for, which depends on position and load line. That is a programming question, not a switch.' },
        { id: 'apt502-u5-e5', text: '“Programmed seated knee extensions to load the quadriceps directly, since her closed-chain work lets her offload to the left leg”', isError: false,
          rationale: 'Sound reasoning, and the best sentence in the note. Closed-chain redundancy allows compensation between limbs and between joints. Open chain removes it, which is exactly why it exposes a quadriceps deficit that squatting can hide.' },
        { id: 'apt502-u5-e6', text: '“Removed all open-chain knee work from her program permanently, because open chain is unsafe for knees”', isError: true,
          rationale: 'Contradicts the sound line above it, and overstates the literature. Loading depends on angle and tissue: forward drag on the shin peaks near full extension in open chain, while stress behind the kneecap is higher in a leg press than in knee extension through the deeper range. A blanket permanent ban is not supported.' },
        { id: 'apt502-u5-e7', text: '“Goal: measurable hip bone density improvement at the twelve-week review”', isError: true,
          rationale: 'A bone remodelling cycle runs roughly three weeks of removing and three months of rebuilding. Density change needs six to twelve months, and density can dip early because removing leads rebuilding. The goal is set on muscle’s clock, not bone’s.' },
        { id: 'apt502-u5-e8', text: '“Expecting patellar tendon stiffness to change over eight to twelve weeks of heavy slow resistance work”', isError: false,
          rationale: 'Defensible. Meta-analysed intervention data show tendon stiffness responding to high-strain loading over roughly this timescale, with the size of the strain mattering more than the volume. Note that the claim is about stiffness rather than cross-sectional area, which is the contested part.' },
        { id: 'apt502-u5-e9', text: '“Cannot squat below parallel without the pelvis tucking; six-week target set to achieve full depth”', isError: true,
          rationale: 'Assumes the limit is soft tissue on a soft-tissue timescale. Hip shape varies enough between individuals that available depth is partly skeletal, and a deadline to reach a borrowed standard commits her to loading the range where her lumbar spine takes over.' },
      ],
    },

    // 9 ── numeric lab (signature lab, quantitative half) ────────────────────
    {
      type: 'numericLab', id: 'apt502-u5-lab',
      title: 'Lab: what five centimetres of bar position is worth',
      brief:
        'Rosa weighs 68 kg and is holding the bottom of a back squat with 60 kg on the bar, still, at the bottom of a paused rep. Treat it as a static hold and take g as 9.81 m/s². Analyse from the ground up: the vertical ground reaction force acts along a load line through the mid-foot, and the external moment at a joint is that force times the perpendicular distance from the load line to the joint axis. At the bottom of the squat her hips have travelled backward and her knees forward, so on a side-on still the load line passes 14 cm in front of her hip axis and 9 cm behind her knee axis. Both external moments are therefore flexion moments, and both are met by extensors. Both legs together unless a field says otherwise. Ignore the mass of the foot, shank and thigh, which is small enough at this scale to leave the conclusion intact. Then she changes to a narrower, more upright, knees-forward setup: the hip distance falls to 9 cm in front of the hip axis and the knee distance rises to 15 cm behind the knee axis.',
      fields: [
        { id: 'apt502-u5-f1', label: 'External hip-flexion moment in the original position, which is the moment her hip extensors must match (both limbs)', unit: 'N·m', answer: 176, tolerance: 5 },
        { id: 'apt502-u5-f2', label: 'External knee-flexion moment in the original position, which is the moment her quadriceps must match (both limbs)', unit: 'N·m', answer: 113, tolerance: 5 },
        { id: 'apt502-u5-f3', label: 'External knee-flexion moment after the setup change (both limbs)', unit: 'N·m', answer: 188, tolerance: 6 },
        { id: 'apt502-u5-f4', label: 'Increase in knee extensor demand caused by the setup change', unit: '%', answer: 66.7, tolerance: 3 },
        { id: 'apt502-u5-f5', label: 'Patellar tendon force needed per limb in the new position, if the patellar tendon moment arm there is 4.5 cm', unit: 'N', answer: 2093, tolerance: 60 },
        { id: 'apt502-u5-f6', label: 'That per-limb patellar tendon force expressed as a multiple of her body weight', unit: '× body weight', answer: 3.1, tolerance: 0.15 },
      ],
      solution:
        'Start with the force. System mass is 68 + 60 = 128 kg, so system weight is 128 × 9.81 ≈ 1256 N. In a static hold the total vertical ground reaction force equals that weight and acts along the load line through the mid-foot.\n\n' +
        'External moment is force times the perpendicular distance from the force line to the joint axis. The line runs in front of her hip and behind her knee, so at both joints it is trying to fold her. At the hip: 1256 × 0.14 = 176 N·m of flexion. At the knee: 1256 × 0.09 = 113 N·m of flexion. Those are the moments her extensors, both legs together, have to match to hold her still. Note what that already tells you. In this position the squat is asking more of her hip extensors than her knee extensors, by about half again, and nothing on the equipment or in the exercise name says so.\n\n' +
        'Now the setup change, which looks to an onlooker like a small technique tweak. New knee moment: 1256 × 0.15 = 188 N·m. New hip moment: 1256 × 0.09 = 113 N·m. The knee demand rose from 113 to 188 N·m. That is a rise of 75 N·m, and 75 ÷ 113 = 0.667, or 66.7 per cent, the same ratio as 15 ÷ 9, since the force never changed. The hip demand fell by 36 per cent over the same instant. Five centimetres of position moved two thirds of a knee’s worth of demand onto her knee and took a third off her hip, at an identical bar weight.\n\n' +
        'Then the internal side. The muscles have to produce that moment through their own, much shorter moment arms. Per limb the new knee moment is 188 ÷ 2 = 94 N·m, and with a patellar tendon moment arm of 4.5 cm the required patellar tendon force is 94 ÷ 0.045 ≈ 2093 N. Her own body weight is 68 × 9.81 ≈ 667 N, so that is about 3.1 times body weight running through one patellar tendon, in a position she reached by changing her stance.\n\n' +
        'Five honest caveats, because the arithmetic is cleaner than the biology. This is a static snapshot, and a real repetition has acceleration in it, so dynamic peaks run higher. Segment masses were ignored, which is defensible at this load and would not be with a light bar. The internal moment arm is not a constant: it changes with joint angle and varies between people by tens of per cent, which is the anatomical variation from the last concept block turning up in a number. Quadriceps tendon force is a different quantity from the patellar tendon force you just calculated, because the patella acts as a variable pulley; near full extension the two are close, and at the deep bend of a paused bottom position the quadriceps tendon carries perhaps a fifth to two fifths more tension than the patellar tendon does. And neither is the contact force behind the kneecap, which is higher again and depends strongly on knee angle.\n\n' +
        'The point of the exercise is not the numbers. It is that a change no one would write in a training log, meaning where the bar sits, how far the shins travel and how upright she stands, moved the demand between joints by a third to two thirds while the number on the bar stayed identical. Which is why the question is never “what does this exercise work”, and always “where is the load line, and how far is it from each axis”.',
    },

    // 10 ── active-recall set ────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt502-u5-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'apt502-u5-r1', front: 'Define agonist, antagonist, synergist and stabiliser in one line each, and say what they have in common.',
          back: 'Agonist: produces the net joint moment the task demands. Antagonist: produces the opposing moment. Synergist: adds to the agonist’s moment or cancels an unwanted part of it. Stabiliser: fixes a segment so the agonist has something to pull against. What they share is that all four describe a job in a task, not a property of tissue.' },
        { id: 'apt502-u5-r2', front: 'What is a neutraliser, with an example?',
          back: 'A synergist that cancels an unwanted part of the agonist’s action. Pronator teres working through a reverse curl to cancel the biceps’ palm-up roll, so only the elbow bending survives. Or all four abdominal sheets acting together so the turning components cancel and flexion remains.' },
        { id: 'apt502-u5-r3', front: 'Why does an active antagonist cost more than “not helping”?',
          back: 'Net joint moment is agonist minus antagonist, so co-contraction subtracts from the moment available. It also raises joint compression and metabolic cost. It is still the right answer when the load is unpredictable: the nervous system is buying stability with economy.' },
        { id: 'apt502-u5-r4', front: 'What is wrong with “supraspinatus initiates the first 15° of abduction, then deltoid takes over”?',
          back: 'Both are active from the first degree and both contribute through the range. Someone who loses deltoid function can still raise the arm; someone who loses supraspinatus can still raise it with less force. There is no handover, and relay-race anatomy produces relay-race coaching.' },
        { id: 'apt502-u5-r5', front: 'Name what most trunk muscles actually do in a loaded task, versus what they are named for.',
          back: 'They resist rather than produce. Rectus abdominis resists extension rather than flexing anything. The obliques resist turning and side-bending. Transversus abdominis cannot bend or turn the trunk at all and contributes hoop tension. Quadratus lumborum is a side-to-side brake and part of the diaphragm’s base.' },
        { id: 'apt502-u5-r6', front: 'What does raising intra-abdominal pressure buy, and what does it cost?',
          back: 'It buys spinal stiffness. It costs compression, because the muscles generating the pressure also generate flexion moments. The old claim that intra-abdominal pressure unloads the spine has not survived modelling, which is why a maximal brace on everything is a poor default.' },
        { id: 'apt502-u5-r7', front: 'Where did the “deep core” story come from, and where has it landed?',
          back: 'Hodges and Richardson, 1996: delayed transversus abdominis onset in people with low back pain, in one laboratory task, in a small sample, with the direction of causation unknown. It has landed at motor control exercise working, probably beating minimal intervention, and showing no clear advantage over other exercise.' },
        { id: 'apt502-u5-r8', front: 'Name the three things that genuinely differ between open and closed chain.',
          back: 'Degrees of freedom: a fixed distal segment couples joint angles and creates compensation options. Load path: one ground reaction line serves every joint at once and can be traded between them, versus one resistance point at the free end of the limb, loading every joint back to the base with no second load path to trade into. Biarticular behaviour: two-joint muscles go near-isometric and stop obeying single-joint intuition.' },
        { id: 'apt502-u5-r9', front: 'Is open-chain knee extension “bad for the knee”?',
          back: 'Not as a blanket claim. Forward drag on the shin and ACL strain peak near full extension in open chain. Stress behind the kneecap is higher in open chain from about 0 to 45°, but higher in the leg press from about 60 to 90°. Naming the tissue and the joint angle is the whole answer, and post-reconstruction bans have not held up.' },
        { id: 'apt502-u5-r10', front: 'Which palpation findings should never be written down as measurements?',
          back: 'Vertebral levels taken off the intercristal line (anaesthetists get the marked gap right about 29% of the time, erring toward the head), pelvic landmark symmetry and palpated leg length (poor inter-rater reliability), and any claim to feel one deep abdominal sheet acting alone.' },
        { id: 'apt502-u5-r11', front: 'The four tissue clocks, fastest to slowest.',
          back: 'Muscle: size in 6 to 10 weeks, loss within a week of immobilisation. Tendon: stiffness over 8 to 12 weeks of high-strain loading, with a mature core that barely turns over at all. Bone: one remodelling cycle is a season, density change in 6 to 12 months, with an early dip. Cartilage: collagen essentially does not turn over in adulthood, so it is managed rather than built.' },
        { id: 'apt502-u5-r12', front: 'Why is a single movement standard an anatomical error, and what is the honest limit of that argument?',
          back: 'Because neck-shaft angle (roughly 115 to 140 degrees between healthy adults, averaging near 125), femoral anteversion, hip socket shape, tibial twist and segment proportions vary enough to change what a body can do and what shape it makes doing it. The limit: you cannot see any of that on a gym floor, and screening batteries predict injury poorly. So define the standard by outcome (joints moved, load taken, control kept) rather than by shape.' },
      ],
    },

    // 11 ── unit quiz ────────────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u5-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'apt502-u5-q1', kind: 'single', cognitive: 'recall',
          prompt: 'Which statement best describes a neutraliser?',
          options: [
            { id: 'a', text: 'A synergist that cancels an unwanted part of the agonist’s action', correct: true },
            { id: 'b', text: 'A muscle that holds a proximal segment still so the agonist has a base', correct: false, rationale: 'That is a stabiliser or fixator.' },
            { id: 'c', text: 'A muscle that relaxes completely so the agonist meets no resistance', correct: false, rationale: 'Relaxation is not a role, and a silent antagonist is not doing anything to the agonist’s action.' },
          ] },
        { id: 'apt502-u5-q2', kind: 'single', cognitive: 'recall',
          prompt: 'Which of these is the standard definition of a closed kinematic chain?',
          options: [
            { id: 'a', text: 'The distal segment is fixed against considerable external resistance', correct: true },
            { id: 'b', text: 'The movement occurs while bearing body weight through the legs', correct: false, rationale: 'A push-up is a closed chain with no leg involvement, and a standing cable curl is open while bearing weight.' },
            { id: 'c', text: 'Two or more joints move simultaneously', correct: false, rationale: 'A tennis serve moves many joints and is open. Multi-joint and closed-chain are unrelated properties.' },
          ] },
        { id: 'apt502-u5-q3', kind: 'single', cognitive: 'application',
          prompt: 'A client lowers under control from a single-leg box step-down over four seconds. In role terms, what is happening at the knee?',
          explanation: 'The muscle’s moment direction never changes; the joint’s direction of travel does. The taxonomy was built around concentric, gravity-neutral analysis and has to be patched to describe eccentric control.',
          options: [
            { id: 'a', text: 'Gravity supplies the motion, and the quadriceps produce a knee extension moment while lengthening, which the taxonomy handles awkwardly', correct: true },
            { id: 'b', text: 'The hamstrings are the agonist, since the knee is bending', correct: false, rationale: 'The hamstrings would speed the descent, not control it. Nothing has to pull the knee into flexion here, because gravity is already doing that.' },
            { id: 'c', text: 'The quadriceps have become the antagonist and are therefore working less than on the ascent', correct: false, rationale: 'They may be classed as opposing the direction of travel, but a controlled four-second descent is typically the harder half of the repetition, not the easier one.' },
          ] },
        { id: 'apt502-u5-q4', kind: 'single', cognitive: 'application',
          prompt: 'A client squatting the same load moves from an upright, hips-back position to a more upright torso with the knees travelling further forward. What happens to the external moments?',
          options: [
            { id: 'a', text: 'The knee moment rises and the hip moment falls, because the load line moved closer to the hip axis and further from the knee axis', correct: true, rationale: 'Force is unchanged. Only the perpendicular distances moved, and the two arms trade against each other.' },
            { id: 'b', text: 'Both rise, because the position is harder', correct: false, rationale: 'Nothing was added to the system. Position redistributes demand between joints; it does not create it out of nothing.' },
            { id: 'c', text: 'Neither changes, because the external load is identical', correct: false, rationale: 'Moment is force times distance. Identical force with different distances gives different moments.' },
          ] },
        { id: 'apt502-u5-q5', kind: 'multi', cognitive: 'analysis',
          prompt: 'Which of these genuinely differ between open- and closed-chain conditions? (Select all that apply.)',
          explanation: 'Degrees of freedom, load path and biarticular behaviour are mechanical consequences of fixing the distal segment. “More functional” is a slogan: swing phase, kicking and throwing are all open chain.',
          options: [
            { id: 'a', text: 'Whether joint angles are coupled, and therefore whether compensation is available', correct: true },
            { id: 'b', text: 'Whether one external force line serves every joint at once, so demand can be traded between them, or one resistance point loads the limb with no alternative load path', correct: true },
            { id: 'c', text: 'How biarticular muscles behave, since a fixed distal segment can leave them near-isometric', correct: true },
            { id: 'd', text: 'Whether the movement is functional, since closed-chain movements are the functional ones', correct: false, rationale: 'Function is a property of the goal. Kicking, throwing and the swing phase of gait are open chain and entirely functional.' },
          ] },
        { id: 'apt502-u5-q6', kind: 'single', cognitive: 'analysis',
          prompt: 'A colleague says he has removed all knee extensions from a post-surgical client’s program because “open chain loads the patellofemoral joint more”. What is the accurate correction?',
          explanation: 'Steinkamp and colleagues found the crossover: extension is more demanding at that joint near full extension, and the leg press is more demanding deeper in the bend.',
          options: [
            { id: 'a', text: 'It depends on the joint angle: open-chain extension produces higher patellofemoral stress from roughly 0 to 45°, while the leg press produces more from roughly 60 to 90°', correct: true },
            { id: 'b', text: 'He is right; closed chain is always kinder to the patellofemoral joint', correct: false, rationale: 'That inverts the deeper part of the range, which is where most closed-chain work lives.' },
            { id: 'c', text: 'Patellofemoral load is irrelevant; only ACL strain matters after knee surgery', correct: false, rationale: 'Different tissues, different angle dependencies, and anterior knee pain is one of the most common complaints in this population.' },
          ] },
        { id: 'apt502-u5-q7', kind: 'single', cognitive: 'analysis',
          prompt: 'A returning client, eight weeks back after a year off, is adding load quickly and reports new morning Achilles stiffness. What is the best anatomical explanation?',
          options: [
            { id: 'a', text: 'Muscle and tendon adapt on different clocks, so her force-producing capacity has outrun the tendon’s adaptation', correct: true, rationale: 'Muscle shows measurable change in 6 to 10 weeks and returns fastest after a layoff. Tendon stiffness responds over 8 to 12 weeks of high-strain loading, and its core barely turns over at all.' },
            { id: 'b', text: 'Her calves are tight and need more stretching', correct: false, rationale: 'A length explanation for a load-tolerance problem. Nothing about the story implicates range.' },
            { id: 'c', text: 'She has poor tendon genetics and should avoid loaded calf work', correct: false, rationale: 'Withdrawing load from a tendon reduces its capacity further. The problem is the rate of progression, not the presence of loading.' },
          ] },
        { id: 'apt502-u5-q8', kind: 'single', cognitive: 'analysis',
          prompt: 'Why is bone poorly served by simply adding sets to a program that already produces hypertrophy?',
          explanation: 'Frost’s mechanostat and the loading studies behind it: strain magnitude and rate drive the response, the response saturates after a few dozen cycles, and rest between bouts restores sensitivity.',
          options: [
            { id: 'a', text: 'Bone responds to strain magnitude, rate and novelty, and its response saturates after a few dozen cycles, so more repetitions of the same load add little', correct: true },
            { id: 'b', text: 'Bone cannot adapt to mechanical loading in adults', correct: false, rationale: 'It adapts throughout life. The remodelling cycle simply runs on a scale of months.' },
            { id: 'c', text: 'Bone only adapts to impact, so resistance training is irrelevant to it', correct: false, rationale: 'High-magnitude resistance loading is osteogenic. Impact is one route to a high rate of strain, not the only one.' },
          ] },
        { id: 'apt502-u5-q9', kind: 'single', cognitive: 'analysis',
          prompt: 'You palpate the top of a client’s iliac crests and record “tenderness at L4”. What is the problem with that note?',
          options: [
            { id: 'a', text: 'The intercristal line varies from the L3 to L4 gap down to L5 between people, and clinicians identifying a marked gap are correct less than a third of the time, so the level is an orientation rather than a measurement', correct: true },
            { id: 'b', text: 'Nothing, because the intercristal line is a reliable landmark for L4', correct: false, rationale: 'Widely taught and not supported by imaging. Errors also run in a systematic direction, usually toward the head.' },
            { id: 'c', text: 'The problem is only that trainers should not palpate spines at all', correct: false, rationale: 'Palpation to orient and communicate is legitimate within scope. Recording a spinal level as fact is the error, not touching the client.' },
          ] },
        { id: 'apt502-u5-q10', kind: 'single', cognitive: 'synthesis',
          prompt: 'Two clients cannot reach the same squat depth without lumbar flexion, and neither has pain. What is the most defensible professional position?',
          explanation: 'Variation is an argument for individualising the shape, not for abandoning standards. The standard moves from “this position” to “these outcomes”.',
          options: [
            { id: 'a', text: 'Set each client’s working depth by what she can control and repeat, define the standard by which joints must move and which tissues take the load, and accept that the shape will differ', correct: true },
            { id: 'b', text: 'Hold both to full depth, since depth is a universal marker of competent movement', correct: false, rationale: 'That is a claim about what every skeleton should be shaped like, and it commits both clients to loading the range where the lumbar spine takes over.' },
            { id: 'c', text: 'Refer both for imaging to identify the structural cause before programming anything', correct: false, rationale: 'Shape findings are common in people with no symptoms, imaging a pain-free hip mostly generates worry, and naming a structural cause is outside scope.' },
          ] },
      ],
    },

    // 12 ── teach-back (the signature oral practical) ────────────────────────
    {
      type: 'teachBack', id: 'apt502-u5-teach',
      title: 'Oral practical: map a movement to joints, muscles and loading demands',
      prompt:
        'This is the unit’s signature assessment and it is spoken, not written. An examiner names one movement and you have four minutes to map it aloud, with no notes: the joint motions and the positions they pass through, where the external load enters and what moment it creates at each joint, which muscles are placed to meet those moments and in which role, which tissues take the residual load, and what you would expect to limit the task first. Your movement: a forty-metre overhead carry with a 16 kg kettlebell locked out above the left shoulder, left arm only. The unit worked through a carry with the load hanging at the side, and this is deliberately not that movement, so the examiner is listening for what carries across and what does not. Speak it through as you would to an examiner: precise, anatomical, and willing to say where you are uncertain.',
      modelAnswer:
        'The task is upright walking with a load held above one shoulder, so like any carry it is a bracing problem rather than a prime-mover problem, and the frontal plane half of it transfers straight across from a carry at the side. The bell sits above the left shoulder with the arm close to vertical, so its line of gravity runs down through the left arm and shoulder and passes to the left of the lumbar spine, by roughly the distance from the midline out to the shoulder joint. That is a continuous left side-bending moment on the trunk for the whole forty metres, met by the muscles on the right: right quadratus lumborum, right external and internal oblique, right erector spinae, all working isometrically with no rest phase. Those are the same obliques an exercise chart files under rotation, and rectus abdominis is not flexing anything. Two things a carry at the side does not teach. Raising the load overhead does not by itself shorten that moment arm, because a hanging arm and a vertical arm put the load a similar distance from the midline. What it does change is the height of the whole system’s centre of mass, so a small lean moves the load much further sideways and the balance demand climbs.\n\n' +
        'The sagittal plane is where this position can go wrong, and it is the first thing I would watch. Holding the bell genuinely over the shoulder takes most of her available shoulder flexion and some thoracic extension. If she has not got that range, the arm settles forward of vertical, the load then sits in front of the trunk and applies a flexion moment to it, and the usual substitution is to lean back and extend the lumbar spine until the bell finishes over her base of support. That trade hands the work to the lumbar extensors and to the facet joints at the back of the spine instead of to the abdominal wall. If it shows up, the carry is telling me about her overhead range rather than about her trunk.\n\n' +
        'At the pelvis the demand alternates step by step, exactly as it does with the load at the side. In single-limb support the abductors of the stance hip, meaning gluteus medius and minimus with tensor fasciae latae, resist the pelvis dropping on the swing side. The load is on the left, so when the left foot is down the weight line is pulled toward that hip and left abductor demand falls relative to unloaded walking; when the right foot is down the same load is displaced away from the stance hip and right abductor demand rises. Worth saying why holding it overhead does not change this: what sets the moment at the hip is the horizontal distance from the load line to the hip axis, and raising a vertical force higher does not move that line sideways. The balance task changed, the frontal plane moment did not.\n\n' +
        'The shoulder is where this stops resembling a carry at the side, because the direction of the load reverses. Carried at the side, the humerus is being pulled away from its socket and the rotator cuff, the superior capsule and the coracohumeral ligament resist that pulling apart. Overhead, the load drives the head of the humerus into the socket instead, so the cuff is centring it under compression while the deltoid holds the position. For the arm to sit vertical the scapula must be held in upward rotation with some backward tilt, which is the force couple from earlier in the unit: serratus anterior with upper and lower trapezius, all isometric, and serratus anterior is usually the one that fades. Triceps holds the elbow straight, and the wrist is stacked under the bell by the wrist extensors and flexors working together, since the bell rests back on the forearm rather than hanging from the fingers. That is why grip, which ends a carry at the side, is not the limiter here.\n\n' +
        'Loading demands and limiters. What usually ends this carry is the overhead position itself: the arm drifts forward, the scapula loses upward rotation, and the lumbar spine starts making up the difference, which is where I would stop the set rather than where she first feels tired. The spine is under real compression from the load plus the co-contraction holding her upright, so nothing moving does not mean nothing loaded. Breathing competes with bracing here as in any carry, because the abdominal wall runs stiffness and forced breathing out with the same tissue, so the trunk contribution degrades at the far end of the distance rather than the near one. The tissues taking what muscle does not are the shoulder joint surfaces under compression, the lumbar facet joints if she leans back, and the foot managing the side-to-side balance with fibularis longus and brevis against rolling out and tibialis posterior on the other side.\n\n' +
        'Where I am uncertain. I cannot say how much of the trunk moment is met by active muscle rather than by passive fascia and the pressure inside the abdomen. If her arm will not reach vertical I cannot tell on a gym floor whether that is the shape of her shoulder joint, stiffness through the thoracic spine, or length in latissimus dorsi and pectoralis major, and I would not name one. I would put her on her back and look at the same overhead position with the balance and the lumbar substitution taken away, and program from what that shows. I would also expect her two sides to differ for reasons that belong to her own anatomy as much as to her training history.',
      rubric: [
        { id: 'apt502-u5-t1', text: 'Names the joint positions and the external load path first, and derives the moment at each region from where the load line sits, rather than starting from a list of muscles' },
        { id: 'apt502-u5-t2', text: 'Assigns muscles to roles for this task specifically, including at least one muscle described by what it resists rather than by the action it is named for' },
        { id: 'apt502-u5-t3', text: 'Handles the asymmetry correctly: the trunk side-benders opposite the load work continuously, while hip abductor demand alternates and differs between the loaded and unloaded stance limb' },
        { id: 'apt502-u5-t4', text: 'Identifies the tissues taking passive or residual load (the shoulder joint under compression rather than under distraction, spinal compression, the lumbar facet joints if she leans back, the foot) and names a plausible first limiter with its consequence for what the exercise trains' },
        { id: 'apt502-u5-t5', text: 'States at least one genuine uncertainty or contested point without hedging the whole answer, and does not invent precision that palpation or observation cannot deliver' },
        { id: 'apt502-u5-t6', text: 'Separates what transfers from a carry with the load at the side from what does not, in particular that the shoulder is now loaded in compression rather than being pulled apart, that grip is no longer the first limiter, and that raising the load changes the balance demand without changing the frontal-plane moment at the hip' },
      ],
    },

    // 13 ── cumulative review ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u5-cumulative', role: 'cumulative', title: 'Pulling it together',
      questions: [
        { id: 'apt502-u5-cu1', kind: 'single', cognitive: 'analysis',
          prompt: 'A supplier’s handout claims: “EMG study proves our activation band increases gluteus maximus recruitment by 34%, so it builds better glutes.” Combining evidence literacy with what you now know about roles, what is the central problem?',
          explanation: 'Two separate faults stack: a surrogate outcome standing in for the outcome anyone cares about, and a role claim made without reference to the moment the position actually demands.',
          options: [
            { id: 'a', text: 'Muscle activity in one position is a surrogate outcome rather than a training result, and higher activity is what you would expect anyway if the band added a side-to-side moment for the muscle to meet', correct: true },
            { id: 'b', text: 'EMG is not a valid measurement technique', correct: false, rationale: 'It is valid for what it measures. The error is treating an immediate activity signal as evidence of a long-term training outcome.' },
            { id: 'c', text: 'The problem is only that the sample size is not stated', correct: false, rationale: 'A larger sample would give you a more precise estimate of the wrong outcome.' },
          ] },
        { id: 'apt502-u5-cu2', kind: 'single', cognitive: 'analysis',
          prompt: 'A screening battery reports that clients scoring below a cut-off have roughly twice the injury risk, and a colleague wants to use the score to decide who may squat. What should you tell him?',
          explanation: 'A relative risk says nothing about how well a test classifies individuals. Systematic reviews with meta-analysis have found composite movement-screen scores predict injury poorly, and the anatomical argument runs the same way: a score cannot see bone shape.',
          options: [
            { id: 'a', text: 'A doubling of relative risk on a low base rate still leaves most low scorers uninjured and many high scorers injured, so the score is a poor basis for a permission decision', correct: true },
            { id: 'b', text: 'Twice the risk is a large effect, so the cut-off is a reasonable gate', correct: false, rationale: 'Relative risk without the absolute base rate tells you nothing about how many people the rule would misclassify.' },
            { id: 'c', text: 'Screens are worthless and should never be used at all', correct: false, rationale: 'Overcorrection. Observing movement is useful; treating a composite score as a decision rule is the error.' },
          ] },
        { id: 'apt502-u5-cu3', kind: 'single', cognitive: 'application',
          prompt: 'Drawing on tissue architecture from earlier in this course: a pennate muscle’s fibres attach obliquely to its tendon. Why does that matter when you are working out who can meet a joint moment?',
          options: [
            { id: 'a', text: 'Pennation packs more fibres into a given volume, raising force capacity, while the oblique angle means only part of each fibre’s force reaches the tendon, so architecture and moment arm both sit between a muscle and the moment it can produce', correct: true },
            { id: 'b', text: 'Pennate muscles cannot act as stabilisers', correct: false, rationale: 'Architecture does not assign roles. Roles come from the task.' },
            { id: 'c', text: 'Pennation means the muscle has no moment arm', correct: false, rationale: 'Pennation is the fibre-to-tendon angle inside the muscle. The moment arm is the tendon’s perpendicular distance from the joint axis. Two different quantities.' },
          ] },
        { id: 'apt502-u5-cu4', kind: 'single', cognitive: 'analysis',
          prompt: 'A trial of a “deep core activation” protocol for chronic low back pain reports significant improvement versus a waiting list. Your client asks whether she should switch her training to it. What is the honest answer?',
          explanation: 'This interleaves comparator reasoning from the evidence unit with the trunk-role material: beating a waiting list is not the question anyone needed answered, and the trials that used an active comparator found no clear advantage.',
          options: [
            { id: 'a', text: 'Beating a waiting list only shows it beats nothing. Against other exercise the evidence shows no clear advantage, so the choice can be made on what she will actually do', correct: true },
            { id: 'b', text: 'Yes, because a significant result against a control group is strong evidence for switching', correct: false, rationale: 'The comparator decides the question. Against no exercise, most exercise wins.' },
            { id: 'c', text: 'No, because the deep muscle theory has been disproven, so the protocol cannot work', correct: false, rationale: 'Overcorrection. The strong theoretical claim did not hold, and the exercise still works about as well as other exercise. Those are different statements.' },
          ] },
        { id: 'apt502-u5-cu5', kind: 'single', cognitive: 'synthesis',
          prompt: 'A client eight months post-ACL reconstruction, discharged from physiotherapy, still shows a large quadriceps deficit despite months of squatting. You are considering adding open-chain knee extension. What reasoning order reflects professional practice?',
          options: [
            { id: 'a', text: 'Confirm scope and contact the treating clinician, appraise the current evidence on open-chain work after reconstruction including its angle restrictions, then decide with the client, set the progression by tissue timescales, and document', correct: true, rationale: 'Scope and collaboration frame the decision, appraisal fills it in, tissue biology sets the rate, documentation closes it.' },
            { id: 'b', text: 'Add it straight away, because closed-chain redundancy is exactly why the deficit persists and the anatomy is unambiguous', correct: false, rationale: 'The anatomical reasoning is sound and does not by itself authorise the action. A graft at eight months is still remodelling, and the treating clinician has information you do not.' },
            { id: 'c', text: 'Avoid it permanently, because open chain after reconstruction is contraindicated', correct: false, rationale: 'An inherited rule that recent systematic reviews do not support. Repeating it costs the client the one tool that removes her compensation options.' },
          ] },
      ],
    },
  ],
};
