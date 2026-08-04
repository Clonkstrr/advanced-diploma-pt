// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function ChainTissueClocks() {
  return (
    <svg
      role="img"
      viewBox="0 0 880 620"
      width="100%"
      aria-labelledby="ctc-title"
      className="diagram"
    >
      <title id="ctc-title">
        Four tissues adapting on four different timescales: muscle changes size in six to ten weeks,
        tendon stiffness over eight to twelve weeks with a core that is barely renewed after
        adolescence, bone runs a remodelling cycle of about a season with density change over six to
        twelve months, and cartilage collagen does not renew on any training timescale
      </title>

      <text x="440" y="24" textAnchor="middle" fill="currentColor" fontSize="13" letterSpacing="1.4">
        FOUR TISSUES, FOUR CLOCKS, ONE PROGRAM
      </text>
      <text x="440" y="44" textAnchor="middle" fill="currentColor" fontSize="11.5">
        what has finished adapting by the time your client says she feels ready
      </text>

      {/* frame */}
      <rect x="16" y="88" width="848" height="382" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="148" y1="88" x2="148" y2="470" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="186" x2="864" y2="186" stroke="currentColor" strokeWidth="1" />
      <line x1="16" y1="276" x2="864" y2="276" stroke="currentColor" strokeWidth="1" />
      <line x1="16" y1="366" x2="864" y2="366" stroke="currentColor" strokeWidth="1" />

      {/* the week-six marker */}
      <line x1="400" y1="88" x2="400" y2="470" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="410" y="80" textAnchor="start" fill="currentColor" fontSize="11.5">
        week six: where a returning client feels ready
      </text>

      {/* ── muscle ────────────────────────────────────────────────────── */}
      <text x="28" y="140" fill="currentColor" fontSize="12" letterSpacing="1.2">MUSCLE</text>
      <text x="28" y="158" fill="currentColor" fontSize="11">fastest</text>
      <circle cx="175" cy="152" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="187" y="140" textAnchor="start" fill="currentColor" fontSize="11">synthesis up within hours</text>
      <rect x="400" y="144" width="52" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="460" y="156" textAnchor="start" fill="currentColor" fontSize="11">size changes: 6 to 10 weeks</text>
      <text x="187" y="174" textAnchor="start" fill="currentColor" fontSize="11">strength before that is mostly neural</text>

      {/* ── tendon ────────────────────────────────────────────────────── */}
      <text x="28" y="230" fill="currentColor" fontSize="12" letterSpacing="1.2">TENDON</text>
      <text x="28" y="248" fill="currentColor" fontSize="11">responsive,</text>
      <text x="28" y="263" fill="currentColor" fontSize="11">barely renewed</text>
      <circle cx="215" cy="242" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="227" y="230" textAnchor="start" fill="currentColor" fontSize="11">synthesis up for 2 to 3 days</text>
      <rect x="426" y="234" width="51" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="486" y="246" textAnchor="start" fill="currentColor" fontSize="11">stiffness changes: 8 to 12 weeks</text>
      <rect x="790" y="234" width="66" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="856" y="222" textAnchor="end" fill="currentColor" fontSize="11">core laid down by about age 17</text>
      <text x="856" y="266" textAnchor="end" fill="currentColor" fontSize="11">and hardly renewed after that</text>

      {/* ── bone ──────────────────────────────────────────────────────── */}
      <text x="28" y="320" fill="currentColor" fontSize="12" letterSpacing="1.2">BONE</text>
      <text x="28" y="338" fill="currentColor" fontSize="11">a season per</text>
      <text x="28" y="353" fill="currentColor" fontSize="11">cycle</text>
      <text x="155" y="306" textAnchor="start" fill="currentColor" fontSize="11">
        one remodelling cycle: about 3 weeks removing, then about 3 months rebuilding
      </text>
      <rect x="155" y="316" width="365" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="345" y1="316" x2="345" y2="332" stroke="currentColor" strokeWidth="1.5" />
      <text x="250" y="350" textAnchor="middle" fill="currentColor" fontSize="11">removing</text>
      <text x="432" y="350" textAnchor="middle" fill="currentColor" fontSize="11">rebuilding</text>
      <rect x="565" y="316" width="80" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="654" y="328" textAnchor="start" fill="currentColor" fontSize="11">density change: 6 to 12 months</text>

      {/* ── cartilage ─────────────────────────────────────────────────── */}
      <text x="28" y="410" fill="currentColor" fontSize="12" letterSpacing="1.2">CARTILAGE</text>
      <text x="28" y="428" fill="currentColor" fontSize="11">decades, or</text>
      <text x="28" y="443" fill="currentColor" fontSize="11">never</text>
      <text x="430" y="426" textAnchor="start" fill="currentColor" fontSize="11">nothing happens on a training timescale</text>
      <rect x="700" y="416" width="80" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="700" y="406" textAnchor="start" fill="currentColor" fontSize="11">proteoglycans: years</text>
      <rect x="790" y="416" width="66" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="856" y="450" textAnchor="end" fill="currentColor" fontSize="11">collagen half-life: many decades</text>

      {/* ── time axis ─────────────────────────────────────────────────── */}
      <line x1="150" y1="470" x2="860" y2="470" stroke="currentColor" strokeWidth="1.5" />
      <line x1="175" y1="470" x2="175" y2="478" stroke="currentColor" strokeWidth="1" />
      <line x1="235" y1="470" x2="235" y2="478" stroke="currentColor" strokeWidth="1" />
      <line x1="290" y1="470" x2="290" y2="478" stroke="currentColor" strokeWidth="1" />
      <line x1="400" y1="470" x2="400" y2="478" stroke="currentColor" strokeWidth="1" />
      <line x1="490" y1="470" x2="490" y2="478" stroke="currentColor" strokeWidth="1" />
      <line x1="565" y1="470" x2="565" y2="478" stroke="currentColor" strokeWidth="1" />
      <line x1="645" y1="470" x2="645" y2="478" stroke="currentColor" strokeWidth="1" />
      <line x1="730" y1="470" x2="730" y2="478" stroke="currentColor" strokeWidth="1" />
      <line x1="820" y1="470" x2="820" y2="478" stroke="currentColor" strokeWidth="1" />
      <text x="175" y="492" textAnchor="middle" fill="currentColor" fontSize="11">hours</text>
      <text x="235" y="492" textAnchor="middle" fill="currentColor" fontSize="11">days</text>
      <text x="290" y="492" textAnchor="middle" fill="currentColor" fontSize="11">1 week</text>
      <text x="400" y="492" textAnchor="middle" fill="currentColor" fontSize="11">6 weeks</text>
      <text x="490" y="492" textAnchor="middle" fill="currentColor" fontSize="11">3 months</text>
      <text x="565" y="492" textAnchor="middle" fill="currentColor" fontSize="11">6 months</text>
      <text x="645" y="492" textAnchor="middle" fill="currentColor" fontSize="11">1 year</text>
      <text x="730" y="492" textAnchor="middle" fill="currentColor" fontSize="11">years</text>
      <text x="820" y="492" textAnchor="middle" fill="currentColor" fontSize="11">decades</text>
      <text x="505" y="512" textAnchor="middle" fill="currentColor" fontSize="11">
        the scale is squashed: every step to the right is a bigger jump in time
      </text>

      {/* ── notes ─────────────────────────────────────────────────────── */}
      <text x="24" y="546" fill="currentColor" fontSize="11.5">
        Muscle also loses fast: measurable size loss inside a week of strict immobilisation, with strength falling faster than size.
      </text>
      <text x="24" y="572" fill="currentColor" fontSize="11.5">
        Bone density can dip early in a program, because removing leads rebuilding. Its stimulus is the size and rate of strain plus
      </text>
      <text x="24" y="590" fill="currentColor" fontSize="11.5">
        novelty, and it saturates after a few dozen loading cycles, so extra sets of the same thing add almost nothing.
      </text>
      <text x="24" y="616" fill="currentColor" fontSize="11.5">
        Age changes the rates and not the order. The capacity to adapt stays real in all four tissues into the ninth decade.
      </text>
    </svg>
  );
}
