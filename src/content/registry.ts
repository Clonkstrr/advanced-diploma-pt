import type { Course } from '../types/content';
import { apt501 } from './courses/apt501/course';
import { apt502 } from './courses/apt502/course';

export const courses: Course[] = [apt501, apt502];

export function getCourse(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getUnit(courseId: string, unitId: string) {
  const course = getCourse(courseId);
  const unit = course?.units.find((u) => u.id === unitId);
  return unit ? { course, unit } : undefined;
}
