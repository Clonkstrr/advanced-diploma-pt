// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function TrunkCanister() {
  return (
    <svg
      role="img"
      viewBox="0 0 820 700"
      width="100%"
      aria-labelledby="tc-title"
      className="diagram"
    >
      <title id="tc-title">
        The trunk as a pressure canister — diaphragm as roof, pelvic floor as base, transversus
        abdominis and obliques as walls, multifidus and thoracolumbar fascia behind — shown beside
        the spinal curves and the lumbopelvic rhythm at the hip, pelvis and spine junction
      </title>
      <defs>
        <marker id="tc-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* ── panel titles ──────────────────────────────────────────────── */}
      <text x="233" y="46" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        THE PRESSURE CANISTER — SAGITTAL
      </text>
      <text x="629" y="46" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        THE CURVES — AND WHERE MOTION IS
      </text>

      <rect x="24" y="58" width="418" height="420" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <rect x="462" y="58" width="334" height="420" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />

      {/* ── PANEL A: the canister ─────────────────────────────────────── */}
      <text x="209" y="98" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="bold">
        DIAPHRAGM — the roof
      </text>
      <text x="209" y="114" textAnchor="middle" fill="currentColor" fontSize="11">
        costal fibres to ribs 7–12 · crura down to L1–L3
      </text>

      {/* rib hints flanking the dome */}
      <path d="M 92 168 Q 106 132 140 122" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <path d="M 330 166 Q 316 130 284 120" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      {/* the dome */}
      <path d="M 104 172 C 146 122, 274 122, 314 166" fill="none" stroke="currentColor" strokeWidth="2.5" />

      {/* abdominal wall (left) and posterior wall (right) */}
      <line x1="104" y1="172" x2="104" y2="392" stroke="currentColor" strokeWidth="2.5" />
      <line x1="314" y1="166" x2="314" y2="392" stroke="currentColor" strokeWidth="2.5" />

      {/* callout anchor 1: the sealed boundary — roof meeting wall */}
      <line x1="80" y1="186" x2="102" y2="186" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="70" cy="186" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="70" y="190" textAnchor="middle" fill="currentColor" fontSize="11">1</text>

      {/* lumbar vertebral bodies stacked behind the posterior wall */}
      <rect x="316" y="178" width="22" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="316" y="216" width="22" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="316" y="254" width="22" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="316" y="292" width="22" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="316" y="330" width="22" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="327" y="198" textAnchor="middle" fill="currentColor" fontSize="11">L1</text>
      <text x="327" y="350" textAnchor="middle" fill="currentColor" fontSize="11">L5</text>

      <text x="348" y="240" fill="currentColor" fontSize="11">MULTIFIDUS +</text>
      <text x="348" y="254" fill="currentColor" fontSize="11">THORACOLUMBAR</text>
      <text x="348" y="268" fill="currentColor" fontSize="11">FASCIA</text>
      <text x="348" y="282" fill="currentColor" fontSize="11">— the back wall</text>

      {/* wall labels (left) */}
      <text x="96" y="236" textAnchor="end" fill="currentColor" fontSize="11">TRANSVERSUS</text>
      <text x="96" y="250" textAnchor="end" fill="currentColor" fontSize="11">ABDOMINIS</text>
      <text x="96" y="264" textAnchor="end" fill="currentColor" fontSize="11">+ OBLIQUES</text>
      <text x="96" y="278" textAnchor="end" fill="currentColor" fontSize="11">— the walls</text>
      <line x1="99" y1="256" x2="104" y2="256" stroke="currentColor" strokeWidth="1" />

      {/* pressure radiating outward */}
      <line x1="209" y1="268" x2="209" y2="196" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#tc-arrow)" />
      <line x1="209" y1="298" x2="209" y2="374" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#tc-arrow)" />
      <line x1="193" y1="283" x2="116" y2="283" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#tc-arrow)" />
      <line x1="225" y1="283" x2="302" y2="283" stroke="currentColor" strokeWidth="1.6" markerEnd="url(#tc-arrow)" />
      <text x="209" y="288" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">IAP</text>

      {/* callout anchor 2: pressure acting on every surface at once */}
      <circle cx="176" cy="246" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="176" y="250" textAnchor="middle" fill="currentColor" fontSize="11">2</text>

      {/* pelvic floor */}
      <path d="M 112 392 Q 209 430 306 390" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="209" y="452" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="bold">
        PELVIC FLOOR — the base
      </text>
      <text x="209" y="468" textAnchor="middle" fill="currentColor" fontSize="11">
        levator ani + coccygeus; it must hold as pressure rises
      </text>

      {/* ── PANEL B: the curves ───────────────────────────────────────── */}
      {/* callout anchor 3: the curve column and its facet orientations */}
      <circle cx="478" cy="80" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="478" y="84" textAnchor="middle" fill="currentColor" fontSize="11">3</text>

      <path
        d="M 520 84 C 500 108, 500 148, 520 170 C 546 200, 546 268, 518 300
           C 494 328, 494 372, 516 396 C 528 412, 534 436, 530 454"
        fill="none" stroke="currentColor" strokeWidth="2.5" />

      {/* rib arcs off the thoracic section */}
      <path d="M 542 202 Q 502 202 484 228" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.75" />
      <path d="M 545 234 Q 501 236 481 264" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.75" />
      <path d="M 540 266 Q 498 272 482 300" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.75" />

      <text x="566" y="106" fill="currentColor" fontSize="11" fontWeight="bold">CERVICAL LORDOSIS</text>
      <text x="566" y="122" fill="currentColor" fontSize="11">nodding at the atlanto-occipital joint;</text>
      <text x="566" y="137" fill="currentColor" fontSize="11">≈ half of head rotation at C1–C2;</text>
      <text x="566" y="152" fill="currentColor" fontSize="11">uncinate processes couple side-bend</text>
      <line x1="562" y1="132" x2="526" y2="138" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <text x="566" y="196" fill="currentColor" fontSize="11" fontWeight="bold">THORACIC KYPHOSIS</text>
      <text x="566" y="212" fill="currentColor" fontSize="11">ribs + sternum tie every level into a</text>
      <text x="566" y="227" fill="currentColor" fontSize="11">ring — stiff, yet this is where most</text>
      <text x="566" y="242" fill="currentColor" fontSize="11">trunk rotation actually lives</text>
      <line x1="562" y1="222" x2="547" y2="230" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <text x="566" y="300" fill="currentColor" fontSize="11" fontWeight="bold">LUMBAR LORDOSIS</text>
      <text x="566" y="316" fill="currentColor" fontSize="11">near-sagittal facets: flexion and</text>
      <text x="566" y="331" fill="currentColor" fontSize="11">extension are cheap; axial rotation</text>
      <text x="566" y="346" fill="currentColor" fontSize="11">stops at ≈ 2° per segment</text>
      <line x1="562" y1="326" x2="502" y2="338" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <text x="566" y="404" fill="currentColor" fontSize="11" fontWeight="bold">SACRUM</text>
      <text x="566" y="420" fill="currentColor" fontSize="11">wedged between the ilia — the base</text>
      <text x="566" y="435" fill="currentColor" fontSize="11">of the column, not a moving link</text>
      <line x1="562" y1="420" x2="533" y2="434" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <text x="629" y="466" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        (Curve size varies widely between healthy people.)
      </text>

      {/* ── BOTTOM STRIP: lumbopelvic rhythm ──────────────────────────── */}
      <rect x="24" y="502" width="772" height="176" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <text x="176" y="524" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        LUMBOPELVIC RHYTHM
      </text>

      {/* lumbar stack */}
      <rect x="142" y="538" width="20" height="15" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="142" y="557" width="20" height="15" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="142" y="576" width="20" height="15" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="142" y="595" width="20" height="15" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />

      {/* pelvis + hip + femur */}
      <path d="M 138 618 L 196 600 L 226 628 L 190 654 L 146 640 Z" fill="none"
        stroke="currentColor" strokeWidth="1.6" />
      <circle cx="198" cy="632" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="198" y1="632" x2="292" y2="656" stroke="currentColor" strokeWidth="2" />
      <text x="300" y="662" fill="currentColor" fontSize="11">femur</text>

      {/* marker a: lumbar flexion (lettered — the numbered markers belong to the callouts) */}
      <path d="M 118 544 C 98 566, 100 592, 116 608" fill="none" stroke="currentColor"
        strokeWidth="1.5" markerEnd="url(#tc-arrow)" />
      <circle cx="82" cy="576" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="82" y="580" textAnchor="middle" fill="currentColor" fontSize="11">a</text>

      {/* marker b: pelvis rotating over the femoral heads */}
      <path d="M 236 606 C 258 618, 262 640, 250 660" fill="none" stroke="currentColor"
        strokeWidth="1.5" markerEnd="url(#tc-arrow)" />
      <circle cx="272" cy="612" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="272" y="616" textAnchor="middle" fill="currentColor" fontSize="11">b</text>

      {/* callout anchor 4: form and force closure at the base */}
      <circle cx="344" cy="616" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="344" y="620" textAnchor="middle" fill="currentColor" fontSize="11">4</text>

      {/* explanatory block */}
      <text x="360" y="546" fill="currentColor" fontSize="11" fontWeight="bold">
        a  Lumbar flexion leads the first part of the bend.
      </text>
      <text x="360" y="566" fill="currentColor" fontSize="11" fontWeight="bold">
        b  The pelvis then rotates over the femoral heads and takes over.
      </text>
      <text x="360" y="584" fill="currentColor" fontSize="11">
        The textbook ratios are averages of very variable people: the sequence
      </text>
      <text x="360" y="599" fill="currentColor" fontSize="11">
        is reliable, the numbers are not.
      </text>

      <text x="360" y="620" fill="currentColor" fontSize="11" fontWeight="bold">
        At the sacroiliac joint, two things hold it:
      </text>
      <text x="360" y="637" fill="currentColor" fontSize="11">
        FORM CLOSURE — a wedged sacrum with ridged, interlocking surfaces.
      </text>
      <text x="360" y="651" fill="currentColor" fontSize="11">
        FORCE CLOSURE — compression added by muscle and fascia: gluteus maximus
      </text>
      <text x="360" y="665" fill="currentColor" fontSize="11">
        with the opposite latissimus dorsi, through the thoracolumbar fascia.
      </text>

      <text x="410" y="694" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        Raise the pressure inside the canister and the whole segment stiffens — even with no extra muscle pull on the spine itself.
      </text>
    </svg>
  );
}
