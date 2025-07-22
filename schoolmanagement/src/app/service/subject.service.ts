import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SubjectName } from '../model/subject.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

 private baseURL = 'http://localhost:3000/subjectname'; // Adjust as needed

  constructor(private http: HttpClient) {}

  getAllSubjects(): Observable<SubjectName[]> {
    return this.http.get<SubjectName[]>(`${this.baseURL}/all`);
  }

  addSubject(subject: SubjectName): Observable<SubjectName> {
    return this.http.post<SubjectName>(`${this.baseURL}/add`, subject);
  }

  updateSubject(subject: SubjectName): Observable<SubjectName> {
    return this.http.put<SubjectName>(`${this.baseURL}/update`, subject);
  }

  deleteSubject(subid: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/delete/${subid}`);
  }
  
  
}
