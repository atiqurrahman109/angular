import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  

  private base = `${environment.apiBaseUrl}/students`; // -> http://localhost:8080/api/students

  constructor(private http: HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.base);
  }

  getById(id: number | string): Observable<Student> {
    return this.http.get<Student>(`${this.base}/${id}`);
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.base, student);
  }

  update(id: number | string, student: Student): Observable<Student> {
    // your backend doesn't include PUT but likely works; if not, you can use POST to same endpoint
    return this.http.put<Student>(`${this.base}/${id}`, student);
  }

  delete(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
