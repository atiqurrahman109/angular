import { TeacherModel } from "./teacher.model";

export class ClassSchedule {
  id?: number;                // Schedule ID
  className?: string;         // Class name (e.g., Grade 5, Class A)
  section?: string;           // Section (e.g., A, B)
  subject?: string;           // Subject name (e.g., Math, English)
  dayOfWeek?: string;         // Day of the week (e.g., Monday)
  startTime?: string;         // Start time (HH:mm format)
  endTime?: string;           // End time (HH:mm format)
}
