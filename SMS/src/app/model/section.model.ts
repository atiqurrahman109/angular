import { SchoolClass, Student } from "./student.model";

export interface Section {
  id?: number;
  name: string;                // e.g. "A", "B", "C"
  schoolClass?: SchoolClass;   // সম্পর্ক: কোন ক্লাসের সেকশন
  students?: Student[];        // সম্পর্ক: সেকশনে থাকা ছাত্রছাত্রী
}