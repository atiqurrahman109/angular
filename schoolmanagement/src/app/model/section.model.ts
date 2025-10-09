import { SchoolClass } from "./schoolclass.model";

export interface Section {
  id: number;
  name: string;
  schoolClass: SchoolClass
}
