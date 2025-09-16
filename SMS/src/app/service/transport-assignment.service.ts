import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransportAssignment } from '../model/transport-assignment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportAssignmentService {
  private baseUrl = 'http://localhost:8080/api/transport-assignment';

  constructor(private http: HttpClient) {}

  getAll(): Observable<TransportAssignment[]> {
    return this.http.get<TransportAssignment[]>(this.baseUrl);
  }

  getById(id: number): Observable<TransportAssignment> {
    return this.http.get<TransportAssignment>(`${this.baseUrl}/${id}`);
  }

  add(assignment: TransportAssignment): Observable<TransportAssignment> {
    return this.http.post<TransportAssignment>(this.baseUrl, assignment);
  }

  update(id: number, assignment: TransportAssignment): Observable<TransportAssignment> {
    return this.http.put<TransportAssignment>(`${this.baseUrl}/${id}`, assignment);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getByStudentId(studentId: number): Observable<TransportAssignment[]> {
    return this.http.get<TransportAssignment[]>(`${this.baseUrl}/student/${studentId}`);
  }
}
