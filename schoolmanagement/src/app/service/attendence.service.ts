import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance } from '../model/attendence.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {
private baseUrl = 'http://localhost:3000/attendence'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  getAllAtten(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getById(id: string): Observable<Attendance> {
    return this.http.get<Attendance>(`${this.baseUrl}/${id}`);
  }

  create(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(this.baseUrl, attendance);
  }

  update(id: string, attendance: Attendance): Observable<Attendance> {
    return this.http.put<Attendance>(`${this.baseUrl}/${id}`, attendance);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
}
