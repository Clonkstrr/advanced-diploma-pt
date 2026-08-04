// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function BiasFourStories() {
  return (
    <svg
      role="img"
      viewBox="0 0 860 650"
      width="100%"
      aria-labelledby="bfs-title"
      className="diagram"
    >
      <title id="bfs-title">
        One correlation, four possible stories. At the top, the only thing the study actually saw:
        supplement use and better results moving together, drawn as a dashed line. Below it, four
        panels showing what could produce that line. Panel one, the supplement really causes the
        results. Panel two, reverse causation, where the results lead to the supplement use. Panel
        three, confounding, where health-conscious behaviour drives both. Panel four, chance.
        Circled numbers 1 to 4 mark the four notes listed beneath the figure.
      </title>
      <defs>
        <marker id="bfs-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="430" y="26" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.6">
        ONE CORRELATION, FOUR POSSIBLE STORIES
      </text>

      {/* ── what the study saw ────────────────────────────────────────── */}
      <rect x="150" y="46" width="200" height="48" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="250" y="76" textAnchor="middle" fill="currentColor" fontSize="12">Takes supplement X</text>

      <rect x="510" y="46" width="200" height="48" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="610" y="76" textAnchor="middle" fill="currentColor" fontSize="12">Gets better results</text>

      <line x1="354" y1="70" x2="506" y2="70" stroke="currentColor" strokeWidth="1.5"
        strokeDasharray="7 6" markerStart="url(#bfs-arrow)" markerEnd="url(#bfs-arrow)" />
      <text x="430" y="60" textAnchor="middle" fill="currentColor" fontSize="11">they move together</text>
      <text x="430" y="88" textAnchor="middle" fill="currentColor" fontSize="11">what the study saw</text>

      <text x="430" y="122" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        FOUR THINGS THAT COULD PRODUCE THAT LINE
      </text>

      {/* ── panel 1: X causes Y ───────────────────────────────────────── */}
      <rect x="20" y="140" width="400" height="222" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <circle cx="48" cy="168" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="48" y="172" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      <text x="230" y="172" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.2">
        X REALLY DOES CAUSE Y
      </text>

      <rect x="62" y="196" width="150" height="46" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="137" y="224" textAnchor="middle" fill="currentColor" fontSize="12">Takes supplement X</text>
      <rect x="252" y="196" width="150" height="46" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="327" y="224" textAnchor="middle" fill="currentColor" fontSize="12">Better results</text>
      <line x1="214" y1="219" x2="248" y2="219" stroke="currentColor" strokeWidth="2" markerEnd="url(#bfs-arrow)" />

      <text x="220" y="274" textAnchor="middle" fill="currentColor" fontSize="11">
        The supplement genuinely works.
      </text>
      <text x="220" y="292" textAnchor="middle" fill="currentColor" fontSize="11">
        Keep this one on the table: creatine
      </text>
      <text x="220" y="310" textAnchor="middle" fill="currentColor" fontSize="11">
        really does add a little strength,
      </text>
      <text x="220" y="328" textAnchor="middle" fill="currentColor" fontSize="11">
        and the trials show it.
      </text>

      {/* ── panel 2: reverse causation ────────────────────────────────── */}
      <rect x="440" y="140" width="400" height="222" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <circle cx="468" cy="168" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="468" y="172" textAnchor="middle" fill="currentColor" fontSize="11">2</text>
      <text x="650" y="172" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.2">
        Y CAUSES X: REVERSE CAUSATION
      </text>

      <rect x="482" y="196" width="150" height="46" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="557" y="224" textAnchor="middle" fill="currentColor" fontSize="12">Takes supplement X</text>
      <rect x="672" y="196" width="150" height="46" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="747" y="224" textAnchor="middle" fill="currentColor" fontSize="12">Better results</text>
      <line x1="668" y1="219" x2="636" y2="219" stroke="currentColor" strokeWidth="2" markerEnd="url(#bfs-arrow)" />

      <text x="640" y="274" textAnchor="middle" fill="currentColor" fontSize="11">
        Strong people choose to deadlift.
      </text>
      <text x="640" y="292" textAnchor="middle" fill="currentColor" fontSize="11">
        People who are already progressing
      </text>
      <text x="640" y="310" textAnchor="middle" fill="currentColor" fontSize="11">
        buy more supplements. Illness
      </text>
      <text x="640" y="328" textAnchor="middle" fill="currentColor" fontSize="11">
        produces long, broken sleep.
      </text>

      {/* ── panel 3: confounding ──────────────────────────────────────── */}
      <rect x="20" y="378" width="400" height="234" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <circle cx="48" cy="406" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="48" y="410" textAnchor="middle" fill="currentColor" fontSize="11">3</text>
      <text x="230" y="410" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.2">
        A THIRD THING CAUSES BOTH
      </text>

      <rect x="100" y="428" width="240" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="220" y="450" textAnchor="middle" fill="currentColor" fontSize="12">Health-conscious behaviour</text>
      <text x="220" y="468" textAnchor="middle" fill="currentColor" fontSize="11">trains, sleeps, eats, sees a doctor</text>

      <line x1="180" y1="480" x2="132" y2="516" stroke="currentColor" strokeWidth="2" markerEnd="url(#bfs-arrow)" />
      <line x1="260" y1="480" x2="308" y2="516" stroke="currentColor" strokeWidth="2" markerEnd="url(#bfs-arrow)" />

      <rect x="40" y="520" width="150" height="44" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="115" y="547" textAnchor="middle" fill="currentColor" fontSize="11">Takes supplement X</text>
      <rect x="250" y="520" width="150" height="44" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="325" y="547" textAnchor="middle" fill="currentColor" fontSize="11">Better results</text>

      <text x="220" y="580" textAnchor="middle" fill="currentColor" fontSize="11">
        Neither bottom box causes the other.
      </text>
      <text x="220" y="598" textAnchor="middle" fill="currentColor" fontSize="11">
        The box the study never measured does it all.
      </text>

      {/* ── panel 4: chance ───────────────────────────────────────────── */}
      <rect x="440" y="378" width="400" height="234" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <circle cx="468" cy="406" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="468" y="410" textAnchor="middle" fill="currentColor" fontSize="11">4</text>
      <text x="650" y="410" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.2">
        CHANCE, AND NOTHING MORE
      </text>

      <rect x="460" y="450" width="150" height="44" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="535" y="477" textAnchor="middle" fill="currentColor" fontSize="11">Takes supplement X</text>
      <rect x="670" y="450" width="150" height="44" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="745" y="477" textAnchor="middle" fill="currentColor" fontSize="11">Better results</text>

      <line x1="614" y1="472" x2="666" y2="472" stroke="currentColor" strokeWidth="1.2"
        strokeDasharray="4 4" opacity="0.5" />
      <line x1="632" y1="464" x2="648" y2="480" stroke="currentColor" strokeWidth="1.6" />
      <line x1="648" y1="464" x2="632" y2="480" stroke="currentColor" strokeWidth="1.6" />

      <text x="640" y="524" textAnchor="middle" fill="currentColor" fontSize="11">
        No link of any kind. Measure enough
      </text>
      <text x="640" y="542" textAnchor="middle" fill="currentColor" fontSize="11">
        things in a small enough group and
      </text>
      <text x="640" y="560" textAnchor="middle" fill="currentColor" fontSize="11">
        some of them line up by luck. The grey
      </text>
      <text x="640" y="578" textAnchor="middle" fill="currentColor" fontSize="11">
        T-shirt personal record lives here, and
      </text>
      <text x="640" y="596" textAnchor="middle" fill="currentColor" fontSize="11">
        so does the study that measured forty things.
      </text>

      <text x="430" y="638" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        The same two lines on a chart fit all four stories. Ruling out the other three is the work.
      </text>
    </svg>
  );
}
