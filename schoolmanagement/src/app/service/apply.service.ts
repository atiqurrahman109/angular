import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apply } from '../model/apply.model';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {

  private baseURL = 'http://localhost:3000/apply'; // Adjust backend URL

  constructor(private http: HttpClient) {}

  getAll(): Observable<Apply[]> {
    return this.http.get<Apply[]>(this.baseURL);
  }

  getById(id: string): Observable<Apply> {
    return this.http.get<Apply>(`${this.baseURL}/${id}`);
  }

  create(apply: Apply): Observable<Apply> {
    return this.http.post<Apply>(this.baseURL, apply);
  }

  update(id: string, apply: Apply): Observable<Apply> {
    return this.http.put<Apply>(`${this.baseURL}/${id}`, apply);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
