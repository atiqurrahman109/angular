export interface SubjectMarks {
  subject: string;
  marks: number;
  grade: string;
}

export interface ReportCard {
  studentId: number;
  studentName: string;
  className: string;
  examName: string;
  marks: SubjectMarks[];
}
