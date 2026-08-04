import type { Unit } from '../../../types/content';

export const unit04: Unit = {
  id: 'apt502-u4',
  code: 'APT 502.4',
  title: 'The Hip, Knee, Ankle and Foot',
  summary:
    'The lower limb read as one linked chain: how the shape of a person’s hip bones sets her squat, what the gluteals and hamstrings actually do at each joint angle, why the knee is a compromise joint, and why the foot is an active spring rather than something that needs propping up.',
  qc: {
    sources: [
      { citation: 'Neumann DA. Kinesiology of the Musculoskeletal System: Foundations for Rehabilitation, 3rd ed. Elsevier', year: 2017, evidenceType: 'Textbook', verified: false },
      { citation: 'Standring S (ed). Gray’s Anatomy: The Anatomical Basis of Clinical Practice, 42nd ed. Elsevier', year: 2020, evidenceType: 'Textbook', verified: false },
      { citation: 'Levangie PK, Norkin CC, Lewek MD. Joint Structure and Function: A Comprehensive Analysis, 6th ed. F.A. Davis', year: 2019, evidenceType: 'Textbook', verified: false },
      { citation: 'Griffin DR, Dickenson EJ, O’Donnell J, et al. The Warwick Agreement on femoroacetabular impingement syndrome (FAI syndrome): an international consensus statement. Br J Sports Med 2016;50:1169–1176', year: 2016, evidenceType: 'Consensus statement', verified: false },
      { citation: 'Hicks JH. The mechanics of the foot. II. The plantar aponeurosis and the arch. J Anat 1954;88:25–30', year: 1954, evidenceType: 'Original mechanics study', verified: false },
      { citation: 'Krosshaug T, Steffen K, Kristianslund E, et al. The vertical drop jump is a poor screening test for ACL injuries in female elite soccer and handball players: a prospective cohort study of 710 athletes. Am J Sports Med 2016;44:874–883', year: 2016, evidenceType: 'Prospective cohort', verified: false },
      { citation: 'Nielsen RO, Buist I, Parner ET, et al. Foot pronation is not associated with increased injury risk in novice runners wearing a neutral shoe: a 1-year prospective cohort study. Br J Sports Med 2014;48:440–447', year: 2014, evidenceType: 'Prospective cohort', verified: false },
      { citation: 'McKeon PO, Hertel J, Bramble D, Davis I. The foot core system: a new paradigm for understanding intrinsic foot muscle function. Br J Sports Med 2015;49:290', year: 2015, evidenceType: 'Narrative review / model paper', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-08-03',
    reviewBy: '2027-08-03',
    controversies:
      'Several claims in this unit are genuinely unsettled. The screw-home mechanism is textbook orthodoxy built largely on cadaver work, and imaging of living joints finds it variable and sometimes absent. Cam and pincer morphology are common in people who never develop symptoms, and the Warwick Agreement deliberately separates morphology from FAI syndrome. How far morphology should shape training in a lifter with no symptoms has no trial evidence behind it. Dynamic knee valgus was reported as an ACL risk factor in one influential prospective study and failed to predict injury in a much larger one, so its status as a screening variable is contested. Hip abductor weakness is consistently found alongside patellofemoral pain and inconsistently found before it, which leaves the causal direction open even though hip-targeted exercise helps. Whether hamstring strains begin in late swing or early stance is still argued. Barbell hip thrusts produce the highest gluteal EMG amplitudes but not clearly more gluteal growth than squats, which is a live problem for the whole EMG-to-growth inference, and the long-muscle-length hypertrophy literature is promising but thin at the hip. Foot pronation as an injury risk factor, and footwear prescribed by foot type, are not supported by the prospective and trial evidence, though the belief remains widespread. Arthroscopic partial meniscectomy for degenerative tears has repeatedly failed to beat sham surgery or exercise.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u4-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt502-u4-p1', kind: 'single', cognitive: 'application',
          prompt: 'A client’s pelvis rolls under at the same depth every session, in a narrow stance, no matter how long she warms up or how much she stretches. What is the most defensible first guess?',
          options: [
            { id: 'a', text: 'The femur is running out of room against the rim of the socket in that stance, so change the stance and re-test', correct: true, rationale: 'A limit that does not move with warm-up or stretching, and appears at the identical depth every time, behaves like bone shape rather than tissue. Changing stance width and foot angle is a free test of that idea.' },
            { id: 'b', text: 'Her hamstrings are short and are pulling the pelvis under', correct: false, rationale: 'In a squat the hamstrings lengthen at the hip and shorten at the knee in the same instant, so their overall length barely changes. They are an implausible limiter of squat depth.' },
            { id: 'c', text: 'She lacks the trunk strength to hold position at depth', correct: false, rationale: 'Trunk strength shortfalls show up under load and fatigue, not at an identical unloaded depth every single rep.' },
          ] },
        { id: 'apt502-u4-p2', kind: 'single', cognitive: 'recall',
          prompt: 'What happens to the contact area between the kneecap and the thigh bone as the knee bends from about 20° to about 90°?',
          options: [
            { id: 'a', text: 'It increases, as the contact band travels from the lower tip of the kneecap toward the top of it', correct: true, rationale: 'This is why joint stress does not simply follow joint force. The area sharing the load is changing at the same time.' },
            { id: 'b', text: 'It decreases, concentrating load on a smaller patch', correct: false, rationale: 'The opposite. Contact area is smallest near full straightening.' },
            { id: 'c', text: 'It stays much the same, so stress rises in step with force', correct: false, rationale: 'If that were true, deep squatting would be far more provocative than it is, and loaded knee extension near full straightening far less.' },
          ] },
        { id: 'apt502-u4-p3', kind: 'single', cognitive: 'analysis',
          prompt: 'A gym screens every new member with a drop jump and refers anyone whose knees fall inward for six weeks of “valgus correction” before they may run. What does the prospective evidence actually support?',
          options: [
            { id: 'a', text: 'A large prospective cohort of elite female athletes found drop-jump knee position did not predict ACL injury, so this is a movement description, not a screening test', correct: true, rationale: 'A screening test needs more than a plausible mechanism. It needs a strong prospective association, good enough discrimination in a big enough sample, and a treatment that works by changing the thing being screened.' },
            { id: 'b', text: 'It is a validated screen with good sensitivity and specificity across populations', correct: false, rationale: 'One influential smaller study reported useful test properties. The larger prospective replication did not.' },
            { id: 'c', text: 'It predicts injury reliably in women but not in men', correct: false, rationale: 'The large negative prospective study was run in elite female athletes, which is exactly the population where the claim was strongest.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt502-u4-outcomes',
      outcomes: [
        { level: 'recall', text: 'Name the femoral and socket measurements that define hip architecture (neck-shaft angle, femoral and acetabular version, cam and pincer shape), state the attachments and nerve supply of the gluteal and hamstring groups, and describe the talocrural and subtalar axes and the windlass mechanism.' },
        { level: 'application', text: 'Measure weight-bearing dorsiflexion, tell a gastrocnemius restriction apart from a soleus or joint restriction, and set squat stance and depth from how an individual hip responds rather than from a template.' },
        { level: 'analysis', text: 'Separate hip-driven from foot-driven causes of dynamic knee valgus, and explain why kneecap stress changes through range with the foot planted and with the foot free.' },
        { level: 'synthesis', text: 'Build and defend a lower-limb programming decision that respects an individual’s bone shape, the way the knee shares load, and the documented limits of movement screening, then explain it to a client without turning normal variation into a fault.' },
      ],
    },

    // 3 ── core instruction (five concept blocks) ────────────────────────────
    {
      type: 'concept', id: 'apt502-u4-c1', heading: 'The hip you were dealt',
      body:
        'Two clients, next to each other, the same cue. You told both of them to sit down between their feet and keep the ribs stacked. Priya drops to a depth that would embarrass most people, pelvis exactly where it started. Kate stops two inches above parallel, and if you talk her past that point her pelvis rolls under and her lower back finishes the job. Kate stretches more than Priya, warms up longer, and has done every hip opener on the internet. Nothing has changed in eight months. That is your first clue. A limit that never moves is not a tissue you can lengthen. It is bone approaching bone.\n\n' +
        '## Where the thigh bone meets the pelvis\n\n' +
        'The femur meets the pelvis at an angle, and no two people share the same one. Look from the front. The angle between the line of the femoral neck and the line of the shaft is the **neck-shaft angle**, near 125 degrees in the average adult. At birth it is closer to 150 degrees, and years of walking bring it down. Above about 135 degrees is coxa valga; below about 120 degrees is coxa vara.\n\n' +
        'That matters, because the angle sets how far sideways the greater trochanter sits from the centre of the hip joint, and that distance is the lever the abductors pull on: the **abductor moment arm**. A more upright neck shortens the lever, so gluteus medius must pull harder to hold the pelvis level on one leg, and harder pulling presses more force through the femoral head. A more horizontal neck lengthens the lever and makes that job easier, at the cost of more bending and shear through the neck itself. Every hip is a trade struck long before you met it.\n\n' +
        '## Which way the neck points\n\n' +
        'Now look down the thigh bone from above. The femoral neck does not sit in the same plane as the two knuckles at the bottom of the femur; it points forward. That forward twist is **femoral anteversion**, roughly 8 to 15 degrees in an adult, down from 30 to 40 degrees in a baby, and it is the main reason hip rotation is shared out so differently between people. More anteversion seats the head deeper in the socket as the leg turns in, so those hips get generous turn-in and stingy turn-out. Their owners sat in W as children and now run with the kneecaps pointing slightly inward. A femur twisted the other way, called retroverted, does the reverse: plenty of turn-out, very little turn-in, feet splayed at rest.\n\n' +
        'The socket has numbers of its own. The acetabulum usually faces forward by about 15 to 20 degrees, and its depth is described by the **lateral centre-edge angle**, normally 25 to 39 degrees. Below roughly 20 to 25 the head is undercovered, which is dysplasia; above 40 it is overcovered.\n\n' +
        '## Shape at the rim\n\n' +
        'Lay one more variable over that. **Cam morphology** is a head and neck junction that is not quite round, usually at the upper front, measured as an alpha angle above roughly 55 to 60 degrees. **Pincer morphology** is a socket that covers too much, in one spot or all the way round. Both narrow the gap between the femoral neck and the socket rim as the hip bends and turns in, which is exactly the corner a deep, narrow, toes-forward squat drives into.\n\n' +
        'Here is the part that gets butchered online. Cam morphology is very common in people who never have a symptom in their lives, and commoner still in men and in athletes who loaded their hips hard while the growth plate was open. The Warwick Agreement is explicit that femoroacetabular impingement syndrome needs three things at once: symptoms, clinical signs, and imaging findings.\n\n' +
        '> Key idea: Nobody should be told they have impingement because their squat stops early, and you must not be the one who says it.\n\n' +
        'What follows for Kate is unglamorous. If her femoral neck is meeting the upper front rim at depth, taking the leg wider and turning it out swings the neck away from that corner. That is why widening her stance and turning her feet out often buys real depth inside a single session, and no soft tissue adapts fast enough to explain a change that quick. Try it, and treat what happens as information.\n\n' +
        'Keep the claim honest in both directions. You cannot read version off somebody’s walk, the trochanteric prominence test agrees with imaging only roughly, and nobody needs a scan in order to squat. The mechanical case that bone shape sets a person’s usable range is old and strong. The evidence that picking a stance from imaging changes injury outcomes barely exists, because nobody has run that trial. So take the modest position: find her stance by testing, stop calling the result a fault, and stop selling her a mobility programme for a shape.',
    },

    // 3a ── hip shape figure ─────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u4-visual-hip',
      title: 'Three hips, three stances',
      diagramId: 'lower-limb-hip-shape',
      caption:
        'The same instruction given to three different hips. Socket depth and the forward twist of the femoral neck decide how much room the joint has, and therefore which stance lets a person reach depth without her pelvis rolling under.',
      callouts: [
        { id: 'apt502-u4-vh1', label: '1', text: 'Read the top row as room to move. A shallower socket covers less of the head and leaves more clearance in deep flexion. A deeper socket runs the neck into the rim sooner. Neither shape is visible from the outside, and neither is a fault.' },
        { id: 'apt502-u4-vh2', label: '2', text: 'The middle row is the forward twist of the neck. More twist means more turn-in and less turn-out, so that person is usually happier with the feet closer to straight. Less twist does the reverse, and her feet sit turned out even at rest.' },
        { id: 'apt502-u4-vh3', label: '3', text: 'The bottom row is what you actually see in the gym. Stance width and foot angle are not style choices. They are how a person finds the corner of the joint where there is still room to move.' },
        { id: 'apt502-u4-vh4', label: '4', text: 'The footer is the part to keep. You cannot measure any of this by looking, so the figure is a way of thinking rather than a way of diagnosing. The test is to change the stance and watch what her depth and her pelvis do inside the same session.' },
      ],
    },

    {
      type: 'concept', id: 'apt502-u4-c2', heading: 'What the gluteals and hamstrings actually do, and where',
      body:
        'Ask most trainers what gluteus maximus does and you get “hip extension”. True, and almost useless, because the question you need answered is where. It arises from the back of the ilium, the sacrum and coccyx, the sacrotuberous ligament and the thoracolumbar fascia. At the far end it does something unusual: roughly the upper three quarters runs into the iliotibial tract rather than onto bone, and only the deeper lower quarter reaches the gluteal tuberosity. Inferior gluteal nerve, L5 to S2. Its fibres fan across the joint, so upper fibres pull the thigh away from the midline, lower fibres pull it back in, and the whole muscle turns it outward.\n\n' +
        '## Strong in the hole, weak at the top\n\n' +
        'Imaging and modelling agree on something that should change your programming. The lever this muscle pulls on to extend the hip is not fixed: it grows as the hip bends and shrinks as the hip returns to neutral. Now add the **length-tension relationship**, which is simply the fact that a muscle at its shortest makes the least active force, and at full extension gluteus maximus is at its shortest. Both effects point the same way. Gluteus maximus is at its mechanical worst exactly where a barbell hip thrust asks the most of it, since at lockout the bar sits furthest from the hip while the muscle’s own lever is shortest. That is not an argument against hip thrusts. It is why the last five degrees of a heavy one feel the way they do.\n\n' +
        'It is also where folklore outran data. High surface EMG has been treated for a decade as though it forecast growth. It does not: EMG is electrical activity in one slice of muscle under one condition. When training studies were finally run, back squats and barbell hip thrusts grew glutes by broadly similar amounts, even though squats load the muscle long and thrusts load it short. A promising literature argues that long muscle lengths favour growth, which predicts the opposite result, and the glute-specific data are thinner than the confidence with which people quote them. Both build glutes, they load different parts of the range, and running both is a hedge rather than a compromise.\n\n' +
        '> Key idea: “The glutes aren’t firing” means nothing physiologically. Muscles have no on switch. You are looking at a strength shortfall, an unfamiliar coordination demand, or pain changing how she will load a joint, and those three need three different answers.\n\n' +
        '## Holding the pelvis level\n\n' +
        '**Gluteus medius** runs from the outer ilium to the side of the greater trochanter, **gluteus minimus** lies underneath it and reaches the front facet, and both take the superior gluteal nerve. Medius is split by region the way maximus is: front fibres bend the hip and turn it in, back fibres extend it and turn it out, and together they lift the leg away from the midline. Their job is holding the pelvis steady over one leg. Their lever is roughly half the distance from the hip joint out to the body’s line of gravity, so they must produce about twice body weight to keep the pelvis level, and the femoral head wears two and a half to three times body weight while she stands still. Running multiplies it.\n\n' +
        'That explains a compensation you have watched a hundred times. A client with a sore hip leans her trunk over the standing leg without being taught, because shifting her weight towards that hip shortens the lever gravity pulls on and lets the abductors work less. Intelligent, not lazy. Deeper again sit piriformis, the obturators, the gemelli and quadratus femoris, and their twisting effect changes with hip angle. Piriformis turns the hip out near neutral and behaves more like an internal rotator once the hip is bent past roughly 60 to 90 degrees. Training “the external rotators” seated at 90 degrees is not the same job as training them standing.\n\n' +
        '## Two joints at once\n\n' +
        'Three of the four hamstrings cross both the hip and the knee. A muscle that spans two joints like that is called **biarticular**. The fourth one does not, and that asymmetry explains most of what is interesting about the group. Biceps femoris long head, semitendinosus and semimembranosus all leave the ischial tuberosity and run on the tibial division of the sciatic nerve. **Biceps femoris short head** starts on the back of the femur, crosses only the knee, and takes the common fibular division. It is the one hamstring wired to a different nerve, which is still a live hypothesis for why the long head beside it is the most frequently torn muscle in sport.\n\n' +
        'Crossing two joints means length depends on both. Bending the hip lengthens the group; bending the knee shortens it. A squat does both at once, so hamstring length barely changes on the way down. That is why “stretch your hamstrings and you will squat deeper” is a category error, and why a straight-leg raise, the one position that makes them as long as they get, tells you almost nothing about a squat.\n\n' +
        '## Where they tear, and what to train\n\n' +
        'The same logic explains the injury. In sprinting the dangerous instant is late swing: the hip is bent, the knee is straightening, the two actions add instead of cancelling, and muscle and tendon length peaks under a heavy braking load, with biceps femoris long head taking the most strain. Whether the tissue truly fails there or at early stance is still argued, and late swing has more support without having closed the question.\n\n' +
        'Exercise choice follows the architecture, not the marketing. Knee-dominant work such as the Nordic curl grows semitendinosus most; hip-dominant work such as the Romanian deadlift or a 45 degree hip extension biases biceps femoris long head and semimembranosus. Pick the joint and you pick the region. The most instructive fact about the Nordic curl is not mechanical: pooled trials put the drop in hamstring injuries at roughly half, and professional teams still barely use it. That is a compliance problem, not an evidence problem.',
    },
    {
      type: 'concept', id: 'apt502-u4-c3', heading: 'The knee is a compromise, and it shows',
      body:
        'A client tells you her knee is fine in the gym and horrible on the stairs at work. Leg pressing 140 kilos does not bother her. Walking down two flights to the car park makes her wince at the front of the kneecap. Most trainers hear that and reach for a story about weakness. The more useful story is about shape. Look at what the knee is: two rounded knuckles of femur balanced on an almost flat tibial plateau, with hardly any bony fit between them, asked to be loose enough for a deep squat and steady enough to cut at speed under several times body weight. Everything distinctive about this joint exists to paper over that contradiction.\n\n' +
        '## The twist nobody sees\n\n' +
        'Through roughly the last 20 to 30 degrees of straightening, the tibia turns outward about 10 degrees on the femur when the foot is free, or the femur turns inward on a planted tibia. This is the **screw-home mechanism**, explained by three things: the inner femoral knuckle has a longer articular surface, the anterior cruciate ligament tightens, and the quadriceps pull slightly outward through the patellar tendon. Popliteus unlocks it by turning the tibia back inward to start the bend. It is textbook orthodoxy, and it deserves a caveat textbooks rarely give it. The classic numbers come from cadaver preparations, and studies that image living joints in motion find the pattern inconsistent, smaller than advertised, and in some people absent or reversed. Treat it as a real tendency built into the joint rather than an event you can coach.\n\n' +
        '## Where the compromise gets paid for\n\n' +
        'The menisci are the invoice. Two fibrocartilage wedges deepen the plateau and spread load. The inner one is C-shaped and tied to the deep medial collateral ligament and the capsule, so it moves less and tears more often. The outer one is more circular and more mobile, with the popliteus tendon slipping through a gap in its attachment. Their trick is **hoop stress**: the collagen runs in rings, so squashing a meniscus from above turns into tension around the ring, anchored at the front and back roots. That is how a wedge of cartilage stops a femoral knuckle squirting sideways. The anchoring is not a detail. A **root tear** behaves much like removing the whole meniscus, because a ring with a cut end carries no ring tension. In full extension the menisci carry roughly half the load crossing the joint, and in the lateral compartment at 90 degrees of bend as much as 80 to 90 per cent. Take meniscal tissue out and peak contact stress climbs, with osteoarthritis following years later. That sets up a question your clients will ask. Keyhole surgery to trim a degenerative meniscal tear has repeatedly failed to beat sham surgery or a course of exercise in randomised trials, so a scan showing a worn tear is not a surgical emergency.\n\n' +
        '## The ligament that fails without contact\n\n' +
        'The anterior cruciate is the other insurance policy, and it is loaded in ways that surprise people. Its two bundles resist the tibia sliding forward on the femur, plus inward twist and, less strongly, the knee falling inward. The quadriceps work against it at low bend angles: below roughly 30 degrees the patellar tendon tugs the tibia forward, so a hard quadriceps contraction near full extension strains the ACL, while the hamstrings pull the tibia backward and protect it. Around 70 per cent of ruptures happen without contact, inside about 40 milliseconds of the foot landing, knee close to straight, collapsing inward with the tibia twisting, trunk tipped sideways, and the body’s weight behind and outside the foot. Video work has argued for years about which way the tibia twists in that instant, and current model-based studies suggest inward first with outward following. Bone shape contributes too: a steeper backward slope on the tibial plateau keeps showing up as a risk factor, and nothing you do in a gym changes it.\n\n' +
        '## Why stairs hurt and the leg press does not\n\n' +
        'The patella is the biggest **sesamoid** in the body, meaning a bone embedded inside a tendon, and its job is to hold the quadriceps tendon away from the joint centre so the muscle pulls on a longer lever, best of all in the middle of the range. Its contact behaviour answers your client’s question. Near full extension only a small band at the lower tip of the kneecap meets the femoral groove. As the knee bends, that band travels toward the top of the kneecap and the contact area grows. Past roughly 90 degrees the quadriceps tendon itself reaches the groove and starts sharing load, and the odd facet on the inner edge only joins in at extreme bend.\n\n' +
        '> Key idea: Joint force climbs steeply as the knee bends under load, but stress is force divided by area, and the area is climbing at the same time.\n\n' +
        'So the deep part of a squat is not automatically the provocative part, while a heavily loaded seated knee extension near full straightening is genuinely high stress even though it looks harmless: biggest external moment, smallest contact patch. Descending stairs sits in the same trap, with high quadriceps demand at moderate bend, lengthening under load, one leg at a time. That is why the standard rehabilitation habit pairs foot-planted work in the shallower range with foot-free work in the deeper range. Foot planted is what people mean by **closed chain**; foot free is open chain. Two caveats. Those stress curves come from modelling rather than measurement inside living joints, and the numbers shift with technique, load and the shape of an individual’s femoral groove. Use the shape of the relationship, not the decimal places.',
    },

    // 3b ── patellofemoral load figure ───────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u4-visual-pfj',
      title: 'What the kneecap feels through the range',
      diagramId: 'lower-limb-patellofemoral-load',
      caption:
        'Contact, force and stress at the kneecap drawn on one set of axes. This is the picture that explains why a client can leg press comfortably and still dread the stairs.',
      callouts: [
        { id: 'apt502-u4-vp1', label: '1', text: 'Top row: near full straightening only a small band at the lower tip of the kneecap touches the femur. As the knee bends, that band travels upward and the contact area grows, and past about 90° the quadriceps tendon reaches the groove and shares the load.' },
        { id: 'apt502-u4-vp2', label: '2', text: 'Solid lines: with the foot planted, joint force climbs steeply as she goes deeper, and contact area climbs with it. Divide one by the other and stress rises far less than force does. That is the whole answer to “is deep squatting bad for knees”.' },
        { id: 'apt502-u4-vp3', label: '3', text: 'Dotted line: loaded knee extension with the foot free runs the other way. Near full straightening the external moment is biggest and the contact patch smallest, so the position that looks gentlest carries the most stress per square millimetre.' },
        { id: 'apt502-u4-vp4', label: '4', text: 'Read the shapes, not the numbers. These curves come from modelling rather than from measurement inside living joints, and they shift with technique, load and the shape of an individual’s femoral groove.' },
      ],
    },

    {
      type: 'concept', id: 'apt502-u4-c4', heading: 'Dynamic knee valgus: what it is, what drives it, what it predicts',
      body:
        'You are watching a single-leg squat and the knee falls inward. Everybody in the room can see it, everybody has an opinion, and most of those opinions name a muscle. Before you join in, be precise about what you are looking at, because **dynamic knee valgus** is not a movement of the knee at all. It is a posture made of several segments at once: the hip moving inward and turning inward, an apparent inward angle at the knee that the knee itself has very little sideways range to produce, the tibia twisting, and the heel bone tipping. The knee is mostly a passenger. The segments above and below it are driving, which is why the same-looking picture can have two completely different causes in two clients standing side by side.\n\n' +
        '## Driven from above\n\n' +
        'This is the version most people are taught. The femur travels inward and turns inward under a pelvis that may itself be dropping on the free side, which is called **contralateral pelvic drop**, and the knee follows. What matters is the hip’s ability to control the leg sideways and rotationally: gluteus medius and minimus holding the pelvis, gluteus maximus and the deep rotators resisting the femur turning in, and, as often as not, the staying power to keep doing it for eight repetitions rather than one. When the knee behaves for six reps and collapses on the last two, you are watching a capacity problem, not a technique problem, and coaching louder will not fix it.\n\n' +
        '## Driven from below\n\n' +
        'The other version arrives from the ground. With the foot planted, the heel bone tipping outward comes packaged with the talus rolling inward and downward, and because no muscle attaches to the talus, it takes the tibia with it into inward rotation. The tibia has no choice, which is why this is called **obligate tibial rotation**, and the twist travels straight up the shin to the knee. A foot that rolls in fast, or keeps rolling in past the point where it should be recovering, will feed valgus at the knee however strong the hip is. So will an ankle that cannot bend forward: if the shin cannot travel over the foot, the missing range gets taken from the joints below, and the knee drifts inward in the process.\n\n' +
        'That last claim is not speculation. Put a wedge under someone’s forefoot so the toes are raised and forward bend at the ankle is blocked, and the knees move inward more during a squat, with less knee bend and less quadriceps activity, in the same session. You can run the test in reverse in thirty seconds by slipping a small heel lift under a client and watching what her knee does.\n\n' +
        '## What it actually predicts\n\n' +
        'Now the uncomfortable part, and the reason this section exists. The idea that valgus predicts injury rests on one influential prospective study of a few hundred female athletes, in which a handful of ACL injuries occurred and the inward knee moment at landing separated the injured from the uninjured with test properties that sounded usable. It was a genuinely important paper. It has not replicated. A much larger prospective cohort of over 700 elite female handball and football players, with more than 40 ACL injuries, found drop-jump knee position did not identify who went on to tear a ligament.\n\n' +
        'That is the pattern across sports injury screening generally. A variable associates with injury in one sample, then fails to sort individuals in a bigger one. A **screening test**, meaning a test you use to decide who needs an intervention, needs three things: a strong prospective association, good enough discrimination in a sample large enough to produce enough injuries, and a treatment that works by changing the thing being screened. Very few movement screens clear even the first hurdle. The parallel story at the kneecap is just as instructive. Hip abductor weakness is found consistently in people who already have patellofemoral pain and inconsistently in people before they develop it, which points toward consequence rather than cause. Hip-targeted exercise still improves outcomes better than knee-only exercise. The treatment works whether or not the causal story is right.\n\n' +
        '> Key idea: Treat valgus as a description of how somebody is loading, not as a diagnosis and not as a gate she has to pass.\n\n' +
        'So what do you do on Tuesday morning? Wanting less of it under heavy load is reasonable, because a sideways moment at a joint with almost no sideways range is a plausible tissue stress, and because the training that reduces it (hip strength through range, single-leg capacity, ankle range, loading the foot) is training your client wants anyway. Withholding running or lifting until her knees track a line you drew is not reasonable, and neither is telling her that her movement is dangerous on the strength of a screen that failed its own validation study. When you do see it, test which end it is coming from before you write the programme. Block the foot and watch the knee, wedge the heel and watch the knee, cue the hip and watch the knee. Three tests, three minutes, and you will know more than the person who guessed a muscle.',
    },

    // 3c ── valgus drivers figure ────────────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u4-visual-valgus',
      title: 'Which end is the knee falling in from?',
      diagramId: 'lower-limb-valgus-drivers',
      caption:
        'One inward knee, drawn with both of the causes that produce it and with the three tests that tell them apart. The knee has almost no sideways range of its own, so it is rarely the culprit.',
      callouts: [
        { id: 'apt502-u4-vv1', label: '1', text: 'From above: the femur travels inward and turns inward, often under a pelvis dropping on the free side. What you are testing is whether the hip can hold that position for a whole set, not for one repetition.' },
        { id: 'apt502-u4-vv2', label: '2', text: 'From below: with the foot planted, the heel tips outward and the talus rolls inward and downward on top of it. No muscle attaches to the talus, so the tibia is dragged into rotation and the knee goes with it.' },
        { id: 'apt502-u4-vv3', label: '3', text: 'Blocking forward bend at the ankle produces the same picture experimentally, which is the cleanest demonstration that valgus can be driven from the ground. Slip a heel lift under her and you run the experiment backwards in half a minute.' },
        { id: 'apt502-u4-vv4', label: '4', text: 'The footer is the professional line. Drop-jump knee position failed to predict ACL injury in over 700 elite athletes carrying more than 40 injuries, so this is a description of loading and never a gate somebody has to pass before she is allowed to train.' },
      ],
    },

    {
      type: 'concept', id: 'apt502-u4-c5', heading: 'The ankle as rate-limiter, the foot as a spring',
      body:
        'Her heels come off the floor at the bottom of every squat, and she has been told for three years that her calves are tight. She stretches them daily. Nothing has changed. Before you write another stretch into her programme, look at what the joint is made of, because the answer is often not muscle at all.\n\n' +
        '## The slot the ankle moves in\n\n' +
        'The talocrural joint is a slot, called a mortise: the shin bone and its inner knob above and inside, the fibula’s outer knob outside, the top of the talus in the middle. The talus is wider at the front than the back, so bending the ankle forward drives the wide part into the narrow part of the slot. That makes forward bend the **close-packed position**, where the surfaces fit most tightly, and it means the fibula has to move: a millimetre or two sideways, a little outward twist, a small glide upward, with the joint between the two shin bones widening to allow it. That is why an old sprain can leave forward bend short years later with nothing tight in the muscular sense.\n\n' +
        'The axis is slanted too. It runs roughly between the tips of the two knobs, and the outer knob sits further back and further down than the inner one. So pure up and down ankle motion is a fiction: forward bend comes with a little turn out and roll, pointing down with a little turn in and tilt.\n\n' +
        '## Measure it, then find what is blocking it\n\n' +
        'Forward bend at the ankle, which is dorsiflexion, is the classic **rate-limiter** of the lower limb, meaning the one thing that caps what everything above it can do, and it is worth measuring rather than assuming. Walking needs about 10 degrees. A full-depth squat needs a great deal more, and the narrower the stance and the more upright the torso, the more it needs. The weight-bearing lunge test, knee driven to the wall with the heel down, is the measure to use, because it loads the joint the way squatting does. The usual reference is around 9 to 14 centimetres, and a side-to-side difference over about a centimetre and a half is generally treated as meaningful.\n\n' +
        'Then work out what is stopping it. Bending the knee slackens gastrocnemius, because gastrocnemius crosses the knee as well as the ankle. So a restriction still there in the knee-to-wall position is not a gastrocnemius problem. It points at soleus, at the back of the capsule, or at the joint itself, and a hard blocky feel at the front of the ankle points at the joint most of all. That one distinction decides whether you prescribe a stretch, loaded work at the end of range, or a referral for joint mobilisation. Get it wrong and you will spend twelve weeks lengthening a muscle that was never the problem.\n\n' +
        '## The joint below the ankle\n\n' +
        'The subtalar joint runs on an axis slanted to all three planes, classically about 42 degrees up from the horizontal and 16 degrees off the line of the foot, with wide variation between people. A slanted axis makes every movement happen in three planes at once. **Pronation** is the heel tipping outward plus the foot swinging outward plus a little forward bend; supination is the reverse. With the foot on the ground the sequence inverts: the heel bone tips outward on the floor, the talus rolls inward and downward on top of it, and since no muscle attaches to the talus, the tibia must follow into inward rotation. The subtalar joint is a torque converter between the ground and the leg, and it is the mechanical reason a foot problem turns up at a knee. Further forward, the transverse tarsal joint is classically described as loosening when the hindfoot pronates, because its two axes come closer to parallel, and locking when it supinates. Recent imaging of living feet has complicated that tidy account without replacing it, so hold it loosely.\n\n' +
        '> Key idea: Pronation is not a defect. It is how the foot absorbs load and moulds to ground that is never flat, and a foot that does not pronate is a worse foot, not a better one.\n\n' +
        'The evidence here is unusually clean for this field. Nearly a thousand novice runners followed for a year in an ordinary neutral shoe showed no extra injury risk in the pronated group, which in fact recorded fewer injuries per thousand kilometres. Large military trials that handed out shoes by foot type, motion control for flat feet and cushioning for high arches, did not reduce injuries compared with giving everybody the same shoe. None of that means arch support never helps a person in pain, because orthoses do help some presentations. It means the screening logic of “she pronates, so she needs correcting” has been tested and has failed, and repeating it puts a defect label on a normal foot.\n\n' +
        '## The foot is a spring\n\n' +
        'The better model is a spring that stiffens on command. Hicks described the **windlass mechanism** in 1954 and it has held up. Pulling the toe joints up, especially the big toe, winds the plantar aponeurosis around the heads of the metatarsals like a cable around a drum. That shortens the distance from heel to forefoot, raises the inner arch, supinates the hindfoot and turns a floppy adaptor into a stiff lever for push-off. You can show it to a seated client in ten seconds by lifting her big toe and watching the arch rise. It also explains why a stiff big-toe joint is a problem well beyond the toe: lose that extension and you lose the mechanism that stiffens the whole foot.\n\n' +
        'The arch stores and returns elastic energy, something like a sixth of the mechanical energy of a running stride, and it is not a passive structure. The plantar intrinsic muscles (abductor hallucis, flexor digitorum brevis, quadratus plantae and the interossei) are recruited in proportion to the load on the arch and add measurably to its stiffness and control, which is the observation the foot core model is built on. Be careful how far you push it. Nerve block work suggests these muscles contribute little to propulsion or running economy directly, and that their value lies in controlling stiffness and toe function rather than in producing force. Training them is defensible and cheap. Promising a client that short-foot exercises will fix her knee is not, and moving her abruptly into minimal footwear carries a real and documented bone stress cost.',
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u4-visual',
      title: 'The lower limb as a linked chain',
      diagramId: 'lower-limb-chain',
      caption:
        'Hip architecture, knee alignment and kneecap contact, and the axes and windlass of the foot, drawn together because they behave together. The right-hand column follows a single restriction upward through a squat.',
      callouts: [
        { id: 'apt502-u4-v1', label: '1', text: 'Neck-shaft angle and femoral version are architecture, not posture. They set the abductor lever and the way available hip rotation is shared out before anyone teaches a squat. That is why two clients given the identical cue produce two different-looking movements and neither is wrong.' },
        { id: 'apt502-u4-v2', label: '2', text: 'The Q-angle is drawn here because you will be asked about it, not because it earns its reputation. It is measured unreliably, and prospective evidence linking it to kneecap pain is weak. It describes a shape; it does not forecast a knee.' },
        { id: 'apt502-u4-v3', label: '3', text: 'Kneecap contact area grows as the knee bends and the contact band travels toward the top of the kneecap, with the quadriceps tendon joining in past about 90°. Force and stress therefore have different shapes through range, and that is the real reason knee angle changes what a client feels.' },
        { id: 'apt502-u4-v4', label: '4', text: 'The right-hand column is the point of the whole diagram. One restricted joint does not stay local. The missing range gets taken from the foot, the knee drifts inward through obligate tibial rotation, and the trunk pitches forward to keep the body’s weight over the midfoot. Nothing in the chain is billed separately.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt502-u4-worked',
      title: 'The squat that changed after an ankle sprain',
      scenario:
        'Marta, 38, has lifted for six years. Fourteen months ago she rolled her left ankle badly playing netball, took eight weeks off, and came back without pain. Since then her back squat has quietly changed. Depth is down about ten centimetres, her heels drift up at the bottom, her left knee travels inward below parallel, and for the last two months the front of her left knee has hurt going down stairs, never in the gym. Her previous trainer prescribed daily calf stretching and glute activation bands. Nothing has moved in eight weeks.',
      steps: [
        { id: 'apt502-u4-w1', title: 'Measure before you interpret anything',
          reasoning: 'Weight-bearing lunge test, both sides, same shoes, heel down. Left 6 cm, right 12.5 cm. That is a large difference, on the side she sprained, on the side her knee dives, and on the side that hurts. You now have an objective number to retest against, which the previous eight weeks never produced. Notice what you have not done. You have not decided the cause yet.' },
        { id: 'apt502-u4-w2', title: 'Work out what is blocking it: joint or muscle?',
          reasoning: 'The lunge test is done with the knee bent, which slackens gastrocnemius, because gastrocnemius crosses the knee. A restriction that shows up in that position is not gastrocnemius. The end of her left ankle range feels hard and abrupt at the front rather than springy, and forward bend is limited to much the same degree with the knee straight, so bending the knee buys her almost nothing. That pattern points at the talocrural joint itself, which is plausible fourteen months after a significant sprain, because forward bend is the close-packed position and needs the fibula to move and the joint between the shin bones to give. Daily calf stretching was aimed at the wrong tissue, which is why it changed nothing.' },
        { id: 'apt502-u4-w3', title: 'Predict what should follow, then look for it',
          reasoning: 'If the shin cannot travel forward over the left foot, the missing range has to come from somewhere else. Predictions: the heel lifts, the left foot rolls in and turns out more than the right, the knee drifts inward as the tibia is dragged into rotation, and the trunk pitches further forward as depth increases. You film one set and see all four, in that order, on the left only. A prediction that comes true is worth more than an observation you explained afterwards.' },
        { id: 'apt502-u4-w4', title: 'Test the idea by changing one thing',
          reasoning: 'Put a 15 mm heel wedge under both feet and repeat the same squat. Depth improves, the heels stay down, and the inward knee travel on the left largely disappears. This is the same experiment the research literature runs in reverse, where blocking forward bend at the ankle increases inward knee movement and reduces knee bend inside a single session. The wedge is not the treatment. It is the control condition that tells you the ankle sits upstream of the knee and not the other way round.' },
        { id: 'apt502-u4-w5', title: 'Explain the knee pain with geometry, not blame',
          reasoning: 'Her knee hurts on stairs and not on the leg press. Going down stairs is one leg at a time, lengthening under load, with high quadriceps demand at moderate knee bend. The leg press is two legs, supported, and spreads load over a larger kneecap contact area at deeper bend. The pattern fits a kneecap that is not tolerating the load it is being given, made worse by the extra sideways and rotational loading on the side whose knee is drifting. It does not fit “she needs to activate her VMO”, because you cannot reliably make one part of the quadriceps fire more than the rest. It does not fit her Q-angle either, which nobody has measured and which would not predict this anyway.' },
        { id: 'apt502-u4-w6', title: 'Programme it, and be precise about what you are claiming',
          reasoning: 'Keep training. Squat to a depth she can hold with her heels down, on the wedge for now, and add loaded work at the end of her left ankle range: knee-driving-over-toe holds, and heel-elevated split squats with a slow lowering phase. Retest knee-to-wall every two weeks against the 6 cm baseline. Add single-leg hip work for capacity, and manage the stair irritation by adjusting load rather than by avoiding stairs. Refer to a physiotherapist to assess the talocrural joint, given the sprain history and that hard end-feel. What you tell Marta is that her ankle has not moved the same since the sprain and everything above it is compensating. What you do not tell her is that she has impingement, that her glutes are off, or that her knee is unstable.' },
      ],
      takeaway:
        'The previous trainer treated the loudest signs, tight-looking calves and an inward knee, with the most popular tools. You measured the joint, worked out what was blocking it, predicted what should follow, and changed one variable to check. The whole chain moved because the constraint sat at the bottom of it, and none of that required a diagnosis you are not licensed to make.',
    },

    // 6 ── interactive lab (classification) ──────────────────────────────────
    {
      type: 'classification', id: 'apt502-u4-lab',
      title: 'Lab: architecture, tissue, or capacity?',
      instructions:
        'Each finding comes from a real assessment. File it by what kind of thing it is, because that decides what you can do about it. Some findings are fixed bone shape that you plan around. Some are joint or tissue restrictions that may change with the right stimulus. Some are shortfalls in force or coordination that respond to training.',
      buckets: [
        { id: 'apt502-u4-b-bone', label: 'Fixed bone shape, plan around it' },
        { id: 'apt502-u4-b-tissue', label: 'Joint or tissue restriction, possibly changeable' },
        { id: 'apt502-u4-b-capacity', label: 'Force or coordination, trainable' },
      ],
      items: [
        { id: 'apt502-u4-l1', text: 'CT measures femoral neck anteversion at 28°, and passive hip internal rotation is 55° with external rotation of 20°',
          bucketId: 'apt502-u4-b-bone', rationale: 'Version is bone. It biases how the available rotation is shared out, and no amount of stretching redistributes it. Plan her stance and her rotational demands around the range she actually owns.' },
        { id: 'apt502-u4-l2', text: 'Hip MRI shows cam morphology with an alpha angle of 68° in a recreational lifter who has no symptoms',
          bucketId: 'apt502-u4-b-bone', rationale: 'The shape is fixed, and it is also common in people who never have symptoms. Shape plus symptoms plus clinical signs is a syndrome. Shape alone is a finding on a scan, and it must never be handed to a client as a diagnosis.' },
        { id: 'apt502-u4-l3', text: 'Lateral centre-edge angle of 43° with a hard pinch at the front reproduced at 105° of hip flexion with internal rotation',
          bucketId: 'apt502-u4-b-bone', rationale: 'Extra cover at the socket narrows the room for the femoral neck when the hip bends and turns in. You work outside that corner by changing stance and depth. You do not stretch it open.' },
        { id: 'apt502-u4-l4', text: 'Squat depth improves immediately and repeatably when stance widens by 15 cm and the feet turn out 20°',
          bucketId: 'apt502-u4-b-bone', rationale: 'No soft tissue lengthens inside one set. An instant change when the geometry changes is the signature of a bone limit: taking the femur out and turning it out moves the neck away from the socket rim.' },
        { id: 'apt502-u4-l5', text: 'Dorsiflexion is restricted with the knee straight and normal with the knee bent',
          bucketId: 'apt502-u4-b-tissue', rationale: 'Gastrocnemius crosses the knee, so bending the knee slackens it. A restriction that disappears when the knee bends is a gastrocnemius length issue, and that is a reasonable target for loaded lengthening work.' },
        { id: 'apt502-u4-l6', text: 'Knee-to-wall measures 6 cm on the previously sprained side and 13 cm on the other, with a hard, abrupt end-feel at the front of the ankle',
          bucketId: 'apt502-u4-b-tissue', rationale: 'With the knee bent, gastrocnemius is already slack, and a hard feel at the front points at the talocrural joint rather than at muscle. Forward bend is the close-packed position and needs the fibula and the joint between the shin bones to move, which a significant sprain can disturb long-term. Changeable, but not by stretching.' },
        { id: 'apt502-u4-l7', text: 'Passive extension at the big toe joint is 20°, and the inner arch does not rise when the toe is lifted',
          bucketId: 'apt502-u4-b-tissue', rationale: 'That is a windlass that will not turn. Without enough extension at the first metatarsophalangeal joint, the plantar aponeurosis cannot wind around the metatarsal head, so the foot never stiffens for push-off. Worth addressing, and worth referring if it is painful or blocked.' },
        { id: 'apt502-u4-l8', text: 'The knee tracks well for six repetitions and drifts inward on the last two of every set of ten',
          bucketId: 'apt502-u4-b-capacity', rationale: 'A restriction does not switch on at rep seven. A position that holds until it fatigues is a capacity and endurance problem in the hip and lower limb, and the fix is dose, not cueing.' },
        { id: 'apt502-u4-l9', text: 'Hand-held dynamometry shows hip abduction strength 22% lower on the symptomatic side',
          bucketId: 'apt502-u4-b-capacity', rationale: 'Trainable, with a caveat worth saying out loud. Abductor weakness alongside knee pain is frequently a consequence of the pain rather than its cause, so treat the number as something to improve and not as the explanation you have found.' },
        { id: 'apt502-u4-l10', text: 'Non-weight-bearing ankle dorsiflexion is 40°, but under load she will not let the knee travel forward past the toes',
          bucketId: 'apt502-u4-b-capacity', rationale: 'The range exists and she is not using it. That is a motor behaviour, often a belief about knees and toes and sometimes a tolerance issue, and it responds to graded exposure and to correcting the belief, not to mobility work she does not need.' },
      ],
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt502-u4-case',
      title: 'Case: the squat that stops at parallel',
      brief:
        'Nadia, 34, has trained with you for three years and squats a comfortable 90 kg. Over the last two months she has developed a sharp pinch at the front of her right hip at the bottom of the squat, and a hard stop just below parallel that she never used to have. She squats in a narrow stance with the feet almost straight ahead. Nothing hurts outside the gym. Every decision is scored against best practice.',
      startNodeId: 'apt502-u4-n1',
      nodes: [
        {
          id: 'apt502-u4-n1',
          situation:
            'Nadia describes the pinch and shows you: narrow stance, feet forward, a clean descent that stops abruptly with a wince at the bottom. She wants to know what to do about her “tight hips”.',
          choices: [
            { id: 'apt502-u4-n1a', text: 'Change one variable and re-test in the same session: widen her stance and turn the feet out about 20°, then compare depth and symptom.', to: 'apt502-u4-n2',
              quality: 'best', feedback: 'The right first move. Taking the femur out and turning it out swings the neck away from the upper front rim of the socket, so if the pinch is a room problem it should change immediately. If it does not change, you have ruled something out for free.' },
            { id: 'apt502-u4-n1b', text: 'Reduce the depth to the range that is pain-free, keep loading, and look at it properly next session.', to: 'apt502-u4-n3',
              quality: 'acceptable', feedback: 'Safe and reasonable, because she keeps training and stops provoking it. But you have deferred the cheapest and most informative test you had available, and she leaves believing her hips are tight.' },
            { id: 'apt502-u4-n1c', text: 'Prescribe a hip flexor stretching and “hip opening” routine for the pinch and keep the stance unchanged.', to: 'apt502-u4-n3',
              quality: 'poor', feedback: 'A pinch at the front at the end of hip bend is more often bone meeting bone than tissue being short, and stretching into the provocative corner keeps repeating the compression. You have also skipped the test that would have told you which it was.' },
            { id: 'apt502-u4-n1d', text: 'Tell her to push through it, since depth is a habit and the pinch will settle once she gets used to it.', to: 'apt502-u4-n3',
              quality: 'poor', feedback: 'Repeatedly loading the end of a range that has a hard stop is how a manageable irritation becomes a lasting one. New, repeatable, position-specific pain is information, not weakness.' },
          ],
        },
        {
          id: 'apt502-u4-n2',
          situation:
            'You widen her stance and turn her feet out. She squats two inches deeper on the first attempt, with no pinch, and looks genuinely surprised. She asks: “So what was wrong with my hips?”',
          choices: [
            { id: 'apt502-u4-n2a', text: '“Nothing is wrong with them. The shape of your hip joint decides which stance gives you room, and yours wants a bit more width and turnout. We just found it.”', to: 'apt502-u4-n4',
              quality: 'best', feedback: 'Accurate, and it does not turn her into a patient. Neck-shaft angle, femoral and socket version and rim shape all vary between people, and stance is how you work with that variation instead of against it.' },
            { id: 'apt502-u4-n2b', text: '“Your hips are just built that way. Don’t worry about it.”', to: 'apt502-u4-n4',
              quality: 'acceptable', feedback: 'The conclusion is right and the explanation is missing. She will hear “built badly”, and without knowing why the stance change worked she will drift back to the old one the moment somebody tells her narrow is better.' },
            { id: 'apt502-u4-n2c', text: '“That is classic impingement. You should get an MRI of that hip.”', to: 'apt502-u4-n4',
              quality: 'poor', feedback: 'You have just handed a client a diagnosis you are not qualified to make, for a problem that resolved with a stance change in front of you. Impingement syndrome needs symptoms, clinical signs and imaging together, and imaging findings are common in people who never have symptoms. Scanning her risks finding a shape and turning it into an identity.' },
          ],
        },
        {
          id: 'apt502-u4-n3',
          situation:
            'Three weeks on, Nadia is training without pain but her depth is stuck above parallel and she is frustrated. “I’ve done the stretches every day. Am I just not flexible?”',
          choices: [
            { id: 'apt502-u4-n3a', text: '“Let’s try something before we blame flexibility. Widen your stance, turn your feet out, and squat one set right now.”', to: 'apt502-u4-n2',
              quality: 'best', feedback: 'Late, but exactly right. Three weeks of unchanged range after diligent stretching is itself evidence that you are not looking at a tissue length problem, and the test costs one set.' },
            { id: 'apt502-u4-n3b', text: '“Some people just aren’t built to squat deep. Let’s move to leg press and box squats permanently.”', to: null,
              quality: 'poor', feedback: 'Half true and wholly premature. Some people genuinely are not built to squat deep in a narrow stance. But you never tested whether a different stance would give her the depth, so you have retired an exercise she may not need to retire, and confirmed her suspicion that her body is the problem.' },
            { id: 'apt502-u4-n3c', text: '“Keep stretching and add more mobility work. Twenty minutes a day should do it.”', to: null,
              quality: 'poor', feedback: 'Three weeks of no change is a result. Increasing the dose of something that has produced nothing, without re-examining the idea behind it, is how clients end up spending months on a shape that was never going to move.' },
          ],
        },
        {
          id: 'apt502-u4-n4',
          situation:
            'A fortnight later Nadia mentions that a friend at her old gym “had FAI surgery for exactly this” and is now wondering whether she should be getting hers looked at.',
          choices: [
            { id: 'apt502-u4-n4a', text: 'Explain the difference between a shape on a scan and a syndrome, which needs symptoms, clinical signs and imaging together, note that she currently has none of it in the stance that suits her, and offer to refer if the pinch comes back or starts bothering her outside the gym.', to: 'apt502-u4-n5',
              quality: 'best', feedback: 'This is the whole professional balance in one answer: accurate about the distinction, honest about what you do not know, and carrying a clear named trigger for referral rather than a vague “see someone if it gets worse”.' },
            { id: 'apt502-u4-n4b', text: 'Refer her to a sports physician immediately, without discussion, on the grounds that hip pain is out of scope.', to: 'apt502-u4-n5',
              quality: 'acceptable', feedback: 'Referring is never wrong, and staying inside scope is right. But a referral with no context leaves her more worried than she needs to be about a symptom that has already resolved, and she may read your silence as concern you are not voicing.' },
            { id: 'apt502-u4-n4c', text: 'Tell her surgery fixed her friend and would probably fix her too, and that she should ask for it.', to: null,
              quality: 'poor', feedback: 'Recommending surgery is far outside your scope, and the reasoning is broken as well: one anecdote, no diagnosis, and a client whose symptom is currently absent. Nothing about this is defensible.' },
          ],
        },
        {
          id: 'apt502-u4-n5',
          situation:
            'Nadia is squatting pain-free in her new stance and wants to know what her programme should look like now. “Should I be doing anything special for my hips?”',
          choices: [
            { id: 'apt502-u4-n5a', text: '“Train the range you have, in the stance that suits you, and build strength through it. We’ll keep an eye on the pinch as a signal, and if it comes back at a depth that used to be fine, we look again.”', to: null,
              quality: 'best', feedback: 'Load the available range, watch the symptom as data, and keep a trigger for re-evaluating. Nothing about her hip needs special treatment. It needs a stance that fits and progressive loading like everything else.' },
            { id: 'apt502-u4-n5b', text: '“Let’s add a daily hip mobility circuit as insurance. It can’t hurt.”', to: null,
              quality: 'acceptable', feedback: 'It probably will not hurt, and that is the strongest thing you can say for it. Prescribing a daily routine you have no reason for spends her time and quietly teaches her that her hip is fragile and needs maintenance.' },
            { id: 'apt502-u4-n5c', text: '“Avoid deep squatting from now on. It’s the depth that caused this.”', to: null,
              quality: 'poor', feedback: 'The depth was never the problem. The combination of depth with a stance that ran her femur into the rim was. She is now squatting deeper than before, without pain. Removing an exercise she tolerates is a cost with no matching benefit.' },
          ],
        },
      ],
    },

    // 8 ── error identification ──────────────────────────────────────────────
    {
      type: 'errorId', id: 'apt502-u4-errorid',
      title: 'Audit this assessment note',
      brief:
        'A junior colleague has written up a new client and asked you to check it before she sends it. Flag every statement that misuses anatomy or overstates what the evidence supports. Leave the sound reasoning alone, because some of this note is genuinely good.',
      document:
        'ASSESSMENT. Client L.O., 29, returning to running after two years off.\n\nOverhead squat: knees collapse inward at depth. Positive for dynamic valgus, which is a validated predictor of ACL injury, so running is deferred until the valgus is corrected. Ankle dorsiflexion measured 6 cm knee-to-wall on the right and 12 cm on the left; the right was limited with the knee both straight and bent, so the restriction is unlikely to be gastrocnemius alone. Q-angle measured at 21° on the right, confirming that her patellofemoral pain is structural and unlikely to improve with training. Foot posture: the right foot pronates visibly at midstance, so motion-control shoes and a medial post have been prescribed to stop the pronation and protect the knee. Her glutes are not firing, so I have added banded glute activation before every session to switch them back on. Hamstring flexibility is poor (straight-leg raise 62°), which is what is limiting her squat depth. Plan: eight weeks of hip abductor strengthening, VMO-specific terminal knee extensions to restore medial patellar tracking, and daily calf stretching. Reassess dorsiflexion at four weeks.',
      findings: [
        { id: 'apt502-u4-e1', text: '“Positive for dynamic valgus, which is a validated predictor of ACL injury”', isError: true,
          rationale: 'It is not validated. One influential prospective study with a small number of injuries reported usable test properties. A much larger prospective cohort of elite female athletes with over 40 ACL injuries found drop-jump knee position did not predict who got hurt. Valgus is a description of loading, not a screening test.' },
        { id: 'apt502-u4-e2', text: '“the right was limited with the knee both straight and bent, so the restriction is unlikely to be gastrocnemius alone”', isError: false,
          rationale: 'This is correct and well reasoned. Gastrocnemius crosses the knee, so bending the knee slackens it, and a restriction that persists in that position implicates soleus, the back of the capsule, or the talocrural joint itself. Keep this sentence.' },
        { id: 'apt502-u4-e3', text: '“Q-angle measured at 21°, confirming that her patellofemoral pain is structural and unlikely to improve with training”', isError: true,
          rationale: 'Two errors in one clause. The Q-angle is measured unreliably, both between examiners and by the same examiner twice, and prospective evidence linking it to kneecap pain is weak. Telling a client her pain is structural and untreatable is also unsupported and actively harmful, because patellofemoral pain responds well to loading programmes.' },
        { id: 'apt502-u4-e4', text: '“motion-control shoes and a medial post have been prescribed to stop the pronation and protect the knee”', isError: true,
          rationale: 'Pronation is a normal and necessary movement, and prospective work in nearly a thousand novice runners found pronated feet at no increased injury risk. Large trials assigning footwear by foot type did not reduce injuries. Prescribing footwear and orthotic devices is also outside a trainer’s scope in most jurisdictions.' },
        { id: 'apt502-u4-e5', text: '“Her glutes are not firing, so I have added banded glute activation before every session to switch them back on”', isError: true,
          rationale: 'Muscles do not have an on switch, and gluteal “inhibition” or “amnesia” has no supported physiological meaning. What is usually being observed is a strength shortfall, an unfamiliar coordination demand, or pain altering how somebody loads the joint, and each of those needs a different response than a band.' },
        { id: 'apt502-u4-e6', text: '“Hamstring flexibility is poor (straight-leg raise 62°), which is what is limiting her squat depth”', isError: true,
          rationale: 'The hamstrings cross two joints. In a squat they lengthen at the hip and shorten at the knee at the same time, so their overall length barely changes and they are an implausible depth limiter. A straight-leg raise measures the group at its longest, which is a position the squat never creates.' },
        { id: 'apt502-u4-e7', text: '“VMO-specific terminal knee extensions to restore medial patellar tracking”', isError: true,
          rationale: 'Making vastus medialis obliquus fire more than the rest of the quadriceps is not something you can reliably produce in training, and it remains contested even in laboratory work. Terminal knee extension is also the smallest kneecap contact area paired with the largest external moment when the foot is free, which is a high-stress position to load in somebody with pain at the front of the knee.' },
        { id: 'apt502-u4-e8', text: '“Reassess dorsiflexion at four weeks”', isError: false,
          rationale: 'Sound practice. An objective baseline with a named retest date is exactly what the rest of this note lacks, and it is the line that will tell her whether anything she prescribed actually worked.' },
      ],
    },

    // 9 ── active-recall set ─────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt502-u4-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'apt502-u4-r1', front: 'Typical adult femoral neck-shaft angle, and what it changes?',
          back: 'About 125°, down from roughly 150° at birth. Coxa valga is above about 135°, coxa vara below about 120°. The angle sets how far sideways the greater trochanter sits from the hip joint centre, and that distance is the lever the abductors pull on. A more upright neck means more abductor force and a larger force pressed through the joint to keep the pelvis level.' },
        { id: 'apt502-u4-r2', front: 'What does femoral anteversion do to available hip rotation?',
          back: 'Adult anteversion is roughly 8 to 15°. More anteversion seats the head better as the leg turns in, giving generous internal rotation and limited external rotation. Retroversion does the reverse. It is bone, not tissue, so you plan stance around it rather than stretching it.' },
        { id: 'apt502-u4-r3', front: 'What separates cam or pincer morphology from FAI syndrome?',
          back: 'Symptoms and clinical signs. The Warwick Agreement requires all three together: symptoms, signs, and imaging findings. Cam morphology is common in people who never develop symptoms, so a shape on a scan is a finding, never a diagnosis, and never one a trainer delivers.' },
        { id: 'apt502-u4-r4', front: 'Why is gluteus maximus a poor hip extensor near full extension?',
          back: 'Its extension lever grows as the hip bends and shrinks as the hip returns to neutral, and at full extension the muscle is also at its shortest, where it makes less active force. Both effects point the same way, which is why the last few degrees of a heavy hip thrust are the hardest part.' },
        { id: 'apt502-u4-r5', front: 'Which hamstring is the odd one out, and how?',
          back: 'Biceps femoris short head. It arises from the linea aspera rather than the ischial tuberosity, crosses only the knee, and is supplied by the common fibular division of the sciatic nerve while the other three run on the tibial division.' },
        { id: 'apt502-u4-r6', front: 'Why is “stretch your hamstrings to squat deeper” a category error?',
          back: 'The hamstrings cross two joints. Descending into a squat lengthens them at the hip and shortens them at the knee at the same time, so overall length hardly changes. A straight-leg raise tests the one position a squat never creates.' },
        { id: 'apt502-u4-r7', front: 'What is the screw-home mechanism, and what is the caveat?',
          back: 'Through the last 20 to 30° of straightening the tibia turns outward about 10° on the femur, or the femur turns inward on a planted tibia. It is attributed to the longer inner femoral condyle, tightening of the ACL and the outward line of quadriceps pull, and popliteus unlocks it. The caveat: the classic figures come from cadavers, and imaging of living joints finds the pattern inconsistent and sometimes absent.' },
        { id: 'apt502-u4-r8', front: 'How do the menisci carry load, and why does a root tear matter so much?',
          back: 'Collagen arranged in rings turns downward compression into tension around the ring, anchored at the front and back roots. They carry roughly half the load in full extension and up to 80 to 90% in the lateral compartment at 90° of bend. A root tear leaves the ring with a cut end, so it behaves much like removing the whole meniscus.' },
        { id: 'apt502-u4-r9', front: 'Why does knee angle change the stress on the kneecap?',
          back: 'Because contact area changes as well as force. Near full extension only a small band at the lower tip of the kneecap meets the groove. With bending, that band travels toward the top of the kneecap and the area grows, and past about 90° the quadriceps tendon shares load. Stress is force divided by area, so it does not follow the force curve.' },
        { id: 'apt502-u4-r10', front: 'What are the two ends that drive dynamic knee valgus?',
          back: 'From above: the hip moving inward and turning inward, with the pelvis dropping on the free side. From below: with the foot planted, the heel bone tips outward and the talus rolls inward and downward, which obliges the tibia to turn inward. That includes the version caused by an ankle that cannot bend forward. Test both ends before you blame a muscle.' },
        { id: 'apt502-u4-r11', front: 'Why is dorsiflexion the close-packed position of the ankle?',
          back: 'The talus is wider at the front than the back, so bending forward wedges the wide part into the slot. It needs the fibula to move sideways, twist outward and glide upward, with the joint between the two shin bones widening. That is why an old sprain can leave forward bend short with no muscle being short.' },
        { id: 'apt502-u4-r12', front: 'State the windlass mechanism in one sentence.',
          back: 'Pulling the toe joints up, especially the big toe, winds the plantar aponeurosis around the metatarsal heads, shortens the distance from heel to forefoot, raises the inner arch, supinates the hindfoot and stiffens the foot into a rigid lever for push-off (Hicks, 1954).' },
      ],
    },

    // 10 ── unit quiz ────────────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u4-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'apt502-u4-q1', kind: 'single', cognitive: 'recall',
          prompt: 'A client has a coxa valga hip, meaning a neck-shaft angle of about 140°. What is the mechanical consequence in single-leg stance?',
          explanation: 'A more upright neck brings the greater trochanter closer to the hip joint centre, which shortens the abductor lever. A shorter lever means more muscle force for the same task, and more muscle force pressed across the joint means a higher joint reaction force.',
          options: [
            { id: 'a', text: 'A shorter abductor lever, so more abductor force and a higher hip joint reaction force to keep the pelvis level', correct: true },
            { id: 'b', text: 'A longer abductor lever, so less abductor force is needed', correct: false, rationale: 'That is coxa vara. It buys the abductors a better lever at the cost of more bending and shear through the femoral neck.' },
            { id: 'c', text: 'No mechanical consequence, because the neck-shaft angle only affects leg length', correct: false, rationale: 'It does affect functional leg length slightly, but its main consequence is the abductor lever and therefore joint loading.' },
          ] },
        { id: 'apt502-u4-q2', kind: 'single', cognitive: 'recall',
          prompt: 'Which hamstring crosses only the knee and is supplied by the common fibular division of the sciatic nerve?',
          options: [
            { id: 'a', text: 'Semimembranosus', correct: false, rationale: 'Ischial tuberosity to the back inner corner of the tibia, crossing both joints, tibial division.' },
            { id: 'b', text: 'Biceps femoris short head', correct: true, rationale: 'From the linea aspera and the lateral supracondylar line to the head of the fibula, crossing only the knee, and the one hamstring on the common fibular division.' },
            { id: 'c', text: 'Semitendinosus', correct: false, rationale: 'Ischial tuberosity to the pes anserinus, crossing both joints, tibial division.' },
          ] },
        { id: 'apt502-u4-q3', kind: 'single', cognitive: 'application',
          prompt: 'A new client has 55° of passive hip internal rotation and 20° of external rotation on both sides, and prefers to stand with her feet slightly turned in. What is the most likely explanation?',
          options: [
            { id: 'a', text: 'Relatively high femoral anteversion, which biases the available rotation toward turning in', correct: true, rationale: 'An anteverted femur seats the head better as the leg turns in, so the range is redistributed rather than lost. Her resting foot position follows the bone.' },
            { id: 'b', text: 'Short external rotators that need releasing before she trains', correct: false, rationale: 'A symmetrical redistribution of rotation range, present at rest and unchanged by warm-up, behaves like bony version, not tissue length.' },
            { id: 'c', text: 'Weak gluteus maximus allowing the femur to fall into internal rotation', correct: false, rationale: 'Passive range measured on a table is not a strength finding. Strength shows up under load, not in passive rotation.' },
          ] },
        { id: 'apt502-u4-q4', kind: 'single', cognitive: 'application',
          prompt: 'A client with pain at the front of the knee tolerates deep bilateral squats well but flares badly with heavy seated knee extensions through the last 30° into full straightening. Why does that pattern make anatomical sense?',
          explanation: 'Terminal extension with the foot free combines the largest external moment with the smallest kneecap contact area: small denominator, large numerator. Deep bending with the foot planted has a big contact area, and past about 90° the quadriceps tendon shares load with the groove.',
          options: [
            { id: 'a', text: 'Terminal knee extension with the foot free pairs the largest external knee moment with the smallest contact area, so kneecap stress is high despite the modest joint force', correct: true },
            { id: 'b', text: 'Deep squatting unloads the kneecap joint entirely', correct: false, rationale: 'It does not. Joint force at the kneecap rises with depth. What changes is that contact area rises too, so stress does not follow force.' },
            { id: 'c', text: 'The kneecap has no contact with the femur below 30° of bend', correct: false, rationale: 'Contact is smallest near full straightening, not absent. A band at the lower tip of the kneecap meets the groove.' },
          ] },
        { id: 'apt502-u4-q5', kind: 'single', cognitive: 'analysis',
          prompt: 'A client’s squat depth improves by several centimetres within one session when you widen her stance and turn her feet out. What does that tell you?',
          options: [
            { id: 'a', text: 'The limit was most likely bony: taking the femur out and turning it out moved the neck away from the socket rim, and no tissue adapts that fast', correct: true, rationale: 'Speed is the clue. An immediate, repeatable change when the geometry changes points at room in the joint, not at tissue length.' },
            { id: 'b', text: 'Her hip flexors and adductors lengthened during the warm-up', correct: false, rationale: 'Acute range changes from stretching are small and short-lived, and would not be specific to one stance.' },
            { id: 'c', text: 'She was not trying hard enough in the narrow stance', correct: false, rationale: 'Effort does not create room in a joint, and this framing hands the client a fault where there is a shape.' },
          ] },
        { id: 'apt502-u4-q6', kind: 'multi', cognitive: 'analysis',
          prompt: 'Which of the following about the foot and ankle are supported? (Select all that apply.)',
          explanation: 'The windlass and the way a planted foot converts ground motion into leg rotation are well-established mechanics. Pronation as an injury risk factor, and footwear prescribed by foot type, have both been tested and not supported.',
          options: [
            { id: 'a', text: 'Pulling the big toe joint up winds the plantar aponeurosis around the metatarsal head, raising the arch and stiffening the foot', correct: true },
            { id: 'b', text: 'With the foot planted, the heel bone tipping outward comes with the talus rolling inward and downward, which obliges the tibia to turn inward', correct: true },
            { id: 'c', text: 'Prospective cohort evidence shows pronated feet carry a clearly increased running injury risk', correct: false, rationale: 'The opposite. A one-year prospective cohort of novice runners in a neutral shoe found no increased risk, with fewer injuries per 1000 km in the pronated group.' },
            { id: 'd', text: 'The plantar intrinsic muscles are recruited in proportion to the load on the arch and add to its stiffness', correct: true },
            { id: 'e', text: 'Assigning shoes by foot type reduces injury rates, as shown in large military trials', correct: false, rationale: 'Those trials are the reason we doubt it. Footwear assigned by foot type did not reduce injuries compared with giving everybody the same shoe.' },
          ] },
        { id: 'apt502-u4-q7', kind: 'single', cognitive: 'analysis',
          prompt: 'Restricting a person’s ankle dorsiflexion experimentally during a squat produces which set of changes?',
          options: [
            { id: 'a', text: 'More inward knee movement, less knee bend and reduced quadriceps activation, with greater soleus activation', correct: true, rationale: 'This is the measured result, and it is the cleanest demonstration that valgus can be driven from below rather than from the hip.' },
            { id: 'b', text: 'More knee bend and greater quadriceps activation, with the knee tracking further outward', correct: false, rationale: 'The shin cannot travel forward, so knee bend decreases rather than increases.' },
            { id: 'c', text: 'No change in knee mechanics, because the ankle and knee are functionally independent', correct: false, rationale: 'The whole point of a planted foot is that they are not independent. The tibia is shared hardware.' },
          ] },
        { id: 'apt502-u4-q8', kind: 'single', cognitive: 'analysis',
          prompt: 'Barbell hip thrusts produce higher gluteal EMG amplitude than back squats. What is the best-supported conclusion?',
          explanation: 'EMG amplitude is electrical activity in one region under one condition, not a growth signal, and the training studies did not follow the EMG. Both exercises load the muscle at different parts of the range.',
          options: [
            { id: 'a', text: 'Higher EMG has not translated into clearly greater gluteal growth in training studies, so EMG amplitude is a weak proxy for growth', correct: true },
            { id: 'b', text: 'Hip thrusts are therefore the superior hypertrophy exercise for the glutes', correct: false, rationale: 'Head-to-head training studies found broadly similar gluteal growth between squats and hip thrusts.' },
            { id: 'c', text: 'Squats do not meaningfully train gluteus maximus', correct: false, rationale: 'They do, and they load it at long muscle lengths, where its extension lever is longest.' },
          ] },
        { id: 'apt502-u4-q9', kind: 'single', cognitive: 'synthesis', safetyCritical: true,
          prompt: 'A client tells you an MRI taken for unrelated reasons showed “cam morphology” in her hip. She has no hip symptoms and squats comfortably. What is the professional response?',
          explanation: 'Morphology is not a diagnosis, imaging findings are common in people without symptoms, and diagnosing or predicting hip pathology is outside a trainer’s scope. Naming the referral trigger is what turns reassurance into safe practice.',
          options: [
            { id: 'a', text: 'Explain that the shape is common in people without symptoms and is not by itself a diagnosis, keep training as she is, and agree a clear trigger, such as new hip pain or pain outside the gym, for referring her to a clinician', correct: true },
            { id: 'b', text: 'Restrict her squat depth pre-emptively and remove hip flexion exercises to protect the joint', correct: false, rationale: 'Restricting a client who has no symptoms on the strength of an imaging finding treats a shape as an injury and has no evidence behind it.' },
            { id: 'c', text: 'Tell her she has femoroacetabular impingement and should discuss surgery with a surgeon', correct: false, rationale: 'Both a diagnosis you cannot make and a treatment recommendation far outside your scope, for a client with no symptoms at all.' },
          ] },
        { id: 'apt502-u4-q10', kind: 'single', cognitive: 'synthesis',
          prompt: 'A runner you coach has pain at the front of the knee, visible inward knee travel on single-leg squats, 6 cm knee-to-wall on the painful side and 12 cm on the other, and 20% lower hip abduction strength on the painful side. What is the most defensible reading?',
          options: [
            { id: 'a', text: 'Address the dorsiflexion difference and build hip capacity while managing running load, and treat the strength difference as something to improve rather than as the proven cause', correct: true, rationale: 'Hip weakness alongside knee pain is frequently a consequence rather than a cause, and the dorsiflexion difference is a mechanically plausible driver from below that you can test and retest. Both are worth training, and neither is proven to be the cause.' },
            { id: 'b', text: 'The hip abductor weakness is the cause; correct it and the knee pain will resolve', correct: false, rationale: 'Weakness measured at one point in time is consistently found in people who already have patellofemoral pain and inconsistently found before it, so the causal direction is not established.' },
            { id: 'c', text: 'Stop all running until the inward knee travel is eliminated on video', correct: false, rationale: 'That gates the goal activity on an unvalidated movement criterion. Load management is defensible; withholding running until a screen looks right is not.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt502-u4-teach',
      title: 'Teach it back',
      prompt:
        'Your client Ellie has been told by a previous coach that her hips are “tight and dysfunctional” because she cannot squat deep with a narrow stance. You have just found that a wider stance with her feet turned out gives her four more centimetres of depth immediately, with no discomfort. In plain, warm language, explain to her what is going on and what you are going to do about it, without telling her she is broken and without pretending to diagnose anything.',
      modelAnswer:
        'Right, that was worth doing. Watch what just happened. I changed where your feet were and you went four centimetres deeper, straight away, no warm-up, nothing stretched. Muscles do not lengthen in thirty seconds. So whatever was stopping you before, it was not tightness. Here is the honest version. The hip is a ball in a socket, and the angle the ball sits on, how far forward it points, and how deep the socket is are all a bit different in every person. That is not damage. It is build, like having long or short forearms. What it means in practice is that the depth you can reach before the bones run out of room depends on where your leg is pointing. Narrow, with the toes forward, runs your thigh bone into the front rim of the socket sooner. Wider, with the feet turned out, swings it away from that corner and gives you room. Same hip, different door. So what I am not doing is putting you on a mobility programme to fix something that is not broken, and I am not sending you for a scan, because a scan would show me a shape, and shapes do not tell us who has a problem. Plenty of people with unusual-looking hips never have a symptom in their lives. What I am doing is squatting you in the stance that suits your build, loading it properly, and getting you strong through the range you actually own. If you ever get a sharp pinch at the front of the hip that stays around, or something starts hurting outside the gym, tell me and I will get you in front of a physio. Otherwise this is not a problem to solve. It is just your stance.',
      rubric: [
        { id: 'apt502-u4-t1', text: 'Uses the speed of the change as the evidence, because nothing lengthens in one set, so the limit was not tissue length' },
        { id: 'apt502-u4-t2', text: 'Explains bone variation, meaning how the joint is built and where the thigh bone meets the socket, in plain language and without a diagnosis' },
        { id: 'apt502-u4-t3', text: 'Rejects the “dysfunctional” framing outright and treats the variation as normal, rather than substituting a gentler-sounding fault' },
        { id: 'apt502-u4-t4', text: 'Explains why imaging is not the next step, because these shapes are common in people without symptoms and a finding is not a diagnosis' },
        { id: 'apt502-u4-t5', text: 'States the plan and names a concrete referral trigger, keeping the decision shared and inside scope' },
      ],
    },

    // 12 ── cumulative review ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u4-cumulative', role: 'cumulative', title: 'Pulling it together',
      questions: [
        { id: 'apt502-u4-cu1', kind: 'single', cognitive: 'analysis',
          prompt: 'A prospective study of 205 female athletes reported that inward knee moment at landing separated the 9 who later tore an ACL from those who did not. A later prospective cohort of 710 elite female athletes with 42 ACL injuries found drop-jump knee position did not predict injury. Applying what you know about study appraisal, how should you read the pair?',
          explanation: 'Nine events is a very small number of outcomes on which to build a screening test, and estimates from such studies are imprecise and unstable. The larger, better-powered replication is the more informative result, and this is the ordinary pattern of a promising early finding failing to hold.',
          options: [
            { id: 'a', text: 'The smaller study rested on nine outcome events, so its estimates were imprecise. The larger, better-powered cohort is the stronger evidence, and the claim has not replicated', correct: true },
            { id: 'b', text: 'The first study is more relevant because it was published earlier and established the concept', correct: false, rationale: 'Being first is not evidential weight. If anything, an early positive finding in a small sample is the classic setup for a failed replication.' },
            { id: 'c', text: 'The studies simply disagree, so the question is unanswerable and both should be ignored', correct: false, rationale: 'They do not carry equal weight. Sample size, number of events and precision are exactly what you use to decide between them.' },
          ] },
        { id: 'apt502-u4-cu2', kind: 'single', cognitive: 'application',
          prompt: 'Using the joint-mechanics vocabulary from earlier in this course, why is dorsiflexion described as the close-packed position of the talocrural joint?',
          options: [
            { id: 'a', text: 'The talus is wider at the front, so dorsiflexion wedges the widest part of it into the slot: maximum fit, taut ligaments, least accessory movement', correct: true, rationale: 'Close-packed means the surfaces fit as well as they can, with capsule and ligaments taut. Dorsiflexion also needs the fibula to displace and the joint between the shin bones to widen before it can happen at all.' },
            { id: 'b', text: 'Because it is the position of greatest muscular tension in the plantarflexors', correct: false, rationale: 'Close-packed describes how the joint surfaces fit and how taut the ligaments are, not muscle length.' },
            { id: 'c', text: 'Because it is the position in which the joint has the most accessory glide available', correct: false, rationale: 'That is the loose-packed position, which at the ankle sits somewhere in mid plantarflexion.' },
          ] },
        { id: 'apt502-u4-cu3', kind: 'single', cognitive: 'analysis',
          prompt: 'A meta-analysis reports that Nordic hamstring programmes reduce hamstring injury rates by roughly half, and surveys show most professional teams do not use them. What is the professionally useful conclusion?',
          explanation: 'A pooled effect estimate describes what happens when a programme is actually delivered. Uptake is a separate, behavioural problem, and it is where most of the real-world benefit is currently being lost.',
          options: [
            { id: 'a', text: 'The evidence question is largely settled and the remaining problem is getting people to do it, so the useful professional skill is implementation rather than finding a better exercise', correct: true },
            { id: 'b', text: 'Low uptake means the evidence must be weaker than the meta-analysis suggests', correct: false, rationale: 'Adoption rates are not evidence about efficacy. Plenty of well-supported interventions are poorly implemented for reasons of time, culture and habit.' },
            { id: 'c', text: 'Since elite teams do not use it, recreational clients should not either', correct: false, rationale: 'An appeal to practice rather than to evidence, and recreational athletes are not the population in which elite scheduling constraints apply.' },
          ] },
        { id: 'apt502-u4-cu4', kind: 'single', cognitive: 'analysis',
          prompt: 'Both the shoulder and the hip are ball-and-socket joints, yet they trade mobility and stability very differently. Which comparison is anatomically accurate?',
          options: [
            { id: 'a', text: 'The acetabulum is a deep bony socket that wraps much of the femoral head, so hip stability is largely built in. The glenoid is shallow and small next to the humeral head, so shoulder stability leans far more on soft tissue and muscular control', correct: true, rationale: 'The trade is made in bone at the hip and in soft tissue at the shoulder, which is why hip range is set largely by shape and shoulder range is not.' },
            { id: 'b', text: 'Both sockets are of similar depth, and the difference in range comes entirely from ligament length', correct: false, rationale: 'The depth difference is large, and it is the primary structural distinction between the two joints.' },
            { id: 'c', text: 'The glenoid is deeper than the acetabulum, which is why the shoulder dislocates less often', correct: false, rationale: 'Reversed on both counts. The glenoid is far shallower, and the shoulder is the most commonly dislocated major joint in the body.' },
          ] },
        { id: 'apt502-u4-cu5', kind: 'single', cognitive: 'synthesis',
          prompt: 'A client arrives with a radiology report describing a degenerative medial meniscal tear and asks whether she should have the arthroscopy her GP mentioned. What is the best professional response?',
          explanation: 'Randomised trials, including sham-controlled surgery, have repeatedly failed to show a benefit of arthroscopic partial meniscectomy over sham or exercise therapy for degenerative tears. Summarising evidence honestly is inside your scope. Recommending for or against surgery is not.',
          options: [
            { id: 'a', text: 'Tell her honestly that randomised trials have not shown arthroscopy to outperform sham surgery or exercise therapy for degenerative tears, that the decision belongs to her and her doctor, and offer to support a structured exercise programme either way', correct: true },
            { id: 'b', text: 'Advise her to have the surgery, since a torn structure should be repaired before loading it', correct: false, rationale: 'A treatment recommendation outside your scope, and one that runs against the trial evidence for degenerative tears.' },
            { id: 'c', text: 'Tell her the scan is meaningless and that she should cancel the appointment', correct: false, rationale: 'An overcorrection, and it undermines a clinical relationship you do not have the information to override. Report the evidence and leave the decision where it belongs.' },
          ] },
      ],
    },
  ],
};
