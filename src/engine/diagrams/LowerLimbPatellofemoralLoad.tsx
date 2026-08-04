// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function LowerLimbPatellofemoralLoad() {
  return (
    <svg
      role="img"
      viewBox="0 0 900 604"
      width="100%"
      aria-labelledby="llpf-title"
      className="diagram"
    >
      <title id="llpf-title">
        Patellofemoral loading through knee flexion: the contact band migrates from the inferior
        pole toward the superior pole and the contact area grows, so joint stress does not follow
        joint force; loaded open-chain knee extension near full extension pairs the smallest
        contact area with the largest external moment
      </title>

      <defs>
        <marker id="llpf-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="450" y="26" textAnchor="middle" fill="currentColor" fontSize="13.5" fontWeight="bold" letterSpacing="1.5">
        WHY KNEE ANGLE CHANGES WHAT SHE FEELS
      </text>
      <text x="450" y="44" textAnchor="middle" fill="currentColor" fontSize="10.5" fontStyle="italic">
        kneecap contact, joint force and joint stress through the range
      </text>

      {/* ── four knee angles: contact band on the back of the kneecap ── */}
      {/* 20 degrees */}
      <line x1="106" y1="88" x2="106" y2="172" stroke="currentColor" strokeWidth="1.6" />
      <text x="88" y="84" textAnchor="middle" fill="currentColor" fontSize="9">femur</text>
      <line x1="130" y1="78" x2="130" y2="96" stroke="currentColor" strokeWidth="2.5" />
      <rect x="116" y="96" width="28" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="116" y1="132" x2="116" y2="144" stroke="currentColor" strokeWidth="6" />
      <line x1="130" y1="146" x2="130" y2="168" stroke="currentColor" strokeWidth="2.5" />
      <text x="150" y="102" fill="currentColor" fontSize="9">superior pole</text>
      <text x="150" y="144" fill="currentColor" fontSize="9">inferior pole</text>
      <text x="130" y="190" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">20°</text>
      <text x="130" y="210" textAnchor="middle" fill="currentColor" fontSize="9.5">a small band at the</text>
      <text x="130" y="222" textAnchor="middle" fill="currentColor" fontSize="9.5">bottom tip touches</text>

      {/* 45 degrees */}
      <line x1="296" y1="88" x2="296" y2="172" stroke="currentColor" strokeWidth="1.6" />
      <line x1="320" y1="78" x2="320" y2="96" stroke="currentColor" strokeWidth="2.5" />
      <rect x="306" y="96" width="28" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="306" y1="118" x2="306" y2="140" stroke="currentColor" strokeWidth="6" />
      <line x1="320" y1="146" x2="320" y2="168" stroke="currentColor" strokeWidth="2.5" />
      <text x="320" y="190" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">45°</text>
      <text x="320" y="210" textAnchor="middle" fill="currentColor" fontSize="9.5">the band has moved</text>
      <text x="320" y="222" textAnchor="middle" fill="currentColor" fontSize="9.5">up and grown</text>

      {/* 90 degrees */}
      <line x1="486" y1="88" x2="486" y2="172" stroke="currentColor" strokeWidth="1.6" />
      <line x1="510" y1="78" x2="510" y2="96" stroke="currentColor" strokeWidth="2.5" />
      <rect x="496" y="96" width="28" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="496" y1="102" x2="496" y2="132" stroke="currentColor" strokeWidth="6" />
      <line x1="510" y1="146" x2="510" y2="168" stroke="currentColor" strokeWidth="2.5" />
      <text x="510" y="190" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">90°</text>
      <text x="510" y="210" textAnchor="middle" fill="currentColor" fontSize="9.5">a large patch, so the</text>
      <text x="510" y="222" textAnchor="middle" fill="currentColor" fontSize="9.5">load is spread wide</text>

      {/* 120 degrees */}
      <line x1="676" y1="72" x2="676" y2="172" stroke="currentColor" strokeWidth="1.6" />
      <line x1="700" y1="70" x2="700" y2="96" stroke="currentColor" strokeWidth="2.5" />
      <line x1="686" y1="74" x2="686" y2="92" stroke="currentColor" strokeWidth="6" />
      <rect x="686" y="96" width="28" height="50" rx="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="686" y1="98" x2="686" y2="128" stroke="currentColor" strokeWidth="6" />
      <line x1="700" y1="146" x2="700" y2="168" stroke="currentColor" strokeWidth="2.5" />
      <text x="722" y="80" fill="currentColor" fontSize="9">quadriceps tendon</text>
      <text x="722" y="92" fill="currentColor" fontSize="9">now touches too</text>
      <text x="700" y="190" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">120°</text>
      <text x="700" y="210" textAnchor="middle" fill="currentColor" fontSize="9.5">the tendon shares</text>
      <text x="700" y="222" textAnchor="middle" fill="currentColor" fontSize="9.5">the load with bone</text>

      <line x1="80" y1="244" x2="820" y2="244" stroke="currentColor" strokeWidth="1" strokeDasharray="3 7" />

      {/* ── the three curves ── */}
      <text x="100" y="280" fill="currentColor" fontSize="10.5">relative size (schematic)</text>
      <line x1="100" y1="290" x2="100" y2="500" stroke="currentColor" strokeWidth="1.4" />
      <line x1="100" y1="500" x2="800" y2="500" stroke="currentColor" strokeWidth="1.4" />

      <line x1="275" y1="500" x2="275" y2="506" stroke="currentColor" strokeWidth="1" />
      <line x1="450" y1="500" x2="450" y2="506" stroke="currentColor" strokeWidth="1" />
      <line x1="625" y1="500" x2="625" y2="506" stroke="currentColor" strokeWidth="1" />
      <line x1="800" y1="500" x2="800" y2="506" stroke="currentColor" strokeWidth="1" />
      <text x="100" y="520" textAnchor="middle" fill="currentColor" fontSize="10">0°</text>
      <text x="275" y="520" textAnchor="middle" fill="currentColor" fontSize="10">30°</text>
      <text x="450" y="520" textAnchor="middle" fill="currentColor" fontSize="10">60°</text>
      <text x="625" y="520" textAnchor="middle" fill="currentColor" fontSize="10">90°</text>
      <text x="800" y="520" textAnchor="middle" fill="currentColor" fontSize="10">120°</text>
      <text x="450" y="540" textAnchor="middle" fill="currentColor" fontSize="10.5">knee bend</text>

      <polyline points="100,490 275,455 450,398 625,342 800,296" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <text x="806" y="296" fill="currentColor" fontSize="10.5">joint force</text>

      <polyline points="100,470 275,410 450,360 625,335 800,325" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="806" y="325" fill="currentColor" fontSize="10.5">contact area</text>

      <polyline points="100,452 275,428 450,412 625,404 800,408" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeDasharray="8 5" />
      <text x="806" y="404" fill="currentColor" fontSize="10.5">stress</text>
      <text x="806" y="418" fill="currentColor" fontSize="9.5">(force ÷ area)</text>

      <polyline points="100,318 190,336 300,378 450,428 560,452 625,462" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeDasharray="2 4" />
      <circle cx="100" cy="318" r="4" fill="currentColor" />
      <text x="112" y="302" fill="currentColor" fontSize="10">highest stress sits near full extension</text>
      <line x1="640" y1="470" x2="666" y2="474" stroke="currentColor" strokeWidth="1" markerStart="url(#llpf-arrow)" />
      <text x="672" y="478" fill="currentColor" fontSize="10">open chain, loaded knee extension</text>

      {/* ── the reading ── */}
      <text x="100" y="562" fill="currentColor" fontSize="11">
        Closed chain (squatting): joint force climbs with depth, but contact area climbs with it, so stress rises far less than force does.
      </text>
      <text x="100" y="578" fill="currentColor" fontSize="11">
        Open chain (loaded leg extension) near full extension: smallest contact patch, largest external moment. It looks harmless and is not.
      </text>
      <text x="100" y="596" fill="currentColor" fontSize="10">
        Curve shapes are schematic and come from modelling, not from measurement inside living joints. Read the shape of the relationship, not the numbers.
      </text>
    </svg>
  );
}
