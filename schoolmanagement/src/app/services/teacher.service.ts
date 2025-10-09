import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Teacher } from '../model/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private baseUrl = environment.apiBaseUrl + '/teachers';

  constructor(private http: HttpClient) { }

  // Get all teachers
  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.baseUrl);
  }

  // Get teacher by ID
  getTeacherById(id: number): Observable<Teacher> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Teacher>(url);
  }

  // Create a new teacher
  createTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.baseUrl, teacher);
  }

  // Update teacher information
  updateTeacher(id: number, teacher: Teacher): Observable<Teacher> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Teacher>(url, teacher);
  }

  // Delete a teacher
  deleteTeacher(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
