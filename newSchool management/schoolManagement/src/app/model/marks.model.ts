// Request payload for POST /api/marks
export interface Marks {
  id?: number;
  marksObtainedBangla: number;
  marksObtainedEnglish: number;
  marksObtainedMath: number;
  totalMarks?: number | null;
  grade?: string | null;
  status?: string | null;
  student: { id: number }; // only id is needed   // only id is needed
}

// Response DTO from GET /api/marks
export interface MarksDTO {
  id: number;
  marksObtainedBangla: number;
  marksObtainedEnglish: number;
  marksObtainedMath: number;
  totalMarks: number | null;
  grade: string | null;
  status: string | null;
  studentDTO?: { id: number; firstName?: string | null };
}
