// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function LowerLimbChain() {
  return (
    <svg
      role="img"
      viewBox="0 0 900 700"
      width="100%"
      aria-labelledby="llc-title"
      className="diagram"
    >
      <title id="llc-title">
        The lower limb as a linked chain: femoral neck-shaft and version angles at the hip, the
        Q-angle and patellofemoral contact at the knee, the oblique talocrural axis and the
        windlass mechanism of the foot, and how a restricted ankle dorsiflexion propagates upward
        through knee, hip and trunk during a squat
      </title>

      <defs>
        <marker id="llc-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="450" y="26" textAnchor="middle" fill="currentColor" fontSize="13.5" fontWeight="bold" letterSpacing="1.5">
        THE LOWER LIMB AS A LINKED CHAIN
      </text>

      {/* panel dividers */}
      <line x1="306" y1="44" x2="306" y2="676" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="590" y1="44" x2="590" y2="676" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />

      {/* ─────────── PANEL A: frontal chain ─────────── */}
      <text x="158" y="54" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.5">
        FRONTAL PLANE · RIGHT LIMB
      </text>
      <text x="158" y="70" textAnchor="middle" fill="currentColor" fontSize="9.5" fontStyle="italic">
        lateral ← · → medial
      </text>

      {/* pelvis hint + ASIS */}
      <polyline points="28,128 46,100 116,90 166,112 170,132" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="46" cy="100" r="4" fill="currentColor" />
      <text x="42" y="92" textAnchor="end" fill="currentColor" fontSize="9.5">ASIS</text>

      {/* acetabulum over the femoral head */}
      <path d="M 114.3 113.5 A 22 22 0 0 1 155.7 113.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="135" cy="121" r="14" fill="none" stroke="currentColor" strokeWidth="1.6" />

      {/* greater trochanter, neck axis, shaft axis */}
      <rect x="58" y="160" width="24" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="18" y="152" fill="currentColor" fontSize="9">greater trochanter</text>
      <line x1="135" y1="121" x2="78" y2="178" stroke="currentColor" strokeWidth="1.4" strokeDasharray="5 4" />
      <line x1="78" y1="178" x2="109" y2="351" stroke="currentColor" strokeWidth="2.2" />
      <path d="M 109.1 146.9 A 44 44 0 0 1 85.6 221.3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="118" y="186" fill="currentColor" fontSize="11">neck–shaft angle ≈125°</text>
      <text x="118" y="200" fill="currentColor" fontSize="9.5">valga &gt;135° · vara &lt;120°</text>
      <text x="118" y="213" fill="currentColor" fontSize="9.5">sets the abductor moment arm</text>

      {/* knee */}
      <circle cx="97" cy="338" r="13" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="121" cy="338" r="13" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="86" y1="357" x2="134" y2="357" stroke="currentColor" strokeWidth="2" />
      <rect x="99" y="323" width="20" height="26" rx="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="108" cy="386" r="3.5" fill="currentColor" />

      {/* Q-angle construction */}
      <line x1="46" y1="100" x2="109" y2="336" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 5" />
      <line x1="109" y1="336" x2="125" y2="396" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      <line x1="109" y1="336" x2="108" y2="392" stroke="currentColor" strokeWidth="1.6" />
      <path d="M 123 386.1 A 52 52 0 0 1 108 388" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="138" y="368" fill="currentColor" fontSize="10.5">Q-angle</text>
      <text x="138" y="381" fill="currentColor" fontSize="9.5">ASIS → patella → tuberosity;</text>
      <text x="138" y="393" fill="currentColor" fontSize="9.5">typically 13–18°, measured</text>
      <text x="138" y="405" fill="currentColor" fontSize="9.5">badly. A shape, not a</text>
      <text x="138" y="417" fill="currentColor" fontSize="9.5">prediction.</text>

      {/* shank */}
      <line x1="109" y1="360" x2="120" y2="506" stroke="currentColor" strokeWidth="2" />
      <line x1="96" y1="368" x2="94" y2="516" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="124" cy="508" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="93" cy="522" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />

      {/* talus, mortise, talocrural axis */}
      <polygon points="98,514 122,508 126,532 102,538" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <polygon points="100,538 124,534 128,548 98,548" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="80" y1="526" x2="138" y2="514" stroke="currentColor" strokeWidth="1.4" strokeDasharray="5 4" />
      <line x1="72" y1="548" x2="152" y2="548" stroke="currentColor" strokeWidth="1.4" />
      <text x="150" y="512" fill="currentColor" fontSize="9.5">mortise: the talus is</text>
      <text x="150" y="524" fill="currentColor" fontSize="9.5">wider in front, so</text>
      <text x="150" y="536" fill="currentColor" fontSize="9.5">dorsiflexion is the</text>
      <text x="150" y="548" fill="currentColor" fontSize="9.5">close-packed position</text>
      <text x="16" y="574" fill="currentColor" fontSize="9.5">talocrural axis runs malleolus to</text>
      <text x="16" y="586" fill="currentColor" fontSize="9.5">malleolus and is oblique: dorsiflexion</text>
      <text x="16" y="598" fill="currentColor" fontSize="9.5">couples with slight abduction/eversion</text>

      {/* ─────────── PANEL B ─────────── */}
      <text x="445" y="62" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.5">
        VIEWED DOWN THE FEMUR
      </text>
      <text x="445" y="78" textAnchor="middle" fill="currentColor" fontSize="9.5" fontStyle="italic">
        femoral version, transverse plane
      </text>
      <line x1="346" y1="178" x2="544" y2="178" stroke="currentColor" strokeWidth="2" />
      <line x1="420" y1="178" x2="533" y2="146" stroke="currentColor" strokeWidth="2" />
      <circle cx="536" cy="143" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M 484 178 A 64 64 0 0 0 481.5 160.4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="492" y="174" fill="currentColor" fontSize="10">≈15°</text>
      <text x="445" y="196" textAnchor="middle" fill="currentColor" fontSize="9.5">femoral condylar (knee) axis</text>
      <text x="346" y="214" fill="currentColor" fontSize="9.5">anteversion ≈8–15° in adults. More anteversion →</text>
      <text x="346" y="226" fill="currentColor" fontSize="9.5">more hip internal rotation, less external rotation.</text>

      {/* patellofemoral contact */}
      <text x="445" y="262" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.5">
        PATELLOFEMORAL CONTACT
      </text>
      <line x1="370" y1="282" x2="370" y2="294" stroke="currentColor" strokeWidth="2" />
      <rect x="357" y="294" width="26" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="357" y1="326" x2="357" y2="336" stroke="currentColor" strokeWidth="5" />
      <line x1="370" y1="338" x2="370" y2="350" stroke="currentColor" strokeWidth="2" />
      <text x="370" y="364" textAnchor="middle" fill="currentColor" fontSize="10">20°</text>

      <line x1="445" y1="282" x2="445" y2="294" stroke="currentColor" strokeWidth="2" />
      <rect x="432" y="294" width="26" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="432" y1="308" x2="432" y2="328" stroke="currentColor" strokeWidth="5" />
      <line x1="445" y1="338" x2="445" y2="350" stroke="currentColor" strokeWidth="2" />
      <text x="445" y="364" textAnchor="middle" fill="currentColor" fontSize="10">60°</text>

      <line x1="520" y1="282" x2="520" y2="294" stroke="currentColor" strokeWidth="2" />
      <line x1="507" y1="284" x2="507" y2="292" stroke="currentColor" strokeWidth="5" />
      <rect x="507" y="294" width="26" height="44" rx="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="507" y1="296" x2="507" y2="322" stroke="currentColor" strokeWidth="5" />
      <line x1="520" y1="338" x2="520" y2="350" stroke="currentColor" strokeWidth="2" />
      <text x="520" y="364" textAnchor="middle" fill="currentColor" fontSize="10">90°+</text>

      <text x="346" y="382" fill="currentColor" fontSize="9.5">Contact migrates from the inferior pole toward the</text>
      <text x="346" y="394" fill="currentColor" fontSize="9.5">superior pole and the area grows; past ~90° the</text>
      <text x="346" y="406" fill="currentColor" fontSize="9.5">quadriceps tendon shares load with the trochlea.</text>
      <text x="346" y="418" fill="currentColor" fontSize="9.5">Stress is force ÷ area — it never tracks force alone.</text>

      {/* windlass */}
      <text x="445" y="446" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.5">
        FOOT, SAGITTAL · THE WINDLASS
      </text>
      <line x1="336" y1="586" x2="566" y2="586" stroke="currentColor" strokeWidth="1.4" />
      <polygon points="342,548 374,544 380,578 346,580" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M 374 546 C 400 522, 446 520, 478 548" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="478" y1="548" x2="516" y2="572" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="518" cy="574" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="526" y1="570" x2="556" y2="552" stroke="currentColor" strokeWidth="3" />
      <path d="M 348 578 L 509 581 Q 527 581 524 568" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M 548 542 Q 560 530 546 522" fill="none" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#llc-arrow)" />
      <line x1="432" y1="532" x2="432" y2="506" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#llc-arrow)" />
      <text x="340" y="498" fill="currentColor" fontSize="9.5">arch rises · hindfoot supinates · foot stiffens</text>
      <text x="470" y="512" fill="currentColor" fontSize="9">MTP dorsiflexion</text>
      <text x="336" y="604" fill="currentColor" fontSize="9">plantar aponeurosis winds around the</text>
      <text x="336" y="616" fill="currentColor" fontSize="9">metatarsal head (Hicks, 1954)</text>
      <text x="336" y="628" fill="currentColor" fontSize="9">— lose first-MTP extension and you lose the mechanism</text>

      {/* ─────────── PANEL C: propagation ─────────── */}
      <text x="740" y="54" textAnchor="middle" fill="currentColor" fontSize="11.5" letterSpacing="1.5">
        ONE RESTRICTION, PROPAGATED
      </text>
      <text x="740" y="72" textAnchor="middle" fill="currentColor" fontSize="9.5" fontStyle="italic">
        squatting with under 10° of weight-bearing dorsiflexion
      </text>

      <rect x="600" y="548" width="280" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <text x="612" y="568" fill="currentColor" fontSize="10.5" fontWeight="bold" letterSpacing="1.2">ANKLE</text>
      <text x="612" y="586" fill="currentColor" fontSize="10">Talus cannot travel far enough in the mortise, so</text>
      <text x="612" y="600" fill="currentColor" fontSize="10">the shank stops progressing forward over the foot.</text>
      <text x="612" y="614" fill="currentColor" fontSize="10">This is the rate-limiter for everything above it.</text>
      <line x1="740" y1="548" x2="740" y2="516" stroke="currentColor" strokeWidth="2" markerEnd="url(#llc-arrow)" />

      <rect x="600" y="436" width="280" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="612" y="456" fill="currentColor" fontSize="10.5" fontWeight="bold" letterSpacing="1.2">FOOT</text>
      <text x="612" y="474" fill="currentColor" fontSize="10">Range is scavenged elsewhere: subtalar pronation</text>
      <text x="612" y="488" fill="currentColor" fontSize="10">and midfoot give, an early heel lift, or the foot</text>
      <text x="612" y="502" fill="currentColor" fontSize="10">turns out. Something always pays.</text>
      <line x1="740" y1="436" x2="740" y2="408" stroke="currentColor" strokeWidth="2" markerEnd="url(#llc-arrow)" />

      <rect x="600" y="316" width="280" height="92" rx="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="612" y="336" fill="currentColor" fontSize="10.5" fontWeight="bold" letterSpacing="1.2">KNEE</text>
      <text x="612" y="354" fill="currentColor" fontSize="10">Closed-chain pronation drags the tibia into internal</text>
      <text x="612" y="368" fill="currentColor" fontSize="10">rotation, so the knee drifts medially; knee flexion</text>
      <text x="612" y="382" fill="currentColor" fontSize="10">and quadriceps demand fall while soleus demand</text>
      <text x="612" y="396" fill="currentColor" fontSize="10">rises. Measured, not assumed (Macrum et al.).</text>
      <line x1="740" y1="316" x2="740" y2="288" stroke="currentColor" strokeWidth="2" markerEnd="url(#llc-arrow)" />

      <rect x="600" y="196" width="280" height="92" rx="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="612" y="216" fill="currentColor" fontSize="10.5" fontWeight="bold" letterSpacing="1.2">HIP</text>
      <text x="612" y="234" fill="currentColor" fontSize="10">The trunk pitches forward to hold the centre of</text>
      <text x="612" y="248" fill="currentColor" fontSize="10">mass over the midfoot, so hip flexion angle and</text>
      <text x="612" y="262" fill="currentColor" fontSize="10">extensor-moment demand both climb — and hip</text>
      <text x="612" y="276" fill="currentColor" fontSize="10">adduction with internal rotation feeds the valgus.</text>
      <line x1="740" y1="196" x2="740" y2="168" stroke="currentColor" strokeWidth="2" markerEnd="url(#llc-arrow)" />

      <rect x="600" y="100" width="280" height="66" rx="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <text x="612" y="120" fill="currentColor" fontSize="10.5" fontWeight="bold" letterSpacing="1.2">TRUNK</text>
      <text x="612" y="138" fill="currentColor" fontSize="10">Longer external moment arms at the hip and the</text>
      <text x="612" y="152" fill="currentColor" fontSize="10">lumbar spine. The depth was never free.</text>

      <text x="600" y="648" fill="currentColor" fontSize="9">Measure it (knee-to-wall) before you interpret it. Then ask</text>
      <text x="600" y="660" fill="currentColor" fontSize="9">whether the block is joint or muscle: with the knee bent,</text>
      <text x="600" y="672" fill="currentColor" fontSize="9">gastrocnemius is already slack, so it is not the answer.</text>
    </svg>
  );
}
