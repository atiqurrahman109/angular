import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { SchoolClass } from '../model/student.model';


@Injectable({
  providedIn: 'root'
})
export class SchoolClassService {
  private baseUrl = environment.apiBaseUrl + '/schoolClass';

  constructor(private http: HttpClient) {}

  getAll(): Observable<SchoolClass[]> {
    return this.http.get<SchoolClass[]>(this.baseUrl);
  }

  create(payload: SchoolClass): Observable<SchoolClass> {
    return this.http.post<SchoolClass>(this.baseUrl, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
