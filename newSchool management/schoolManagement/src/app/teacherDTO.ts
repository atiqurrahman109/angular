import { TeacherModel } from "./model/teacher.model";

export interface TeacherRoutineDTO {
  id: number;
  className: string;
  subject: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  teacher?: TeacherModel;
}