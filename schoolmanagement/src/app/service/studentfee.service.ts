import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentFee } from '../model/studentfee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentfeeService {
private baseUrl = 'http://localhost:3000/studentfee'; // Update URL if needed

  constructor(private http: HttpClient) {}

  getAll(): Observable<StudentFee[]> {
    return this.http.get<StudentFee[]>(this.baseUrl);
  }

  getById(id: string): Observable<StudentFee> {
    return this.http.get<StudentFee>(`${this.baseUrl}/${id}`);
  }

  create(data: StudentFee): Observable<StudentFee> {
    return this.http.post<StudentFee>(this.baseUrl, data);
  }

  update(id: string, data: StudentFee): Observable<StudentFee> {
    return this.http.put<StudentFee>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
}
