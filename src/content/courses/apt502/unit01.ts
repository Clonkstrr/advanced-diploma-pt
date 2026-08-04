import type { Unit } from '../../../types/content';

export const unit01: Unit = {
  id: 'apt502-u1',
  code: 'APT 502.1',
  title: 'Anatomical Language, Tissue Architecture and Joint Mechanics',
  summary:
    'The coordinate system anatomy runs on, how each tissue behaves under load and how fast it can adapt, and why a muscle’s action is a piece of geometry that changes as the joint moves.',
  qc: {
    sources: [
      { citation: 'Neumann DA — Kinesiology of the Musculoskeletal System: Foundations for Rehabilitation, 3rd ed. Elsevier', year: 2017, evidenceType: 'Textbook', verified: false },
      { citation: 'Standring S (ed) — Gray’s Anatomy: The Anatomical Basis of Clinical Practice, 42nd ed. Elsevier', year: 2020, evidenceType: 'Textbook', verified: false },
      { citation: 'Nordin M, Frankel VH — Basic Biomechanics of the Musculoskeletal System, 4th ed. Lippincott Williams & Wilkins', year: 2012, evidenceType: 'Textbook', verified: false },
      { citation: 'Lieber RL — Skeletal Muscle Structure, Function, and Plasticity: The Physiological Basis of Rehabilitation, 3rd ed. Lippincott Williams & Wilkins', year: 2010, evidenceType: 'Textbook', verified: false },
      { citation: 'Lieber RL, Fridén J — Functional and clinical significance of skeletal muscle architecture. Muscle & Nerve 2000;23(11):1647–1666', year: 2000, evidenceType: 'Narrative review', verified: false },
      { citation: 'Heinemeier KM, Schjerling P, Heinemeier J, Magnusson SP, Kjaer M — Lack of tissue renewal in human adult Achilles tendon is revealed by nuclear bomb 14C. FASEB Journal 2013;27(5):2074–2079', year: 2013, evidenceType: 'Primary research', verified: false },
      { citation: 'Wilke J, Krause F, Vogt L, Banzer W — What is evidence-based about myofascial chains? A systematic review. Archives of Physical Medicine and Rehabilitation 2016;97(3):454–461', year: 2016, evidenceType: 'Systematic review', verified: false },
      { citation: 'Stecco C — Functional Atlas of the Human Fascial System. Churchill Livingstone/Elsevier', year: 2015, evidenceType: 'Textbook / anatomical atlas', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-08-03',
    reviewBy: '2027-08-03',
    controversies:
      'Several live disagreements sit inside this unit. Whether the cos θ term belongs inside the PCSA formula, or should instead be applied separately when fibre force is converted to tendon force, has never been settled. That means PCSA values from different laboratories are not always comparable. Resting pennation angle is widely reported as though it were a fixed property, when in fact the fibres rotate during contraction and the angle changes with joint position. Whether long-term stretching lengthens tissue, or only raises how much stretch a person will tolerate, is still argued; the stretch-tolerance explanation is currently better supported, and it is the only supported explanation for acute change. The fascia literature splits into a well-evidenced core (innervation, sideways force transmission, gliding between layers) and commercial claims about "releasing" dense fascia or treating myofascial chains as end-to-end pulley systems, which the systematic evidence does not support in full. The classical joint categories also leak. Whether the first carpometacarpal joint has two degrees of freedom or three turns on how the obligatory conjunct rotation gets scored, and the rotational action of the hip adductors is genuinely disputed between electromyographic and modelling studies.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u1-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt502-u1-p1', kind: 'single', cognitive: 'application',
          prompt: 'A colleague calls the back squat “a sagittal plane exercise”. What is that label actually claiming?',
          options: [
            { id: 'a', text: 'That every joint in the chain turns about a side-to-side axis with no meaningful motion in the other two planes. That claim fails at the hip, the knee and the ankle in any deep squat', correct: true, rationale: 'The label is a statement about every joint in the chain. The thigh bone moves out to the side and turns outward as the hip bends, the knee carries rotation it cannot avoid, and the ankle axis runs at a slant.' },
            { id: 'b', text: 'That the barbell travels in a vertical line', correct: false, rationale: 'Bar path describes an object moving through the room. Planes of motion are defined on the body, joint by joint.' },
            { id: 'c', text: 'Nothing you could argue with. It is simply the standard name for the movement', correct: false, rationale: 'The label makes a mechanical claim about every joint in the chain, and it holds only roughly.' },
          ] },
        { id: 'apt502-u1-p2', kind: 'single', cognitive: 'recall',
          prompt: 'What does the toe region of a tendon’s force against stretch curve represent?',
          options: [
            { id: 'a', text: 'The wavy resting pattern in the collagen being pulled straight, so the first bit of stretch costs very little force', correct: true, rationale: 'Straightening the crimp is why the first one to three per cent of stretch is cheap. The straight part of the line that follows is where the fibres themselves are stretched.' },
            { id: 'b', text: 'The part where collagen fibres begin to tear', correct: false, rationale: 'Microscopic failure sits well past the toe and linear regions, at much greater stretch.' },
            { id: 'c', text: 'The point at which the tendon behaves as a perfect spring', correct: false, rationale: 'Tendon is never a perfect spring. It is viscoelastic, so its response depends on how fast and how long you load it.' },
          ] },
        { id: 'apt502-u1-p3', kind: 'single', cognitive: 'analysis',
          prompt: 'An app lists adductor longus as “hip adductor, hip flexor”. Your client is at the bottom of a deep hip hinge, hips bent well past 90°. What is the most defensible statement?',
          options: [
            { id: 'a', text: 'In that position its line of pull may sit on the extensor side of the hip’s side-to-side axis, so it can help extend the hip', correct: true, rationale: 'Action is set by which side of the joint axis the line of pull passes. Bend the hip far enough and the attachment on the thigh bone swings forward until the line crosses over.' },
            { id: 'b', text: 'It is still a flexor. Muscle actions do not change', correct: false, rationale: 'They change whenever the geometry does, and deep hip flexion changes the geometry a great deal.' },
            { id: 'c', text: 'It produces no turning effect at the hip in that position because it is fully shortened', correct: false, rationale: 'Length sets how much force is available. The direction of the turning effect comes from the moment arm, and here the moment arm still points the same way.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt502-u1-outcomes',
      outcomes: [
        { level: 'recall', text: 'Define the anatomical position and the three cardinal planes with the axis that belongs to each, and state the mechanical property that separates bone, articular cartilage, ligament, tendon, fascia and skeletal muscle.' },
        { level: 'application', text: 'Describe a movement accurately in plane and axis language, joint by joint, and predict how many directions a synovial joint can move from the shape of its surfaces.' },
        { level: 'analysis', text: 'Explain how fibre direction, the toe region and viscoelasticity shape each tissue’s response to load and how fast it can adapt, and how a slanted fibre arrangement trades range for force.' },
        { level: 'synthesis', text: 'Work out a muscle’s action at a stated joint position from its line of pull relative to the joint axis, and defend that reasoning against the fixed action printed in a chart.' },
      ],
    },

    // 3 ── core instruction (five concept blocks) ────────────────────────────
    {
      type: 'concept', id: 'apt502-u1-c1', heading: 'The coordinate system every direction word is anchored to',
      body:
        'A new client hands you a screening report from a clinic she saw eighteen months ago. Under “findings” it says: poor frontal plane control, sagittal plane dominant. She wants to know what that means and whether it is bad. You have thirty seconds to decide whether that sentence carries information or is decoration. To answer you have to know what those words are measured from, and the starting point is a posture so exact that it specifies which way the palms face.\n\n' +
        '## Why the palms face forward\n\n' +
        'The **anatomical position** is standing upright, feet forward and slightly apart, arms at the sides, palms facing forward, fingers straight, eyes level. Every direction word in anatomy is measured from that posture, whatever posture your client is in now. The palms are the detail people skim, and the one that shows why the convention exists. With the palm forward the two forearm bones lie parallel, so “medial at the forearm” means the little-finger side permanently, whatever she later does with her hand. Define the words palm-down instead and the radius crosses over the ulna, so medial and lateral would swap along the forearm depending on when you looked. The same logic explains the odd ones. Dorsal means the back of the hand and the top of the foot, because the limb bud twisted as it grew and the words twisted with the tissue.\n\n' +
        '## A plane and its axis, always paired\n\n' +
        'Three **cardinal planes** cut the body in that position, and cardinal means the cut passes through its centre of mass. The **sagittal plane** splits left from right, the **frontal plane** (also called coronal) splits front from back, and the **transverse plane** splits top from bottom. Movement in a plane is a turn about an axis, and the axis stands at right angles to the plane it serves.\n\n' +
        'Each pairing carries its own movement words, and those words are worth learning properly, because every chart, every diagram and every letter from a physiotherapist uses them. Sagittal motion turns about a mediolateral axis, one running side to side, and its movements are **flexion** and **extension**: bending a part and straightening it again. Frontal motion turns about an anteroposterior axis, one running front to back, and its movements are **abduction** and **adduction**, taking a part away from the midline and bringing it back toward it, along with side bending of the trunk and neck, which anatomists call lateral flexion. Transverse motion turns about a vertical axis, one running up through the length of the part, and its movement is **rotation**, turning a part about its own long axis. At a limb, medial rotation turns its front surface toward the midline and lateral rotation turns it away. At the forearm that same rotation carries two names of its own: pronation for turning the palm down, supination for turning it up.\n\n' +
        'Hold each plane to its own axis and you will never write “flexion in the frontal plane about a mediolateral axis” on an assessment sheet. I have read that sentence on more than one professional document.\n\n' +
        '> Key idea: an axis always stands at right angles to its own plane. It never lies inside it.\n\n' +
        '## The label belongs to a joint, not the room\n\n' +
        'Almost nothing you coach happens in a cardinal plane, and the plane belongs to the body part rather than to the room it moves through. Put a client in a split stance with her pelvis turned thirty degrees and “sagittal” becomes a question you ask twice, once for the trunk and once for the thigh, and the two answers differ. A leg raise done lying on her back is still sagittal plane hip flexion even though the limb sweeps up through the room. Name a plane without naming a joint and you are describing the room.\n\n' +
        'So take the back squat, and the label “sagittal plane exercise”. It claims the hips and knees bend and straighten about side-to-side axes and that nothing much happens elsewhere. Watch the thigh bone. In any squat much below parallel the hip moves out to the side and turns outward as it bends, so its head is not rolling about one fixed axis. The knee carries a small twist it cannot avoid, which is why it is called a modified hinge. The ankle axis runs at a slant between the two bony bumps, so what you call dorsiflexion already arrives with small side-to-side and rotational components. The label is a claim about every joint in the chain, and at most of them it is false. What people mean, and what is honest to say, is that the biggest movement is sagittal. That is a perfectly good sentence. Trouble starts when the label gets treated as a measurement and someone builds “she needs more frontal plane work” on top of it.\n\n' +
        'Two more reasons to hold this vocabulary loosely. A joint axis is not a rod driven through bone. It shifts as the joint travels, which is why biomechanists talk about the **instantaneous axis of rotation**, and why the tidy pin in a textbook figure is an average of a moving thing. And large three-dimensional turns do not add up the way numbers do. Take an arm out to the side ninety degrees then forward ninety degrees, then run the same two moves in the other order, and the hand finishes somewhere different. Once a movement leaves the small, single-plane case, planes become a shorthand rather than a description. Use them the way an engineer uses a simplified sketch: a deliberate simplification whose limits you can state out loud. So what do you tell your client? Roughly this. Someone thought she controlled side-to-side motion less well than forward-and-back motion. That may be a real observation, but as written it names no joint, no task and no measurement, so you are going to go and look at her yourself.',
    },

    // 3a ── visual: planes and their axes ────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u1-visual-planes',
      title: 'Every plane and the one axis that belongs to it',
      diagramId: 'tissue-plane-axis-pairs',
      caption:
        'The three cardinal planes drawn beside the axis each one turns about, so you can see why the axis has to stand at right angles to its plane rather than lie inside it.',
      callouts: [
        { id: 'apt502-u1-vp1', label: '1', text: 'The shaded sheet is the plane. The solid rod is its axis. The dot marks the one point where the rod passes through the sheet, which is the whole geometric relationship in a single picture.' },
        { id: 'apt502-u1-vp2', label: '2', text: 'Read each panel as a pair, not as two facts. Sagittal goes with mediolateral, frontal with anteroposterior, transverse with vertical. Pairs are far harder to mix up than six separate words.' },
        { id: 'apt502-u1-vp3', label: '3', text: 'The bottom line shows the mistake this picture prevents. “Frontal plane about a mediolateral axis” names an axis that lies flat inside the frontal sheet, so nothing could turn about it.' },
        { id: 'apt502-u1-vp4', label: '4', text: 'The body drawn in each panel is standing in the anatomical position, because that is the posture all of this is measured from. Your client on the gym floor almost never matches it, and the words still apply.' },
      ],
    },

    {
      type: 'concept', id: 'apt502-u1-c2', heading: 'Four materials, four jobs, four clocks',
      body:
        'Eleven weeks into a block your client has added forty kilos to her deadlift, everything feels excellent, and a spot at the front of her knee is now sore for the first hour of every morning and fine by the time she trains. Nothing in the programme was reckless. Her muscle kept up beautifully. Something else did not. The reason is that these tissues do not run on the same clock.\n\n' +
        '## Bone: stiff mineral, tough collagen\n\n' +
        'Bone is a composite, and the pairing is the point. The mineral, a calcium phosphate called carbonated hydroxyapatite, supplies stiffness and strength against being squashed. The type I collagen woven through it supplies toughness, so bone soaks up energy and bends a little before it breaks. Strip out either one in a laboratory and you get chalk, or you get rubber. Direction matters too. Bone is strongest against compression along its own long axis, weaker in tension, weakest against twisting, which is why a hard twist breaks a long bone in a spiral. Living bone is taken apart and rebuilt continuously, and the grown-up version of Wolff’s law is about how big the strain is, how fast it arrives and how it is spread, which is far more particular than the cartoon where bone thickens wherever you load it. One rebuilding cycle takes months, and that sets the clock: bone answers over months and years, and loudest to unfamiliar, fast-arriving strain.\n\n' +
        '## Cartilage is fed by being squeezed\n\n' +
        '**Articular cartilage**, the smooth covering on the bone ends inside a joint, works completely differently. It is two things at once: a type II collagen mesh in arches, anchored upright into bone at depth and lying flat at the surface, holding a molecule called aggrecan that pulls water in. Load it and the force is carried first by pressurised fluid, not by the solid mesh. Then fluid seeps out and the tissue slowly squashes down. Cartilage has no blood supply and no nerves. It feeds on the fluid exchange that loading and unloading drives, which is a mechanically honest reason to keep a client moving through range and lets you retire the vague one about lubricating joints. What it tolerates worst is being squashed and held. What it is built for is repeated moderate cycles.\n\n' +
        '## Rope, strap, and the curve they share\n\n' +
        'Tendon and ligament are both dense type I collagen, and their fibre layouts follow their jobs. A tendon pulls one way, so its fibres run nearly parallel in bundles and almost every fibre answers the same pull. Picture a rope. A ligament holds a joint in check across a whole range of positions, so its bundles are less uniformly lined up, partly woven through each other, and different parts come tight at different joint angles. Picture a strap made of several bands. That is why the anterior cruciate behaves like two working bundles rather than one cable, and why any single clinical test loads only part of a ligament.\n\n' +
        'Pull a tendon and plot force against stretch. The first stretch is cheap: at rest the collagen sits in a wavy pattern called crimp, and roughly the first one and a half to three per cent of stretch mostly pulls those waves straight. That is the **toe region**, and it is why a tendon is not a rigid rod at the start of a movement. Past it the line straightens into the **linear region**, where the fibres themselves stretch, and its steepness is stiffness, the property training actually changes. Beyond about four to six per cent you are into microscopic failure, and near eight to ten per cent it ruptures. Those figures vary by tendon, by study and by testing method, so carry them as rough magnitudes rather than thresholds.\n\n' +
        'All of these tissues are **viscoelastic**: their behaviour depends on time as well as load. Pull quickly and they are stiffer than if you pull slowly, so how fast you load can matter more than how much. Hold a steady pull and the tissue slowly lengthens: creep. Hold a steady length and the force inside fades: stress relaxation. Load then unload and the return path sits below the loading path, the difference lost as heat: hysteresis. So the honest description of a three-minute hamstring stretch is some creep, which reverses over minutes, plus something more important: you changed how much stretch your client will put up with, and that is a nervous system change. Whether repeated stretching produces real lasting lengthening in living people is still argued. The strong version is not well supported, and the immediate version is not supported at all.\n\n' +
        '## Four clocks, one sore knee\n\n' +
        'Muscle is the fast tissue: it starts building protein within hours and changes measurably in weeks. Tendon is the slow one, and the evidence for how slow is remarkable. Atmospheric nuclear testing in the 1950s and 60s left a spike of carbon-14 in the air that date-stamps any tissue laid down at the time. Heinemeier and colleagues went looking for it in adult human Achilles tendon and found the collagen core was essentially as old as the person: laid down by about age seventeen and barely renewed after. Tendon does adapt. It changes stiffness, it can change thickness, and newer tissue near its surface turns over. But it does not move at muscle speed, and that mismatch is the mechanical story behind your client’s knee. Her quadriceps could produce more force in week nine than in week one; the tendon carrying that force had not caught up. You cannot prove that is what happened inside her knee, and you do not need to, because it already changes the arithmetic of the next block.\n\n' +
        '> Key idea: the ceiling on how fast you add load belongs to the slowest tissue in the chain, and the slowest tissue is never the one giving you the good news.',
    },

    // 3b ── visual: how tissue answers load ──────────────────────────────────
    {
      type: 'visual', id: 'apt502-u1-visual-tissue',
      title: 'How tendon and ligament answer to load',
      diagramId: 'tissue-load-curve',
      caption:
        'The force against stretch curve with its toe region, straight region and failure point, plus the three time-dependent behaviours that make these tissues feel different depending on how you load them.',
      callouts: [
        { id: 'apt502-u1-vt1', label: '1', text: 'The shallow start is the answer to a question clients ask constantly: why does a stretch feel like nothing and then suddenly like a wall? The wavy collagen is being pulled straight first. Only then do the fibres take load.' },
        { id: 'apt502-u1-vt2', label: '2', text: 'The straight middle section is the part you can train. Its steepness is stiffness. Nothing you do moves the toe region much, and nothing you do should take a tissue near the right-hand end of the graph.' },
        { id: 'apt502-u1-vt3', label: '3', text: 'The curve bends over before it breaks. That flattening is fibres failing a few at a time, which is why a tendon can be damaged well before anything snaps and well before it hurts.' },
        { id: 'apt502-u1-vt4', label: '4', text: 'The three shapes in band B are one property seen from three angles. Ask for a fixed pull and you get creep. Ask for a fixed length and you get stress relaxation. Ask for both in turn and you see the energy lost as heat.' },
      ],
    },

    {
      type: 'concept', id: 'apt502-u1-c3', heading: 'Fascia: the established core and the marketing around it',
      body:
        'There is a laminated poster in the corner of your gym showing a body wrapped in glowing lines, and a colleague back from a weekend course talking about releasing the superficial back line. One of your clients has started asking whether her tight hamstrings are “really a fascia problem”. Here the anatomy is genuinely interesting and the commerce has run some distance ahead of it. Separating the two is worth the effort, because the dismissive answer and the enthusiastic answer are both wrong.\n\n' +
        '## Which fascia does she mean?\n\n' +
        'Start with the word, which is less settled than you would expect. Anatomists have traditionally used fascia for the sheets you can dissect out. **Superficial fascia** is the loose, fat-bearing layer under the skin carrying the small vessels and nerves that run to it. **Deep fascia** is the dense sheeting further in: the fascia lata down the outside of the thigh, the crural fascia around the shin, the thoracolumbar fascia across the low back. Other authors use fascia for every piece of collagen-based connective tissue in the body, including the wrappings around and inside a muscle, joint capsules and organ coverings. A naming committee proposed formal definitions in the last decade and they have not taken. So when somebody says fascia, ask which fascia. The fascia lata behaves like a strap; the loose tissue that lets your skin slide over it is a different material doing a different job.\n\n' +
        '## What is solidly known\n\n' +
        'Fascia is supplied with nerves, densely so in places. The thoracolumbar fascia carries a high density of free nerve endings, including ones that signal pain, which makes it a plausible source of sensation and of pain in its own right. Force does not stay inside one muscle either. Fibres do not all run tendon to tendon, and load can pass sideways through the wrappings between fibres and through connections into neighbouring structures. That is **myofascial force transmission**, shown most convincingly in animal preparations, with a smaller and more indirect body of human work behind it. Layers also slide on one another, and that sliding depends on a slippery hyaluronan-rich layer between them, so its condition is a credible mechanism for stiffness that changes with immobility or inflammation. And the gross continuities are real: the thoracolumbar fascia genuinely receives latissimus dorsi on one side and gluteus maximus on the other. Nobody invented the connections.\n\n' +
        '## Where the chains stop being anatomy\n\n' +
        'What outruns the evidence is what gets built on top. The strong version of the **myofascial chain** claim is that these continuities form working lines carrying tension end to end, so tissue at the foot meaningfully influences the neck. Wilke and colleagues took six of the most commonly taught chains and searched the dissection literature for every anatomical join each one requires. Three of the six came through intact: every join in the superficial back line and in both functional lines was verified by consistent dissection findings. The spiral line was verified at five joins of six, the lateral line at two of five. Only the superficial front line had nothing behind it. The anatomy is in better shape than the sceptical retelling suggests, and saying so plainly puts the real objection where it bites. A verified join still only tells you two structures are continuous. That meaningful force travels the whole line during movement, and that treating one end changes the other, are separate claims needing their own evidence.\n\n' +
        '> Key idea: continuity is anatomy, transmission is mechanics, and clinical transfer is a third thing again. Proving the first says nothing about the other two.\n\n' +
        'The release claim asks even more. The idea that a hand or a foam roller melts, releases or breaks up fascia runs straight into the stiffness of the tissue being described. Modelling work on dense fascia such as the iliotibial band puts the forces needed for lasting permanent change far outside anything manual pressure delivers, and permanently deforming a load-bearing sheet would not have improved that client’s week anyway. What rolling reliably does is well documented and worth having: a short-lived increase in range of motion, measured in minutes rather than hours, and less perceived soreness, without the drop in force output a long static stretch can produce. The time course, and the fact that rolling one leg often improves range in the other, both point at a nervous system mechanism rather than a structural one.\n\n' +
        '## What to say on Monday\n\n' +
        'Roll if she likes it, keep it short, put it in the warm-up where it costs her no training time, and describe it accurately. It will probably feel better and move a bit more freely for a while, and that is a reasonable thing to want. Do not sell it as structural change, and do not diagnose an adhesion by feel, because agreement between practitioners on that judgement is poor and you will be confidently wrong in front of someone who trusts you. The deeper reason to care is that the fascia story is seductive precisely because it explains everything: tight hamstrings, a sore shoulder, poor sleep. An explanation that fits every case predicts nothing. The evidenced parts are more interesting anyway. Force leaks sideways out of muscles, connective tissue is a sensory organ, and the tidy one-muscle-one-line-of-pull model you are about to use for the rest of this unit is an approximation you should hold with an open hand.',
    },

    {
      type: 'concept', id: 'apt502-u1-c4', heading: 'Joint classification as a mechanical claim',
      body:
        'You memorised the joint table once for an exam. Fibrous, cartilaginous, synovial. Hinge, pivot, saddle, ball-and-socket. Then you never used it again, because “the hip is a ball-and-socket joint” does not tell you what to do on Tuesday. It becomes useful the moment you read each name as a prediction. Every category is a claim about how many independent ways two bones can move on each other, about what stops them, and about what happens when somebody asks for a motion the shape will not give.\n\n' +
        '## What sits between the bones\n\n' +
        'The structural scheme sorts joints by the material in the gap. **Fibrous joints** are held by dense connective tissue with no joint cavity: the sutures of the skull, built to be immobile and slowly turning to bone with age; a gomphosis, the peg-in-socket of a tooth; and a **syndesmosis**, where a ligament or membrane separates two bones that still have to move slightly on each other. The one at the bottom of the shin should matter to you, because that “immobile” joint has to spread a millimetre or two as the wider front of the talus, the bone the shin stands on, enters the ankle in dorsiflexion, which is the foot pulling up toward the shin. A joint that permits almost no motion can still be the reason an ankle works.\n\n' +
        '**Cartilaginous joints** come in two kinds. A synchondrosis is joined by hyaline cartilage, which is what a growth plate and the first rib joint are. A symphysis is joined by fibrocartilage, which is what the pubic symphysis and the joints between vertebral bodies are. Symphyses trade range for load sharing, exactly what a stack of vertebral bodies needs.\n\n' +
        '**Synovial joints** have a fluid-filled cavity between two cartilage-covered surfaces inside a capsule, and almost everything you coach happens at them.\n\n' +
        'A second scheme sorts joints by how much they move rather than by what fills the gap. A **synarthrosis** barely moves at all, an **amphiarthrosis** moves a little, and a **diarthrosis** moves freely. The two schemes cross each other rather than line up. Every synovial joint is a diarthrosis, but fibrous and cartilaginous joints each split across the other two grades: a skull suture and a growth plate barely move, while the syndesmosis above the ankle and the pubic symphysis both move a little. Knowing the material in the gap therefore does not on its own tell you how much motion to expect.\n\n' +
        '## Shape sets the number of axes\n\n' +
        'For a synovial joint, the shape of the surfaces sets the **degrees of freedom**: the number of independent axes the bones can turn about. Two shapes give one axis. A hinge is a spool in a groove, and the elbow between humerus and ulna is the clean example. One axis, and a slightly slanted one, because the spool is not symmetrical; that slant is where the carrying angle comes from. A pivot is a round peg turning in a ring: the upper joint between the two forearm bones, and the joint between the first two neck vertebrae, where roughly half of all neck rotation happens. One axis each.\n\n' +
        'Two more shapes give two axes. A condyloid or ellipsoid joint puts an oval bump into an oval dish, and the oval is exactly what forbids independent spin, so you get flexion and extension paired with abduction and adduction: bending and straightening, and moving out to the side and back. The wrist and the knuckles work that way. A saddle joint has each surface curving one way in one direction and the opposite way in the other. The joint at the base of the thumb is the classic: two axes you can drive independently, plus a twist that comes along for the ride whenever the thumb sweeps across, which is why opposition is a combination move rather than a third axis. Some texts count three, and that argument is bookkeeping. Both sides are watching the same thumb do the same thing.\n\n' +
        'One shape gives three axes. A ball-and-socket joint adds rotation to the other two, and the shoulder and the hip share that category with opposite design philosophies: the shoulder socket covers only a small fraction of the ball, while the hip socket is deep and made deeper still by a rim of fibrocartilage. Same three axes, entirely different way of staying together, which is why one is defended mostly by muscle and the other mostly by bone.\n\n' +
        '## What actually stops the movement\n\n' +
        'What stops a joint at the end of its range is a separate question from what shape it is, and the answer changes by joint and by position. Sometimes it is bone hitting bone, as at the back of the elbow in full extension. Sometimes it is tension in the capsule and ligaments, or passive tension in the muscles crossing the joint, or soft tissue simply running into soft tissue. Joints also have a close-packed position, where the surfaces fit together most tightly and the ligaments are pulled tautest. That position is the most stable and the least forgiving. In loose-packed positions there is more play inside the joint. So the position you choose to load somebody in changes what the passive structures are doing before you add a single kilo.\n\n' +
        'Three qualifications keep the scheme honest. First, the axes you can drive on purpose are not the whole motion. Every synovial joint also rolls, glides and spins internally in small amounts that must happen for full range but cannot be performed on their own, which is why joint range and joint mobility are not the same word. Second, no joint has a fixed axis; it shifts as the bones travel, so the neat pin in a textbook figure is an average. Third, the categories leak. The knee is called a hinge and carries a twist it cannot avoid. The ankle is called a hinge and sits on a slanted axis. Useful lies, all of them, provided you know they are lies.\n\n' +
        '## When a client gains range\n\n' +
        'Here is the payoff. When a client “gains range”, one of a short list of things has changed: how well she tolerates the sensation at the end of range, the passive tension of the muscles crossing the joint, the give in the capsule over a long timescale, her motor control of the task, or an adjacent segment quietly contributing more. What has almost certainly not changed is the shape of her bones.\n\n' +
        '> Key idea: no drill adds a degree of freedom to a joint whose surfaces forbid it. When a range gain looks too big and too fast, the first honest guess is that something next door moved more.',
    },

    // 4a ── visual: shape and degrees of freedom ─────────────────────────────
    {
      type: 'visual', id: 'apt502-u1-visual-joints',
      title: 'Shape predicts how many directions a joint can move',
      diagramId: 'tissue-joint-freedom',
      caption:
        'One column for each number of independent axes, with the surface shapes that produce it, the movements it buys, real joints that use it, and the three qualifications that stop the picture being taken too literally.',
      callouts: [
        { id: 'apt502-u1-vj1', label: '1', text: 'Read the rods at the top of each column first. They are the actual claim the classification makes: this many independent directions, no more, whatever anyone drills.' },
        { id: 'apt502-u1-vj2', label: '2', text: 'The oval in the middle column is doing the work. An oval bump cannot spin inside an oval dish without jamming, so the shape itself is what removes the third axis at the wrist and the knuckles.' },
        { id: 'apt502-u1-vj3', label: '3', text: 'The two sockets on the right hold the most useful comparison in the unit. Identical degrees of freedom, opposite designs. The shoulder buys range by giving up bony cover, the hip buys security by keeping it.' },
        { id: 'apt502-u1-vj4', label: '4', text: 'The three notes at the bottom are not small print. Roll, glide and spin never count as degrees of freedom, no axis holds still, and both hinges named here quietly break the rule they are filed under.' },
      ],
    },

    {
      type: 'concept', id: 'apt502-u1-c5', heading: 'Architecture and lines of pull: why a chart cannot tell you what a muscle does',
      body:
        'You learned the tables. Origin, insertion, action, in three columns, and they got you through the exam. They also taught you something false: that a muscle has an action the way a screwdriver has a size. It does not. A muscle has a line of pull, and an action is what that line produces at one joint, in one position, at one instant. Two ideas take you from the table to the mechanics: architecture sets what force the muscle can make and over what range, and moment arm sets what that force does to the joint.\n\n' +
        '## Length or numbers, pick one\n\n' +
        'Start inside the muscle. A fibre’s length is essentially the number of contractile units joined end to end along it, and that number decides how far the fibre can shorten and how fast, because the shortening speeds of units in a chain add up. Fibres side by side add force instead. So length buys range and speed, fibre count buys force, and a muscle of fixed volume must choose. Sartorius, the long strap crossing the thigh, chose length: very long fibres, a small cross-section, a huge range of shortening, a modest force. Soleus, deep in the calf, chose the opposite: fibres a few centimetres long, an enormous number of them side by side, very high force, small range. Neither is better designed. They answer different questions.\n\n' +
        'One more property belongs to the fibre itself, and it is easy to miss because it has nothing to do with architecture. A contractile unit only pulls hard when its two sets of filaments overlap by the right amount, so a fibre makes its greatest force at a middling length, less when it is bunched up short, and less again when it is stretched long. That is the **length-tension relationship**, and it is why the same muscle can feel strong at one joint angle and weak at another before leverage has even been considered.\n\n' +
        'The measurement that tracks force capacity is **physiological cross-sectional area**: the total cross-section of all the fibres, cut at right angles to the fibres themselves. Anatomical cross-sectional area is a single cut straight across the belly. When fibres run in line with the tendon the two are close. When the fibres are slanted they come apart badly, and the physiological figure can be several times the anatomical one. The slant is how: angle the fibres and far more of them attach along the same length of tendon, stacked along a sheet of tendon rather than running end to end. Anatomists call that slant the **pennation angle**. The usual estimate is muscle volume times the cosine of the pennation angle, divided by fibre length. Whether that cosine belongs inside the formula, or should be applied separately when fibre force becomes tendon force, has never been settled, and laboratories differ, so numbers from different papers are not always comparable.\n\n' +
        '## What the slant costs and buys\n\n' +
        'Slanting the fibres costs two things. Along the tendon you receive only the fibre’s force multiplied by the cosine of the angle, and you lose range of shortening because the fibres are short. The cosine is a small tax: at twenty degrees you keep ninety-four per cent of the force, at thirty degrees eighty-seven, and human resting angles mostly sit under thirty degrees, while the gain in fibre number is often more than double. The trade is lopsided in favour of the slant, which is why so many muscles use it. The real price is range and speed, because short fibres shorten less in absolute terms and cannot shorten as quickly.\n\n' +
        'Two footnotes the popular summaries flatten. Resting pennation angle gets quoted as though it were a fixed property, and it is a snapshot. As a muscle shortens and contracts the fibres rotate to steeper angles, and that rotation acts as a variable gear, letting the whole belly shorten faster than its own fibres do. And architecture is trainable. Pennation angle tends to rise as a muscle grows, and fibre bundle length shifts with the type of loading, though how large and how durable those changes are is argued over far harder than the infographics admit.\n\n' +
        '## Force is not what the joint feels\n\n' +
        'Now the second half, because force is not what a joint feels. Turning effect is. The turning effect a muscle produces about a joint equals its force multiplied by its **moment arm**, the shortest distance from the joint axis across to the line of pull. Two things follow. A muscle with a small moment arm and a large cross-section can out-turn a muscle with the opposite profile, or fail to, depending entirely on the position, so you cannot rank muscles by size. And moment arms change through the range, which is most of the reason strength curves are curves. Your client may not be weak at the bottom of a lift at all. She may be sitting where the resistance has its longest moment arm and she has one of her shortest.\n\n' +
        '## The action can flip\n\n' +
        'The sharpest consequence is that whether a muscle bends or straightens a joint is set by which side of the joint axis its line of pull passes, and moving the joint far enough can carry that line across. Adductor longus is the standard demonstration. With the hip near straight, its line from the pubic bone to the back of the thigh bone passes in front of the hip’s side-to-side axis, so it helps bend the hip. Bend the hip past roughly sixty degrees and the attachment on the thigh bone has swung forward far enough that the same line now passes behind the axis, so the same contraction helps straighten the hip. Nothing about the muscle changed. The geometry did. The crossover angle varies between people and between the individual adductors, and the rotational action of these muscles is genuinely disputed: some studies make adductor longus a medial rotator, others a lateral rotator, probably depending on hip position. That is not the field being sloppy. It is what happens when three-dimensional geometry gets described with two-dimensional words.\n\n' +
        'So read the chart as what it is: a description of what a muscle does in the anatomical position, with the far end of the limb free to move, considered one joint at a time. Every one of those conditions is routinely false on a gym floor. What happens when the far end is fixed instead, and how muscles share work along a chain, belongs to 502.5. The habit worth building here takes ten seconds. Run it on the next three muscles you would have looked up, and count how many printed actions survive a position anybody actually trains in.\n\n' +
        '> Key idea: before you claim a muscle does something in a position, put the joint axis into the picture and see which side of it the line of pull falls on.',
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u1-visual',
      title: 'Architecture, pennation and the line of pull',
      diagramId: 'muscle-architecture',
      caption:
        'Four fibre arrangements between the same two tendons, what the slant of the fibres costs and buys, and the geometric reason a muscle’s action changes when the joint moves.',
      callouts: [
        { id: 'apt502-u1-v1', label: '1', text: 'Left to right in panel A, fibres get shorter and more numerous at the same muscle volume. That is the whole design decision: force is bought with range of shortening, and range is bought with force.' },
        { id: 'apt502-u1-v2', label: '2', text: 'Cut “a” is anatomical cross-sectional area, one slice across the belly. Cut “p” is physiological cross-sectional area, taken across the fibres. In a slanted muscle they are not close, and only “p” tracks force capacity.' },
        { id: 'apt502-u1-v3', label: '3', text: 'The cosine tax in panel B is small, under about 13% at any angle a human muscle actually uses at rest, while the fibre count often more than doubles. What the slant really spends is range of shortening.' },
        { id: 'apt502-u1-v4', label: '4', text: 'Panel D is the point of the whole unit. Same muscle, same attachments, two joint positions. In the second one the line of pull has crossed the axis, so the action reverses. The action came out of the geometry, and the geometry moved.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt502-u1-worked',
      title: 'Who is wrong: the app or the rowing coach?',
      scenario:
        'Nadia, 38, a masters rower, arrives with a screenshot from an anatomy app. Under adductor longus it says: “Action: hip adduction, hip flexion, medial rotation.” Her rowing coach has spent the winter telling the squad that the adductors are part of the drive, and the drive is hip extension. She wants to know which of them is wrong, and she is slightly enjoying the idea that it might be the coach. You take her to the whiteboard and work it out with her.',
      steps: [
        { id: 'apt502-u1-w1', title: 'Find the axis before you argue about the muscle',
          reasoning: 'A muscle’s action is the direction of a turning effect, and a turning effect needs an axis, which is why you cannot look one up. For bending and straightening the hip, the axis that matters runs side to side through the head of the thigh bone. Draw that first. Then draw the muscle: from the pubic bone, down and slightly back to a ridge on the back of the thigh bone. Now you have a geometry problem instead of an argument about vocabulary.' },
        { id: 'apt502-u1-w2', title: 'Read the answer in the anatomical position',
          reasoning: 'With the hip near straight, the line from the thigh attachment up to the pubic bone passes in front of that side-to-side axis. In front of the axis means it helps bend the hip, so the app is right about the position the app is quietly describing. Notice that the moment arm is short, a couple of centimetres, so adductor longus is a bit-part flexor rather than a headline one. The chart’s single word hides both the position it assumed and the size of the contribution.' },
        { id: 'apt502-u1-w3', title: 'Now move the joint, which is what a rower does',
          reasoning: 'Bend the hip toward the catch position. The attachment on the thigh bone swings forward and upward with the shaft, and past roughly sixty degrees of bend the line of pull has crossed to the other side of the axis. Same muscle, same attachments, opposite answer: from that position the same contraction helps straighten the hip. The coach is right too, about the position the coach is quietly describing. The crossover angle is approximate and varies between people and between the individual adductors, so treat sixty as a landmark rather than a threshold.' },
        { id: 'apt502-u1-w4', title: 'Check what did not change, and what nobody knows',
          reasoning: 'The side-to-side picture is stable. The line of pull stays on the inner side of the hip’s front-to-back axis through the range, so the pull toward the midline survives the position change that flipped the other one. The rotation question is the honest gap. Whether adductor longus turns the hip inward or outward is disputed in the literature, with electromyographic and modelling studies disagreeing and the answer probably depending on hip position. The app printed “medial rotation” as though that were settled. It is not, and saying so is more professional than repeating it.' },
        { id: 'apt502-u1-w5', title: 'Ask whether the force is big enough to matter',
          reasoning: 'A turning effect is force multiplied by moment arm, and the moment arm here is small, so the contribution only matters if the force is large. It is. The adductor group is one of the biggest muscle masses in the lower limb, and adductor magnus is among the largest single muscles in the body. That is why a group with unimpressive moment arms can still be a real contributor to hip extension from a deeply bent position. The architecture supplies what the geometry does not.' },
        { id: 'apt502-u1-w6', title: 'Turn geometry into a programming decision',
          reasoning: 'Standing cable adduction and an adduction hold at ninety degrees of hip flexion are not the same exercise for the same muscle. They load it at different joint angles, which means different moment arms, different fibre lengths and so a different share of the muscle’s force available under the length-tension relationship, and different stress at the attachment on the pubic bone. If the aim is to support what happens at the catch, the position of the exercise matters more than the name of the muscle. Programme the geometry, then tell Nadia exactly what you are and are not confident about.' },
      ],
      takeaway:
        'Neither of them was wrong, and neither of them was thinking. Both had memorised an answer that is true at one joint angle and false at another, which is what a three-column chart trains people to do. The procedure that replaces it is short: find the axis, find the line of pull, ask which side of it the line falls on. It keeps working in positions no chart ever described.',
    },

    // 6 ── interactive lab (classification) ──────────────────────────────────
    {
      type: 'classification', id: 'apt502-u1-lab',
      title: 'Lab: shape predicts degrees of freedom',
      instructions:
        'Each item names a synovial joint. File it by the number of degrees of freedom its shape permits, meaning the independent axes a person can voluntarily turn the bones about. Small internal motions such as roll, glide and spin do not count, and neither does a twist that comes along for the ride and cannot be produced on its own.',
      buckets: [
        { id: 'apt502-u1-b-one', label: 'One degree of freedom' },
        { id: 'apt502-u1-b-two', label: 'Two degrees of freedom' },
        { id: 'apt502-u1-b-three', label: 'Three degrees of freedom' },
      ],
      items: [
        { id: 'apt502-u1-l1', text: 'Humeroulnar joint (elbow)',
          bucketId: 'apt502-u1-b-one', rationale: 'A hinge. The spool-shaped end of the humerus sits in a matching notch on the ulna, so bending and straightening are all that is available. The spool is not symmetrical, which tilts the axis slightly and produces the carrying angle. A slanted hinge is still one axis.' },
        { id: 'apt502-u1-l2', text: 'Proximal radioulnar joint',
          bucketId: 'apt502-u1-b-one', rationale: 'A pivot. The head of the radius spins inside a ring made of bone on one side and a ligament on the other. Turning the palm up and down is one rotation about one long axis.' },
        { id: 'apt502-u1-l3', text: 'Median atlanto-axial joint',
          bucketId: 'apt502-u1-b-one', rationale: 'A pivot around a peg of bone, and one that punches above its weight: roughly half of all neck rotation happens here. One axis, enormous functional consequence.' },
        { id: 'apt502-u1-l4', text: 'Radiocarpal joint',
          bucketId: 'apt502-u1-b-two', rationale: 'An ellipsoid joint. An oval bump in an oval dish gives bending and straightening plus tilting the hand toward either edge. The oval shape is precisely what forbids independent spin. The turning of the hand happens at the forearm joints instead.' },
        { id: 'apt502-u1-l5', text: 'Metacarpophalangeal joints of the fingers',
          bucketId: 'apt502-u1-b-two', rationale: 'Condyloid. Bending and straightening plus spreading the fingers apart and back together. A small passive twist exists inside the joint, but nobody can produce it on its own, so it does not earn a third degree of freedom.' },
        { id: 'apt502-u1-l6', text: 'First carpometacarpal joint (thumb)',
          bucketId: 'apt502-u1-b-two', rationale: 'A saddle joint, each surface curving one way in one direction and the opposite way in the other. Two axes you can drive independently, plus a twist that comes along for the ride during the sweep, which is why opposition is a combination move. Some texts count it as three; that is a convention about how the extra twist gets scored.' },
        { id: 'apt502-u1-l7', text: 'Interphalangeal joints',
          bucketId: 'apt502-u1-b-one', rationale: 'Tongue-and-groove hinges. The bony interlock is deliberately tight because gripping demands stability against sideways load. One axis is both the price and the point.' },
        { id: 'apt502-u1-l8', text: 'Talocrural joint',
          bucketId: 'apt502-u1-b-one', rationale: 'Classified as a hinge, but the axis runs at a slant between the two ankle bumps rather than straight across the body, so what you call dorsiflexion arrives with small side-to-side and rotational components. One axis, and a slanted one, which is a good reminder that “sagittal plane movement” is an approximation.' },
        { id: 'apt502-u1-l9', text: 'Glenohumeral joint',
          bucketId: 'apt502-u1-b-three', rationale: 'A ball-and-socket joint with three axes. The socket covers only a small fraction of the ball, so this joint buys its range by giving up bony containment and defends itself with muscle, capsule and a fibrocartilage rim instead.' },
        { id: 'apt502-u1-l10', text: 'Hip (acetabulofemoral) joint',
          bucketId: 'apt502-u1-b-three', rationale: 'The same three axes as the shoulder and the opposite design: a deep socket, deepened further by its rim, wrapping well past the widest part of the ball. Identical degrees of freedom, completely different way of staying together. The category tells you what motion is available, never how hard it is to lose.' },
      ],
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt502-u1-case',
      title: 'Case: the IT band that will not release',
      brief:
        'Your client Priya, 41, trains with you twice a week and runs on the other days. Another trainer at the gym, Sam, told her during a taster session that her iliotibial band is “adhered and shortened”, and that ten minutes of rolling before every session will lengthen it. She has brought this to you. Every decision is scored against best practice.',
      startNodeId: 'apt502-u1-n1',
      nodes: [
        {
          id: 'apt502-u1-n1',
          situation:
            'Priya, half apologetic: “Sam felt down the outside of my thigh and said my IT band is stuck and short, and that ten minutes of rolling before every session will lengthen it out. Should I be doing that?”',
          choices: [
            { id: 'apt502-u1-n1a', text: '“Tell me what you’re actually feeling first: where, when, and what makes it better. Then I’ll tell you what rolling does and doesn’t do.”', to: 'apt502-u1-n2',
              quality: 'best', feedback: 'Right order. You gathered the symptom before arguing about the explanation, and you did not make her choose between two trainers in the first sentence.' },
            { id: 'apt502-u1-n1b', text: '“That’s pseudoscience. You can’t lengthen an IT band and nobody can feel an adhesion.”', to: 'apt502-u1-n3',
              quality: 'poor', feedback: 'The mechanism claim is defensible and the delivery is not. You have made a colleague the enemy, made her feel foolish for asking, and skipped the part where you find out what actually hurts.' },
            { id: 'apt502-u1-n1c', text: '“Sure, roll away. It can’t hurt.”', to: 'apt502-u1-n4',
              quality: 'poor', feedback: 'It can hurt. It endorses a structural explanation that is wrong, and ten minutes every session comes out of somewhere. Comfortable vagueness is still misinformation when a client repeats it as fact.' },
          ],
        },
        {
          id: 'apt502-u1-n2',
          situation:
            'She says the rolling genuinely feels good, her outer thigh is less sore for an hour or so afterwards, and then it comes back. “So is the tissue actually changing, or not?”',
          choices: [
            { id: 'apt502-u1-n2a', text: '“Almost certainly not structurally. The IT band is a dense sheet of collagen. The forces needed to permanently change its shape are far beyond a roller, and you wouldn’t want that anyway. What you’re getting is a real short-term change in how the area feels and moves. ‘It comes back’ is exactly what that predicts.”', to: 'apt502-u1-n5',
              quality: 'best', feedback: 'Accurate and complete. You kept the effect she observed, corrected the mechanism, and used her own “it comes back” as the evidence. That is how you change someone’s model without dismissing their experience.' },
            { id: 'apt502-u1-n2b', text: '“Probably a little bit each time. It builds up over weeks.”', to: 'apt502-u1-n5',
              quality: 'poor', feedback: 'This keeps the structural story alive in a softer voice. Permanent change to the fascia lata building up session by session is not supported, and the hour-long time course she just described argues directly against it.' },
            { id: 'apt502-u1-n2c', text: '“If it works, the mechanism doesn’t really matter.”', to: 'apt502-u1-n5',
              quality: 'acceptable', feedback: 'There is something to this, because the short-term effect is real and cheap. But the mechanism decides the dose, the expectations, and whether she goes looking for a “release specialist” when it stops helping. Mechanism is what lets advice travel to the next situation.' },
          ],
        },
        {
          id: 'apt502-u1-n3',
          situation:
            'Priya has gone quiet. “Right. I felt stupid enough asking. I won’t bring this stuff up again.”',
          choices: [
            { id: 'apt502-u1-n3a', text: '“That came out badly, and I’m sorry. The rolling probably does help you. I just don’t think it works the way you were told. Tell me what you’re feeling and let’s go through it properly.”', to: 'apt502-u1-n2',
              quality: 'acceptable', feedback: 'Good recovery. Separating the observation (it helps) from the explanation (it lengthens tissue) is the move you should have led with, and saying so plainly costs you nothing.' },
            { id: 'apt502-u1-n3b', text: '“Honestly, half of what gets taught on weekend courses is made up. Just trust me and stick to the program.”', to: null,
              quality: 'poor', feedback: 'You have now asked for trust while giving her no reasoning to hold on to, which is the same move Sam made. She will stop bringing you questions, and she will keep getting answers, just not from you.' },
          ],
        },
        {
          id: 'apt502-u1-n4',
          situation:
            'Two weeks later Priya asks to convert the first ten minutes of every session to rolling, cutting a set from each of her main lifts to make room.',
          choices: [
            { id: 'apt502-u1-n4a', text: '“Keep two or three minutes if you like it. It warms you up and it feels good. But it isn’t doing the structural thing you were told, and I’m not trading loaded sets for it. Here’s why the sets matter more for what you came here for.”', to: 'apt502-u1-n5',
              quality: 'best', feedback: 'Exactly. You protected the training dose, kept the part she values, and told her the truth about the mechanism in the same breath. Doing all three at once is the professional skill.' },
            { id: 'apt502-u1-n4b', text: '“If that’s what you want, it’s your session.”', to: 'apt502-u1-n5',
              quality: 'poor', feedback: 'Client autonomy matters, but she is paying you for judgement. Trading a documented training stimulus for a brief comfort effect, without saying so, is an abdication dressed up as respect.' },
            { id: 'apt502-u1-n4c', text: '“Let’s split the difference: five minutes rolling, drop one set.”', to: 'apt502-u1-n5',
              quality: 'acceptable', feedback: 'Workable, and better than either extreme, but you compromised on the volume before you corrected the belief. She still thinks the rolling is doing something it is not, so this negotiation will happen again.' },
          ],
        },
        {
          id: 'apt502-u1-n5',
          situation:
            'Priya finally asks the real question: “Fine, then why does the outside of my knee hurt after about four kilometres, every time?”',
          choices: [
            { id: 'apt502-u1-n5a', text: '“That’s a pattern that needs a diagnosis, and diagnosing it isn’t my job. I’ll help you get in front of a physiotherapist. Meanwhile we keep training everything that doesn’t provoke it, and I’ll manage your running load with you rather than around you.”', to: null,
              quality: 'best', feedback: 'Correct on all three counts: named the scope boundary, referred without abandoning her, and kept the work you can legitimately do. A repeatable, distance-dependent symptom is exactly the point at which a trainer stops guessing.' },
            { id: 'apt502-u1-n5b', text: '“That’s classic IT band friction. It’s tight and rubbing. Here’s a protocol: roll it, stretch it, and it’ll settle.”', to: null,
              quality: 'poor', feedback: 'You have made a diagnosis outside your scope, using a mechanical story that even the clinical literature has largely moved on from, and prescribed treatment on top of it. Two professional problems and one factual one in a single sentence.' },
            { id: 'apt502-u1-n5c', text: '“Let’s just cut your running back for a few weeks and see what happens.”', to: null,
              quality: 'acceptable', feedback: 'Load management is inside your scope, and reducing a provoking dose is reasonable. But “see what happens” with a consistent, repeatable symptom delays a referral you were always going to need, and she loses weeks of running for it.' },
          ],
        },
      ],
    },

    // 8 ── error identification ──────────────────────────────────────────────
    {
      type: 'errorId', id: 'apt502-u1-errorid',
      title: 'Audit a junior coach’s assessment note',
      brief:
        'A trainer you supervise has written up a new client’s assessment. Flag every anatomical or mechanical claim that is wrong. Leave the defensible ones alone, because over-flagging is its own failure.',
      document:
        'CLIENT: J. Okafor, 34. INITIAL ASSESSMENT.\n\nStanding posture observed in the anatomical position, feet forward, arms at sides, forearms pronated. Passive hip flexion tested with the knee flexed, in the frontal plane about a mediolateral axis; range 105° bilaterally. In the back squat she shows a frontal plane fault, the knees travelling outward as she descends, so this is not a pure sagittal plane exercise for her and the deviation should be coached out. Palpation of the lateral thigh suggests a shortened and adhered iliotibial band; eight weeks of daily foam rolling should restore its resting length. Hamstrings held in a single three-minute static stretch: immediate 12° gain in straight-leg raise, which reflects true lengthening of the muscle-tendon unit. Note that knee flexion and extension occur at a modified hinge joint, so a small obligatory axial rotation accompanies terminal extension. Plan: progress Achilles loading by 15% per week, since tendon and muscle adapt on the same timescale.',
      findings: [
        { id: 'apt502-u1-e1', text: '“in the anatomical position … forearms pronated”', isError: true,
          rationale: 'The anatomical position has the palms facing forward, not down. That is not a cosmetic detail. Palms forward is what leaves the two forearm bones parallel, which is why “medial” at the forearm means the little-finger side permanently instead of swapping every time the hand turns.' },
        { id: 'apt502-u1-e2', text: '“tested … in the frontal plane about a mediolateral axis”', isError: true,
          rationale: 'The axis always stands at right angles to the plane of motion. Motion about a side-to-side axis happens in the sagittal plane; frontal plane motion happens about a front-to-back axis. Hip flexion is sagittal. Pairing a plane with an axis that lies inside it is the commonest terminology error on assessment paperwork.' },
        { id: 'apt502-u1-e3', text: '“range 105° bilaterally”', isError: false,
          rationale: 'Not an error. Passive hip flexion with the knee bent is typically somewhere around 110 to 125°, so 105° on both sides is unremarkable and worth recording. A number on a form is only a problem when it is used to justify something.' },
        { id: 'apt502-u1-e4', text: '“a frontal plane fault, the knees travelling outward … the deviation should be coached out”', isError: true,
          rationale: 'The observation is fine. The interpretation is wrong twice. The thigh bone moves out to the side and turns outward as the hip bends in any deep squat, so an out-of-sagittal component is obligatory rather than a fault, and coaching it out would work against the joint. The right conclusion was already half-written in the same sentence: “sagittal plane exercise” was always an approximation.' },
        { id: 'apt502-u1-e5', text: '“a shortened and adhered iliotibial band; eight weeks of daily foam rolling should restore its resting length”', isError: true,
          rationale: 'Two errors stacked. Palpation cannot establish an adhesion, because agreement between practitioners on that judgement is poor. And the iliotibial band is a dense collagen sheet. The forces required to change its shape permanently are far outside what a roller applies, which is fortunate, because permanently deforming a load-bearing band would not be a good outcome.' },
        { id: 'apt502-u1-e6', text: '“immediate 12° gain … reflects true lengthening of the muscle-tendon unit”', isError: true,
          rationale: 'An immediate range gain after a single stretch is best explained by a rise in how much stretch the person will tolerate, plus short-lived creep and stress relaxation that reverse within minutes. Whether long-term stretching produces genuine tissue lengthening is still argued. The immediate version stated here is not supported.' },
        { id: 'apt502-u1-e7', text: '“knee flexion and extension occur at a modified hinge joint, so a small obligatory axial rotation accompanies terminal extension”', isError: false,
          rationale: 'Not an error. This is correct, and it is the most sophisticated sentence in the note. The knee is a modified hinge that carries a small twist it cannot avoid, which is exactly why the classical hinge label leaks.' },
        { id: 'apt502-u1-e8', text: '“progress Achilles loading by 15% per week, since tendon and muscle adapt on the same timescale”', isError: true,
          rationale: 'They do not. Muscle starts building protein within hours and shows measurable change in weeks. The collagen core of adult tendon barely renews at all, as the nuclear-bomb carbon-14 work showed, and what does change (stiffness, material properties, thickness) moves far more slowly. Progression rates belong to the slowest-adapting tissue in the chain.' },
      ],
    },

    // 9 ── active-recall set ─────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt502-u1-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'apt502-u1-r1', front: 'Why does the anatomical position specify palms facing forward?',
          back: 'Because that position leaves the two forearm bones parallel. Define the terms with the palm down and the radius crosses over the ulna, so “medial” at the forearm would swap sides depending on hand position. The convention keeps directional language stable.' },
        { id: 'apt502-u1-r2', front: 'Pair each plane with its axis.',
          back: 'Sagittal plane goes with the side-to-side (mediolateral) axis. Frontal plane goes with the front-to-back (anteroposterior) axis. Transverse plane goes with the vertical axis. The axis always stands at right angles to the plane and never lies inside it.' },
        { id: 'apt502-u1-r3', front: 'What is wrong with calling the back squat a “sagittal plane exercise”?',
          back: 'It is a claim about every joint in the chain, and it fails at most of them. The hip moves out to the side and turns outward as it bends, the knee carries a twist it cannot avoid, and the ankle axis is slanted. “The biggest movement is sagittal” is the honest version.' },
        { id: 'apt502-u1-r4', front: 'What produces the toe region of the tendon load curve, and what follows it?',
          back: 'The wavy resting pattern in the collagen being pulled straight, roughly the first 1.5 to 3% of stretch, cheap in force. Then the straight region, where the fibres themselves stretch and whose steepness is stiffness. Microscopic failure follows past about 4 to 6%, rupture near 8 to 10%. Treat all numbers as rough magnitudes.' },
        { id: 'apt502-u1-r5', front: 'Creep, stress relaxation, hysteresis: define each in one line.',
          back: 'Creep: steady load, tissue slowly lengthens. Stress relaxation: steady length, force inside slowly fades. Hysteresis: the unloading curve sits below the loading curve, the difference lost as heat. All three follow from viscoelasticity, which also makes these tissues stiffer when you load them faster.' },
        { id: 'apt502-u1-r6', front: 'Why do muscle and tendon need different rates of load progression?',
          back: 'They adapt on different clocks. Muscle responds within hours and changes measurably in weeks. The collagen core of adult human tendon barely renews at all after adolescence (the nuclear-bomb carbon-14 evidence), and its stiffness and thickness change slowly. Progress load at the pace of the slowest tissue.' },
        { id: 'apt502-u1-r7', front: 'What about fascia is well established, and what is oversold?',
          back: 'Established: a rich nerve supply including pain-signalling endings, force passing sideways out of muscle through its wrappings and neighbouring connections, gliding between layers that depends on a slippery hyaluronan-rich layer, and real gross continuities. Oversold: end-to-end chains treated as pulley systems, and “releasing” dense fascia by hand or roller. Rolling’s effects are short-lived and most consistent with a nervous system mechanism.' },
        { id: 'apt502-u1-r8', front: 'What determines a synovial joint’s degrees of freedom?',
          back: 'The shape of the articulating surfaces. Hinge and pivot give one axis, condyloid and saddle two, ball-and-socket three. Small internal motions (roll, glide, spin) and twists that come along for the ride are obligatory but cannot be produced on their own, so they do not count.' },
        { id: 'apt502-u1-r9', front: 'The shoulder and hip joints share a category. What separates them?',
          back: 'They share three axes and defend them completely differently. Both are ball-and-socket. The shoulder socket covers a small fraction of the ball and relies on muscle, capsule and a fibrocartilage rim, while the hip socket plus its rim wraps past the widest part of the ball. The same motion is available at each, and losing it is a completely different problem.' },
        { id: 'apt502-u1-r10', front: 'Physiological versus anatomical cross-sectional area: what is the difference, and which one matters?',
          back: 'Anatomical is one cut straight across the belly of the muscle. Physiological is the total cross-section of all the fibres, cut at right angles to the fibres themselves. Force capacity tracks the physiological figure, and in a muscle with slanted fibres it can be several times the anatomical one.' },
        { id: 'apt502-u1-r11', front: 'What does slanting the fibres (pennation) buy, and what does it cost?',
          back: 'It buys fibre count. Many more short fibres attach along the same tendon, so the muscle makes much more force. It costs a small tax on each fibre’s force (about 6% at 20°, 13% at 30°) and, far more importantly, range of shortening and top speed, because the fibres are short.' },
        { id: 'apt502-u1-r12', front: 'In one sentence, why can a muscle’s action reverse?',
          back: 'Because the direction of its turning effect is set by which side of the joint axis its line of pull passes, so moving the joint far enough lets the line cross over, as adductor longus does at the hip past roughly 60° of bend.' },
      ],
    },

    // 10 ── unit quiz ────────────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u1-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'apt502-u1-q1', kind: 'single', cognitive: 'recall',
          prompt: 'Taking the arm out to the side at the shoulder happens in which plane, about which axis?',
          options: [
            { id: 'a', text: 'Frontal plane, about a front-to-back (anteroposterior) axis', correct: true },
            { id: 'b', text: 'Frontal plane, about a side-to-side (mediolateral) axis', correct: false, rationale: 'A side-to-side axis lies inside the frontal plane. An axis always stands at right angles to the plane of motion.' },
            { id: 'c', text: 'Sagittal plane, about a vertical axis', correct: false, rationale: 'Both halves are wrong. Taking the arm out to the side is frontal plane movement, and a vertical axis serves rotation in the transverse plane.' },
          ] },
        { id: 'apt502-u1-q2', kind: 'single', cognitive: 'recall',
          prompt: 'Which structure is a syndesmosis?',
          options: [
            { id: 'a', text: 'The joint between the two shin bones just above the ankle', correct: true, rationale: 'A fibrous joint held by a ligament between the bones. It permits a millimetre or two of spread, which is exactly what the wider front of the talus requires as it enters the ankle.' },
            { id: 'b', text: 'The pubic symphysis', correct: false, rationale: 'That is a symphysis: a cartilaginous joint united by fibrocartilage.' },
            { id: 'c', text: 'The epiphyseal growth plate', correct: false, rationale: 'That is a synchondrosis: a cartilaginous joint united by hyaline cartilage.' },
          ] },
        { id: 'apt502-u1-q3', kind: 'single', cognitive: 'application',
          prompt: 'Two muscles have identical volume. Muscle A has long fibres running in line with the tendon; muscle B has short fibres slanted at 25° onto a central tendon. What follows?',
          explanation: 'Volume divides between fibre length and fibre number. Spend it on length and you get range of shortening and speed. Spend it on number and you get force.',
          options: [
            { id: 'a', text: 'B has the greater physiological cross-sectional area and peak force; A has the greater range of shortening and top speed', correct: true },
            { id: 'b', text: 'B has the greater force and also the greater range of shortening, because slanting the fibres improves both', correct: false, rationale: 'Nothing improves both at fixed volume. Range of shortening is exactly what the slant spends.' },
            { id: 'c', text: 'They are equivalent, because equal volume means equal force', correct: false, rationale: 'Force tracks physiological cross-sectional area. Two muscles of equal volume can differ several times over in that figure.' },
          ] },
        { id: 'apt502-u1-q4', kind: 'single', cognitive: 'analysis',
          prompt: 'A pennation angle of 30° costs about 13% of each fibre’s force along the tendon. Why is slanting the fibres still such a common design?',
          options: [
            { id: 'a', text: 'Because angling the fibres lets far more of them attach along the same length of tendon, often more than doubling fibre number, so the cosine tax is small next to the gain', correct: true },
            { id: 'b', text: 'Because slanted fibres generate more force per unit area than fibres running in line with the tendon', correct: false, rationale: 'Force per unit area is a property of the contractile machinery, and angling the fibres leaves it alone. Architecture changes how many fibres you have. Each one is exactly as good as it was.' },
            { id: 'c', text: 'Because the sideways part of the force adds to the tendon force', correct: false, rationale: 'The sideways part does not reach the tendon. Where two slanted fibre sets oppose each other, it largely cancels inside the muscle.' },
          ] },
        { id: 'apt502-u1-q5', kind: 'multi', cognitive: 'analysis',
          prompt: 'Which statements about connective tissue under load are correct? (Select all that apply.)',
          explanation: 'Rate dependence, creep, stress relaxation and hysteresis all follow from viscoelasticity. How the fibres are lined up follows the job the tissue does.',
          options: [
            { id: 'a', text: 'Tendon and ligament are stiffer when loaded quickly than when loaded slowly', correct: true },
            { id: 'b', text: 'Ligament collagen is less uniformly lined up than tendon collagen, because a ligament must hold the joint in check across a range of positions', correct: true },
            { id: 'c', text: 'Holding a constant length causes the force inside the tissue to fade over time', correct: true },
            { id: 'd', text: 'Articular cartilage is best served by long sustained squashing, which drives nutrients inward', correct: false, rationale: 'The opposite. Cartilage has no blood supply and is fed by the fluid exchange that repeated loading and unloading drives. Being squashed and held is what it tolerates least well.' },
          ] },
        { id: 'apt502-u1-q6', kind: 'single', cognitive: 'analysis',
          prompt: 'A client’s straight-leg raise improves 12° immediately after a three-minute static stretch. What is the best-supported explanation?',
          options: [
            { id: 'a', text: 'Mostly a rise in how much stretch she will tolerate, plus short-lived creep and stress relaxation that reverse within minutes', correct: true, rationale: 'The time course gives it away. A change that appears in three minutes and fades in ten is not rebuilt tissue.' },
            { id: 'b', text: 'Permanent lengthening of the hamstring muscle and tendon', correct: false, rationale: 'Immediate tissue lengthening of that size is not supported, and whether even long-term stretching lengthens tissue in humans is still argued.' },
            { id: 'c', text: 'Release of fascial adhesions along the back of the leg', correct: false, rationale: 'This invokes a structure nobody demonstrated, changed by a force nobody measured, to explain something a simpler mechanism already covers.' },
          ] },
        { id: 'apt502-u1-q7', kind: 'single', cognitive: 'application',
          prompt: 'Your client gains 15° of hip flexion range across four sessions. Which is the LEAST likely explanation?',
          options: [
            { id: 'a', text: 'The shape of her hip socket and the ball that sits in it changed', correct: true, rationale: 'Joint surfaces do not reshape over four sessions. Tolerance, passive muscle tension, motor control, or an adjacent segment contributing more are all far more plausible.' },
            { id: 'b', text: 'She now tolerates the end-range sensation better', correct: false, rationale: 'Plausible, and usually the largest contributor over short timescales.' },
            { id: 'c', text: 'Her low back is contributing more motion to the tested position', correct: false, rationale: 'Plausible. An adjacent segment joining in is the classic reason a measured “gain” overstates what happened at the joint.' },
          ] },
        { id: 'apt502-u1-q8', kind: 'single', cognitive: 'analysis',
          prompt: 'Why is the joint at the base of the thumb usually described as having two degrees of freedom, when opposition looks like a third movement?',
          options: [
            { id: 'a', text: 'Opposition is a combination of the two available motions plus a twist that comes along for the ride and cannot be produced on its own', correct: true, rationale: 'That twist arrives because the saddle surfaces sweep across each other, and nobody can produce it alone, so it does not earn a degree of freedom. Some texts count three; the disagreement is about how that twist gets scored.' },
            { id: 'b', text: 'Because the thumb has fewer muscles than the fingers', correct: false, rationale: 'Degrees of freedom are set by the shape of the surfaces. Muscle count decides what you can do with them.' },
            { id: 'c', text: 'Because saddle joints are a kind of hinge joint', correct: false, rationale: 'They are not. A saddle joint has each surface curving one way in one direction and the opposite way in the other, which permits two axes.' },
          ] },
        { id: 'apt502-u1-q9', kind: 'single', cognitive: 'synthesis',
          prompt: 'A colleague insists a chart settles what a muscle does, because “origin and insertion don’t change”. What is the strongest reply?',
          explanation: 'The chart describes one position. Which way a muscle turns a joint depends on the moment arm, and the moment arm changes as the segment moves.',
          options: [
            { id: 'a', text: '“Attachments don’t change, but the moment arm does. The action is the direction of a turning effect about an axis, so when the joint moves far enough the line of pull can cross the axis and the action reverses.”', correct: true },
            { id: 'b', text: '“Charts are unreliable, so you should rely on what you feel during the movement.”', correct: false, rationale: 'Charts are accurate for the position they assume. Replacing geometry with sensation swaps one weak method for a weaker one.' },
            { id: 'c', text: '“The action changes because the muscle shortens and its force capacity falls.”', correct: false, rationale: 'Length affects how much force is available, not which direction the joint turns. That is a size argument being used to explain a change of direction.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt502-u1-teach',
      title: 'Teach it back',
      prompt:
        'A junior coach at your gym is irritated with you. “Why do you keep saying a muscle’s action depends on joint angle? The chart says adductor longus flexes the hip. It either does or it doesn’t.” Explain the mechanics in plain language, with no formulas, so that he could work the same thing out for a different muscle on his own.',
      modelAnswer:
        'Here is the thing the chart does not print. It is describing the muscle in one specific position: standing up straight, in the anatomical position, with the leg free to swing. Change the position and the answer can change. Here is why. A muscle pulls in a straight line between its two ends. A joint turns about an axis, and for bending and straightening the hip that axis runs side to side through the head of the thigh bone. Whether the pull bends or straightens the hip depends on one thing only: which side of that axis the line of pull passes. In front of the axis, it bends the hip. Behind it, it straightens the hip. Adductor longus runs from the pubic bone down and back to the thigh bone. Standing up, that line passes in front of the axis, so it helps bend the hip, and the chart is right. Now bend the hip up past about sixty degrees. The attachment on the thigh bone swings forward with the bone, and the line now passes behind the axis. Same muscle, same attachments, opposite job. Nothing changed except the geometry. Two things worth adding. The crossover point is not exact. It varies between people and between the different adductors, so treat sixty as a landmark. And how this muscle turns the hip inward or outward is genuinely argued about in the research, so if you see a chart state it confidently, that confidence is not coming from the evidence. The habit I would give you takes ten seconds. Before you say a muscle does something in a position, find the joint axis, picture the line between the attachments in that position, and ask which side of the axis it is on. Do that for any muscle you like. It works everywhere, and it stops you repeating something that was only ever true in one posture.',
      rubric: [
        { id: 'apt502-u1-t1', text: 'States that the chart describes one specific position (anatomical position, far end of the limb free, one joint at a time) and treats that as a posture the muscle was described in rather than a permanent fact' },
        { id: 'apt502-u1-t2', text: 'Explains that the direction of the action is set by which side of the joint axis the line of pull passes, without resorting to formulas' },
        { id: 'apt502-u1-t3', text: 'Works the adductor longus example through both positions and identifies the change in geometry as what flipped the action' },
        { id: 'apt502-u1-t4', text: 'Acknowledges genuine uncertainty, namely the approximate crossover angle and the disputed rotation action, instead of overclaiming' },
        { id: 'apt502-u1-t5', text: 'Leaves the colleague with a procedure he can transfer (find the axis, find the line of pull, ask which side) and run on any muscle he likes' },
      ],
    },

    // 12 ── cumulative review ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u1-cumulative', role: 'cumulative', title: 'Pulling it together',
      questions: [
        { id: 'apt502-u1-cu1', kind: 'single', cognitive: 'analysis',
          prompt: 'A fascia workshop advertises that “a systematic review has proven the myofascial chains”. The review in question searched dissection studies for the anatomical joins each claimed chain requires. What did that design allow it to establish?',
          explanation: 'A review inherits the design of the studies it summarises. Dissection evidence speaks to continuity. Force travelling along a line during movement, and clinical transfer, are separate claims needing separate evidence.',
          options: [
            { id: 'a', text: 'Whether the structures are anatomically continuous, and only for some chains, not whether meaningful force travels along them in a living, moving person', correct: true },
            { id: 'b', text: 'That treating one end of a chain changes the other end, since the anatomy is now confirmed', correct: false, rationale: 'That is a claim about whether a treatment works. No amount of dissection evidence delivers it.' },
            { id: 'c', text: 'Nothing, because dissection studies sit at the bottom of the evidence hierarchy', correct: false, rationale: 'Overcorrection. Design decides what kind of question a study answers, not whether it counts. For a question about anatomical continuity, dissection is the right design.' },
          ] },
        { id: 'apt502-u1-cu2', kind: 'single', cognitive: 'analysis',
          prompt: 'A study scans 60 lifters once, measures resting pennation angle in vastus lateralis, finds it correlates with squat 1RM (r = 0.42), and concludes that increasing pennation angle will increase strength. What is the primary problem?',
          options: [
            { id: 'a', text: 'It is a single snapshot, so it can show association but not direction. Bigger, stronger muscles have larger pennation angles, and training could be driving both', correct: true, rationale: 'One moment in time cannot separate cause from consequence, and muscle size is an obvious common driver of both measurements.' },
            { id: 'b', text: 'The correlation of 0.42 is too small to be of any interest', correct: false, rationale: 'An r of 0.42 in a biological measure is a real signal. What forbids the causal conclusion is the design.' },
            { id: 'c', text: 'Ultrasound cannot measure pennation angle', correct: false, rationale: 'It can, and routinely does. The bigger measurement caveat is that resting angle is a snapshot that changes with contraction and joint position.' },
          ] },
        { id: 'apt502-u1-cu3', kind: 'single', cognitive: 'application',
          prompt: 'A manual-therapy course cites a cadaveric mechanical study showing the force required to deform the iliotibial band. A trainer objects that cadaveric tissue “isn’t the same as living tissue”. How should you weigh that?',
          explanation: 'How far a finding travels is judged against the specific claim. Cadaveric material differs from living tissue in ways that matter for some questions and hardly at all for others.',
          options: [
            { id: 'a', text: 'A fair caveat but a weak rebuttal here. The claim being tested is about the passive stiffness of dense collagen tissue, which cadaveric preparations model reasonably well, and the gap between the required force and manual pressure is very large', correct: true },
            { id: 'b', text: 'The objection is decisive, because cadaveric findings never apply to living people', correct: false, rationale: 'That would discard most of what is known about passive tissue mechanics. Applicability is judged claim by claim.' },
            { id: 'c', text: 'The objection is irrelevant, because a study is a study', correct: false, rationale: 'Applicability is always a live question. It simply happens not to rescue the release claim in this instance.' },
          ] },
        { id: 'apt502-u1-cu4', kind: 'single', cognitive: 'synthesis',
          prompt: 'A meta-analysis of foam rolling reports a pooled immediate range-of-motion gain with a 95% confidence interval of 2.1° to 5.8°, and heterogeneity is high. A supplier’s flyer converts this into “clinically proven to release fascial restrictions”. Which criticisms hold?',
          explanation: 'The interval describes an effect on a measurement, not a mechanism. Naming a mechanism is a separate claim, and “proven” overstates any pooled estimate, particularly a heterogeneous one.',
          options: [
            { id: 'a', text: 'The interval measures a small, short-lived range change and says nothing about mechanism, so “releases fascial restrictions” is an unearned explanation bolted onto a measured effect. High heterogeneity also means the pooled number hides real disagreement between trials', correct: true },
            { id: 'b', text: 'Only that the effect is too small to matter', correct: false, rationale: 'A few degrees before training may be worth having. The mechanism claim and the word “proven” are the bigger failures.' },
            { id: 'c', text: 'Nothing, because a confidence interval that excludes zero establishes the mechanism', correct: false, rationale: 'An interval that excludes zero says the effect is probably not nil. Mechanism is a different question, answered by different studies.' },
          ] },
        { id: 'apt502-u1-cu5', kind: 'single', cognitive: 'synthesis',
          prompt: 'You are deciding how fast to progress a client’s calf loading after a long layoff. Which reasoning order best reflects professional practice?',
          options: [
            { id: 'a', text: 'Confirm nothing needs clinical clearance, set the progression rate by the slowest-adapting tissue in the chain, judge how well the evidence you are drawing on matches this client, then decide with her and write it down', correct: true },
            { id: 'b', text: 'Find the fastest progression rate supported by any published trial and apply it, since evidence-based practice means following the evidence', correct: false, rationale: 'Picking the most aggressive published number is cherry-picking, and it ignores both how well the study matches your client and the tissue with the slowest clock.' },
            { id: 'c', text: 'Progress by how she feels session to session, since tissue timescales are theoretical', correct: false, rationale: 'Symptoms lag behind tendon loading, which is precisely why feel is an unreliable governor. Those timescales have been measured.' },
          ] },
      ],
    },
  ],
};
