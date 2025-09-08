export class RoutineModel {
  id?: number;
  className?: string;
  subject?: string;
  dayOfWeek?: string;
  startTime?: string;
  endTime?: string;
  teacherId?: number;  // only send ID to backend
}
