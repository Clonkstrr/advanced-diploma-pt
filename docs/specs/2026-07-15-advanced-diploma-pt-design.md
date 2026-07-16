# Advanced Diploma in Personal Training Science and Coaching — Design Spec

**Date:** 2026-07-15
**Status:** Draft for approval
**Author:** Claude (with Josh)

---

## 1. What we are building

A self-contained **macOS desktop application** that delivers a rigorous, upper-undergraduate / post-certification course in Personal Training Science and Coaching. The learner (an experienced trainer with a foundation in personal training, nutrition, and pre-natal work) works entirely inside the app. It looks and feels like a real university program — deep content, annotated diagrams, interactive labs, branching client cases, quizzes and cumulative examinations, spaced recall, and a progress/mastery system — not a shallow video course.

**Core experience promise:** she opens the app, learns, closes it, comes back days later, and it silently remembers *exactly* where she was and everything she has done. No save button, no backups, no internet.

### Design principles
- **Plain language, deep substance.** Wording stays simple and jargon-free; rigor comes from correct science, integration, and judgment — never from complexity of prose.
- **Applied over passive.** Following the real ACSM/NSCA/CSEP emphasis, most learning is cases, coaching decisions, program construction, and practical simulation — not lectures.
- **Everything is in-app.** No human graders, real clients, in-person practicals, or external requirements. Every real-world competency is assessed through interactive simulation.
- **Credible sources only.** Content is grounded in real guidelines, position stands, and established textbooks, with per-lesson provenance. No fabricated citations.
- **Scope discipline.** The app repeatedly reinforces what a trainer does *not* do (diagnose, prescribe medication, provide medical nutrition therapy, etc.).

---

## 2. Learner, platform, and hard constraints

| Constraint | Decision |
|---|---|
| Device | MacBook (macOS). Must run natively and reliably there. |
| Connectivity | Fully offline. All assets (diagrams, images, data) embedded. |
| Persistence | Seamless auto-save + resume-exactly-where-left-off. No manual backup for normal use. |
| Prior knowledge | Experienced trainer; diagnostic phase lets her skip mastered material. |
| Tone | University-level depth, plain-English delivery. |

---

## 3. Delivery and technical architecture

### 3.1 Delivery vehicle
A **macOS `.app`** built as an **Electron shell around an offline web app**. Rationale:
- Native double-click launch; no browser, server, or internet.
- Electron provides a **durable persistent storage partition**, so IndexedDB/localStorage never gets evicted — this is what makes seamless auto-save reliable on macOS (a plain `file://` page cannot guarantee this in Safari).
- The same web-app codebase can also run served on `http://localhost` during development and testing on Windows, with identical behavior.

**Build/delivery note (risk + mitigation):** development happens on Windows; the web app is fully built and verified in-browser there. The Mac `.app` is packaged afterward. If unsigned, the learner performs a one-time right-click → Open (standard for indie apps). Storage is written behind a small adapter so seamless auto-resume holds regardless of shell (Electron partition, or localhost origin as a fallback).

### 3.2 Four layers
1. **Content layer** — All course material is *structured data* conforming to a fixed lesson schema (§5). Authoring a new course = adding data, not changing engine code. Content is versioned and carries QC metadata.
2. **Engine layer** — Renders lessons; runs the twelve interactive component types; grades interactions; runs the spaced-repetition scheduler, quiz/exam logic, and mastery gates.
3. **Progress layer** — Persists every state change; tracks per-unit / per-course completion, mastery %, attempt history, and the recall queue. Provides optional export/import.
4. **Presentation layer** — Calm, academic UI: catalog → semester → course → unit, with a persistent progress dashboard.

### 3.3 Stack
- App shell: **Electron** (macOS target).
- UI: **React + Vite**, built into an offline static bundle. Chosen deliberately over lighter alternatives (Svelte/Preact) because it is the most standard, best-documented toolchain for Electron — which de-risks the Windows→Mac packaging step — and bundle size is irrelevant for a desktop app. Maintainable across 24 courses of data-driven interactive content.
- Storage: **IndexedDB** via a thin `StorageAdapter` (single source of truth), with a JSON export/import for cross-device transfer.
- Diagrams: **inline SVG generated in code** (force vectors, response graphs, decision trees, timelines, anatomy schematics), plus embedded raster images where a schematic will not do. All assets are local; nothing is fetched at runtime.
- No telemetry, no network calls.

