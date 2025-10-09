import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Routine } from '../model/routine.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {

   private baseUrl = environment.apiBaseUrl + '/routines' ;

  constructor(private http: HttpClient) {}

  // GET: All routines
  getAllRoutines(): Observable<Routine[]> {
    return this.http.get<Routine[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  // GET: Routine by ID
  getRoutineById(id: number): Observable<Routine> {
    return this.http.get<Routine>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // POST: Create routine
  createRoutine(routine: Routine): Observable<Routine> {
    return this.http.post<Routine>(this.baseUrl, routine)
      .pipe(catchError(this.handleError));
  }

  // PUT: Update routine
  updateRoutine(id: number, routine: Routine): Observable<Routine> {
    return this.http.put<Routine>(`${this.baseUrl}/${id}`, routine)
      .pipe(catchError(this.handleError));
  }

  // DELETE: Delete routine
  deleteRoutine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // GET: Routines by class
  getRoutinesByClass(classId: number): Observable<Routine[]> {
    return this.http.get<Routine[]>(`${this.baseUrl}/class/${classId}`)
      .pipe(catchError(this.handleError));
  }

  // GET: Routines by class and day
  getRoutinesByClassAndDay(classId: number, dayOfWeek: string): Observable<Routine[]> {
    return this.http.get<Routine[]>(`${this.baseUrl}/class/${classId}/day/${dayOfWeek}`)
      .pipe(catchError(this.handleError));
  }

  // GET: Routines by teacher and day
  getRoutinesByTeacherAndDay(teacherId: number, dayOfWeek: string): Observable<Routine[]> {
    return this.http.get<Routine[]>(`${this.baseUrl}/teacher/${teacherId}/day/${dayOfWeek}`)
      .pipe(catchError(this.handleError));
  }

  // GET: Routines by section
  getRoutinesBySection(sectionId: number): Observable<Routine[]> {
    return this.http.get<Routine[]>(`${this.baseUrl}/section/${sectionId}`)
      .pipe(catchError(this.handleError));
  }

  // Handle error
  private handleError(error: HttpErrorResponse) {
    console.error('RoutineService error:', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }
  
}
