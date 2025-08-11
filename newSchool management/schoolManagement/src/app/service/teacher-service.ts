import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeacherModel } from '../model/teacher.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseUrl: string = 'http://localhost:3000/teachers'; // Replace with your API

  constructor(private http: HttpClient) {}

  // Create Teacher
  addTeacher(teacher: TeacherModel): Observable<TeacherModel> {
    return this.http.post<TeacherModel>(this.baseUrl, teacher);
  }

  // Read All Teachers
 getAllTeacher(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  // Read Single Teacher
  getTeacherById(id: number): Observable<TeacherModel> {
    return this.http.get<TeacherModel>(`${this.baseUrl}/${id}`);
  }

  // Update Teacher
  updateTeacher(id: number, teacher: TeacherModel): Observable<TeacherModel> {
    return this.http.put<TeacherModel>(`${this.baseUrl}/${id}`, teacher);
  }

  // Delete Teacher
  deleteTeacher(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
