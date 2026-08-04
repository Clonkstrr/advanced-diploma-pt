// In-code SVG (spec §12): crisp, offline, themeable via currentColor.

// All three panels share one projection, so the planes can be compared directly:
// width runs across the screen, height runs up it, depth runs down and to the right.
// Each plane is the parallelogram spanned by two of those three directions, and its
// axis is the third one. That is the whole geometric reason an axis pierces its plane
// at a right angle and can never lie inside it.

export function TissuePlaneAxisPairs() {
  return (
    <svg
      role="img"
      viewBox="0 0 880 510"
      width="100%"
      aria-labelledby="tpa-title"
      className="diagram"
    >
      <title id="tpa-title">
        The three cardinal planes drawn beside the axis each one turns about: the sagittal plane
        with its mediolateral axis, the frontal plane with its anteroposterior axis, and the
        transverse plane with its vertical axis, showing that every axis stands perpendicular to
        its plane and never lies inside it
      </title>
      <defs>
        <marker id="tpa-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="440" y="26" textAnchor="middle" fill="currentColor" fontSize="13.5" fontWeight="bold">
        Each plane has exactly one axis, and the axis is always at right angles to it
      </text>
      <text x="440" y="46" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">
        Plane shaded. Axis drawn as the solid rod. The dot marks where the rod pierces the plane.
      </text>

      {/* ═══ PANEL 1 · sagittal plane, mediolateral axis ═══════════════════ */}
      <polygon points="110,91 190,143 190,299 110,247" fill="currentColor" fillOpacity="0.08"
        stroke="currentColor" strokeWidth="1.6" strokeDasharray="6 4" />
      <circle cx="150" cy="137" r="11" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="150" y1="148" x2="150" y2="213" stroke="currentColor" strokeWidth="1.2" />
      <line x1="124" y1="168" x2="176" y2="168" stroke="currentColor" strokeWidth="1.2" />
      <line x1="150" y1="213" x2="134" y2="265" stroke="currentColor" strokeWidth="1.2" />
      <line x1="150" y1="213" x2="166" y2="265" stroke="currentColor" strokeWidth="1.2" />
      <line x1="52" y1="195" x2="248" y2="195" stroke="currentColor" strokeWidth="2.8"
        markerStart="url(#tpa-arrow)" markerEnd="url(#tpa-arrow)" />
      <circle cx="150" cy="195" r="4.5" fill="currentColor" />
      <text x="150" y="332" textAnchor="middle" fill="currentColor" fontSize="12.5" fontWeight="bold">
        SAGITTAL PLANE
      </text>
      <text x="150" y="350" textAnchor="middle" fill="currentColor" fontSize="11">splits you into left and right</text>
      <text x="150" y="370" textAnchor="middle" fill="currentColor" fontSize="11">Axis: mediolateral, side to side</text>
      <text x="150" y="388" textAnchor="middle" fill="currentColor" fontSize="11">Motion: flexion and extension</text>
      <text x="150" y="406" textAnchor="middle" fill="currentColor" fontSize="10.5" fontStyle="italic">
        hip hinge &#183; biceps curl &#183; nodding
      </text>

      {/* ═══ PANEL 2 · frontal plane, anteroposterior axis ═════════════════ */}
      <polygon points="368,117 512,117 512,273 368,273" fill="currentColor" fillOpacity="0.08"
        stroke="currentColor" strokeWidth="1.6" strokeDasharray="6 4" />
      <circle cx="440" cy="137" r="11" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="440" y1="148" x2="440" y2="213" stroke="currentColor" strokeWidth="1.2" />
      <line x1="414" y1="168" x2="466" y2="168" stroke="currentColor" strokeWidth="1.2" />
      <line x1="440" y1="213" x2="424" y2="265" stroke="currentColor" strokeWidth="1.2" />
      <line x1="440" y1="213" x2="456" y2="265" stroke="currentColor" strokeWidth="1.2" />
      <line x1="364" y1="146" x2="516" y2="244" stroke="currentColor" strokeWidth="2.8"
        markerStart="url(#tpa-arrow)" markerEnd="url(#tpa-arrow)" />
      <circle cx="440" cy="195" r="4.5" fill="currentColor" />
      <text x="440" y="332" textAnchor="middle" fill="currentColor" fontSize="12.5" fontWeight="bold">
        FRONTAL PLANE
      </text>
      <text x="440" y="350" textAnchor="middle" fill="currentColor" fontSize="11">splits you into front and back</text>
      <text x="440" y="370" textAnchor="middle" fill="currentColor" fontSize="11">Axis: anteroposterior, front to back</text>
      <text x="440" y="388" textAnchor="middle" fill="currentColor" fontSize="11">Motion: abduction, adduction, side bend</text>
      <text x="440" y="406" textAnchor="middle" fill="currentColor" fontSize="10.5" fontStyle="italic">
        lateral raise &#183; side plank &#183; hip abduction
      </text>

      {/* ═══ PANEL 3 · transverse plane, vertical axis ═════════════════════ */}
      <polygon points="618,169 762,169 842,221 698,221" fill="currentColor" fillOpacity="0.08"
        stroke="currentColor" strokeWidth="1.6" strokeDasharray="6 4" />
      <circle cx="730" cy="137" r="11" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <line x1="730" y1="148" x2="730" y2="213" stroke="currentColor" strokeWidth="1.2" />
      <line x1="704" y1="168" x2="756" y2="168" stroke="currentColor" strokeWidth="1.2" />
      <line x1="730" y1="213" x2="714" y2="265" stroke="currentColor" strokeWidth="1.2" />
      <line x1="730" y1="213" x2="746" y2="265" stroke="currentColor" strokeWidth="1.2" />
      <line x1="730" y1="90" x2="730" y2="300" stroke="currentColor" strokeWidth="2.8"
        markerStart="url(#tpa-arrow)" markerEnd="url(#tpa-arrow)" />
      <circle cx="730" cy="195" r="4.5" fill="currentColor" />
      <text x="730" y="332" textAnchor="middle" fill="currentColor" fontSize="12.5" fontWeight="bold">
        TRANSVERSE PLANE
      </text>
      <text x="730" y="350" textAnchor="middle" fill="currentColor" fontSize="11">splits you into top and bottom</text>
      <text x="730" y="370" textAnchor="middle" fill="currentColor" fontSize="11">Axis: vertical, along the length of the part</text>
      <text x="730" y="388" textAnchor="middle" fill="currentColor" fontSize="11">Motion: rotation</text>
      <text x="730" y="406" textAnchor="middle" fill="currentColor" fontSize="10.5" fontStyle="italic">
        cable chop &#183; turning your head &#183; pronation
      </text>

      {/* ═══ the rule ══════════════════════════════════════════════════════ */}
      <line x1="60" y1="430" x2="820" y2="430" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 5" />
      <text x="440" y="456" textAnchor="middle" fill="currentColor" fontSize="12">
        The rule that catches almost every mistake: an axis stands at right angles to its plane, and never lies inside it.
      </text>
      <text x="440" y="478" textAnchor="middle" fill="currentColor" fontSize="11.5">
        So &#8220;flexion in the frontal plane about a mediolateral axis&#8221; is wrong twice over.
      </text>
      <text x="440" y="496" textAnchor="middle" fill="currentColor" fontSize="11.5">
        Flexion is sagittal, and a mediolateral axis lies inside the frontal plane rather than through it.
      </text>
    </svg>
  );
}
