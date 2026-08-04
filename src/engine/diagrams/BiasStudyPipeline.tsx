// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function BiasStudyPipeline() {
  return (
    <svg
      role="img"
      viewBox="0 0 880 660"
      width="100%"
      aria-labelledby="bsp-title"
      className="diagram"
    >
      <title id="bsp-title">
        The path a study takes, from the whole population, through who gets invited, what gets
        measured, who is still there at the end and which results get written up, to what you get
        to read. Beside each stage sits the bias that enters there: selection bias at recruitment,
        recall bias at measurement, attrition bias at the end of the study and publication bias at
        the journal. A band underneath shows funding leaning on every stage. Circled numbers 1 to 4
        mark the four notes listed beneath the figure.
      </title>
      <defs>
        <marker id="bsp-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="440" y="26" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.6">
        WHERE THE TILT ENTERS, FROM RECRUITMENT TO PUBLISHED RESULT
      </text>
      <text x="200" y="54" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        THE PATH A STUDY TAKES
      </text>
      <text x="610" y="54" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        WHAT ENTERS THERE
      </text>

      {/* ── stage 1 ───────────────────────────────────────────────────── */}
      <rect x="60" y="70" width="280" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="200" y="96" textAnchor="middle" fill="currentColor" fontSize="12">Everyone the question is about</text>
      <text x="200" y="116" textAnchor="middle" fill="currentColor" fontSize="11">every recreational lifter, say</text>
      <line x1="200" y1="134" x2="200" y2="154" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#bsp-arrow)" />

      {/* ── stage 2: selection ────────────────────────────────────────── */}
      <rect x="60" y="158" width="280" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="200" y="184" textAnchor="middle" fill="currentColor" fontSize="12">Who gets invited, and who agrees</text>
      <text x="200" y="204" textAnchor="middle" fill="currentColor" fontSize="11">the sample that actually exists</text>
      <line x1="200" y1="222" x2="200" y2="242" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#bsp-arrow)" />

      <rect x="360" y="158" width="500" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="358" y1="190" x2="344" y2="190" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#bsp-arrow)" />
      <circle cx="838" cy="176" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="838" y="180" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      <text x="378" y="182" fill="currentColor" fontSize="11" letterSpacing="1.4">SELECTION BIAS</text>
      <text x="378" y="200" fill="currentColor" fontSize="11">Posters in a powerlifting gym recruit people who already train</text>
      <text x="378" y="216" fill="currentColor" fontSize="11">heavy. The deconditioned 55-year-old was never going to be in it.</text>

      {/* ── stage 3: measurement ──────────────────────────────────────── */}
      <rect x="60" y="246" width="280" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="200" y="272" textAnchor="middle" fill="currentColor" fontSize="12">What gets measured, and how</text>
      <text x="200" y="292" textAnchor="middle" fill="currentColor" fontSize="11">questionnaires, diaries, memory</text>
      <line x1="200" y1="310" x2="200" y2="330" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#bsp-arrow)" />

      <rect x="360" y="246" width="500" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="358" y1="278" x2="344" y2="278" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#bsp-arrow)" />
      <circle cx="838" cy="264" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="838" y="268" textAnchor="middle" fill="currentColor" fontSize="11">2</text>
      <text x="378" y="270" fill="currentColor" fontSize="11" letterSpacing="1.4">RECALL BIAS</text>
      <text x="378" y="288" fill="currentColor" fontSize="11">Everyone under-reports what they ate last month, and the people with</text>
      <text x="378" y="304" fill="currentColor" fontSize="11">a problem search their memory harder than the people without one.</text>

      {/* ── stage 4: attrition ────────────────────────────────────────── */}
      <rect x="60" y="334" width="280" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="200" y="360" textAnchor="middle" fill="currentColor" fontSize="12">Who is still there at the end</text>
      <text x="200" y="380" textAnchor="middle" fill="currentColor" fontSize="11">and who quietly stopped coming</text>
      <line x1="200" y1="398" x2="200" y2="418" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#bsp-arrow)" />

      <rect x="360" y="334" width="500" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="358" y1="366" x2="344" y2="366" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#bsp-arrow)" />
      <circle cx="838" cy="352" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="838" y="356" textAnchor="middle" fill="currentColor" fontSize="11">3</text>
      <text x="378" y="358" fill="currentColor" fontSize="11" letterSpacing="1.4">ATTRITION BIAS</text>
      <text x="378" y="376" fill="currentColor" fontSize="11">The people a diet is failing stop turning up, so counting only the</text>
      <text x="378" y="392" fill="currentColor" fontSize="11">finishers flatters it. The fix is to count everyone who was randomized.</text>

      {/* ── stage 5: publication ──────────────────────────────────────── */}
      <rect x="60" y="422" width="280" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="200" y="448" textAnchor="middle" fill="currentColor" fontSize="12">Which results get written up</text>
      <text x="200" y="468" textAnchor="middle" fill="currentColor" fontSize="11">and offered to a journal</text>
      <line x1="200" y1="486" x2="200" y2="506" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#bsp-arrow)" />

      <rect x="360" y="422" width="500" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="358" y1="454" x2="344" y2="454" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#bsp-arrow)" />
      <circle cx="838" cy="440" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="838" y="444" textAnchor="middle" fill="currentColor" fontSize="11">4</text>
      <text x="378" y="446" fill="currentColor" fontSize="11" letterSpacing="1.4">PUBLICATION BIAS</text>
      <text x="378" y="464" fill="currentColor" fontSize="11">Positive results get written up. Null results sit in file drawers, so</text>
      <text x="378" y="480" fill="currentColor" fontSize="11">what you can read is sunnier than the research that was actually done.</text>

      {/* ── stage 6 ───────────────────────────────────────────────────── */}
      <rect x="60" y="510" width="280" height="64" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="200" y="536" textAnchor="middle" fill="currentColor" fontSize="12">What you get to read</text>
      <text x="200" y="556" textAnchor="middle" fill="currentColor" fontSize="11">every tilt above is already inside it</text>

      {/* ── funding runs underneath the whole path ────────────────────── */}
      <rect x="60" y="592" width="800" height="52" rx="8" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="460" y="614" textAnchor="middle" fill="currentColor" fontSize="12">
        WHO PAID FOR IT leans on every stage above
      </text>
      <text x="460" y="632" textAnchor="middle" fill="currentColor" fontSize="11">
        the question asked, the comparison chosen, and whether a disappointing result is ever submitted
      </text>

      <path d="M 60 618 L 34 618 L 34 100" fill="none" stroke="currentColor" strokeWidth="1.3"
        strokeDasharray="6 5" markerEnd="url(#bsp-arrow)" />
      <line x1="34" y1="190" x2="56" y2="190" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
      <line x1="34" y1="278" x2="56" y2="278" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
      <line x1="34" y1="366" x2="56" y2="366" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
      <line x1="34" y1="454" x2="56" y2="454" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
    </svg>
  );
}
