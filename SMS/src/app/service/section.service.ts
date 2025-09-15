import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private baseUrl = `${environment.apiBaseUrl}/sections`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Section[]> {
    return this.http.get<Section[]>(this.baseUrl);
  }

  getById(id: number): Observable<Section> {
    return this.http.get<Section>(`${this.baseUrl}/${id}`);
  }

  getByClassId(classId: number): Observable<Section[]> {
    return this.http.get<Section[]>(`${this.baseUrl}/class/${classId}`);
  }

  create(section: Section): Observable<Section> {
    return this.http.post<Section>(this.baseUrl, section);
  }

  update(id: number, section: Section): Observable<Section> {
    return this.http.put<Section>(`${this.baseUrl}/${id}`, section);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
