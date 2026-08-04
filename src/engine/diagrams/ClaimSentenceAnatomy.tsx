// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
// Each row label owns a clear horizontal band; the connector arrows start below
// that band so they never run through the lettering.
export function ClaimSentenceAnatomy() {
  return (
    <svg
      role="img"
      viewBox="0 0 760 424"
      width="100%"
      aria-labelledby="csa-title"
      className="diagram"
    >
      <title id="csa-title">
        One supplement marketing sentence cut into four fragments. Under each fragment,
        what the reader hears, and beneath that what the evidence actually supports:
        no regulator approval, a hidden dose, a two hour laboratory surrogate worth about
        36 kilocalories, and a physique that is a sample of one.
      </title>
      <defs>
        <marker id="csa-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="8" y="20" fill="currentColor" fontSize="12" letterSpacing="1.4">
        THE SENTENCE, CUT INTO FOUR
      </text>

      {/* ── row A: the four fragments of the claim ───────────────────── */}
      <rect x="8" y="30" width="178" height="52" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="97" y="52" textAnchor="middle" fill="currentColor" fontSize="13">CLINICALLY</text>
      <text x="97" y="70" textAnchor="middle" fill="currentColor" fontSize="13">PROVEN</text>

      <rect x="194" y="30" width="178" height="52" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="283" y="52" textAnchor="middle" fill="currentColor" fontSize="13">our 1,200 mg</text>
      <text x="283" y="70" textAnchor="middle" fill="currentColor" fontSize="13">proprietary blend</text>

      <rect x="380" y="30" width="178" height="52" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="469" y="52" textAnchor="middle" fill="currentColor" fontSize="13">boosts fat</text>
      <text x="469" y="70" textAnchor="middle" fill="currentColor" fontSize="13">burning by 43%</text>

      <rect x="566" y="30" width="178" height="52" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="655" y="52" textAnchor="middle" fill="currentColor" fontSize="13">as used by IFBB</text>
      <text x="655" y="70" textAnchor="middle" fill="currentColor" fontSize="13">pro Dane Voss</text>

      {/* ── row B: what the buyer completes for herself ──────────────── */}
      <text x="8" y="100" fill="currentColor" fontSize="11" letterSpacing="1.2">
        WHAT SHE FINISHES THE SENTENCE WITH
      </text>

      <line x1="97" y1="106" x2="97" y2="124" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#csa-arrow)" />
      <line x1="283" y1="106" x2="283" y2="124" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#csa-arrow)" />
      <line x1="469" y1="106" x2="469" y2="124" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#csa-arrow)" />
      <line x1="655" y1="106" x2="655" y2="124" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#csa-arrow)" />

      <rect x="8" y="128" width="178" height="64" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 4" />
      <text x="97" y="150" textAnchor="middle" fill="currentColor" fontSize="11">Someone official</text>
      <text x="97" y="166" textAnchor="middle" fill="currentColor" fontSize="11">checked this and</text>
      <text x="97" y="182" textAnchor="middle" fill="currentColor" fontSize="11">agreed it works.</text>

      <rect x="194" y="128" width="178" height="64" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 4" />
      <text x="283" y="150" textAnchor="middle" fill="currentColor" fontSize="11">A generous dose of</text>
      <text x="283" y="166" textAnchor="middle" fill="currentColor" fontSize="11">the ingredient in</text>
      <text x="283" y="182" textAnchor="middle" fill="currentColor" fontSize="11">the study.</text>

      <rect x="380" y="128" width="178" height="64" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 4" />
      <text x="469" y="150" textAnchor="middle" fill="currentColor" fontSize="11">I will lose almost</text>
      <text x="469" y="166" textAnchor="middle" fill="currentColor" fontSize="11">half again as much</text>
      <text x="469" y="182" textAnchor="middle" fill="currentColor" fontSize="11">body fat.</text>

      <rect x="566" y="128" width="178" height="64" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 4" />
      <text x="655" y="158" textAnchor="middle" fill="currentColor" fontSize="11">This is the body</text>
      <text x="655" y="174" textAnchor="middle" fill="currentColor" fontSize="11">the tub builds.</text>

      {/* ── row C: what the evidence will actually carry ─────────────── */}
      <text x="8" y="210" fill="currentColor" fontSize="11" letterSpacing="1.2">
        WHAT THE EVIDENCE ACTUALLY SUPPORTS
      </text>

      <line x1="97" y1="216" x2="97" y2="234" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#csa-arrow)" />
      <line x1="283" y1="216" x2="283" y2="234" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#csa-arrow)" />
      <line x1="469" y1="216" x2="469" y2="234" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#csa-arrow)" />
      <line x1="655" y1="216" x2="655" y2="234" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#csa-arrow)" />

      <rect x="8" y="238" width="178" height="82" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="97" y="260" textAnchor="middle" fill="currentColor" fontSize="11">No regulator approved</text>
      <text x="97" y="276" textAnchor="middle" fill="currentColor" fontSize="11">it. Supplements sit</text>
      <text x="97" y="292" textAnchor="middle" fill="currentColor" fontSize="11">under food law, and</text>
      <text x="97" y="308" textAnchor="middle" fill="currentColor" fontSize="11">no study is named.</text>

      <rect x="194" y="238" width="178" height="82" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="283" y="260" textAnchor="middle" fill="currentColor" fontSize="11">A blend gives order,</text>
      <text x="283" y="276" textAnchor="middle" fill="currentColor" fontSize="11">not amounts. The</text>
      <text x="283" y="292" textAnchor="middle" fill="currentColor" fontSize="11">studied ingredient</text>
      <text x="283" y="308" textAnchor="middle" fill="currentColor" fontSize="11">could be 400 mg or 40.</text>

      <rect x="380" y="238" width="178" height="82" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="469" y="260" textAnchor="middle" fill="currentColor" fontSize="11">One 2 hour lab measure,</text>
      <text x="469" y="276" textAnchor="middle" fill="currentColor" fontSize="11">12 young men. 43% of</text>
      <text x="469" y="292" textAnchor="middle" fill="currentColor" fontSize="11">10 g of fat is 4 g,</text>
      <text x="469" y="308" textAnchor="middle" fill="currentColor" fontSize="11">about 36 kilocalories.</text>

      <rect x="566" y="238" width="178" height="82" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="655" y="260" textAnchor="middle" fill="currentColor" fontSize="11">A sample of one: his</text>
      <text x="655" y="276" textAnchor="middle" fill="currentColor" fontSize="11">genetics, 20 years of</text>
      <text x="655" y="292" textAnchor="middle" fill="currentColor" fontSize="11">full time training,</text>
      <text x="655" y="308" textAnchor="middle" fill="currentColor" fontSize="11">possibly pharmacology.</text>

      {/* ── verdict band ─────────────────────────────────────────────── */}
      <rect x="8" y="340" width="736" height="60" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="376" y="365" textAnchor="middle" fill="currentColor" fontSize="13">
        Not one fragment is an outcome measured in a person like your client.
      </text>
      <text x="376" y="385" textAnchor="middle" fill="currentColor" fontSize="11">
        Four true sounding pieces, four different evidence failures, one purchase. Verdict: ignore.
      </text>
    </svg>
  );
}
