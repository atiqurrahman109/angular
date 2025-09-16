export interface Result {
  id?: number;
  marks: number;
  grade: string;
  student: {
    id: number;
  };
  exam: {
    id: number;
  };
}
