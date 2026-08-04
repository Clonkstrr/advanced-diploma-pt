// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function ShoulderDeltoidCuffCouple() {
  return (
    <svg
      role="img"
      viewBox="0 0 800 706"
      width="100%"
      aria-labelledby="sdc-title"
      className="diagram"
    >
      <title id="sdc-title">
        Four panels. Panel A: deltoid pulling on its own, its line of pull almost parallel to the
        shaft of the humerus, driving the head upwards. Panel B: deltoid plus the inferior cuff,
        producing rotation about a centre that barely moves. Panel C: the front-to-back pair,
        subscapularis against infraspinatus and teres minor, seen from above. Panel D: what happens
        when the cuff gives way, and how the rotator cable carries load around a defect
      </title>
      <defs>
        <marker id="sdc-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* ══ PANEL A — deltoid alone ═════════════════════════════════════════ */}
      <text x="24" y="28" fill="currentColor" fontSize="12" letterSpacing="2">A · DELTOID PULLING ALONE</text>
      <rect x="14" y="34" width="380" height="306" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      <polygon points="120,70 214,58 218,74 124,86" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="230" y="70" fill="currentColor" fontSize="11">acromion</text>
      <line x1="170" y1="110" x2="170" y2="92" stroke="currentColor" strokeWidth="2"
        strokeDasharray="4 3" markerEnd="url(#sdc-arrow)" />
      <text x="182" y="104" fill="currentColor" fontSize="11">head rides up</text>
      <circle cx="170" cy="152" r="40" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M 130 118 Q 112 152 130 186" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="66" y="196" textAnchor="end" fill="currentColor" fontSize="11">glenoid</text>
      <line x1="70" y1="192" x2="114" y2="172" stroke="currentColor" strokeWidth="1" />
      <line x1="188" y1="188" x2="240" y2="280" stroke="currentColor" strokeWidth="4" />
      <text x="244" y="278" fill="currentColor" fontSize="11">humerus</text>
      <line x1="224" y1="258" x2="196" y2="166" stroke="currentColor" strokeWidth="2" markerEnd="url(#sdc-arrow)" />
      <text x="246" y="228" fill="currentColor" fontSize="12">deltoid pull</text>
      <text x="246" y="246" fill="currentColor" fontSize="11">almost parallel</text>
      <text x="246" y="260" fill="currentColor" fontSize="11">to the shaft</text>
      <text x="24" y="326" fill="currentColor" fontSize="11">
        Unopposed, deltoid mostly drags the head up the socket.
      </text>

      {/* ══ PANEL B — deltoid plus cuff ═════════════════════════════════════ */}
      <text x="416" y="28" fill="currentColor" fontSize="12" letterSpacing="2">B · DELTOID PLUS THE CUFF</text>
      <rect x="406" y="34" width="380" height="306" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      <polygon points="512,70 606,58 610,74 516,86" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="562" cy="152" r="40" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M 522 118 Q 504 152 522 186" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <line x1="580" y1="188" x2="632" y2="280" stroke="currentColor" strokeWidth="4" />
      <text x="636" y="278" fill="currentColor" fontSize="11">humerus</text>
      <line x1="616" y1="258" x2="588" y2="166" stroke="currentColor" strokeWidth="2" markerEnd="url(#sdc-arrow)" />
      <line x1="590" y1="138" x2="534" y2="176" stroke="currentColor" strokeWidth="2" markerEnd="url(#sdc-arrow)" />
      <text x="440" y="216" fill="currentColor" fontSize="11">cuff pulls down and in</text>
      <line x1="556" y1="152" x2="568" y2="152" stroke="currentColor" strokeWidth="1.5" />
      <line x1="562" y1="146" x2="562" y2="158" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 606 116 A 58 58 0 0 1 620 178" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeDasharray="5 4" markerEnd="url(#sdc-arrow)" />
      <text x="630" y="140" fill="currentColor" fontSize="11">the arm turns</text>
      <text x="630" y="154" fill="currentColor" fontSize="11">about a centre</text>
      <text x="630" y="168" fill="currentColor" fontSize="11">that barely moves</text>
      <text x="416" y="308" fill="currentColor" fontSize="11">
        Add the cuff and the two become a force couple.
      </text>
      <text x="416" y="326" fill="currentColor" fontSize="11">
        The arm turns; the head stays centred in the socket.
      </text>

      {/* ══ PANEL C — the transverse-plane pair ═════════════════════════════ */}
      <text x="24" y="360" fill="currentColor" fontSize="12" letterSpacing="2">C · THE FRONT-TO-BACK PAIR</text>
      <rect x="14" y="366" width="380" height="324" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <text x="24" y="390" fill="currentColor" fontSize="11" fontStyle="italic">right shoulder seen from above</text>

      <circle cx="200" cy="490" r="46" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M 156 450 Q 132 490 156 530" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <line x1="200" y1="418" x2="178" y2="450" stroke="currentColor" strokeWidth="2" markerEnd="url(#sdc-arrow)" />
      <text x="208" y="416" fill="currentColor" fontSize="12">subscapularis, in front</text>
      <line x1="200" y1="562" x2="178" y2="530" stroke="currentColor" strokeWidth="2" markerEnd="url(#sdc-arrow)" />
      <text x="208" y="562" fill="currentColor" fontSize="12">infraspinatus and teres</text>
      <text x="208" y="578" fill="currentColor" fontSize="12">minor, behind</text>
      <line x1="248" y1="490" x2="296" y2="490" stroke="currentColor" strokeWidth="1.5"
        strokeDasharray="5 4" markerEnd="url(#sdc-arrow)" />
      <line x1="262" y1="478" x2="286" y2="502" stroke="currentColor" strokeWidth="2" />
      <line x1="286" y1="478" x2="262" y2="502" stroke="currentColor" strokeWidth="2" />
      <text x="302" y="486" fill="currentColor" fontSize="11">sliding</text>
      <text x="302" y="500" fill="currentColor" fontSize="11">forwards</text>
      <text x="24" y="640" fill="currentColor" fontSize="11">
        Balanced pulls at the front and the back stop the head
      </text>
      <text x="24" y="658" fill="currentColor" fontSize="11">
        drifting forwards while the arm turns.
      </text>

      {/* ══ PANEL D — cuff loss and the rotator cable ═══════════════════════ */}
      <text x="416" y="360" fill="currentColor" fontSize="12" letterSpacing="2">D · WHEN THE CUFF GIVES WAY</text>
      <rect x="406" y="366" width="380" height="324" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      <polygon points="436,428 520,418 524,434 440,444" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="478" cy="490" r="34" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="478" y1="472" x2="478" y2="456" stroke="currentColor" strokeWidth="2"
        strokeDasharray="4 3" markerEnd="url(#sdc-arrow)" />
      <text x="478" y="546" textAnchor="middle" fill="currentColor" fontSize="11">large tear: the head</text>
      <text x="478" y="560" textAnchor="middle" fill="currentColor" fontSize="11">drifts up under deltoid</text>

      <text x="676" y="424" textAnchor="middle" fill="currentColor" fontSize="11">rotator cable</text>
      <path d="M 636 470 Q 676 434 716 470" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="676" cy="490" r="34" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <ellipse cx="676" cy="476" rx="13" ry="7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="660" y="546" textAnchor="middle" fill="currentColor" fontSize="11">the cable carries load</text>
      <text x="660" y="560" textAnchor="middle" fill="currentColor" fontSize="11">past a hole in the tendon</text>

      <text x="416" y="602" fill="currentColor" fontSize="11">
        Lose enough cuff and a client may be unable to raise
      </text>
      <text x="416" y="620" fill="currentColor" fontSize="11">
        the arm at all, with a healthy deltoid and normal nerves.
      </text>
      <text x="416" y="644" fill="currentColor" fontSize="11">
        Yet some tears that run all the way through cause nothing
      </text>
      <text x="416" y="662" fill="currentColor" fontSize="11">
        at all, because the cable carries load past the hole.
      </text>
    </svg>
  );
}
