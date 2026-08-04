// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function SpineDiscDay() {
  return (
    <svg
      role="img"
      viewBox="0 0 860 660"
      width="100%"
      aria-labelledby="sdd-title"
      className="diagram"
    >
      <title id="sdd-title">
        What a disc is and what a day does to it. Left: a cut through a disc showing the water
        holding nucleus, the alternating collagen rings of the annulus and the cartilage endplates.
        Right: measured pressures in a living L4 to L5 disc, from lying down at 0.1 megapascals to
        lifting twenty kilograms with a rounded back at 2.3. Below: disc height falls sharply in
        the first hours upright and returns overnight. Circled numbers 1 to 4 mark the four notes
        listed beneath the figure.
      </title>
      <defs>
        <marker id="sdd-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="430" y="30" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.6">
        A PRESSURISED BAG, AND WHAT A DAY DOES TO IT
      </text>

      <rect x="20" y="48" width="330" height="362" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <rect x="366" y="48" width="474" height="362" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <rect x="20" y="426" width="820" height="222" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />

      {/* ── PANEL A: inside a disc ────────────────────────────────────── */}
      <text x="185" y="74" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        INSIDE A DISC, CUT THROUGH
      </text>

      <rect x="56" y="96" width="180" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="146" y="116" textAnchor="middle" fill="currentColor" fontSize="11">VERTEBRAL BODY</text>
      <line x1="56" y1="130" x2="236" y2="130" stroke="currentColor" strokeWidth="3" />

      <rect x="56" y="300" width="180" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="146" y="320" textAnchor="middle" fill="currentColor" fontSize="11">VERTEBRAL BODY</text>
      <line x1="56" y1="298" x2="236" y2="298" stroke="currentColor" strokeWidth="3" />

      {/* annulus: nested rings */}
      <rect x="56" y="134" width="180" height="160" rx="18" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="66" y="140" width="160" height="148" rx="16" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="76" y="146" width="140" height="136" rx="14" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="86" y="152" width="120" height="124" rx="12" fill="none" stroke="currentColor" strokeWidth="1.4" />

      {/* alternating fibre direction, shown on two adjacent rings */}
      <line x1="57" y1="180" x2="65" y2="170" stroke="currentColor" strokeWidth="1" />
      <line x1="57" y1="212" x2="65" y2="202" stroke="currentColor" strokeWidth="1" />
      <line x1="57" y1="244" x2="65" y2="234" stroke="currentColor" strokeWidth="1" />
      <line x1="67" y1="170" x2="75" y2="180" stroke="currentColor" strokeWidth="1" />
      <line x1="67" y1="202" x2="75" y2="212" stroke="currentColor" strokeWidth="1" />
      <line x1="67" y1="234" x2="75" y2="244" stroke="currentColor" strokeWidth="1" />

      {/* nucleus */}
      <ellipse cx="146" cy="214" rx="44" ry="48" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="146" y="210" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">NUCLEUS</text>
      <text x="146" y="226" textAnchor="middle" fill="currentColor" fontSize="11">gel, holds water</text>

      {/* pressure pushing outward in every direction */}
      <line x1="176" y1="184" x2="206" y2="158" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#sdd-arrow)" />
      <line x1="176" y1="244" x2="206" y2="270" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#sdd-arrow)" />
      <line x1="116" y1="184" x2="86" y2="158" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#sdd-arrow)" />
      <line x1="116" y1="244" x2="86" y2="270" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#sdd-arrow)" />

      {/* callout anchor 1: the rings */}
      <circle cx="36" cy="214" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="36" y="218" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      <line x1="46" y1="214" x2="55" y2="214" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      {/* callout anchor 2: the endplate */}
      <circle cx="36" cy="130" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="36" y="134" textAnchor="middle" fill="currentColor" fontSize="11">2</text>
      <line x1="46" y1="130" x2="55" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <line x1="238" y1="130" x2="250" y2="138" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <text x="252" y="142" fill="currentColor" fontSize="11" fontWeight="bold">ENDPLATE</text>
      <text x="252" y="157" fill="currentColor" fontSize="11">the only way</text>
      <text x="252" y="172" fill="currentColor" fontSize="11">nutrients get in</text>

      <line x1="238" y1="214" x2="250" y2="210" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <text x="252" y="214" fill="currentColor" fontSize="11" fontWeight="bold">ANNULUS</text>
      <text x="252" y="229" fill="currentColor" fontSize="11">rings of collagen,</text>
      <text x="252" y="244" fill="currentColor" fontSize="11">each angled the</text>
      <text x="252" y="259" fill="currentColor" fontSize="11">opposite way to</text>
      <text x="252" y="274" fill="currentColor" fontSize="11">its neighbour</text>

      <text x="185" y="356" textAnchor="middle" fill="currentColor" fontSize="11">
        Press down and the gel pressurises.
      </text>
      <text x="185" y="372" textAnchor="middle" fill="currentColor" fontSize="11">
        The rings take that as tension around a barrel;
      </text>
      <text x="185" y="388" textAnchor="middle" fill="currentColor" fontSize="11">
        the endplates take it as a push up and a push down.
      </text>

      {/* ── PANEL B: measured pressures ───────────────────────────────── */}
      <text x="603" y="74" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        PRESSURE IN A LIVING L4 TO L5 DISC (MPa)
      </text>

      {/* callout anchor 3: the pressure ordering */}
      <circle cx="378" cy="112" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="378" y="116" textAnchor="middle" fill="currentColor" fontSize="11">3</text>

      <text x="396" y="117" fill="currentColor" fontSize="11">lying down</text>
      <rect x="576" y="104" width="8" height="17" fill="currentColor" opacity="0.75" />
      <text x="592" y="117" fill="currentColor" fontSize="11">0.1</text>

      <text x="396" y="153" fill="currentColor" fontSize="11">sitting relaxed</text>
      <rect x="576" y="140" width="39" height="17" fill="currentColor" opacity="0.75" />
      <text x="623" y="153" fill="currentColor" fontSize="11">0.46</text>

      <text x="396" y="189" fill="currentColor" fontSize="11">standing relaxed</text>
      <rect x="576" y="176" width="42" height="17" fill="currentColor" opacity="0.75" />
      <text x="626" y="189" fill="currentColor" fontSize="11">0.5</text>

      <text x="396" y="225" fill="currentColor" fontSize="11">standing, bent forward</text>
      <rect x="576" y="212" width="92" height="17" fill="currentColor" opacity="0.75" />
      <text x="676" y="225" fill="currentColor" fontSize="11">1.1</text>

      <text x="396" y="261" fill="currentColor" fontSize="11">lifting 20 kg, knees bent</text>
      <rect x="576" y="248" width="143" height="17" fill="currentColor" opacity="0.75" />
      <text x="727" y="261" fill="currentColor" fontSize="11">1.7</text>

      <text x="396" y="297" fill="currentColor" fontSize="11">lifting 20 kg, rounded back</text>
      <rect x="576" y="284" width="193" height="17" fill="currentColor" opacity="0.75" />
      <text x="777" y="297" fill="currentColor" fontSize="11">2.3</text>

      <line x1="576" y1="312" x2="780" y2="312" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="576" y1="312" x2="576" y2="318" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="660" y1="312" x2="660" y2="318" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="744" y1="312" x2="744" y2="318" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <text x="576" y="330" textAnchor="middle" fill="currentColor" fontSize="11">0</text>
      <text x="660" y="330" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      <text x="744" y="330" textAnchor="middle" fill="currentColor" fontSize="11">2</text>

      <text x="396" y="358" fill="currentColor" fontSize="11">
        Sitting relaxed lands close to standing, not far above it.
      </text>
      <text x="396" y="376" fill="currentColor" fontSize="11">
        The gap between two lifting styles is real. The gap between
      </text>
      <text x="396" y="394" fill="currentColor" fontSize="11">
        lifting nothing and lifting something is much bigger.
      </text>

      {/* ── PANEL C: the day ──────────────────────────────────────────── */}
      <text x="430" y="452" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        WHAT A DAY DOES TO DISC HEIGHT
      </text>

      {/* callout anchor 4: the morning window */}
      <circle cx="108" cy="466" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="108" y="470" textAnchor="middle" fill="currentColor" fontSize="11">4</text>

      <line x1="90" y1="470" x2="90" y2="596" stroke="currentColor" strokeWidth="1.2" />
      <line x1="90" y1="596" x2="800" y2="596" stroke="currentColor" strokeWidth="1.2" />
      <text x="84" y="482" textAnchor="end" fill="currentColor" fontSize="11">taller</text>
      <text x="84" y="592" textAnchor="end" fill="currentColor" fontSize="11">shorter</text>

      <path
        d="M 110 486 C 170 520, 210 548, 300 558 C 400 568, 480 574, 560 580
           C 610 583, 640 580, 660 570 C 700 548, 740 505, 790 488"
        fill="none" stroke="currentColor" strokeWidth="2.5" />

      <line x1="110" y1="596" x2="110" y2="602" stroke="currentColor" strokeWidth="1" />
      <line x1="240" y1="596" x2="240" y2="602" stroke="currentColor" strokeWidth="1" />
      <line x1="370" y1="596" x2="370" y2="602" stroke="currentColor" strokeWidth="1" />
      <line x1="500" y1="596" x2="500" y2="602" stroke="currentColor" strokeWidth="1" />
      <line x1="630" y1="596" x2="630" y2="602" stroke="currentColor" strokeWidth="1" />
      <line x1="790" y1="596" x2="790" y2="602" stroke="currentColor" strokeWidth="1" />
      <text x="110" y="616" textAnchor="middle" fill="currentColor" fontSize="11">6 a.m. up</text>
      <text x="240" y="616" textAnchor="middle" fill="currentColor" fontSize="11">9 a.m.</text>
      <text x="370" y="616" textAnchor="middle" fill="currentColor" fontSize="11">midday</text>
      <text x="500" y="616" textAnchor="middle" fill="currentColor" fontSize="11">6 p.m.</text>
      <text x="630" y="616" textAnchor="middle" fill="currentColor" fontSize="11">10 p.m. lying down</text>
      <text x="790" y="616" textAnchor="middle" fill="currentColor" fontSize="11">6 a.m.</text>

      <text x="180" y="486" fill="currentColor" fontSize="11">
        Morning: the disc is swollen and stiffer. The spine
      </text>
      <text x="180" y="501" fill="currentColor" fontSize="11">
        bends a few degrees further into flexion, and bending
      </text>
      <text x="180" y="516" fill="currentColor" fontSize="11">
        stresses on the disc run several times higher.
      </text>

      <text x="440" y="540" fill="currentColor" fontSize="11">
        About 1.5 to 2 cm of height lost across the day,
      </text>
      <text x="440" y="555" fill="currentColor" fontSize="11">
        most of it in the first few hours upright.
      </text>

      <text x="640" y="474" fill="currentColor" fontSize="11">
        Overnight the height comes back.
      </text>

      <text x="430" y="638" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        A modest scheduling preference, not a safety rule.
      </text>
    </svg>
  );
}
