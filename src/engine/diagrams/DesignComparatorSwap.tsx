// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function DesignComparatorSwap() {
  return (
    <svg
      role="img"
      viewBox="0 0 880 600"
      width="100%"
      aria-labelledby="dcs-title"
      className="diagram"
    >
      <title id="dcs-title">
        How the comparator decides the question. Across the top, the four slots of a PICO question:
        population, intervention, comparator and outcome, with the comparator slot marked as the one
        that changes everything. Below, the same population, the same intervention of low load
        training with cuffs, and the same outcome, set against three different comparators. Against
        no training at all the answer is close to guaranteed. Against the same light training without
        cuffs it answers the rehabilitation question. Against heavy training it answers the healthy
        client question. Circled numbers 1 to 4 mark the four notes listed beneath the figure.
      </title>

      <text x="440" y="24" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.6">
        ONE QUESTION, THREE COMPARATORS, THREE DIFFERENT ANSWERS
      </text>

      {/* ── the four slots ───────────────────────────────────────────────── */}
      <rect x="28" y="48" width="196" height="70" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="126" y="68" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">POPULATION</text>
      <text x="126" y="88" textAnchor="middle" fill="currentColor" fontSize="11">adults who cannot yet</text>
      <text x="126" y="104" textAnchor="middle" fill="currentColor" fontSize="11">tolerate heavy loads</text>

      <rect x="236" y="48" width="196" height="70" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="334" y="68" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">INTERVENTION</text>
      <text x="334" y="88" textAnchor="middle" fill="currentColor" fontSize="11">low-load training</text>
      <text x="334" y="104" textAnchor="middle" fill="currentColor" fontSize="11">with cuffs</text>

      <rect x="444" y="48" width="196" height="70" rx="8" fill="none" stroke="currentColor"
        strokeWidth="2.4" strokeDasharray="6 4" />
      <text x="542" y="68" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">COMPARATOR</text>
      <text x="542" y="88" textAnchor="middle" fill="currentColor" fontSize="11">the one slot that</text>
      <text x="542" y="104" textAnchor="middle" fill="currentColor" fontSize="11">decides the rest</text>

      <rect x="652" y="48" width="196" height="70" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="750" y="68" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">OUTCOME</text>
      <text x="750" y="88" textAnchor="middle" fill="currentColor" fontSize="11">quadriceps size and</text>
      <text x="750" y="104" textAnchor="middle" fill="currentColor" fontSize="11">strength at 8 weeks</text>

      <line x1="542" y1="118" x2="542" y2="127" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="542" cy="136" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="542" y="140" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      <text x="560" y="140" fill="currentColor" fontSize="11">Change this slot and you have a different study.</text>

      {/* ── column headings ──────────────────────────────────────────────── */}
      <text x="148" y="178" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.2">
        COMPARATOR CHOSEN
      </text>
      <text x="460" y="178" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.2">
        THE QUESTION IT ACTUALLY ASKS
      </text>
      <text x="766" y="178" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.2">
        WHO THE ANSWER IS FOR
      </text>

      {/* ── row A: no training ───────────────────────────────────────────── */}
      <rect x="44" y="196" width="208" height="92" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="148" y="232" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">NOTHING AT ALL</text>
      <text x="148" y="254" textAnchor="middle" fill="currentColor" fontSize="11">no training, or a</text>
      <text x="148" y="270" textAnchor="middle" fill="currentColor" fontSize="11">waiting list</text>

      <text x="272" y="226" fill="currentColor" fontSize="11">Does doing this beat doing nothing at all?</text>
      <text x="272" y="248" fill="currentColor" fontSize="11">Training beats not training, so a win here is</text>
      <text x="272" y="266" fill="currentColor" fontSize="11">close to guaranteed before anyone enrols.</text>

      <text x="666" y="238" fill="currentColor" fontSize="11">Almost nobody. You</text>
      <text x="666" y="256" fill="currentColor" fontSize="11">knew that already.</text>

      <circle cx="16" cy="242" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="16" y="246" textAnchor="middle" fill="currentColor" fontSize="11">2</text>
      <line x1="26" y1="242" x2="42" y2="242" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      {/* ── row B: the same light training ───────────────────────────────── */}
      <rect x="44" y="308" width="208" height="92" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="148" y="346" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">THE SAME LIGHT WORK</text>
      <text x="148" y="368" textAnchor="middle" fill="currentColor" fontSize="11">identical sets and reps,</text>
      <text x="148" y="384" textAnchor="middle" fill="currentColor" fontSize="11">no cuffs</text>

      <text x="272" y="340" fill="currentColor" fontSize="11">Do the cuffs themselves add anything on top</text>
      <text x="272" y="358" fill="currentColor" fontSize="11">of the light work she is already doing?</text>

      <text x="666" y="330" fill="currentColor" fontSize="11">The rehabilitation</text>
      <text x="666" y="348" fill="currentColor" fontSize="11">question. This is the</text>
      <text x="666" y="366" fill="currentColor" fontSize="11">one that tells you</text>
      <text x="666" y="384" fill="currentColor" fontSize="11">whether to buy cuffs.</text>

      {/* ── row C: heavy training ────────────────────────────────────────── */}
      <rect x="44" y="420" width="208" height="92" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="148" y="458" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">HEAVY TRAINING</text>
      <text x="148" y="480" textAnchor="middle" fill="currentColor" fontSize="11">what she would do if</text>
      <text x="148" y="496" textAnchor="middle" fill="currentColor" fontSize="11">the knee allowed it</text>

      <text x="272" y="452" fill="currentColor" fontSize="11">Does light training with cuffs get close to</text>
      <text x="272" y="470" fill="currentColor" fontSize="11">what heavy lifting delivers?</text>

      <text x="666" y="442" fill="currentColor" fontSize="11">The healthy-client</text>
      <text x="666" y="460" fill="currentColor" fontSize="11">question. A different</text>
      <text x="666" y="478" fill="currentColor" fontSize="11">question, and a much</text>
      <text x="666" y="496" fill="currentColor" fontSize="11">harder bar to clear.</text>

      {/* bracket tying rows B and C together */}
      <path d="M 36 316 L 28 316 L 28 504 L 36 504" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="14" cy="410" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="14" y="414" textAnchor="middle" fill="currentColor" fontSize="11">3</text>

      {/* ── the closing line ─────────────────────────────────────────────── */}
      <line x1="28" y1="528" x2="852" y2="528" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="40" cy="552" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="40" y="556" textAnchor="middle" fill="currentColor" fontSize="11">4</text>
      <text x="60" y="556" fill="currentColor" fontSize="11">
        Same people, same intervention, same outcome. Read the comparator before you read the effect size.
      </text>
      <text x="440" y="582" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        Compared with what? is the first question you ask, not the last.
      </text>
    </svg>
  );
}
