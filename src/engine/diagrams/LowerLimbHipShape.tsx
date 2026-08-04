// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function LowerLimbHipShape() {
  return (
    <svg
      role="img"
      viewBox="0 0 900 570"
      width="100%"
      aria-labelledby="llhs-title"
      className="diagram"
    >
      <title id="llhs-title">
        How hip shape decides a stance: three hips compared by socket depth (lateral centre-edge
        angle) and by how far forward the femoral neck points (femoral version), and the stance
        width, foot turnout and squat depth each one tends to produce
      </title>

      <text x="450" y="26" textAnchor="middle" fill="currentColor" fontSize="13.5" fontWeight="bold" letterSpacing="1.5">
        HOW HIP SHAPE DECIDES A STANCE
      </text>

      {/* panel dividers */}
      <line x1="302" y1="44" x2="302" y2="512" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
      <line x1="598" y1="44" x2="598" y2="512" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />

      {/* ── panel headers ── */}
      <text x="155" y="62" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">SHALLOWER SOCKET</text>
      <text x="155" y="78" textAnchor="middle" fill="currentColor" fontSize="9.5" fontStyle="italic">neck points only a little forward</text>
      <text x="450" y="62" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">AVERAGE SOCKET</text>
      <text x="450" y="78" textAnchor="middle" fill="currentColor" fontSize="9.5" fontStyle="italic">average forward twist</text>
      <text x="745" y="62" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">DEEPER SOCKET</text>
      <text x="745" y="78" textAnchor="middle" fill="currentColor" fontSize="9.5" fontStyle="italic">neck points well forward</text>

      {/* ── row 1: socket depth, viewed from the front ── */}
      {/* shallow */}
      <path d="M 142.26 133.48 A 34 34 0 0 1 186.95 176.63" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="155" cy="165" r="26" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="155" y1="165" x2="155" y2="110" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="155" y1="165" x2="138.52" y2="124.20" stroke="currentColor" strokeWidth="1.4" />
      <path d="M 155 119 A 46 46 0 0 0 137.77 122.35" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <text x="165" y="112" fill="currentColor" fontSize="11">centre-edge ≈ 22°</text>
      <text x="155" y="202" textAnchor="middle" fill="currentColor" fontSize="10">less bony cover, more room in flexion</text>

      {/* average */}
      <path d="M 431.98 136.17 A 34 34 0 0 1 481.95 176.63" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="450" cy="165" r="26" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="450" y1="165" x2="450" y2="110" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="450" y1="165" x2="426.68" y2="127.69" stroke="currentColor" strokeWidth="1.4" />
      <path d="M 450 119 A 46 46 0 0 0 425.62 125.99" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <text x="460" y="112" fill="currentColor" fontSize="11">centre-edge ≈ 32°</text>
      <text x="450" y="202" textAnchor="middle" fill="currentColor" fontSize="10">the usual amount of cover</text>

      {/* deep */}
      <path d="M 721.81 140.13 A 34 34 0 0 1 776.95 176.63" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="745" cy="165" r="26" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="745" y1="165" x2="745" y2="110" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="745" y1="165" x2="714.99" y2="132.82" stroke="currentColor" strokeWidth="1.4" />
      <path d="M 745 119 A 46 46 0 0 0 713.63 131.35" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <text x="755" y="112" fill="currentColor" fontSize="11">centre-edge ≈ 43°</text>
      <text x="745" y="202" textAnchor="middle" fill="currentColor" fontSize="10">more cover, the neck meets the rim sooner</text>

      {/* ── row 2: femoral version, viewed from above ── */}
      {/* shallow / low version */}
      <line x1="60" y1="275" x2="250" y2="275" stroke="currentColor" strokeWidth="2" />
      <text x="60" y="292" fill="currentColor" fontSize="9.5">knee axis</text>
      <line x1="135" y1="275" x2="246.6" y2="265.24" stroke="currentColor" strokeWidth="2" />
      <circle cx="246.6" cy="265.2" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M 190 275 A 55 55 0 0 0 189.8 270.2" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <text x="60" y="244" fill="currentColor" fontSize="10.5">forward twist ≈ 5°</text>
      <text x="155" y="330" textAnchor="middle" fill="currentColor" fontSize="10">more turnout available, less turn-in</text>

      {/* average version */}
      <line x1="355" y1="275" x2="545" y2="275" stroke="currentColor" strokeWidth="2" />
      <text x="355" y="292" fill="currentColor" fontSize="9.5">knee axis</text>
      <line x1="430" y1="275" x2="538.2" y2="246.0" stroke="currentColor" strokeWidth="2" />
      <circle cx="538.2" cy="246" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M 485 275 A 55 55 0 0 0 483.1 260.8" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <text x="355" y="244" fill="currentColor" fontSize="10.5">forward twist ≈ 15°</text>
      <text x="450" y="330" textAnchor="middle" fill="currentColor" fontSize="10">rotation shared fairly evenly</text>

      {/* deep / high version */}
      <line x1="650" y1="275" x2="840" y2="275" stroke="currentColor" strokeWidth="2" />
      <text x="650" y="292" fill="currentColor" fontSize="9.5">knee axis</text>
      <line x1="725" y1="275" x2="823.9" y2="222.4" stroke="currentColor" strokeWidth="2" />
      <circle cx="823.9" cy="222.4" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M 780 275 A 55 55 0 0 0 773.6 249.2" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <text x="650" y="244" fill="currentColor" fontSize="10.5">forward twist ≈ 28°</text>
      <text x="745" y="330" textAnchor="middle" fill="currentColor" fontSize="10">more turn-in available, less turnout</text>

      {/* ── row 3: the stance each hip tends to like ── */}
      <line x1="30" y1="440" x2="870" y2="440" stroke="currentColor" strokeWidth="1" strokeDasharray="3 7" />

      <rect x="70" y="369" width="26" height="62" rx="12" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(-28 83 400)" />
      <rect x="214" y="369" width="26" height="62" rx="12" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(28 227 400)" />
      <text x="155" y="458" textAnchor="middle" fill="currentColor" fontSize="10">wide stance, feet well turned out</text>
      <text x="155" y="482" textAnchor="middle" fill="currentColor" fontSize="10">Deep squat comes easily. Bony support</text>
      <text x="155" y="496" textAnchor="middle" fill="currentColor" fontSize="10">is lower, so muscular control matters more.</text>

      <rect x="383" y="369" width="26" height="62" rx="12" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(-15 396 400)" />
      <rect x="491" y="369" width="26" height="62" rx="12" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(15 504 400)" />
      <text x="450" y="458" textAnchor="middle" fill="currentColor" fontSize="10">moderate width and turnout</text>
      <text x="450" y="482" textAnchor="middle" fill="currentColor" fontSize="10">Parallel and below is available in most</text>
      <text x="450" y="496" textAnchor="middle" fill="currentColor" fontSize="10">stances she is likely to try.</text>

      <rect x="696" y="369" width="26" height="62" rx="12" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(-4 709 400)" />
      <rect x="768" y="369" width="26" height="62" rx="12" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(4 781 400)" />
      <text x="745" y="458" textAnchor="middle" fill="currentColor" fontSize="10">narrower stance, feet nearly straight</text>
      <text x="745" y="482" textAnchor="middle" fill="currentColor" fontSize="10">Depth runs out sooner. Push past it and the</text>
      <text x="745" y="496" textAnchor="middle" fill="currentColor" fontSize="10">pelvis rolls under to find the last few degrees.</text>

      {/* ── footer ── */}
      <text x="450" y="534" textAnchor="middle" fill="currentColor" fontSize="11">
        These are tendencies, not rules. Nobody can read socket depth or version from the outside, and no stance is a fault.
      </text>
      <text x="450" y="550" textAnchor="middle" fill="currentColor" fontSize="11">
        The only reliable test is to change the stance and watch what her depth and her pelvis do inside the same session.
      </text>
    </svg>
  );
}
