// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
// Five invented trials of one intervention (SMD scale), pooled under random effects.
export function ForestPlotAnatomy() {
  return (
    <svg
      role="img"
      viewBox="0 0 760 430"
      width="100%"
      aria-labelledby="fpa-title"
      className="diagram"
    >
      <title id="fpa-title">
        Annotated forest plot: five trials with point estimates sized by weight,
        confidence-interval whiskers, the line of no effect, and the pooled diamond
      </title>

      {/* column header */}
      <text x="40" y="76" fill="currentColor" fontSize="11" opacity="0.75">Study · n · weight</text>

      {/* line of no effect */}
      <line x1="460" y1="80" x2="460" y2="352" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 4" />
      <text x="466" y="90" fill="currentColor" fontSize="11" opacity="0.85">line of no effect (SMD 0)</text>

      {/* Study A — small, imprecise, wide CI crossing the line */}
      <text x="40" y="104" fill="currentColor" fontSize="12">Study A · n=15 · 7%</text>
      <line x1="452" y1="100" x2="692" y2="100" stroke="currentColor" strokeWidth="1.2" />
      <line x1="452" y1="96" x2="452" y2="104" stroke="currentColor" strokeWidth="1.2" />
      <line x1="692" y1="96" x2="692" y2="104" stroke="currentColor" strokeWidth="1.2" />
      <rect x="569" y="97" width="6" height="6" fill="currentColor" />

      {/* Study B — moderate size, CI clear of the line */}
      <text x="40" y="144" fill="currentColor" fontSize="12">Study B · n=42 · 18%</text>
      <line x1="463" y1="140" x2="601" y2="140" stroke="currentColor" strokeWidth="1.2" />
      <line x1="463" y1="136" x2="463" y2="144" stroke="currentColor" strokeWidth="1.2" />
      <line x1="601" y1="136" x2="601" y2="144" stroke="currentColor" strokeWidth="1.2" />
      <rect x="527" y="135" width="10" height="10" fill="currentColor" />

      {/* Study C — the disagreeing row, estimate left of the line */}
      <text x="40" y="184" fill="currentColor" fontSize="12">Study C · n=28 · 12%</text>
      <line x1="340" y1="180" x2="532" y2="180" stroke="currentColor" strokeWidth="1.2" />
      <line x1="340" y1="176" x2="340" y2="184" stroke="currentColor" strokeWidth="1.2" />
      <line x1="532" y1="176" x2="532" y2="184" stroke="currentColor" strokeWidth="1.2" />
      <rect x="432" y="176" width="8" height="8" fill="currentColor" />

      {/* Study D — the big trial that dominates the pool */}
      <text x="40" y="224" fill="currentColor" fontSize="12">Study D · n=120 · 41%</text>
      <line x1="466" y1="220" x2="543" y2="220" stroke="currentColor" strokeWidth="1.2" />
      <line x1="466" y1="216" x2="466" y2="224" stroke="currentColor" strokeWidth="1.2" />
      <line x1="543" y1="216" x2="543" y2="224" stroke="currentColor" strokeWidth="1.2" />
      <rect x="498" y="213" width="14" height="14" fill="currentColor" />

      {/* Study E — mid-sized, CI just crossing the line */}
      <text x="40" y="264" fill="currentColor" fontSize="12">Study E · n=55 · 22%</text>
      <line x1="457" y1="260" x2="575" y2="260" stroke="currentColor" strokeWidth="1.2" />
      <line x1="457" y1="256" x2="457" y2="264" stroke="currentColor" strokeWidth="1.2" />
      <line x1="575" y1="256" x2="575" y2="264" stroke="currentColor" strokeWidth="1.2" />
      <rect x="510" y="254" width="12" height="12" fill="currentColor" />

      {/* pooled diamond — width IS the confidence interval */}
      <text x="40" y="314" fill="currentColor" fontSize="12" fontWeight="bold">Pooled (random effects)</text>
      <polygon points="481,310 508,299 537,310 508,321" fill="currentColor" />
      <text x="40" y="332" fill="currentColor" fontSize="11" opacity="0.75">I² = 58% (moderate heterogeneity)</text>

      {/* axis */}
      <line x1="290" y1="352" x2="710" y2="352" stroke="currentColor" strokeWidth="1.2" />
      <line x1="300" y1="352" x2="300" y2="358" stroke="currentColor" strokeWidth="1.2" />
      <text x="300" y="372" textAnchor="middle" fill="currentColor" fontSize="11">−1.0</text>
      <line x1="380" y1="352" x2="380" y2="358" stroke="currentColor" strokeWidth="1.2" />
      <text x="380" y="372" textAnchor="middle" fill="currentColor" fontSize="11">−0.5</text>
      <line x1="460" y1="352" x2="460" y2="358" stroke="currentColor" strokeWidth="1.2" />
      <text x="460" y="372" textAnchor="middle" fill="currentColor" fontSize="11">0</text>
      <line x1="540" y1="352" x2="540" y2="358" stroke="currentColor" strokeWidth="1.2" />
      <text x="540" y="372" textAnchor="middle" fill="currentColor" fontSize="11">0.5</text>
      <line x1="620" y1="352" x2="620" y2="358" stroke="currentColor" strokeWidth="1.2" />
      <text x="620" y="372" textAnchor="middle" fill="currentColor" fontSize="11">1.0</text>
      <line x1="700" y1="352" x2="700" y2="358" stroke="currentColor" strokeWidth="1.2" />
      <text x="700" y="372" textAnchor="middle" fill="currentColor" fontSize="11">1.5</text>
      <text x="500" y="394" textAnchor="middle" fill="currentColor" fontSize="11">standardised mean difference</text>

      {/* favours labels */}
      <text x="448" y="416" textAnchor="end" fill="currentColor" fontSize="12">← favours control</text>
      <text x="472" y="416" fill="currentColor" fontSize="12">favours intervention →</text>
    </svg>
  );
}
