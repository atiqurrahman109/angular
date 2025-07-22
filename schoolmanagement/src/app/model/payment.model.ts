import { Student } from "./student.model";

export class Payment{

    id!:string;
    fromDate!: Date;
    toDate!:Date;
    month!:string;
    fee!: number;
    count!: number;
    totalAmount!: number;

    students!: Student;





}