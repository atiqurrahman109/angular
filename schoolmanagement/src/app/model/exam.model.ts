import { Student } from "./student..model";

export interface ExamModel {
  id: number;
  examName: string;
  subject: string;
  mark: number;
  student: Student;
}