---

## 4. Curriculum structure

Mirrors the approved architecture. Four semesters, 24 core courses, plus a diagnostic/bridging phase, optional specialization tracks, and a capstone — all delivered in-app.

- **Semester 0 — Diagnostic & Bridging:** in-app placement (knowledge exam + technique-analysis + branching consultation sim) → competency map → targeted bridging lessons.
- **Semester 1 — Scientific & Coaching Foundations:** APT 501–506.
- **Semester 2 — Assessment & Core Training Methods:** APT 511–516.
- **Semester 3 — Nutrition, Lifespan & Special Populations:** APT 601–606.
- **Semester 4 — Advanced Practice & Professional Mastery:** APT 701–706 (incl. capstone).
- **Specialization tracks & capstone:** authored after the core.

Courses are delivered in curriculum order so later courses can pull earlier concepts forward (cumulative review).

---

## 5. The lesson model (identical spine for every unit)

Every unit is composed of the same twelve components, stored as data:

1. **Diagnostic pretest** — 5–10 questions before instruction; result personalizes emphasis.
2. **Learning outcomes** — written at recall, application, analysis, and synthesis levels.
3. **Core instruction** — short concept blocks, not one long lecture.
4. **Annotated visual** — an SVG diagram (anatomy, force diagram, energy-system timeline, decision tree, periodization calendar, response graph…) with callouts.
5. **Worked example** — expert reasoning shown step by step.
6. **Interactive lab** — measurement, calculation, movement analysis, or programming task.
7. **Branching case** — decisions change the client outcome.
8. **Error-identification exercise** — a video/image/document/program with deliberate mistakes to catch.
9. **Active-recall set** — flashcards + free-response prompts feeding the scheduler.
10. **Unit quiz** — fresh items (not duplicates of lesson examples).
11. **Teach-back task** — she explains the concept in client-friendly language; assessed by rubric + expert model answer.
12. **Cumulative review** — earlier-course concepts reappear inside later material.

### Question-bank distribution (per course)
20% recall · 40% application · 30% analysis · 10% synthesis/defence.

---

## 6. Interactive component specifications

Each of the twelve types is a reusable engine component driven by data:

- **Multiple-choice / multi-select / ordering / matching** — auto-graded; rationale shown per option.
- **Numeric / calculation labs** — she enters values (e.g., heart-rate reserve, effect size, absolute vs relative risk); tolerance-checked with worked solution.
- **Interactive simulators** — e.g., read a virtual blood-pressure gauge; adjust a program variable and see the modeled response.
- **Technique error-ID** — annotated exercise stills/animation; she flags faults vs. harmless individual variation.
- **Branching case player** — a decision tree; each choice advances a client state and is scored against best practice, including referral/termination triggers.
- **Program builder** — drag/select exercises, sets/reps/intensity, phases; checked against a needs-analysis rubric.
- **Evidence appraisal tool** — grade a claim's supporting evidence against the source hierarchy; produce a short structured brief.
- **Flashcards / free-response recall** — feeds the spaced-repetition queue.
- **Teach-back / reflection** — free text compared against an expert model answer and a rubric checklist she self-verifies.

**Open-response policy (offline):** the vast majority of interactions are auto-gradable (select / order / build / branch / numeric). Genuinely open reflection uses **rubric + expert model-answer self-assessment** rather than pretending a human panel exists. This keeps grading honest and fully offline.

---

## 7. Assessment and mastery system

### Program weighting (per architecture)
Cumulative knowledge exams 20% · Case analysis & program design 25% · Practical/coaching sims 30% · Practicum portfolio 15% · Capstone & defence 10%.

### Mastery gates (enforced by the engine)
- **80% overall** minimum to progress/graduate.
- **85%** on practical/coaching simulation stations.
- **Every safety-critical item must pass** — screening, emergency response, and scope-of-practice items **cannot be offset** by high marks elsewhere.
- Failed practical skills require **remediation and reassessment**.
- She must **defend decisions**, not merely produce a program.
- Each semester ends with a **cumulative exam** incorporating earlier material.

