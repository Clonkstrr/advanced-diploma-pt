// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function ConfoundingTriangle() {
  return (
    <svg
      role="img"
      viewBox="0 0 760 470"
      width="100%"
      aria-labelledby="cft-title"
      className="diagram"
    >
      <title id="cft-title">
        Confounding triangle: health-conscious behaviour drives both supplement use and better
        results, creating a correlation that is not causal
      </title>
      <defs>
        <marker id="cft-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* confounder (top) */}
      <rect x="230" y="18" width="300" height="92" rx="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="380" y="44" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="2">CONFOUNDER</text>
      <text x="380" y="66" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">
        Health-conscious behaviour
      </text>
      <text x="380" y="88" textAnchor="middle" fill="currentColor" fontSize="11">
        trains consistently · sleeps well · eats better · sees a doctor
      </text>

      {/* exposure (bottom left) */}
      <rect x="30" y="330" width="240" height="84" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="150" y="356" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="2">EXPOSURE</text>
      <text x="150" y="378" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">
        Takes supplement X
      </text>
      <text x="150" y="398" textAnchor="middle" fill="currentColor" fontSize="11">
        the thing being credited
      </text>

      {/* outcome (bottom right) */}
      <rect x="490" y="330" width="240" height="84" rx="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="610" y="356" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="2">OUTCOME</text>
      <text x="610" y="378" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">
        Better results, better health
      </text>
      <text x="610" y="398" textAnchor="middle" fill="currentColor" fontSize="11">
        the improvement you observe
      </text>

      {/* confounder -> exposure */}
      <line x1="295" y1="110" x2="170" y2="326" stroke="currentColor" strokeWidth="2" markerEnd="url(#cft-arrow)" />
      <text x="182" y="214" textAnchor="end" fill="currentColor" fontSize="12" fontStyle="italic">drives</text>

      {/* confounder -> outcome */}
      <line x1="465" y1="110" x2="590" y2="326" stroke="currentColor" strokeWidth="2" markerEnd="url(#cft-arrow)" />
      <text x="580" y="214" textAnchor="start" fill="currentColor" fontSize="12" fontStyle="italic">also drives</text>

      {/* the observed (non-causal) association */}
      <line x1="280" y1="372" x2="486" y2="372" stroke="currentColor" strokeWidth="1.5"
        strokeDasharray="7 6" markerStart="url(#cft-arrow)" markerEnd="url(#cft-arrow)" />
      <text x="383" y="356" textAnchor="middle" fill="currentColor" fontSize="12">the correlation you see</text>
      <text x="383" y="392" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        not necessarily causal
      </text>

      {/* how randomization intervenes */}
      <text x="380" y="444" textAnchor="middle" fill="currentColor" fontSize="12">
        Randomization cuts the confounder→exposure arrow: a coin flip decides who takes the supplement,
      </text>
      <text x="380" y="462" textAnchor="middle" fill="currentColor" fontSize="12">
        so health-conscious people land in both groups — and the dashed line collapses to the supplement’s true effect.
      </text>
    </svg>
  );
}
