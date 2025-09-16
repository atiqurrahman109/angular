export interface Teacher {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
}

export interface SchoolClass {
  id: number;
  name: string;
  section: string;
}

export interface TeacherAssignment {
  id?: number;
  teacher: Teacher;
  schoolClass: SchoolClass;
  subject: string;
}