### Real-world → in-app assessment translation
| Architecture (real-world) | In-app equivalent |
|---|---|
| Recorded training session / intake interview | Branching coaching simulation scored on listening, autonomy support, cue choice |
| Technique practical (squat, hinge, …) | Video/animation error-ID + cue-selection drills |
| Blood-pressure & fitness assessments | Interactive simulators (read gauge, calculate, flag referral) |
| Demonstrate/teach/regress/progress 30 exercises | Exercise-coaching builder checked vs. model answers |
| 200 supervised practicum hours | Virtual client case library across all required categories; completed cases replace hours |
| Capstone: 12 case reports, video portfolio, oral defence | In-app capstone: program-builder projects, rubric-graded case reports, structured decision-defence |
| Practical exam stations (unseen cases) | Timed OSCE-style auto-scored stations |
| CPR/AED entry requirement | Taught + tested emergency module and simulation (with honest note that real CPR cert is needed to practice) |

---

## 8. Spaced active-recall engine

A real scheduler resurfaces each major concept at: **end of lesson → ~3 days → 1 week → 2 weeks → semester end → and again inside a later client case.** Later appearances require **harder application**, not identical questions. Implemented as a per-concept queue with due-dates stored in the progress layer; a "Review due" surface appears on the dashboard. This is the mechanism that makes the program feel *retained*, not merely *watched*.

---

## 9. Progress, persistence, and resume

- **Auto-save:** every meaningful state change (answer submitted, block completed, position moved, recall item graded) is written immediately (debounced) via the `StorageAdapter`.
- **Resume:** on launch, the app restores the last position — deep-linking to the exact course/unit/component — plus all mastery, history, and recall schedule.
- **Dashboard:** overall program progress; per-semester and per-course completion and mastery %; review-due count; competency map from the diagnostic; next recommended action.
- **Export/import:** optional single-file JSON for moving progress between Macs. Not required for normal use.

---

## 10. Sourcing and quality control

