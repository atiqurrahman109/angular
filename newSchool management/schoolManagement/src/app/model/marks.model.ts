export interface StudentDTO {
  id: number;
  firstName: string;
}

export interface MarksDTO {
  id: number;
  marksObtainedBangla: number;
  marksObtainedEnglish: number;
  marksObtainedMath: number;
  marksObtainedScience: number;
  marksObtainedIslam: number;
  marksObtainedSports: number;
  totalMarks: number;
  gpa: number;
  grade: string;
  status: string;
  studentDTO?: StudentDTO;
  examDTO?: ExamDTO;
}

export interface ExamDTO{
    id: number;         // backend এ id থাকে — যদি frontend এ নতুন তৈরি করলে id 0 বা অনুপস্থিত থাকে, তোমার code তা হ্যান্ডেল করবে
  examName: string;
  examMonth: string;
}
