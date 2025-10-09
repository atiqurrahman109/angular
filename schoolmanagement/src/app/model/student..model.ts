import { Payment } from "./payment.model";
import { Result } from "./result.model";
import { SchoolClass } from "./schoolclass.model";
import { Section } from "./section.model";
import { User } from "./user.model";

export interface Student {
  id: number;
  name: string;
  email: string;
  photo: string;
  user: User;
  section: Section;
  payments: Payment[];
  results: Result[];
  schoolClass: SchoolClass;
}