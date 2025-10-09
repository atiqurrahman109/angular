import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Result } from '../model/result.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  
  private baseUrl = environment.apiBaseUrl + '/result' ;

  constructor(private http: HttpClient) {}

  // GET: All results
  getAllResults(): Observable<Result[]> {
    return this.http.get<Result[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  // GET: Result by ID
  getResultById(id: number): Observable<Result> {
    return this.http.get<Result>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // POST: Create new result
  createResult(result: Result): Observable<Result> {
    return this.http.post<Result>(this.baseUrl, result)
      .pipe(catchError(this.handleError));
  }

  // PUT: Update result
  updateResult(id: number, result: Result): Observable<Result> {
    return this.http.put<Result>(`${this.baseUrl}/${id}`, result)
      .pipe(catchError(this.handleError));
  }

  // DELETE: Delete result
  deleteResult(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Error handler
  private handleError(error: HttpErrorResponse) {
    console.error('ResultService error:', error);
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}
