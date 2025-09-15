export interface Student {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  dob?: string;
  gender?: string;
  address?: string;
}

export interface SchoolClass {
  id?: number;
  className: string;
  section: string;
  students?: Student[];
}

