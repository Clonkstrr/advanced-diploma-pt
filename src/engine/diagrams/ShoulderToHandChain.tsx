// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function ShoulderToHandChain() {
  return (
    <svg
      role="img"
      viewBox="0 0 800 790"
      width="100%"
      aria-labelledby="sthc-title"
      className="diagram"
    >
      <title id="sthc-title">
        Three panels. Panel A: the elbow, showing that the ulna forms the hinge while most of the
        axial load crosses the radiocapitellar joint near extension. Panel B: forearm rotation,
        showing the radius swinging around a nearly stationary ulna about an axis running from the
        centre of the radial head to the base of the ulnar styloid, with the interosseous membrane
        passing load between the bones. Panel C: a plot of grip force against wrist angle, peaking
        around twenty to forty degrees of wrist extension and collapsing in flexion
      </title>
      <defs>
        <marker id="sthc-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* ══ PANEL A — hinge versus load path ════════════════════════════════ */}
      <text x="24" y="28" fill="currentColor" fontSize="12" letterSpacing="2">A · THE HINGE IS NOT THE LOAD PATH</text>
      <rect x="14" y="34" width="380" height="400" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <text x="24" y="56" fill="currentColor" fontSize="11" fontStyle="italic">left elbow from the front, arm near straight</text>

      <line x1="170" y1="76" x2="170" y2="146" stroke="currentColor" strokeWidth="5" />
      <text x="180" y="92" fill="currentColor" fontSize="11">humerus</text>
      <circle cx="152" cy="160" r="16" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="194" cy="160" r="14" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <text x="88" y="144" textAnchor="end" fill="currentColor" fontSize="11">trochlea</text>
      <line x1="94" y1="141" x2="138" y2="155" stroke="currentColor" strokeWidth="1" />
      <text x="216" y="140" fill="currentColor" fontSize="11">capitulum</text>
      <line x1="150" y1="176" x2="142" y2="300" stroke="currentColor" strokeWidth="4.5" />
      <circle cx="196" cy="178" r="11" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="198" y1="189" x2="208" y2="300" stroke="currentColor" strokeWidth="4.5" />
      <text x="120" y="318" textAnchor="middle" fill="currentColor" fontSize="11">ulna</text>
      <text x="232" y="318" textAnchor="middle" fill="currentColor" fontSize="11">radius</text>

      <line x1="210" y1="340" x2="200" y2="236" stroke="currentColor" strokeWidth="2.5" markerEnd="url(#sthc-arrow)" />
      <text x="222" y="262" fill="currentColor" fontSize="11">most of the load</text>
      <text x="222" y="276" fill="currentColor" fontSize="11">arrives here, at</text>
      <text x="222" y="290" fill="currentColor" fontSize="11">the radial head</text>
      <line x1="140" y1="340" x2="148" y2="250" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sthc-arrow)" />
      <text x="46" y="262" fill="currentColor" fontSize="11">less through</text>
      <text x="46" y="276" fill="currentColor" fontSize="11">the hinge</text>

      <text x="24" y="364" fill="currentColor" fontSize="11">The ulna makes the hinge. The radius carries the load.</text>
      <text x="24" y="382" fill="currentColor" fontSize="11">Cadaver rigs put 57 to 60% there near extension.</text>
      <text x="24" y="400" fill="currentColor" fontSize="11">Highest near straight, less when bent, more palm-down.</text>
      <text x="24" y="418" fill="currentColor" fontSize="11">Removing it changes how force reaches the shoulder.</text>

      {/* ══ PANEL B — where the forearm turns ═══════════════════════════════ */}
      <text x="416" y="28" fill="currentColor" fontSize="12" letterSpacing="2">B · WHERE THE FOREARM TURNS</text>
      <rect x="406" y="34" width="380" height="400" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <text x="416" y="56" fill="currentColor" fontSize="11" fontStyle="italic">same left forearm from the front, starting palm up</text>

      <circle cx="580" cy="100" r="12" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="500" y1="96" x2="508" y2="290" stroke="currentColor" strokeWidth="4.5" />
      <circle cx="508" cy="300" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="580" y1="112" x2="560" y2="290" stroke="currentColor" strokeWidth="4.5" />
      <path d="M 580 112 Q 556 210 476 288" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 5" />
      <line x1="580" y1="100" x2="508" y2="300" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" />

      <line x1="570" y1="150" x2="504" y2="178" stroke="currentColor" strokeWidth="1.2" />
      <line x1="566" y1="188" x2="506" y2="214" stroke="currentColor" strokeWidth="1.2" />
      <line x1="562" y1="226" x2="508" y2="250" stroke="currentColor" strokeWidth="1.2" />
      <text x="416" y="150" fill="currentColor" fontSize="11">interosseous</text>
      <text x="416" y="164" fill="currentColor" fontSize="11">membrane:</text>
      <text x="416" y="178" fill="currentColor" fontSize="11">passes load</text>
      <text x="416" y="192" fill="currentColor" fontSize="11">from radius</text>
      <text x="416" y="206" fill="currentColor" fontSize="11">to ulna</text>

      <text x="596" y="200" fill="currentColor" fontSize="11">axis of the turn:</text>
      <text x="596" y="214" fill="currentColor" fontSize="11">centre of the radial</text>
      <text x="596" y="228" fill="currentColor" fontSize="11">head to the pit at the</text>
      <text x="596" y="242" fill="currentColor" fontSize="11">base of the ulnar styloid</text>

      <text x="416" y="248" fill="currentColor" fontSize="11">crossed over</text>
      <text x="416" y="262" fill="currentColor" fontSize="11">in pronation</text>
      <text x="508" y="320" textAnchor="middle" fill="currentColor" fontSize="11">ulna barely moves</text>
      <text x="620" y="290" fill="currentColor" fontSize="11">radius swings around it</text>
      <line x1="616" y1="286" x2="568" y2="288" stroke="currentColor" strokeWidth="1" />

      <text x="416" y="346" fill="currentColor" fontSize="11">Turning the palm happens between radius and ulna,</text>
      <text x="416" y="364" fill="currentColor" fontSize="11">not at the wrist: about 75 to 85° palm down, 80 to</text>
      <text x="416" y="382" fill="currentColor" fontSize="11">90° palm up. Past that, the shoulder is helping.</text>
      <text x="416" y="400" fill="currentColor" fontSize="11">At the wrist about 80% of the axial load goes through</text>
      <text x="416" y="418" fill="currentColor" fontSize="11">the radius and 20% through the ulna.</text>

      {/* ══ PANEL C — grip force against wrist angle ════════════════════════ */}
      <text x="24" y="456" fill="currentColor" fontSize="12" letterSpacing="2">C · GRIP DEPENDS ON WRIST ANGLE</text>
      <rect x="14" y="462" width="772" height="316" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      <line x1="170" y1="700" x2="550" y2="700" stroke="currentColor" strokeWidth="1.5" />
      <line x1="170" y1="700" x2="170" y2="506" stroke="currentColor" strokeWidth="1.5" />
      <rect x="398" y="530" width="76" height="170" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <text x="436" y="522" textAnchor="middle" fill="currentColor" fontSize="11">strongest here</text>
      <polyline
        points="170,690 208,676 246,652 284,618 322,580 360,552 398,538 436,536 474,546 512,564 550,588"
        fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="170" y="718" textAnchor="middle" fill="currentColor" fontSize="11">40° flexion</text>
      <text x="322" y="718" textAnchor="middle" fill="currentColor" fontSize="11">neutral</text>
      <text x="474" y="718" textAnchor="middle" fill="currentColor" fontSize="11">40° extension</text>
      <text x="550" y="718" textAnchor="middle" fill="currentColor" fontSize="11">60°</text>
      <text x="360" y="740" textAnchor="middle" fill="currentColor" fontSize="11">wrist angle</text>
      <text transform="rotate(-90 142 604)" x="142" y="604" textAnchor="middle" fill="currentColor" fontSize="11">
        grip force
      </text>
      <text x="20" y="586" fill="currentColor" fontSize="11">grip collapses</text>
      <text x="20" y="600" fill="currentColor" fontSize="11">within a few</text>
      <text x="20" y="614" fill="currentColor" fontSize="11">degrees of</text>
      <text x="20" y="628" fill="currentColor" fontSize="11">wrist flexion</text>
      <text x="20" y="762" fill="currentColor" fontSize="11">A grip test without a stated wrist position is not a measurement.</text>

      <text x="580" y="506" fill="currentColor" fontSize="11">The long finger flexors start</text>
      <text x="580" y="522" fill="currentColor" fontSize="11">around the elbow and cross the</text>
      <text x="580" y="538" fill="currentColor" fontSize="11">wrist, so wrist angle sets</text>
      <text x="580" y="554" fill="currentColor" fontSize="11">their length.</text>
      <text x="580" y="578" fill="currentColor" fontSize="11">Holding the wrist up against</text>
      <text x="580" y="594" fill="currentColor" fontSize="11">them takes work from the wrist</text>
      <text x="580" y="610" fill="currentColor" fontSize="11">extensors, so every heavy carry</text>
      <text x="580" y="626" fill="currentColor" fontSize="11">and every set of pull-ups loads</text>
      <text x="580" y="642" fill="currentColor" fontSize="11">their shared origin at the</text>
      <text x="580" y="658" fill="currentColor" fontSize="11">lateral epicondyle, the bump on</text>
      <text x="580" y="674" fill="currentColor" fontSize="11">the outside of the elbow.</text>
      <text x="580" y="698" fill="currentColor" fontSize="11">Lateral elbow pain in someone</text>
      <text x="580" y="714" fill="currentColor" fontSize="11">who grips for a living is usually</text>
      <text x="580" y="730" fill="currentColor" fontSize="11">a grip-load problem wearing an</text>
      <text x="580" y="746" fill="currentColor" fontSize="11">elbow costume.</text>
    </svg>
  );
}
