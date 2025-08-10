import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance } from '../model/attendence.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {
  private baseUrl = 'http://localhost:3000/attendances'; // JSON server URL or backend API

  constructor(private http: HttpClient) {}

  // Get all attendance records
  getAttendances(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(this.baseUrl);
  }

  // Get attendance by ID
  getAttendanceById(id: number): Observable<Attendance> {
    return this.http.get<Attendance>(`${this.baseUrl}/${id}`);
  }

  // Create new attendance record
  addAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(this.baseUrl, attendance);
  }

  // Update attendance record
  updateAttendance(id: number, attendance: Attendance): Observable<Attendance> {
    return this.http.put<Attendance>(`${this.baseUrl}/${id}`, attendance);
  }

  // Delete attendance record
  deleteAttendance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
