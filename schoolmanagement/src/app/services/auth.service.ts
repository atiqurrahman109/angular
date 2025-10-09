import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Student } from '../model/student..model';
import { catchError, Observable, throwError } from 'rxjs';
import { Teacher } from '../model/teacher.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private baseUrl = environment.apiBaseUrl + '/user' ;// adjust if your backend base URL differs

  constructor(private http: HttpClient) {}

  registerStudent(user: User, student: Student, photo: File): Observable<any> {
    const formData = new FormData();

    formData.append('user', JSON.stringify(user));
    formData.append('student', JSON.stringify(student));
    formData.append('photo', photo);

    return this.http.post(`${this.baseUrl}/registerstudent`, formData)
      .pipe(catchError(this.handleError));
  }

  registerTeacher(user: User, teacher: Teacher, photo: File | null): Observable<any> {
    const formData = new FormData();

    formData.append('user', new Blob([JSON.stringify(user)], { type: 'application/json' }));
    formData.append('teacher', new Blob([JSON.stringify(teacher)], { type: 'application/json' }));

    if (photo) {
      formData.append('photo', photo);
    }

    return this.http.post(`${this.baseUrl}/register-teacher`, formData)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('UserService error:', error);
    return throwError(() => new Error(error.message || 'Server Error'));
  }
  
}
