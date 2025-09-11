import { TeacherRoutineDTO } from "./teacherDTO";


export interface ClassRoutineDTO {
  id: number;
  className: string;
  subject: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  teacherDTO: TeacherRoutineDTO;
}
