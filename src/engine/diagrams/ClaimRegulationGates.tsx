// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function ClaimRegulationGates() {
  return (
    <svg
      role="img"
      viewBox="0 0 760 516"
      width="100%"
      aria-labelledby="crg-title"
      className="diagram"
    >
      <title id="crg-title">
        Two routes to a shelf. A medicine passes four gates before sale: safety and dosing
        trials, trials that it works against a comparator, a regulator reading the whole file,
        and claims tied to the approved evidence. A supplement under food law passes none of
        them, with claims policed only after sale. Below, what a certified for sport logo checks
        and what it does not.
      </title>
      <defs>
        <marker id="crg-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* ── column headers ───────────────────────────────────────────── */}
      <rect x="16" y="8" width="352" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="192" y="33" textAnchor="middle" fill="currentColor" fontSize="14">
        A MEDICINE
      </text>

      <rect x="392" y="8" width="352" height="40" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="568" y="33" textAnchor="middle" fill="currentColor" fontSize="14">
        A SUPPLEMENT, UNDER FOOD LAW
      </text>

      {/* ── gate row 1 ───────────────────────────────────────────────── */}
      <rect x="16" y="66" width="352" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="192" y="88" textAnchor="middle" fill="currentColor" fontSize="12">Safety and dosing trials in people</text>
      <text x="192" y="106" textAnchor="middle" fill="currentColor" fontSize="11">run before anyone may sell it</text>

      <rect x="392" y="66" width="352" height="48" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="5 4" />
      <text x="568" y="88" textAnchor="middle" fill="currentColor" fontSize="12">No gate here</text>
      <text x="568" y="106" textAnchor="middle" fill="currentColor" fontSize="11">a food is presumed safe to eat</text>

      {/* ── gate row 2 ───────────────────────────────────────────────── */}
      <line x1="192" y1="114" x2="192" y2="126" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#crg-arrow)" />
      <rect x="16" y="128" width="352" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="192" y="150" textAnchor="middle" fill="currentColor" fontSize="12">Proof that it works, against a comparator</text>
      <text x="192" y="168" textAnchor="middle" fill="currentColor" fontSize="11">outcomes measured in patients</text>

      <rect x="392" y="128" width="352" height="48" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="5 4" />
      <text x="568" y="150" textAnchor="middle" fill="currentColor" fontSize="12">No gate here</text>
      <text x="568" y="168" textAnchor="middle" fill="currentColor" fontSize="11">no proof of effect is required</text>

      {/* ── gate row 3 ───────────────────────────────────────────────── */}
      <line x1="192" y1="176" x2="192" y2="188" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#crg-arrow)" />
      <rect x="16" y="190" width="352" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="192" y="212" textAnchor="middle" fill="currentColor" fontSize="12">A regulator reads the whole file</text>
      <text x="192" y="230" textAnchor="middle" fill="currentColor" fontSize="11">and is able to say no</text>

      <rect x="392" y="190" width="352" height="48" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="5 4" />
      <text x="568" y="212" textAnchor="middle" fill="currentColor" fontSize="12">No gate here</text>
      <text x="568" y="230" textAnchor="middle" fill="currentColor" fontSize="11">nobody reviews it before sale</text>

      {/* ── gate row 4 ───────────────────────────────────────────────── */}
      <line x1="192" y1="238" x2="192" y2="250" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#crg-arrow)" />
      <rect x="16" y="252" width="352" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="192" y="274" textAnchor="middle" fill="currentColor" fontSize="12">Only approved claims may be printed</text>
      <text x="192" y="292" textAnchor="middle" fill="currentColor" fontSize="11">each one tied to the evidence</text>

      <rect x="392" y="252" width="352" height="48" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="568" y="274" textAnchor="middle" fill="currentColor" fontSize="12">Claims policed after sale, unevenly</text>
      <text x="568" y="292" textAnchor="middle" fill="currentColor" fontSize="11">usually only once something is egregious</text>

      {/* ── the shelf ────────────────────────────────────────────────── */}
      <line x1="192" y1="300" x2="192" y2="316" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#crg-arrow)" />
      <line x1="568" y1="300" x2="568" y2="316" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#crg-arrow)" />

      <rect x="16" y="318" width="728" height="52" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="380" y="342" textAnchor="middle" fill="currentColor" fontSize="13">
        Both arrive on the same shelf, and to your client they look equally official.
      </text>
      <text x="380" y="361" textAnchor="middle" fill="currentColor" fontSize="11">
        What a product being on sale tells you is that a company decided to sell it. That is all.
      </text>

      {/* ── certification panel ──────────────────────────────────────── */}
      <rect x="16" y="386" width="728" height="118" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" />
      <text x="380" y="410" textAnchor="middle" fill="currentColor" fontSize="13">
        What a “certified for sport” logo adds to either route
      </text>

      <rect x="28" y="420" width="344" height="72" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="44" y="442" fill="currentColor" fontSize="12">It does check</text>
      <text x="44" y="462" fill="currentColor" fontSize="11">that this batch was screened for banned</text>
      <text x="44" y="478" fill="currentColor" fontSize="11">substances, and that the label matches the tub.</text>

      <rect x="388" y="420" width="344" height="72" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="404" y="442" fill="currentColor" fontSize="12">It does not check</text>
      <text x="404" y="462" fill="currentColor" fontSize="11">whether the product does anything at all.</text>
      <text x="404" y="478" fill="currentColor" fontSize="11">A certified fat burner is a clean fat burner.</text>
    </svg>
  );
}
