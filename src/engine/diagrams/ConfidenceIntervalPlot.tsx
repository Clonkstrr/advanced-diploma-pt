// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
// Scale: x = 90 + (kg + 6) * 40, effect axis from −6 to +10 kg.
export function ConfidenceIntervalPlot() {
  return (
    <svg
      role="img"
      viewBox="0 0 760 440"
      width="100%"
      aria-labelledby="cip-title"
      className="diagram"
    >
      <title id="cip-title">
        Three study results as point estimates with 95% confidence intervals, read against a zero
        line and the band of changes too small to matter
      </title>

      {/* band of trivial effects: −2 to +2 kg */}
      <rect x="250" y="80" width="160" height="270" fill="currentColor" fillOpacity="0.08" />
      <text x="330" y="98" textAnchor="middle" fill="currentColor" fontSize="11">
        too small to matter
      </text>

      {/* zero line */}
      <line x1="330" y1="108" x2="330" y2="350" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Study A: clearly beneficial — estimate +6, CI +3 to +9 */}
      <text x="78" y="134" textAnchor="end" fill="currentColor" fontSize="13" fontWeight="bold">Study A</text>
      <text x="78" y="150" textAnchor="end" fill="currentColor" fontSize="10">clearly worthwhile</text>
      <line x1="450" y1="140" x2="690" y2="140" stroke="currentColor" strokeWidth="2" />
      <line x1="450" y1="134" x2="450" y2="146" stroke="currentColor" strokeWidth="2" />
      <line x1="690" y1="134" x2="690" y2="146" stroke="currentColor" strokeWidth="2" />
      <circle cx="570" cy="140" r="5" fill="currentColor" />
      <text x="570" y="166" textAnchor="middle" fill="currentColor" fontSize="10">
        whole interval clears the band — even the cautious end is worth having
      </text>

      {/* Study B: informative null — estimate 0, CI −1.5 to +1.5 */}
      <text x="78" y="214" textAnchor="end" fill="currentColor" fontSize="13" fontWeight="bold">Study B</text>
      <text x="78" y="230" textAnchor="end" fill="currentColor" fontSize="10">informative null</text>
      <line x1="270" y1="220" x2="390" y2="220" stroke="currentColor" strokeWidth="2" />
      <line x1="270" y1="214" x2="270" y2="226" stroke="currentColor" strokeWidth="2" />
      <line x1="390" y1="214" x2="390" y2="226" stroke="currentColor" strokeWidth="2" />
      <circle cx="330" cy="220" r="5" fill="currentColor" />
      <text x="330" y="246" textAnchor="middle" fill="currentColor" fontSize="10">
        narrow, hugging zero — rules out any worthwhile effect
      </text>

      {/* Study C: significant but trivial — estimate +1.0, CI +0.2 to +1.8 */}
      <text x="78" y="294" textAnchor="end" fill="currentColor" fontSize="13" fontWeight="bold">Study C</text>
      <text x="78" y="310" textAnchor="end" fill="currentColor" fontSize="10">significant but trivial</text>
      <line x1="338" y1="300" x2="402" y2="300" stroke="currentColor" strokeWidth="2" />
      <line x1="338" y1="294" x2="338" y2="306" stroke="currentColor" strokeWidth="2" />
      <line x1="402" y1="294" x2="402" y2="306" stroke="currentColor" strokeWidth="2" />
      <circle cx="370" cy="300" r="5" fill="currentColor" />
      <text x="370" y="326" textAnchor="middle" fill="currentColor" fontSize="10">
        excludes zero (p &lt; 0.05), yet sits entirely inside the band
      </text>

      {/* axis */}
      <line x1="90" y1="350" x2="730" y2="350" stroke="currentColor" strokeWidth="1.5" />
      <line x1="170" y1="350" x2="170" y2="356" stroke="currentColor" strokeWidth="1.5" />
      <line x1="250" y1="350" x2="250" y2="356" stroke="currentColor" strokeWidth="1.5" />
      <line x1="330" y1="350" x2="330" y2="356" stroke="currentColor" strokeWidth="1.5" />
      <line x1="410" y1="350" x2="410" y2="356" stroke="currentColor" strokeWidth="1.5" />
      <line x1="490" y1="350" x2="490" y2="356" stroke="currentColor" strokeWidth="1.5" />
      <line x1="570" y1="350" x2="570" y2="356" stroke="currentColor" strokeWidth="1.5" />
      <line x1="650" y1="350" x2="650" y2="356" stroke="currentColor" strokeWidth="1.5" />
      <text x="170" y="372" textAnchor="middle" fill="currentColor" fontSize="11">−4</text>
      <text x="250" y="372" textAnchor="middle" fill="currentColor" fontSize="11">−2</text>
      <text x="330" y="372" textAnchor="middle" fill="currentColor" fontSize="11">0</text>
      <text x="410" y="372" textAnchor="middle" fill="currentColor" fontSize="11">+2</text>
      <text x="490" y="372" textAnchor="middle" fill="currentColor" fontSize="11">+4</text>
      <text x="570" y="372" textAnchor="middle" fill="currentColor" fontSize="11">+6</text>
      <text x="650" y="372" textAnchor="middle" fill="currentColor" fontSize="11">+8</text>
      <text x="330" y="388" textAnchor="middle" fill="currentColor" fontSize="10">no effect</text>
      <text x="410" y="412" textAnchor="middle" fill="currentColor" fontSize="12">
        Difference vs control (kg) — point estimate with 95% CI
      </text>
    </svg>
  );
}
