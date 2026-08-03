// The full program map (from the approved architecture): every course the
// diploma will contain, whether authored yet or not. The catalog renders this
// so the whole program is visible from day one; authored courses come from
// the registry, the rest appear as "coming soon".
export interface PlannedCourse { code: string; title: string; }
export interface Semester { title: string; courses: PlannedCourse[]; }

export const curriculum: Semester[] = [
  {
    title: 'Semester 1 — Scientific & Coaching Foundations',
    courses: [
      { code: 'APT 501', title: 'Evidence-Based Professional Practice' },
      { code: 'APT 502', title: 'Functional Human Anatomy' },
      { code: 'APT 503', title: 'Systems Physiology and Bioenergetics' },
      { code: 'APT 504', title: 'Exercise Physiology and Training Adaptation' },
      { code: 'APT 505', title: 'Kinesiology, Biomechanics and Motor Control' },
      { code: 'APT 506', title: 'Coaching Psychology, Communication and Skill Acquisition' },
    ],
  },
  {
    title: 'Semester 2 — Assessment & Core Training Methods',
    courses: [
      { code: 'APT 511', title: 'Client Consultation, Screening, Risk and Emergency Procedures' },
      { code: 'APT 512', title: 'Fitness, Movement and Performance Assessment' },
      { code: 'APT 513', title: 'Resistance Training Science and Exercise Technique' },
      { code: 'APT 514', title: 'Cardiorespiratory and Metabolic Conditioning' },
      { code: 'APT 515', title: 'Mobility, Flexibility, Balance, Core Function and Gait' },
      { code: 'APT 516', title: 'Program Design, Periodization and Load Monitoring' },
    ],
  },
  {
    title: 'Semester 3 — Nutrition, Lifespan & Special Populations',
    courses: [
      { code: 'APT 601', title: 'Nutrition and Hydration for Health and Performance' },
      { code: 'APT 602', title: 'Body Composition, Weight Management and Eating Behaviour' },
      { code: 'APT 603', title: 'Pregnancy, Postpartum, Pelvic Health and the Female Lifespan' },
      { code: 'APT 604', title: 'Youth Training and Long-Term Development' },
      { code: 'APT 605', title: 'Older Adults, Frailty, Falls and Healthy Aging' },
      { code: 'APT 606', title: 'Chronic Conditions, Medications and Adaptive Exercise' },
    ],
  },
  {
    title: 'Semester 4 — Advanced Practice & Professional Mastery',
    courses: [
      { code: 'APT 701', title: 'Pain Science, Musculoskeletal Conditions and Return to Training' },
      { code: 'APT 702', title: 'Advanced Strength, Hypertrophy, Power, Speed and Sport Performance' },
      { code: 'APT 703', title: 'Recovery, Sleep, Stress, Fatigue and Environmental Physiology' },
      { code: 'APT 704', title: 'Mental Health, Trauma-Informed and Inclusive Coaching' },
      { code: 'APT 705', title: 'Business, Law, Technology, Group and Online Practice' },
      { code: 'APT 706', title: 'Supervised Practicum, Case Conference and Capstone' },
    ],
  },
];
