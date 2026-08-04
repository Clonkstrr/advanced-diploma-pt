import type { Course } from '../../../types/content';
import { unit01 } from './unit01';
import { unit02 } from './unit02';
import { unit03 } from './unit03';
import { unit04 } from './unit04';
import { unit05 } from './unit05';

export const apt502: Course = {
  id: 'apt502',
  code: 'APT 502',
  title: 'Functional Human Anatomy',
  semester: 1,
  description:
    'The structures you are actually loading every time you coach a lift: what the tissues are made of and how they respond, how each joint is built and what that lets it do, and why two clients with the same instruction can need different movements.',
  units: [unit01, unit02, unit03, unit04, unit05],
};
