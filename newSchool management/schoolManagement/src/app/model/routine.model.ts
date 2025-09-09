import { TeacherModel } from './teacher.model';

export interface RoutineModel {
  id?: number;
  className?: string;
  subject?: string;
  dayOfWeek?: string;
  startTime?: string;
  endTime?: string;
  teacher?: TeacherModel;
}
