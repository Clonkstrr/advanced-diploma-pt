// In-code SVG (spec §12): crisp, offline, themeable via currentColor.

// Unipennate: fibre origins along the deep tendon (y = 140) rising to the aponeurosis (y = 62).
const UNI_FIBRES = [270, 290, 310, 330, 350, 370, 390];
// Bipennate: fibre origins along the central tendon (y = 101), rising and falling.
const BI_FIBRES = [480, 500, 520, 540, 560, 580, 600];
// Multipennate: fibre origins along two internal tendon septa.
const MULTI_FIBRES = [686, 706, 726, 746, 766, 786, 806];
// Panel B: the enlarged unipennate muscle, deep tendon at y = 462, aponeurosis at y = 416.
// Each fibre runs (x, 462) -> (x + 99, 416): atan(46 / 99) = 24.9 degrees, so the drawn
// pennation angle matches the cosine table printed beside it. Panel B is the panel that
// quantifies the angle, so it is the panel that has to be to scale.
const PANEL_B_FIBRES = [50, 75, 100, 125, 150, 175, 200, 225, 250];

export function MuscleArchitecture() {
  return (
    <svg
      role="img"
      viewBox="0 0 880 880"
      width="100%"
      aria-labelledby="marc-title"
      className="diagram"
    >
      <title id="marc-title">
        Muscle architecture and lines of pull: fusiform, unipennate, bipennate and multipennate
        arrangements; pennation angle with physiological versus anatomical cross-sectional area;
        the force against excursion trade-off; and how a muscle&#8217;s line of pull relative to a
        joint axis determines its action and can reverse it as the joint angle changes
      </title>
      <defs>
        <marker id="marc-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* ═══ BAND A · four architectures ═══════════════════════════════════ */}
      <text x="440" y="24" textAnchor="middle" fill="currentColor" fontSize="13.5" fontWeight="bold">
        A · Four ways to pack fibres between the same two tendons
      </text>

      {/* fusiform */}
      <line x1="45" y1="100" x2="76" y2="100" stroke="currentColor" strokeWidth="3.2" />
      <line x1="184" y1="100" x2="215" y2="100" stroke="currentColor" strokeWidth="3.2" />
      <path d="M76 100 Q130 58 184 100 Q130 142 76 100 Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="82" y1="100" x2="178" y2="100" stroke="currentColor" strokeWidth="0.9" />
      <line x1="86" y1="91" x2="174" y2="91" stroke="currentColor" strokeWidth="0.9" />
      <line x1="86" y1="109" x2="174" y2="109" stroke="currentColor" strokeWidth="0.9" />
      <line x1="96" y1="82" x2="164" y2="82" stroke="currentColor" strokeWidth="0.9" />
      <line x1="96" y1="118" x2="164" y2="118" stroke="currentColor" strokeWidth="0.9" />
      <text x="130" y="174" textAnchor="middle" fill="currentColor" fontSize="12.5" fontWeight="bold">Fusiform</text>
      <text x="130" y="190" textAnchor="middle" fill="currentColor" fontSize="11">fibres run with the pull</text>
      <text x="130" y="206" textAnchor="middle" fill="currentColor" fontSize="11">few fibres, very long</text>
      <text x="130" y="222" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">sartorius · biceps brachii</text>

      {/* unipennate */}
      <line x1="258" y1="140" x2="422" y2="140" stroke="currentColor" strokeWidth="3.2" />
      <line x1="264" y1="62" x2="418" y2="62" stroke="currentColor" strokeWidth="1.8" />
      {UNI_FIBRES.map((x) => (
        <line key={`uni-${x}`} x1={x} y1="140" x2={x + 28} y2="62" stroke="currentColor" strokeWidth="1" />
      ))}
      <text x="340" y="174" textAnchor="middle" fill="currentColor" fontSize="12.5" fontWeight="bold">Unipennate</text>
      <text x="340" y="190" textAnchor="middle" fill="currentColor" fontSize="11">one angled fibre set</text>
      <text x="340" y="206" textAnchor="middle" fill="currentColor" fontSize="11">more fibres, each shorter</text>
      <text x="340" y="222" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">vastus lateralis · gastrocnemius</text>

      {/* bipennate */}
      <line x1="468" y1="101" x2="632" y2="101" stroke="currentColor" strokeWidth="3.2" />
      <line x1="474" y1="62" x2="628" y2="62" stroke="currentColor" strokeWidth="1.6" />
      <line x1="474" y1="140" x2="628" y2="140" stroke="currentColor" strokeWidth="1.6" />
      {BI_FIBRES.map((x) => (
        <g key={`bi-${x}`}>
          <line x1={x} y1="101" x2={x + 14} y2="62" stroke="currentColor" strokeWidth="1" />
          <line x1={x} y1="101" x2={x + 14} y2="140" stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
      <text x="550" y="174" textAnchor="middle" fill="currentColor" fontSize="12.5" fontWeight="bold">Bipennate</text>
      <text x="550" y="190" textAnchor="middle" fill="currentColor" fontSize="11">two sets, one central tendon</text>
      <text x="550" y="206" textAnchor="middle" fill="currentColor" fontSize="11">more fibres again</text>
      <text x="550" y="222" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">rectus femoris · dorsal interossei</text>

      {/* multipennate */}
      <line x1="678" y1="84" x2="842" y2="84" stroke="currentColor" strokeWidth="2.4" />
      <line x1="678" y1="124" x2="842" y2="124" stroke="currentColor" strokeWidth="2.4" />
      <line x1="682" y1="62" x2="838" y2="62" stroke="currentColor" strokeWidth="1.3" />
      <line x1="682" y1="104" x2="838" y2="104" stroke="currentColor" strokeWidth="1.3" />
      <line x1="682" y1="146" x2="838" y2="146" stroke="currentColor" strokeWidth="1.3" />
      {MULTI_FIBRES.map((x) => (
        <g key={`multi-${x}`}>
          <line x1={x} y1="84" x2={x + 9} y2="62" stroke="currentColor" strokeWidth="0.9" />
          <line x1={x} y1="84" x2={x + 9} y2="104" stroke="currentColor" strokeWidth="0.9" />
          <line x1={x} y1="124" x2={x + 9} y2="104" stroke="currentColor" strokeWidth="0.9" />
          <line x1={x} y1="124" x2={x + 9} y2="146" stroke="currentColor" strokeWidth="0.9" />
        </g>
      ))}
      <text x="760" y="174" textAnchor="middle" fill="currentColor" fontSize="12.5" fontWeight="bold">Multipennate</text>
      <text x="760" y="190" textAnchor="middle" fill="currentColor" fontSize="11">several tendons, several angles</text>
      <text x="760" y="206" textAnchor="middle" fill="currentColor" fontSize="11">most fibres, shortest</text>
      <text x="760" y="222" textAnchor="middle" fill="currentColor" fontSize="11" fontStyle="italic">deltoid · subscapularis · soleus</text>

      {/* band A summary */}
      <line x1="150" y1="240" x2="730" y2="240" stroke="currentColor" strokeWidth="1.4"
        strokeDasharray="6 5" markerEnd="url(#marc-arrow)" />
      <text x="142" y="244" textAnchor="end" fill="currentColor" fontSize="11">long excursion</text>
      <text x="740" y="244" textAnchor="start" fill="currentColor" fontSize="11">high force</text>
      <text x="440" y="264" textAnchor="middle" fill="currentColor" fontSize="11.5">
        At equal muscle volume, packing in more fibres buys force and spends excursion.
      </text>
      <text x="440" y="281" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">
        Fibre angles in A are exaggerated so the packing pattern reads at this size. B below is drawn to scale.
      </text>

      {/* ═══ BAND B · pennation angle, PCSA vs ACSA ════════════════════════ */}
      <text x="440" y="300" textAnchor="middle" fill="currentColor" fontSize="13.5" fontWeight="bold">
        B · Pennation angle: the tax it charges and the fibres it buys
      </text>

      {/* enlarged unipennate muscle, drawn at a true 25° pennation angle */}
      <line x1="128" y1="416" x2="372" y2="416" stroke="currentColor" strokeWidth="2" />
      <line x1="38" y1="462" x2="322" y2="462" stroke="currentColor" strokeWidth="3.4" />
      {PANEL_B_FIBRES.map((x) => (
        <line key={`pb-${x}`} x1={x} y1="462" x2={x + 99} y2="416"
          stroke="currentColor" strokeWidth={x === 250 ? 2.4 : 1} />
      ))}
      {/* pennation angle at the highlighted fibre: a 25° arc, so θ reads the same off the
          muscle as it does off the cosine table on the right of this band */}
      <path d="M290 462 A 40 40 0 0 0 286.3 445.2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="294" y="455" fill="currentColor" fontSize="12.5" fontStyle="italic">&#952;</text>
      {/* anatomical cross-section: one cut perpendicular to the long axis */}
      <line x1="200" y1="408" x2="200" y2="470" stroke="currentColor" strokeWidth="1.3" strokeDasharray="5 4" />
      <text x="200" y="400" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">a</text>
      {/* physiological cross-section: cut perpendicular to the fibres */}
      <line x1="150" y1="410" x2="176" y2="466" stroke="currentColor" strokeWidth="1.3" strokeDasharray="5 4" />
      <text x="140" y="404" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">p</text>
      <text x="296" y="408" textAnchor="middle" fill="currentColor" fontSize="10.5" fontStyle="italic">aponeurosis</text>
      <text x="38" y="484" textAnchor="start" fill="currentColor" fontSize="10.5" fontStyle="italic">tendon</text>

      <text x="200" y="488" textAnchor="middle" fill="currentColor" fontSize="11">
        a · anatomical CSA — one cut across the belly
      </text>
      <text x="200" y="504" textAnchor="middle" fill="currentColor" fontSize="11">
        p · physiological CSA — cut across the fibres, then summed over all of them
      </text>
      <text x="200" y="524" textAnchor="middle" fill="currentColor" fontSize="12">
        PCSA = (volume &#215; cos &#952;) &#247; fibre length
      </text>
      <text x="200" y="541" textAnchor="middle" fill="currentColor" fontSize="10.5" fontStyle="italic">
        &#952; is drawn here at 25&#176;, inside the range human muscles actually use at rest.
      </text>

      {/* force decomposition */}
      <line x1="500" y1="420" x2="660" y2="345" stroke="currentColor" strokeWidth="2.6" markerEnd="url(#marc-arrow)" />
      <line x1="500" y1="420" x2="660" y2="420" stroke="currentColor" strokeWidth="2.2" markerEnd="url(#marc-arrow)" />
      <line x1="660" y1="345" x2="660" y2="420" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
      <path d="M544 420 A 44 44 0 0 0 540 401" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="552" y="412" fill="currentColor" fontSize="12.5" fontStyle="italic">&#952;</text>
      <text x="670" y="341" textAnchor="start" fill="currentColor" fontSize="11">F along the fibre</text>
      <text x="580" y="440" textAnchor="middle" fill="currentColor" fontSize="11">F cos &#952; reaches the tendon</text>
      <text x="672" y="392" textAnchor="start" fill="currentColor" fontSize="10.5">transverse pull,</text>
      <text x="672" y="406" textAnchor="start" fill="currentColor" fontSize="10.5">cancelled internally</text>
      <text x="650" y="472" textAnchor="middle" fill="currentColor" fontSize="11">
        cos 20&#176; &#8776; 0.94 · cos 25&#176; &#8776; 0.91 · cos 30&#176; &#8776; 0.87
      </text>
      <text x="650" y="490" textAnchor="middle" fill="currentColor" fontSize="11">
        A small tax on force, paid for a large gain in fibre count.
      </text>

      <text x="440" y="562" textAnchor="middle" fill="currentColor" fontSize="11.5">
        What pennation really costs is excursion: short fibres shorten less, so range and peak speed fall.
      </text>

      {/* ═══ BAND C · the trade-off ════════════════════════════════════════ */}
      <text x="210" y="596" textAnchor="middle" fill="currentColor" fontSize="12.5" fontWeight="bold">
        C · The trade-off, at equal volume
      </text>
      <line x1="80" y1="740" x2="80" y2="616" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#marc-arrow)" />
      <line x1="80" y1="740" x2="380" y2="740" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#marc-arrow)" />
      <text transform="rotate(-90 48 682)" x="48" y="682" textAnchor="middle" fill="currentColor" fontSize="11">
        peak force (tracks PCSA)
      </text>
      <text x="230" y="760" textAnchor="middle" fill="currentColor" fontSize="11">
        excursion &amp; shortening speed (tracks fibre length)
      </text>
      <path d="M110 638 C 180 660, 230 700, 350 726" fill="none" stroke="currentColor"
        strokeWidth="1.4" strokeDasharray="6 5" />
      <circle cx="118" cy="644" r="4" fill="currentColor" />
      <text x="130" y="634" textAnchor="start" fill="currentColor" fontSize="10.5">soleus (multipennate)</text>
      <circle cx="196" cy="676" r="4" fill="currentColor" />
      <text x="206" y="668" textAnchor="start" fill="currentColor" fontSize="10.5">vastus lateralis (unipennate)</text>
      <circle cx="300" cy="712" r="4" fill="currentColor" />
      <text x="294" y="704" textAnchor="end" fill="currentColor" fontSize="10.5">sartorius (fusiform)</text>
      <text x="210" y="782" textAnchor="middle" fill="currentColor" fontSize="11">
        Same volume, different design. No architecture wins both.
      </text>

      {/* ═══ BAND D · line of pull vs joint axis ═══════════════════════════ */}
      <text x="650" y="596" textAnchor="middle" fill="currentColor" fontSize="12.5" fontWeight="bold">
        D · A muscle&#8217;s action is a function of joint angle
      </text>

      {/* D1 — hip near 0 degrees */}
      <polygon points="512,616 570,612 576,644 546,662 514,650" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="540" y1="660" x2="540" y2="754" stroke="currentColor" strokeWidth="4" />
      <circle cx="540" cy="660" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="540" cy="660" r="1.6" fill="currentColor" />
      <text x="554" y="652" textAnchor="start" fill="currentColor" fontSize="10">ML axis</text>
      <line x1="544" y1="720" x2="528" y2="668" stroke="currentColor" strokeWidth="2.4" />
      <line x1="528" y1="668" x2="519" y2="639" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
      <circle cx="528" cy="668" r="3" fill="currentColor" />
      <circle cx="544" cy="720" r="3" fill="currentColor" />
      <line x1="540" y1="660" x2="527" y2="664" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 3" />
      <text x="497" y="690" textAnchor="end" fill="currentColor" fontSize="10">line of</text>
      <text x="497" y="702" textAnchor="end" fill="currentColor" fontSize="10">pull</text>
      <line x1="500" y1="694" x2="530" y2="690" stroke="currentColor" strokeWidth="1" />
      <text x="540" y="778" textAnchor="middle" fill="currentColor" fontSize="11">hip at 0&#176;</text>
      <text x="540" y="794" textAnchor="middle" fill="currentColor" fontSize="11">line passes in front of the axis</text>
      <text x="540" y="810" textAnchor="middle" fill="currentColor" fontSize="11">&#8594; hip FLEXION moment</text>

      {/* D2 — hip flexed */}
      <polygon points="742,616 800,612 806,644 776,662 744,650" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="770" y1="660" x2="676" y2="660" stroke="currentColor" strokeWidth="4" />
      <circle cx="770" cy="660" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="770" cy="660" r="1.6" fill="currentColor" />
      <text x="786" y="652" textAnchor="start" fill="currentColor" fontSize="10">ML axis</text>
      <line x1="710" y1="672" x2="758" y2="676" stroke="currentColor" strokeWidth="2.4" />
      <line x1="758" y1="676" x2="806" y2="680" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
      <circle cx="758" cy="676" r="3" fill="currentColor" />
      <circle cx="710" cy="672" r="3" fill="currentColor" />
      <line x1="770" y1="660" x2="769" y2="675" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 3" />
      <text x="760" y="778" textAnchor="middle" fill="currentColor" fontSize="11">hip flexed past &#8776; 60&#176;</text>
      <text x="760" y="794" textAnchor="middle" fill="currentColor" fontSize="11">the same line has crossed the axis</text>
      <text x="760" y="810" textAnchor="middle" fill="currentColor" fontSize="11">&#8594; hip EXTENSION moment</text>

      <text x="650" y="836" textAnchor="middle" fill="currentColor" fontSize="10.5">
        Adductor longus: hip flexor near extension, hip extensor past about 60&#176; of flexion.
      </text>
      <text x="650" y="852" textAnchor="middle" fill="currentColor" fontSize="10.5">
        Left lateral view, anterior left. The muscle did not change — the geometry did.
      </text>
    </svg>
  );
}
