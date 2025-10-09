import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Student } from '../model/student..model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
 private baseUrl = environment.apiBaseUrl + '/students' ;

  constructor(private http: HttpClient) {}

  // GET: All students
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  // GET: Student by ID
  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // POST: Create new student
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student)
      .pipe(catchError(this.handleError));
  }

  // PUT: Update student by ID
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/${id}`, student)
      .pipe(catchError(this.handleError));
  }

  // DELETE: Delete student by ID
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Error handler
  private handleError(error: HttpErrorResponse) {
    console.error('StudentService error:', error);
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}
