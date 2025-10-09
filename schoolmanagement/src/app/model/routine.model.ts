import { SchoolClass } from "./schoolclass.model";
import { Section } from "./section.model";
import { Teacher } from "./teacher.model";

export interface Routine {
  id: number;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  schoolClass: SchoolClass;
  teacher: Teacher;
  subject: string;
  section: Section;
}