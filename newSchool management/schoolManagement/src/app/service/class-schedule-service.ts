import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassSchedule } from '../model/classSchedule.model';


@Injectable({
  providedIn: 'root'
})
export class ClassScheduleService {

  private baseUrl = 'http://localhost:3000/ClassSchedule'; // backend API URL

  constructor(private http: HttpClient) {}

  // Get all schedules
  getSchedules(): Observable<ClassSchedule[]> {
    return this.http.get<ClassSchedule[]>(this.baseUrl);
  }

  // Add new schedule
  addSchedule(schedule: ClassSchedule): Observable<ClassSchedule> {
    return this.http.post<ClassSchedule>(this.baseUrl, schedule);
  }

  // Delete schedule
  deleteSchedule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
