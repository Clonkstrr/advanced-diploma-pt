import type { Unit } from '../../../types/content';

export const unit03: Unit = {
  id: 'apt502-u3',
  code: 'APT 502.3',
  title: 'The Shoulder Complex and Upper Extremity',
  summary:
    'Why the shoulder joint buys range at the cost of stability and what really holds it together; how four joints share one arc of raising the arm; what the rotator cuff is actually for; the elbow, forearm and grip chain; and an honest account of what the evidence now says about “impingement” and scapular dyskinesis.',
  qc: {
    sources: [
      { citation: 'Neumann DA — Kinesiology of the Musculoskeletal System: Foundations for Rehabilitation, 3rd ed. Elsevier', year: 2017, evidenceType: 'Textbook', verified: false },
      { citation: 'Levangie PK, Norkin CC, Lewek MD — Joint Structure and Function: A Comprehensive Analysis, 6th ed. F.A. Davis', year: 2019, evidenceType: 'Textbook', verified: false },
      { citation: 'Standring S (ed) — Gray’s Anatomy: The Anatomical Basis of Clinical Practice, 42nd ed. Elsevier', year: 2020, evidenceType: 'Textbook', verified: false },
      { citation: 'Inman VT, Saunders JB deCM, Abbott LC — Observations on the function of the shoulder joint. J Bone Joint Surg 1944;26:1–30', year: 1944, evidenceType: 'Primary biomechanics study', verified: false },
      { citation: 'Lippitt S, Matsen F — Mechanisms of glenohumeral joint stability. Clin Orthop Relat Res 1993;(291):20–28', year: 1993, evidenceType: 'Primary biomechanics study', verified: false },
      { citation: 'Halls AA, Travill A — Transmission of pressures across the elbow joint. Anat Rec 1964;150(3):243–247', year: 1964, evidenceType: 'Cadaveric biomechanics study', verified: false },
      { citation: 'Morrey BF, An KN, Stormont TJ — Force transmission through the radial head. J Bone Joint Surg Am 1988;70(2):250–256', year: 1988, evidenceType: 'Cadaveric biomechanics study', verified: false },
      { citation: 'Ludewig PM, Reynolds JF — The association of scapular kinematics and glenohumeral joint pathologies. J Orthop Sports Phys Ther 2009;39(2):90–104', year: 2009, evidenceType: 'Narrative review', verified: false },
      { citation: 'Beard DJ, Rees JL, Cook JA, et al. (CSAW Study Group) — Arthroscopic subacromial decompression for subacromial shoulder pain (CSAW): a multicentre, pragmatic, parallel group, placebo-controlled, three-group, randomised surgical trial. Lancet 2018;391:329–338', year: 2018, evidenceType: 'Placebo-controlled randomised surgical trial', verified: false },
      { citation: 'Paavola M, Malmivaara A, Taimela S, et al. (FIMPACT Investigators) — Subacromial decompression versus diagnostic arthroscopy for shoulder impingement: randomised, placebo surgery controlled clinical trial. BMJ 2018;362:k2860', year: 2018, evidenceType: 'Placebo-controlled randomised surgical trial', verified: false },
      { citation: 'Hickey D, Solvig V, Cavalheri V, Harrold M, McKenna L — Scapular dyskinesis increases the risk of future shoulder pain by 43% in asymptomatic athletes: a systematic review and meta-analysis. Br J Sports Med 2018;52(2):102–110', year: 2018, evidenceType: 'Systematic review and meta-analysis', verified: false },
      { citation: 'Kibler WB, Ludewig PM, McClure PW, Michener LA, Bak K, Sciascia AD — Clinical implications of scapular dyskinesis in shoulder injury: the 2013 consensus statement from the “Scapular Summit”. Br J Sports Med 2013;47(14):877–885', year: 2013, evidenceType: 'Consensus statement', verified: false },
      { citation: 'Sher JS, Uribe JW, Posada A, Murphy BJ, Zlatkin MB — Abnormal findings on magnetic resonance images of asymptomatic shoulders. J Bone Joint Surg Am 1995;77(1):10–15', year: 1995, evidenceType: 'Cross-sectional imaging study', verified: false },
      { citation: 'Lewis J — Rotator cuff related shoulder pain: assessment, management and uncertainties. Man Ther 2016;23:57–68', year: 2016, evidenceType: 'Narrative review', verified: false },
    ],
    confidence: 'high',
    lastReviewed: '2026-08-03',
    reviewBy: '2027-08-03',
    controversies:
      'Several claims in this unit are live disagreements rather than settled facts. The scapulohumeral ratio is reported anywhere from about 1.25:1 to 3:1 depending on plane of elevation, load, phase and measurement method, and skin-sensor and bone-pin studies disagree; the scapular internal and external rotation component is the least consistent finding of the three. The long head of biceps is described as a humeral head depressor on the strength of cadaveric loading studies, while in-vivo electromyography and the outcomes of tenotomy and tenodesis suggest little shoulder-stabilising role. That one is unresolved. The size of the labrum’s contribution to stability rests largely on cadaver work whose transfer to loaded, innervated shoulders is uncertain. The subacromial impingement model has been substantially revised: placebo-controlled surgical trials (CSAW, FIMPACT) found arthroscopic decompression no better than sham surgery by a clinically important margin, and acromial morphology may be partly acquired rather than causal. The subacromial space itself, and its dependence on scapular position, remain real mechanics. Scapular dyskinesis is prevalent in asymptomatic athletes, has only moderate inter-rater reliability on visual assessment, and its prospective association with future pain is statistically detectable but small in absolute terms; the 2013 consensus statement calls it an impairment rather than a diagnosis. The sex difference in carrying angle is small and measurement-sensitive, and some series do not reproduce it. The share of axial load crossing the radiocapitellar rather than the humeroulnar joint comes from cadaveric loading rigs, around 57 per cent in Halls and Travill’s transducer study and near 60 per cent in Morrey’s, and it is not one number: transmission is highest near extension, falls as the elbow flexes, and rises in pronation, so any percentage quoted is a snapshot of one test position rather than a property of the elbow.',
  },
  components: [
    // 1 ── diagnostic pretest ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u3-pretest', role: 'pretest', title: 'Before we begin',
      questions: [
        { id: 'apt502-u3-p1', kind: 'single', cognitive: 'analysis',
          prompt: 'A client’s shoulder feels secure with her arm at her side but feels as if it might “go” at the top of a wide-grip overhead press. Which explanation fits the mechanics best?',
          options: [
            { id: 'a', text: 'Instability is specific to position and direction. The passive restraints that hold at one joint angle are slack at another, and in mid-range stability depends almost entirely on the compression muscle generates', correct: true, rationale: 'Each glenohumeral ligament tightens in one particular position and goes slack elsewhere, so a shoulder is never simply “stable” or “unstable”.' },
            { id: 'b', text: 'Her glenohumeral ligaments must be loose all round, since ligaments restrain the joint throughout the range', correct: false, rationale: 'They do not restrain throughout the range. In mid-range they are slack in everyone.' },
            { id: 'c', text: 'Stability is a whole-joint property: if she is secure at her side she is secure overhead, so the sensation is psychological', correct: false, rationale: 'Stability is not one number. The overhead position loads a completely different set of restraints.' },
          ] },
        { id: 'apt502-u3-p2', kind: 'single', cognitive: 'recall',
          prompt: 'Across roughly 180° of raising the arm, and after the setting phase, how is the movement usually divided between the glenohumeral joint and the scapula moving on the rib cage?',
          options: [
            { id: 'a', text: 'About 120° at the glenohumeral joint and 60° at the scapula, roughly two to one', correct: true, rationale: 'Inman’s original arithmetic, still the standard teaching figure.' },
            { id: 'b', text: 'About 90° each, an even split', correct: false, rationale: 'The scapula contributes roughly half as much as the glenohumeral joint, not the same amount.' },
            { id: 'c', text: 'About 150° at the glenohumeral joint and 30° at the scapula', correct: false, rationale: 'That would leave the scapula contributing far less than any measurement supports.' },
          ] },
        { id: 'apt502-u3-p3', kind: 'single', cognitive: 'application',
          prompt: 'A client with a painful arc overhead brings an ultrasound report reading “supraspinatus tendinopathy with subacromial impingement”. What is the most defensible first move?',
          options: [
            { id: 'a', text: 'Treat the tendon description as one piece of information, and treat the word “impingement” as a claim about mechanism to hold loosely, because the same imaging findings are common in shoulders that do not hurt', correct: true, rationale: 'A tissue appearance and a causal story are different kinds of statement, and only one of them was actually observed.' },
            { id: 'b', text: 'Remove overhead work from her program permanently to protect the tendon', correct: false, rationale: 'A permanent ban is not a dose. Range, load, plane and tempo are adjustable levers.' },
            { id: 'c', text: 'Start scapular retraction drills to open the subacromial space before any loading', correct: false, rationale: 'Retraction is not what opens the space during elevation. Upward rotation and posterior tilt do that, and drilling a position is not a substitute for loading.' },
          ] },
      ],
    },

    // 2 ── learning outcomes ─────────────────────────────────────────────────
    {
      type: 'outcomes', id: 'apt502-u3-outcomes',
      outcomes: [
        { level: 'recall', text: 'Name the four joints of the shoulder complex, state which structures restrain the glenohumeral joint in each part of the range, and identify the three muscles of the scapular upward-rotation force couple.' },
        { level: 'application', text: 'Use scapular and humeral mechanics to explain scapulohumeral rhythm to a client, choose a modified overhead loading position for a painful shoulder, and reason from wrist position to grip performance.' },
        { level: 'analysis', text: 'Analyse why the subacromial impingement model was revised, using the placebo-controlled surgical trials, the imaging findings in people without symptoms and the possibility that acromial shape is acquired, then separate what still holds mechanically from what no longer holds as a cause.' },
        { level: 'synthesis', text: 'Build and defend an upper-limb programming decision that brings together glenohumeral stability, the scapular contribution, elbow and forearm mechanics and grip, stating honestly what the evidence supports and where the referral line sits.' },
      ],
    },

    // 3 ── core instruction (five concept blocks) ────────────────────────────
    {
      type: 'concept', id: 'apt502-u3-c1', heading: 'Range bought with instability: what actually holds the glenohumeral joint together',
      body:
        'Rest your hand on a client’s shoulder while she takes her arm slowly overhead. You can feel how little bone is doing the holding.\n\nEvery textbook reaches for the golf ball on a tee, and half of that picture is right. The socket, the **glenoid**, has a surface only about a third the size of the ball on top of the arm bone, so most of that ball faces open space at any moment. The other half is wrong. The two surfaces fit better than dry bone suggests, because the cartilage lining the socket is thicker at the rim than in the middle, and a ring of tough tissue called the **labrum** sits around that rim like a soft collar. Picture a large ball in a shallow, slightly squashy dish. The dish works harder than it looks.\n\n## Depth times squeeze\n\nPush a ball into a shallow dish, then shove it sideways. Two things decide how hard that is: how deep the dish is, and how hard you are pressing down. Multiply them and you have what keeps her shoulder sitting where it belongs through the middle of every rep. Lippitt and Matsen named it **concavity-compression** and measured it. The sideways force needed to shift the ball rises in step with how hard it is pressed in, and falls sharply once the labrum is cut away and the dish gets shallower. The labrum roughly doubles the socket’s working depth. The rotator cuff supplies the pressing. Between them they account for most of the stability she has anywhere except the far ends of her range.\n\n## Every ligament has an address\n\n“Which ligament stabilises the shoulder?” is half a question. The missing half is “in which position?” The **glenohumeral ligaments** are thickened strips inside the capsule, the fibrous sleeve wrapped round the joint, and a sleeve holds only when something pulls it tight. Arm hanging at her side: the superior glenohumeral and coracohumeral ligaments stop the head of the arm bone dropping downwards. Around forty-five degrees of abduction, meaning the arm lifted out to the side: the middle glenohumeral ligament. At ninety degrees with the arm turned outwards, which is the cocking position of a throw, the bottom of a wide-grip press and the catch of a freestyle stroke: the anterior band of the inferior glenohumeral ligament complex, the strip at the front, blocks the head sliding forwards. Move out of any of those positions and that same strip goes slack.\n\n> Key idea: A shoulder is never simply stable or unstable. It is stable in some positions and not in others, which is why “she has lax ligaments” tells you almost nothing on its own.\n\nTwo smaller contributors are worth naming. The joint holds a slight vacuum: let air into a cadaver capsule and the head visibly drops, though the effect is small and any real load swamps it. The wet surfaces also cling to each other, the way two wet glass slides resist being pulled apart while still sliding easily across each other.\n\nThe capsule behaves like a ring, not a set of separate straps. That is the **circle concept**: the head cannot travel far forwards unless something at the back lengthens too, which is why dislocations to the front often come with damage at the back that nobody looks for. The split between passive parts and muscular parts is a teaching convenience as well. Cuff tendons blend into the capsule they supposedly sit outside, muscle tension pre-tightens the ligaments and changes when they start to hold, and the capsule is full of sensors whose job is to tell the cuff what to do. One system, two vocabularies.\n\n## What is still argued about\n\nHow much the labrum contributes in a living, loaded shoulder comes mostly from cadaver work, and a cadaver capsule behaves differently from one with muscle attached and blood in it. Changes at the top of the labrum show up on scans in throwers with no symptoms often enough that finding one tells you very little. Generalised hypermobility is a problem in some clinics and a normal variant in others; what settles it is whether the person has symptoms, not the score.\n\nAll of this settles how you train. A shoulder is not unstable; it is unstable somewhere. If your client loses the joint at ninety degrees of abduction with the arm turned out, compression, control and load have to reach that position eventually: a stronger shoulder at her side is only a stronger shoulder at her side. Walk her back towards the positions she cannot yet hold, in graded steps, rather than routing around them forever.',
    },

    // 3a ── what holds it, what moves it ─────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u3-visual-stability',
      title: 'What actually holds the ball in the socket',
      diagramId: 'shoulder-stability-stack',
      caption:
        'Three panels, lettered A to C. Panel A draws concavity-compression as a ball in a dish: the same squeeze holds far better in a deep socket than in a shallow one. Panel B shows which passive restraint is tight in which arm position. Panel C splits the structures into the ones that hold the head centred and the ones that move the arm.',
      callouts: [
        { id: 'apt502-u3-vs1', label: '1', text: 'Panel A: two things set how hard it is to shove the ball sideways out of the dish. How deep the dish is, and how hard something is pressing the ball in. The labrum supplies roughly half the working depth. The cuff supplies the pressing.' },
        { id: 'apt502-u3-vs2', label: '2', text: 'Panel A, right-hand figure: nothing about the squeeze has changed. The socket is simply shallower, and the same ball now slides out under a much smaller push. That is why the labrum matters even though it cannot contract.' },
        { id: 'apt502-u3-vs3', label: '3', text: 'Panel B: each ligament has one address. Arm at the side, then about 45°, then 90° with the arm turned outwards. Each restraint is tight in its own position and slack everywhere else, so a shoulder that feels solid at her side can feel like it is leaving at the top of a press.' },
        { id: 'apt502-u3-vs4', label: '4', text: 'Panel C: the movers are much bigger than the holders, and they only work because the holders keep the ball centred while they pull. Deltoid on its own drags the head upwards instead of lifting the arm.' },
      ],
    },

    {
      type: 'concept', id: 'apt502-u3-c2', heading: 'One arc, four joints: scapulohumeral rhythm and the couples that drive it',
      body:
        'Somewhere early on you were taught to cue “shoulder blades down and back” before pressing. For a bench press that is defensible; you want a solid base under a bar you are pushing away from. For a strict overhead press it is close to sabotage. You have asked the shoulder blade, the **scapula**, to hold still, then asked the arm somewhere it cannot go unless the scapula moves. She reaches about a hundred degrees, the bar stalls in front of her face, and she finishes the rep by arching her lower back. The cue did that.\n\nBefore the arithmetic, meet the cast. Four articulations share the job of raising an arm, and only three of them are joints. The **sternoclavicular joint**, where the collarbone meets the breastbone, is the only bony link between the whole shoulder and the trunk, so everything the arm lifts is ultimately hanging off it. The **acromioclavicular joint**, where the outer end of the collarbone meets the shoulder blade at the point of the shoulder, is where most of the blade’s backward tilt happens, along with part of its turn; much of the upward rotation arrives instead by way of the collarbone lifting at its inner end.\n\nThe other two are the pair that shares the arc between them. The glenohumeral joint is the ball and socket from the last section, and it supplies the largest single share of the arc. The fourth, the **scapulothoracic** interface, is not a true joint at all: no capsule, no cartilage, no two surfaces facing each other, just the shoulder blade sliding on a bed of muscle over the back of the rib cage, and it moves only because the collarbone is free to swing at both of its ends. Stiffen any one of the four and the arm stops short of overhead, which is why the whole arrangement is called a complex rather than a joint.\n\n## The famous ratio, and its small print\n\nInman and colleagues published the arithmetic in 1944 and it has been repeated ever since. Across roughly 180 degrees of raising the arm, about 120 degrees comes from the glenohumeral joint and about 60 from the scapula turning on the rib cage. Two to one. That is **scapulohumeral rhythm**. What repetition loses is that Inman described an average across the whole arc, not a fixed rate. Through the first thirty degrees or so, the **setting phase**, the scapula does something variable and often close to nothing while it settles on the rib cage, so a ratio quoted inside that window means very little. After that the two share the work in something closer to a steady proportion. Modern measurement, from sensors taped to the skin through to pins driven into bone, reports overall ratios anywhere from about 1.25 to 1 up to 3 to 1, moving with the plane she lifts in, the load in her hand, the phase of the lift and the measuring method itself.\n\n> Key idea: Treat 2:1 as a way of thinking about who contributes what, not as a number you can check on a client. Nobody can see it by eye, however confident they sound.\n\n## Sixty degrees is three movements\n\n“Sixty degrees of scapular motion” flattens three separate turns into one. The scapula rotates upwards, the part most people mean, through forty-five to sixty degrees. It tilts backwards, the bottom tip swinging in towards the ribs while the top edge tips away, by roughly twenty to thirty degrees; that is **posterior tilt**. And it turns about a roughly vertical axis so the socket faces a little further out to the side. That third piece is the least consistent finding in the research, and several studies report a brief turn the other way early in the range before it reverses.\n\nAll of this happens while the collarbone lifts and draws back where it meets the breastbone, and spins backwards about its own long axis. The spin surprises people. The collarbone is S-shaped and the scapula hangs off its outer end, so spinning it backwards lifts the point of the shoulder and lets the scapula finish rotating up: a crankshaft. Take that away and full elevation is not available, whatever the muscles do.\n\n## A couple with three arms\n\nThe muscles that produce all this are usually taught as a pair, and there are three. Upper trapezius pulls the outer collarbone and the point of the shoulder up and inwards. Lower trapezius pulls the inner end of the scapular ridge down and inwards. Serratus anterior pulls the inner border and bottom tip forwards and outwards, around the rib cage. On its own, none of those pulls is upward rotation. Their combined effect is, and that is what a **force couple** means. Serratus anterior is the only one whose pull produces all three turns, which is why its failure is the loudest: damage the long thoracic nerve and the inner border lifts off the ribs, the scapula loses upward rotation and tips forwards, and the arm stops somewhere around ninety to a hundred and twenty degrees. Trapezius, run by the spinal accessory nerve, fails differently and just as visibly. This is also the honest answer to the fashion for calling upper trapezius “overactive”. It is a real upward rotator working through the collarbone, and a scapula deprived of it does not rotate up better.\n\nTwo things follow on the gym floor. First, the cue. If the arm is going overhead the scapula has to rotate up, tilt back and travel, so holding it down and back through the whole lift is an instruction to fight the movement, and clients pay in an arched lower back or a bar that never gets over the head. Set the ribs, keep the trunk honest, then let the scapula do its job. Second, what you can actually see. Not degrees. You can see gross things: a scapula that barely moves, an inner border that lifts away from the ribs, an arm that stops. Those are worth noticing and worth loading. “Her scapula is rotating eight degrees too little” is not an observation. It is a guess wearing a number.',
    },
    {
      type: 'concept', id: 'apt502-u3-c3', heading: 'What the rotator cuff is actually for, and what the long head of biceps is doing there',
      body:
        'Walk through any gym at six in the evening and count the banded external rotations. Elbow pinned to the ribs, small yellow band, three sets of twenty, every session, for years, because someone told her to “activate her rotator cuff”. She plays club volleyball and has never loaded that shoulder above five kilograms with the arm turned out. Somewhere between the anatomy and the gym floor, the cuff stopped being a mechanical system and became a category of exercise.\n\n## Four muscles, one sleeve\n\nSupraspinatus, infraspinatus and teres minor run from the back of the scapula to three landing sites stacked one above the other on the **greater tubercle**, the bump on the outer side of the top of the arm bone. Subscapularis runs from the front of the scapula to the lesser tubercle on the inner side, with a slip crossing the floor of the **bicipital groove**, the channel between the two bumps that carries the biceps tendon. They are not four separate ropes: their tendons weave together near the ends and blend into the joint capsule, which is why careful dissection keeps revising the classic maps. The supraspinatus landing site is smaller and further forward than older drawings show, and infraspinatus commonly reaches onto it.\n\nWhat matters mechanically is where each one pulls. All four wrap close around the ball, so each line of pull points into the socket more than around it. Their turning power is modest; their squeezing power is not.\n\n> Key idea: The cuff’s main job is to hold the ball centred in the socket while much larger muscles move the arm. It supplies the compression half of concavity-compression, continuously, in everything the arm does.\n\n## Why deltoid cannot work alone\n\nLook at deltoid from the arm-at-side position. Its line of pull runs almost parallel to the shaft of the arm bone, so contracting it drives the head upwards far more than it lifts the arm out to the side. Subscapularis, infraspinatus and teres minor pull down and in across the head. Add the two together and the arm turns about a centre that barely moves: the force couple in the vertical plane. A second couple runs front to back, subscapularis against infraspinatus and teres minor, holding the head from sliding forwards as the arm turns. Lose enough cuff and you see what it was doing. The head drifts up when deltoid contracts, and with a large tear a client may not be able to raise the arm at all even though her deltoid and her nerves are fine.\n\nTwo teaching points need correcting. Supraspinatus does not start the first fifteen degrees and then hand over; deltoid and supraspinatus are both working from the beginning and stay working. And some tears that run all the way through the tendon cause no trouble at all, partly because of the **rotator cable**, a thickened band of fibres arching across the tendon insertion from the coracohumeral ligament. It carries load around a hole the way a suspension bridge carries load across the gap underneath it.\n\n## The biceps tendon in the middle of it\n\nThe **long head of biceps** starts above the socket, partly from bone and partly from the labrum, in proportions that differ between people. It crosses inside the capsule over the top of the ball, then turns down into its groove. Cadaver studies that pull on the tendon show it presses the head down, and that finding hardened into a teaching point. In living people the picture is murkier: its electrical activity tracks elbow and forearm demand more than shoulder demand, and people whose long head has been cut or moved down the shaft do not end up with unstable shoulders. Its role as a shoulder stabiliser is genuinely contested, and the right move is to say so rather than pick a side. Even the transverse humeral ligament that supposedly holds it in the groove turns out on dissection to be mostly fibres from the subscapularis and supraspinatus tendon sheaths.\n\nWhat is not contested is that the tendon crosses two joints, and that is useful. Its length, and so how much force it can give you, depends on shoulder position. An incline dumbbell curl puts the shoulder behind the body, so the long head starts long and already under tension; a preacher curl puts it forward, so it starts short and gives up tension at the top, where you least want it. Its twisting job shifts with position too. Biceps turns the palm up powerfully around ninety degrees of elbow bend and barely at all with the arm straight. That is why the supinator carries the job in a straight arm, and why a palms-down curl asks the biceps to work with two of its three actions gone.\n\nWhich brings us back to the woman with the yellow band. Her cuff is loaded in every press, pull, carry and serve she performs. Band work earns its place in early rehab, in testing what a sore shoulder tolerates, and as a warm-up, but it is not a training load for a shoulder that has to survive a volleyball season. Trials comparing cuff-specific programmes against general shoulder loading for rotator cuff related pain found no reliable advantage for the specific version: loading the shoulder matters more than the drill you picked.',
    },

    // 3b ── the deltoid and cuff force couple ───────────────────────────────
    {
      type: 'visual', id: 'apt502-u3-visual-couple',
      title: 'Why deltoid needs the cuff',
      diagramId: 'shoulder-deltoid-cuff-couple',
      caption:
        'Four panels, lettered A to D. Panel A shows deltoid pulling on its own, with a line of pull that runs almost along the arm bone. Panel B adds the lower cuff and turns the same pull into rotation about a centre that stays put. Panel C is the front-to-back pair seen from above. Panel D shows what a large tear looks like mechanically, and how the rotator cable can carry load past a hole in the tendon.',
      callouts: [
        { id: 'apt502-u3-vc1', label: '1', text: 'Panel A: deltoid pulls almost straight along the shaft of the arm bone. On its own that drives the head upwards far more than it raises the arm. This is the problem the cuff exists to solve.' },
        { id: 'apt502-u3-vc2', label: '2', text: 'Panel B: subscapularis, infraspinatus and teres minor pull down and in. Add that to deltoid and the arm turns about a centre that barely moves. Two pulls in different directions, one useful result: that is what a force couple means.' },
        { id: 'apt502-u3-vc3', label: '3', text: 'Panel C, seen from above: subscapularis at the front balances infraspinatus and teres minor at the back, so the head does not drift forwards while the arm rotates.' },
        { id: 'apt502-u3-vc4', label: '4', text: 'Panel D: lose enough cuff and the head rides up under deltoid, and a client may be unable to raise the arm at all with a healthy deltoid and normal nerves. Yet the rotator cable can carry load around a full-thickness hole, which is part of why some tears cause nothing.' },
      ],
    },

    {
      type: 'concept', id: 'apt502-u3-c4', heading: 'Elbow, forearm and the chain that decides what the hand can hold',
      body:
        'Your client’s deadlift stalls at a hundred kilograms and she is sure it is her back. Film it from the side. Her hands open at the exact moment her wrists roll into flexion, the bar rolls out of the hook, and her back is entirely innocent. Grip is the last link in a chain that starts at the elbow, and most of its failures are mechanical rather than motivational.\n\n## Three joints in one capsule\n\nThe elbow is three joints in one capsule. The **humeroulnar joint** is the hinge, between the arm bone and the ulna, and it is the main bony block against the forearm being levered sideways. Its groove sits at a slight angle rather than straight, so the ulna swings out a little as the elbow straightens. That offset is the **carrying angle**, eleven to fourteen degrees on average and a couple of degrees larger in women in most series, though the difference is small, the measurement is sensitive to how the arm was positioned, and not every series finds it. It describes geometry; it is not a fault to correct. Beside the hinge sits the humeroradial joint, and between radius and ulna the proximal radioulnar joint, held by the annular ligament.\n\n## The hinge is not the load path\n\nBeing the hinge and being the load path are two different jobs, and the elbow splits them. Cadaver rigs that push force up through the hand and measure what arrives at the top put most of it across the radiocapitellar joint rather than the humeroulnar one when the arm is near straight: 57 per cent in Halls and Travill’s study, close to 60 in Morrey and An’s. Those numbers come with conditions. Transmission is highest through the first thirty degrees of bend, falls as the elbow flexes, and is higher palm-down than palm-up, so the percentage describes a test position rather than a property of the joint. So the radial head carries load and is not a spare part. A radial head fracture is a load-path problem as much as a rotation problem, and removing one changes how force reaches the shoulder.\n\nThree muscles cross the front of the elbow and they are not interchangeable. Brachialis attaches to the ulna, so it bends the elbow whatever the forearm is doing: the workhorse, and the one nobody mentions. Biceps attaches to the radius, so it bends the elbow and turns the palm up. Brachioradialis has its best mechanical advantage with the forearm halfway between palm up and palm down. That is why a hammer curl, a palms-up curl and a palms-down curl feel different: three muscles, three attachments, three jobs, not one muscle finding a “peak contraction”.\n\n## Where the forearm actually turns\n\nTurning the palm up and down happens between radius and ulna and has almost nothing to do with the wrist joint. The radius rotates around a nearly stationary ulna, pivoting at its head near the elbow and swinging around the end of the ulna at the wrist, where the **triangular fibrocartilage complex** forms a sling underneath it. The axis of that turn runs from the centre of the radial head to a small pit at the base of the ulnar styloid: a line through the forearm, not through the middle of the hand, so a bar does not turn about the point most people picture. Range is about seventy-five to eighty-five degrees palm down and eighty to ninety palm up; anything past that is the shoulder helping.\n\nBetween the two bones, the central band of the **interosseous membrane** runs at an angle from radius down to ulna and passes load from one to the other, which has practical teeth. At the wrist, roughly eighty per cent of axial load goes through the radius and twenty through the ulna in a neutral forearm, and turning the palm down while gripping hard shifts more onto the ulnar side. A client with pain on the little-finger side of the wrist in a front rack, or at the bottom of a push-up, is often telling you about forearm rotation and load sharing rather than about “tight wrists”.\n\n## Grip is a wrist-position problem\n\nThe long finger flexors start around the elbow and upper forearm and cross the wrist on their way to the fingers, so hand force depends on where the wrist is. Hold the wrist extended twenty to forty degrees and they sit near a favourable length, and grip is at its strongest. Let the wrist drop into flexion and they shorten past their useful range within a few degrees, and grip collapses.\n\n> Key idea: A grip test without a stated wrist position is not a measurement. Your deadlift client did not run out of grip strength; she lost the wrist position that lets her use it.\n\nThat explains a common elbow problem too. Holding the wrist up against the pull of the finger flexors takes work from the wrist extensors, so every heavy carry, every set of pull-ups and every hour with a hand tool loads their shared origin at the lateral epicondyle, the bump on the outside of the elbow. Lateral elbow pain in someone who grips for a living is usually a grip-load problem wearing an elbow costume.\n\nPut the chain back together and it changes the program. If grip is the limiter, the shoulder, back and hips never see the load you planned, which makes straps a tool rather than a moral failure. If the wrist will not extend far enough for a front rack, the constraint may be forearm rotation, load sharing, or where her hands sit on the bar, and a fingertip or strap rack keeps the squat alive while you work on the wrist separately. If a curl variation hurts at the front of the elbow, ask which of the three flexors it loads and what the forearm was doing. It all falls out of one fact: muscles cross joints, and the position of a joint they cross changes what they can do.',
    },

    // 3c ── elbow, forearm and grip ──────────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u3-visual-chain',
      title: 'From elbow to grip: three things worth seeing',
      diagramId: 'shoulder-to-hand-chain',
      caption:
        'Three panels, lettered A to C. Panel A separates the hinge from the load path at the elbow. Panel B shows where turning the palm actually happens, the axis it turns about, and how the interosseous membrane passes load between the two forearm bones. Panel C plots grip force against wrist angle, which is the curve behind most grip failures under a bar.',
      callouts: [
        { id: 'apt502-u3-vh1', label: '1', text: 'Panel A: the ulna makes the hinge, but most of the axial load near extension arrives at the radial head. Cadaver rigs put it at 57 to 60 per cent, and that share falls as the elbow bends and rises with the palm turned down, so it is a test position rather than a fixed property.' },
        { id: 'apt502-u3-vh2', label: '2', text: 'Panel B: the axis of forearm rotation runs from the centre of the radial head to the pit at the base of the ulnar styloid. It passes through the forearm, not through the middle of the hand, which is why a bar does not turn about the point most people picture.' },
        { id: 'apt502-u3-vh3', label: '3', text: 'Panel B: the interosseous membrane fibres run at an angle from the radius down to the ulna, so load entering at the wrist gets shared between both bones on its way to the elbow.' },
        { id: 'apt502-u3-vh4', label: '4', text: 'Panel C: grip peaks around 20 to 40 degrees of wrist extension and falls away fast once the wrist drops into flexion. That steep left-hand slope is what a bar rolling out of the hook looks like on a graph.' },
      ],
    },

    {
      type: 'concept', id: 'apt502-u3-c5', heading: '“Impingement”: what the trials did to the model, and what to do on Monday',
      body:
        'A client puts a clinic letter on your desk. “Subacromial impingement syndrome,” it says, and underneath, a note that decompression has been discussed. She read those words on her phone in the car park and arrived believing that a bone in her shoulder is grinding a tendon to pieces every time she lifts her arm. Half your job in the next ten minutes is anatomy. The other half is undoing a sentence.\n\n## The model that organised forty years\n\nNeer described it in 1972 and it shaped shoulder practice for four decades. The cuff, and the small fluid-filled cushion over it called the **subacromial bursa**, are squeezed between the head of the arm bone below and two things above. One is the front edge of the **acromion**, the flat shelf of bone that runs forwards off the top of the shoulder blade to form the point of the shoulder. The other is the coracoacromial ligament, a short strap bridging from that shelf across to the coracoid, the hook of bone that points forwards off the shoulder blade just under the collarbone. Bone and ligament together roof the tendon over, and that roof is the **coracoacromial arch**.\n\nThe rest of the model followed from that picture. Raising the arm narrows the gap. Repetition wears the tendon. Take the offending bone away and the problem goes. Bigliani’s grading of acromial shapes, flat, curved and hooked, supplied a cause you could point at on an X-ray. The model was mechanical, visual and satisfying, and it produced one of the most commonly performed orthopaedic operations in the world. It is also the clearest example in musculoskeletal medicine of an idea that is anatomically reasonable and causally wrong.\n\n## Three lines of evidence\n\nThe first was placebo-controlled surgery. CSAW, published in the Lancet in 2018, put patients into three groups: a real arthroscopic decompression, an arthroscopy that entered the joint and did nothing else, or no treatment. Both surgical groups improved compared with no treatment, and the difference between the real operation and the pretend one was too small for a patient to notice. FIMPACT, in the BMJ the same year, compared decompression against diagnostic arthroscopy and against exercise, and landed in the same place at two years. The step everyone believed in, taking bone off the acromion, was not doing the work.\n\nThe second was imaging in people who feel fine. Rotator cuff tears are common in shoulders with no symptoms, about a third of them in the classic MRI series and more than half in people over sixty, and measurements of the gap itself track symptoms poorly. The third is that acromial shape may be partly acquired, a pulling change where the coracoacromial ligament attaches, which would make the hook a consequence of years of loading rather than its cause. Observers struggle to agree on that shape anyway.\n\n## What survived, and what did not\n\nThe temptation now is to overcorrect into “it is all in the brain”, so state the survivors precisely. The **subacromial space** is real. It does narrow as the arm goes up, in everyone. Scapular position genuinely changes it: a scapula that rotates up and tilts back keeps the arch clear of the tendon, while one that tilts forwards and fails to rotate up leaves less room at the same arm angle. That is mechanics and it still holds. What does not hold is the reasoning from “this space narrows” to “narrowing is why she hurts” to “removing bone fixes it”.\n\n> Key idea: The names changed for a reason. “Subacromial pain syndrome” and “rotator cuff related shoulder pain” are not politeness. The old name told the patient a story about a pinch, and that story produces avoidance that outlives the pain.\n\n**Scapular dyskinesis**, meaning a change in how the shoulder blade moves, belongs in the same category: real to observe, over-read as a cause. Altered scapular movement is common in people with no symptoms, including a large share of pain-free overhead athletes, and assessors watching the same shoulder agree only moderately. The strongest prospective synthesis, a meta-analysis in athletes without symptoms, found dyskinesis associated with roughly a 43 per cent increase in the risk of future shoulder pain. Read that carefully. It is a relative increase on a modest base rate, so the absolute difference is small and the ability to predict which individual will hurt is close to useless. Pain also changes movement, so dyskinesis in an already-sore shoulder may be a result rather than a cause. The 2013 consensus statement says it plainly: dyskinesis is an impairment, not a diagnosis.\n\nSo, Monday. Do not remove overhead work by default. Range, load, tempo, the plane she lifts in and the speed she lifts at are all dose levers, and a month of pressing to shoulder height on a landmine before returning to a vertical bar is a modification rather than a ban. Load the shoulder in the positions she needs, progressively, guided by her symptoms rather than by an image. Explain the mechanics honestly, including the part where the space narrows in everybody. And keep the referral triggers sharp: new weakness, night pain that will not settle, significant trauma, anything neurological. Being sceptical about a model is not the same as being casual about a shoulder.',
    },

    // 4 ── annotated visual ──────────────────────────────────────────────────
    {
      type: 'visual', id: 'apt502-u3-visual',
      title: 'The shoulder complex: four joints, one arc',
      diagramId: 'scapulohumeral-rhythm',
      caption:
        'Four panels, lettered A to D on the figure. Scapulohumeral rhythm drawn as what it really is: an average taken from four joints working together at rates that change through the range. The figure also carries the upward-rotation force couple and the subacromial space that scapular position governs. The numbers 1 to 4 inside panel A mark the four joints; the notes below are keyed to the panel letters, not to those numbers.',
      callouts: [
        { id: 'apt502-u3-v1', label: '1', text: 'Panel A: four joints, one arc. The numbers on the figure mark them: sternoclavicular (1), acromioclavicular (2), glenohumeral (3), and the scapulothoracic articulation (4), which is not a true joint at all. It has no capsule and no cartilage; it is a muscular interface on the rib cage. Restrict any one of the four and elevation is lost, which is why this is a complex rather than a joint.' },
        { id: 'apt502-u3-v2', label: '2', text: 'Panel B: the setting phase is the part everyone skips. Through roughly the first 30° of abduction the scapula does something variable and often close to nothing, so quoting a ratio inside that window is meaningless.' },
        { id: 'apt502-u3-v3', label: '3', text: 'Panel B: 2:1 is an average across the whole arc, not a constant. Reported values run from about 1.25:1 to 3:1 depending on the plane of elevation, the load, the phase, and whether the scapula was tracked with skin sensors or bone pins.' },
        { id: 'apt502-u3-v4', label: '4', text: 'Panel C: the force couple has three arms, not two. Upper trapezius, lower trapezius and serratus anterior each pull in a direction that is not upward rotation; their combined effect is. Serratus is the only one that produces all three scapular motions.' },
        { id: 'apt502-u3-v5', label: '5', text: 'Panel D: the subacromial space narrows with elevation in everybody, and scapular position changes it. That much is mechanics. The leap from “narrower” to “that is why she hurts” is the part the placebo-controlled surgical trials broke.' },
      ],
    },

    // 5 ── worked example ────────────────────────────────────────────────────
    {
      type: 'workedExample', id: 'apt502-u3-worked',
      title: 'Reading a shoulder, a report and a request for permission',
      scenario:
        'Ren, 46, swims three mornings a week and lifts three afternoons. For two months the top of her overhead press has hurt, and so has the catch of her freestyle stroke: a band of pain across the front and outside of the shoulder between roughly 80 and 120 degrees of elevation, easing above that. No night pain, no trauma, and no weakness either of you can find. She arrives with an ultrasound report reading “supraspinatus tendinopathy with subacromial impingement” and a GP letter suggesting an orthopaedic opinion. She wants to know two things: should she stop pressing, and does she need the operation.',
      steps: [
        { id: 'apt502-u3-w1', title: 'Separate the tissue description from the mechanism claim',
          reasoning: 'The report holds two different kinds of statement in the same font. “Supraspinatus tendinopathy” describes how tissue looked on a screen, which is an observation. “Subacromial impingement” is not a finding at all. It is an explanation attached to the finding, and it arrives carrying a treatment implication. You can take the first at face value and hold the second loosely without disrespecting whoever wrote it.' },
        { id: 'apt502-u3-w2', title: 'Check the base rate before you weight the finding',
          reasoning: 'Cuff changes are common in shoulders that do not hurt, and they get commoner with age: about a third of symptom-free shoulders in the classic MRI series, more than half past sixty. A 46-year-old swimmer with a tendinopathic appearance on ultrasound is unremarkable, symptoms or no symptoms. That does not make the finding irrelevant. It means the finding cannot carry the diagnosis on its own, for the same reason a test that comes back positive in plenty of healthy people cannot.' },
        { id: 'apt502-u3-w3', title: 'Map her painful positions onto mechanics you actually have',
          reasoning: 'Pain from 80 to 120 degrees, worse in the wide-grip press and in the catch, easing above. That is the arc where the room under the coracoacromial arch is tightest and where the demand on scapular upward rotation and posterior tilt is highest. This is genuinely useful, because it tells you which positions to change and in which direction. It does not tell you that a bone is grinding a tendon.' },
        { id: 'apt502-u3-w4', title: 'Test the load, not the tissue',
          reasoning: 'You cannot palpate a diagnosis and you are not going to out-diagnose an ultrasound. What you can do is find the loading she tolerates today. How does a landmine press at 45 degrees feel against a vertical barbell press? A neutral-grip dumbbell press against a wide barbell grip? Two-thirds range against full range? A stable, repeatable finding, such as full range at reduced load being fine while full load at end range is not, is worth more for programming than any line in the report.' },
        { id: 'apt502-u3-w5', title: 'Change the dose, not the category',
          reasoning: 'Reduce the plane and the range, keep the load heavy enough to be a stimulus rather than a gesture, keep the pulling and carrying volume that loads the cuff without provoking the painful arc, and plan graded exposure back toward vertical pressing across the next six to eight weeks. Every lever there is reversible, and every one of them is a number you can write down. “Stop pressing” is neither.' },
        { id: 'apt502-u3-w6', title: 'Say what you are licensed to say, then set the trigger',
          reasoning: 'You can tell her that the imaging finding is common in people without pain, that decompression performed no better than a placebo procedure in the two large placebo-controlled trials, and that exercise-based management has matched surgery in trials. You cannot tell her whether to have an operation, and you cannot reinterpret her scan. Say that out loud, because it is her surgeon’s conversation. Then write down what would change your mind: new weakness, night pain that will not settle, a fall onto the shoulder, or six to eight weeks of graded loading with no direction of travel.' },
      ],
      takeaway:
        'The report handed her a tissue description and a mechanism she did not need. You handed her positions, loads and a review date. Same shoulder; only one of those two things is something she can act on this week.',
    },

    // 6 ── interactive lab (classification) ──────────────────────────────────
    {
      type: 'classification', id: 'apt502-u3-lab',
      title: 'Lab: what is actually holding the head in the socket?',
      instructions:
        'Each item has, at some point, been credited with keeping the humeral head where it belongs. File it by what it really does. The question is always the same. Does it work with no muscle acting at all, whether by a ligament going tight, by the shape of the socket, or by the pressure inside the capsule? Does it work by generating compression and control through the range? Or has it simply been given credit it cannot support? Note that the first bucket is not just about tension: a structure earns its place there by being non-contractile, whatever the mechanism it uses.',
      buckets: [
        { id: 'apt502-u3-b-static', label: 'Passive and non-contractile: works with no muscle acting' },
        { id: 'apt502-u3-b-dynamic', label: 'Active restraint: compression and control through the range' },
        { id: 'apt502-u3-b-myth', label: 'Credited with more than it earns' },
      ],
      items: [
        { id: 'apt502-u3-l1', text: 'The anterior band of the inferior glenohumeral ligament complex with the arm abducted to 90° and turned outwards',
          bucketId: 'apt502-u3-b-static', rationale: 'The main passive check on the head sliding forwards in that one position: the cocking position of a throw, the bottom of a wide-grip press, the catch of a freestyle stroke. Move out of it and the same band goes slack.' },
        { id: 'apt502-u3-l2', text: 'The superior glenohumeral ligament and the coracohumeral ligament with the arm hanging at her side',
          bucketId: 'apt502-u3-b-static', rationale: 'These are the structures that stop the head dropping downwards when the arm hangs. Passive, tied to one position, and irrelevant to what happens at ninety degrees.' },
        { id: 'apt502-u3-l3', text: 'The slight vacuum inside the joint capsule',
          bucketId: 'apt502-u3-b-static', rationale: 'Non-contractile and genuinely measurable: let air into a cadaver capsule and the head visibly drops. Nothing here goes tight; it belongs in this bucket because it holds without anything contracting. It is also small, it disappears the moment the capsule is breached, and any real load swamps it.' },
        { id: 'apt502-u3-l4', text: 'The glenoid labrum',
          bucketId: 'apt502-u3-b-static', rationale: 'Passive, but its main contribution is deepening the socket rather than holding by tension. It roughly doubles the working depth and anchors the capsule and ligaments. How much it contributes in a living, loaded shoulder is inferred largely from cadaver work.' },
        { id: 'apt502-u3-l5', text: 'Rotator cuff compression of the head into the glenoid through the mid-range of a press',
          bucketId: 'apt502-u3-b-dynamic', rationale: 'The compression half of concavity-compression, and the main source of stability everywhere the ligaments are slack, which is most of the useful range.' },
        { id: 'apt502-u3-l6', text: 'Subscapularis at the front balanced against infraspinatus and teres minor at the back',
          bucketId: 'apt502-u3-b-dynamic', rationale: 'The front-to-back force couple. Muscle-generated, adjustable moment to moment, and the reason the head does not slide forwards as the arm rotates.' },
        { id: 'apt502-u3-l7', text: 'Serratus anterior and trapezius keeping the glenoid pointing under the head as the arm elevates',
          bucketId: 'apt502-u3-b-dynamic', rationale: 'Strictly it does not restrain the head at all. It keeps the socket underneath it. That is a form of active stability no glenohumeral structure can supply, and it fails first when the scapula stops rotating up.' },
        { id: 'apt502-u3-l8', text: 'A “type III hooked” acromion reported on an X-ray',
          bucketId: 'apt502-u3-b-myth', rationale: 'Not a restraint at all, and a weak explanation for symptoms. Observers disagree about the classification, the shape may be partly acquired where the coracoacromial ligament attaches, and removing it performed no better than sham surgery.' },
        { id: 'apt502-u3-l9', text: 'Deltoid contracting on its own from the arm-at-side position',
          bucketId: 'apt502-u3-b-myth', rationale: 'The opposite of a stabiliser in isolation. Its line of pull runs nearly parallel to the shaft, so unopposed contraction drives the head upwards. It becomes stabilising only once the cuff balances it.' },
        { id: 'apt502-u3-l10', text: 'The long head of biceps acting as a humeral head depressor during overhead pressing',
          bucketId: 'apt502-u3-b-myth', rationale: 'Contested, and over-claimed. Cadaveric loading shows a depressing effect; in living people its activity tracks elbow and forearm demand, and cutting or relocating the tendon does not destabilise the shoulder.' },
      ],
    },

    // 7 ── branching case ────────────────────────────────────────────────────
    {
      type: 'branchingCase', id: 'apt502-u3-case',
      title: 'Case: the shoulder that was told it was being pinched',
      brief:
        'Maya, 41, trains with you twice a week and plays social volleyball. For six weeks she has had pain between about 90 and 120 degrees of elevation on the right, worst in the overhead press and the serve. A physiotherapist friend looked at her at a barbecue, said “classic impingement”, and told her to stop pressing overhead. She arrives asking what to do. Every decision is scored against best practice.',
      startNodeId: 'apt502-u3-n1',
      nodes: [
        {
          id: 'apt502-u3-n1',
          situation:
            'Maya has a painful arc between roughly 90 and 120 degrees, no night pain, no trauma, and full passive range. Resisted external rotation and abduction are strong and only mildly uncomfortable. She can press a light dumbbell overhead in a neutral grip with much less pain than with a barbell. She wants to know whether she should stop pressing.',
          choices: [
            { id: 'apt502-u3-n1a', text: '“Nothing here says stop. Let’s find the pressing you can do well today, so neutral grip, landmine angle, shorter range. We keep the load meaningful and build back toward the barbell over the next few weeks.”', to: 'apt502-u3-n2',
              quality: 'best', feedback: 'Right on both counts. You used the positional information she already gave you, and you treated range, plane and grip as dose levers rather than as a yes or no on “overhead work”.' },
            { id: 'apt502-u3-n1b', text: '“Your friend is right. Overhead pressing is what pinches the tendon, so we take it out until the pain is completely gone.”', to: 'apt502-u3-n3',
              quality: 'poor', feedback: 'You have adopted a mechanism the evidence no longer supports and turned it into an open-ended ban. “Until it is completely gone” has no end date and no stimulus, and it teaches her that her shoulder is fragile.' },
            { id: 'apt502-u3-n1c', text: '“Let’s park the barbell press for two weeks, keep everything else, and reassess before we decide.”', to: 'apt502-u3-n2',
              quality: 'acceptable', feedback: 'Defensible and safe, though a little passive. The neutral-grip finding was already telling you which positions she tolerates, so you could have kept loading her in those rather than waiting.' },
          ],
        },
        {
          id: 'apt502-u3-n2',
          situation:
            'Two weeks in, Maya is pressing a landmine press pain-free at a decent load. She then shows you a video her volleyball coach filmed: “Look, my right shoulder blade sticks out at the bottom. He says I have scapular dyskinesis and that’s the real cause.”',
          choices: [
            { id: 'apt502-u3-n2a', text: '“That is worth knowing about. But altered scapular movement turns up in plenty of shoulders that never hurt, and the best prospective evidence puts the extra risk in the low tens of per cent on a small base rate, so it cannot tell us why yours hurts. We will keep loading serratus and the whole shoulder, because that is good training anyway.”', to: 'apt502-u3-n4',
              quality: 'best', feedback: 'Honest and useful. You named what the observation is worth, refused to build a causal story on it, and kept training the thing that needs training regardless.' },
            { id: 'apt502-u3-n2b', text: '“He’s spotted the root cause. We need to correct the dyskinesis before you press overhead again: retraction holds and wall slides until the scapula moves correctly.”', to: 'apt502-u3-n4',
              quality: 'poor', feedback: 'Two errors stacked. Dyskinesis is an impairment, not a diagnosis, and prospectively it is a weak predictor. You have also removed the loading that was working in order to drill a position, and “moves correctly” is not something you can judge by eye.' },
            { id: 'apt502-u3-n2c', text: '“Video is hard to judge. Let’s add some serratus and lower trapezius work into what we’re already doing and keep going.”', to: 'apt502-u3-n4',
              quality: 'acceptable', feedback: 'No harm done and the training is sound, but you let the causal claim stand unchallenged. She will repeat it to the next coach as fact.' },
          ],
        },
        {
          id: 'apt502-u3-n3',
          situation:
            'Six weeks later Maya comes back. She has done no pressing at all, has lost noticeable strength, has stopped playing volleyball “in case it makes it worse”, and the pain is unchanged. She says, “I think there’s something structurally wrong with it.”',
          choices: [
            { id: 'apt502-u3-n3a', text: '“I got that wrong, and I want to fix it. Resting a shoulder does not strengthen it. Let’s find the loading you can do today and build from there.”', to: 'apt502-u3-n2',
              quality: 'acceptable', feedback: 'Good recovery, and saying it plainly costs you less credibility than defending the original call. Six weeks of avoidance is a real cost, and part of that cost is now belief rather than tissue.' },
            { id: 'apt502-u3-n3b', text: '“That sounds structural. Ask for a scan, and once we can see what’s torn we’ll know what to do.”', to: null,
              quality: 'poor', feedback: 'Imaging her now will almost certainly find something, and whatever it finds will be common in pain-free shoulders her age. You would be manufacturing a diagnosis to explain a deconditioning problem you created, and hardening her belief that the shoulder is damaged.' },
          ],
        },
        {
          id: 'apt502-u3-n4',
          situation:
            'A month on, Maya is back to barbell pressing at close to her old loads. Then she messages you: three days ago she landed on the point of that shoulder in a game. Since then she can barely hold her arm out at ninety degrees, it drops when you let go, and she is waking at night.',
          choices: [
            { id: 'apt502-u3-n4a', text: 'Stop loading the shoulder, tell her plainly that new weakness and night pain after a fall need assessing, refer her to her GP or physiotherapist today, and document what you found and what you advised.', to: 'apt502-u3-n5',
              quality: 'best', feedback: 'Exactly right. Post-traumatic weakness with night pain is not a programming question. Everything you have said about the impingement model being over-sold applies to persistent pain that came on without injury. It has no bearing on an acute injury with a new motor deficit.' },
            { id: 'apt502-u3-n4b', text: '“Loading beats resting, and we’ve just proved that. Let’s drop to the empty bar and keep going.”', to: null,
              quality: 'poor', feedback: 'You have taken a principle that applies to persistent pain with no injury behind it and applied it to an acute injury with new weakness. Scepticism about a model is not a licence to skip the referral triggers you set yourself.' },
            { id: 'apt502-u3-n4c', text: '“Sounds like the old pain flaring after a knock. Take a week off pressing and message me if it hasn’t settled.”', to: null,
              quality: 'poor', feedback: 'The arm dropping when released is a different finding from a painful arc, and a week of waiting is a week lost if something has torn. Reassurance is not assessment.' },
          ],
        },
        {
          id: 'apt502-u3-n5',
          situation:
            'The physiotherapist assesses her within the week: a partial cuff injury, no full-thickness tear, no surgical opinion needed, and a graded return recommended. Maya asks whether she will ever press overhead again, and whether she should just avoid it from now on to be safe.',
          choices: [
            { id: 'apt502-u3-n5a', text: '“Yes. We reload in stages: the positions you tolerate first, then range, then load, then back to vertical pressing. We work to the physio’s guidance and your symptoms. Avoiding it permanently would leave the tissue weaker than the sport asks it to be.”', to: null,
              quality: 'best', feedback: 'Correct on the mechanics and correct on the collaboration. Graded reloading is the plan, and you kept the other professional’s guidance in the loop rather than working around it.' },
            { id: 'apt502-u3-n5b', text: '“Honestly, for a shoulder that’s been through this, I’d avoid overhead work for good. There are plenty of ways to train without it.”', to: null,
              quality: 'poor', feedback: 'She plays volleyball. Permanently unloading a position her sport demands guarantees the tissue is less prepared for it, and you have given her a lifelong restriction on the strength of one incident.' },
            { id: 'apt502-u3-n5c', text: '“We can go back overhead, but only once your scapular movement looks perfectly symmetrical on video.”', to: null,
              quality: 'acceptable', feedback: 'The intention is fine, the gate is not. Visual scapular assessment has only moderate reliability between assessors, asymmetry is common in people with no pain, and you have made her return conditional on a test that cannot deliver the answer.' },
          ],
        },
      ],
    },

    // 8 ── error identification ──────────────────────────────────────────────
    {
      type: 'errorId', id: 'apt502-u3-errorid',
      title: 'Audit this shoulder handover note',
      brief:
        'A trainer in your team has written a handover note for a client you are taking over. Flag every statement that misstates anatomy, mechanics, or the evidence. Leave the sound statements unflagged.',
      document:
        'HANDOVER. L. Okafor, 38, club volleyball, right shoulder pain on the serve for four months. Assessment: painful arc 80 to 120°, no night pain, full passive range, strong on resisted external rotation. X-ray reported a type II acromion. PLAN: (1) Her right scapula wings slightly on lowering, so her scapular dyskinesis is what is causing the impingement, and we correct the dyskinesis before she presses overhead again. (2) The acromion shape on her X-ray explains the pinch, so overhead pressing is off the program indefinitely. (3) Rotator cuff: 3 × 20 banded external rotations daily with the yellow band, because the cuff’s job is external rotation, so this covers it. (4) Serratus anterior and lower trapezius to be trained alongside upper trapezius, since all three contribute to upward rotation of the scapula. (5) Upper trapezius is overactive and must be downtrained first: no shrugs, no loaded carries. (6) Scapulohumeral rhythm is a fixed 2:1 throughout the range, so I will watch for the scapula moving too early and correct it. (7) Her surgeon has mentioned subacromial decompression; I told her it is the definitive fix if conservative care fails. (8) If she develops night pain, new weakness, or symptoms following a fall, I will pause loading and refer her back to her GP.',
      findings: [
        { id: 'apt502-u3-e1', text: '“her scapular dyskinesis is what is causing the impingement”', isError: true,
          rationale: 'Dyskinesis is an observation, not a cause, and the 2013 consensus statement calls it an impairment rather than a diagnosis. It is common in pain-free overhead athletes, assessors watching the same shoulder agree only moderately, and the best prospective meta-analysis found roughly a 43% relative increase in future shoulder pain. That is small in absolute terms and useless for predicting an individual. Pain also alters movement, so it may be a result rather than a cause.' },
        { id: 'apt502-u3-e2', text: '“The acromion shape on her X-ray explains the pinch, so overhead pressing is off the program indefinitely”', isError: true,
          rationale: 'Two errors welded together. Acromial shape classifies unreliably between observers, may be partly acquired where the coracoacromial ligament attaches rather than causal, and removing the bone performed no better than sham surgery in placebo-controlled trials. And “indefinitely” is not a dose: range, plane, grip, tempo and load are all adjustable.' },
        { id: 'apt502-u3-e3', text: '“the cuff’s job is external rotation, so this covers it”', isError: true,
          rationale: 'The cuff’s main mechanical job is compressing and centring the humeral head in the socket while larger muscles move the arm; its turning power is modest. Three sets of twenty with a yellow band is also not a training load for a club volleyball player. It is a warm-up ritual being asked to do a training job.' },
        { id: 'apt502-u3-e4', text: '“Serratus anterior and lower trapezius to be trained alongside upper trapezius, since all three contribute to upward rotation of the scapula”', isError: false,
          rationale: 'Correct as written. Upper trapezius, lower trapezius and serratus anterior form the upward-rotation force couple; each pulls in a direction that is not upward rotation, and their combined effect is.' },
        { id: 'apt502-u3-e5', text: '“Upper trapezius is overactive and must be downtrained first: no shrugs, no loaded carries”', isError: true,
          rationale: 'Contradicts the previous line and the anatomy. Upper trapezius is a genuine upward rotator acting through the collarbone, and “overactivity” is over-read from surface EMG ratios with poor reliability. Removing shrugs and carries removes load from a girdle that needs it.' },
        { id: 'apt502-u3-e6', text: '“Scapulohumeral rhythm is a fixed 2:1 throughout the range”', isError: true,
          rationale: 'It is an average across the whole arc, not a constant. The scapula does little and behaves variably through the setting phase, and reported overall ratios run from about 1.25:1 to 3:1 depending on plane, load, phase and measurement method. Nobody can assess it by eye.' },
        { id: 'apt502-u3-e7', text: '“I told her it is the definitive fix if conservative care fails”', isError: true,
          rationale: 'Wrong on the evidence and outside scope. CSAW and FIMPACT both found arthroscopic subacromial decompression no better than a placebo procedure by any clinically important margin, and advising a client about surgery is her surgeon’s conversation, not yours.' },
        { id: 'apt502-u3-e8', text: '“If she develops night pain, new weakness, or symptoms following a fall, I will pause loading and refer her back to her GP”', isError: false,
          rationale: 'Sound practice, and the best line in the note. Referral triggers stated in advance turn a vague intention into a decision rule, and those three are the right ones for a shoulder.' },
      ],
    },

    // 9 ── active-recall set ─────────────────────────────────────────────────
    {
      type: 'recallSet', id: 'apt502-u3-recall',
      title: 'Key ideas to keep',
      cards: [
        { id: 'apt502-u3-r1', front: 'How much of the humeral head does the glenoid actually face, and what does the labrum add?',
          back: 'The glenoid surface is about a third the size of the head’s. The labrum roughly doubles the working depth of the socket and anchors the capsule and ligaments. The two surfaces also fit better than dry bone suggests, because the cartilage is thicker at the rim.' },
        { id: 'apt502-u3-r2', front: 'What is concavity-compression, in one sentence?',
          back: 'Resistance to the head sliding out equals socket depth multiplied by the force pressing the head in. The rotator cuff supplies the pressing, the labrum supplies part of the depth, and together they are the main source of mid-range stability.' },
        { id: 'apt502-u3-r3', front: 'Which passive restraint is doing the work in which position?',
          back: 'Arm at the side: superior glenohumeral and coracohumeral ligaments stop the head dropping. Around 45° of abduction: the middle glenohumeral ligament. At 90° of abduction with the arm turned out: the anterior band of the inferior glenohumeral ligament complex. Everywhere else they are slack.' },
        { id: 'apt502-u3-r13', front: 'Name the four joints of the shoulder complex, and say which one is not a joint',
          back: 'Sternoclavicular, where the collarbone meets the breastbone, and the only bony link between the shoulder and the trunk. Acromioclavicular, where the outer end of the collarbone meets the shoulder blade at the point of the shoulder, carrying most of the blade’s backward tilt and part of its turn. Glenohumeral, the ball and socket, which supplies the largest single share of the arc. And the scapulothoracic interface, which is not a true joint: no capsule, no cartilage, no two surfaces facing each other, just the shoulder blade sliding on muscle over the rib cage, and it moves only because the collarbone can swing at both ends. Stiffen any one of the four and the arm stops short of overhead.' },
        { id: 'apt502-u3-r4', front: 'Scapulohumeral rhythm: the number, the caveat, and the collarbone’s share',
          back: 'About 120° at the glenohumeral joint to 60° at the scapula across 180° of elevation, so roughly 2:1. But it is an average, the setting phase (first ~30°) is variable, and reported ratios run 1.25:1 to 3:1. The collarbone lifts and draws back at the sternoclavicular joint and spins backwards about its long axis; without that crankshaft, full elevation is unavailable.' },
        { id: 'apt502-u3-r5', front: 'The three scapular rotations during elevation, and which muscle produces all three',
          back: 'Upward rotation (~45 to 60°), posterior tilt (~20 to 30°), and external rotation (variable, the least consistent finding, sometimes preceded by a brief turn the other way). Serratus anterior is the only muscle whose line of pull produces all three.' },
        { id: 'apt502-u3-r6', front: 'What is the rotator cuff’s principal mechanical job?',
          back: 'Holding the humeral head centred in the socket, supplying the compression half of concavity-compression, while larger muscles move the arm. Its turning power is modest; its squeezing power is not. It is loaded in every press, pull and carry, so “cuff exercises” have no monopoly on it.' },
        { id: 'apt502-u3-r7', front: 'Why does deltoid need the cuff, and what happens without it?',
          back: 'Deltoid’s line of pull runs nearly parallel to the shaft of the arm bone, so unopposed contraction drives the head upwards. Subscapularis, infraspinatus and teres minor pull down and in to balance it: the force couple in the vertical plane. Lose enough cuff and the head drifts up; with a large tear the arm may not raise at all despite an intact deltoid.' },
        { id: 'apt502-u3-r8', front: 'What is the rotator cable, and why does it matter clinically?',
          back: 'A thickened band of fibres arching across the cuff insertion from the coracohumeral ligament. It can carry load around a hole the way a suspension bridge carries load across the gap beneath it, which is part of why some tears that run all the way through produce no symptoms and little loss of function.' },
        { id: 'apt502-u3-r9', front: 'The long head of biceps: attachments, the contested claim, and what crossing two joints does',
          back: 'From above the socket, partly bone and partly labrum, through the joint, into its groove. The “head depressor” role comes from cadaveric loading and is contested: in living people its activity tracks elbow and forearm demand, and cutting the tendon does not destabilise the shoulder. Because it crosses both joints, shoulder position changes its length and therefore its elbow function. It turns the palm up strongly near 90° of elbow bend and hardly at all with the arm straight.' },
        { id: 'apt502-u3-r10', front: 'Where does turning the palm up and down actually happen, and about what axis?',
          back: 'At the proximal and distal radioulnar joints, not the wrist. The radius rotates around a nearly stationary ulna about an axis running from the centre of the radial head to the pit at the base of the ulnar styloid. About 75 to 85° palm down, 80 to 90° palm up. The central band of the interosseous membrane passes load from radius to ulna.' },
        { id: 'apt502-u3-r11', front: 'Why does grip depend on wrist position?',
          back: 'The long finger flexors cross the wrist, so wrist angle sets their length. Grip is strongest around 20 to 40° of wrist extension and collapses in flexion as those muscles shorten past their useful range. The wrist extensors must work hard to hold that position, which is why gripping loads their shared origin at the outside of the elbow and why lateral elbow pain is usually a grip-load problem.' },
        { id: 'apt502-u3-r12', front: 'What broke the subacromial impingement model, and what survived it?',
          back: 'Broke: placebo-controlled surgical trials (CSAW, Lancet 2018; FIMPACT, BMJ 2018) found decompression no better than sham by a clinically important margin; cuff tears are common in symptom-free shoulders; acromial shape may be partly acquired and classifies unreliably. Survived: the subacromial space is real, it narrows with elevation in everyone, and scapular upward rotation and posterior tilt keep it clearer. What died is the reasoning from “narrows” to “that is the cause” to “remove the bone”.' },
      ],
    },

    // 10 ── unit quiz ────────────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u3-quiz', role: 'quiz', title: 'Unit quiz',
      questions: [
        { id: 'apt502-u3-q1', kind: 'single', cognitive: 'recall',
          prompt: 'Which statement best describes the glenoid labrum’s contribution to glenohumeral stability?',
          options: [
            { id: 'a', text: 'It deepens the socket, roughly doubling its working depth, and anchors the capsule and ligaments, so it raises the force needed to shift the head for a given amount of compression', correct: true },
            { id: 'b', text: 'It generates compression that holds the head in the socket', correct: false, rationale: 'Compression is muscular. The labrum is a passive structure; it changes the geometry that compression acts on.' },
            { id: 'c', text: 'It restrains the head by going tight at end range like a ligament', correct: false, rationale: 'That describes the glenohumeral ligaments. The labrum contributes depth, not end-range tension.' },
          ] },
        { id: 'apt502-u3-q2', kind: 'single', cognitive: 'recall',
          prompt: 'Which three muscles form the force couple that upwardly rotates the scapula during arm elevation?',
          options: [
            { id: 'a', text: 'Upper trapezius, lower trapezius and serratus anterior', correct: true },
            { id: 'b', text: 'Rhomboids, levator scapulae and pectoralis minor', correct: false, rationale: 'Those pull the scapula into downward rotation and anterior tilt, which is the opposite direction.' },
            { id: 'c', text: 'Supraspinatus, deltoid and upper trapezius', correct: false, rationale: 'Supraspinatus and deltoid act on the humerus, not on the scapula.' },
          ] },
        { id: 'apt502-u3-q3', kind: 'single', cognitive: 'application',
          prompt: 'A client cues herself “shoulder blades down and back” and holds it throughout a strict barbell press. She stalls at about 100° and finishes by arching her lower back. What is the mechanical explanation?',
          explanation: 'Elevation requires the scapula to rotate up, tilt back and travel. A retraction-and-depression cue held throughout opposes all three, so the missing range has to come from somewhere else.',
          options: [
            { id: 'a', text: 'She is holding the scapula in the opposite direction to the upward rotation and posterior tilt that elevation requires, so the missing range is borrowed from the lumbar spine', correct: true },
            { id: 'b', text: 'Her rotator cuff is too weak to complete the press', correct: false, rationale: 'Possible in general, but it does not explain a stall that appears only when she holds a scapular position.' },
            { id: 'c', text: 'She has insufficient glenohumeral external rotation', correct: false, rationale: 'External rotation matters for clearance at end range, but the failure described is scapular, and the give-away is that the cue produced it.' },
          ] },
        { id: 'apt502-u3-q4', kind: 'single', cognitive: 'analysis',
          prompt: 'Why do the glenohumeral ligaments explain almost nothing about stability during the mid-range of a movement?',
          options: [
            { id: 'a', text: 'They are capsular thickenings that only hold when tight, and each becomes tight in one specific end-range position. Through mid-range they are slack, so stability there depends on the compression the cuff generates', correct: true },
            { id: 'b', text: 'They are too weak to resist meaningful load in any position', correct: false, rationale: 'They are strong where they are tight. The anterior band of the inferior complex is a serious restraint at 90° with the arm turned out.' },
            { id: 'c', text: 'They only function once the labrum has been damaged', correct: false, rationale: 'The two work together; ligament function does not depend on labral failure.' },
          ] },
        { id: 'apt502-u3-q5', kind: 'multi', cognitive: 'analysis',
          prompt: 'The CSAW and FIMPACT trials compared arthroscopic subacromial decompression with a placebo surgical procedure. Which conclusions do they support? (Select all that apply.)',
          explanation: 'A sham-surgery control isolates the specific surgical step from everything else surgery delivers. Both trials found that step contributed less than a clinically important amount, which is a statement about that operation rather than about shoulder mechanics.',
          options: [
            { id: 'a', text: 'The specific act of removing subacromial bone contributed less than a clinically important amount over the placebo procedure', correct: true },
            { id: 'b', text: 'Patients in the surgical arms did improve, and the sham control is what shows the improvement was not down to the decompression itself', correct: true },
            { id: 'c', text: 'The subacromial space does not narrow during arm elevation', correct: false, rationale: 'It does narrow, in everyone. The trials tested a treatment, not the anatomy.' },
            { id: 'd', text: 'Scapular position no longer influences the space under the coracoacromial arch', correct: false, rationale: 'Upward rotation and posterior tilt still change the available room. That mechanics survived intact.' },
          ] },
        { id: 'apt502-u3-q6', kind: 'single', cognitive: 'application',
          prompt: 'A client asks why a palms-down curl feels so much weaker than a palms-up one. What is the accurate answer?',
          explanation: 'Biceps attaches to the radius, so it both bends the elbow and turns the palm up. Turning the palm down removes that second job and puts the muscle at a disadvantage, leaving brachialis and brachioradialis to carry more of the bending.',
          options: [
            { id: 'a', text: 'With the palm down the biceps is at a disadvantage and its palm-up action is unavailable, so more of the bending falls to brachialis and brachioradialis. Three flexors with three different attachments, not one muscle finding a “peak contraction”', correct: true },
            { id: 'b', text: 'Turning the palm down shortens the biceps at the shoulder, so it cannot produce force', correct: false, rationale: 'Forearm rotation does not change biceps length at the shoulder; shoulder position does that.' },
            { id: 'c', text: 'Turning the palm down moves the elbow’s axis of bending, so the moment arm of every flexor drops', correct: false, rationale: 'The bending axis runs through the trochlea and capitulum and does not move with forearm rotation.' },
          ] },
        { id: 'apt502-u3-q7', kind: 'single', cognitive: 'analysis',
          prompt: 'A client’s grip fails on heavy deadlifts, and video shows her wrists rolling into flexion just before the bar rolls out. What is the mechanism?',
          options: [
            { id: 'a', text: 'The long finger flexors cross the wrist, so wrist flexion shortens them past their useful length and grip force collapses within a few degrees. The fix is wrist position, and legitimately straps, rather than more grip work', correct: true },
            { id: 'b', text: 'Wrist flexion compresses the carpal tunnel and inhibits the flexors neurologically', correct: false, rationale: 'That is not the mechanism of an acute grip failure under load. The length-tension explanation is sufficient and testable.' },
            { id: 'c', text: 'The interosseous membrane slackens in wrist flexion, removing forearm load transfer', correct: false, rationale: 'The interosseous membrane passes axial load between radius and ulna; it is not what sets grip force.' },
          ] },
        { id: 'apt502-u3-q8', kind: 'single', cognitive: 'application', safetyCritical: true,
          prompt: 'A 58-year-old client fell onto the point of her shoulder four days ago. She now cannot hold her arm out at 90°, it drops when you release it, and she is waking at night with pain. What do you do?',
          explanation: 'New weakness after trauma, with night pain, is a referral, not a programming decision. Scepticism about the impingement model applies to persistent pain that came on without injury and has no bearing here.',
          options: [
            { id: 'a', text: 'Stop loading the shoulder, refer her for assessment promptly, explain plainly why, and document what you found and advised', correct: true },
            { id: 'b', text: 'Reduce the load and keep training the shoulder, since loading beats resting for shoulder pain', correct: false, rationale: 'That principle applies to persistent pain with no injury behind it. A new motor deficit after trauma is a different situation and needs assessing.' },
            { id: 'c', text: 'Treat it as a flare of her previous painful arc and review in a week', correct: false, rationale: 'An arm that drops when released is not a painful arc. A week of waiting is a week lost if something has torn.' },
          ] },
        { id: 'apt502-u3-q9', kind: 'single', cognitive: 'synthesis',
          prompt: 'A recreational lifter with a six-week painful arc between 90° and 120°, no injury behind it, no weakness and no night pain, asks you to design the next block. Which plan is most defensible?',
          options: [
            { id: 'a', text: 'Find the pressing positions she tolerates now, meaning plane, grip and range, keep the load high enough to be a stimulus, keep pulling and carrying volume, plan graded exposure back toward her painful positions over weeks, and state the referral triggers up front', correct: true, rationale: 'Dose levers, meaningful load, a route back to the position she needs, and a decision rule for when to stop.' },
            { id: 'b', text: 'Remove all overhead work until she is pain-free, then rebuild', correct: false, rationale: '“Until pain-free” has no end date and no stimulus, and permanently avoiding a position leaves the tissue less prepared for it than it was.' },
            { id: 'c', text: 'Correct her scapular movement with retraction holds and wall slides until it looks symmetrical, then reintroduce load', correct: false, rationale: 'Visual scapular assessment is only moderately reliable, asymmetry is common in pain-free people, and drilling positions is not a substitute for loading.' },
          ] },
      ],
    },

    // 11 ── teach-back ───────────────────────────────────────────────────────
    {
      type: 'teachBack', id: 'apt502-u3-teach',
      title: 'Teach it back',
      prompt:
        'Your client Amira has been told she has “impingement” and that her shoulder is being pinched every time she raises her arm. She has stopped all overhead work and is frightened of making it worse. In plain, warm language, with no jargon and no lecture, explain what the subacromial space actually is, why her scan finding does not settle the question, and what you propose to do. Do not dismiss her clinician, and do not oversell your own certainty.',
      modelAnswer:
        'Let me show you what that word means, because it sounds much more dramatic than it is. There is a small gap between the top of your arm bone and the bit of the shoulder blade that arches over it, and a tendon runs through that gap. As you lift your arm, the gap gets narrower. That is true in my shoulder and in yours and in everybody’s. It is how the joint is built. When your shoulder blade rotates up and tips back the way it is designed to, the arch lifts out of the way and the tendon has room. So the anatomy in that word is real. What has changed is the story people built on top of it. For years the assumption was that the gap was pinching the tendon and the answer was to shave a bit of bone off. Then surgeons ran the fair test: a real operation against a pretend one, with the patients not knowing which they had. The real one was barely any better. At the same time we learned that if you scan the shoulders of people with no pain at all, plenty of them have exactly the findings on your report. So your scan tells me something about how the tissue looks. It does not tell me why you hurt, and it definitely does not tell you the joint is being ground down. Here is what I would like to do. We find the positions you can press and pull in today without stirring it up, so a different angle, a different grip, less range, and we load those properly, because a tendon gets more tolerant when you ask it to work rather than when you leave it alone. Then over the next month or two we walk it back towards the positions that bother you now. I will not oversell this. Some shoulders take a while, and if we see no direction of travel in six to eight weeks, or if you get new weakness, night pain that will not settle, or you fall on it, we stop and I send you back to be looked at properly. Your physio is not wrong to have used that word. Everybody did, for forty years. It just carries a picture that is scarier than what is actually happening to you.',
      rubric: [
        { id: 'apt502-u3-t1', text: 'Describes the subacromial space accurately and in plain language, including that it narrows with elevation in everyone, without implying that narrowing equals damage' },
        { id: 'apt502-u3-t2', text: 'Explains that scapular upward rotation and posterior tilt keep the arch clear, which is the mechanics that still holds, without turning it into a “fix your posture” prescription' },
        { id: 'apt502-u3-t3', text: 'Conveys why the imaging finding does not settle the question, using the point about how common these findings are in people without symptoms, in ordinary words rather than statistical jargon' },
        { id: 'apt502-u3-t4', text: 'References the placebo-controlled surgery evidence honestly and proportionately, without disparaging the referring clinician or pretending to more certainty than exists' },
        { id: 'apt502-u3-t5', text: 'Ends with a concrete, reversible plan of modified positions, meaningful load and graded return, plus referral triggers stated up front, keeping the decision shared' },
      ],
    },

    // 12 ── cumulative review ────────────────────────────────────────────────
    {
      type: 'questionSet', id: 'apt502-u3-cumulative', role: 'cumulative', title: 'Pulling it together',
      questions: [
        { id: 'apt502-u3-cu1', kind: 'single', cognitive: 'analysis',
          prompt: 'CSAW randomised patients to decompression, to a sham arthroscopy, and to no treatment. Using what you know about comparators, what does the third arm add that the first two alone could not deliver?',
          explanation: 'A sham arm isolates the specific surgical step; a no-treatment arm reveals how much improvement would have happened anyway. Together they separate three different quantities.',
          options: [
            { id: 'a', text: 'It shows how much change happens with no intervention at all, covering natural history, regression to the mean and expectation, so the sham comparison can isolate the specific surgical step while the no-treatment comparison isolates everything surgery delivers', correct: true },
            { id: 'b', text: 'It increases the sample size and therefore the precision of the main comparison', correct: false, rationale: 'A third arm answers a different question. Precision on the sham comparison comes from the size of those two arms.' },
            { id: 'c', text: 'It blinds the surgeons to allocation', correct: false, rationale: 'Surgeons cannot be blinded to what they perform. Blinding in these trials applied to patients and outcome assessors.' },
          ] },
        { id: 'apt502-u3-cu2', kind: 'single', cognitive: 'analysis',
          prompt: 'A meta-analysis reports that scapular dyskinesis is associated with a 43% increase in the risk of future shoulder pain in athletes without symptoms. A colleague concludes that every athlete with dyskinesis should be pulled from overhead training. What is wrong with that inference?',
          explanation: 'A relative increase on a modest base rate is a small absolute increase, and a group-level association with poor individual discrimination cannot license an individual-level restriction.',
          options: [
            { id: 'a', text: '43% is a relative increase applied to a modest baseline risk, so the absolute difference is small. The association also discriminates poorly between individuals, and dyskinesis is common in athletes who never develop pain', correct: true },
            { id: 'b', text: 'Meta-analyses of observational studies carry no weight at all and should be ignored', correct: false, rationale: 'Overcorrection. Pooling prospective cohorts is real evidence. It just answers a group-level question, and the estimate has to be read for what it is.' },
            { id: 'c', text: 'The finding is invalid because dyskinesis cannot be measured', correct: false, rationale: 'It can be measured, with only moderate reliability. Imperfect measurement weakens the estimate; it does not void it.' },
          ] },
        { id: 'apt502-u3-cu3', kind: 'single', cognitive: 'application',
          prompt: 'An MRI series found rotator cuff tears in about a third of shoulders with no symptoms overall, and in more than half of people over sixty. What does this do to the value of a cuff tear found on a 62-year-old client’s scan?',
          options: [
            { id: 'a', text: 'It weakens it considerably as an explanation: a finding that is more likely than not in pain-free people her age cannot, by itself, account for why this shoulder hurts', correct: true, rationale: 'High prevalence in people without the outcome means a positive finding shifts the probability very little, which is the same logic as a test that comes back positive in a lot of healthy people.' },
            { id: 'b', text: 'It has no bearing, because a tear in a person with symptoms is a different thing from a tear in a person without them', correct: false, rationale: 'That is the conclusion you would need evidence for, not the assumption you get to start from.' },
            { id: 'c', text: 'It strengthens the finding, because it confirms tears are a normal part of ageing and therefore progressive', correct: false, rationale: 'Prevalence rising with age says nothing about this individual’s symptoms and does not make the tear explanatory.' },
          ] },
        { id: 'apt502-u3-cu4', kind: 'single', cognitive: 'analysis',
          prompt: 'A colleague argues that because the glenohumeral capsule is viscoelastic, ten minutes of end-range stretching before a session will “open up” a client’s overhead position for that session and permanently over time. How should you read that claim?',
          explanation: 'A short-term range change after sustained end-range loading is a real and well-described tissue response. Treating it as durable structural lengthening is a much larger claim needing different evidence, and a capsule is a restraint you may not want longer.',
          options: [
            { id: 'a', text: 'A short-term increase in available range after sustained loading is plausible and largely temporary. A permanent structural change is a separate and much bigger claim, and deliberately lengthening a passive restraint is not obviously a goal for an overhead athlete', correct: true },
            { id: 'b', text: 'It is correct: connective tissue lengthens under sustained load, so repeated stretching reliably produces permanent range gains', correct: false, rationale: 'That confuses an acute mechanical and neural response with durable structural remodelling, which is a far stronger claim.' },
            { id: 'c', text: 'It is nonsense, because capsular tissue has no mechanical response to sustained loading', correct: false, rationale: 'Overcorrection. The acute response is real. The problem is the leap to permanence and the assumption that more capsular length is desirable.' },
          ] },
        { id: 'apt502-u3-cu5', kind: 'single', cognitive: 'synthesis',
          prompt: 'A client with a painful arc is told by another trainer that “your thoracic spine is stiff, and until we fix that your shoulder will never be right.” What is the most defensible professional position?',
          explanation: 'Thoracic position does influence the scapula’s resting orientation and the elevation available, which is real mechanics. But a single-cause story about a symptom with many contributors is exactly the error the impingement model taught us to stop making.',
          options: [
            { id: 'a', text: 'Treat it as one plausible contributor among several worth addressing inside a loading program, not as a gate she must pass before her shoulder can be trained. The single-cause framing is the same error the impingement model made', correct: true },
            { id: 'b', text: 'Accept it: thoracic position changes scapular resting orientation, so it must be the cause and should be corrected first', correct: false, rationale: 'A mechanism being real does not make it the cause of this person’s pain, and “first” turns a contributor into a gate that stops her training.' },
            { id: 'c', text: 'Reject it entirely: the thoracic spine has no measurable influence on shoulder elevation', correct: false, rationale: 'That overcorrects past the mechanics. The scapula sits on the rib cage, and trunk position does change scapular orientation and the elevation available.' },
          ] },
        ],
    },
  ],
};
