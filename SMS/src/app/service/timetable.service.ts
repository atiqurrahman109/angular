import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Timetable } from '../model/timetable.model';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
   private baseUrl = 'http://localhost:8080/api/timetables';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Timetable[]> {
    return this.http.get<Timetable[]>(this.baseUrl);
  }

  getById(id: number): Observable<Timetable> {
    return this.http.get<Timetable>(`${this.baseUrl}/${id}`);
  }

  getByClass(classId: number): Observable<Timetable[]> {
    return this.http.get<Timetable[]>(`${this.baseUrl}/class/${classId}`);
  }

  getByTeacher(teacherId: number): Observable<Timetable[]> {
    return this.http.get<Timetable[]>(`${this.baseUrl}/teacher/${teacherId}`);
  }

  getByDay(day: string): Observable<Timetable[]> {
    return this.http.get<Timetable[]>(`${this.baseUrl}/day/${day}`);
  }

  save(timetable: Timetable): Observable<Timetable> {
    return this.http.post<Timetable>(this.baseUrl, timetable);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
