import { StudentModel } from "./student.model";

export interface AttendanceModel {
  id: number;
  studentName: string;
  className: string;
  section: string;
  attendanceDate: Date;
  status: 'Present' | 'Absent' | 'Leave' | 'Late';
  student:StudentModel
}
