export interface TeacherModel {
  id?: number;
  firstName?: string;
  lastName?: string;
  dob?: string;
  gender?: 'Male' | 'Female' | 'Other';
  email?: string;
  phone?: string;
  address?: string;
  qualification?: string;
  experience?: number;
  subject?: string;
  joiningDate?: string;
}
