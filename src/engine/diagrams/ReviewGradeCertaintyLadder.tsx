// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
// Top half: where GRADE starts each design and what moves it up or down a rung.
// Bottom half: the second dial. Recommendation strength is not certainty, and
// all four combinations are legitimate, which is where guidelines get misquoted.
export function ReviewGradeCertaintyLadder() {
  return (
    <svg
      role="img"
      viewBox="0 0 760 560"
      width="100%"
      aria-labelledby="rgcl-title"
      className="diagram"
    >
      <title id="rgcl-title">
        The GRADE certainty ladder with four rungs from high to very low, showing
        randomised trials starting at high and observational studies at low, the
        five problems that mark evidence down and the two conditions that mark it
        up, and a grid showing recommendation strength as an independent dial
      </title>
      <defs>
        <marker id="rgcl-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="380" y="26" textAnchor="middle" fill="currentColor" fontSize="13">
        Certainty of evidence: where it starts, and what moves it
      </text>

      {/* the four rungs */}
      <rect x="268" y="52" width="224" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="77" textAnchor="middle" fill="currentColor" fontSize="13">High certainty</text>
      <rect x="268" y="106" width="224" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="131" textAnchor="middle" fill="currentColor" fontSize="13">Moderate certainty</text>
      <rect x="268" y="160" width="224" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="185" textAnchor="middle" fill="currentColor" fontSize="13">Low certainty</text>
      <rect x="268" y="214" width="224" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="239" textAnchor="middle" fill="currentColor" fontSize="13">Very low certainty</text>

      {/* where each design enters the ladder */}
      <rect x="20" y="52" width="196" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="118" y="70" textAnchor="middle" fill="currentColor" fontSize="12">Randomised trials</text>
      <text x="118" y="86" textAnchor="middle" fill="currentColor" fontSize="11">start here</text>
      <line x1="216" y1="72" x2="262" y2="72" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#rgcl-arrow)" />

      <rect x="20" y="160" width="196" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="118" y="178" textAnchor="middle" fill="currentColor" fontSize="12">Observational studies</text>
      <text x="118" y="194" textAnchor="middle" fill="currentColor" fontSize="11">start here</text>
      <line x1="216" y1="180" x2="262" y2="180" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#rgcl-arrow)" />

      {/* the two ways observational evidence climbs */}
      <rect x="20" y="222" width="196" height="64" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="118" y="242" textAnchor="middle" fill="currentColor" fontSize="11">Climbs a rung for</text>
      <text x="118" y="258" textAnchor="middle" fill="currentColor" fontSize="11">a very large effect, or</text>
      <text x="118" y="274" textAnchor="middle" fill="currentColor" fontSize="11">a clear dose response</text>
      <line x1="234" y1="266" x2="234" y2="200" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#rgcl-arrow)" />

      {/* the five downgrades */}
      <line x1="506" y1="62" x2="506" y2="248" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#rgcl-arrow)" />
      <rect x="522" y="52" width="228" height="204" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="536" y="76" fill="currentColor" fontSize="12">Mark down a rung for each</text>
      <text x="536" y="102" fill="currentColor" fontSize="11">Risk of bias: how trials were run</text>
      <text x="536" y="128" fill="currentColor" fontSize="11">Inconsistency: the trials disagree</text>
      <text x="536" y="154" fill="currentColor" fontSize="11">Indirectness: wrong people/outcome</text>
      <text x="536" y="180" fill="currentColor" fontSize="11">Imprecision: wide, few participants</text>
      <text x="536" y="206" fill="currentColor" fontSize="11">Publication bias: null trials gone</text>
      <text x="536" y="232" fill="currentColor" fontSize="11" opacity="0.8">A serious problem costs two rungs.</text>

      <line x1="20" y1="300" x2="740" y2="300" stroke="currentColor" strokeWidth="1" opacity="0.4" />

      {/* the second dial */}
      <text x="380" y="326" textAnchor="middle" fill="currentColor" fontSize="13">
        The second dial: how firmly the panel recommends it
      </text>

      <rect x="210" y="346" width="260" height="80" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="340" y="378" textAnchor="middle" fill="currentColor" fontSize="12">Weak: consider it</text>
      <text x="340" y="400" textAnchor="middle" fill="currentColor" fontSize="11">the effect is real but small, or</text>
      <text x="340" y="416" textAnchor="middle" fill="currentColor" fontSize="11">it comes down to what she values</text>

      <rect x="470" y="346" width="260" height="80" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="600" y="378" textAnchor="middle" fill="currentColor" fontSize="12">Strong: do it</text>
      <text x="600" y="400" textAnchor="middle" fill="currentColor" fontSize="11">clear benefit, low cost,</text>
      <text x="600" y="416" textAnchor="middle" fill="currentColor" fontSize="11">little to weigh against it</text>

      <rect x="210" y="430" width="260" height="80" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="340" y="462" textAnchor="middle" fill="currentColor" fontSize="12">Weak: case by case</text>
      <text x="340" y="484" textAnchor="middle" fill="currentColor" fontSize="11">the evidence is genuinely thin,</text>
      <text x="340" y="500" textAnchor="middle" fill="currentColor" fontSize="11">so the choice stays open</text>

      <rect x="470" y="430" width="260" height="80" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="600" y="462" textAnchor="middle" fill="currentColor" fontSize="12">Strong: do it anyway</text>
      <text x="600" y="484" textAnchor="middle" fill="currentColor" fontSize="11">the harm of waiting outweighs</text>
      <text x="600" y="500" textAnchor="middle" fill="currentColor" fontSize="11">what we still do not know</text>

      <text x="200" y="390" textAnchor="end" fill="currentColor" fontSize="11">High certainty</text>
      <text x="200" y="474" textAnchor="end" fill="currentColor" fontSize="11">Lower certainty</text>
      <text x="340" y="532" textAnchor="middle" fill="currentColor" fontSize="11">weak recommendation</text>
      <text x="600" y="532" textAnchor="middle" fill="currentColor" fontSize="11">strong recommendation</text>
    </svg>
  );
}