### Source hierarchy (highest first)
1. Current clinical/professional guidelines and position stands (ACSM, NSCA, CSEP, etc.).
2. Systematic reviews & meta-analyses.
3. High-quality controlled studies.
4. Prospective observational research.
5. Established exercise-science textbooks (e.g., ACSM's *Guidelines for Exercise Testing and Prescription*; NSCA *Essentials of Strength Training and Conditioning*; McArdle et al., *Exercise Physiology*; Neumann, *Kinesiology of the Musculoskeletal System*).
6. Expert opinion only when stronger evidence is unavailable.

### Per-lesson QC metadata block (stored with every scientific/clinical lesson)
Source & publication date · evidence type · date last reviewed · jurisdictional notes · scope-of-practice warning (where applicable) · confidence level · known controversies / evidence gaps · scheduled review date · change log.

### Verifiability policy
Content cites **real** sources at the level of confidence I can substantiate. Where an exact page/DOI cannot be verified, the claim is attributed to the established source at the level I'm confident in and **flagged for verification** rather than fabricated. Grounded research (web/reference lookup) is used during authoring; the app itself ships offline with citations embedded. Sensitive areas (pregnancy/postpartum, supplements, medical screening, privacy, emergency, legal) are marked for **at least annual review**.

---

## 11. Non-negotiable scope guardrails (reinforced throughout)

The course repeatedly reinforces that the trainer does **not**: diagnose injuries/diseases/pelvic-floor/eating/mental-health conditions; prescribe or change medication; provide medical nutrition therapy unless separately licensed; interpret imaging/labs as a clinician; represent post-rehab training as physiotherapy; promise to correct posture, prevent all injuries, or cure pain; continue testing/training when termination or referral criteria are present; or use a specialization certificate to override local law, insurance, or credential scope. Referral and collaboration are taught as core competencies.

---

## 12. Visual / diagram approach

All diagrams are **generated as inline SVG in code** so they are crisp, offline, themeable, and annotatable: anatomy schematics, joint-action diagrams, force-vector/torque diagrams, energy-system timelines, heart-rate/blood-pressure response graphs, screening/referral decision trees, periodization calendars, body-composition measurement-error demonstrations, business process maps. Where a schematic is insufficient (e.g., exercise technique), embedded local images/animation frames are used. No 3D-render dependency for the first deliverable; anatomy is delivered as high-quality annotated 2D schematics.

---

## 13. UI / UX

Academic, calm, distraction-free. Primary screens:
- **Home / dashboard** — progress, review-due, next action, competency map.
- **Catalog** — semesters → courses → units, with completion/mastery indicators.
- **Unit player** — steps through the twelve components with a progress rail; auto-saves continuously.
- **Review** — due spaced-recall items.
- **Reference** — per-lesson sources and QC metadata; glossary; scope-of-practice guardrails.
- **Settings** — theme (light/dark), text size, export/import.

Light and dark themes; large readable type; keyboard navigable.

---

## 14. First deliverable (this build)

**Complete platform + APT 501 authored to full university depth**, proving the entire system end-to-end.

### Platform (all engine + UI features above)
Lesson renderer, all twelve interactive component types, spaced-repetition engine, quiz/exam and mastery-gate logic, progress/persistence with seamless auto-resume, dashboard, reference/QC surfaces, packaged as a macOS `.app`.

### APT 501 — Evidence-Based Professional Practice (full depth)
Authored into units covering: scope & role and the boundaries between trainer / physio / dietitian / physician / psychologist / clinical exercise professional; informed consent, confidentiality, privacy, boundaries; documentation, notes, incident reports, referral letters; standard of care, negligence, liability, risk management; conflicts of interest, testimonials, before/after images, marketing claims; formulating answerable questions (PICO); study designs (RCT, cohort, case-control, cross-sectional, case report); correlation vs. causation; bias, confounding, placebo; statistical vs. practical significance; means/SD/CI/effect size/relative vs. absolute risk; reading systematic reviews, meta-analyses, guidelines, position stands; evaluating influencers/supplement claims/trends; building a CPD plan. **Signature lab:** investigate five common fitness claims, grade the evidence, and produce a two-page evidence brief. Each unit includes all twelve components, QC metadata, quiz, and seeded spaced-recall items.

### Acceptance criteria for this build
- App launches as a macOS `.app`, fully offline.
- Close-and-reopen restores exact position and all progress automatically.
- APT 501 is completable end-to-end with all twelve component types functioning and graded.
- Mastery gates, cumulative quiz, and safety/scope items enforced.
- Spaced-recall items schedule and resurface correctly.
- Every APT 501 lesson carries verifiable sourcing + QC metadata; scope guardrails present.

---

## 15. Roadmap after first deliverable
1. Author remaining Semester 1 courses (502–506) in order.
2. Semesters 2–4 (511–516, 601–606, 701–706).
3. Diagnostic/bridging phase and competency-map-driven skips.
4. Capstone project and OSCE-style final practical.
5. Optional specialization tracks (≈80–120 hrs each).
6. Package/sign the `.app` for distribution.

---

## 16. Decisions log
- **Delivery:** macOS `.app` (Electron) over plain HTML/localhost — chosen for seamless, reliable auto-save + native feel.
- **First scope:** platform + one full course (APT 501) over broad-but-shallow — chosen to set the depth bar and prove the system.
- **First course:** APT 501 — the research-literacy foundation the whole diploma depends on.
- **Open responses:** rubric + model-answer self-assessment (offline honesty) over a simulated human panel.
- **Diagrams:** in-code SVG over external assets/3D — offline, crisp, maintainable.

## 17. Non-goals (first build)
- No cloud sync, accounts, or telemetry.
- No 3D anatomy engine (annotated 2D schematics instead).
- No human grading or live coaching.
- Not accredited university credit (internal "planning credits" only, per architecture).

## 18. Risks & mitigations
- **Windows→Mac packaging:** build/verify web app on Windows; package `.app` after; storage adapter guarantees seamless resume regardless of shell; one-time right-click→Open if unsigned.
- **Content depth at scale:** fixed lesson schema + grounded-sourcing workflow; author course-by-course; QC metadata + review dates keep it maintainable and honest.
- **Sourcing accuracy:** verifiability policy — attribute at confident level, flag unverified, never fabricate.
