export interface Fee {
  id?: number;
  category: string;
  amount: number;
  paymentDate: string; // ISO string e.g. "2025-09-15"
  studentId: number;
}
