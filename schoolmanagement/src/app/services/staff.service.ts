import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Staff } from '../model/staff.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  
   private baseUrl = environment.apiBaseUrl + '/staff' ;

  constructor(private http: HttpClient) {}

  // GET: All staff members
  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  // GET: Staff by ID
  getStaffById(id: number): Observable<Staff> {
    return this.http.get<Staff>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // POST: Create new staff
  createStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(this.baseUrl, staff)
      .pipe(catchError(this.handleError));
  }

  // PUT: Update existing staff
  updateStaff(id: number, staff: Staff): Observable<Staff> {
    return this.http.put<Staff>(`${this.baseUrl}/${id}`, staff)
      .pipe(catchError(this.handleError));
  }

  // DELETE: Delete staff by ID
  deleteStaff(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Common error handler
  private handleError(error: HttpErrorResponse) {
    console.error('StaffService error:', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }
}
