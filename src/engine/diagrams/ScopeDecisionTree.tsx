// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function ScopeDecisionTree() {
  return (
    <svg
      role="img"
      viewBox="0 0 760 460"
      width="100%"
      aria-labelledby="sdt-title"
      className="diagram"
    >
      <title id="sdt-title">Scope-of-practice decision tree: train, modify, refer, or stop</title>
      <defs>
        <marker id="sdt-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* start */}
      <rect x="270" y="12" width="220" height="44" rx="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="39" textAnchor="middle" fill="currentColor" fontSize="14">
        Client symptom, request, or event
      </text>

      {/* Q1 red flags */}
      <polygon points="380,88 560,132 380,176 200,132" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="126" textAnchor="middle" fill="currentColor" fontSize="13">Red flags present?</text>
      <text x="380" y="146" textAnchor="middle" fill="currentColor" fontSize="11">
        chest pain · dizziness · acute injury · undiagnosed symptoms
      </text>
      <line x1="380" y1="56" x2="380" y2="84" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#sdt-arrow)" />

      {/* Q1 yes -> stop/refer */}
      <rect x="590" y="104" width="158" height="56" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="669" y="127" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="bold">STOP the session</text>
      <text x="669" y="146" textAnchor="middle" fill="currentColor" fontSize="11">refer to physician / emergency</text>
      <line x1="560" y1="132" x2="586" y2="132" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#sdt-arrow)" />
      <text x="571" y="122" fill="currentColor" fontSize="11">yes</text>

      {/* Q2 scope */}
      <polygon points="380,208 570,252 380,296 190,252" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="246" textAnchor="middle" fill="currentColor" fontSize="13">
        Within your legal scope AND competence?
      </text>
      <text x="380" y="266" textAnchor="middle" fill="currentColor" fontSize="11">
        exercise · general healthy-eating guidance · lifestyle support
      </text>
      <line x1="380" y1="176" x2="380" y2="204" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#sdt-arrow)" />
      <text x="388" y="196" fill="currentColor" fontSize="11">no</text>

      {/* Q2 no -> refer/collaborate */}
      <rect x="600" y="224" width="148" height="56" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="674" y="247" textAnchor="middle" fill="currentColor" fontSize="13">Refer or collaborate</text>
      <text x="674" y="266" textAnchor="middle" fill="currentColor" fontSize="11">physio · RD · physician · psych</text>
      <line x1="570" y1="252" x2="596" y2="252" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#sdt-arrow)" />
      <text x="578" y="242" fill="currentColor" fontSize="11">no</text>

      {/* Q3 response */}
      <polygon points="380,328 550,368 380,408 210,368" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="362" textAnchor="middle" fill="currentColor" fontSize="13">Abnormal response while training?</text>
      <text x="380" y="382" textAnchor="middle" fill="currentColor" fontSize="11">
        pain · unusual breathlessness · form breakdown
      </text>
      <line x1="380" y1="296" x2="380" y2="324" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#sdt-arrow)" />
      <text x="388" y="316" fill="currentColor" fontSize="11">yes</text>

      {/* Q3 yes -> modify */}
      <rect x="580" y="340" width="168" height="56" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="664" y="363" textAnchor="middle" fill="currentColor" fontSize="13">Modify or end today</text>
      <text x="664" y="382" textAnchor="middle" fill="currentColor" fontSize="11">document · monitor · escalate if repeated</text>
      <line x1="550" y1="368" x2="576" y2="368" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#sdt-arrow)" />
      <text x="558" y="358" fill="currentColor" fontSize="11">yes</text>

      {/* Q3 no -> proceed */}
      <rect x="290" y="424" width="180" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="380" y="444" textAnchor="middle" fill="currentColor" fontSize="13">Train as planned · document</text>
      <line x1="380" y1="408" x2="380" y2="420" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#sdt-arrow)" />
      <text x="388" y="418" fill="currentColor" fontSize="11">no</text>
    </svg>
  );
}
