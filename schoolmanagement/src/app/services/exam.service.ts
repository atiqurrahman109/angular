import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { ExamModel } from '../model/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private apiUrl = environment.apiBaseUrl + '/exams';

  constructor(private http: HttpClient) { }

  // Fetch all exams
  getExams(): Observable<ExamModel[]> {
    return this.http.get<ExamModel[]>(this.apiUrl);
  }

  // Fetch a single exam by id
  getExamById(id: number): Observable<ExamModel> {
    return this.http.get<ExamModel>(`${this.apiUrl}/${id}`);
  }

  // Create a new exam
  createExam(exam: ExamModel): Observable<ExamModel> {
    return this.http.post<ExamModel>(this.apiUrl, exam);
  }

  // Update an existing exam
  updateExam(id: number, exam: ExamModel): Observable<ExamModel> {
    return this.http.put<ExamModel>(`${this.apiUrl}/${id}`, exam);
  }

  // Delete an exam by id
  deleteExam(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  
}
