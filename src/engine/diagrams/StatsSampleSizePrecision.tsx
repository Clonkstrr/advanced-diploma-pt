// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
// Panel A separates SD (how far people sit from each other) from SE (how far the
// estimate would wobble on a re-run). Panel B holds the point estimate at +3 kg
// and shrinks the interval as n grows: SD 8 kg, SE = SD / sqrt(n), 95% interval
// about the estimate plus or minus two SE. So n = 16, 64, 256 gives SE 2, 1, 0.5.
// Panel A scale: x = 90 + (kg + 16) * 16. Panel B scale: x = 200 + (kg + 2) * 48.
export function StatsSampleSizePrecision() {
  return (
    <svg
      role="img"
      viewBox="0 0 820 600"
      width="100%"
      aria-labelledby="ssp-title"
      className="diagram"
    >
      <title id="ssp-title">
        What sample size buys you. Above: sixteen individual ten-week strength changes scattered
        widely with a standard deviation of 8 kilograms, and beneath them the means of repeated
        sixteen-person studies bunched tightly around the same centre with a standard error of 2
        kilograms. Below: the same point estimate of plus 3 kilograms reported by studies of 16, 64
        and 256 people, whose 95 percent confidence intervals narrow from minus 1 to plus 7, then
        plus 1 to plus 5, then plus 2 to plus 4. Circled numbers 1 to 4 mark the four notes listed
        beneath the figure.
      </title>

      <rect x="20" y="48" width="780" height="225" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />
      <rect x="20" y="286" width="780" height="290" rx="10" fill="none" stroke="currentColor"
        strokeWidth="1" strokeDasharray="4 5" opacity="0.55" />

      <text x="410" y="34" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.6">
        WHAT SAMPLE SIZE BUYS YOU
      </text>

      {/* ── PANEL A: spread of people vs spread of the estimate ───────── */}
      <text x="410" y="72" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        SPREAD OF PEOPLE, SPREAD OF THE ESTIMATE
      </text>

      <text x="90" y="98" fill="currentColor" fontSize="11" fontWeight="bold">
        SD 8 kg: sixteen lifters, one study
      </text>
      <circle cx="170" cy="112" r="4" fill="currentColor" />
      <circle cx="250" cy="112" r="4" fill="currentColor" />
      <circle cx="298" cy="112" r="4" fill="currentColor" />
      <circle cx="330" cy="112" r="4" fill="currentColor" />
      <circle cx="346" cy="112" r="4" fill="currentColor" />
      <circle cx="378" cy="112" r="4" fill="currentColor" />
      <circle cx="394" cy="112" r="4" fill="currentColor" />
      <circle cx="410" cy="112" r="4" fill="currentColor" />
      <circle cx="426" cy="112" r="4" fill="currentColor" />
      <circle cx="458" cy="112" r="4" fill="currentColor" />
      <circle cx="474" cy="112" r="4" fill="currentColor" />
      <circle cx="490" cy="112" r="4" fill="currentColor" />
      <circle cx="506" cy="112" r="4" fill="currentColor" />
      <circle cx="538" cy="112" r="4" fill="currentColor" />
      <circle cx="586" cy="112" r="4" fill="currentColor" />
      <circle cx="634" cy="112" r="4" fill="currentColor" />

      <text x="400" y="142" fill="currentColor" fontSize="11">true mean, +3 kg</text>

      <text x="90" y="162" fill="currentColor" fontSize="11" fontWeight="bold">
        SE 2 kg: the mean of that study, re-run again and again
      </text>
      <circle cx="333" cy="176" r="4" fill="currentColor" />
      <circle cx="356" cy="176" r="4" fill="currentColor" />
      <circle cx="372" cy="176" r="4" fill="currentColor" />
      <circle cx="383" cy="176" r="4" fill="currentColor" />
      <circle cx="394" cy="176" r="4" fill="currentColor" />
      <circle cx="407" cy="176" r="4" fill="currentColor" />
      <circle cx="420" cy="176" r="4" fill="currentColor" />
      <circle cx="434" cy="176" r="4" fill="currentColor" />
      <circle cx="455" cy="176" r="4" fill="currentColor" />

      <line x1="394" y1="92" x2="394" y2="228" stroke="currentColor" strokeWidth="1.2"
        strokeDasharray="4 4" opacity="0.8" />

      <text x="90" y="206" fill="currentColor" fontSize="11">
        Same centre, very different width. Tiny error bars on a chart are usually drawing SE, not SD.
      </text>

      <line x1="90" y1="228" x2="730" y2="228" stroke="currentColor" strokeWidth="1.2" />
      <line x1="90" y1="228" x2="90" y2="234" stroke="currentColor" strokeWidth="1.2" />
      <line x1="218" y1="228" x2="218" y2="234" stroke="currentColor" strokeWidth="1.2" />
      <line x1="346" y1="228" x2="346" y2="234" stroke="currentColor" strokeWidth="1.2" />
      <line x1="474" y1="228" x2="474" y2="234" stroke="currentColor" strokeWidth="1.2" />
      <line x1="602" y1="228" x2="602" y2="234" stroke="currentColor" strokeWidth="1.2" />
      <line x1="730" y1="228" x2="730" y2="234" stroke="currentColor" strokeWidth="1.2" />
      <text x="90" y="248" textAnchor="middle" fill="currentColor" fontSize="11">−16</text>
      <text x="218" y="248" textAnchor="middle" fill="currentColor" fontSize="11">−8</text>
      <text x="346" y="248" textAnchor="middle" fill="currentColor" fontSize="11">0</text>
      <text x="474" y="248" textAnchor="middle" fill="currentColor" fontSize="11">+8</text>
      <text x="602" y="248" textAnchor="middle" fill="currentColor" fontSize="11">+16</text>
      <text x="730" y="248" textAnchor="middle" fill="currentColor" fontSize="11">+24</text>
      <text x="410" y="266" textAnchor="middle" fill="currentColor" fontSize="11">
        ten-week change in squat 1RM (kg)
      </text>

      <circle cx="46" cy="112" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="46" y="116" textAnchor="middle" fill="currentColor" fontSize="11">1</text>
      <line x1="56" y1="112" x2="80" y2="112" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="46" cy="176" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="46" y="180" textAnchor="middle" fill="currentColor" fontSize="11">2</text>
      <line x1="56" y1="176" x2="80" y2="176" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      {/* ── PANEL B: the same result at three study sizes ─────────────── */}
      <text x="410" y="312" textAnchor="middle" fill="currentColor" fontSize="11" letterSpacing="1.4">
        ONE RESULT, THREE STUDY SIZES
      </text>
      <text x="410" y="332" textAnchor="middle" fill="currentColor" fontSize="11">
        SD 8 kg throughout. SE = SD ÷ √n, and a 95% interval runs about two SE either side.
      </text>

      <line x1="296" y1="344" x2="296" y2="530" stroke="currentColor" strokeWidth="1.2"
        strokeDasharray="4 4" opacity="0.8" />

      {/* study 1: n = 16 */}
      <text x="190" y="354" textAnchor="end" fill="currentColor" fontSize="12" fontWeight="bold">n = 16</text>
      <text x="190" y="370" textAnchor="end" fill="currentColor" fontSize="11">SE 2.0 kg</text>
      <text x="440" y="346" textAnchor="middle" fill="currentColor" fontSize="11">95% CI −1 to +7 kg</text>
      <line x1="248" y1="358" x2="632" y2="358" stroke="currentColor" strokeWidth="2" />
      <line x1="248" y1="351" x2="248" y2="365" stroke="currentColor" strokeWidth="2" />
      <line x1="632" y1="351" x2="632" y2="365" stroke="currentColor" strokeWidth="2" />
      <circle cx="440" cy="358" r="5" fill="currentColor" />
      <text x="440" y="384" textAnchor="middle" fill="currentColor" fontSize="11">
        a small loss through to a big gain: nothing is settled
      </text>

      {/* study 2: n = 64 */}
      <text x="190" y="420" textAnchor="end" fill="currentColor" fontSize="12" fontWeight="bold">n = 64</text>
      <text x="190" y="436" textAnchor="end" fill="currentColor" fontSize="11">SE 1.0 kg</text>
      <text x="440" y="412" textAnchor="middle" fill="currentColor" fontSize="11">95% CI +1 to +5 kg</text>
      <line x1="344" y1="424" x2="536" y2="424" stroke="currentColor" strokeWidth="2" />
      <line x1="344" y1="417" x2="344" y2="431" stroke="currentColor" strokeWidth="2" />
      <line x1="536" y1="417" x2="536" y2="431" stroke="currentColor" strokeWidth="2" />
      <circle cx="440" cy="424" r="5" fill="currentColor" />
      <text x="440" y="450" textAnchor="middle" fill="currentColor" fontSize="11">
        an effect is likely, but the size is still loose
      </text>

      {/* study 3: n = 256 */}
      <text x="190" y="486" textAnchor="end" fill="currentColor" fontSize="12" fontWeight="bold">n = 256</text>
      <text x="190" y="502" textAnchor="end" fill="currentColor" fontSize="11">SE 0.5 kg</text>
      <text x="440" y="478" textAnchor="middle" fill="currentColor" fontSize="11">95% CI +2 to +4 kg</text>
      <line x1="392" y1="490" x2="488" y2="490" stroke="currentColor" strokeWidth="2" />
      <line x1="392" y1="483" x2="392" y2="497" stroke="currentColor" strokeWidth="2" />
      <line x1="488" y1="483" x2="488" y2="497" stroke="currentColor" strokeWidth="2" />
      <circle cx="440" cy="490" r="5" fill="currentColor" />
      <text x="440" y="516" textAnchor="middle" fill="currentColor" fontSize="11">
        precise enough to hold against a yardstick
      </text>

      <line x1="200" y1="530" x2="680" y2="530" stroke="currentColor" strokeWidth="1.2" />
      <line x1="200" y1="530" x2="200" y2="536" stroke="currentColor" strokeWidth="1.2" />
      <line x1="296" y1="530" x2="296" y2="536" stroke="currentColor" strokeWidth="1.2" />
      <line x1="392" y1="530" x2="392" y2="536" stroke="currentColor" strokeWidth="1.2" />
      <line x1="488" y1="530" x2="488" y2="536" stroke="currentColor" strokeWidth="1.2" />
      <line x1="584" y1="530" x2="584" y2="536" stroke="currentColor" strokeWidth="1.2" />
      <line x1="680" y1="530" x2="680" y2="536" stroke="currentColor" strokeWidth="1.2" />
      <text x="200" y="550" textAnchor="middle" fill="currentColor" fontSize="11">−2</text>
      <text x="296" y="550" textAnchor="middle" fill="currentColor" fontSize="11">0</text>
      <text x="392" y="550" textAnchor="middle" fill="currentColor" fontSize="11">+2</text>
      <text x="488" y="550" textAnchor="middle" fill="currentColor" fontSize="11">+4</text>
      <text x="584" y="550" textAnchor="middle" fill="currentColor" fontSize="11">+6</text>
      <text x="680" y="550" textAnchor="middle" fill="currentColor" fontSize="11">+8</text>
      <text x="440" y="568" textAnchor="middle" fill="currentColor" fontSize="11">
        difference vs the control program (kg)
      </text>

      <circle cx="46" cy="358" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="46" y="362" textAnchor="middle" fill="currentColor" fontSize="11">3</text>
      <line x1="56" y1="358" x2="86" y2="358" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="46" cy="490" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="46" y="494" textAnchor="middle" fill="currentColor" fontSize="11">4</text>
      <line x1="56" y1="490" x2="86" y2="490" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
