import { Student } from "./student..model";

export interface Payment {
  id: number;
  month: string;
  category: string;
  amount: number;
  paid: boolean;
  paymentDate: Date;
  student: Student
}
