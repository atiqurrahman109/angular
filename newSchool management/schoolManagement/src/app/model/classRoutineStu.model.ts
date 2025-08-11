export interface ClassRoutineModel {
  id?: number;          // optional unique id
  className: string;    // e.g. "Grade 8"
  subject: string;      // e.g. "Math"
  teacherId: number;    // link to teacher
  teacherName?: string; // optional, populated when joining with teacher data
  dayOfWeek: string;    // e.g. "Monday"
  startTime: string;    // e.g. "09:00"
  endTime: string;      // e.g. "10:00"
}
