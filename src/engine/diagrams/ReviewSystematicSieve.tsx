// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
// Invented but internally consistent counts for one systematic review: every
// study that leaves the funnel is counted and given a reason, which is the
// whole point of printing the flow at all.
export function ReviewSystematicSieve() {
  return (
    <svg
      role="img"
      viewBox="0 0 760 560"
      width="100%"
      aria-labelledby="rss-title"
      className="diagram"
    >
      <title id="rss-title">
        How a systematic review is assembled: raw search hits narrowing stage by stage
        through duplicate removal, title and abstract screening and full paper reading,
        with the number and the reason for every exclusion, down to the trials pooled
        into the meta-analysis
      </title>
      <defs>
        <marker id="rss-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* stage 1: the raw search */}
      <rect x="60" y="16" width="360" height="54" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="240" y="39" textAnchor="middle" fill="currentColor" fontSize="13">Records found by the documented search</text>
      <text x="240" y="58" textAnchor="middle" fill="currentColor" fontSize="11">4,812 hits · 4 databases · 1990 to 2022</text>
      <line x1="240" y1="70" x2="240" y2="108" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#rss-arrow)" />
      <line x1="240" y1="88" x2="444" y2="88" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#rss-arrow)" />

      <rect x="452" y="64" width="296" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="600" y="86" textAnchor="middle" fill="currentColor" fontSize="12">Duplicates removed: 1,647</text>
      <text x="600" y="104" textAnchor="middle" fill="currentColor" fontSize="11">one trial indexed in three databases</text>

      {/* stage 2: title and abstract screening */}
      <rect x="60" y="112" width="360" height="54" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="240" y="135" textAnchor="middle" fill="currentColor" fontSize="13">Titles and abstracts screened</text>
      <text x="240" y="154" textAnchor="middle" fill="currentColor" fontSize="11">3,165 unique records · two readers, independently</text>
      <line x1="240" y1="166" x2="240" y2="204" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#rss-arrow)" />
      <line x1="240" y1="184" x2="444" y2="184" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#rss-arrow)" />

      <rect x="452" y="148" width="296" height="72" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="600" y="170" textAnchor="middle" fill="currentColor" fontSize="12">Excluded on title and abstract: 2,988</text>
      <text x="600" y="190" textAnchor="middle" fill="currentColor" fontSize="11">wrong population · not a trial</text>
      <text x="600" y="208" textAnchor="middle" fill="currentColor" fontSize="11">outcome of interest never measured</text>

      {/* stage 3: full papers */}
      <rect x="60" y="208" width="360" height="54" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="240" y="231" textAnchor="middle" fill="currentColor" fontSize="13">Full papers read end to end</text>
      <text x="240" y="250" textAnchor="middle" fill="currentColor" fontSize="11">177 retrieved</text>
      <line x1="240" y1="262" x2="240" y2="300" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#rss-arrow)" />
      <line x1="240" y1="280" x2="444" y2="280" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#rss-arrow)" />

      <rect x="452" y="236" width="296" height="92" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="600" y="258" textAnchor="middle" fill="currentColor" fontSize="12">Excluded after reading: 149</text>
      <text x="600" y="278" textAnchor="middle" fill="currentColor" fontSize="11">no control group 61 · outcome missing 48</text>
      <text x="600" y="296" textAnchor="middle" fill="currentColor" fontSize="11">data not usable 27 · same cohort twice 13</text>
      <text x="600" y="316" textAnchor="middle" fill="currentColor" fontSize="11">counted, and every reason printed</text>

      {/* stage 4: included */}
      <rect x="60" y="304" width="360" height="54" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="240" y="327" textAnchor="middle" fill="currentColor" fontSize="13">Studies included in the review</text>
      <text x="240" y="346" textAnchor="middle" fill="currentColor" fontSize="11">28</text>
      <line x1="240" y1="358" x2="240" y2="396" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#rss-arrow)" />
      <line x1="240" y1="376" x2="444" y2="376" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#rss-arrow)" />

      <rect x="452" y="348" width="296" height="64" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="600" y="370" textAnchor="middle" fill="currentColor" fontSize="12">Included but not pooled: 9</text>
      <text x="600" y="390" textAnchor="middle" fill="currentColor" fontSize="11">measured the outcome a different way</text>

      {/* stage 5: pooled */}
      <rect x="60" y="400" width="360" height="54" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="240" y="423" textAnchor="middle" fill="currentColor" fontSize="13">Trials pooled into the meta-analysis</text>
      <text x="240" y="442" textAnchor="middle" fill="currentColor" fontSize="11">19 · one diamond</text>

      <line x1="40" y1="470" x2="720" y2="470" stroke="currentColor" strokeWidth="1" opacity="0.4" />

      <text x="380" y="494" textAnchor="middle" fill="currentColor" fontSize="12">Read the bottom number against the top one.</text>
      <text x="380" y="516" textAnchor="middle" fill="currentColor" fontSize="11">4,812 down to 19 is ordinary. 4,812 down to 19 with no reasons printed is a paper hiding its working.</text>
      <text x="380" y="538" textAnchor="middle" fill="currentColor" fontSize="11">Every number here can be re-run by a stranger. That is what the word systematic buys you.</text>
    </svg>
  );
}
