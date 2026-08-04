// In-code SVG (spec §12): crisp, offline, themeable via currentColor.

// One column per number of degrees of freedom. Each column carries the rod picture
// (how many independent axes), the articular shapes that produce that number, the
// movements it buys and real joints that use it. The bottom band carries the three
// qualifications, because a classification figure without them teaches a tidy lie.

export function TissueJointFreedom() {
  return (
    <svg
      role="img"
      viewBox="0 0 880 600"
      width="100%"
      aria-labelledby="tjf-title"
      className="diagram"
    >
      <title id="tjf-title">
        Joint shape set against degrees of freedom: hinge and pivot surfaces giving one axis,
        condyloid and saddle surfaces giving two, ball and socket surfaces giving three, with the
        movements and example joints for each, and the three qualifications that stop the
        classification being taken too literally
      </title>
      <defs>
        <marker id="tjf-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="440" y="26" textAnchor="middle" fill="currentColor" fontSize="13.5" fontWeight="bold">
        The shape of the surfaces decides how many directions the bones can move
      </text>
      <text x="440" y="46" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        A degree of freedom is one independent axis you can voluntarily turn the bones about.
      </text>

      <line x1="295" y1="60" x2="295" y2="452" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
      <line x1="585" y1="60" x2="585" y2="452" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />

      {/* ═══ COLUMN 1 · one axis ═══════════════════════════════════════════ */}
      <text x="150" y="82" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="bold">ONE AXIS</text>
      <rect x="120" y="118" width="60" height="44" rx="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="92" y1="140" x2="208" y2="140" stroke="currentColor" strokeWidth="2.4"
        markerStart="url(#tjf-arrow)" markerEnd="url(#tjf-arrow)" />

      {/* hinge */}
      <path d="M60 230 L60 244 A 30 26 0 0 0 120 244 L120 230" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="90" cy="244" r="20" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M68 216 A 26 26 0 0 1 112 216" fill="none" stroke="currentColor" strokeWidth="1.3"
        markerEnd="url(#tjf-arrow)" />
      <text x="90" y="308" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="bold">Hinge</text>
      <text x="90" y="322" textAnchor="middle" fill="currentColor" fontSize="10">spool in a groove</text>

      {/* pivot */}
      <circle cx="210" cy="246" r="26" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="210" cy="246" r="11" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M236 238 A 28 28 0 0 1 214 274" fill="none" stroke="currentColor" strokeWidth="1.3"
        markerEnd="url(#tjf-arrow)" />
      <text x="210" y="308" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="bold">Pivot</text>
      <text x="210" y="322" textAnchor="middle" fill="currentColor" fontSize="10">peg turning in a ring</text>

      <text x="150" y="356" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="bold">What it gives you</text>
      <text x="150" y="374" textAnchor="middle" fill="currentColor" fontSize="11">Bending and straightening,</text>
      <text x="150" y="390" textAnchor="middle" fill="currentColor" fontSize="11">or turning. One or the other.</text>
      <text x="150" y="414" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">elbow (humeroulnar) &#183; proximal radioulnar</text>
      <text x="150" y="429" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">median atlanto-axial &#183; interphalangeal</text>
      <text x="150" y="444" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">talocrural, on a slanted axis</text>

      {/* ═══ COLUMN 2 · two axes ═══════════════════════════════════════════ */}
      <text x="440" y="82" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="bold">TWO AXES</text>
      <rect x="410" y="118" width="60" height="44" rx="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="382" y1="140" x2="498" y2="140" stroke="currentColor" strokeWidth="2.4"
        markerStart="url(#tjf-arrow)" markerEnd="url(#tjf-arrow)" />
      <line x1="440" y1="100" x2="440" y2="180" stroke="currentColor" strokeWidth="2.4"
        markerStart="url(#tjf-arrow)" markerEnd="url(#tjf-arrow)" />

      {/* condyloid */}
      <ellipse cx="380" cy="238" rx="34" ry="19" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M340 256 A 42 26 0 0 0 420 256" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <text x="380" y="308" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="bold">Condyloid</text>
      <text x="380" y="322" textAnchor="middle" fill="currentColor" fontSize="10">an oval in an oval socket</text>

      {/* saddle */}
      <path d="M456 232 C 480 268 520 268 544 232" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M472 286 Q 480 226 528 214" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <text x="500" y="308" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="bold">Saddle</text>
      <text x="500" y="322" textAnchor="middle" fill="currentColor" fontSize="10">convex one way, concave the other</text>

      <text x="440" y="356" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="bold">What it gives you</text>
      <text x="440" y="374" textAnchor="middle" fill="currentColor" fontSize="11">Bending and straightening plus</text>
      <text x="440" y="390" textAnchor="middle" fill="currentColor" fontSize="11">moving out and in. No spin.</text>
      <text x="440" y="414" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">radiocarpal (wrist) &#183; metacarpophalangeal</text>
      <text x="440" y="429" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">first carpometacarpal (base of thumb)</text>
      <text x="440" y="444" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">the oval shape is what forbids the spin</text>

      {/* ═══ COLUMN 3 · three axes ═════════════════════════════════════════ */}
      <text x="730" y="82" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="bold">THREE AXES</text>
      <rect x="700" y="118" width="60" height="44" rx="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="672" y1="140" x2="788" y2="140" stroke="currentColor" strokeWidth="2.4"
        markerStart="url(#tjf-arrow)" markerEnd="url(#tjf-arrow)" />
      <line x1="730" y1="100" x2="730" y2="180" stroke="currentColor" strokeWidth="2.4"
        markerStart="url(#tjf-arrow)" markerEnd="url(#tjf-arrow)" />
      <line x1="690" y1="168" x2="770" y2="112" stroke="currentColor" strokeWidth="2.4"
        markerStart="url(#tjf-arrow)" markerEnd="url(#tjf-arrow)" />

      {/* shallow socket */}
      <circle cx="670" cy="244" r="22" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M652 226 A 24 24 0 0 0 652 262" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <text x="670" y="308" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="bold">Shallow socket</text>
      <text x="670" y="322" textAnchor="middle" fill="currentColor" fontSize="10">shoulder: held by muscle</text>

      {/* deep socket */}
      <circle cx="790" cy="244" r="22" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M796 221 A 25 25 0 1 0 796 267" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <text x="790" y="308" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="bold">Deep socket</text>
      <text x="790" y="322" textAnchor="middle" fill="currentColor" fontSize="10">hip: held by bone</text>

      <text x="730" y="356" textAnchor="middle" fill="currentColor" fontSize="11.5" fontWeight="bold">What it gives you</text>
      <text x="730" y="374" textAnchor="middle" fill="currentColor" fontSize="11">Bending, moving out and in,</text>
      <text x="730" y="390" textAnchor="middle" fill="currentColor" fontSize="11">and turning. All three.</text>
      <text x="730" y="414" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">glenohumeral (shoulder)</text>
      <text x="730" y="429" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">acetabulofemoral (hip)</text>
      <text x="730" y="444" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">same three axes, opposite designs</text>

      {/* ═══ the qualifications ════════════════════════════════════════════ */}
      <line x1="60" y1="470" x2="820" y2="470" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 5" />
      <text x="440" y="494" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">
        Three things the classification does not tell you
      </text>
      <text x="440" y="516" textAnchor="middle" fill="currentColor" fontSize="11">
        1. Roll, glide and spin have to happen inside the joint for full range, but nobody can perform them alone. They add no degree of freedom.
      </text>
      <text x="440" y="536" textAnchor="middle" fill="currentColor" fontSize="11">
        2. No joint has a fixed axis. It shifts as the bones move, so the neat pin in a textbook figure is an average of a moving thing.
      </text>
      <text x="440" y="556" textAnchor="middle" fill="currentColor" fontSize="11">
        3. The categories leak. The knee is called a hinge and rotates a little anyway. The ankle is called a hinge and sits on a slanted axis.
      </text>
      <text x="440" y="582" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        Equal degrees of freedom never means equal stability: the shoulder and the hip both give three axes and defend them in opposite ways.
      </text>
    </svg>
  );
}
