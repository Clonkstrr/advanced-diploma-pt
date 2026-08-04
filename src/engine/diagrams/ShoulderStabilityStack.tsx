// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function ShoulderStabilityStack() {
  return (
    <svg
      role="img"
      viewBox="0 0 800 806"
      width="100%"
      aria-labelledby="sss-title"
      className="diagram"
    >
      <title id="sss-title">
        Three panels. Panel A: concavity-compression, comparing a ball in a socket with the labrum
        intact against the same ball in a shallower socket with the labrum removed. Panel B: which
        passive restraint is tight in which arm position, at the side, at about forty-five degrees,
        and at ninety degrees with the arm turned outwards. Panel C: which structures hold the
        humeral head centred and which ones move the arm
      </title>
      <defs>
        <marker id="sss-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* ══ PANEL A — concavity-compression ═════════════════════════════════ */}
      <text x="24" y="28" fill="currentColor" fontSize="12" letterSpacing="2">A · DEPTH TIMES SQUEEZE</text>
      <rect x="14" y="34" width="772" height="270" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      {/* left: labrum intact */}
      <text x="200" y="78" textAnchor="middle" fill="currentColor" fontSize="12">socket with its labrum</text>
      <line x1="200" y1="88" x2="200" y2="116" stroke="currentColor" strokeWidth="2.5" markerEnd="url(#sss-arrow)" />
      <text x="208" y="104" fill="currentColor" fontSize="11">cuff compression</text>
      <circle cx="200" cy="158" r="40" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M 138 154 Q 200 240 262 154" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M 132 146 Q 140 154 138 162" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <path d="M 268 146 Q 260 154 262 162" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <text x="118" y="142" textAnchor="end" fill="currentColor" fontSize="11">labrum</text>
      <line x1="122" y1="138" x2="132" y2="148" stroke="currentColor" strokeWidth="1" />
      <line x1="246" y1="158" x2="300" y2="158" stroke="currentColor" strokeWidth="2" markerEnd="url(#sss-arrow)" />
      <text x="304" y="154" fill="currentColor" fontSize="11">needs a big push</text>
      <text x="200" y="224" textAnchor="middle" fill="currentColor" fontSize="11">deeper dish, the ball stays put</text>

      {/* right: labrum removed */}
      <text x="560" y="78" textAnchor="middle" fill="currentColor" fontSize="12">same socket, labrum removed</text>
      <line x1="560" y1="88" x2="560" y2="116" stroke="currentColor" strokeWidth="2.5" markerEnd="url(#sss-arrow)" />
      <text x="568" y="104" fill="currentColor" fontSize="11">same compression</text>
      <circle cx="560" cy="158" r="40" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M 498 178 Q 560 226 622 178" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="606" y1="158" x2="640" y2="158" stroke="currentColor" strokeWidth="2" markerEnd="url(#sss-arrow)" />
      <text x="644" y="154" fill="currentColor" fontSize="11">slides out sooner</text>
      <text x="560" y="224" textAnchor="middle" fill="currentColor" fontSize="11">shallow dish, same squeeze, less hold</text>

      <text x="24" y="252" fill="currentColor" fontSize="12">
        Resistance to the head sliding out = how deep the socket is × how hard the cuff presses it in.
      </text>
      <text x="24" y="272" fill="currentColor" fontSize="12">
        The labrum roughly doubles the working depth. The cuff supplies the pressing. Neither job is glamorous,
      </text>
      <text x="24" y="292" fill="currentColor" fontSize="12">
        and together they are most of the stability she has anywhere except the very ends of her range.
      </text>

      {/* ══ PANEL B — position-specific restraints ══════════════════════════ */}
      <text x="24" y="324" fill="currentColor" fontSize="12" letterSpacing="2">B · EVERY LIGAMENT HAS AN ADDRESS</text>
      <rect x="14" y="330" width="772" height="240" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      {/* arm at the side */}
      <rect x="116" y="364" width="32" height="96" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="148" cy="374" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="148" y1="381" x2="154" y2="466" stroke="currentColor" strokeWidth="4" />
      <text x="150" y="492" textAnchor="middle" fill="currentColor" fontSize="12">arm at the side</text>
      <text x="150" y="510" textAnchor="middle" fill="currentColor" fontSize="11">superior glenohumeral and</text>
      <text x="150" y="524" textAnchor="middle" fill="currentColor" fontSize="11">coracohumeral ligaments</text>
      <text x="150" y="538" textAnchor="middle" fill="currentColor" fontSize="11">stop the head dropping down</text>

      {/* about 45 degrees */}
      <rect x="366" y="364" width="32" height="96" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="398" cy="374" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="402" y1="379" x2="468" y2="436" stroke="currentColor" strokeWidth="4" />
      <text x="400" y="492" textAnchor="middle" fill="currentColor" fontSize="12">about 45° out to the side</text>
      <text x="400" y="510" textAnchor="middle" fill="currentColor" fontSize="11">the middle glenohumeral</text>
      <text x="400" y="524" textAnchor="middle" fill="currentColor" fontSize="11">ligament takes over</text>

      {/* 90 degrees plus external rotation */}
      <rect x="616" y="364" width="32" height="96" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="648" cy="374" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="654" y1="374" x2="718" y2="374" stroke="currentColor" strokeWidth="4" />
      <line x1="718" y1="374" x2="718" y2="342" stroke="currentColor" strokeWidth="4" />
      <path d="M 700 338 Q 718 324 736 338" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#sss-arrow)" />
      <text x="636" y="492" textAnchor="middle" fill="currentColor" fontSize="12">90° out, turned outwards</text>
      <text x="636" y="510" textAnchor="middle" fill="currentColor" fontSize="11">the anterior band of the</text>
      <text x="636" y="524" textAnchor="middle" fill="currentColor" fontSize="11">inferior glenohumeral complex</text>
      <text x="636" y="538" textAnchor="middle" fill="currentColor" fontSize="11">blocks the head sliding forwards</text>

      <text x="24" y="558" fill="currentColor" fontSize="12" fontStyle="italic">
        Move out of the position and that same ligament goes slack. Nothing here holds everywhere.
      </text>

      {/* ══ PANEL C — holders and movers ════════════════════════════════════ */}
      <text x="24" y="596" fill="currentColor" fontSize="12" letterSpacing="2">C · WHO HOLDS, WHO MOVES</text>
      <rect x="14" y="602" width="772" height="192" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <line x1="400" y1="614" x2="400" y2="736" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      <text x="30" y="632" fill="currentColor" fontSize="12" letterSpacing="1.5">HOLD THE HEAD CENTRED</text>
      <text x="30" y="656" fill="currentColor" fontSize="12">rotator cuff: compression, all the time</text>
      <text x="30" y="676" fill="currentColor" fontSize="12">labrum: depth, no muscle needed</text>
      <text x="30" y="696" fill="currentColor" fontSize="12">capsule and ligaments: position by position</text>
      <text x="30" y="716" fill="currentColor" fontSize="12">slight vacuum inside the joint: small</text>
      <text x="30" y="736" fill="currentColor" fontSize="12">wet surfaces clinging: small</text>

      <text x="418" y="632" fill="currentColor" fontSize="12" letterSpacing="1.5">MOVE THE ARM</text>
      <text x="418" y="656" fill="currentColor" fontSize="12">deltoid</text>
      <text x="418" y="676" fill="currentColor" fontSize="12">pectoralis major</text>
      <text x="418" y="696" fill="currentColor" fontSize="12">latissimus dorsi</text>
      <text x="418" y="716" fill="currentColor" fontSize="12">teres major</text>
      <text x="418" y="736" fill="currentColor" fontSize="12">long head of biceps: mostly an elbow muscle</text>

      <text x="30" y="764" fill="currentColor" fontSize="12">
        The movers are far bigger. They only work because the holders keep the ball centred while they pull.
      </text>
      <text x="30" y="782" fill="currentColor" fontSize="12">
        Take the holders away and deltoid alone drags the head upwards instead of lifting the arm.
      </text>
    </svg>
  );
}
