import { StudentModel } from "./student.model";

export interface StudentFeeModel{
     id?: number;
  studentId: number;     // Link to StudentModel.id
  feeCategory: string;
  feeMonth: string;
  feeAmount: number;
  paymentDate?: string;  // Optional - only when paid
  student?: StudentModel;
}
