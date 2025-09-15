// Student model based on your Student entity
export interface SchoolClass {
  id?: number;
  // add other fields if you have them in entity (e.g., name)
  name?: string;
}

export interface Section {
  id?: number;
  name?: string;
}

export interface Result {
  id?: number;
  // minimal fields; adjust if backend returns more
  subject?: string;
  marks?: number;
}

export interface Student {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  dob?: string; // backend sends String
  gender?: string;
  address?: string;
  schoolClass?: SchoolClass | null;
  section?: Section | null;
  results?: Result[] | null;
}
// export interface Student {
//   id?: number;
//   firstname?: string;
//   lastname?: string;
//   email?: string;
//   phone?: string;
// }