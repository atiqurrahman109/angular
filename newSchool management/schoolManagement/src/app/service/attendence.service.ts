import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AttendanceModel } from '../model/attendence.model';

export interface Student {
  id: number;
  firstname: string;
  lastname: string;
}

export interface Attendence {
  id?: number;
  attendanceDate: string;
  status: string;
  student: Student;
}

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {

  private apiUrl = 'http://localhost:8085/api/attendence';

  constructor(private http: HttpClient) {}

  getAll(): Observable<AttendanceModel[]> {
    return this.http.get<AttendanceModel[]>(this.apiUrl);
  }

  getById(id: number): Observable<AttendanceModel> {
    return this.http.get<AttendanceModel>(`${this.apiUrl}/${id}`);
  }

  create(attendence: AttendanceModel): Observable<AttendanceModel> {
    return this.http.post<AttendanceModel>(this.apiUrl, attendence);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
