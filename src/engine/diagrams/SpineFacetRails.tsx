// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function SpineFacetRails() {
  return (
    <svg
      role="img"
      viewBox="0 0 840 590"
      width="100%"
      aria-labelledby="sfr-title"
      className="diagram"
    >
      <title id="sfr-title">
        Facet joint angle by region, and the motion each region supplies. Cervical facet surfaces
        sit about 45 degrees from horizontal, thoracic about 60 degrees and close to the frontal
        plane, lumbar close to vertical and in the sagittal plane. Bar charts on the right compare
        the axial rotation and the forward bend available in each region. Circled numbers 1 to 4
        mark the four notes listed beneath the figure.
      </title>

      <text x="420" y="30" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.6">
        THE RAIL AT THE BACK OF EACH SEGMENT DECIDES WHAT THAT SEGMENT DOES
      </text>

      <rect x="20" y="48" width="400" height="420" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <rect x="436" y="48" width="384" height="420" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />

      {/* ── PANEL A: facet plane by region ────────────────────────────── */}
      <text x="220" y="74" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        FACET PLANE BY REGION
      </text>

      {/* cervical blocks */}
      <rect x="44" y="96" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="44" y="113" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="44" y="130" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="44" y="147" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      {/* thoracic blocks */}
      <rect x="44" y="186" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="44" y="203" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="44" y="220" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="44" y="237" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="44" y="254" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      {/* lumbar blocks */}
      <rect x="44" y="290" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="44" y="307" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="44" y="324" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="44" y="341" width="32" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      {/* sacrum */}
      <path d="M 44 368 L 76 368 L 60 400 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="86" y="392" fill="currentColor" fontSize="11">sacrum</text>

      {/* connectors from the column to each facet tile */}
      <line x1="78" y1="130" x2="110" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="78" y1="220" x2="85" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="78" y1="320" x2="85" y2="320" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      {/* cervical tile: rail 45° from horizontal */}
      <circle cx="140" cy="130" r="28" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="116" y1="130" x2="164" y2="130" stroke="currentColor" strokeWidth="1"
        strokeDasharray="3 4" opacity="0.7" />
      <path d="M 160 130 A 20 20 0 0 0 154.1 115.9" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <line x1="124.4" y1="145.6" x2="155.6" y2="114.4" stroke="currentColor" strokeWidth="3" />

      {/* thoracic tile: rail 60° from horizontal */}
      <circle cx="140" cy="220" r="28" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="116" y1="220" x2="164" y2="220" stroke="currentColor" strokeWidth="1"
        strokeDasharray="3 4" opacity="0.7" />
      <path d="M 160 220 A 20 20 0 0 0 150 202.7" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <line x1="129" y1="239.1" x2="151" y2="200.9" stroke="currentColor" strokeWidth="3" />

      {/* lumbar tile: rail vertical */}
      <circle cx="140" cy="320" r="28" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="116" y1="320" x2="164" y2="320" stroke="currentColor" strokeWidth="1"
        strokeDasharray="3 4" opacity="0.7" />
      <path d="M 160 320 A 20 20 0 0 0 140 300" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <line x1="140" y1="342" x2="140" y2="298" stroke="currentColor" strokeWidth="3" />

      <text x="140" y="412" textAnchor="middle" fill="currentColor" fontSize="11">
        dashed line = horizontal
      </text>

      {/* callout anchor 1: the lumbar rail */}
      <circle cx="96" cy="320" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="96" y="324" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      {/* callout anchor 2: the thoracic rail */}
      <circle cx="96" cy="220" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="96" y="224" textAnchor="middle" fill="currentColor" fontSize="11">2</text>

      <text x="182" y="110" fill="currentColor" fontSize="11.5" fontWeight="bold">CERVICAL</text>
      <text x="182" y="126" fill="currentColor" fontSize="11">rail about 45° from</text>
      <text x="182" y="141" fill="currentColor" fontSize="11">horizontal, facing</text>
      <text x="182" y="156" fill="currentColor" fontSize="11">mostly front to back</text>

      <text x="182" y="200" fill="currentColor" fontSize="11.5" fontWeight="bold">THORACIC</text>
      <text x="182" y="216" fill="currentColor" fontSize="11">rail about 60° from</text>
      <text x="182" y="231" fill="currentColor" fontSize="11">horizontal, near the</text>
      <text x="182" y="246" fill="currentColor" fontSize="11">frontal plane: turning</text>
      <text x="182" y="261" fill="currentColor" fontSize="11">slides along it</text>

      <text x="182" y="300" fill="currentColor" fontSize="11.5" fontWeight="bold">LUMBAR</text>
      <text x="182" y="316" fill="currentColor" fontSize="11">rail near vertical, in</text>
      <text x="182" y="331" fill="currentColor" fontSize="11">the sagittal plane:</text>
      <text x="182" y="346" fill="currentColor" fontSize="11">bending slides along</text>
      <text x="182" y="361" fill="currentColor" fontSize="11">it, turning jams bone</text>
      <text x="182" y="376" fill="currentColor" fontSize="11">against bone</text>

      <text x="220" y="430" textAnchor="middle" fill="currentColor" fontSize="11">
        Every level has the same three joints: a disc in front,
      </text>
      <text x="220" y="446" textAnchor="middle" fill="currentColor" fontSize="11">
        two facet joints behind. Only the facet angle changes.
      </text>

      {/* ── PANEL B: what each region supplies ────────────────────────── */}
      <text x="628" y="74" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        WHAT EACH REGION SUPPLIES
      </text>

      {/* callout anchor 3: the rotation budget */}
      <circle cx="450" cy="124" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="450" y="128" textAnchor="middle" fill="currentColor" fontSize="11">3</text>

      <text x="470" y="104" fill="currentColor" fontSize="11.5" fontWeight="bold">
        AXIAL ROTATION, to one side
      </text>
      <text x="470" y="129" fill="currentColor" fontSize="11">cervical</text>
      <rect x="584" y="116" width="140" height="15" fill="currentColor" opacity="0.75" />
      <text x="732" y="129" fill="currentColor" fontSize="11">about 70°</text>
      <text x="470" y="161" fill="currentColor" fontSize="11">thoracic</text>
      <rect x="584" y="148" width="70" height="15" fill="currentColor" opacity="0.75" />
      <text x="662" y="161" fill="currentColor" fontSize="11">about 35°</text>
      <text x="470" y="193" fill="currentColor" fontSize="11">lumbar</text>
      <rect x="584" y="180" width="24" height="15" fill="currentColor" opacity="0.75" />
      <text x="616" y="193" fill="currentColor" fontSize="11">10° to 13°</text>

      <text x="470" y="219" fill="currentColor" fontSize="11">
        About half of the neck’s rotation happens between C1 and C2.
      </text>
      <text x="470" y="235" fill="currentColor" fontSize="11">
        The thorax gives 2° to 9° a level across twelve levels.
      </text>
      <text x="470" y="251" fill="currentColor" fontSize="11">
        A lumbar level jams at about 2°.
      </text>

      {/* callout anchor 4: the flexion budget */}
      <circle cx="450" cy="306" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="450" y="310" textAnchor="middle" fill="currentColor" fontSize="11">4</text>

      <text x="470" y="286" fill="currentColor" fontSize="11.5" fontWeight="bold">
        FORWARD BEND, flexion
      </text>
      <text x="470" y="311" fill="currentColor" fontSize="11">cervical</text>
      <rect x="584" y="298" width="90" height="15" fill="currentColor" opacity="0.75" />
      <text x="682" y="311" fill="currentColor" fontSize="11">about 45°</text>
      <text x="470" y="343" fill="currentColor" fontSize="11">thoracic</text>
      <rect x="584" y="330" width="70" height="15" fill="currentColor" opacity="0.75" />
      <text x="662" y="343" fill="currentColor" fontSize="11">about 35°</text>
      <text x="470" y="375" fill="currentColor" fontSize="11">lumbar</text>
      <rect x="584" y="362" width="110" height="15" fill="currentColor" opacity="0.75" />
      <text x="702" y="375" fill="currentColor" fontSize="11">about 55°</text>

      <text x="470" y="401" fill="currentColor" fontSize="11">
        Most lumbar flexion sits in the bottom two segments,
      </text>
      <text x="470" y="417" fill="currentColor" fontSize="11">
        at L4 to L5 and L5 to S1.
      </text>

      <text x="628" y="443" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        Averages from small samples. Individual spread is wide.
      </text>
      <text x="628" y="458" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        Read the ordering, not the numbers.
      </text>

      {/* ── closing line ──────────────────────────────────────────────── */}
      <text x="420" y="500" textAnchor="middle" fill="currentColor" fontSize="12">
        Rotation gets coached to the mid-back because that is where the joint surfaces allow it.
      </text>
      <text x="420" y="524" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        The disc in front will let a segment do a little of everything.
      </text>
      <text x="420" y="540" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        The facets behind decide what it actually does.
      </text>
    </svg>
  );
}
