// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
// The same body of research drawn twice. Left: every trial published, so the
// funnel is symmetrical. Right: the small trials that found nothing were never
// published (drawn as dashed outlines), and the pooled estimate shifts.
export function ReviewFunnelPublicationBias() {
  return (
    <svg
      role="img"
      viewBox="0 0 760 470"
      width="100%"
      aria-labelledby="rfpb-title"
      className="diagram"
    >
      <title id="rfpb-title">
        Two funnel plots side by side: a complete literature forming a symmetrical
        inverted funnel with the pooled estimate on the true effect, and the same
        literature with the small null trials missing from its lower left corner,
        which drags the pooled estimate toward apparent benefit
      </title>

      {/* left gutter: what the vertical axis means */}
      <text x="14" y="112" fill="currentColor" fontSize="11">large, precise</text>
      <text x="14" y="128" fill="currentColor" fontSize="11">trials up here</text>
      <text x="14" y="302" fill="currentColor" fontSize="11">small, noisy</text>
      <text x="14" y="318" fill="currentColor" fontSize="11">trials down here</text>
      <line x1="112" y1="318" x2="112" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <polygon points="112,132 108,142 116,142" fill="currentColor" opacity="0.55" />

      {/* ---------------- panel A: nothing missing ---------------- */}
      <text x="250" y="40" textAnchor="middle" fill="currentColor" fontSize="13">Nothing missing</text>
      <text x="250" y="58" textAnchor="middle" fill="currentColor" fontSize="11">every trial that was run got published</text>

      <line x1="250" y1="86" x2="140" y2="336" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.7" />
      <line x1="250" y1="86" x2="360" y2="336" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.7" />
      <line x1="250" y1="80" x2="250" y2="344" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 4" />

      <circle cx="245" cy="104" r="5" fill="currentColor" />
      <circle cx="256" cy="104" r="5" fill="currentColor" />
      <circle cx="238" cy="140" r="4.5" fill="currentColor" />
      <circle cx="262" cy="140" r="4.5" fill="currentColor" />
      <circle cx="222" cy="180" r="4" fill="currentColor" />
      <circle cx="272" cy="180" r="4" fill="currentColor" />
      <circle cx="205" cy="225" r="3.5" fill="currentColor" />
      <circle cx="252" cy="225" r="3.5" fill="currentColor" />
      <circle cx="290" cy="225" r="3.5" fill="currentColor" />
      <circle cx="186" cy="270" r="3" fill="currentColor" />
      <circle cx="310" cy="270" r="3" fill="currentColor" />
      <circle cx="166" cy="310" r="3" fill="currentColor" />
      <circle cx="330" cy="310" r="3" fill="currentColor" />
      <circle cx="155" cy="328" r="2.8" fill="currentColor" />
      <circle cx="345" cy="328" r="2.8" fill="currentColor" />

      <line x1="130" y1="344" x2="372" y2="344" stroke="currentColor" strokeWidth="1.2" />
      <line x1="250" y1="344" x2="250" y2="350" stroke="currentColor" strokeWidth="1.2" />
      <text x="250" y="364" textAnchor="middle" fill="currentColor" fontSize="11">no effect</text>
      <text x="374" y="364" textAnchor="end" fill="currentColor" fontSize="11">favours it →</text>

      <polygon points="236,386 250,378 264,386 250,394" fill="currentColor" />
      <text x="250" y="412" textAnchor="middle" fill="currentColor" fontSize="11">pooled estimate sits on the truth</text>

      {/* ---------------- panel B: small null trials missing ---------------- */}
      <text x="590" y="40" textAnchor="middle" fill="currentColor" fontSize="13">Small null trials never published</text>
      <text x="590" y="58" textAnchor="middle" fill="currentColor" fontSize="11">the same research, minus what stalled in a drawer</text>

      <line x1="590" y1="86" x2="480" y2="336" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.7" />
      <line x1="590" y1="86" x2="700" y2="336" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.7" />
      <line x1="590" y1="80" x2="590" y2="344" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 4" />

      <circle cx="585" cy="104" r="5" fill="currentColor" />
      <circle cx="596" cy="104" r="5" fill="currentColor" />
      <circle cx="578" cy="140" r="4.5" fill="currentColor" />
      <circle cx="602" cy="140" r="4.5" fill="currentColor" />
      <circle cx="562" cy="180" r="4" fill="currentColor" />
      <circle cx="612" cy="180" r="4" fill="currentColor" />
      <circle cx="592" cy="225" r="3.5" fill="currentColor" />
      <circle cx="630" cy="225" r="3.5" fill="currentColor" />
      <circle cx="650" cy="270" r="3" fill="currentColor" />
      <circle cx="670" cy="310" r="3" fill="currentColor" />
      <circle cx="685" cy="328" r="2.8" fill="currentColor" />

      {/* the trials chance had to produce, which never reached print */}
      <circle cx="545" cy="225" r="3.5" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
      <circle cx="526" cy="270" r="3" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
      <circle cx="506" cy="310" r="3" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
      <circle cx="495" cy="328" r="2.8" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
      <text x="472" y="248" textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.85">run, but</text>
      <text x="472" y="264" textAnchor="middle" fill="currentColor" fontSize="11" opacity="0.85">never printed</text>

      <line x1="470" y1="344" x2="712" y2="344" stroke="currentColor" strokeWidth="1.2" />
      <line x1="590" y1="344" x2="590" y2="350" stroke="currentColor" strokeWidth="1.2" />
      <text x="590" y="364" textAnchor="middle" fill="currentColor" fontSize="11">no effect</text>
      <text x="714" y="364" textAnchor="end" fill="currentColor" fontSize="11">favours it →</text>

      <line x1="590" y1="374" x2="590" y2="398" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.8" />
      <polygon points="598,386 612,378 626,386 612,394" fill="currentColor" />
      <text x="590" y="412" textAnchor="middle" fill="currentColor" fontSize="11">pooled estimate pulled toward benefit</text>

      <text x="380" y="444" textAnchor="middle" fill="currentColor" fontSize="11">Below about ten studies the shape cannot be read, so a tidy funnel is never proof that nothing is missing.</text>
    </svg>
  );
}
