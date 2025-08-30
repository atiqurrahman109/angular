// src/app/models/exam.model.ts
export interface Exam {
  id: number;         // backend এ id থাকে — যদি frontend এ নতুন তৈরি করলে id 0 বা অনুপস্থিত থাকে, তোমার code তা হ্যান্ডেল করবে
  examName: string;
  examMonth: string;
}
