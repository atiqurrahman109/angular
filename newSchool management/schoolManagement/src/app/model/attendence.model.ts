export class Attendance {
  id?: number;
  date!: string; // Format: YYYY-MM-DD
  status!: 'Present' | 'Absent' | 'Late' | 'Leave';
  remarks?: string;

  studentId!: number; // Linking to a student
}
