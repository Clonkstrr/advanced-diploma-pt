// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
// One relative claim, two base rates, drawn on a single shared risk scale so the
// absolute gap is visible rather than asserted. Scale: x = 240 + percent * 42,
// so world A (10% falling to 5%) is 420 px against 210, and world B (0.2%
// falling to 0.1%) is 8 px against 4.
export function StatsRelativeVsAbsolute() {
  return (
    <svg
      role="img"
      viewBox="0 0 820 600"
      width="100%"
      aria-labelledby="rva-title"
      className="diagram"
    >
      <title id="rva-title">
        One headline, two worlds. The claim cuts the risk in half sits over two panels drawn on the
        same risk scale. In world A the risk falls from 10 in 100 to 5 in 100, a visible gap of five
        percentage points and a number needed to treat of twenty. In world B the identical claim
        moves the risk from 2 in 1,000 to 1 in 1,000, a gap too small to see at the same scale, with
        a number needed to treat of one thousand. A strip beneath counts the difference in people.
        Circled numbers 1 to 4 mark the four notes listed beneath the figure.
      </title>

      <text x="410" y="30" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.6">
        ONE HEADLINE, TWO WORLDS
      </text>

      <rect x="210" y="46" width="400" height="34" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="410" y="68" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="bold">
        “CUTS THE RISK IN HALF”
      </text>

      <rect x="20" y="96" width="780" height="190" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <rect x="20" y="296" width="780" height="170" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <rect x="20" y="476" width="780" height="104" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />

      {/* ── WORLD A: a common injury ──────────────────────────────────── */}
      <text x="410" y="120" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        WORLD A: BASE RISK 10 IN 100 PER SEASON
      </text>

      <text x="230" y="156" textAnchor="end" fill="currentColor" fontSize="11">no program</text>
      <rect x="240" y="140" width="420" height="22" fill="currentColor" fillOpacity="0.75" />
      <text x="668" y="156" fill="currentColor" fontSize="11">10 in 100</text>

      <text x="230" y="196" textAnchor="end" fill="currentColor" fontSize="11">with program</text>
      <rect x="240" y="180" width="210" height="22" fill="currentColor" fillOpacity="0.4"
        stroke="currentColor" strokeWidth="1.2" />
      <text x="458" y="196" fill="currentColor" fontSize="11">5 in 100</text>

      <line x1="450" y1="216" x2="660" y2="216" stroke="currentColor" strokeWidth="1.2" />
      <line x1="450" y1="210" x2="450" y2="222" stroke="currentColor" strokeWidth="1.2" />
      <line x1="660" y1="210" x2="660" y2="222" stroke="currentColor" strokeWidth="1.2" />
      <text x="555" y="238" textAnchor="middle" fill="currentColor" fontSize="11">
        5 fewer per 100. Absolute reduction: 5 percentage points.
      </text>
      <text x="555" y="256" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">
        Number needed to treat: 20
      </text>

      {/* ── WORLD B: a rare injury ────────────────────────────────────── */}
      <text x="410" y="320" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        WORLD B: BASE RISK 2 IN 1,000 PER SEASON
      </text>

      <text x="230" y="358" textAnchor="end" fill="currentColor" fontSize="11">no program</text>
      <rect x="240" y="342" width="8" height="22" fill="currentColor" fillOpacity="0.75" />
      <text x="258" y="358" fill="currentColor" fontSize="11">2 in 1,000</text>

      <text x="230" y="398" textAnchor="end" fill="currentColor" fontSize="11">with program</text>
      <rect x="240" y="382" width="4" height="22" fill="currentColor" fillOpacity="0.4"
        stroke="currentColor" strokeWidth="1.2" />
      <text x="258" y="398" fill="currentColor" fontSize="11">1 in 1,000</text>

      <line x1="620" y1="352" x2="662" y2="352" stroke="currentColor" strokeWidth="3" />
      <text x="668" y="356" fill="currentColor" fontSize="11">= 1 percentage point</text>

      <text x="410" y="428" textAnchor="middle" fill="currentColor" fontSize="11">
        Same scale as the panel above, so the two bars are almost the same bar.
      </text>
      <text x="410" y="448" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="bold">
        1 fewer per 1,000. Absolute reduction: 0.1 percentage points. Number needed to treat: 1,000
      </text>

      {/* ── THE SAME CLAIM, COUNTED IN PEOPLE ─────────────────────────── */}
      <text x="410" y="500" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        THE SAME 50%, COUNTED IN PEOPLE
      </text>

      <text x="236" y="532" textAnchor="end" fill="currentColor" fontSize="11">world A</text>
      <circle cx="250" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="272" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="294" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="316" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="338" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="360" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="382" cy="528" r="6" fill="currentColor" />
      <circle cx="404" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="426" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="448" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="470" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="492" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="514" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="536" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="558" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="580" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="602" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="624" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="646" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="668" cy="528" r="6" fill="none" stroke="currentColor" strokeWidth="1.4" />

      <text x="410" y="560" textAnchor="middle" fill="currentColor" fontSize="11">
        World A: one of these twenty avoids the injury. World B would need fifty rows like it.
      </text>

      <circle cx="186" cy="63" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="186" y="67" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      <line x1="196" y1="63" x2="208" y2="63" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <circle cx="46" cy="196" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="46" y="200" textAnchor="middle" fill="currentColor" fontSize="11">2</text>
      <line x1="56" y1="196" x2="140" y2="196" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <circle cx="46" cy="374" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="46" y="378" textAnchor="middle" fill="currentColor" fontSize="11">3</text>
      <line x1="56" y1="374" x2="140" y2="374" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <circle cx="46" cy="528" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="46" y="532" textAnchor="middle" fill="currentColor" fontSize="11">4</text>
      <line x1="56" y1="528" x2="170" y2="528" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
