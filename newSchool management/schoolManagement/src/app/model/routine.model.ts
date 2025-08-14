// routine.model.ts
export interface RoutineModel {
  id?: number;          // optional unique id
  className: string;    // e.g. "Grade 8"
  subject: string;      // e.g. "Math"
  teacherId: string;    // link to teacher
  teacherName?: string; // optional, populated from backend
  dayOfWeek: string;    // e.g. "Monday"
  startTime: string;    // e.g. "09:00"
  endTime: string;      // e.g. "10:00"
}
