import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { SchoolClass } from '../model/schoolclass.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolclassService {
  
   private baseUrl = environment.apiBaseUrl + '/schoolclass' ;

  constructor(private http: HttpClient) {}

  // GET: All school classes
  getAllClasses(): Observable<SchoolClass[]> {
    return this.http.get<SchoolClass[]>(this.baseUrl);
  }

  // GET: School class by ID
  getClassById(id: number): Observable<SchoolClass> {
    return this.http.get<SchoolClass>(`${this.baseUrl}/${id}`);
  }

  // POST: Create new school class
  createClass(schoolClass: SchoolClass): Observable<SchoolClass> {
    return this.http.post<SchoolClass>(this.baseUrl, schoolClass);
  }

  // PUT: Update school class by ID
  updateClass(id: number, schoolClass: SchoolClass): Observable<SchoolClass> {
    return this.http.put<SchoolClass>(`${this.baseUrl}/${id}`, schoolClass);
  }

  // DELETE: Delete school class by ID
  deleteClass(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
