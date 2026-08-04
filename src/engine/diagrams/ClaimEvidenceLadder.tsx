// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function ClaimEvidenceLadder() {
  return (
    <svg
      role="img"
      viewBox="0 0 760 474"
      width="100%"
      aria-labelledby="cel-title"
      className="diagram"
    >
      <title id="cel-title">
        A five rung ladder from evidence to the strongest sentence it licenses you to say
        to a client. Rung one is mechanism, cells, animals and testimonials, which licenses
        only that someone should test it. Rung five is a systematic review or position stand,
        which licenses an average effect at a stated dose and still not a promise about this
        client.
      </title>

      <text x="44" y="24" fill="currentColor" fontSize="12" letterSpacing="1.3">
        EVIDENCE YOU ACTUALLY HAVE
      </text>
      <text x="404" y="24" fill="currentColor" fontSize="12" letterSpacing="1.3">
        THE STRONGEST SENTENCE IT LICENSES
      </text>

      {/* ── rung 5: strongest ────────────────────────────────────────── */}
      <circle cx="24" cy="73" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="24" y="78" textAnchor="middle" fill="currentColor" fontSize="12">5</text>
      <rect x="44" y="36" width="352" height="74" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="60" y="62" fill="currentColor" fontSize="12">Systematic review or position stand</text>
      <text x="60" y="82" fill="currentColor" fontSize="11">many human trials pooled, then judged by a body</text>
      <text x="60" y="98" fill="currentColor" fontSize="11">that had to take a public position</text>
      <rect x="404" y="36" width="348" height="74" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="418" y="68" fill="currentColor" fontSize="11">“Many trials agree. It works on average, at about</text>
      <text x="418" y="86" fill="currentColor" fontSize="11">this dose. Your own response can still differ.”</text>

      {/* ── rung 4 ───────────────────────────────────────────────────── */}
      <circle cx="24" cy="155" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="24" y="160" textAnchor="middle" fill="currentColor" fontSize="12">4</text>
      <rect x="44" y="118" width="352" height="74" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="60" y="144" fill="currentColor" fontSize="12">Several consistent randomised trials</text>
      <text x="60" y="164" fill="currentColor" fontSize="11">in people who resemble your client, measuring the</text>
      <text x="60" y="180" fill="currentColor" fontSize="11">outcome she actually cares about</text>
      <rect x="404" y="118" width="348" height="74" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="418" y="150" fill="currentColor" fontSize="11">“The effect is real and about this big. Here is what</text>
      <text x="418" y="168" fill="currentColor" fontSize="11">it costs, and here is who it was measured in.”</text>

      {/* ── rung 3 ───────────────────────────────────────────────────── */}
      <circle cx="24" cy="237" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="24" y="242" textAnchor="middle" fill="currentColor" fontSize="12">3</text>
      <rect x="44" y="200" width="352" height="74" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="60" y="226" fill="currentColor" fontSize="12">Trials exist, and they disagree</text>
      <text x="60" y="246" fill="currentColor" fontSize="11">small samples, mixed results, some of them funded</text>
      <text x="60" y="262" fill="currentColor" fontSize="11">by the people selling it</text>
      <rect x="404" y="200" width="348" height="74" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="418" y="232" fill="currentColor" fontSize="11">“Possible, not established. If you try it, we decide</text>
      <text x="418" y="250" fill="currentColor" fontSize="11">now what would count as it working, and when.”</text>

      {/* ── rung 2 ───────────────────────────────────────────────────── */}
      <circle cx="24" cy="319" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="24" y="324" textAnchor="middle" fill="currentColor" fontSize="12">2</text>
      <rect x="44" y="282" width="352" height="74" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="5 4" />
      <text x="60" y="312" fill="currentColor" fontSize="12">One small human trial</text>
      <text x="60" y="334" fill="currentColor" fontSize="11">one dose, one sample, a hundred analysis choices</text>
      <rect x="404" y="282" width="348" height="74" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="5 4" />
      <text x="418" y="314" fill="currentColor" fontSize="11">“Worth watching. I would not spend money on it</text>
      <text x="418" y="332" fill="currentColor" fontSize="11">yet, and neither would I promise you anything.”</text>

      {/* ── rung 1: weakest ──────────────────────────────────────────── */}
      <circle cx="24" cy="401" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="24" y="406" textAnchor="middle" fill="currentColor" fontSize="12">1</text>
      <rect x="44" y="364" width="352" height="74" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="5 4" />
      <text x="60" y="394" fill="currentColor" fontSize="12">Mechanism, cells, animals, testimonials</text>
      <text x="60" y="416" fill="currentColor" fontSize="11">nothing measured as an outcome in a person</text>
      <rect x="404" y="364" width="348" height="74" rx="6" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="5 4" />
      <text x="418" y="396" fill="currentColor" fontSize="11">“There is a reason for somebody to test this.</text>
      <text x="418" y="414" fill="currentColor" fontSize="11">Nobody has tested it in people.”</text>

      <text x="380" y="462" textAnchor="middle" fill="currentColor" fontSize="11">
        Each rung buys you one more sentence. No rung buys a promise about this particular client.
      </text>
    </svg>
  );
}
