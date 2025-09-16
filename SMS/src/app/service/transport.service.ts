import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transport } from '../model/transport.model';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  
  private baseUrl = 'http://localhost:8080/api/transport'; // Adjust if needed

  constructor(private http: HttpClient) {}

  getAll(): Observable<Transport[]> {
    return this.http.get<Transport[]>(this.baseUrl);
  }

  getById(id: number): Observable<Transport> {
    return this.http.get<Transport>(`${this.baseUrl}/${id}`);
  }

  add(transport: Transport): Observable<Transport> {
    return this.http.post<Transport>(this.baseUrl, transport);
  }

  update(id: number, transport: Transport): Observable<Transport> {
    return this.http.put<Transport>(`${this.baseUrl}/${id}`, transport);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
