import { Injectable } from '@angular/core';
import { AttendanceModel } from '../model/attendence.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {
  private baseUrl =  environment.apiBaseUrl + '/attendence';

 

  constructor(private http: HttpClient) {}

  // Create or Update
  save(attendence: AttendanceModel): Observable<AttendanceModel> {
    return this.http.post<AttendanceModel>(`${this.baseUrl}`, attendence);
  }

  // Get All
  getAll(): Observable<AttendanceModel[]> {
    return this.http.get<AttendanceModel[]>(`${this.baseUrl}`);
  }

  // Get by ID
  getById(id: number): Observable<AttendanceModel> {
    return this.http.get<AttendanceModel>(`${this.baseUrl}/${id}`);
  }

  // Delete
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
