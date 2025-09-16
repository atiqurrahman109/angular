export interface Student {
  id: number;
  name: string; // adjust this based on your Student entity
}

export interface Attendance {
  id?: number;
  date: string; // in ISO format like "2025-09-15"
  present: boolean;
  student: Student;
}
