// In-code SVG (spec §12): crisp, offline, themeable via currentColor.
export function DesignObservationTimeline() {
  return (
    <svg
      role="img"
      viewBox="0 0 900 668"
      width="100%"
      aria-labelledby="dot-title"
      className="diagram"
    >
      <title id="dot-title">
        The four observational designs laid on one timeline. A case report describes one person after
        the event. A cross-sectional study measures exposure and outcome in the same moment, so it has
        no width in time. A case-control study selects people by outcome today and looks backwards at a
        past nobody recorded. A cohort study measures a group first and follows it forward, which is the
        only one of the four that fixes the order in time. Each row lists what it can say and what it
        cannot. Circled numbers 1 to 4 mark the four notes listed beneath the figure.
      </title>
      <defs>
        <marker id="dot-arrow" viewBox="0 0 10 10" refX="9" refY="5"
          markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <text x="450" y="24" textAnchor="middle" fill="currentColor" fontSize="12" letterSpacing="1.6">
        WHEN EACH DESIGN LOOKS, AND WHICH WAY IT LOOKS
      </text>

      {/* ── the time axis ────────────────────────────────────────────────── */}
      <line x1="150" y1="64" x2="856" y2="64" stroke="currentColor" strokeWidth="1.4" markerEnd="url(#dot-arrow)" />
      <line x1="500" y1="58" x2="500" y2="72" stroke="currentColor" strokeWidth="1.4" />
      <text x="190" y="52" textAnchor="middle" fill="currentColor" fontSize="11">years before</text>
      <text x="500" y="52" textAnchor="middle" fill="currentColor" fontSize="11">the moment researchers arrive</text>
      <text x="806" y="52" textAnchor="middle" fill="currentColor" fontSize="11">years after</text>

      <line x1="8" y1="78" x2="892" y2="78" stroke="currentColor" strokeWidth="1" opacity="0.35" />

      {/* ── lane 1: case report ──────────────────────────────────────────── */}
      <text x="16" y="106" fill="currentColor" fontSize="12" fontWeight="bold">CASE REPORT</text>
      <text x="16" y="124" fill="currentColor" fontSize="11">one person</text>

      <rect x="470" y="94" width="62" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="534" y1="103" x2="546" y2="103" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <text x="552" y="107" fill="currentColor" fontSize="11">one person, written up after the event</text>

      <text x="150" y="150" fill="currentColor" fontSize="11">
        CAN SAY: this can happen, and here is the whole picture for one person in as much detail as you like.
      </text>
      <text x="150" y="172" fill="currentColor" fontSize="11">
        CANNOT SAY: how often, to whom, or why. One person is a story, not a rate. It raises a hand, it does not answer.
      </text>

      <line x1="8" y1="198" x2="892" y2="198" stroke="currentColor" strokeWidth="1" opacity="0.35" />

      {/* ── lane 2: cross-sectional ──────────────────────────────────────── */}
      <text x="16" y="226" fill="currentColor" fontSize="12" fontWeight="bold">CROSS-SECTIONAL</text>
      <text x="16" y="244" fill="currentColor" fontSize="11">everyone, once</text>

      <rect x="488" y="210" width="24" height="46" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="514" y1="226" x2="526" y2="226" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <text x="532" y="222" fill="currentColor" fontSize="11">exposure and outcome captured</text>
      <text x="532" y="240" fill="currentColor" fontSize="11">in the same single week</text>

      <circle cx="866" cy="232" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="866" y="236" textAnchor="middle" fill="currentColor" fontSize="11">1</text>

      <text x="150" y="274" fill="currentColor" fontSize="11">
        CAN SAY: how common each thing is, and whether the two travel together in this group right now.
      </text>
      <text x="150" y="296" fill="currentColor" fontSize="11">
        CANNOT SAY: which came first. Sitting could drive the pain, pain could drive the sitting, or a desk job drives both.
      </text>

      <line x1="8" y1="318" x2="892" y2="318" stroke="currentColor" strokeWidth="1" opacity="0.35" />

      {/* ── lane 3: case-control ─────────────────────────────────────────── */}
      <text x="16" y="346" fill="currentColor" fontSize="12" fontWeight="bold">CASE-CONTROL</text>
      <text x="16" y="364" fill="currentColor" fontSize="11">picked by outcome</text>

      <line x1="500" y1="330" x2="500" y2="362" stroke="currentColor" strokeWidth="2" />
      <line x1="494" y1="346" x2="188" y2="346" stroke="currentColor" strokeWidth="1.5"
        strokeDasharray="7 5" markerEnd="url(#dot-arrow)" />
      <text x="340" y="336" textAnchor="middle" fill="currentColor" fontSize="11">
        asking about a past nobody was recording
      </text>
      <text x="512" y="342" fill="currentColor" fontSize="11">people with the problem</text>
      <text x="512" y="360" fill="currentColor" fontSize="11">and people without it,</text>
      <text x="512" y="378" fill="currentColor" fontSize="11">chosen today</text>

      <circle cx="866" cy="352" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="866" y="356" textAnchor="middle" fill="currentColor" fontSize="11">2</text>

      <text x="150" y="404" fill="currentColor" fontSize="11">
        CAN SAY: whether people with the problem had more of the exposure than similar people without it.
      </text>
      <text x="150" y="424" fill="currentColor" fontSize="11">
        CANNOT SAY: much with confidence about an unrecorded past. Memory is not measurement.
      </text>
      <text x="150" y="442" fill="currentColor" fontSize="11">
        And the comparison group is chosen by the researchers, which is a second way the answer can be steered.
      </text>

      <line x1="8" y1="462" x2="892" y2="462" stroke="currentColor" strokeWidth="1" opacity="0.35" />

      {/* ── lane 4: cohort ───────────────────────────────────────────────── */}
      <text x="16" y="490" fill="currentColor" fontSize="12" fontWeight="bold">COHORT</text>
      <text x="16" y="508" fill="currentColor" fontSize="11">measured first,</text>
      <text x="16" y="524" fill="currentColor" fontSize="11">then followed</text>

      <line x1="250" y1="490" x2="250" y2="520" stroke="currentColor" strokeWidth="2" />
      <text x="250" y="484" textAnchor="middle" fill="currentColor" fontSize="11">measured at entry</text>
      <line x1="254" y1="506" x2="846" y2="506" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#dot-arrow)" />
      <text x="574" y="498" textAnchor="middle" fill="currentColor" fontSize="11">
        then followed forward, counting what happens
      </text>

      <circle cx="866" cy="536" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="866" y="540" textAnchor="middle" fill="currentColor" fontSize="11">3</text>

      <text x="150" y="548" fill="currentColor" fontSize="11">
        CAN SAY: exposure was recorded before the outcome existed, so the order in time is solid. Real rates, real risks.
      </text>
      <text x="150" y="568" fill="currentColor" fontSize="11">
        CANNOT SAY: caused. Nobody assigned anyone. People who choose to run 80 km a week differ in a hundred other ways.
      </text>
      <text x="150" y="586" fill="currentColor" fontSize="11">
        Adjustment can correct for the differences somebody thought to write down, and for no others.
      </text>

      {/* ── the line that applies to all four ────────────────────────────── */}
      <rect x="16" y="606" width="868" height="50" rx="8" fill="none" stroke="currentColor"
        strokeWidth="1.5" strokeDasharray="6 5" />
      <circle cx="40" cy="631" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <text x="40" y="635" textAnchor="middle" fill="currentColor" fontSize="11">4</text>
      <text x="466" y="626" textAnchor="middle" fill="currentColor" fontSize="11">
        Not one row on this page assigned anybody to anything.
      </text>
      <text x="466" y="646" textAnchor="middle" fill="currentColor" fontSize="11">
        So every row earns &#8220;was associated with&#8221;, and no row earns &#8220;caused&#8221;, however many people it followed.
      </text>
    </svg>
  );
}
