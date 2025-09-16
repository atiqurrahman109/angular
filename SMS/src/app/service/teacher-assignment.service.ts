import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherAssignment } from '../model/teacher-assignment.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherAssignmentService {
  
   private baseUrl = 'http://localhost:8080/api/teacher-assignment'; // Adjust to match your Spring Boot controller

  constructor(private http: HttpClient) {}

  getAll(): Observable<TeacherAssignment[]> {
    return this.http.get<TeacherAssignment[]>(this.baseUrl);
  }

  getById(id: number): Observable<TeacherAssignment> {
    return this.http.get<TeacherAssignment>(`${this.baseUrl}/${id}`);
  }

  add(assignment: TeacherAssignment): Observable<TeacherAssignment> {
    return this.http.post<TeacherAssignment>(this.baseUrl, assignment);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  findByTeacher(teacherId: number): Observable<TeacherAssignment[]> {
    return this.http.get<TeacherAssignment[]>(`${this.baseUrl}/teacher/${teacherId}`);
  }

  findByClass(classId: number): Observable<TeacherAssignment[]> {
    return this.http.get<TeacherAssignment[]>(`${this.baseUrl}/class/${classId}`);
  }
}
