import type { Unit } from '../../../types/content';

export const unit02: Unit = {
  id: 'apt502-u2',
  code: 'APT 502.2',
  title: 'The Spine, Rib Cage, Pelvis and Trunk',
  summary:
    'How the shape of each spinal region decides where movement is available, what a disc really is and what a day does to it, how the rib cage and diaphragm serve breathing and stiffness at the same time, how the pelvis passes force between limbs and trunk, and what the trunk muscles are layer by layer: attachments, fibre directions and the nerves that supply them. Plus an honest account of pressure inside the abdomen, bracing, belts, and the rise and fall of “core stability”.',
  qc: {
    sources: [
      { citation: 'Bogduk N — Clinical Anatomy of the Lumbar Spine and Sacrum, 5th ed. Churchill Livingstone Elsevier', year: 2012, evidenceType: 'Textbook', verified: false },
      { citation: 'Neumann DA — Kinesiology of the Musculoskeletal System: Foundations for Rehabilitation, 3rd ed. Elsevier', year: 2017, evidenceType: 'Textbook', verified: false },
      { citation: 'Standring S (ed) — Gray’s Anatomy: The Anatomical Basis of Clinical Practice, 42nd ed. Elsevier', year: 2020, evidenceType: 'Textbook', verified: false },
      { citation: 'Macintosh JE, Bogduk N — The biomechanics of the lumbar multifidus. Clinical Biomechanics 1986;1(4):205–213', year: 1986, evidenceType: 'Anatomical and biomechanical study', verified: false },
      { citation: 'Bogduk N, Pearcy M, Hadfield G — Anatomy and biomechanics of psoas major. Clinical Biomechanics 1992;7(2):109–119', year: 1992, evidenceType: 'Anatomical and biomechanical study', verified: false },
      { citation: 'Sperstad JB, Tennfjord MK, Hilde G, Ellström-Engh M, Bø K — Diastasis recti abdominis during pregnancy and 12 months after childbirth: prevalence, risk factors and report of lumbopelvic pain. British Journal of Sports Medicine 2016;50(17):1092–1096', year: 2016, evidenceType: 'Prospective cohort study', verified: false },
      { citation: 'Wilke HJ, Neef P, Caimi M, Hoogland T, Claes LE — New in vivo measurements of pressures in the intervertebral disc in daily life. Spine 1999;24(8):755–762', year: 1999, evidenceType: 'In vivo measurement study', verified: false },
      { citation: 'Adams MA, Dolan P, Hutton WC — Diurnal variations in the stresses on the lumbar spine. Spine 1987;12(2):130–137', year: 1987, evidenceType: 'Experimental study', verified: false },
      { citation: 'Hodges PW, Eriksson AEM, Shirley D, Gandevia SC — Intra-abdominal pressure increases stiffness of the lumbar spine. Journal of Biomechanics 2005;38(9):1873–1880', year: 2005, evidenceType: 'Experimental study (animal model)', verified: false },
      { citation: 'Vleeming A, Schuenke MD, Masi AT, Carreiro JE, Danneels L, Willard FH — The sacroiliac joint: an overview of its anatomy, function and potential clinical implications. Journal of Anatomy 2012;221(6):537–567', year: 2012, evidenceType: 'Anatomical review', verified: false },
      { citation: 'Brinjikji W, Luetmer PH, Comstock B, et al. — Systematic literature review of imaging features of spinal degeneration in asymptomatic populations. AJNR American Journal of Neuroradiology 2015;36(4):811–816', year: 2015, evidenceType: 'Systematic review', verified: false },
      { citation: 'Saraceni N, Kent P, Ng L, Campbell A, Straker L, O’Sullivan P — To flex or not to flex? Is there a relationship between lumbar spine flexion during lifting and low back pain? A systematic review with meta-analysis. Journal of Orthopaedic & Sports Physical Therapy 2020;50(3):121–130', year: 2020, evidenceType: 'Systematic review with meta-analysis', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-08-03',
    reviewBy: '2027-08-03',
    controversies:
      'Several live disagreements sit inside this material. Whether repeated lumbar flexion under load injures discs in living people is genuinely contested. The cadaver work is real, but it uses end-range flexion, thousands of cycles and tissue with no muscular protection, while studies that follow living people have not shown a consistent link between lifting flexion and back pain. The mechanism of intra-abdominal pressure is still argued: whether it meaningfully unloads the spine, or mainly adds stiffness while the abdominal contraction that produces it brings its own flexion moment and compression. The “core stability” literature has moved a long way from the 1990s transversus abdominis timing model, and how much of that model survives is not settled. Sacroiliac joint motion is agreed to be small, but the clinical meaning of that motion and the validity of hands-on assessment are not. The classic lumbopelvic rhythm ratios printed in textbooks are averages over highly variable people and should not be treated as targets. Finally, the widely repeated claim that spinal curves multiply resistance to compression by the square of the number of curves plus one comes from a column-buckling analogy and has never been demonstrated in a human spine.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u2-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt502-u2-p1', kind: 'single', cognitive: 'recall',
          prompt: 'What is the main structural reason a lumbar segment gives you so little twist?',
          options: [
            { id: 'a', text: 'The facet surfaces sit close to the sagittal plane, so turning drives one bony process into the other within a couple of degrees', correct: true, rationale: 'The facet plane is the rail. A rail set front to back allows bending forward and back, and stops turning at bone.' },
            { id: 'b', text: 'The lumbar discs are too thin to allow rotation', correct: false, rationale: 'Lumbar discs are the tallest in the column. Disc height is not the limiter here.' },
            { id: 'c', text: 'The lumbar spine has no rotator muscles', correct: false, rationale: 'Rotators exist at every level. How much motion is available is set by joint shape, not by whether a muscle exists to produce it.' },
          ] },
        { id: 'apt502-u2-p2', kind: 'single', cognitive: 'application',
          prompt: 'A client braces hard, holds it, and then cannot finish a set of five front squats without going purple. What is the mechanical conflict?',
          options: [
            { id: 'a', text: 'A maximal brace needs the diaphragm held down against a tight abdominal wall, and that is incompatible with moving air', correct: true, rationale: 'The diaphragm cannot hold a maximal pressure ceiling and cycle air at the same time. A maximal brace is a held breath, and a held breath has a time limit.' },
            { id: 'b', text: 'His transversus abdominis is firing too late', correct: false, rationale: 'Onset timing is not what runs out mid-set. Breathing is.' },
            { id: 'c', text: 'He needs a wider belt', correct: false, rationale: 'A belt raises the pressure he can produce. It does not let him breathe while producing it.' },
          ] },
        { id: 'apt502-u2-p3', kind: 'single', cognitive: 'analysis',
          prompt: 'A new client brings an MRI report reading “L4-L5 disc degeneration with a small broad-based bulge”. She has no current pain. What does the report tell you?',
          options: [
            { id: 'a', text: 'Very little on its own. Findings like these are extremely common in people with no symptoms, and they get more common with age', correct: true, rationale: 'Pooled imaging of people with no symptoms shows disc degeneration in roughly a third of twenty-year-olds and nearly all eighty-year-olds, with bulges common at every age.' },
            { id: 'b', text: 'She has structural damage that explains any future back pain', correct: false, rationale: 'The finding pre-dates and outlives most episodes of pain. Treating it as an explanation is how you build a fearful client.' },
            { id: 'c', text: 'She should avoid all loaded hip hinging permanently', correct: false, rationale: 'Nothing in an imaging report licenses a permanent training ban, and de-loading a spine for life has costs of its own.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt502-u2-outcomes',
      outcomes: [
        { level: 'recall', text: 'Describe a vertebral motion segment, the intervertebral disc, the joints between rib and spine, the sacroiliac joint, and the muscular walls of the abdominal canister, including the attachments, fibre directions, actions and nerve supply of the abdominal wall, the deep back muscles, quadratus lumborum and psoas major.' },
        { level: 'application', text: 'Work out from facet angle, disc shape and rib attachment which motions a spinal region will supply, and choose loading and breathing strategies that match.' },
        { level: 'analysis', text: 'Explain pressure inside the abdomen as a stiffening mechanism, and separate what bracing, belts and “core stability” training are shown to do from what they are claimed to do.' },
        { level: 'synthesis', text: 'Build a defensible trunk-loading plan for a client who carries an imaging finding or a fear of bending, using the anatomy, the current evidence and the limits of your scope.' },
      ],
    },

    // 3 ── core instruction (six concept blocks, visuals interleaved) ────────
    {
      type: 'concept', id: 'apt502-u2-c1', heading: 'Where the movement actually is: regional design of the motion segment',
      body:
        '“Rotate through your T-spine, not your low back.” You have said it a thousand times. This time Danielle stops halfway through the cable chop and asks the fair question: how? Nobody can choose which vertebrae move. The cue survives because it is roughly true, and it is roughly true because of the shape of a few square centimetres of bone at the back of each segment. Once you know what that shape is doing, you stop selling the slogan and start setting up a position that makes the anatomy do the work for you.\n\n' +
        '## The rail at the back\n\n' +
        'Take one **motion segment**: two vertebrae with a disc between them at the front, and a pair of small joints at the back. Three joints, one working unit. Those back joints are the **facet joints**, and their formal name is the zygapophyseal joints. Each one is a small synovial joint with two flattish surfaces facing each other, and each pair is cut at a particular angle. Picture those surfaces as a rail. A movement that slides along the rail is available. A movement that would drive one surface into the other stops at bone. The disc at the front is the soft, giving part and will let a segment do a little of everything, so the rail at the back is what decides. Change the angle of the rail and you change what the segment is for, and that is exactly what happens as you travel up the column.\n\n' +
        '## Lumbar hinges, thorax turns\n\n' +
        'In the low back the facet surfaces sit close to the **sagittal plane**, the vertical plane that splits you into left and right. Bending forward and back slides along them, so the lumbar spine is a generous hinge, with most of its range in the bottom two segments at L4 to L5 and L5 to S1. Twisting is another story. Turn a lumbar segment and within about two degrees a bony process of the upper vertebra runs into the one below. The stop is bone on bone. Representative figures put the whole lumbar spine at roughly ten to thirteen degrees of rotation in one direction, and a good share of that sits at L5 to S1, where the surfaces face more forward. That orientation also resists the forward slide gravity imposes on the sloping top of the sacrum.\n\n' +
        'The thorax is built the other way round. Thoracic facets sit at roughly sixty degrees from horizontal and much closer to the **frontal plane**, the one that splits you into front and back, and that favours turning and side bending. Then the ribs arrive and complicate the picture in the most interesting way. A typical rib, ribs two through nine, meets the spine twice on each side. The head sits against half-facets on two neighbouring vertebral bodies and against the disc between them, and the tubercle sits against the transverse process of the vertebra below. Every thoracic level is tied into a ring. Cut the ribs and sternum away from a cadaver spine and thoracic stiffness drops a long way in every direction, so the ring is not decoration. The result is a region that both allows rotation and restrains it. Each segment gives around nine degrees near the top and tapers to two or three at the bottom, but there are twelve of them, and the regional total comes out at roughly three times what the whole lumbar spine will give you. That, and no special virtue, is why rotation gets coached to the thorax.\n\n' +
        '## Up in the neck\n\n' +
        'The top of the column changes the design twice. There is no disc between the skull and the first vertebra, or between the first and the second. Those two joints run on their articular surfaces alone. Nodding happens where the skull meets the atlas. Close to half of the rotation you get looking over your shoulder happens between the atlas and the axis, where the ring of C1 spins around a peg of bone rising from C2, before the rest of the neck contributes anything. Below that, small bony ridges called the **uncinate processes** rise from the sides of the mid-cervical bodies and work as guide rails. They check pure sideways sliding and steer side bending and rotation into each other, so a genuinely pure cervical side bend does not exist.\n\n' +
        '> Key idea: a region supplies the movements that slide along its facet surfaces, and refuses the ones that drive those surfaces together. Your cue does not decide that. The rail does.\n\n' +
        '## The curves, and one number to stop repeating\n\n' +
        'Facet angle tells you what each region does. The side view tells you why the regions sit where they do. Look at someone side on and the column is not a straight rod. The neck and the low back are hollow at the back, curving forward into the body, and each of those is a **lordosis**. The mid-back and the sacrum curve the opposite way, backwards, and each of those is a **kyphosis**. Two of the four are there before anyone ever stands up. A newborn is curved backwards along its whole length, the thoracic and sacral curves are what remains of that shape, and they are called the primary curves for that reason. The cervical lordosis appears in the first months as a baby lifts and holds its head, and the lumbar one develops with sitting, standing and walking, so those two are the secondary curves. Depth varies enormously between healthy people, and the pelvis section later in this unit explains why one person needs more lumbar curve than the next.\n\n' +
        'Now the number attached to those curves, because you will meet it and it does not survive inspection. The claim is that a curved spine resists ten times the compression a straight column would, written as resistance equal to the number of curves squared plus one: three mobile curves, three squared plus one, ten. It comes from an engineering formula for how a slender column buckles, carried across to the spine as an analogy, and it has never been measured in a human spine, living or dead. Stop repeating it, and say what the curves demonstrably do instead. They let the head sit over the pelvis and the trunk over the hips, so the line of gravity falls close to each region and quiet standing costs very little muscular work.\n\n' +
        'Two honest caveats before any of this reaches a gym floor. These numbers are averages from small cadaver and imaging samples with wide scatter, and facet angle varies between people and often between the left and right side of the same person. And the popular mobile-stable-mobile slogan is a caricature, even though it points the right way about where rotation lives. Lumbar segments do rotate, rotation is not the villain, and the loading pattern with the best mechanical case against it is end-range rotation combined with heavy compression, not rotation itself.',
    },
    {
      type: 'visual', id: 'apt502-u2-visual-facets',
      title: 'What each region can actually give you',
      diagramId: 'spine-facet-rails',
      caption: 'The facet plane in each region, drawn beside the rotation and the forward bend each region supplies, so you can see why the same cue lands differently at the neck, the mid-back and the low back.',
      callouts: [
        { id: 'apt502-u2-vf1', label: '1', text: 'The lumbar rail stands almost upright and lies front to back. Bending forward and back slides along it. Turning drives one bony process straight into the other, which is why a lumbar level runs out at about two degrees.' },
        { id: 'apt502-u2-vf2', label: '2', text: 'The thoracic rail is tipped closer to flat and faces more forward, so turning slides along it. The ribs then tie each level into a ring. Cadaver work shows thoracic stiffness drops a long way once the ribs and sternum are cut away, so the ring restrains rotation without abolishing it.' },
        { id: 'apt502-u2-vf3', label: '3', text: 'Compare the rotation bars before you coach a turn. The thorax gives a small amount at each of twelve levels, and the total comes out at roughly three times the whole lumbar region. About half of neck rotation happens between C1 and C2 alone, before any other level joins in.' },
        { id: 'apt502-u2-vf4', label: '4', text: 'The ranking flips for forward bending. The region that gives you the least rotation gives you the most flexion, most of it in the bottom two segments. Ask a region for the motion it is shaped to supply and you get it cheaply. Ask for the other one and what you get is end-range loading.' },
      ],
    },
    {
      type: 'concept', id: 'apt502-u2-c2', heading: 'The disc is a pressurised bag, and a day changes it',
      body:
        'Your 6:10 client, Rachel, tells you the same thing most weeks. The first half hour is stiff, and by her third set she feels fine. You have Romanian deadlifts programmed as her opener. Whether that matters is a question about a structure most people picture wrongly, so start with what a disc actually is.\n\n' +
        '## Inside the disc\n\n' +
        'At the centre sits the **nucleus pulposus**, a gel loaded with aggrecan. Aggrecan is a large molecule carrying a dense fixed negative charge, and that charge pulls water in and holds it there. The water is what lets the nucleus behave like a fluid under load. Around it, the **annulus fibrosus** is built from something like fifteen to twenty-five collagen rings stacked inside one another. The fibres in each ring run at roughly thirty degrees to the horizontal, and each ring angles the opposite way to its neighbour. That crossed pattern has a consequence worth holding onto: for any one direction of twist, only about half the rings are angled to take the tension. Twisting is the load the annulus handles worst, which is one more reason the lumbar facets are built to stop it. Top and bottom, thin plates of cartilage called the **endplates** seal the disc against the vertebral bodies. In an adult the disc has essentially no blood supply of its own. Nutrients seep in through those endplates, slowly, which is why disc tissue heals badly and why damage to an endplate matters more than its size suggests.\n\n' +
        '## Pressure through an ordinary day\n\n' +
        'Load a healthy disc and the nucleus pressurises and pushes outward in every direction at once. The annulus takes that as tension around its circumference, the way hoops hold a barrel together, and the endplates take it as a push up and a push down. This is what people mean by calling the disc **hydrostatic**: it turns a vertical load into a pressure field, and the pressure spreads that load across the whole endplate instead of concentrating it in one place.\n\n' +
        'Wilke and colleagues put a pressure sensor inside a living volunteer’s L4 to L5 disc and walked him through an ordinary day. Lying down came in around 0.1 megapascals. Relaxed standing about 0.5. Relaxed sitting landed close to standing rather than far above it, which is not the dramatic penalty the older Nachemson chart taught a generation of therapists, while slumping into full flexion pushed it well up. Lifting a twenty-kilogram box with a rounded back read about 2.3 megapascals, and the same box with bent knees and a straighter back read about 1.7. Read those numbers as an ordering, not a verdict. Load and trunk position both move disc pressure, and the gap between two lifting styles is real but much smaller than the gap between lifting nothing and lifting something.\n\n' +
        'Now back to Rachel. A disc held under load leaks fluid out through the endplates and slowly loses height. That is **creep**, the same viscoelastic behaviour you met in the tissue mechanics unit. Across a waking day you lose somewhere between one and a half and two centimetres of height, most of it in the first few hours upright, and you get it back lying down overnight. So the disc she wakes up with is swollen, taller and stiffer than the one she will have at lunchtime. Adams, Dolan and Hutton measured what that costs. Early in the morning the lumbar spine bends a few degrees further into flexion, and bending stresses on the disc run several times higher than they do later in the day. That is a real mechanical fact with a modest practical use. It does not make early training dangerous. It means that if you are going to load spinal flexion near the end of its range, and heavy Romanian deadlifts qualify, the first hour out of bed is the least favourable window. A general warm-up and two or three genuine build-up sets buy some of that margin back cheaply.\n\n' +
        '## Where a herniation really comes from\n\n' +
        'One correction changes how you speak to clients, so make it carefully. The disc is bonded to the endplates above and below it, so there is nothing there to slip. A herniation is a failure of the annulus that lets material from the nucleus displace, and it is usually the end of a long process rather than the result of one bend.\n\n' +
        '> Key idea: discs do not slip. Nothing about the structure allows it, so retire the word with clients and describe what actually fails.\n\n' +
        'How long that process is, and what drives it, is not what most people assume. The Twin Spine Study compared identical twins whose lifetime physical loading differed sharply. Heredity explained most of the variation in lumbar disc degeneration, and occupational loading explained surprisingly little. Degeneration is also not a disease you can read off a scan. Brinjikji and colleagues pooled imaging of people with no back pain at all, and found disc degeneration in thirty-seven percent of twenty-year-olds and ninety-six percent of eighty-year-olds, with bulges in thirty percent of those twenty-year-olds. When a client hands you a report describing degeneration and a small bulge, you are usually looking at an age-appropriate finding rather than an explanation.',
    },
    {
      type: 'visual', id: 'apt502-u2-visual-disc',
      title: 'The disc, and what a day does to it',
      diagramId: 'spine-disc-day',
      caption: 'A cut through a disc, the pressures measured inside a living L4 to L5 disc during ordinary tasks, and the height a disc loses across a waking day and gets back overnight.',
      callouts: [
        { id: 'apt502-u2-vd1', label: '1', text: 'Each collagen ring angles the opposite way to its neighbour. That is excellent for hoop tension, which is why the disc handles being squashed so well, and poor for twist, because only about half the rings are angled to take any one direction of it.' },
        { id: 'apt502-u2-vd2', label: '2', text: 'The endplates are the doorway. An adult disc has essentially no blood supply, so nutrients seep in through these thin cartilage plates. That is why the tissue heals badly, and why damage to an endplate matters more than its size suggests.' },
        { id: 'apt502-u2-vd3', label: '3', text: 'Read the bars as an ordering, not a verdict. Sitting relaxed lands close to standing, not far above it. Rounding the back on a twenty-kilogram lift raises the pressure by roughly a third compared with bent knees and a straighter back, while picking the box up at all is what moved the number most.' },
        { id: 'apt502-u2-vd4', label: '4', text: 'Height drops fast in the first hours upright and returns overnight. In that first hour the disc is swollen and stiffer, the spine bends a few degrees further into flexion, and bending stresses run several times higher. Treat that as a scheduling preference for heavy end-range work, not as a safety rule.' },
      ],
    },
    {
      type: 'concept', id: 'apt502-u2-c3', heading: 'The rib cage breathes and braces at the same time',
      body:
        'Sam has a good brace. You can see it: ribs down, trunk full, nothing collapsing on the way out of the hole. The problem is that he has exactly one of them per set. By the third rep his face has gone the colour of a beetroot and the last two reps are held together by optimism. He is not weak. He is running a pressure system and a breathing system through the same muscle at the same time, and nobody has ever explained to him that the two jobs compete.\n\n' +
        '## The container is a ring of joints\n\n' +
        'Twelve pairs of ribs, each meeting the spine twice on each side. The head of a typical rib, ribs two through nine, sits against half-facets on two neighbouring vertebral bodies and against the disc between them, while the tubercle meets the transverse process of the vertebra below. Ribs one, ten, eleven and twelve meet a single body, and eleven and twelve have no joint with a transverse process at all, which is why they are called floating. At the front, the costal cartilages of ribs one to seven reach the sternum directly, while eight to ten join the cartilage above them. That double attachment at the back means a rib cannot move unless the thoracic segment permits it, and a thoracic segment cannot move without shifting a dozen rib joints. Breathing and spinal movement are not neighbouring topics here. They are the same joints.\n\n' +
        '## Pump handle and bucket handle\n\n' +
        'The axis those joints define changes as you go down, and that changes what breathing looks like. Up top the axis lies closer to the frontal plane, so the ribs rise and the sternum swings forward. That is **pump-handle** motion, and it increases the depth of the chest from front to back. Lower down the axis turns towards the sagittal plane and the body of the rib swings outward instead. That is **bucket-handle** motion, and it increases the width of the chest from side to side. Both happen in any real breath, and what changes is the proportion. A client whose lower ribs never move sideways is not breathing badly for cosmetic reasons. She is asking the upper chest to do the whole job, and the upper chest has the least volume to give.\n\n' +
        '## The diaphragm has two jobs\n\n' +
        'The engine is the diaphragm, and its shape explains why it holds posture as well as moving air. It is a dome of muscle radiating into a central tendon. Its costal fibres attach to the inner surfaces of the lower six ribs and their cartilages, and two tendinous legs called the **crura** run down onto the front of the upper lumbar vertebral bodies, the right one reaching about L3 and the left a level higher. Its nerve is the phrenic nerve, from C3 to C5. When it contracts, the dome descends and squeezes the abdominal contents. When those contents resist, they become a fulcrum, and the same contraction now lifts and flares the lower ribs. The strip of diaphragm lying flat against the inside of the rib cage is what gives it the purchase to do that. Anatomists call that strip the **zone of apposition**, and it shrinks if the rib cage is held permanently lifted. Hodges and Gandevia also showed the diaphragm contracting ahead of a fast arm movement, steadily rather than rhythmically, which means it is adding trunk stiffness on a schedule that has nothing to do with the breath.\n\n' +
        '> Key idea: a maximal brace is a held breath, and a held breath has a clock on it. Plan the bracing and the breathing together, or the set ends before the muscles do.\n\n' +
        'Which brings us back to Sam. Raising pressure inside the abdomen needs the diaphragm held down against a tight abdominal wall. Breathing needs the diaphragm to cycle. Neither runs at full amplitude while the other does. The practical answer is to match the breathing strategy to the demand instead of teaching one universal brace. Reset between reps on heavy singles and doubles. On longer sets, accept a lower ceiling of pressure and take a short partial breath at the least demanding point in the lift. On a genuinely maximal effort, one breath per rep is not a technique flaw. And retire the cue “breathe into your belly”, which names an outcome and attaches the wrong mechanism to it. No air goes below the diaphragm. The belly moves because the dome descends and the organs have to go somewhere. Clients follow a mechanism better than they follow a metaphor, and this one they can feel in thirty seconds with a hand on the lower ribs.',
    },
    {
      type: 'concept', id: 'apt502-u2-c4', heading: 'The pelvis as the transfer station',
      body:
        'Her right sacroiliac joint “goes out” about once a month, Farida says, and her practitioner puts it back in. She is 34. She has believed this for three years and she wants to know what she should stop doing. This is one of the places where accurate anatomy is the kindest thing you can offer, because the story she has been handed is far more fragile than her pelvis is.\n\n' +
        '## A joint built not to move much\n\n' +
        'Each half of the pelvis is a single bone in an adult, with ilium, ischium and pubis fused through the hip socket. The two halves meet at the pubic symphysis in front and at the sacrum behind. The **sacroiliac joint** is odd in a way that matters. Its lower front portion is a true synovial joint between two ear-shaped surfaces. Behind and above it sits a mass of ligament so dense that the joint is effectively fibrous there, and that interosseous ligament is among the strongest in the body. The joint surfaces are not smooth either. They carry ridges and hollows that deepen through adult life, and they interlock. The motion available is **nutation** and counternutation, the sacrum nodding forward and back between the two ilia, and it is small. Studies tracking implanted metal beads to fractions of a millimetre put it at roughly two degrees of rotation and one to two millimetres of sliding. Nothing in those numbers supports a joint that goes out and gets put back, and the hands-on tests used to find a positional fault have failed reliability studies over and over: two experienced clinicians examining the same pelvis frequently disagree.\n\n' +
        '## Form closure and force closure\n\n' +
        'What the joint does do is pass force between the legs and the trunk, and Vleeming and colleagues gave us the two words that make it teachable. **Form closure** is geometry: a wedge-shaped sacrum driven down between two ilia, ridged surfaces resisting shear by shape alone. **Force closure** is everything added on top, the compression squeezed across the joint by structures crossing it. Nutation is part of that, because as the sacrum nods forward it pulls the sacrotuberous and interosseous ligaments tight, so the joint stiffens under exactly the load that would otherwise shift it. The muscular contributions run in slings: gluteus maximus on one side working with latissimus dorsi on the other through the back layer of the **thoracolumbar fascia**, the broad sheet of connective tissue that covers the low back from the spine out to the hips and gives both of those muscles something to pull against; biceps femoris pulling through its attachment to the sacrotuberous ligament; transversus abdominis and internal oblique tightening that same sheet from the front.\n\n' +
        '> Key idea: force closure is the trainable half. You build it by loading hips and trunk together, with carries, split-stance work, hinging and single-leg loading, and not by chasing an alignment.\n\n' +
        '## The bend, and the shape she was born with\n\n' +
        'Seen from the side, the pelvis is the hinge between two very different structures, and the coordination between them is what people mean by **lumbopelvic rhythm**. Watch someone reach for a bar on the floor. Early in the bend the motion is mostly lumbar flexion. As it continues, the pelvis rotates forward over the femoral heads and takes a growing share, until the hip is doing most of the work and the lumbar spine sits near the end of its range. That sequence is reliable. The tidy ratios attached to it are not. When Esola and colleagues measured it, the spread between people was large, and the pattern shifts with hamstring length, load, speed and even the words you use to instruct. Treat the rhythm as something you observe in one person on one day, not as a number you are trying to reproduce.\n\n' +
        'The pelvis also sets how much lumbar curve a person is supposed to have, and this is where a lot of postural coaching goes wrong. **Pelvic incidence** is the angle between a line joining the hip joint axis to the middle of the top of the sacrum, and the perpendicular to that sacral surface. It is a fixed property of an individual skeleton. It does not change with posture or training, and it constrains how the sacrum tilts and therefore the lordosis, the inward curve of the low back, that lets that person stand economically. Two clients with very different incidences will look different from the side, and both of them are right. The clinical evidence points the same way from another direction. Systematic reviews comparing lumbopelvic posture in people with and without low back pain find small, inconsistent differences, and the older claim that anterior pelvic tilt or a deep lordosis predicts back pain has not held up. What does show up is that people in pain move more slowly and use less of their available range, which reads at least as easily as a consequence of pain as it does as a cause of it.\n\n' +
        'So what do you tell Farida? That her sacroiliac joint is one of the most heavily reinforced joints she owns. That it moves a couple of degrees and does not dislocate and relocate itself monthly. That the sensation she feels is real even though the explanation she was handed is not. And that the training answer is to build compression and tolerance across that joint through loaded hip and trunk work, then progress it, rather than keep protecting a joint from the job it was built for.',
    },
    {
      type: 'concept', id: 'apt502-u2-c5', heading: 'The walls themselves: the trunk musculature, layer by layer',
      body:
        'Priya is eleven months post-partum, back in the gym four days a week, and she wants you to look at something before you start. She lies down, lifts her head off the floor, and shows you a soft trough running up the midline of her abdomen, about two fingers wide. Her question is blunt: have her abdominal muscles split? The answer is no, and giving that answer well takes about ninety seconds of real anatomy. That is a good reason to stop treating the trunk as a metaphorical canister and name what the walls are made of. You have been coaching these muscles for years. At this level you need to be able to say where each one attaches, which way its fibres run, what that lets it do, and which nerve supplies it.\n\n' +
        '## Three sheets, three fibre directions\n\n' +
        'The side wall is three sheets stacked like plywood, each running its fibres a different way. Outermost is **external oblique**, coming off the outer surfaces of the lower eight ribs, the fifth to the twelfth, where it interlocks with serratus anterior above and latissimus dorsi behind. Its fibres run down and forward, the direction your hands take sliding into your front pockets, and they end on the front half of the iliac crest and, across most of the muscle, in a broad sheet of tendon reaching the midline. The lower border of that sheet rolls under on itself to form the inguinal ligament. Beneath it, **internal oblique** runs the other way, up and forward, from the thoracolumbar fascia, the front two-thirds of the iliac crest and the outer part of the inguinal ligament, to the lower borders of ribs ten to twelve, the midline and the pubis. Because the two sets of fibres cross, they do different things with the same contraction. Fire external oblique on one side and the trunk side-bends towards that side but turns away from it, while internal oblique on a side both side-bends and turns towards it. So the pair that actually turns a trunk is one side’s external oblique working with the other side’s internal oblique. It is a crossed arrangement doing for the waist roughly what the alternating rings do for the annulus.\n\n' +
        'Deepest of the three is **transversus abdominis**, its fibres running horizontally around the waist from the inner surfaces of the lower six costal cartilages, the thoracolumbar fascia, the iliac crest and the outer third of the inguinal ligament, forward into the midline. Horizontal fibres cannot bend, extend or turn anything. What they can do is narrow the waist and pull the thoracolumbar fascia tight, a contribution to pressure rather than to movement, which is precisely how this muscle ended up at the centre of the story in the next section.\n\n' +
        '## Down the front, and what Priya is showing you\n\n' +
        '**Rectus abdominis** runs vertically from the pubic crest and symphysis up to the xiphoid process and the fifth to seventh costal cartilages, interrupted by three or so tendinous intersections fused to the front of its sheath, which is why a lean abdomen shows blocks rather than one long strap. It bends the trunk forward, tilts the pelvis backwards when the rib cage is the fixed end, and raises pressure alongside everything else. Its sheath is built entirely out of the tendon sheets of the other three muscles, and the way they wrap changes partway down. Above roughly the midpoint between navel and pubis, external oblique passes in front of rectus, internal oblique splits to pass both in front and behind, and transversus abdominis passes behind, so the muscle has a front wall and a back wall. Below that level, which is called the **arcuate line**, all three pass in front, leaving only thin fascia and the lining of the abdomen behind the muscle. Wherever these sheets meet in the midline they interweave as the **linea alba**, and that is the structure Priya is showing you.\n\n' +
        '> Key idea: a diastasis is a widened, thinned midline seam, not a torn muscle. The two halves of rectus abdominis have moved apart; nothing has split.\n\n' +
        'It is close to universal in late pregnancy and still measurable in something like a third of women a year after birth. When Sperstad and colleagues followed a large group of women through that year, the ones with a diastasis were not reporting more lumbopelvic pain than the ones without. Say that plainly, keep loading her, progress what she tolerates, and refer to a pelvic health physiotherapist for anything touching continence or prolapse, because that decision is not yours to make.\n\n' +
        '## The nerves nobody teaches\n\n' +
        'This is the part almost no trainer is taught, and it quietly settles a lot of arguments. The whole front and side wall, all four muscles, is supplied segment by segment from the front branches of the lower thoracic nerves. The intercostal nerves of spaces seven to eleven carry on past the costal margin into the wall as the thoracoabdominal nerves, T7 to T11. T12 continues as the subcostal nerve. Internal oblique and transversus abdominis take an extra supply from the iliohypogastric and ilioinguinal nerves, both from L1. Those nerves travel in the plane between internal oblique and transversus abdominis and enter the muscles strip by strip, which is the anatomical reason the wall is not one unit that switches on or off. It is a series of bands, each with its own nerve supply, and the skin territory that comes with them is worth carrying as a landmark: the skin at the navel is T10. The next time someone tells you a client “can’t switch her core on”, you have a fair question to ask back. Which of eight or nine segmental supplies do they mean?\n\n' +
        '## The back wall: the extensors\n\n' +
        '**Erector spinae** rises from a broad common tendon on the sacrum, the back of the iliac crest, the sacroiliac and sacrotuberous ligaments and the lower lumbar spinous processes, then splits into three columns as it climbs. Iliocostalis runs laterally to the angles of the ribs. Longissimus runs in the middle to transverse processes and ribs, and carries on into the neck as far as the mastoid process. Spinalis runs closest to the midline between spinous processes and is the smallest and least consistent of the three. Both sides together extend the spine, one side alone side-bends it, and in most real lifting they behave less like an engine producing a movement than like guy-ropes paying one out.\n\nDeep to them, filling the trough beside the lumbar spinous processes, lies **multifidus**. Its fascicles run from small bumps on the vertebrae, the sacrum and the back of the ilium, upward and inward to a spinous process two to five levels above, so fascicles from several levels converge on the same spinous process. All of these deep back muscles are supplied by the back branches of the spinal nerves, the branch nobody talks about, because the front branches form every limb plexus and take all the attention. Lumbar multifidus then has a property no other back muscle shares. Every fascicle attaching to a given spinous process is supplied by one nerve, the one leaving below that vertebra. Its supply is unisegmental. That is why multifidus became a window onto segmental nerve function in the first place, and why the atrophy findings that fuelled a decade of “switch on your multifidus” cueing looked as interesting as they did.\n\n' +
        '## The back wall: two muscles everyone gets wrong\n\n' +
        'Two more muscles finish the wall, and both are described wrongly more often than they are described correctly. **Quadratus lumborum** spans from the iliac crest and iliolumbar ligament up to the twelfth rib and the transverse processes of L1 to L4, supplied from T12 to L4. It side-bends the lumbar spine and hitches the hip, and it holds the twelfth rib down while the diaphragm pulls upward on the lower ribs, which makes it a silent partner in every breath you take.\n\n**Psoas major** attracts more nonsense than any other muscle in the body. It arises from the transverse processes of L1 to L5 and from the bodies and discs of T12 through L5, runs down over the pelvic brim, joins iliacus and inserts on the lesser trochanter of the femur. Its supply is L1 to L3. Its line of pull runs close to the lumbar spine and nearly parallel with it, so its leverage on those segments is tiny, and Bogduk, Pearcy and Hadfield’s analysis found exactly what that geometry predicts.\n\nPsoas is a powerful hip flexor that loads the lower lumbar segments in compression and forward shear, most heavily at L5 to S1, while producing almost no bending moment there. It does not create lordosis, it does not haul the lumbar spine forward, and stretching it will not change anyone’s pelvic tilt. What it does is compress and shear the bottom of the column every time the hip flexes hard against resistance, which is worth knowing before you programme a long set of hanging leg raises for someone whose back is already irritable.',
    },
    {
      type: 'visual', id: 'apt502-u2-visual-wall',
      title: 'The abdominal wall, read by fibre direction',
      diagramId: 'spine-abdominal-wall',
      caption: 'The four muscles of the front and side wall drawn by the direction their fibres run, with the pair that turns the trunk, the point where the rectus sheath changes, and what a diastasis actually looks like.',
      callouts: [
        { id: 'apt502-u2-vw1', label: '1', text: 'Fibre direction tells you what a sheet can do. External oblique runs down and toward the midline, internal oblique runs up and toward the midline, and the two lie directly on top of one another running opposite ways.' },
        { id: 'apt502-u2-vw2', label: '2', text: 'Transversus abdominis runs horizontally, right around the waist. Horizontal fibres cannot bend, extend or turn anything. They narrow the waist and tighten the thoracolumbar fascia, which is a contribution to pressure and not to movement.' },
        { id: 'apt502-u2-vw3', label: '3', text: 'Because the two oblique sheets cross, the pair that turns the trunk sits on opposite sides of the body: one side’s external oblique with the other side’s internal oblique. It is the same crossed logic as the alternating rings of the annulus.' },
        { id: 'apt502-u2-vw4', label: '4', text: 'The rectus sheath is made from the tendon sheets of the other three muscles, and it changes partway down. Above the arcuate line rectus has a front wall and a back wall. Below it, all three sheets pass in front. Where those sheets interweave in the midline is the linea alba, and a diastasis is that seam widened and thinned rather than a muscle torn.' },
      ],
    },
    {
      type: 'concept', id: 'apt502-u2-c6', heading: 'Pressure, bracing, belts, and what happened to core stability',
      body:
        'A new client, Nadia, tells you in her first session that her previous trainer said she “can’t switch on her transversus.” She has been doing ten minutes of lying **abdominal hollowing** before every workout for a year, pulling her navel in towards her spine and holding it there, and she now believes her back is a liability. You are about to give her a much better year, and it starts with getting the mechanism right rather than swapping one exercise for another.\n\n' +
        '## What the pressure actually does\n\n' +
        'The trunk works as a closed container. The diaphragm is the roof. The pelvic floor, levator ani and coccygeus, is the base. Transversus abdominis and the obliques wrap the walls and tie into the thoracolumbar fascia at the side, while multifidus, erector spinae and that same fascia close the back. Tighten those surfaces against a closed throat and the pressure inside rises. What the pressure then does has been argued about for sixty years. The old account was that pressure pushing up on the diaphragm and down on the pelvic floor creates an extension moment that unloads the spine. The standing objection is that squeezing the abdominal wall hard enough to produce that pressure also produces a trunk flexion moment and compression of its own, which eats much of the benefit. The account that has held up better is about stiffness rather than unloading, and the cleanest evidence for it is an animal experiment. Hodges and colleagues raised **intra-abdominal pressure** by stimulating the phrenic nerves, so the diaphragm contracted with no abdominal wall activity at all, and the lumbar spine still became measurably stiffer. A pressurised container with tight walls resists being bent. That is what **bracing** buys you: a segment that moves less for a given disturbance. Real, useful, and not mystical.\n\n' +
        '## What happened to core stability\n\n' +
        'Nadia’s year of hollowing traces back to one paper. In 1996 Hodges and Richardson reported that in people with low back pain, transversus abdominis switched on later than it should relative to a fast arm movement. It was a good finding and it launched an industry: draw the navel in, isolate the deep wall, restore the timing, protect the spine. What has happened since is a case study in how a mechanism can be real and still not be the lever anyone thought it was. Panjabi’s neutral-zone model was always about a system rather than one muscle. Cholewicki’s modelling found no single trunk muscle contributed more than about a third of lumbar stability, and the contributions shifted task by task, because the system is redundant by design. Grenier and McGill found that bracing the whole wall produced a higher stability index than hollowing. Most decisively, when Mannion and colleagues, and separately Vasseljen and colleagues, tracked symptoms and deep abdominal muscle behaviour together through stabilisation training, patients improved without the muscle timing normalising. The Cochrane review of **motor control exercise**, which is the whole family of programmes built on that model, and the meta-analyses beside it land in the same place. It works, and it works about as well as other forms of active exercise, which is not what a specific-mechanism story predicts.\n\n' +
        '> Key idea: bracing is a dial, not a switch. Light continuous tension for carrying and walking, hard and brief for a maximal effort, and never a permanently held drawing-in, which costs breathing and buys nothing.\n\n' +
        '## What a belt does and does not do\n\n' +
        'Belts sit inside the same picture once you stop expecting magic from them. A belt gives the abdominal wall something to push against, and lifters wearing one generate higher pressure inside the abdomen. That has been measured repeatedly since Harman’s work in the late eighties. More pressure means more stiffness, and in practice a belt tends to let people move a little more load, or move it a little faster. What a belt does not do is prevent injury in the general case. The largest prospective test of the idea followed employees across 160 US retail stores for two years and found no reduction in back injury claims or in reported back pain among belt wearers, and occupational bodies stopped recommending them for uninjured workers on that evidence. The opposite claim, that belts weaken your core, rests on almost nothing: trunk muscle activity is generally held or slightly raised in a belt, not reduced. Treat it as performance equipment with a dose. Worn for top sets it helps. Worn for everything, it quietly removes the practice of generating pressure unaided.\n\n' +
        '## The fear of bending\n\n' +
        'Which leaves the belief that generates the most fear on gym floors: that lumbar flexion under load is the thing that breaks backs. Its parent is real. Cadaver motion segments taken repeatedly to full flexion under high compression can be made to herniate, and the combination of bending, twisting and heavy load does show up in workplace injury data. But look at what those experiments involve. End-range flexion, thousands of cycles, dead tissue with no muscular protection and no capacity to adapt. Then look at living people. Saraceni and colleagues asked directly, in a systematic review with meta-analysis, whether more lumbar flexion during lifting is associated with low back pain, and found no consistent evidence that it is. Several of the included studies pointed the other way. Cochrane’s review of manual-handling technique training in workers found that teaching people to lift differently does not prevent back pain. And flexion is, after all, the movement the lumbar spine is best built for. Here is the honest position. Total load, exposure, fatigue, and the gap between what the tissue is used to and what you just asked of it explain far more than the shape of the spine at the moment of the lift. A rounding back under a maximal deadlift is a reason to look at load and technique, because it costs mechanical efficiency and shifts the demand, not because a disc is about to burst. Building some tolerance for loaded flexion is defensible for people whose sport or job asks for it. Do not oversell that either, because the evidence that deliberately training flexion prevents anything does not exist yet.',
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u2-visual',
      title: 'The trunk as a pressure canister',
      diagramId: 'trunk-canister',
      caption: 'The abdominal canister with its four walls, drawn beside the spinal curves and the junction of hip, pelvis and spine, so you can see pressure, regional motion and force transfer as one system rather than three topics.',
      callouts: [
        { id: 'apt502-u2-v1', label: '1', text: 'The container only holds pressure if every surface holds. A pelvic floor that lets go, or a diaphragm that has to keep breathing, drops the ceiling on how much pressure the trunk can make. That is why bracing and breathing have to be planned together rather than separately.' },
        { id: 'apt502-u2-v2', label: '2', text: 'Pressure pushes outward on all surfaces at once. The lumbar spine gets stiffer as a result even when nothing pulls on it directly. That is the finding from the phrenic-nerve work: raise the pressure with no abdominal wall activity at all, and stiffness still rises.' },
        { id: 'apt502-u2-v3', label: '3', text: 'Two lordoses, at the neck and the low back, and two kyphoses, at the mid-back and the sacrum. They are drawn as one column because what makes each region behave differently is not the curve itself but the facet angle inside it. Lumbar facets set front to back give bending and lock rotation at roughly two degrees a level. The more forward-facing thoracic facets give rotation, and the rib ring restrains it without abolishing it.' },
        { id: 'apt502-u2-v4', label: '4', text: 'At the base, form closure and force closure are two separate jobs. Geometry resists shear on its own. Muscle and fascia add compression on demand. Only the second one is trainable, and you train it by loading hips and trunk together rather than by correcting an alignment.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt502-u2-worked',
      title: 'The golfer who was told to loosen her low back',
      scenario:
        'Bridget, 54, has played golf for twenty years. Over the last season her backswing has visibly shortened, and she gets a dull ache low in her back on the right after eighteen holes, gone by the next morning. A practitioner at her club told her the problem is a stiff lumbar spine and gave her a set of end-range lumbar rotation stretches. She has been doing them for two months, her turn has not improved, and the ache is now showing up by the twelfth hole. She asks you what she should do.',
      steps: [
        { id: 'apt502-u2-w1', title: 'Ask the anatomy where the rotation could possibly come from',
          reasoning: 'A golf backswing needs a large amount of turn between pelvis and shoulders. The lumbar spine cannot supply much of it. Each level runs out at roughly two degrees, giving the whole region something like ten to thirteen degrees in one direction, and the stop is one bony process against another. The thorax has twelve levels with more forward-facing facets and delivers roughly three times that total, and the hips can rotate a great deal in each direction. So the stretch programme is asking a region for range it structurally does not have, and it is doing that at end range, over and over.' },
        { id: 'apt502-u2-w2', title: 'Separate the hip from the spine before blaming either',
          reasoning: 'Test them apart. Seated rotation with the pelvis fixed isolates what the thorax and low back contribute. Lying hip rotation, inward and outward, isolates the hips. In a golfer, a restriction in trail-hip inward rotation on the backswing is common and it directly steals turn. Whatever the hip does not give, the trunk is asked to make up. Measuring separately turns “she is stiff” into a specific finding you can train.' },
        { id: 'apt502-u2-w3', title: 'Look at the rib cage and the breath, because they are the same joints',
          reasoning: 'Every thoracic segment that rotates has to move a dozen rib joints with it. A rib cage held permanently lifted and inflated, with the lower ribs never moving sideways, is a mechanically stiffer cage. This is worth thirty seconds of observation. Watch a quiet breath from the side and from the front, with your hands on the lower ribs. If the lower ribs do not move outward at all, thoracic rotation work will be fighting the cage the whole time.' },
        { id: 'apt502-u2-w4', title: 'Reason about the load, not just the range',
          reasoning: 'The golf swing combines turning with side bending and extension, repeated hundreds of times per round, and the trail side loads in a way that pushes the back parts of the vertebrae together. That is precisely the pattern where the mechanical concern about the lumbar spine is strongest: end-range rotation under compression. It is also the pattern her stretches have been adding to, twice a day, off the course. It explains why the symptom appears with accumulated exposure late in a round rather than on any one swing.' },
        { id: 'apt502-u2-w5', title: 'Decide what to train and what to stop',
          reasoning: 'Stop the end-range lumbar rotation stretching. It loads the structure that is already accumulating exposure, in the direction it tolerates least. Train thoracic rotation with the pelvis blocked, so the low back is not the one giving way. Train trail-hip inward rotation and lead-hip outward rotation actively, not just passively. Build tolerance in the trunk with loaded anti-rotation work and carries, so the region can absorb the swing rather than be moved by it. Use lower-rib expansion work to make the cage available. And add a simple exposure plan, because she has been playing more this season than last.' },
        { id: 'apt502-u2-w6', title: 'Say what you are licensed to say, and share the decision',
          reasoning: 'You have not diagnosed anything and you should not claim to have. What you have is a chain of mechanical reasoning: the range she wants is not available where she has been looking for it, and the loading she has added sits on the region that already hurts. That is a training decision inside your scope. Set a review point at four to six weeks, with her turn and the timing of her symptom as the markers. And tell her plainly that if the ache changes character, starts travelling into her leg, or stops settling overnight, that is a medical question, not a coaching one.' },
      ],
      takeaway:
        'The stiff-looking region is often the one being asked to cover for a neighbour. Before you stretch anything, ask what the joint surfaces can actually supply. If the answer is “not much”, the range you want is somewhere else.',
    },

    // 6 ── interactive lab (classification) ──────────────────────────────────
    {
      type: 'classification', id: 'apt502-u2-lab',
      title: 'Lab: what is actually holding this?',
      instructions:
        'Every restraint in the trunk is one of three kinds: the shape of the joint surfaces, tension in passive tissue, or active muscle contraction and the pressure it produces. File each description by what is doing the holding at that moment, not by what happens to be nearby.',
      buckets: [
        { id: 'apt502-u2-b-geom', label: 'Articular geometry (form)' },
        { id: 'apt502-u2-b-passive', label: 'Passive tissue tension' },
        { id: 'apt502-u2-b-active', label: 'Active muscle and pressure' },
      ],
      items: [
        { id: 'apt502-u2-l1', text: 'Turning at the L3 to L4 segment stopping after about two degrees as one bony process meets the opposite one',
          bucketId: 'apt502-u2-b-geom', rationale: 'A bone-on-bone stop set by the near-sagittal angle of the lumbar facet surfaces. No tissue is being stretched to produce it, and no muscle is being asked to hold it.' },
        { id: 'apt502-u2-l2', text: 'The extra resistance to forward slide at L5 to S1 given by facet surfaces that turn to face more forward',
          bucketId: 'apt502-u2-b-geom', rationale: 'The lumbosacral junction sits on the sloping top of the sacrum, and the more forward-facing facets there are a shape solution to the shear that slope creates.' },
        { id: 'apt502-u2-l3', text: 'Sideways sliding of a mid-cervical segment being checked by the uncinate processes',
          bucketId: 'apt502-u2-b-geom', rationale: 'The uncinate processes are bony ridges on the sides of the cervical vertebral bodies. They work as rails, limiting sideways sliding and coupling side bending with rotation.' },
        { id: 'apt502-u2-l4', text: 'The wedged sacrum sitting between the two ilia, its ridged surfaces interlocking',
          bucketId: 'apt502-u2-b-geom', rationale: 'This is form closure exactly as Vleeming described it: geometry resisting shear without anything having to contract or stretch.' },
        { id: 'apt502-u2-l5', text: 'The annulus fibrosus taking tension around its circumference as the pressurised nucleus pushes outward under load',
          bucketId: 'apt502-u2-b-passive', rationale: 'The rings work as a passive tension band, turning pressure in the nucleus into hoop stress. Nothing has to be switched on for it to work.' },
        { id: 'apt502-u2-l6', text: 'The load held at the end of full trunk flexion while the lumbar erector spinae fall electrically silent',
          bucketId: 'apt502-u2-b-passive', rationale: 'The flexion-relaxation phenomenon. At full flexion the extensors go quiet, and the ligaments behind the spine, the thoracolumbar fascia and passive muscle tissue carry the load.' },
        { id: 'apt502-u2-l7', text: 'The sacrotuberous and interosseous ligaments drawing tight as the sacrum nutates under load',
          bucketId: 'apt502-u2-b-passive', rationale: 'Nutation is a passive self-tightening mechanism. The same load that would displace the joint pulls its ligaments taut and stiffens it.' },
        { id: 'apt502-u2-l8', text: 'Compression added across the sacroiliac joint by gluteus maximus working with the opposite latissimus dorsi through the thoracolumbar fascia',
          bucketId: 'apt502-u2-b-active', rationale: 'Force closure. The compression exists only while those muscles are producing tension, which is why it is trainable and why it varies with the task.' },
        { id: 'apt502-u2-l9', text: 'The rise in lumbar spine stiffness measured when pressure inside the abdomen is raised by phrenic-nerve stimulation, with no abdominal wall activity',
          bucketId: 'apt502-u2-b-active', rationale: 'The diaphragm is a muscle and the pressure is the product of its contraction. The elegance of the experiment is that it separates pressure from abdominal wall pull, and the stiffening is still active in origin.' },
        { id: 'apt502-u2-l10', text: 'The increase in trunk stiffness that appears in the moments before a rapid arm raise, ahead of the limb movement itself',
          bucketId: 'apt502-u2-b-active', rationale: 'Anticipatory postural activity, including in the diaphragm. It is contraction scheduled by the nervous system before the disturbance arrives.' },
      ],
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt502-u2-case',
      title: 'Case: the report that ended her deadlift',
      brief:
        'Maya, 46, has trained with you for two years. Eight weeks ago she had an episode of low back pain lifting a suitcase. It settled over a fortnight, and she is now symptom-free and back to full walking, cycling and upper-body work. Her GP ordered an MRI during the episode. She arrives with the report and a decision she wants you to make with her. Every choice is scored against best practice.',
      startNodeId: 'apt502-u2-n1',
      nodes: [
        {
          id: 'apt502-u2-n1',
          situation:
            'Maya hands you the report. It reads: “L4-L5 disc desiccation with a small broad-based disc bulge. No nerve root compromise. Mild facet arthropathy.” She says: “My sister showed it to a friend who’s a physio and he said I should never deadlift again. Should I?”',
          choices: [
            { id: 'apt502-u2-n1a', text: '“Let’s go through what that report actually says and what it doesn’t, then decide together. First, though, I want to ask you a few questions about how you’re doing right now.”', to: 'apt502-u2-n2',
              quality: 'best', feedback: 'Right on both counts. You put the current clinical picture ahead of the imaging, and you kept the decision shared rather than issuing a ruling.' },
            { id: 'apt502-u2-n1b', text: '“If it says bulge, we stay off the deadlift. There are plenty of other exercises.”', to: 'apt502-u2-n3',
              quality: 'poor', feedback: 'You just let a paragraph of radiology text remove a movement from a symptom-free adult. Findings like these appear in about a third of pain-free twenty-year-olds and nearly all eighty-year-olds. Treating them as an instruction is how a fearful client is manufactured.' },
            { id: 'apt502-u2-n1c', text: '“Scans mean nothing, honestly. Ignore it, let’s work up to a heavy triple today.”', to: 'apt502-u2-n3',
              quality: 'poor', feedback: 'The right correction, taken much too far, and attached to a reckless plan. The report is genuinely weak evidence about her future, but she is eight weeks off an episode and has not loaded a hinge since. The loading decision still has to be earned.' },
          ],
        },
        {
          id: 'apt502-u2-n2',
          situation:
            'You ask the questions first. No leg symptoms, no numbness, no bladder or bowel change, no night pain. She is walking and cycling normally, and the episode settled in two weeks. Then she asks: “So what does the report mean?”',
          choices: [
            { id: 'apt502-u2-n2a', text: '“Those findings are extremely common in people with no pain at all, and they were probably there before the suitcase. What actually matters is what I just asked you, and all of that is reassuring. The report doesn’t tell us what to train. Your response to load does.”', to: 'apt502-u2-n4',
              quality: 'best', feedback: 'Accurate, calibrated, and it moves the decision onto information that can actually guide programming.' },
            { id: 'apt502-u2-n2b', text: '“It means the disc is worn and we need to protect it, so from now on everything stays in a neutral spine and light.”', to: 'apt502-u2-n4',
              quality: 'poor', feedback: 'Two errors in one sentence. “Worn” is a frightening word for an age-appropriate finding, and permanent protection has costs of its own: deconditioning, fear, and a client who now believes her spine is fragile.' },
            { id: 'apt502-u2-n2c', text: '“It means she probably had a small disc injury, which usually settles. We’ll rebuild carefully.”', to: 'apt502-u2-n4',
              quality: 'acceptable', feedback: 'The plan is sound and the tone is fine, but you inferred a cause from an image. Nobody knows whether that bulge had anything to do with the episode, and saying so is more honest and no less reassuring.' },
          ],
        },
        {
          id: 'apt502-u2-n3',
          situation:
            'Maya nods, but she looks unsettled. A week later she cancels a session and messages: “I’ve been reading about disc bulges. I don’t think I should be lifting anything heavy any more.”',
          choices: [
            { id: 'apt502-u2-n3a', text: '“That’s on me. I gave you a verdict instead of a conversation. Come in and let’s go through what that report does and doesn’t say, and build a plan you actually understand.”', to: 'apt502-u2-n2',
              quality: 'acceptable', feedback: 'A good recovery. Naming your own error costs you nothing, and it is the only route back to a shared decision.' },
            { id: 'apt502-u2-n3b', text: '“Probably sensible. We’ll keep everything machine-based and under fifteen kilos from now on.”', to: null,
              quality: 'poor', feedback: 'This ends with a healthy 46-year-old permanently deloaded on the strength of one paragraph, losing the bone, muscle and confidence that resistance training was giving her. Avoidance is not a neutral choice. It has its own risk profile.' },
          ],
        },
        {
          id: 'apt502-u2-n4',
          situation:
            'You agree to reintroduce hinging. She asks: “What about my back rounding? I’ve seen videos saying that’s what herniates a disc.”',
          choices: [
            { id: 'apt502-u2-n4a', text: '“Some flexion under load isn’t the injury guarantee those videos claim. The human evidence hasn’t shown that more lumbar flexion when lifting predicts back pain. We’ll still coach a stable position, because it moves load better and because right now I want your first few weeks predictable.”', to: 'apt502-u2-n5',
              quality: 'best', feedback: 'Honest about the evidence and still professionally conservative about the return-to-load period. Those two things are compatible, and saying both is what separates you from the videos.' },
            { id: 'apt502-u2-n4b', text: '“Correct. Any rounding and the set stops. Never let the spine flex under load.”', to: 'apt502-u2-n5',
              quality: 'poor', feedback: 'The rule is stricter than the evidence supports, and it teaches her that her spine is one bad rep from failure. It also makes her watchful about a variable that explains far less than load, exposure and fatigue.' },
            { id: 'apt502-u2-n4c', text: '“Spine position doesn’t matter at all, only load does.”', to: 'apt502-u2-n5',
              quality: 'acceptable', feedback: 'Closer to the evidence than the zero-flexion rule, but overstated. Position changes how force is distributed and how efficiently she moves the bar. The honest line is that it matters less than the folklore claims, not that it does not matter.' },
          ],
        },
        {
          id: 'apt502-u2-n5',
          situation:
            'Six weeks in she is hinging pain-free with moderate load and enjoying it. She asks: “Should I get a belt? And should I be bracing all day like the app told me to?”',
          choices: [
            { id: 'apt502-u2-n5a', text: '“A belt lets you generate more pressure and can help on top sets. It isn’t injury insurance, and there’s no good evidence it prevents back problems. And no, don’t hold a brace all day: it costs you breathing and buys you nothing. Brace hard and briefly when the load asks for it.”', to: null,
              quality: 'best', feedback: 'Exactly the calibrated answer. You separated what a belt demonstrably does, which is raise the pressure inside the abdomen, from what it is marketed to do, and you gave bracing a dose instead of a doctrine.' },
            { id: 'apt502-u2-n5b', text: '“No belt. Belts make your core weak. And yes, keep the brace on all day; that’s what protects the disc.”', to: null,
              quality: 'poor', feedback: 'Both halves are wrong. Trunk muscle activity is generally held or slightly higher in a belt, not lower, and a permanently held brace interferes with breathing while adding compression she does not need.' },
            { id: 'apt502-u2-n5c', text: '“Belt for everything above your warm-up sets, and brace whenever you remember to.”', to: null,
              quality: 'acceptable', feedback: 'Harmless, but vague. A belt worn from the first working set removes the practice of producing pressure unaided, and “whenever you remember” is not a strategy she can execute under a heavy bar.' },
          ],
        },
      ],
    },

    // 8 ── error identification ──────────────────────────────────────────────
    {
      type: 'errorId', id: 'apt502-u2-errorid',
      title: 'Audit this gym’s “Spine Safety and Core Policy”',
      brief:
        'A colleague hands you the one-page policy his facility gives every new trainer. Flag the statements that are anatomically or evidentially wrong. Leave the defensible ones alone, because several of them are correct.',
      document:
        'SPINE SAFETY AND CORE POLICY (staff handout, v4). 1. Remember that the spine is a stack of blocks: one wrong movement and a disc can slip out of place. 2. Every client draws the navel toward the spine and holds it before every repetition. Without the transversus abdominis firing first, the spine is unstable. 3. Any visible lumbar flexion under load stops the set immediately. Flexion is what herniates discs. 4. Heavy loaded bending is programmed after midday rather than in the first hour after waking, when the discs hold the most water and bending stresses on them are highest. 5. Rotational work is loaded through the hips and thoracic spine, because each lumbar segment permits only a couple of degrees of turn before the facet surfaces meet. 6. Any client whose scan mentions a disc bulge is permanently unsuitable for deadlifting or loaded carries. 7. Sacroiliac alignment is checked by feeling for the posterior superior iliac spines at the start of every session, and corrected before training begins. 8. Belts are permitted above roughly 85% of one-rep max for clients who want them: they raise the pressure inside the abdomen and can help move more load, but they are not injury insurance.',
      findings: [
        { id: 'apt502-u2-e1', text: '“the spine is a stack of blocks: one wrong movement and a disc can slip out of place”', isError: true,
          rationale: 'Discs are bonded to the endplates above and below, so nothing slips. A herniation is a failure of the annulus that lets material from the nucleus displace, usually at the end of a long process. The block-tower image also implies a fragility the structure does not have, and language like this measurably raises client fear.' },
        { id: 'apt502-u2-e2', text: '“without the transversus abdominis firing first, the spine is unstable”', isError: true,
          rationale: 'This is the 1996 timing model taken far past what it supports. Modelling shows no single trunk muscle contributes more than roughly a third of lumbar stability, contributions shift with the task, and trials have shown patients improve clinically without deep abdominal timing normalising at all.' },
        { id: 'apt502-u2-e3', text: '“Any visible lumbar flexion under load stops the set immediately. Flexion is what herniates discs.”', isError: true,
          rationale: 'The cadaver work behind this belief used end-range flexion with high compression over thousands of cycles, in tissue that could neither protect itself nor adapt. A systematic review with meta-analysis found no consistent link between lumbar flexion during lifting and low back pain in living people. Coaching a stable position is reasonable. Declaring flexion the cause of herniation is not.' },
        { id: 'apt502-u2-e4', text: '“Heavy loaded bending is programmed after midday rather than in the first hour after waking”', isError: false,
          rationale: 'Defensible. Discs take water back on overnight, and Adams, Dolan and Hutton showed that the spine bends further into flexion and bending stresses on the disc run substantially higher in the early morning. It is a modest scheduling preference, correctly stated, not a safety rule.' },
        { id: 'apt502-u2-e5', text: '“each lumbar segment permits only a couple of degrees of turn before the facet surfaces meet”', isError: false,
          rationale: 'Anatomically correct. Near-sagittal lumbar facets limit turning to roughly two degrees a segment before the surfaces make contact, so directing rotational load to the hips and thorax follows from the joint shape.' },
        { id: 'apt502-u2-e6', text: '“Any client whose scan mentions a disc bulge is permanently unsuitable for deadlifting or loaded carries”', isError: true,
          rationale: 'Disc bulges appear in about thirty percent of pain-free twenty-year-olds and eighty-four percent of pain-free eighty-year-olds. A permanent ban based on an age-appropriate imaging finding removes training that builds the very capacity a spine needs, and it is a decision no imaging report authorises.' },
        { id: 'apt502-u2-e7', text: '“Sacroiliac alignment is checked by feeling for the posterior superior iliac spines … and corrected before training”', isError: true,
          rationale: 'Two problems. Sacroiliac motion is around two degrees and one to two millimetres, far below what a thumb can resolve, and tests for positional faults have failed reliability studies over and over. Beyond that, “correcting alignment” is not a training-scope action, and the model it rests on is not supported.' },
        { id: 'apt502-u2-e8', text: '“Belts … raise the pressure inside the abdomen and can help move more load, but they are not injury insurance”', isError: false,
          rationale: 'Accurate and unusually well hedged. Belts do raise the pressure inside the abdomen and tend to improve performance slightly. The largest prospective workplace study found no reduction in back injury claims among belt wearers, which is exactly what “not injury insurance” means.' },
      ],
    },

    // 9 ── active-recall set ─────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt502-u2-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'apt502-u2-r1', front: 'Why does the lumbar spine bend freely but barely turn?',
          back: 'Facet surfaces sit close to the sagittal plane. Bending forward and back slides along them. Turning drives one bony process into the other within about two degrees, giving roughly ten to thirteen degrees for the whole lumbar region in one direction.' },
        { id: 'apt502-u2-r2', front: 'How does a typical rib attach to the spine?',
          back: 'Twice on each side. The head of ribs two to nine meets half-facets on two neighbouring vertebral bodies and the disc between them. The tubercle meets the transverse process of the vertebra below. Ribs one, ten, eleven and twelve meet one body only, and eleven and twelve have no joint with a transverse process.' },
        { id: 'apt502-u2-r3', front: 'Pump handle and bucket handle: what is the difference?',
          back: 'Upper ribs move about an axis nearer the frontal plane, rising and pushing the sternum forward, which increases the depth of the chest from front to back. Lower ribs move about an axis nearer the sagittal plane, swinging out to increase the width from side to side. Both happen in any real breath, and the proportion shifts.' },
        { id: 'apt502-u2-r4', front: 'What makes the nucleus pulposus hold water?',
          back: 'Aggrecan, a large molecule with a dense fixed negative charge that pulls water in and holds it. The water is what lets the nucleus behave like a fluid and spread load across the endplate.' },
        { id: 'apt502-u2-r5', front: 'Why is the annulus poor at resisting twist?',
          back: 'Its rings alternate fibre direction, roughly thirty degrees to the horizontal one way, then the other. For any one direction of twist only about half the rings are angled to take the tension. So twist is the load it handles worst, and the facets do the stopping instead.' },
        { id: 'apt502-u2-r6', front: 'What does a day do to the intervertebral disc?',
          back: 'Sustained load drives fluid out through the endplates, which is creep. You lose roughly one and a half to two centimetres of height over a day, most of it in the first few hours, and get it back overnight. Early morning discs are swollen and stiffer, the spine bends a few degrees further into flexion, and bending stresses on the disc run several times higher.' },
        { id: 'apt502-u2-r7', front: 'Roughly what do Wilke’s measured L4 to L5 disc pressures look like?',
          back: 'About 0.1 MPa lying down, around 0.5 standing relaxed, relaxed sitting close to standing rather than far worse, and around 2.3 MPa lifting a 20 kg box with a rounded back against about 1.7 with bent knees and a straighter back. An ordering, not a verdict.' },
        { id: 'apt502-u2-r8', front: 'Form closure and force closure at the sacroiliac joint?',
          back: 'Form closure is geometry: a wedged sacrum with ridged, interlocking surfaces resisting shear by shape. Force closure is compression added by muscle and fascia crossing the joint, including gluteus maximus with the opposite latissimus dorsi through the thoracolumbar fascia, plus ligaments tightening as the sacrum nutates. Only the second is trainable.' },
        { id: 'apt502-u2-r9', front: 'How much does the sacroiliac joint actually move?',
          back: 'About two degrees of rotation and one to two millimetres of sliding, measured with implanted markers. It does not go out and get put back, and hands-on tests for positional faults have failed reliability studies over and over.' },
        { id: 'apt502-u2-r10', front: 'What is the best-supported mechanism for pressure inside the abdomen?',
          back: 'Stiffening rather than unloading. Raising the pressure by stimulating the phrenic nerves, with no abdominal wall activity at all, still increased lumbar spine stiffness. The old extension-moment account is partly cancelled by the flexion moment and compression that the abdominal contraction itself produces.' },
        { id: 'apt502-u2-r11', front: 'What survived the 1990s transversus abdominis timing story?',
          back: 'The observation itself, and not much of the model built on it. Bracing beats hollowing for stability index, no single trunk muscle contributes more than about a third of lumbar stability, and patients improve clinically without deep abdominal timing normalising. Motor control exercise works about as well as other active exercise.' },
        { id: 'apt502-u2-r12', front: 'What does a lifting belt do, and what does it not do?',
          back: 'It gives the abdominal wall something to push against, raising pressure and stiffness, and usually allows slightly more load or speed. It does not prevent injury: the largest prospective workplace study found no reduction in back injury claims. And the claim that belts weaken the core is not supported by trunk muscle activity data.' },
        { id: 'apt502-u2-r13', front: 'Which way do the three sheets of the side wall run, and what does each one do?',
          back: 'External oblique, from the lower eight ribs, runs down and forward: on one side it side-bends towards that side and turns away from it. Internal oblique, from the thoracolumbar fascia, iliac crest and inguinal ligament to ribs ten to twelve and the midline, runs up and forward: it side-bends and turns towards its own side. So a trunk turn pairs one side’s external oblique with the other side’s internal oblique. Transversus abdominis runs horizontally and produces no movement at all. It narrows the waist and tightens the thoracolumbar fascia.' },
        { id: 'apt502-u2-r14', front: 'What supplies the front and side abdominal wall, and why does it matter?',
          back: 'The front branches of the spinal nerves, segment by segment: the thoracoabdominal nerves T7 to T11, the subcostal nerve T12, plus iliohypogastric and ilioinguinal from L1 to internal oblique and transversus abdominis. They run in the plane between internal oblique and transversus abdominis and enter the wall strip by strip, so it is a series of bands with their own nerves rather than one unit that switches on or off. Skin at the navel is T10.' },
        { id: 'apt502-u2-r15', front: 'What is the rectus sheath, and what changes at the arcuate line?',
          back: 'The sheath is built entirely from the tendon sheets of the other three wall muscles. Above roughly the midpoint between navel and pubis: external oblique in front, internal oblique splitting to pass front and back, transversus abdominis behind. Below the arcuate line all three pass in front, leaving only thin fascia and the lining of the abdomen behind rectus. The sheets interweave in the midline as the linea alba, and a diastasis is that seam widened and thinned, not a torn muscle.' },
        { id: 'apt502-u2-r16', front: 'Name the erector spinae columns and their nerve supply.',
          back: 'From a common tendon on the sacrum, the back of the iliac crest, the sacroiliac and sacrotuberous ligaments and the lower lumbar spinous processes: iliocostalis laterally to the rib angles, longissimus in the middle to transverse processes and ribs and on to the mastoid process, spinalis closest to the midline between spinous processes. Both sides together extend the spine, one side alone side-bends it. All are supplied by the back branches of the spinal nerves.' },
        { id: 'apt502-u2-r17', front: 'What is unusual about the nerve supply of lumbar multifidus?',
          back: 'It is unisegmental. Fascicles run from small bumps on the vertebrae, the sacrum and the back of the ilium to a spinous process two to five levels above, and every fascicle attaching to a given spinous process is supplied by one nerve, the one leaving below that vertebra. No other back muscle has that arrangement, which is why multifidus became a window onto segmental nerve function.' },
        { id: 'apt502-u2-r18', front: 'Quadratus lumborum: attachments, nerve supply, and its part in breathing?',
          back: 'From the iliac crest and iliolumbar ligament to the twelfth rib and the transverse processes of L1 to L4, supplied from T12 to L4. It side-bends the lumbar spine and hitches the hip, and it anchors the twelfth rib downward while the diaphragm pulls up on the lower ribs.' },
        { id: 'apt502-u2-r19', front: 'Psoas major: where does it attach, and what does it really do to the lumbar spine?',
          back: 'From the transverse processes of L1 to L5 and the bodies and discs of T12 to L5, over the pelvic brim with iliacus to the lesser trochanter, supplied from L1 to L3. Its line of pull sits close to and nearly parallel with the lumbar spine, so its leverage there is tiny. It is a strong hip flexor that loads the lower segments in compression and forward shear, heaviest at L5 to S1, with almost no bending moment. It does not create lordosis, and stretching it will not change a pelvic tilt.' },
      ],
    },

    // 10 ── unit quiz ────────────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u2-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'apt502-u2-q1', kind: 'single', cognitive: 'recall',
          prompt: 'The head of a typical rib (ribs two to nine) meets:',
          options: [
            { id: 'a', text: 'Half-facets on two neighbouring vertebral bodies and the disc between them', correct: true },
            { id: 'b', text: 'The transverse process only', correct: false, rationale: 'That joint is made by the tubercle of the rib, not the head.' },
            { id: 'c', text: 'A single full facet on one vertebral body', correct: false, rationale: 'True for ribs one, ten, eleven and twelve, but not for a typical rib.' },
          ] },
        { id: 'apt502-u2-q2', kind: 'single', cognitive: 'recall',
          prompt: 'Where does the diaphragm attach at its lower and back edge?',
          explanation: 'The crura are why the diaphragm has a direct mechanical relationship with the lumbar spine, and part of why it behaves as a postural structure as well as a breathing one.',
          options: [
            { id: 'a', text: 'By two crura onto the front of the upper lumbar vertebral bodies, the right reaching about L3 and the left a level higher', correct: true },
            { id: 'b', text: 'Onto the sacrum through the thoracolumbar fascia', correct: false, rationale: 'No part of the diaphragm reaches the sacrum. The crura stop in the upper lumbar spine.' },
            { id: 'c', text: 'Onto the iliac crests alongside quadratus lumborum', correct: false, rationale: 'That is the attachment region of quadratus lumborum and the abdominal wall, not the diaphragm.' },
          ] },
        { id: 'apt502-u2-q3', kind: 'single', cognitive: 'recall',
          prompt: 'Which nerves supply the muscles of the front and side abdominal wall?',
          explanation: 'The wall keeps the segmental supply of the thoracic body wall it grew from. Knowing that is what turns “switch your core on” into a question with an answer.',
          options: [
            { id: 'a', text: 'The thoracoabdominal nerves T7 to T11 and the subcostal nerve T12, with iliohypogastric and ilioinguinal from L1 also supplying internal oblique and transversus abdominis', correct: true },
            { id: 'b', text: 'The back branches of the spinal nerves from T7 to T12', correct: false, rationale: 'Those branches supply the deep back muscles, erector spinae and multifidus. The abdominal wall belongs to the front branches.' },
            { id: 'c', text: 'Branches of the lumbar plexus from L2 to L4 only', correct: false, rationale: 'L2 to L4 supplies hip and thigh muscles. The abdominal wall keeps its lower thoracic supply, with only L1 reaching it.' },
          ] },
        { id: 'apt502-u2-q4', kind: 'single', cognitive: 'recall',
          prompt: 'Which pairing of oblique muscles turns the trunk to the left?',
          options: [
            { id: 'a', text: 'Right external oblique with left internal oblique', correct: true, rationale: 'External oblique fibres run down and forward and turn the trunk away from their own side. Internal oblique fibres run up and forward and turn it towards their own side. The two therefore work as a diagonal pair.' },
            { id: 'b', text: 'Left external oblique with left internal oblique', correct: false, rationale: 'Same side, opposing turns. That pairing side-bends to the left far more than it turns the trunk.' },
            { id: 'c', text: 'Transversus abdominis on both sides', correct: false, rationale: 'Its fibres run horizontally, so it has no turning line of action at all. It narrows the waist and tightens the thoracolumbar fascia.' },
          ] },
        { id: 'apt502-u2-q5', kind: 'single', cognitive: 'application',
          prompt: 'A colleague says your client’s anterior pelvic tilt is caused by a tight psoas and should be stretched out. What does the anatomy of psoas major actually say?',
          explanation: 'Attachment and leverage are different questions. Psoas attaches to every lumbar level and still has almost no leverage on them.',
          options: [
            { id: 'a', text: 'Its line of pull runs close to and nearly parallel with the lumbar spine, so its leverage there is tiny. It loads the lower segments in compression and forward shear rather than tilting the pelvis or building lordosis', correct: true },
            { id: 'b', text: 'Correct. Psoas is the main extensor of the lumbar spine, and shortening it deepens the lordosis directly', correct: false, rationale: 'It is not a lumbar extensor. It is a hip flexor with attachments on the lumbar spine and very little leverage over it.' },
            { id: 'c', text: 'Psoas has no attachment to the lumbar spine, so it cannot influence it at all', correct: false, rationale: 'It attaches to every lumbar transverse process and to the bodies and discs from T12 down. What it lacks is leverage, not an attachment, and the compression it delivers is real.' },
          ] },
        { id: 'apt502-u2-q6', kind: 'single', cognitive: 'application',
          prompt: 'A client trains at 6 a.m. and you want to programme heavy end-range hip hinging. What does the daily behaviour of the disc suggest?',
          options: [
            { id: 'a', text: 'Early morning is the least favourable window for loading end-range flexion; a general warm-up and genuine build-up sets are worth the time', correct: true, rationale: 'Discs take water back on overnight, so the spine bends further into flexion and bending stresses are higher in the first hour or two after rising.' },
            { id: 'b', text: 'Early morning is ideal because the disc is at maximum height and therefore strongest', correct: false, rationale: 'Height is not strength here. The swollen disc allows more flexion range and carries higher bending stress at the end of it.' },
            { id: 'c', text: 'Time of day has no measurable effect on the disc', correct: false, rationale: 'Losing one and a half to two centimetres of height across a day is easy to measure, and the stress changes that go with it have been quantified.' },
          ] },
        { id: 'apt502-u2-q7', kind: 'single', cognitive: 'application',
          prompt: 'A golfer wants more backswing turn. Based on how each region is built, where should the range be sought?',
          options: [
            { id: 'a', text: 'Thoracic spine and hips, because lumbar segments run out of turn at roughly two degrees each', correct: true },
            { id: 'b', text: 'Lumbar spine, since it sits between the two and has the tallest discs', correct: false, rationale: 'Disc height does not create rotation. Near-sagittal facets stop it at bone within a couple of degrees a level.' },
            { id: 'c', text: 'Cervical spine, since roughly half of head rotation happens between C1 and C2', correct: false, rationale: 'True about C1 and C2, but beside the point. Head rotation does not contribute to the separation between pelvis and shoulders that a backswing needs.' },
          ] },
        { id: 'apt502-u2-q8', kind: 'multi', cognitive: 'analysis',
          prompt: 'Which statements about pressure inside the abdomen are supported? (Select all that apply.)',
          explanation: 'The stiffening account is the one that survived. The extension-moment account is partly self-cancelling, and how much pressure you can produce is bounded by having to breathe.',
          options: [
            { id: 'a', text: 'Raising the pressure increases lumbar spine stiffness, shown even when the pressure is generated with no abdominal wall activity', correct: true },
            { id: 'b', text: 'The abdominal contraction that generates the pressure also produces a trunk flexion moment and compression of its own, offsetting part of any unloading effect', correct: true },
            { id: 'c', text: 'A maximal brace can be held indefinitely because it does not involve the diaphragm', correct: false, rationale: 'It centrally involves the diaphragm, which is why a maximal brace is a held breath with a time limit.' },
            { id: 'd', text: 'Pressure acts outward on every surface of the container at once, so the pelvic floor has to hold for the ceiling to be reached', correct: true },
          ] },
        { id: 'apt502-u2-q9', kind: 'single', cognitive: 'analysis',
          prompt: 'A client says her practitioner finds and corrects a sacroiliac “misalignment” by feeling for the levels of her PSIS. What is the best-evidenced response?',
          options: [
            { id: 'a', text: 'Sacroiliac motion is around two degrees and one to two millimetres, below what hands can reliably detect, and tests for positional faults show poor agreement between examiners', correct: true },
            { id: 'b', text: 'The sacroiliac joint does not move at all in adults, so nothing there can move or be assessed', correct: false, rationale: 'Overcorrection. It does move, nodding forward and back, just far less than the alignment model requires.' },
            { id: 'c', text: 'These tests are reliable when performed by an experienced clinician', correct: false, rationale: 'Experience has not rescued them. Reliability studies repeatedly show experienced examiners disagreeing about the same pelvis.' },
          ] },
        { id: 'apt502-u2-q10', kind: 'single', cognitive: 'analysis',
          prompt: 'What is the fairest summary of what happened to the transversus abdominis timing model of core stability?',
          explanation: 'A real observation, a plausible mechanism, and a treatment effect that turned out not to run through it. That is a common pattern, not a scandal.',
          options: [
            { id: 'a', text: 'The delayed-onset observation stands, but the model built on it does not: stability is shared across muscles, bracing outperforms hollowing, and patients improve without the timing normalising', correct: true },
            { id: 'b', text: 'The original finding was fraudulent and the whole area has been discredited', correct: false, rationale: 'Nothing of the kind. The finding has been replicated in part. What failed was the inference that restoring the timing was the mechanism of benefit.' },
            { id: 'c', text: 'Nothing has changed. Deep abdominal timing is still the accepted mechanism of stabilisation training', correct: false, rationale: 'Trials that measured both symptoms and muscle behaviour found improvement without normalised timing, and meta-analyses put motor control exercise on a par with other active exercise.' },
          ] },
        { id: 'apt502-u2-q11', kind: 'single', cognitive: 'synthesis',
          prompt: 'A pain-free client has been told by a friend that any rounding of the back while lifting will herniate a disc. Which reply best reflects the current evidence?',
          options: [
            { id: 'a', text: '“The human evidence hasn’t shown that more lumbar flexion when lifting predicts back pain. We still coach a stable position because it moves load better. But total load, how much you’re doing, and fatigue matter far more than the exact shape of your spine.”', correct: true },
            { id: 'b', text: '“She’s right. One rounded rep is all it takes, so we stop the set the moment I see any flexion.”', correct: false, rationale: 'Stricter than the evidence supports, and it teaches a healthy adult that her spine is one repetition from failure.' },
            { id: 'c', text: '“Spine position is irrelevant. Only the weight on the bar matters.”', correct: false, rationale: 'Overcorrection. Position changes force distribution and mechanical efficiency. It matters less than folklore claims, not not at all.' },
          ] },
        { id: 'apt502-u2-q12', kind: 'single', cognitive: 'application', safetyCritical: true,
          prompt: 'Mid-session, a client with low back pain reports new numbness around her inner thighs and buttocks, difficulty starting urination, and weakness in both legs. What must you do?',
          explanation: 'In adults the spinal cord ends around L1 to L2, and below that the nerve roots continue as a bundle called the cauda equina. Numbness in the saddle area, with bladder or bowel change and symptoms in both legs, is the classic presentation of cauda equina compression. It is a surgical emergency in which delay costs function permanently.',
          options: [
            { id: 'a', text: 'Stop immediately and arrange urgent emergency medical assessment, because this pattern can indicate cauda equina compression', correct: true },
            { id: 'b', text: 'Switch to gentle mobility work and reassess at the next session', correct: false, rationale: 'A delay of days in cauda equina syndrome can mean permanent bladder, bowel and sexual dysfunction. Nothing about this belongs in a training session.' },
            { id: 'c', text: 'Advise rest and suggest she see her GP within the next couple of weeks', correct: false, rationale: 'Far too slow. This is an emergency referral, not a routine one.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt502-u2-teach',
      title: 'Teach it back',
      prompt:
        'Your client Nadia has been told to “hold her core tight all day to protect her back”, and separately that deadlifts will “crush her discs”. In plain, warm language, with no term she would have to look up, explain what actually happens inside her trunk when she braces, what a disc is and what it does under load, and why holding a brace all day is not the plan. Do not dismiss her worry.',
      modelAnswer:
        'Let me show you what your trunk actually is, because I think the picture you’ve been given is scarier than the real thing. Think of your middle as a sealed container. Your breathing muscle, the diaphragm, is the lid. The pelvic floor is the base. Your abdominal muscles wrap around the sides, and your back muscles and a big sheet of connective tissue close it off behind. When you take a breath in and tighten those walls, the pressure inside goes up, and that pressure makes the whole section stiffer. A full, sealed can is much harder to crush than an empty one. That is all bracing is. It works, and you already do it every time you pick up something heavy without thinking about it. Here’s the catch. The lid of that container is also the muscle you breathe with, so a hard brace is a held breath, and a held breath has a clock on it. That’s why holding your stomach tight all day is a bad idea. It doesn’t protect anything, it makes your breathing worse, and it keeps you tense for hours to buy something you only need for a few seconds. Brace hard when the load asks for it, then let it go. Now the discs. A disc isn’t a fragile little thing balanced between your bones. It’s bonded top and bottom to the vertebrae, and inside it’s a bit like a water-filled cushion inside a wound tyre wall. Nothing slips. When you load it, the fluid inside pressurises and spreads the load out, which is exactly what it’s designed for. Discs handle being squashed well. What they don’t love is a lot more than they’re used to, all at once, when you’re tired. That’s a programming question, and that’s my job. The honest answer on deadlifts is that the evidence doesn’t support the idea that lifting hurts backs when it’s built up sensibly. The loading itself is the thing that keeps a spine, and the muscles around it, strong as we get older. So let’s build it slowly, keep your breathing part of the plan, and if anything changes I want to hear about it that day, not next month.',
      rubric: [
        { id: 'apt502-u2-t1', text: 'Uses the container image accurately: diaphragm as lid, pelvic floor as base, abdominal wall and back as sides, with pressure producing stiffness rather than vague “support”' },
        { id: 'apt502-u2-t2', text: 'Names the breathing conflict explicitly, that a hard brace is a held breath, and uses it to explain why an all-day brace is the wrong dose' },
        { id: 'apt502-u2-t3', text: 'Describes the disc correctly: bonded to the vertebrae, fluid-filled and pressurising under load, spreading force; corrects the “slipping” image without lecturing' },
        { id: 'apt502-u2-t4', text: 'Frames risk as load, exposure and fatigue relative to what the tissue is used to, rather than as a posture that must never happen' },
        { id: 'apt502-u2-t5', text: 'Takes the client’s worry seriously, keeps the decision shared, and closes with a concrete plan and a clear trigger for reporting back' },
      ],
    },

    // 12 ── cumulative review ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u2-cumulative', role: 'cumulative', title: 'Pulling it together',
      questions: [
        { id: 'apt502-u2-cu1', kind: 'single', cognitive: 'analysis',
          prompt: 'The original transversus abdominis finding compared people who already had low back pain with people who did not, measuring muscle onset at one point in time. What can that design establish?',
          explanation: 'This is the study-design reasoning from APT 501 applied to a real and famous exercise-science example. Selecting people by outcome status and measuring exposure afterwards cannot establish direction.',
          options: [
            { id: 'a', text: 'An association between having pain and delayed onset, but not whether the delay came before the pain or resulted from it', correct: true },
            { id: 'b', text: 'That delayed onset causes low back pain, because the measurement was objective', correct: false, rationale: 'Objective measurement improves precision, not the direction of inference. The design still cannot order the two events in time.' },
            { id: 'c', text: 'Nothing at all, because it was not a randomized trial', correct: false, rationale: 'Overcorrection. The observation is real and generated a productive research programme. What it could not do was license the causal model built on it.' },
          ] },
        { id: 'apt502-u2-cu2', kind: 'single', cognitive: 'analysis',
          prompt: 'A meta-analysis compares stabilisation exercise with other active exercise for chronic low back pain and reports a mean difference of 0.4 points on a 0 to 10 pain scale, with a 95% confidence interval running from -0.5 to 1.3. How should you read it?',
          explanation: 'The interval spans zero, and its whole width sits below any plausible minimal important difference on a 0 to 10 pain scale, so the result is compatible with no meaningful advantage in either direction.',
          options: [
            { id: 'a', text: 'The estimate is small, the interval crosses zero, and even its upper end is below what a client would notice, which is consistent with the two approaches performing similarly', correct: true },
            { id: 'b', text: 'Stabilisation exercise is proven superior because the point estimate favours it', correct: false, rationale: 'A point estimate inside a wide interval that includes zero does not establish superiority, and “proven” is not a word this evidence licenses.' },
            { id: 'c', text: 'The result is meaningless because it is not statistically significant', correct: false, rationale: 'A precise interval that includes the null is informative: it tells you a large advantage has been ruled out. Non-significance is not the same as no information.' },
          ] },
        { id: 'apt502-u2-cu3', kind: 'single', cognitive: 'application',
          prompt: 'Applying the connective-tissue mechanics from APT 502.1: your client has sat in a flexed position for a two-hour drive and walks straight into a heavy hinge session. What is the relevant tissue behaviour?',
          options: [
            { id: 'a', text: 'Creep. Sustained flexion has lengthened the passive tissues behind the spine and driven fluid from the discs, so their contribution to end-range restraint is temporarily reduced', correct: true, rationale: 'Viscoelastic creep under sustained load, exactly as described for collagenous tissue, with the disc losing height and the structures behind losing some passive tension.' },
            { id: 'b', text: 'Hysteresis. The tissue has absorbed energy and become stronger', correct: false, rationale: 'Hysteresis describes energy lost between the loading and unloading curves. It does not make tissue stronger.' },
            { id: 'c', text: 'Nothing measurable, because connective tissue does not respond to sustained positions', correct: false, rationale: 'Deformation over time under sustained load is one of the defining properties of these tissues.' },
          ] },
        { id: 'apt502-u2-cu4', kind: 'single', cognitive: 'recall',
          prompt: 'Using the anatomical language from APT 502.1, how would you describe the angle of the lumbar facet surfaces and what follows from it?',
          options: [
            { id: 'a', text: 'Close to the sagittal plane, allowing motion about a side-to-side axis (bending forward and back) while blocking motion about a vertical axis (turning)', correct: true },
            { id: 'b', text: 'Close to the frontal plane, allowing turning and limiting bending forward', correct: false, rationale: 'That describes the thoracic region, where facets sit at roughly sixty degrees from horizontal and nearer the frontal plane.' },
            { id: 'c', text: 'Close to the transverse plane, allowing free motion in all three planes', correct: false, rationale: 'Facet surfaces lying in the transverse plane would allow turning freely, which is the opposite of what the lumbar spine does.' },
          ] },
        { id: 'apt502-u2-cu5', kind: 'single', cognitive: 'synthesis',
          prompt: 'A client returns with an imaging report noting disc degeneration, and her physiotherapist has cleared her for progressive loading with no specific restrictions. Which order of reasoning reflects professional practice?',
          explanation: 'Scope and the referring clinician frame the decision. Appraisal of the anatomy and evidence fills it in. The client’s own response to load, not the report, guides progression. Documentation closes it.',
          options: [
            { id: 'a', text: 'Confirm the clearance and that the decision sits inside your scope, appraise what the imaging finding does and does not indicate, plan progression from her response to load, agree it with her, and document', correct: true },
            { id: 'b', text: 'Use the report to set permanent movement restrictions, since the imaging is objective evidence', correct: false, rationale: 'Imaging findings of this kind are common in pain-free people and do not authorise a training ban. Objective is not the same as informative for this decision.' },
            { id: 'c', text: 'Ignore the report and the clearance entirely, since research shows imaging findings are common', correct: false, rationale: 'Population-level evidence does not remove the individual clinician from the loop. Collaboration means reading the clearance and working within it, not discarding it.' },
          ] },
        ],
    },
  ],
};
