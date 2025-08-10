export interface StudentModel {
  id?: number;          // Optional - for update cases
  firstName: string;
  lastName: string;
  dob: string;          // ISO date string, e.g. '2005-08-20'
  gender: 'Male' | 'Female' | 'Other';
  email: string;
  phone: string;
  address: string;
  class: string;        // e.g. "Grade 5"
  section: string;      // e.g. "A"
}
