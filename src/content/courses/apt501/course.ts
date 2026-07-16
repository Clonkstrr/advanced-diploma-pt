import type { Course } from '../../../types/content';
import { unit01 } from './unit01';

export const apt501: Course = {
  id: 'apt501',
  code: 'APT 501',
  title: 'Evidence-Based Professional Practice',
  semester: 1,
  description:
    'The research-literacy and professional foundation of the whole diploma: scope, ethics, and how to judge evidence so you can reject unsupported claims.',
  units: [unit01],
};
