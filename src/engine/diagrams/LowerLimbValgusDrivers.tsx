// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function LowerLimbValgusDrivers() {
  return (
    <svg
      role="img"
      viewBox="0 0 900 560"
      width="100%"
      aria-labelledby="llvd-title"
      className="diagram"
    >
      <title id="llvd-title">
        Dynamic knee valgus has two ends: hip adduction with internal rotation and a dropping
        pelvis from above, and closed-chain heel eversion with obligate tibial internal rotation
        from below, with three quick tests for telling which end is driving it
      </title>

      <defs>
        <marker id="llvd-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="450" y="26" textAnchor="middle" fill="currentColor" fontSize="13.5" fontWeight="bold" letterSpacing="1.5">
        THE KNEE FALLS IN FROM TWO DIFFERENT ENDS
      </text>
      <text x="450" y="44" textAnchor="middle" fill="currentColor" fontSize="10.5" fontStyle="italic">
        right limb, viewed from the front, during a single-leg squat
      </text>

      {/* ── body midline ── */}
      <line x1="300" y1="70" x2="300" y2="470" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
      <text x="304" y="84" fill="currentColor" fontSize="9.5">body midline</text>

      {/* ── pelvis ── */}
      <polyline points="95,132 150,120 250,140 296,152" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="150" cy="138" r="5" fill="currentColor" />
      <line x1="272" y1="158" x2="272" y2="182" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#llvd-arrow)" />
      <text x="150" y="104" fill="currentColor" fontSize="10">free side of the pelvis drops</text>

      {/* ── femur, knee, tibia ── */}
      <line x1="150" y1="138" x2="218" y2="282" stroke="currentColor" strokeWidth="3" />
      <path d="M 178 208 Q 200 214 196 232" fill="none" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#llvd-arrow)" />
      <text x="58" y="230" fill="currentColor" fontSize="10">femur moves inward</text>
      <text x="58" y="244" fill="currentColor" fontSize="10">and turns inward</text>

      <circle cx="218" cy="282" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="234" y="278" fill="currentColor" fontSize="10">the knee is the passenger</text>
      <text x="234" y="292" fill="currentColor" fontSize="9.5">barely moves sideways itself</text>

      <line x1="218" y1="282" x2="176" y2="420" stroke="currentColor" strokeWidth="2.5" />
      <path d="M 172 340 Q 194 350 190 368" fill="none" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#llvd-arrow)" />
      <text x="58" y="352" fill="currentColor" fontSize="10">shin bone is dragged</text>
      <text x="58" y="366" fill="currentColor" fontSize="10">into inward rotation</text>

      {/* ── foot ── */}
      <line x1="176" y1="420" x2="176" y2="436" stroke="currentColor" strokeWidth="2.5" />
      <polygon points="148,436 224,432 226,448 146,450" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M 150 424 Q 166 416 178 424" fill="none" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#llvd-arrow)" />
      <line x1="112" y1="458" x2="256" y2="458" stroke="currentColor" strokeWidth="1.4" />
      <text x="58" y="480" fill="currentColor" fontSize="10">the heel bone tips outward (eversion)</text>
      <text x="58" y="494" fill="currentColor" fontSize="10">and the talus rolls inward and down</text>

      {/* ── from above ── */}
      <rect x="380" y="70" width="500" height="142" rx="8" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <text x="392" y="92" fill="currentColor" fontSize="11" fontWeight="bold" letterSpacing="1.2">FROM ABOVE: THE HIP</text>
      <text x="392" y="114" fill="currentColor" fontSize="10.5">The femur moves inward and turns inward under a pelvis that may</text>
      <text x="392" y="130" fill="currentColor" fontSize="10.5">itself be dropping on the free side, and the knee simply follows the</text>
      <text x="392" y="146" fill="currentColor" fontSize="10.5">femur. What you are really testing is whether the hip can hold the</text>
      <text x="392" y="162" fill="currentColor" fontSize="10.5">pelvis and resist femoral rotation for eight repetitions, not for one.</text>
      <text x="392" y="182" fill="currentColor" fontSize="10.5">A knee that behaves for six reps and folds on the last two is short of</text>
      <text x="392" y="198" fill="currentColor" fontSize="10.5">capacity, so coaching louder will not fix it.</text>
      <line x1="376" y1="140" x2="308" y2="140" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#llvd-arrow)" />

      {/* ── from below ── */}
      <rect x="380" y="230" width="500" height="142" rx="8" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <text x="392" y="252" fill="currentColor" fontSize="11" fontWeight="bold" letterSpacing="1.2">FROM BELOW: THE FOOT AND ANKLE</text>
      <text x="392" y="274" fill="currentColor" fontSize="10.5">In weight bearing the heel bone rolls outward while the talus rolls</text>
      <text x="392" y="290" fill="currentColor" fontSize="10.5">inward and downward on top of it. No muscle attaches to the talus,</text>
      <text x="392" y="306" fill="currentColor" fontSize="10.5">so the shin bone is dragged into inward rotation and the knee drifts</text>
      <text x="392" y="322" fill="currentColor" fontSize="10.5">with it. An ankle that cannot bend forward does the same thing.</text>
      <text x="392" y="342" fill="currentColor" fontSize="10.5">Wedge the toes up to block that bend and medial knee travel rises</text>
      <text x="392" y="358" fill="currentColor" fontSize="10.5">inside the same session, with less knee bend and less quadriceps work.</text>
      <line x1="376" y1="300" x2="252" y2="416" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#llvd-arrow)" />

      {/* ── the tests ── */}
      <rect x="380" y="390" width="500" height="112" rx="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="392" y="412" fill="currentColor" fontSize="11" fontWeight="bold" letterSpacing="1.2">THREE TESTS, THREE MINUTES</text>
      <text x="392" y="434" fill="currentColor" fontSize="10.5">1. Lift the heels. If the knee straightens out, the ankle is driving it.</text>
      <text x="392" y="452" fill="currentColor" fontSize="10.5">2. Hold the pelvis level and cue the hip. If it improves, look upward.</text>
      <text x="392" y="470" fill="currentColor" fontSize="10.5">3. Run the set out to eight. If it only fails late, train capacity.</text>
      <text x="392" y="492" fill="currentColor" fontSize="10.5">Then write the programme, instead of guessing at a muscle.</text>

      {/* ── footer ── */}
      <text x="58" y="528" fill="currentColor" fontSize="10.5">
        The same picture, two different causes. And it is not a screening test: 710 elite female athletes, 42 ACL injuries, drop-jump
      </text>
      <text x="58" y="544" fill="currentColor" fontSize="10.5">
        knee position did not predict who tore one. Treat what you see as a description of loading, not as a diagnosis and not as a gate.
      </text>
    </svg>
  );
}
