export interface Timetable {
  id?: number;
  dayOfWeek: string;
  periodNumber: number;
  subject: string;
  teacher: {
    id: number;
    // optionally include more fields
  };
  schoolClass: {
    id: number;
    // optionally include more fields
  };
}
