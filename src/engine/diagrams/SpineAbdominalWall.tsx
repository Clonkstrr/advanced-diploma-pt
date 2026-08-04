// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function SpineAbdominalWall() {
  return (
    <svg
      role="img"
      viewBox="0 0 860 650"
      width="100%"
      aria-labelledby="saw-title"
      className="diagram"
    >
      <title id="saw-title">
        The abdominal wall by fibre direction. Left: a front view with external oblique fibres
        running down and toward the midline on one side, internal oblique running up and toward the
        midline on the other, transversus abdominis running horizontally, and rectus abdominis
        either side of the linea alba. Top right: the crossed pair that turns the trunk. Middle
        right: how the rectus sheath changes above and below the arcuate line. Bottom left: a
        diastasis shown as a widened midline seam rather than a torn muscle. Circled numbers 1 to 4
        mark the four notes listed beneath the figure.
      </title>
      <defs>
        <marker id="saw-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="430" y="30" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.6">
        FOUR SHEETS, FOUR FIBRE DIRECTIONS, FOUR DIFFERENT JOBS
      </text>

      <rect x="20" y="48" width="400" height="352" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <rect x="436" y="48" width="404" height="248" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <rect x="436" y="312" width="404" height="188" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <rect x="20" y="416" width="400" height="192" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />

      {/* ── PANEL A: the wall from the front ──────────────────────────── */}
      <text x="220" y="74" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        THE WALL FROM THE FRONT
      </text>

      <path d="M 232 96 L 288 118 L 294 292 L 270 326 L 250 340 L 214 340 L 194 326 L 170 292 L 176 118 Z"
        fill="none" stroke="currentColor" strokeWidth="1.6" />

      {/* rectus abdominis either side of the linea alba */}
      <rect x="214" y="124" width="14" height="206" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <rect x="236" y="124" width="14" height="206" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <line x1="232" y1="110" x2="232" y2="336" stroke="currentColor" strokeWidth="2.5" />
      <line x1="214" y1="170" x2="250" y2="170" stroke="currentColor" strokeWidth="1.3" />
      <line x1="214" y1="215" x2="250" y2="215" stroke="currentColor" strokeWidth="1.3" />
      <line x1="214" y1="260" x2="250" y2="260" stroke="currentColor" strokeWidth="1.3" />

      {/* external oblique: down and toward the midline */}
      <line x1="182" y1="144" x2="210" y2="170" stroke="currentColor" strokeWidth="1.2" />
      <line x1="178" y1="180" x2="212" y2="208" stroke="currentColor" strokeWidth="1.2" />
      <line x1="176" y1="216" x2="212" y2="246" stroke="currentColor" strokeWidth="1.2" />
      <line x1="174" y1="252" x2="212" y2="284" stroke="currentColor" strokeWidth="1.2" />

      {/* internal oblique: up and toward the midline */}
      <line x1="286" y1="180" x2="254" y2="146" stroke="currentColor" strokeWidth="1.2" />
      <line x1="288" y1="216" x2="252" y2="182" stroke="currentColor" strokeWidth="1.2" />
      <line x1="286" y1="252" x2="252" y2="218" stroke="currentColor" strokeWidth="1.2" />
      <line x1="282" y1="288" x2="252" y2="254" stroke="currentColor" strokeWidth="1.2" />

      {/* transversus abdominis: horizontal, both sides */}
      <line x1="176" y1="300" x2="212" y2="300" stroke="currentColor" strokeWidth="1.2" />
      <line x1="252" y1="300" x2="288" y2="300" stroke="currentColor" strokeWidth="1.2" />
      <line x1="180" y1="314" x2="212" y2="314" stroke="currentColor" strokeWidth="1.2" />
      <line x1="252" y1="314" x2="284" y2="314" stroke="currentColor" strokeWidth="1.2" />

      {/* callout anchor 1: fibre directions */}
      <circle cx="30" cy="150" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="30" y="154" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      {/* callout anchor 2: transversus abdominis */}
      <circle cx="32" cy="366" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="32" y="370" textAnchor="middle" fill="currentColor" fontSize="11">2</text>

      <text x="44" y="110" fill="currentColor" fontSize="11" fontWeight="bold">LINEA ALBA</text>
      <line x1="110" y1="106" x2="228" y2="118" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <text x="310" y="110" fill="currentColor" fontSize="11" fontWeight="bold">RECTUS ABDOMINIS</text>
      <line x1="306" y1="114" x2="252" y2="128" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <text x="44" y="150" fill="currentColor" fontSize="11" fontWeight="bold">EXTERNAL OBLIQUE</text>
      <text x="44" y="165" fill="currentColor" fontSize="11">fibres run down</text>
      <text x="44" y="180" fill="currentColor" fontSize="11">and toward the</text>
      <text x="44" y="195" fill="currentColor" fontSize="11">midline: hands</text>
      <text x="44" y="210" fill="currentColor" fontSize="11">into front pockets</text>
      <line x1="148" y1="168" x2="178" y2="158" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <text x="414" y="150" textAnchor="end" fill="currentColor" fontSize="11" fontWeight="bold">INTERNAL OBLIQUE</text>
      <text x="414" y="165" textAnchor="end" fill="currentColor" fontSize="11">fibres run up and</text>
      <text x="414" y="180" textAnchor="end" fill="currentColor" fontSize="11">toward the midline,</text>
      <text x="414" y="195" textAnchor="end" fill="currentColor" fontSize="11">crossing the sheet</text>
      <text x="414" y="210" textAnchor="end" fill="currentColor" fontSize="11">above it</text>
      <line x1="306" y1="168" x2="286" y2="158" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <text x="44" y="250" fill="currentColor" fontSize="11">three tendinous</text>
      <text x="44" y="265" fill="currentColor" fontSize="11">intersections in</text>
      <text x="44" y="280" fill="currentColor" fontSize="11">rectus abdominis</text>
      <text x="44" y="295" fill="currentColor" fontSize="11">make the blocks</text>
      <text x="44" y="310" fill="currentColor" fontSize="11">you see</text>
      <line x1="148" y1="272" x2="212" y2="262" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <text x="220" y="358" textAnchor="middle" fill="currentColor" fontSize="11">
        TRANSVERSUS ABDOMINIS: fibres run horizontally,
      </text>
      <text x="220" y="374" textAnchor="middle" fill="currentColor" fontSize="11">
        right around the waist. It narrows; it cannot turn you.
      </text>

      {/* ── PANEL B: the crossed pair ─────────────────────────────────── */}
      <text x="638" y="74" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        THE PAIR THAT TURNS YOU, SEEN FROM ABOVE
      </text>

      {/* callout anchor 3 sits with the sling */}
      <circle cx="452" cy="120" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="452" y="124" textAnchor="middle" fill="currentColor" fontSize="11">3</text>

      <ellipse cx="638" cy="182" rx="110" ry="62" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M 548 208 Q 580 148 638 122" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 638 122 Q 700 150 728 208" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 596 104 Q 638 90 680 104" fill="none" stroke="currentColor" strokeWidth="1.6"
        markerEnd="url(#saw-arrow)" />
      <text x="692" y="100" fill="currentColor" fontSize="11">turn to the left</text>

      <text x="638" y="152" textAnchor="middle" fill="currentColor" fontSize="11">front</text>
      <text x="638" y="226" textAnchor="middle" fill="currentColor" fontSize="11">back</text>

      <text x="452" y="176" fill="currentColor" fontSize="11">client’s</text>
      <text x="452" y="190" fill="currentColor" fontSize="11">RIGHT</text>
      <text x="824" y="176" textAnchor="end" fill="currentColor" fontSize="11">client’s</text>
      <text x="824" y="190" textAnchor="end" fill="currentColor" fontSize="11">LEFT</text>

      <text x="446" y="244" fill="currentColor" fontSize="11">RIGHT external oblique</text>
      <line x1="524" y1="238" x2="556" y2="214" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <text x="830" y="244" textAnchor="end" fill="currentColor" fontSize="11">LEFT internal oblique</text>
      <line x1="744" y1="238" x2="718" y2="214" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <text x="638" y="272" textAnchor="middle" fill="currentColor" fontSize="11">
        The two sheets cross, so one sheet on each side makes the pair.
      </text>
      <text x="638" y="288" textAnchor="middle" fill="currentColor" fontSize="11">
        Same crossed idea as the rings of the annulus.
      </text>

      {/* ── PANEL C: the rectus sheath ────────────────────────────────── */}
      <text x="638" y="338" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        THE RECTUS SHEATH CHANGES PARTWAY DOWN
      </text>

      {/* callout anchor 4: the arcuate line */}
      <circle cx="452" cy="344" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="452" y="348" textAnchor="middle" fill="currentColor" fontSize="11">4</text>

      <rect x="508" y="380" width="64" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="540" y="401" textAnchor="middle" fill="currentColor" fontSize="11">rectus</text>
      <line x1="484" y1="370" x2="596" y2="370" stroke="currentColor" strokeWidth="1.6" />
      <line x1="484" y1="375" x2="596" y2="375" stroke="currentColor" strokeWidth="1.6" />
      <line x1="484" y1="419" x2="596" y2="419" stroke="currentColor" strokeWidth="1.6" />
      <line x1="484" y1="424" x2="596" y2="424" stroke="currentColor" strokeWidth="1.6" />
      <text x="478" y="374" textAnchor="end" fill="currentColor" fontSize="11">front</text>
      <text x="478" y="424" textAnchor="end" fill="currentColor" fontSize="11">back</text>

      <rect x="704" y="380" width="64" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="736" y="401" textAnchor="middle" fill="currentColor" fontSize="11">rectus</text>
      <line x1="680" y1="366" x2="792" y2="366" stroke="currentColor" strokeWidth="1.6" />
      <line x1="680" y1="371" x2="792" y2="371" stroke="currentColor" strokeWidth="1.6" />
      <line x1="680" y1="376" x2="792" y2="376" stroke="currentColor" strokeWidth="1.6" />
      <line x1="680" y1="421" x2="792" y2="421" stroke="currentColor" strokeWidth="1"
        strokeDasharray="4 4" opacity="0.8" />
      <text x="674" y="372" textAnchor="end" fill="currentColor" fontSize="11">front</text>
      <text x="674" y="425" textAnchor="end" fill="currentColor" fontSize="11">back</text>

      <text x="540" y="450" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">
        ABOVE the arcuate line
      </text>
      <text x="540" y="466" textAnchor="middle" fill="currentColor" fontSize="11">
        a front wall and a back wall
      </text>
      <text x="736" y="450" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">
        BELOW the arcuate line
      </text>
      <text x="736" y="466" textAnchor="middle" fill="currentColor" fontSize="11">
        all three sheets pass in front
      </text>

      <text x="638" y="490" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        The muscle is the same. What wraps it is not.
      </text>

      {/* ── PANEL D: what a diastasis is ──────────────────────────────── */}
      <text x="220" y="442" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        WHAT A DIASTASIS IS
      </text>

      <rect x="98" y="470" width="22" height="96" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="134" y="470" width="22" height="96" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="127" y1="470" x2="127" y2="566" stroke="currentColor" strokeWidth="1"
        strokeDasharray="4 4" opacity="0.8" />

      <path d="M 262 470 L 284 470 C 272 500, 272 536, 284 566 L 262 566 Z"
        fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 358 470 L 336 470 C 348 500, 348 536, 336 566 L 358 566 Z"
        fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="310" y1="470" x2="310" y2="566" stroke="currentColor" strokeWidth="1"
        strokeDasharray="4 4" opacity="0.8" />

      <text x="130" y="584" textAnchor="middle" fill="currentColor" fontSize="11">typical midline seam</text>
      <text x="310" y="584" textAnchor="middle" fill="currentColor" fontSize="11">a wider, thinner seam</text>
      <text x="220" y="602" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">
        The seam stretches. The muscle is not torn.
      </text>

      <text x="430" y="634" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        Fibre direction is the whole story: it tells you what each sheet can and cannot do.
      </text>
    </svg>
  );
}
