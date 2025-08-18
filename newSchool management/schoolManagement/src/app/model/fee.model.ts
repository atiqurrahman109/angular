import { StudentModel } from "./student.model";

export interface StudentFeeModel{
     id?: number;
   
  feeCategory: string;
  feeMonth: string;
  feeAmount: number;
  paymentDate?: string;  // Optional - only when paid
  student?: StudentModel;
}
