import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamModel } from '../model/exam.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private baseUrl = 'http://localhost:3000/exam'; // Change as needed

  constructor(private http: HttpClient) {}

  getAll(): Observable<ExamModel[]> {
    return this.http.get<ExamModel[]>(this.baseUrl);
  }

  getById(id: string): Observable<ExamModel> {
    return this.http.get<ExamModel>(`${this.baseUrl}/${id}`);
  }

  create(exam: ExamModel): Observable<ExamModel> {
    return this.http.post<ExamModel>(this.baseUrl, exam);
  }

  update(id: string, exam: ExamModel): Observable<ExamModel> {
    return this.http.put<ExamModel>(`${this.baseUrl}/${id}`, exam);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
}
