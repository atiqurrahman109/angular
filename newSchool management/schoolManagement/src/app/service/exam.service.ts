import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from '../model/exam.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private baseUrl = 'http://localhost:8085/api/exams'; // তোমার backend base url প্রয়োজন অনুযায়ী বদলাও

  constructor(private http: HttpClient) {}

  getAll(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.baseUrl}/all`);
  }

  getById(id: number): Observable<Exam> {
    return this.http.get<Exam>(`${this.baseUrl}/${id}`);
  }

  save(exam: Partial<Exam>): Observable<Exam> {
    // backend তোমাকে Exam entity রিটার্ন করছে, তাই Exam টাইপ ধরে নেওয়া হয়েছে
    return this.http.post<Exam>(`${this.baseUrl}/save`, exam);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
