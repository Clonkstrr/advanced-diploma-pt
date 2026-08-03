// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function ClaimEvaluationPipeline() {
  return (
    <svg
      role="img"
      viewBox="0 0 760 548"
      width="100%"
      aria-labelledby="cep-title"
      className="diagram"
    >
      <title id="cep-title">
        Claim evaluation pipeline: from a claim, through what is claimed and what
        evidence backs it, to a verdict of adopt, trial cautiously, or ignore
      </title>
      <defs>
        <marker id="cep-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* start */}
      <rect x="250" y="10" width="260" height="40" rx="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="35" textAnchor="middle" fill="currentColor" fontSize="14">
        A claim lands: post, label, or client question
      </text>
      <line x1="380" y1="50" x2="380" y2="74" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#cep-arrow)" />

      {/* step 1 */}
      <rect x="190" y="78" width="380" height="52" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="101" textAnchor="middle" fill="currentColor" fontSize="14">
        1 · What exactly is being claimed?
      </text>
      <text x="380" y="120" textAnchor="middle" fill="currentColor" fontSize="11">
        mechanism (“activates mTOR”) vs outcome (“adds 5 kg of muscle”)
      </text>
      <line x1="380" y1="130" x2="380" y2="154" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#cep-arrow)" />

      {/* step 2 */}
      <rect x="190" y="158" width="380" height="52" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="181" textAnchor="middle" fill="currentColor" fontSize="14">
        2 · What kind of evidence backs it?
      </text>
      <text x="380" y="200" textAnchor="middle" fill="currentColor" fontSize="11">
        and does that evidence test the outcome, or only the mechanism?
      </text>

      {/* fan-out to the four evidence types */}
      <line x1="380" y1="210" x2="380" y2="232" stroke="currentColor" strokeWidth="1.5" />
      <line x1="94" y1="232" x2="658" y2="232" stroke="currentColor" strokeWidth="1.5" />
      <line x1="94" y1="232" x2="94" y2="248" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#cep-arrow)" />
      <line x1="282" y1="232" x2="282" y2="248" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#cep-arrow)" />
      <line x1="470" y1="232" x2="470" y2="248" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#cep-arrow)" />
      <line x1="658" y1="232" x2="658" y2="248" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#cep-arrow)" />

      <rect x="8" y="252" width="172" height="76" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="94" y="276" textAnchor="middle" fill="currentColor" fontSize="13">Mechanism only</text>
      <text x="94" y="296" textAnchor="middle" fill="currentColor" fontSize="11">cells, rodents,</text>
      <text x="94" y="312" textAnchor="middle" fill="currentColor" fontSize="11">a pathway diagram</text>

      <rect x="196" y="252" width="172" height="76" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="282" y="276" textAnchor="middle" fill="currentColor" fontSize="13">Anecdote</text>
      <text x="282" y="296" textAnchor="middle" fill="currentColor" fontSize="11">testimonials, before</text>
      <text x="282" y="312" textAnchor="middle" fill="currentColor" fontSize="11">and after photos</text>

      <rect x="384" y="252" width="172" height="76" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="470" y="276" textAnchor="middle" fill="currentColor" fontSize="13">Human trials</text>
      <text x="470" y="296" textAnchor="middle" fill="currentColor" fontSize="11">controlled, measured</text>
      <text x="470" y="312" textAnchor="middle" fill="currentColor" fontSize="11">outcomes, in people</text>

      <rect x="572" y="252" width="172" height="76" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="658" y="276" textAnchor="middle" fill="currentColor" fontSize="13">Synthesis</text>
      <text x="658" y="296" textAnchor="middle" fill="currentColor" fontSize="11">review, meta-analysis,</text>
      <text x="658" y="312" textAnchor="middle" fill="currentColor" fontSize="11">position stand</text>

      {/* strength axis */}
      <line x1="94" y1="346" x2="658" y2="346" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#cep-arrow)" />
      <text x="380" y="366" textAnchor="middle" fill="currentColor" fontSize="11">
        weaker → stronger as support for an outcome claim
      </text>

      <line x1="380" y1="372" x2="380" y2="396" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#cep-arrow)" />

      {/* step 3 */}
      <rect x="170" y="400" width="420" height="52" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="423" textAnchor="middle" fill="currentColor" fontSize="14">
        3 · How big is the effect — and in whom?
      </text>
      <text x="380" y="442" textAnchor="middle" fill="currentColor" fontSize="11">
        effect size · who was studied · cost, risk, adherence for THIS client
      </text>

      {/* fan-out to verdicts */}
      <line x1="380" y1="452" x2="380" y2="464" stroke="currentColor" strokeWidth="1.5" />
      <line x1="130" y1="464" x2="630" y2="464" stroke="currentColor" strokeWidth="1.5" />
      <line x1="130" y1="464" x2="130" y2="474" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#cep-arrow)" />
      <line x1="380" y1="464" x2="380" y2="474" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#cep-arrow)" />
      <line x1="630" y1="464" x2="630" y2="474" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#cep-arrow)" />

      <rect x="20" y="478" width="220" height="58" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="130" y="502" textAnchor="middle" fill="currentColor" fontSize="13">Ignore</text>
      <text x="130" y="521" textAnchor="middle" fill="currentColor" fontSize="11">mechanism or anecdote only</text>

      <rect x="270" y="478" width="220" height="58" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="502" textAnchor="middle" fill="currentColor" fontSize="13">Trial cautiously</text>
      <text x="380" y="521" textAnchor="middle" fill="currentColor" fontSize="11">small or mixed effect · measure it</text>

      <rect x="520" y="478" width="220" height="58" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="630" y="502" textAnchor="middle" fill="currentColor" fontSize="13">Adopt</text>
      <text x="630" y="521" textAnchor="middle" fill="currentColor" fontSize="11">consistent trials · worth the cost</text>
    </svg>
  );
}
