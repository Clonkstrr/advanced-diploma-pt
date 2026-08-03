import type { Course } from '../../../types/content';
import { unit02 } from './unit02';
import { unit03 } from './unit03';
import { unit04 } from './unit04';
import { unit05 } from './unit05';
import { unit06 } from './unit06';

// The original scope-of-practice seed unit (unit01) was removed by owner
// decision: the learner is an already-certified PT and that material is
// beneath this diploma's level. Display codes run 501.1–501.5 while the
// internal unit ids keep their original numbering (u2–u6) so existing
// saved progress can never collide with a differently numbered unit.
export const apt501: Course = {
  id: 'apt501',
  code: 'APT 501',
  title: 'Evidence-Based Professional Practice',
  semester: 1,
  description:
    'The research-literacy foundation of the whole diploma: how studies work, how they mislead, what the numbers mean, how to read the papers that summarise them, and how to judge the claims your clients bring you.',
  units: [unit02, unit03, unit04, unit05, unit06],
};
