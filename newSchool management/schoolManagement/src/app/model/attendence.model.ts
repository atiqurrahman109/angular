export interface AttendanceModel {
  studentId: number;
  studentName: string;
  className: string;
  section: string;
  attendanceDate: Date;
  status: 'Present' | 'Absent' | 'Leave' | 'Late';
}
