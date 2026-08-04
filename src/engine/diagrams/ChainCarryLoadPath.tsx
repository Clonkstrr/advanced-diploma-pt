// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function ChainCarryLoadPath() {
  return (
    <svg
      role="img"
      viewBox="0 0 880 620"
      width="100%"
      aria-labelledby="clp-title"
      className="diagram"
    >
      <title id="clp-title">
        Load path of a one-handed carry: a kettlebell held on the right applies a continuous
        side-bending moment to the trunk that the muscles on the left resist without a rest phase,
        while hip abductor demand swaps sides with every step
      </title>
      <defs>
        <marker id="clp-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="440" y="24" textAnchor="middle" fill="currentColor" fontSize="13" letterSpacing="1.6">
        ONE LOAD, TWO DIFFERENT JOBS, NEITHER OF THEM IN THE MUSCLE&#8217;S NAME
      </text>
      <text x="440" y="44" textAnchor="middle" fill="currentColor" fontSize="11.5">
        a 24 kg kettlebell carried 40 m in the right hand, seen from behind
      </text>

      {/* ── left panel: the trunk load path ───────────────────────────── */}
      <rect x="16" y="58" width="430" height="382" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="231" y="80" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.2">
        THE TRUNK WORKS ON ONE SIDE ONLY
      </text>

      {/* figure */}
      <circle cx="210" cy="112" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="210" y1="127" x2="210" y2="252" stroke="currentColor" strokeWidth="2" />
      <line x1="172" y1="144" x2="248" y2="144" stroke="currentColor" strokeWidth="2" />
      <line x1="180" y1="252" x2="240" y2="252" stroke="currentColor" strokeWidth="2" />
      <line x1="188" y1="252" x2="188" y2="360" stroke="currentColor" strokeWidth="2" />
      <line x1="232" y1="252" x2="232" y2="360" stroke="currentColor" strokeWidth="2" />
      <line x1="174" y1="362" x2="200" y2="362" stroke="currentColor" strokeWidth="2" />
      <line x1="220" y1="362" x2="246" y2="362" stroke="currentColor" strokeWidth="2" />
      {/* loaded arm and bell */}
      <line x1="248" y1="144" x2="272" y2="236" stroke="currentColor" strokeWidth="2" />
      <line x1="272" y1="236" x2="272" y2="252" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="272" cy="268" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* free arm */}
      <line x1="172" y1="144" x2="152" y2="236" stroke="currentColor" strokeWidth="1.5" />

      {/* load line and spine line */}
      <line x1="272" y1="92" x2="272" y2="396" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 5" />
      <line x1="210" y1="96" x2="210" y2="300" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
      <text x="292" y="100" textAnchor="start" fill="currentColor" fontSize="11">load line</text>
      <text x="292" y="272" textAnchor="start" fill="currentColor" fontSize="11">24 kg</text>
      <line x1="288" y1="268" x2="288" y2="268" stroke="currentColor" strokeWidth="1" />

      {/* moment arm */}
      <line x1="210" y1="196" x2="272" y2="196" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      <text x="241" y="189" textAnchor="middle" fill="currentColor" fontSize="12" fontStyle="italic">d</text>
      <text x="292" y="200" textAnchor="start" fill="currentColor" fontSize="11">d = distance from</text>
      <text x="292" y="215" textAnchor="start" fill="currentColor" fontSize="11">the spine to the load</text>
      <text x="292" y="230" textAnchor="start" fill="currentColor" fontSize="11">weight × d = the moment</text>
      <text x="292" y="245" textAnchor="start" fill="currentColor" fontSize="11">bending her to the right</text>

      {/* left-side muscle labels */}
      <text x="148" y="166" textAnchor="end" fill="currentColor" fontSize="11">left erector spinae</text>
      <line x1="152" y1="163" x2="202" y2="176" stroke="currentColor" strokeWidth="1" />
      <text x="148" y="196" textAnchor="end" fill="currentColor" fontSize="11">left external and</text>
      <text x="148" y="211" textAnchor="end" fill="currentColor" fontSize="11">internal oblique</text>
      <line x1="152" y1="200" x2="202" y2="208" stroke="currentColor" strokeWidth="1" />
      <text x="148" y="242" textAnchor="end" fill="currentColor" fontSize="11">left quadratus</text>
      <text x="148" y="257" textAnchor="end" fill="currentColor" fontSize="11">lumborum</text>
      <line x1="152" y1="246" x2="202" y2="240" stroke="currentColor" strokeWidth="1" />

      <text x="231" y="396" textAnchor="middle" fill="currentColor" fontSize="11">
        Those three hold still for the whole 40 m. There is no rest phase:
      </text>
      <text x="231" y="412" textAnchor="middle" fill="currentColor" fontSize="11">
        the load never swaps sides, so the work never swaps sides either.
      </text>
      <text x="231" y="430" textAnchor="middle" fill="currentColor" fontSize="11">
        Nothing here is moving. Every one of them is a brake.
      </text>

      {/* ── right panel: the hip demand alternates ────────────────────── */}
      <rect x="458" y="58" width="406" height="382" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="661" y="80" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.2">
        THE HIP DEMAND SWAPS WITH EVERY STEP
      </text>

      {/* step A: right foot down */}
      <text x="546" y="106" textAnchor="middle" fill="currentColor" fontSize="11.5">right foot down</text>
      <line x1="506" y1="152" x2="586" y2="152" stroke="currentColor" strokeWidth="2" />
      <line x1="586" y1="152" x2="586" y2="252" stroke="currentColor" strokeWidth="2" />
      <line x1="572" y1="254" x2="600" y2="254" stroke="currentColor" strokeWidth="2" />
      <line x1="506" y1="152" x2="480" y2="222" stroke="currentColor" strokeWidth="1.5" />
      <line x1="592" y1="152" x2="606" y2="180" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="608" cy="192" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="578" y1="122" x2="578" y2="266" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="514" y="134" textAnchor="start" fill="currentColor" fontSize="11">weight line</text>
      <circle cx="586" cy="152" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="546" y="286" textAnchor="middle" fill="currentColor" fontSize="11">the load sits over the</text>
      <text x="546" y="302" textAnchor="middle" fill="currentColor" fontSize="11">stance hip, so the weight</text>
      <text x="546" y="318" textAnchor="middle" fill="currentColor" fontSize="11">line runs close to it</text>
      <text x="546" y="342" textAnchor="middle" fill="currentColor" fontSize="11.5">right abductor demand</text>
      <text x="546" y="358" textAnchor="middle" fill="currentColor" fontSize="11.5">FALLS</text>

      {/* divider */}
      <line x1="661" y1="96" x2="661" y2="424" stroke="currentColor" strokeWidth="1" strokeDasharray="4 5" />

      {/* step B: left foot down */}
      <text x="776" y="106" textAnchor="middle" fill="currentColor" fontSize="11.5">left foot down</text>
      <line x1="722" y1="152" x2="802" y2="152" stroke="currentColor" strokeWidth="2" />
      <line x1="722" y1="152" x2="722" y2="252" stroke="currentColor" strokeWidth="2" />
      <line x1="708" y1="254" x2="736" y2="254" stroke="currentColor" strokeWidth="2" />
      <line x1="802" y1="152" x2="828" y2="222" stroke="currentColor" strokeWidth="1.5" />
      <line x1="808" y1="152" x2="822" y2="180" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="824" cy="192" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="784" y1="122" x2="784" y2="266" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 5" />
      <circle cx="722" cy="152" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="722" y1="138" x2="784" y2="138" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      <text x="753" y="132" textAnchor="middle" fill="currentColor" fontSize="12" fontStyle="italic">a</text>
      <text x="776" y="286" textAnchor="middle" fill="currentColor" fontSize="11">the load is displaced away</text>
      <text x="776" y="302" textAnchor="middle" fill="currentColor" fontSize="11">from the stance hip, so arm</text>
      <text x="776" y="318" textAnchor="middle" fill="currentColor" fontSize="11">a is long</text>
      <text x="776" y="342" textAnchor="middle" fill="currentColor" fontSize="11.5">left abductor demand</text>
      <text x="776" y="358" textAnchor="middle" fill="currentColor" fontSize="11.5">RISES SHARPLY</text>

      <text x="661" y="396" textAnchor="middle" fill="currentColor" fontSize="11">
        Gluteus medius and minimus on the stance side hold the pelvis level.
      </text>
      <text x="661" y="412" textAnchor="middle" fill="currentColor" fontSize="11">
        Over 40 m the two hips do quite different amounts of work.
      </text>
      <text x="661" y="430" textAnchor="middle" fill="currentColor" fontSize="11">
        One exercise, a new set of role assignments every second.
      </text>

      {/* ── notes ─────────────────────────────────────────────────────── */}
      <line x1="16" y1="462" x2="864" y2="462" stroke="currentColor" strokeWidth="1" />
      <text x="24" y="490" fill="currentColor" fontSize="11.5">
        Rectus abdominis is doing nothing it is named for. Transversus abdominis cannot side-bend or turn the trunk at all: its fibres
      </text>
      <text x="24" y="508" fill="currentColor" fontSize="11.5">
        run straight across, so it adds stiffness rather than motion.
      </text>
      <text x="24" y="536" fill="currentColor" fontSize="11.5">
        The obliques meeting the side-bending moment are the same muscles an exercise chart files under &#8220;rotators&#8221;.
      </text>
      <text x="24" y="564" fill="currentColor" fontSize="11.5">
        Grip usually fails before the trunk does, which caps the trunk stimulus. Straps or a heavier bell change what the carry trains.
      </text>
      <text x="24" y="592" fill="currentColor" fontSize="11.5">
        The abdominal wall shares its tissue with forced breathing out, so the trunk fades at the far end of the carry, not the near end.
      </text>
    </svg>
  );
}
