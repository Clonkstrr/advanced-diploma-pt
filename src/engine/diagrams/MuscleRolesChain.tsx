// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function MuscleRolesChain() {
  return (
    <svg
      role="img"
      viewBox="0 0 880 980"
      width="100%"
      aria-labelledby="mrc-title"
      className="diagram"
    >
      <title id="mrc-title">
        Muscle roles are assigned by the task: the same muscles of a step-up shown as agonist,
        antagonist, synergist and stabiliser, how those roles reassign on the descent and in a
        seated knee extension, and how fixing the far end of the limb changes which joints must
        move together and where the load lands
      </title>
      <defs>
        <marker id="mrc-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* ── header ─────────────────────────────────────────────────────── */}
      <text x="440" y="24" textAnchor="middle" fill="currentColor" fontSize="13" letterSpacing="1.6">
        MUSCLE ROLES ARE ASSIGNED BY THE TASK
      </text>
      <text x="440" y="44" textAnchor="middle" fill="currentColor" fontSize="11.5">
        the same muscles in three tasks — and what changes when the far end of the limb is fixed
      </text>

      {/* ── panel 1: the split-squat / step-up geometry ────────────────── */}
      <rect x="16" y="56" width="290" height="294" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />

      {/* barbell across the shoulders */}
      <line x1="130" y1="116" x2="188" y2="116" stroke="currentColor" strokeWidth="3.5" />
      {/* head, trunk */}
      <circle cx="150" cy="96" r="13" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="150" y1="109" x2="160" y2="164" stroke="currentColor" strokeWidth="2" />
      {/* front leg */}
      <line x1="160" y1="164" x2="198" y2="226" stroke="currentColor" strokeWidth="2" />
      <line x1="198" y1="226" x2="192" y2="284" stroke="currentColor" strokeWidth="2" />
      <line x1="176" y1="288" x2="218" y2="288" stroke="currentColor" strokeWidth="2" />
      {/* rear leg */}
      <line x1="160" y1="164" x2="124" y2="228" stroke="currentColor" strokeWidth="1.5" />
      <line x1="124" y1="228" x2="108" y2="282" stroke="currentColor" strokeWidth="1.5" />
      <line x1="108" y1="282" x2="126" y2="288" stroke="currentColor" strokeWidth="1.5" />
      {/* joints */}
      <circle cx="160" cy="164" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="198" cy="226" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="192" cy="284" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="124" cy="228" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
      {/* ground */}
      <line x1="30" y1="288" x2="292" y2="288" stroke="currentColor" strokeWidth="1.5" />

      {/* load line */}
      <line x1="178" y1="64" x2="178" y2="296" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="178" y="78" textAnchor="middle" fill="currentColor" fontSize="11">load line</text>

      {/* external moment arms */}
      <line x1="160" y1="164" x2="178" y2="164" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      <text x="169" y="157" textAnchor="middle" fill="currentColor" fontSize="12" fontStyle="italic">a</text>
      <line x1="178" y1="226" x2="198" y2="226" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      <text x="188" y="219" textAnchor="middle" fill="currentColor" fontSize="12" fontStyle="italic">b</text>

      {/* joint labels with leaders */}
      <text x="104" y="162" textAnchor="end" fill="currentColor" fontSize="11">hip axis</text>
      <line x1="108" y1="159" x2="154" y2="163" stroke="currentColor" strokeWidth="1" />
      <text x="238" y="222" textAnchor="start" fill="currentColor" fontSize="11">knee axis</text>
      <line x1="236" y1="219" x2="204" y2="225" stroke="currentColor" strokeWidth="1" />

      <text x="161" y="312" textAnchor="middle" fill="currentColor" fontSize="11">
        a = external moment arm at the hip
      </text>
      <text x="161" y="327" textAnchor="middle" fill="currentColor" fontSize="11">
        b = external moment arm at the knee
      </text>
      <text x="161" y="342" textAnchor="middle" fill="currentColor" fontSize="11">
        lean the trunk forward: a grows, b shrinks
      </text>

      {/* ── panel 2: the four role words ───────────────────────────────── */}
      <rect x="320" y="60" width="544" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="334" y="80" fill="currentColor" fontSize="11" letterSpacing="1.6">AGONIST</text>
      <text x="334" y="100" fill="currentColor" fontSize="11.5">
        produces the net joint moment the task demands. Net moment = agonist minus
      </text>
      <text x="334" y="116" fill="currentColor" fontSize="11.5">
        antagonist, so an antagonist that switches on subtracts from what is available.
      </text>

      <rect x="320" y="132" width="544" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="334" y="152" fill="currentColor" fontSize="11" letterSpacing="1.6">ANTAGONIST</text>
      <text x="334" y="172" fill="currentColor" fontSize="11.5">
        produces the opposing moment. It may be silent, braking the movement, or
      </text>
      <text x="334" y="188" fill="currentColor" fontSize="11.5">
        co-contracting to stiffen the joint — three different jobs under one word.
      </text>

      <rect x="320" y="204" width="544" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="334" y="224" fill="currentColor" fontSize="11" letterSpacing="1.6">SYNERGIST · NEUTRALISER</text>
      <text x="334" y="244" fill="currentColor" fontSize="11.5">
        adds to the agonist's moment, or cancels an unwanted component of it — as
      </text>
      <text x="334" y="260" fill="currentColor" fontSize="11.5">
        pronator teres cancels the biceps' supination during a reverse curl.
      </text>

      <rect x="320" y="276" width="544" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="334" y="296" fill="currentColor" fontSize="11" letterSpacing="1.6">STABILISER · FIXATOR</text>
      <text x="334" y="316" fill="currentColor" fontSize="11.5">
        holds a segment still so the agonist has something to pull against. Give the job
      </text>
      <text x="334" y="332" fill="currentColor" fontSize="11.5">
        to hardware — a seat, a strap, a backrest — and the role disappears.
      </text>

      {/* ── panel 3: the reassignment grid ─────────────────────────────── */}
      <rect x="16" y="372" width="848" height="230" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="410" x2="864" y2="410" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="458" x2="864" y2="458" stroke="currentColor" strokeWidth="1" />
      <line x1="16" y1="506" x2="864" y2="506" stroke="currentColor" strokeWidth="1" />
      <line x1="16" y1="554" x2="864" y2="554" stroke="currentColor" strokeWidth="1" />
      <line x1="206" y1="372" x2="206" y2="602" stroke="currentColor" strokeWidth="1.5" />
      <line x1="426" y1="372" x2="426" y2="602" stroke="currentColor" strokeWidth="1" />
      <line x1="646" y1="372" x2="646" y2="602" stroke="currentColor" strokeWidth="1" />

      <text x="26" y="391" fill="currentColor" fontSize="11" letterSpacing="1.6">ROLE</text>
      <text x="316" y="391" textAnchor="middle" fill="currentColor" fontSize="11.5">STEP-UP · pushing up</text>
      <text x="316" y="405" textAnchor="middle" fill="currentColor" fontSize="11">closed chain</text>
      <text x="536" y="391" textAnchor="middle" fill="currentColor" fontSize="11.5">STEP-DOWN · lowering</text>
      <text x="536" y="405" textAnchor="middle" fill="currentColor" fontSize="11">closed chain</text>
      <text x="755" y="391" textAnchor="middle" fill="currentColor" fontSize="11.5">SEATED KNEE EXTENSION</text>
      <text x="755" y="405" textAnchor="middle" fill="currentColor" fontSize="11">open chain</text>

      <text x="26" y="430" fill="currentColor" fontSize="11.5">AGONIST</text>
      <text x="216" y="430" fill="currentColor" fontSize="11">gluteus maximus + quadriceps,</text>
      <text x="216" y="448" fill="currentColor" fontSize="11">shortening as hip and knee extend</text>
      <text x="436" y="430" fill="currentColor" fontSize="11">gravity. The taxonomy offers no</text>
      <text x="436" y="448" fill="currentColor" fontSize="11">prime mover for this direction.</text>
      <text x="656" y="430" fill="currentColor" fontSize="11">quadriceps, and nothing else</text>
      <text x="656" y="448" fill="currentColor" fontSize="11">can be recruited to help</text>

      <text x="26" y="478" fill="currentColor" fontSize="11.5">ANTAGONIST</text>
      <text x="216" y="478" fill="currentColor" fontSize="11">hip flexors, hamstrings at the knee</text>
      <text x="216" y="496" fill="currentColor" fontSize="11">— quiet, plus some co-contraction</text>
      <text x="436" y="478" fill="currentColor" fontSize="11">the same glutes and quadriceps,</text>
      <text x="436" y="496" fill="currentColor" fontSize="11">now braking while lengthening</text>
      <text x="656" y="478" fill="currentColor" fontSize="11">hamstrings, largely silent —</text>
      <text x="656" y="496" fill="currentColor" fontSize="11">there is nothing to resist</text>

      <text x="26" y="526" fill="currentColor" fontSize="11.5">SYNERGIST</text>
      <text x="26" y="544" fill="currentColor" fontSize="11">&amp; NEUTRALISER</text>
      <text x="216" y="526" fill="currentColor" fontSize="11">adductor magnus adds extension;</text>
      <text x="216" y="544" fill="currentColor" fontSize="11">soleus restrains the shank</text>
      <text x="436" y="526" fill="currentColor" fontSize="11">adductor magnus shares the brake;</text>
      <text x="436" y="544" fill="currentColor" fontSize="11">gluteus medius cancels adduction</text>
      <text x="656" y="526" fill="currentColor" fontSize="11">none of consequence: one joint,</text>
      <text x="656" y="544" fill="currentColor" fontSize="11">one plane, one muscle group</text>

      <text x="26" y="574" fill="currentColor" fontSize="11.5">STABILISER</text>
      <text x="216" y="574" fill="currentColor" fontSize="11">gluteus medius, QL, abdominal</text>
      <text x="216" y="592" fill="currentColor" fontSize="11">wall, foot intrinsics, scapula</text>
      <text x="436" y="574" fill="currentColor" fontSize="11">the same set, longer and harder</text>
      <text x="436" y="592" fill="currentColor" fontSize="11">— the descent is the real test</text>
      <text x="656" y="574" fill="currentColor" fontSize="11">the seat and the strap do it:</text>
      <text x="656" y="592" fill="currentColor" fontSize="11">hardware replaced the muscle</text>

      <text x="440" y="622" textAnchor="middle" fill="currentColor" fontSize="11">
        Some texts rescue the middle column by calling the braking muscle an “eccentric agonist”. That the label needs rescuing is the point.
      </text>

      {/* ── panel 4: open versus closed chain ──────────────────────────── */}
      <text x="440" y="654" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.4">
        FIXING THE FAR END CHANGES WHAT MUST MOVE TOGETHER
      </text>

      <rect x="16" y="666" width="422" height="308" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="442" y="666" width="422" height="308" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />

      {/* closed chain figure */}
      <text x="227" y="686" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.2">
        CLOSED · the foot is fixed
      </text>
      <line x1="194" y1="700" x2="202" y2="678" stroke="currentColor" strokeWidth="2" />
      <line x1="194" y1="700" x2="236" y2="760" stroke="currentColor" strokeWidth="2" />
      <line x1="236" y1="760" x2="198" y2="818" stroke="currentColor" strokeWidth="2" />
      <line x1="170" y1="824" x2="230" y2="824" stroke="currentColor" strokeWidth="2" />
      <circle cx="194" cy="700" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="236" cy="760" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="198" cy="818" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="60" y1="826" x2="380" y2="826" stroke="currentColor" strokeWidth="1.5" />
      <line x1="206" y1="826" x2="206" y2="676" stroke="currentColor" strokeWidth="1.5"
        strokeDasharray="6 5" markerEnd="url(#mrc-arrow)" />
      <line x1="194" y1="700" x2="206" y2="700" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      <text x="200" y="694" textAnchor="middle" fill="currentColor" fontSize="12" fontStyle="italic">a</text>
      <line x1="206" y1="760" x2="236" y2="760" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      <text x="221" y="754" textAnchor="middle" fill="currentColor" fontSize="12" fontStyle="italic">b</text>
      <text x="170" y="702" textAnchor="end" fill="currentColor" fontSize="11">hip</text>
      <line x1="174" y1="699" x2="188" y2="700" stroke="currentColor" strokeWidth="1" />
      <text x="262" y="762" textAnchor="start" fill="currentColor" fontSize="11">knee</text>
      <line x1="260" y1="759" x2="242" y2="760" stroke="currentColor" strokeWidth="1" />
      <text x="170" y="820" textAnchor="end" fill="currentColor" fontSize="11">ankle</text>
      <line x1="174" y1="817" x2="192" y2="818" stroke="currentColor" strokeWidth="1" />
      <text x="300" y="700" textAnchor="middle" fill="currentColor" fontSize="11">one force line,</text>
      <text x="300" y="715" textAnchor="middle" fill="currentColor" fontSize="11">three joints</text>
      <text x="200" y="845" textAnchor="middle" fill="currentColor" fontSize="11">ground reaction under a fixed foot</text>

      <text x="28" y="872" fill="currentColor" fontSize="11">
        One force line serves every joint in the chain: its perpendicular
      </text>
      <text x="28" y="888" fill="currentColor" fontSize="11">
        distance to each axis sets that joint&#8217;s share of the demand.
      </text>
      <text x="28" y="908" fill="currentColor" fontSize="11">
        Hip, knee and ankle angles are coupled — change one and the
      </text>
      <text x="28" y="924" fill="currentColor" fontSize="11">
        others must change. That redundancy lets a person compensate:
      </text>
      <text x="28" y="940" fill="currentColor" fontSize="11">
        lean, shift to the other limb, trade knee demand for hip.
      </text>
      <text x="28" y="960" fill="currentColor" fontSize="11">
        Joint compression and hamstring co-activation lower anterior shear.
      </text>

      {/* open chain figure */}
      <text x="653" y="686" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.2">
        OPEN · the femur is fixed
      </text>
      <line x1="548" y1="712" x2="540" y2="668" stroke="currentColor" strokeWidth="2" />
      <line x1="548" y1="712" x2="664" y2="712" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="566" y1="706" x2="664" y2="706" stroke="currentColor" strokeWidth="2" />
      <line x1="664" y1="706" x2="712" y2="772" stroke="currentColor" strokeWidth="2" />
      <circle cx="566" cy="706" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="664" cy="706" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="712" cy="772" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="712" y1="782" x2="712" y2="822" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#mrc-arrow)" />
      <text x="722" y="806" textAnchor="start" fill="currentColor" fontSize="11">pad force</text>
      <line x1="664" y1="706" x2="712" y2="706" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="712" y1="706" x2="712" y2="762" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <text x="688" y="700" textAnchor="middle" fill="currentColor" fontSize="12" fontStyle="italic">c</text>
      <text x="540" y="704" textAnchor="end" fill="currentColor" fontSize="11">hip</text>
      <text x="684" y="726" textAnchor="start" fill="currentColor" fontSize="11">knee</text>
      <line x1="682" y1="722" x2="670" y2="710" stroke="currentColor" strokeWidth="1" />
      <text x="592" y="730" textAnchor="middle" fill="currentColor" fontSize="11">seat and belt hold the femur</text>
      <text x="653" y="845" textAnchor="middle" fill="currentColor" fontSize="11">only the knee moves</text>

      <text x="454" y="872" fill="currentColor" fontSize="11">
        Resistance enters at one point on one segment, so the whole
      </text>
      <text x="454" y="888" fill="currentColor" fontSize="11">
        external moment lands on one joint and cannot be shuffled.
      </text>
      <text x="454" y="908" fill="currentColor" fontSize="11">
        Hip and ankle are decoupled; the other limb cannot help. That
      </text>
      <text x="454" y="924" fill="currentColor" fontSize="11">
        is the use of it — no compensation is available, which is why
      </text>
      <text x="454" y="940" fill="currentColor" fontSize="11">
        open chain exposes a quadriceps deficit a squat can hide.
      </text>
      <text x="454" y="960" fill="currentColor" fontSize="11">
        Peak anterior tibial shear sits near full extension (0–30°).
      </text>
    </svg>
  );
}
