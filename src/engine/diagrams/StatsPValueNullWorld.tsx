// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
// The p-value drawn as what it is: an area in the tails of a distribution that
// only exists inside the assumption of no effect. Panel A scale:
// x = 120 + (kg + 6) * 53, baseline y = 300, observed difference +2.5 kg.
export function StatsPValueNullWorld() {
  return (
    <svg
      role="img"
      viewBox="0 0 820 660"
      width="100%"
      aria-labelledby="pnw-title"
      className="diagram"
    >
      <title id="pnw-title">
        The imaginary world a p-value is computed in. Above: a bell-shaped spread of the differences
        that luck alone would produce if the program did nothing, centred on zero, with the observed
        result of plus 2.5 kilograms marked and both tails beyond it shaded to show that p equals
        0.03. Below left: the probability of this data given no effect set against the probability of
        no effect given this data, which are not the same quantity. Below right: twenty boxes
        standing for twenty measured outcomes that are all truly nothing, with one shaded to show the
        significant result arithmetic alone will hand you. Circled numbers 1 to 4 mark the four notes
        listed beneath the figure.
      </title>

      <rect x="20" y="48" width="780" height="310" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <rect x="20" y="372" width="380" height="260" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <rect x="420" y="372" width="380" height="260" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />

      <text x="410" y="34" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.6">
        WHAT A P-VALUE IS, AND WHAT IT IS NOT
      </text>

      {/* ── PANEL A: the null world ───────────────────────────────────── */}
      <text x="410" y="74" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        THE WORLD A P-VALUE IS COMPUTED IN
      </text>
      <text x="410" y="94" textAnchor="middle" fill="currentColor" fontSize="11">
        Assume the program does nothing. These are the differences luck alone would hand you.
      </text>

      {/* shaded tails: results at least as extreme as the one observed */}
      <path d="M 570 300 L 570 292 C 610 296, 680 299, 746 300 Z"
        fill="currentColor" fillOpacity="0.3" />
      <path d="M 306 300 L 306 292 C 250 296, 190 299, 130 300 Z"
        fill="currentColor" fillOpacity="0.3" />

      <path
        d="M 130 300 C 250 298, 320 292, 370 246 C 400 218, 412 150, 438 150
           C 464 150, 476 218, 506 246 C 556 292, 626 298, 746 300"
        fill="none" stroke="currentColor" strokeWidth="2.5" />

      <line x1="570" y1="300" x2="570" y2="238" stroke="currentColor" strokeWidth="1.5" />
      <text x="580" y="234" fill="currentColor" fontSize="11">what this study saw: +2.5 kg</text>

      <text x="640" y="122" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">
        p = 0.03
      </text>
      <text x="640" y="140" textAnchor="middle" fill="currentColor" fontSize="11">
        about 3 results in 100
      </text>
      <text x="640" y="156" textAnchor="middle" fill="currentColor" fontSize="11">
        land at least this far out
      </text>
      <text x="640" y="172" textAnchor="middle" fill="currentColor" fontSize="11">
        when nothing is going on
      </text>

      <text x="200" y="140" textAnchor="middle" fill="currentColor" fontSize="11">
        most of the time luck
      </text>
      <text x="200" y="156" textAnchor="middle" fill="currentColor" fontSize="11">
        lands you near zero
      </text>

      <line x1="120" y1="300" x2="756" y2="300" stroke="currentColor" strokeWidth="1.2" />
      <line x1="120" y1="300" x2="120" y2="306" stroke="currentColor" strokeWidth="1.2" />
      <line x1="226" y1="300" x2="226" y2="306" stroke="currentColor" strokeWidth="1.2" />
      <line x1="332" y1="300" x2="332" y2="306" stroke="currentColor" strokeWidth="1.2" />
      <line x1="438" y1="300" x2="438" y2="306" stroke="currentColor" strokeWidth="1.2" />
      <line x1="544" y1="300" x2="544" y2="306" stroke="currentColor" strokeWidth="1.2" />
      <line x1="650" y1="300" x2="650" y2="306" stroke="currentColor" strokeWidth="1.2" />
      <line x1="756" y1="300" x2="756" y2="306" stroke="currentColor" strokeWidth="1.2" />
      <text x="120" y="318" textAnchor="middle" fill="currentColor" fontSize="11">−6</text>
      <text x="226" y="318" textAnchor="middle" fill="currentColor" fontSize="11">−4</text>
      <text x="332" y="318" textAnchor="middle" fill="currentColor" fontSize="11">−2</text>
      <text x="438" y="318" textAnchor="middle" fill="currentColor" fontSize="11">0</text>
      <text x="544" y="318" textAnchor="middle" fill="currentColor" fontSize="11">+2</text>
      <text x="650" y="318" textAnchor="middle" fill="currentColor" fontSize="11">+4</text>
      <text x="756" y="318" textAnchor="middle" fill="currentColor" fontSize="11">+6</text>
      <text x="438" y="336" textAnchor="middle" fill="currentColor" fontSize="11">
        difference in 1RM gain that luck alone could produce (kg)
      </text>
      <text x="410" y="352" textAnchor="middle" fill="currentColor" fontSize="11">
        Both tails are shaded, because a two-sided p counts equally extreme results in either direction.
      </text>

      <circle cx="46" cy="170" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="46" y="174" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      <circle cx="706" cy="262" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="706" y="266" textAnchor="middle" fill="currentColor" fontSize="11">2</text>
      <line x1="700" y1="270" x2="668" y2="292" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      {/* ── PANEL B: the flip ─────────────────────────────────────────── */}
      <text x="210" y="396" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        THE FLIP THAT GETS IT WRONG
      </text>

      <rect x="52" y="412" width="300" height="62" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="202" y="434" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">
        what the p-value gives you
      </text>
      <text x="202" y="456" textAnchor="middle" fill="currentColor" fontSize="11">
        chance of THIS DATA if there were NO EFFECT
      </text>

      <text x="202" y="496" textAnchor="middle" fill="currentColor" fontSize="12" fontStyle="italic">
        is not the same quantity as
      </text>

      <rect x="52" y="512" width="300" height="62" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="202" y="534" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">
        what people read it as
      </text>
      <text x="202" y="556" textAnchor="middle" fill="currentColor" fontSize="11">
        chance of NO EFFECT given THIS DATA
      </text>

      <text x="210" y="598" textAnchor="middle" fill="currentColor" fontSize="11">
        If she competes in powerlifting, she probably deadlifts.
      </text>
      <text x="210" y="616" textAnchor="middle" fill="currentColor" fontSize="11">
        If she deadlifts, she probably does not compete.
      </text>

      <circle cx="34" cy="494" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="34" y="498" textAnchor="middle" fill="currentColor" fontSize="11">3</text>

      {/* ── PANEL C: twenty true nothings ─────────────────────────────── */}
      <text x="610" y="396" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        TWENTY OUTCOMES, ALL TRULY NOTHING
      </text>

      <rect x="470" y="420" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="514" y="420" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="558" y="420" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="602" y="420" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="646" y="420" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="470" y="464" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="514" y="464" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="558" y="464" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="602" y="464" width="34" height="34" rx="4" fill="currentColor" fillOpacity="0.35"
        stroke="currentColor" strokeWidth="2" />
      <rect x="646" y="464" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="470" y="508" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="514" y="508" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="558" y="508" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="602" y="508" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="646" y="508" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="470" y="552" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="514" y="552" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="558" y="552" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="602" y="552" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="646" y="552" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="1.4" />

      <text x="610" y="606" textAnchor="middle" fill="currentColor" fontSize="11">
        Test twenty true nothings at the 0.05 line and
      </text>
      <text x="610" y="622" textAnchor="middle" fill="currentColor" fontSize="11">
        about one comes back significant by arithmetic alone.
      </text>

      <circle cx="440" cy="494" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="440" y="498" textAnchor="middle" fill="currentColor" fontSize="11">4</text>
    </svg>
  );
}
