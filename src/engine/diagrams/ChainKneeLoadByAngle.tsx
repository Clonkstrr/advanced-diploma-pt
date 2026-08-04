// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function ChainKneeLoadByAngle() {
  return (
    <svg
      role="img"
      viewBox="0 0 880 660"
      width="100%"
      aria-labelledby="klba-title"
      className="diagram"
    >
      <title id="klba-title">
        Knee loading depends on the tissue and on the joint angle: forward drag on the shin bone
        peaks near full extension in open-chain knee extension and stays low in the squat, while
        stress behind the kneecap is higher in open-chain extension through the shallow range and
        higher in the leg press through the deep range, the two curves crossing near fifty degrees
      </title>
      <defs>
        <marker id="klba-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="440" y="24" textAnchor="middle" fill="currentColor" fontSize="13" letterSpacing="1.4">
        NAME THE TISSUE AND THE ANGLE, OR THE QUESTION HAS NO ANSWER
      </text>
      <text x="440" y="44" textAnchor="middle" fill="currentColor" fontSize="11.5">
        the same two exercises, two different tissues, two opposite answers
      </text>

      {/* ── panel A: forward drag on the shin bone ────────────────────── */}
      <rect x="16" y="58" width="424" height="372" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="228" y="82" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.1">
        FORWARD DRAG ON THE SHIN BONE
      </text>
      <text x="228" y="100" textAnchor="middle" fill="currentColor" fontSize="11">
        this is what strains the ACL
      </text>

      <line x1="70" y1="380" x2="418" y2="380" stroke="currentColor" strokeWidth="1.5" />
      <line x1="70" y1="380" x2="70" y2="120" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#klba-arrow)" />
      <text x="62" y="132" textAnchor="end" fill="currentColor" fontSize="11">more</text>
      <text x="62" y="378" textAnchor="end" fill="currentColor" fontSize="11">less</text>
      <text x="36" y="256" textAnchor="middle" fill="currentColor" fontSize="11">load</text>
      <line x1="172" y1="380" x2="172" y2="388" stroke="currentColor" strokeWidth="1" />
      <line x1="274" y1="380" x2="274" y2="388" stroke="currentColor" strokeWidth="1" />
      <line x1="376" y1="380" x2="376" y2="388" stroke="currentColor" strokeWidth="1" />
      <text x="70" y="402" textAnchor="middle" fill="currentColor" fontSize="11">0&#176;</text>
      <text x="172" y="402" textAnchor="middle" fill="currentColor" fontSize="11">30&#176;</text>
      <text x="274" y="402" textAnchor="middle" fill="currentColor" fontSize="11">60&#176;</text>
      <text x="376" y="402" textAnchor="middle" fill="currentColor" fontSize="11">90&#176;</text>
      <text x="228" y="422" textAnchor="middle" fill="currentColor" fontSize="11">
        knee bend, straight leg on the left
      </text>

      <path d="M 70 208 C 96 152 126 132 152 140 C 188 154 226 254 274 328 C 310 352 350 362 418 366"
        fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="168" y="128" textAnchor="start" fill="currentColor" fontSize="11.5">open-chain knee extension</text>
      <line x1="165" y1="132" x2="153" y2="137" stroke="currentColor" strokeWidth="1" />
      <text x="212" y="168" textAnchor="start" fill="currentColor" fontSize="11">the peak sits inside</text>
      <text x="212" y="183" textAnchor="start" fill="currentColor" fontSize="11">the first 30&#176; of bend</text>

      <path d="M 70 330 C 140 334 220 338 300 340 C 340 341 380 342 418 342"
        fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="7 5" />
      <text x="78" y="314" textAnchor="start" fill="currentColor" fontSize="11.5">squat and leg press</text>

      {/* ── panel B: stress behind the kneecap ────────────────────────── */}
      <rect x="450" y="58" width="414" height="372" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="657" y="82" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.1">
        STRESS BEHIND THE KNEECAP
      </text>
      <text x="657" y="100" textAnchor="middle" fill="currentColor" fontSize="11">
        the patellofemoral joint
      </text>

      <line x1="500" y1="380" x2="844" y2="380" stroke="currentColor" strokeWidth="1.5" />
      <line x1="500" y1="380" x2="500" y2="120" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#klba-arrow)" />
      <text x="492" y="132" textAnchor="end" fill="currentColor" fontSize="11">more</text>
      <text x="492" y="378" textAnchor="end" fill="currentColor" fontSize="11">less</text>
      <text x="468" y="256" textAnchor="middle" fill="currentColor" fontSize="11">load</text>
      <line x1="602" y1="380" x2="602" y2="388" stroke="currentColor" strokeWidth="1" />
      <line x1="704" y1="380" x2="704" y2="388" stroke="currentColor" strokeWidth="1" />
      <line x1="806" y1="380" x2="806" y2="388" stroke="currentColor" strokeWidth="1" />
      <text x="500" y="402" textAnchor="middle" fill="currentColor" fontSize="11">0&#176;</text>
      <text x="602" y="402" textAnchor="middle" fill="currentColor" fontSize="11">30&#176;</text>
      <text x="704" y="402" textAnchor="middle" fill="currentColor" fontSize="11">60&#176;</text>
      <text x="806" y="402" textAnchor="middle" fill="currentColor" fontSize="11">90&#176;</text>
      <text x="657" y="422" textAnchor="middle" fill="currentColor" fontSize="11">
        knee bend, straight leg on the left
      </text>

      <path d="M 500 172 C 558 188 618 226 670 266 C 720 302 776 320 844 332"
        fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="506" y="142" textAnchor="start" fill="currentColor" fontSize="11.5">open-chain knee extension</text>

      <path d="M 500 362 C 558 350 620 306 670 266 C 722 224 782 176 844 148"
        fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="7 5" />
      <text x="842" y="132" textAnchor="end" fill="currentColor" fontSize="11.5">leg press</text>

      <circle cx="670" cy="266" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="670" y1="214" x2="670" y2="259" stroke="currentColor" strokeWidth="1" />
      <text x="624" y="206" textAnchor="start" fill="currentColor" fontSize="11">cross near 50&#176;</text>

      {/* ── notes ─────────────────────────────────────────────────────── */}
      <line x1="16" y1="452" x2="864" y2="452" stroke="currentColor" strokeWidth="1" />
      <text x="24" y="480" fill="currentColor" fontSize="11.5">
        In the squat, compression through the joint and the hamstrings pulling backward hold the forward drag down. That is where
      </text>
      <text x="24" y="498" fill="currentColor" fontSize="11.5">
        &#8220;closed chain is safe for the ACL&#8221; came from, and the left panel on its own does support it.
      </text>
      <text x="24" y="528" fill="currentColor" fontSize="11.5">
        The right panel is the half that gets forgotten. Between roughly 0 and 45&#176; the extension machine loads the kneecap harder;
      </text>
      <text x="24" y="546" fill="currentColor" fontSize="11.5">
        between roughly 60 and 90&#176; the leg press does. Steinkamp and colleagues measured that crossover.
      </text>
      <text x="24" y="576" fill="currentColor" fontSize="11.5">
        So the tissue best protected in the left panel is the one loaded hardest in the right panel, in the same knee, in the same
      </text>
      <text x="24" y="594" fill="currentColor" fontSize="11.5">
        repetition. Restricting the range is what makes open-chain work usable after reconstruction.
      </text>
      <text x="24" y="624" fill="currentColor" fontSize="11.5">
        Curve shapes are schematic: they show direction and crossover, not exact values. This area is still moving, so ask the
      </text>
      <text x="24" y="642" fill="currentColor" fontSize="11.5">
        treating clinician before applying either rule to a surgical knee.
      </text>
    </svg>
  );
}
