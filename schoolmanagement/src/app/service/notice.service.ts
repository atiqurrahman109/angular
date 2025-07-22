import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notice } from '../model/notice.model';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
private baseUrl = 'http://localhost:3000/notice'; // Change as needed

  constructor(private http: HttpClient) {}

  getAll(): Observable<Notice[]> {
    return this.http.get<Notice[]>(this.baseUrl);
  }

  getById(id: string): Observable<Notice> {
    return this.http.get<Notice>(`${this.baseUrl}/${id}`);
  }

  create(notice: Notice): Observable<Notice> {
    return this.http.post<Notice>(this.baseUrl, notice);
  }

  update(id: string, notice: Notice): Observable<Notice> {
    return this.http.put<Notice>(`${this.baseUrl}/${id}`, notice);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
}
