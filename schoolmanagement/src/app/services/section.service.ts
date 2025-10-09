import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Section } from '../model/section.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  
  private baseUrl = environment.apiBaseUrl + '/sections' ; // Backend endpoint

  constructor(private http: HttpClient) {}

  // GET: All sections
  getAllSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  // GET: Section by ID
  getSectionById(id: number): Observable<Section> {
    return this.http.get<Section>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // POST: Create section
  createSection(section: Section): Observable<Section> {
    return this.http.post<Section>(this.baseUrl, section)
      .pipe(catchError(this.handleError));
  }

  // PUT: Update section
  updateSection(id: number, section: Section): Observable<Section> {
    return this.http.put<Section>(`${this.baseUrl}/${id}`, section)
      .pipe(catchError(this.handleError));
  }

  // DELETE: Delete section
  deleteSection(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Handle errors
  private handleError(error: HttpErrorResponse) {
    console.error('SectionService error:', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }
}
