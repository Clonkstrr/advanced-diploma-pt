// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function ScapulohumeralRhythm() {
  return (
    <svg
      role="img"
      viewBox="0 0 780 836"
      width="100%"
      aria-labelledby="shr-title"
      className="diagram"
    >
      <title id="shr-title">
        The shoulder complex as four joints — sternoclavicular, acromioclavicular, glenohumeral and
        the scapulothoracic articulation — with scapulohumeral rhythm across arm elevation, the
        upper trapezius, lower trapezius and serratus anterior force couple that upwardly rotates
        the scapula, and how scapular position changes the subacromial space
      </title>
      <defs>
        <marker id="shr-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* ══ PANEL A — the four joints ═══════════════════════════════════════ */}
      <text x="24" y="28" fill="currentColor" fontSize="11" letterSpacing="2">THE FOUR JOINTS</text>
      <rect x="14" y="34" width="382" height="268" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <text x="30" y="56" fill="currentColor" fontSize="10" fontStyle="italic">right shoulder girdle, schematic, seen from behind and above</text>

      {/* thorax */}
      <ellipse cx="170" cy="190" rx="92" ry="72" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 5" />
      <text x="128" y="240" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">rib cage</text>

      {/* sternum + clavicle */}
      <rect x="52" y="150" width="16" height="60" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="34" y="232" fill="currentColor" fontSize="10">sternum</text>
      <line x1="84" y1="157" x2="272" y2="136" stroke="currentColor" strokeWidth="3.5" />
      <text x="160" y="128" textAnchor="middle" fill="currentColor" fontSize="10">clavicle</text>

      {/* scapula */}
      <polygon points="200,158 290,182 246,274" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="206" y1="172" x2="272" y2="152" stroke="currentColor" strokeWidth="3" />
      <polygon points="282,130 312,126 315,142 285,146" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="320" y="124" fill="currentColor" fontSize="10">acromion</text>
      <text x="232" y="292" textAnchor="middle" fill="currentColor" fontSize="10">scapula</text>

      {/* glenoid + humerus */}
      <line x1="292" y1="176" x2="300" y2="206" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="316" cy="196" r="21" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="322" y1="214" x2="348" y2="288" stroke="currentColor" strokeWidth="3.5" />
      <text x="352" y="272" fill="currentColor" fontSize="10">humerus</text>

      {/* scapulothoracic glide */}
      <line x1="202" y1="230" x2="240" y2="246" stroke="currentColor" strokeWidth="1.2"
        strokeDasharray="4 4" markerStart="url(#shr-arrow)" markerEnd="url(#shr-arrow)" />

      {/* numbered joint badges */}
      <circle cx="76" cy="160" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="76" y="164" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      <circle cx="276" cy="134" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="276" y="138" textAnchor="middle" fill="currentColor" fontSize="11">2</text>
      <circle cx="296" cy="234" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="296" y="238" textAnchor="middle" fill="currentColor" fontSize="11">3</text>
      <line x1="297" y1="224" x2="299" y2="208" stroke="currentColor" strokeWidth="1" />
      <circle cx="216" cy="212" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="216" y="216" textAnchor="middle" fill="currentColor" fontSize="11">4</text>

      {/* ══ PANEL A legend ══════════════════════════════════════════════════ */}
      <rect x="406" y="34" width="360" height="268" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      <circle cx="428" cy="68" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="428" y="72" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      <text x="448" y="62" fill="currentColor" fontSize="11">Sternoclavicular — the only bony link between</text>
      <text x="448" y="76" fill="currentColor" fontSize="11">the arm and the axial skeleton. Elevates,</text>
      <text x="448" y="90" fill="currentColor" fontSize="11">retracts, and rotates posteriorly on its own axis.</text>

      <circle cx="428" cy="124" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="428" y="128" textAnchor="middle" fill="currentColor" fontSize="11">2</text>
      <text x="448" y="118" fill="currentColor" fontSize="11">Acromioclavicular — a small plane joint. Lets</text>
      <text x="448" y="132" fill="currentColor" fontSize="11">the scapula rotate on the clavicle; a modest</text>
      <text x="448" y="146" fill="currentColor" fontSize="11">share of the total, most of it late in the range.</text>

      <circle cx="428" cy="180" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="428" y="184" textAnchor="middle" fill="currentColor" fontSize="11">3</text>
      <text x="448" y="174" fill="currentColor" fontSize="11">Glenohumeral — the least bony constraint in the</text>
      <text x="448" y="188" fill="currentColor" fontSize="11">body: the glenoid faces about a third of the head.</text>
      <text x="448" y="202" fill="currentColor" fontSize="11">Range is bought with instability.</text>

      <circle cx="428" cy="236" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="428" y="240" textAnchor="middle" fill="currentColor" fontSize="11">4</text>
      <text x="448" y="230" fill="currentColor" fontSize="11">Scapulothoracic — not a true joint. No capsule,</text>
      <text x="448" y="244" fill="currentColor" fontSize="11">no cartilage: a gliding muscular interface on</text>
      <text x="448" y="258" fill="currentColor" fontSize="11">the rib cage, driven entirely by muscle.</text>

      <text x="424" y="286" fill="currentColor" fontSize="10" fontStyle="italic">
        All four move together. Restrict any one and elevation is lost.
      </text>

      {/* ══ PANEL B — scapulohumeral rhythm ═════════════════════════════════ */}
      <text x="24" y="332" fill="currentColor" fontSize="11" letterSpacing="2">SCAPULOHUMERAL RHYTHM</text>
      <rect x="14" y="314" width="376" height="286" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <text x="24" y="352" fill="currentColor" fontSize="10" fontStyle="italic">who contributes what across 180° of elevation</text>

      {/* axes */}
      <line x1="66" y1="540" x2="366" y2="540" stroke="currentColor" strokeWidth="1.5" />
      <line x1="66" y1="540" x2="66" y2="380" stroke="currentColor" strokeWidth="1.5" />

      {/* setting phase band */}
      <rect x="66" y="384" width="50" height="156" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <text x="91" y="370" textAnchor="middle" fill="currentColor" fontSize="10">setting phase</text>

      {/* contribution curves */}
      <polyline points="66,540 116,509 366,390" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <polyline points="66,540 116,534 366,465" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="7 5" />
      <text x="362" y="382" textAnchor="end" fill="currentColor" fontSize="10">glenohumeral</text>
      <text x="362" y="458" textAnchor="end" fill="currentColor" fontSize="10">scapulothoracic</text>
      <text x="225" y="408" textAnchor="middle" fill="currentColor" fontSize="11">≈ 2 : 1 after the setting phase</text>

      {/* ticks */}
      <text x="66" y="556" textAnchor="middle" fill="currentColor" fontSize="10">0</text>
      <text x="166" y="556" textAnchor="middle" fill="currentColor" fontSize="10">60</text>
      <text x="266" y="556" textAnchor="middle" fill="currentColor" fontSize="10">120</text>
      <text x="366" y="556" textAnchor="middle" fill="currentColor" fontSize="10">180</text>
      <text x="58" y="544" textAnchor="end" fill="currentColor" fontSize="10">0</text>
      <text x="58" y="469" textAnchor="end" fill="currentColor" fontSize="10">60</text>
      <text x="58" y="394" textAnchor="end" fill="currentColor" fontSize="10">120</text>
      <text x="216" y="576" textAnchor="middle" fill="currentColor" fontSize="10">humerothoracic elevation (°)</text>
      <text transform="rotate(-90 26 462)" x="26" y="462" textAnchor="middle" fill="currentColor" fontSize="10">
        joint contribution (°)
      </text>
      <text x="24" y="592" fill="currentColor" fontSize="10" fontStyle="italic">
        an average, not a law: ratios vary with plane, load and method
      </text>

      {/* ══ PANEL C — the force couple ══════════════════════════════════════ */}
      <text x="410" y="332" fill="currentColor" fontSize="11" letterSpacing="2">THE UPWARD-ROTATION FORCE COUPLE</text>
      <rect x="400" y="314" width="366" height="286" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      {/* scapula, posterior view */}
      <polygon points="505,400 617,418 550,538" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <line x1="510" y1="422" x2="605" y2="412" stroke="currentColor" strokeWidth="3" />
      <polygon points="605,404 641,402 645,418 609,420" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="614" y1="430" x2="600" y2="454" stroke="currentColor" strokeWidth="3.5" />

      {/* three pulls */}
      <line x1="622" y1="410" x2="568" y2="364" stroke="currentColor" strokeWidth="2" markerEnd="url(#shr-arrow)" />
      <text x="566" y="356" textAnchor="middle" fill="currentColor" fontSize="10">upper trapezius</text>
      <line x1="514" y1="424" x2="466" y2="484" stroke="currentColor" strokeWidth="2" markerEnd="url(#shr-arrow)" />
      <text x="462" y="498" textAnchor="middle" fill="currentColor" fontSize="10">lower trapezius</text>
      <line x1="548" y1="530" x2="630" y2="514" stroke="currentColor" strokeWidth="2" markerEnd="url(#shr-arrow)" />
      <text x="640" y="512" fill="currentColor" fontSize="10">serratus anterior</text>

      {/* resultant */}
      <path d="M 646,470 Q 676,456 668,424" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeDasharray="5 4" markerEnd="url(#shr-arrow)" />
      <text x="684" y="444" fill="currentColor" fontSize="10">upward</text>
      <text x="684" y="456" fill="currentColor" fontSize="10">rotation</text>

      <text x="410" y="558" fill="currentColor" fontSize="10">Three pulls, one resultant: upward rotation,</text>
      <text x="410" y="571" fill="currentColor" fontSize="10">posterior tilt and external rotation. Serratus</text>
      <text x="410" y="584" fill="currentColor" fontSize="10">produces all three — its failure wings the medial border.</text>

      {/* ══ PANEL D — subacromial space ═════════════════════════════════════ */}
      <text x="24" y="630" fill="currentColor" fontSize="11" letterSpacing="2">SUBACROMIAL SPACE AND SCAPULAR POSITION</text>
      <rect x="14" y="636" width="752" height="188" rx="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />

      {/* inset 1 — upwardly rotated, posteriorly tilted */}
      <polygon points="60,692 152,676 156,690 64,706" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="106" y="670" textAnchor="middle" fill="currentColor" fontSize="10">acromion</text>
      <circle cx="132" cy="754" r="26" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <text x="132" y="755" textAnchor="middle" fill="currentColor" fontSize="10">humeral</text>
      <text x="132" y="767" textAnchor="middle" fill="currentColor" fontSize="10">head</text>
      <path d="M 158,714 Q 130,702 66,708" fill="none" stroke="currentColor" strokeWidth="5" opacity="0.75" />
      <line x1="80" y1="710" x2="46" y2="730" stroke="currentColor" strokeWidth="1" />
      <text x="18" y="742" fill="currentColor" fontSize="10">supraspinatus</text>
      <text x="18" y="754" fill="currentColor" fontSize="10">tendon + bursa</text>
      <line x1="132" y1="694" x2="234" y2="694" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="132" y1="728" x2="234" y2="728" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="226" y1="694" x2="226" y2="728" stroke="currentColor" strokeWidth="1.5"
        markerStart="url(#shr-arrow)" markerEnd="url(#shr-arrow)" />
      <text x="125" y="796" textAnchor="middle" fill="currentColor" fontSize="10">upward rotation · posterior tilt</text>
      <text x="125" y="810" textAnchor="middle" fill="currentColor" fontSize="10">the arch clears the tendon</text>

      {/* inset 2 — anteriorly tilted, downwardly rotated */}
      <polygon points="296,682 388,698 392,712 300,696" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="368" cy="754" r="26" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M 394,720 Q 366,712 302,716" fill="none" stroke="currentColor" strokeWidth="5" opacity="0.75" />
      <line x1="368" y1="708" x2="470" y2="708" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="368" y1="728" x2="470" y2="728" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="462" y1="708" x2="462" y2="728" stroke="currentColor" strokeWidth="1.5"
        markerStart="url(#shr-arrow)" markerEnd="url(#shr-arrow)" />
      <text x="368" y="796" textAnchor="middle" fill="currentColor" fontSize="10">anterior tilt · downward rotation</text>
      <text x="368" y="810" textAnchor="middle" fill="currentColor" fontSize="10">same arm angle, less room</text>

      {/* the honest caveat */}
      <text x="510" y="672" fill="currentColor" fontSize="10">The space is real. Scapular position</text>
      <text x="510" y="686" fill="currentColor" fontSize="10">changes it. That much is mechanics.</text>
      <text x="510" y="708" fill="currentColor" fontSize="10">What broke was the causal story. In</text>
      <text x="510" y="722" fill="currentColor" fontSize="10">placebo-controlled trials (CSAW, Lancet</text>
      <text x="510" y="736" fill="currentColor" fontSize="10">2018; FIMPACT, BMJ 2018) shaving the</text>
      <text x="510" y="750" fill="currentColor" fontSize="10">acromion beat sham surgery by less</text>
      <text x="510" y="764" fill="currentColor" fontSize="10">than a patient can notice.</text>
      <text x="510" y="786" fill="currentColor" fontSize="10">Cuff tears and narrow spaces are</text>
      <text x="510" y="800" fill="currentColor" fontSize="10">common in shoulders that never hurt.</text>
    </svg>
  );
}
