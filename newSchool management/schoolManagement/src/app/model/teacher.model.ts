export interface TeacherModel {
    id?: number;            // Optional - for updates
  firstName: string;
  lastName: string;
  dob: string;            // ISO date string e.g. "1985-07-15"
  gender: 'Male' | 'Female' | 'Other';
  email: string;
  phone: string;
  address: string;
  qualification: string;  // e.g. "B.Sc in Mathematics"
  experience: number;     // in years
  subject: string;        // e.g. "Mathematics"
  joiningDate: string;    // ISO date string
}
