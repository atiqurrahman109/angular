import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exam } from '../model/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  
   // Option A: use environment
  private baseUrl = `${environment.apiBaseUrl}/exam`;

  // Option B: hardcode backend URL (uncomment to use)
  // private baseUrl = 'http://localhost:8080/api/exam';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.baseUrl);
  }

  add(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(this.baseUrl, exam);
  }

  delete(id: number | undefined): Observable<void> {
    if (id == null) throw new Error('Exam id is required for delete');
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
