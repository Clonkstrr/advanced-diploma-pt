// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function DesignTrialFlow() {
  return (
    <svg
      role="img"
      viewBox="0 0 880 612"
      width="100%"
      aria-labelledby="dtf-title"
      className="diagram"
    >
      <title id="dtf-title">
        Twenty-four people through a trial, from enrolment to analysis, with what each stage protects
        written beside it. Chance assigns twelve people to cuffs with light load and twelve to heavy
        training. Eight weeks of training follow, with an assessor who never learns who is in which
        group. Three people stop. At the bottom the same trial splits into two answers: counting all
        twenty-four in the group chance gave them, which is intention to treat, or counting only the
        twenty-one who finished, which is per protocol. Circled numbers 1 to 4 mark the four notes
        listed beneath the figure.
      </title>
      <defs>
        <marker id="dtf-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="440" y="26" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.6">
        WHAT A TRIAL PROTECTS, STAGE BY STAGE
      </text>

      {/* ── the flow, down the left ──────────────────────────────────────── */}
      <rect x="45" y="48" width="240" height="36" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="165" y="71" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">24 PEOPLE ENROLLED</text>
      <line x1="165" y1="84" x2="165" y2="108" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#dtf-arrow)" />

      <rect x="45" y="110" width="240" height="44" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="165" y="130" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">ASSIGNED BY CHANCE</text>
      <text x="165" y="147" textAnchor="middle" fill="currentColor" fontSize="11">not by anyone&#8217;s choice</text>

      <line x1="165" y1="154" x2="104" y2="184" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#dtf-arrow)" />
      <line x1="165" y1="154" x2="226" y2="184" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#dtf-arrow)" />

      <rect x="45" y="186" width="110" height="58" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="100" y="206" textAnchor="middle" fill="currentColor" fontSize="11">CUFFS AND</text>
      <text x="100" y="221" textAnchor="middle" fill="currentColor" fontSize="11">LIGHT LOAD</text>
      <text x="100" y="238" textAnchor="middle" fill="currentColor" fontSize="11">12 people</text>

      <rect x="175" y="186" width="110" height="58" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="230" y="206" textAnchor="middle" fill="currentColor" fontSize="11">HEAVY</text>
      <text x="230" y="221" textAnchor="middle" fill="currentColor" fontSize="11">TRAINING</text>
      <text x="230" y="238" textAnchor="middle" fill="currentColor" fontSize="11">12 people</text>

      <line x1="100" y1="244" x2="100" y2="270" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#dtf-arrow)" />
      <line x1="230" y1="244" x2="230" y2="270" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#dtf-arrow)" />

      <rect x="45" y="272" width="240" height="42" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="165" y="291" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">EIGHT WEEKS OF TRAINING</text>
      <text x="165" y="307" textAnchor="middle" fill="currentColor" fontSize="11">assessor never learns who is who</text>

      <line x1="165" y1="314" x2="165" y2="338" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#dtf-arrow)" />

      <rect x="45" y="340" width="240" height="42" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="165" y="359" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">3 PEOPLE STOP</text>
      <text x="165" y="375" textAnchor="middle" fill="currentColor" fontSize="11">injured, bored, not responding</text>

      <line x1="165" y1="382" x2="104" y2="404" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#dtf-arrow)" />
      <line x1="165" y1="382" x2="226" y2="404" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#dtf-arrow)" />

      <rect x="45" y="406" width="110" height="58" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="100" y="426" textAnchor="middle" fill="currentColor" fontSize="11">COUNT ALL 24</text>
      <text x="100" y="441" textAnchor="middle" fill="currentColor" fontSize="11">in the group</text>
      <text x="100" y="456" textAnchor="middle" fill="currentColor" fontSize="11">chance gave</text>

      <rect x="175" y="406" width="110" height="58" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="230" y="426" textAnchor="middle" fill="currentColor" fontSize="11">COUNT THE 21</text>
      <text x="230" y="441" textAnchor="middle" fill="currentColor" fontSize="11">who finished</text>
      <text x="230" y="456" textAnchor="middle" fill="currentColor" fontSize="11">the program</text>

      <text x="100" y="484" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">INTENTION TO TREAT</text>
      <text x="100" y="502" textAnchor="middle" fill="currentColor" fontSize="11">the question your</text>
      <text x="100" y="518" textAnchor="middle" fill="currentColor" fontSize="11">gym floor faces</text>

      <text x="230" y="484" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">PER PROTOCOL</text>
      <text x="230" y="502" textAnchor="middle" fill="currentColor" fontSize="11">a different question,</text>
      <text x="230" y="518" textAnchor="middle" fill="currentColor" fontSize="11">and a biased answer</text>

      {/* ── what each stage buys, down the right ─────────────────────────── */}
      <circle cx="344" cy="118" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="344" y="122" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      <text x="364" y="112" fill="currentColor" fontSize="11">Chance works because it is ignorant. It knows nothing about age, sleep,</text>
      <text x="364" y="128" fill="currentColor" fontSize="11">motivation or genetics, so on average it spreads all of them evenly across</text>
      <text x="364" y="144" fill="currentColor" fontSize="11">both groups, including the ones nobody thought to measure. Adjustment</text>
      <text x="364" y="160" fill="currentColor" fontSize="11">can only balance what somebody wrote down. Small trials still get unlucky.</text>

      <circle cx="344" cy="211" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="344" y="215" textAnchor="middle" fill="currentColor" fontSize="11">2</text>
      <text x="364" y="199" fill="currentColor" fontSize="11">The second arm sets the question. Against a waiting list almost any</text>
      <text x="364" y="215" fill="currentColor" fontSize="11">program wins, because training beats not training. Against the training</text>
      <text x="364" y="231" fill="currentColor" fontSize="11">she would do anyway, you find out whether the new thing adds anything.</text>

      <circle cx="344" cy="310" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="344" y="314" textAnchor="middle" fill="currentColor" fontSize="11">3</text>
      <text x="364" y="278" fill="currentColor" fontSize="11">Nobody can blind her to eight weeks of squatting, and no clever design</text>
      <text x="364" y="294" fill="currentColor" fontSize="11">fixes that. Assessors and analysts can be blinded, and that is where most</text>
      <text x="364" y="310" fill="currentColor" fontSize="11">of the loss is bought back. Self-rated pain from an unblinded participant</text>
      <text x="364" y="326" fill="currentColor" fontSize="11">is the soft spot. An ultrasound read by a technician who does not know</text>
      <text x="364" y="342" fill="currentColor" fontSize="11">her group is barely a problem at all.</text>

      <circle cx="344" cy="432" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="344" y="436" textAnchor="middle" fill="currentColor" fontSize="11">4</text>
      <text x="364" y="400" fill="currentColor" fontSize="11">Randomization protects the groups chance made, so counting everyone in</text>
      <text x="364" y="416" fill="currentColor" fontSize="11">the group they were assigned to is the only comparison it still protects.</text>
      <text x="364" y="432" fill="currentColor" fontSize="11">That is intention to treat, and it answers what happens when people are</text>
      <text x="364" y="448" fill="currentColor" fontSize="11">offered this program. Counting finishers only answers a different</text>
      <text x="364" y="464" fill="currentColor" fontSize="11">question, and it lets people sort themselves into the answer.</text>

      <line x1="45" y1="542" x2="835" y2="542" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <text x="440" y="566" textAnchor="middle" fill="currentColor" fontSize="11">
        A trial reporting only the finishers after heavy dropout has quietly turned back into an observational study.
      </text>
      <text x="440" y="590" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        Randomization buys a fair starting line. Everything after it has to be earned.
      </text>
    </svg>
  );
}
