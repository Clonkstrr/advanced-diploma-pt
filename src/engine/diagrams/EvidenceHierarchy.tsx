// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function EvidenceHierarchy() {
  return (
    <svg
      role="img"
      viewBox="0 0 760 460"
      width="100%"
      aria-labelledby="eh-title"
      className="diagram"
    >
      <title id="eh-title">
        Hierarchy of evidence pyramid, annotated as a starting heuristic: execution moves a study up or down, and applicability is judged separately
      </title>
      <defs>
        <marker id="eh-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* causal-claim axis */}
      <line x1="32" y1="388" x2="32" y2="56" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#eh-arrow)" />
      <text transform="rotate(-90 16 222)" x="16" y="222" textAnchor="middle" fill="currentColor" fontSize="11">
        stronger causal claims possible
      </text>

      {/* pyramid bands, top to bottom */}
      <polygon points="250,48 282,106 218,106" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="218,106 282,106 313,164 187,164" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="187,164 313,164 345,222 155,222" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="155,222 345,222 377,280 123,280" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="123,280 377,280 408,338 92,338" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="92,338 408,338 440,396 60,396" fill="none" stroke="currentColor" strokeWidth="1.5" />

      {/* top two bands are too narrow for inline labels: leader lines to the left */}
      <text x="185" y="78" textAnchor="end" fill="currentColor" fontSize="11">Systematic reviews</text>
      <text x="185" y="92" textAnchor="end" fill="currentColor" fontSize="11">&amp; meta-analyses</text>
      <line x1="190" y1="86" x2="224" y2="97" stroke="currentColor" strokeWidth="1" />
      <text x="170" y="128" textAnchor="end" fill="currentColor" fontSize="11">Randomized</text>
      <text x="170" y="142" textAnchor="end" fill="currentColor" fontSize="11">controlled trials</text>
      <line x1="175" y1="135" x2="200" y2="135" stroke="currentColor" strokeWidth="1" />

      {/* lower band labels */}
      <text x="250" y="197" textAnchor="middle" fill="currentColor" fontSize="12">Cohort studies</text>
      <text x="250" y="255" textAnchor="middle" fill="currentColor" fontSize="12">Case-control studies</text>
      <text x="250" y="313" textAnchor="middle" fill="currentColor" fontSize="12">Cross-sectional studies</text>
      <text x="250" y="371" textAnchor="middle" fill="currentColor" fontSize="12">Case reports &amp; expert opinion</text>

      {/* the twist: heuristic note */}
      <rect x="470" y="52" width="278" height="70" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="609" y="76" textAnchor="middle" fill="currentColor" fontSize="12.5" fontWeight="bold">
        A starting point, not a verdict
      </text>
      <text x="609" y="95" textAnchor="middle" fill="currentColor" fontSize="11">the levels rank designs;</text>
      <text x="609" y="110" textAnchor="middle" fill="currentColor" fontSize="11">execution ranks studies.</text>

      {/* a badly run RCT slides down */}
      <line x1="488" y1="150" x2="488" y2="268" stroke="currentColor" strokeWidth="1.5"
        strokeDasharray="6 5" markerEnd="url(#eh-arrow)" />
      <text x="500" y="188" fill="currentColor" fontSize="11">a small, unblinded,</text>
      <text x="500" y="203" fill="currentColor" fontSize="11">per-protocol-only RCT</text>
      <text x="500" y="218" fill="currentColor" fontSize="11">slides down the pyramid</text>

      {/* a well-run cohort climbs */}
      <line x1="655" y1="300" x2="655" y2="160" stroke="currentColor" strokeWidth="1.5"
        strokeDasharray="6 5" markerEnd="url(#eh-arrow)" />
      <text x="655" y="318" textAnchor="middle" fill="currentColor" fontSize="11">a large, careful cohort</text>
      <text x="655" y="333" textAnchor="middle" fill="currentColor" fontSize="11">with objective outcomes</text>
      <text x="655" y="348" textAnchor="middle" fill="currentColor" fontSize="11">climbs past it</text>

      {/* applicability is off-pyramid entirely */}
      <rect x="60" y="408" width="640" height="42" rx="8" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="380" y="425" textAnchor="middle" fill="currentColor" fontSize="11">
        Applicability never appears on the pyramid:
      </text>
      <text x="380" y="441" textAnchor="middle" fill="currentColor" fontSize="11">
        how close is the study&#8217;s population to YOUR client? That judgment is always yours.
      </text>
    </svg>
  );
}
