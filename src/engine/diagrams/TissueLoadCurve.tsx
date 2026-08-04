// In-code SVG (spec §12): crisp, offline, themeable via currentColor.

// Band A is drawn on a real scale: x is strain as a percentage of resting length
// (0 to 12%, 36.7 screen units per per cent), y is force in the tissue. The straight
// stretch of the curve between 1.5% and 4.5% is genuinely straight, because that is
// the claim the picture is making. Band B drops the numbers and shows the three
// time-dependent behaviours as shapes, which is the only way they are memorable.

export function TissueLoadCurve() {
  return (
    <svg
      role="img"
      viewBox="0 0 880 636"
      width="100%"
      aria-labelledby="tlc-title"
      className="diagram"
    >
      <title id="tlc-title">
        How tendon and ligament answer to load: a force against stretch curve showing the toe
        region where resting collagen crimp straightens, the linear region whose slope is
        stiffness, the zone of microscopic failure and the point of rupture; below it, creep,
        stress relaxation and hysteresis drawn as three shapes
      </title>
      <defs>
        <marker id="tlc-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* ═══ BAND A · the load curve ═══════════════════════════════════════ */}
      <text x="440" y="26" textAnchor="middle" fill="currentColor" fontSize="13.5" fontWeight="bold">
        A &#183; Why a tendon feels soft at first and then suddenly firm
      </text>

      <line x1="80" y1="300" x2="80" y2="52" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#tlc-arrow)" />
      <line x1="80" y1="300" x2="536" y2="300" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#tlc-arrow)" />
      <text transform="rotate(-90 46 180)" x="46" y="180" textAnchor="middle" fill="currentColor" fontSize="11">
        force carried by the tissue
      </text>
      <text x="300" y="342" textAnchor="middle" fill="currentColor" fontSize="11">
        stretch, as a percentage of resting length
      </text>

      {/* x ticks */}
      <line x1="153" y1="300" x2="153" y2="307" stroke="currentColor" strokeWidth="1.2" />
      <line x1="227" y1="300" x2="227" y2="307" stroke="currentColor" strokeWidth="1.2" />
      <line x1="300" y1="300" x2="300" y2="307" stroke="currentColor" strokeWidth="1.2" />
      <line x1="374" y1="300" x2="374" y2="307" stroke="currentColor" strokeWidth="1.2" />
      <line x1="447" y1="300" x2="447" y2="307" stroke="currentColor" strokeWidth="1.2" />
      <text x="153" y="321" textAnchor="middle" fill="currentColor" fontSize="10.5">2%</text>
      <text x="227" y="321" textAnchor="middle" fill="currentColor" fontSize="10.5">4%</text>
      <text x="300" y="321" textAnchor="middle" fill="currentColor" fontSize="10.5">6%</text>
      <text x="374" y="321" textAnchor="middle" fill="currentColor" fontSize="10.5">8%</text>
      <text x="447" y="321" textAnchor="middle" fill="currentColor" fontSize="10.5">10%</text>

      {/* region dividers */}
      <line x1="135" y1="300" x2="135" y2="258" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="245" y1="300" x2="245" y2="114" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="374" y1="300" x2="374" y2="58" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />

      {/* the curve */}
      <path d="M80 300 C 104 299 124 288 135 262 L 245 118 C 272 96 300 82 330 74 C 366 64 405 60 429 58"
        fill="none" stroke="currentColor" strokeWidth="2.6" />
      {/* rupture */}
      <path d="M429 58 L 438 108 L 424 148 L 440 208 L 429 300"
        fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="5 4" />
      <line x1="418" y1="47" x2="440" y2="69" stroke="currentColor" strokeWidth="1.6" />
      <line x1="440" y1="47" x2="418" y2="69" stroke="currentColor" strokeWidth="1.6" />

      {/* numbered markers on the curve */}
      <circle cx="108" cy="276" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="108" y="280" textAnchor="middle" fill="currentColor" fontSize="11.5">1</text>
      <circle cx="160" cy="186" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="160" y="190" textAnchor="middle" fill="currentColor" fontSize="11.5">2</text>
      <circle cx="322" cy="112" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="322" y="116" textAnchor="middle" fill="currentColor" fontSize="11.5">3</text>
      <circle cx="466" cy="100" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="466" y="104" textAnchor="middle" fill="currentColor" fontSize="11.5">4</text>

      {/* the crimp, drawn where the toe region is */}
      <path d="M96 224 q 6 -9 12 0 q 6 9 12 0 q 6 -9 12 0 q 6 9 12 0"
        fill="none" stroke="currentColor" strokeWidth="1.3" />
      <text x="126" y="212" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">
        collagen at rest: wavy
      </text>
      <line x1="180" y1="224" x2="236" y2="224" stroke="currentColor" strokeWidth="1.3" />
      <text x="208" y="212" textAnchor="middle" fill="currentColor" fontSize="10" fontStyle="italic">
        pulled straight
      </text>

      {/* right-hand notes */}
      <circle cx="566" cy="78" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="566" y="82" textAnchor="middle" fill="currentColor" fontSize="11.5">1</text>
      <text x="584" y="70" fill="currentColor" fontSize="11.5" fontWeight="bold">Toe region</text>
      <text x="584" y="87" fill="currentColor" fontSize="11">About the first 1.5% to 3% of stretch. At rest</text>
      <text x="584" y="102" fill="currentColor" fontSize="11">the collagen sits in a wavy crimp, and this part</text>
      <text x="584" y="117" fill="currentColor" fontSize="11">only pulls the waves straight. Plenty of length</text>
      <text x="584" y="132" fill="currentColor" fontSize="11">for very little force.</text>

      <circle cx="566" cy="158" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="566" y="162" textAnchor="middle" fill="currentColor" fontSize="11.5">2</text>
      <text x="584" y="150" fill="currentColor" fontSize="11.5" fontWeight="bold">Linear region</text>
      <text x="584" y="167" fill="currentColor" fontSize="11">The fibres themselves are stretching now. The</text>
      <text x="584" y="182" fill="currentColor" fontSize="11">slope of this part is stiffness, and stiffness is</text>
      <text x="584" y="197" fill="currentColor" fontSize="11">the property that training changes.</text>

      <circle cx="566" cy="223" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="566" y="227" textAnchor="middle" fill="currentColor" fontSize="11.5">3</text>
      <text x="584" y="215" fill="currentColor" fontSize="11.5" fontWeight="bold">Microscopic failure</text>
      <text x="584" y="232" fill="currentColor" fontSize="11">Past roughly 4% to 6%, fibres start failing a few</text>
      <text x="584" y="247" fill="currentColor" fontSize="11">at a time. The curve bends over because the</text>
      <text x="584" y="262" fill="currentColor" fontSize="11">tissue is already losing pieces of itself.</text>

      <circle cx="566" cy="288" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="566" y="292" textAnchor="middle" fill="currentColor" fontSize="11.5">4</text>
      <text x="584" y="280" fill="currentColor" fontSize="11.5" fontWeight="bold">Rupture</text>
      <text x="584" y="297" fill="currentColor" fontSize="11">Near 8% to 10%. Treat every number here as an</text>
      <text x="584" y="312" fill="currentColor" fontSize="11">order of magnitude: they differ by tendon, by</text>
      <text x="584" y="327" fill="currentColor" fontSize="11">study and by testing method.</text>

      {/* ═══ BAND B · time-dependent behaviour ═════════════════════════════ */}
      <text x="440" y="382" textAnchor="middle" fill="currentColor" fontSize="13.5" fontWeight="bold">
        B &#183; The same tissue answers differently depending on how long you hold it
      </text>

      {/* creep */}
      <text x="150" y="412" textAnchor="middle" fill="currentColor" fontSize="10.5" fontStyle="italic">
        pull held steady
      </text>
      <line x1="60" y1="530" x2="60" y2="424" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#tlc-arrow)" />
      <line x1="60" y1="530" x2="240" y2="530" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#tlc-arrow)" />
      <path d="M60 530 C 92 470 132 452 230 446" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <text transform="rotate(-90 42 480)" x="42" y="480" textAnchor="middle" fill="currentColor" fontSize="10.5">length</text>
      <text x="150" y="548" textAnchor="middle" fill="currentColor" fontSize="10.5">time</text>
      <text x="145" y="572" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">CREEP</text>
      <text x="145" y="590" textAnchor="middle" fill="currentColor" fontSize="10.5">Hold a steady pull and the tissue</text>
      <text x="145" y="605" textAnchor="middle" fill="currentColor" fontSize="10.5">slowly lengthens. It reverses in minutes.</text>

      {/* stress relaxation */}
      <text x="430" y="412" textAnchor="middle" fill="currentColor" fontSize="10.5" fontStyle="italic">
        length held steady
      </text>
      <line x1="340" y1="530" x2="340" y2="424" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#tlc-arrow)" />
      <line x1="340" y1="530" x2="520" y2="530" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#tlc-arrow)" />
      <path d="M340 440 C 374 496 412 510 510 514" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <text transform="rotate(-90 322 480)" x="322" y="480" textAnchor="middle" fill="currentColor" fontSize="10.5">force</text>
      <text x="430" y="548" textAnchor="middle" fill="currentColor" fontSize="10.5">time</text>
      <text x="425" y="572" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">STRESS RELAXATION</text>
      <text x="425" y="590" textAnchor="middle" fill="currentColor" fontSize="10.5">Hold a steady length and the force</text>
      <text x="425" y="605" textAnchor="middle" fill="currentColor" fontSize="10.5">inside it slowly fades away.</text>

      {/* hysteresis */}
      <text x="710" y="412" textAnchor="middle" fill="currentColor" fontSize="10.5" fontStyle="italic">
        load, then unload
      </text>
      <line x1="620" y1="530" x2="620" y2="424" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#tlc-arrow)" />
      <line x1="620" y1="530" x2="800" y2="530" stroke="currentColor" strokeWidth="1.3" markerEnd="url(#tlc-arrow)" />
      <path d="M620 530 C 662 478 712 452 770 434" fill="none" stroke="currentColor" strokeWidth="2.4"
        markerEnd="url(#tlc-arrow)" />
      <path d="M770 434 C 730 472 688 506 620 530" fill="none" stroke="currentColor" strokeWidth="2.4"
        strokeDasharray="6 4" markerEnd="url(#tlc-arrow)" />
      <text x="700" y="462" textAnchor="middle" fill="currentColor" fontSize="10">loading</text>
      <text x="676" y="516" textAnchor="middle" fill="currentColor" fontSize="10">unloading</text>
      <text transform="rotate(-90 602 480)" x="602" y="480" textAnchor="middle" fill="currentColor" fontSize="10.5">force</text>
      <text x="710" y="548" textAnchor="middle" fill="currentColor" fontSize="10.5">stretch</text>
      <text x="705" y="572" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold">HYSTERESIS</text>
      <text x="705" y="590" textAnchor="middle" fill="currentColor" fontSize="10.5">Unload and the return path sits lower.</text>
      <text x="705" y="605" textAnchor="middle" fill="currentColor" fontSize="10.5">The gap is energy lost as heat.</text>

      <text x="440" y="630" textAnchor="middle" fill="currentColor" fontSize="11.5">
        All three follow from viscoelasticity: these tissues answer to how fast and how long you load them, not only how hard.
      </text>
    </svg>
  );
}
