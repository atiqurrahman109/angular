import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  
  private apiUrl = 'http://localhost:8080/api/result';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Result[]> {
    return this.http.get<Result[]>(this.apiUrl);
  }

  save(result: Result): Observable<Result> {
    return this.http.post<Result>(this.apiUrl, result);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
