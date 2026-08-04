// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function BiasRegressionToMean() {
  return (
    <svg
      role="img"
      viewBox="0 0 860 510"
      width="100%"
      aria-labelledby="brm-title"
      className="diagram"
    >
      <title id="brm-title">
        A client rating her knee pain out of ten every Monday for fourteen weeks. The readings
        bounce around a usual level of about five. In week eight the reading spikes to nine, the
        worst it has ever been, and that is the week she buys a massage gun. By week nine the
        reading is back to five, which is what an extreme reading usually does next whether or not
        anything was bought. Circled numbers 1 to 4 mark the four notes listed beneath the figure.
      </title>

      <text x="430" y="26" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.6">
        AN EXTREME READING IS ALMOST ALWAYS FOLLOWED BY A MILDER ONE
      </text>

      <text x="110" y="74" fill="currentColor" fontSize="11">
        her knee pain, rated 0 to 10, every Monday for fourteen weeks
      </text>

      {/* the zone people act from */}
      <rect x="110" y="90" width="690" height="52" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="5 5" opacity="0.55" />
      <text x="794" y="110" textAnchor="end" fill="currentColor" fontSize="11" letterSpacing="1.2">
        THE ZONE PEOPLE BUY FROM
      </text>

      {/* axes */}
      <line x1="110" y1="84" x2="110" y2="350" stroke="currentColor" strokeWidth="1.2" />
      <line x1="110" y1="350" x2="806" y2="350" stroke="currentColor" strokeWidth="1.2" />
      <text x="100" y="94" textAnchor="end" fill="currentColor" fontSize="11">10</text>
      <text x="100" y="146" textAnchor="end" fill="currentColor" fontSize="11">8</text>
      <text x="100" y="198" textAnchor="end" fill="currentColor" fontSize="11">6</text>
      <text x="100" y="250" textAnchor="end" fill="currentColor" fontSize="11">4</text>
      <text x="100" y="302" textAnchor="end" fill="currentColor" fontSize="11">2</text>
      <text x="100" y="354" textAnchor="end" fill="currentColor" fontSize="11">0</text>

      {/* her usual level */}
      <line x1="110" y1="215" x2="800" y2="215" stroke="currentColor" strokeWidth="1.4" strokeDasharray="8 6" />
      <text x="806" y="212" fill="currentColor" fontSize="11">her usual</text>
      <text x="806" y="228" fill="currentColor" fontSize="11">level</text>
      <circle cx="68" cy="215" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="68" y="219" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      <line x1="78" y1="215" x2="106" y2="215" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      {/* the fourteen readings */}
      <polyline
        points="110,220 162,194 214,246 266,194 318,246 370,168 422,246 474,116 526,220 578,246 630,194 682,246 734,220 786,246"
        fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="110" cy="220" r="3.5" fill="currentColor" />
      <circle cx="162" cy="194" r="3.5" fill="currentColor" />
      <circle cx="214" cy="246" r="3.5" fill="currentColor" />
      <circle cx="266" cy="194" r="3.5" fill="currentColor" />
      <circle cx="318" cy="246" r="3.5" fill="currentColor" />
      <circle cx="370" cy="168" r="3.5" fill="currentColor" />
      <circle cx="422" cy="246" r="3.5" fill="currentColor" />
      <circle cx="474" cy="116" r="4.5" fill="currentColor" />
      <circle cx="526" cy="220" r="3.5" fill="currentColor" />
      <circle cx="578" cy="246" r="3.5" fill="currentColor" />
      <circle cx="630" cy="194" r="3.5" fill="currentColor" />
      <circle cx="682" cy="246" r="3.5" fill="currentColor" />
      <circle cx="734" cy="220" r="3.5" fill="currentColor" />
      <circle cx="786" cy="246" r="3.5" fill="currentColor" />

      {/* the extreme week */}
      <line x1="466" y1="112" x2="336" y2="106" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <text x="330" y="110" textAnchor="end" fill="currentColor" fontSize="11">
        9 out of 10: the worst week she has had
      </text>
      <circle cx="474" cy="80" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="474" y="84" textAnchor="middle" fill="currentColor" fontSize="11">2</text>
      <line x1="474" y1="122" x2="474" y2="346" stroke="currentColor" strokeWidth="1"
        strokeDasharray="3 5" opacity="0.7" />

      {/* the rebound, and who gets credited */}
      <circle cx="534" cy="152" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="534" y="156" textAnchor="middle" fill="currentColor" fontSize="11">3</text>
      <text x="552" y="152" fill="currentColor" fontSize="11">One week later she is back to 5.</text>
      <text x="552" y="170" fill="currentColor" fontSize="11">The massage gun collects the credit.</text>

      {/* week labels */}
      <line x1="110" y1="350" x2="110" y2="356" stroke="currentColor" strokeWidth="1" />
      <line x1="474" y1="350" x2="474" y2="356" stroke="currentColor" strokeWidth="1" />
      <line x1="786" y1="350" x2="786" y2="356" stroke="currentColor" strokeWidth="1" />
      <text x="110" y="372" textAnchor="middle" fill="currentColor" fontSize="11">week 1</text>
      <text x="474" y="372" textAnchor="middle" fill="currentColor" fontSize="11">week 8: she buys the massage gun</text>
      <text x="786" y="372" textAnchor="middle" fill="currentColor" fontSize="11">week 14</text>

      {/* the reading of it */}
      <text x="430" y="410" textAnchor="middle" fill="currentColor" fontSize="11">
        Every reading is her real pain level plus a bit of luck, and the luck does not repeat.
      </text>
      <text x="430" y="430" textAnchor="middle" fill="currentColor" fontSize="11">
        So a reading at the far edge is nearly always followed by a milder one, whatever happens in between.
      </text>
      <text x="430" y="456" textAnchor="middle" fill="currentColor" fontSize="11">
        She acted in week 8 because week 8 was the worst it had ever been. That is exactly the week improvement was most likely to follow.
      </text>
      <circle cx="68" cy="478" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="68" y="482" textAnchor="middle" fill="currentColor" fontSize="11">4</text>
      <text x="430" y="482" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        Judge a method against the trend across months, not against the drop that follows the worst week of the year.
      </text>
    </svg>
  );
}
