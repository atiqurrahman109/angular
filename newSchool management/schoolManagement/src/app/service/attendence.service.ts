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

  getAllAtten(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getById(id: number): Observable<AttendanceModel> {
    return this.http.get<AttendanceModel>(`${this.baseUrl}/${id}`);
  }

  // create(attendance: AttendanceModel): Observable<AttendanceModel> {
  //   return this.http.post<AttendanceModel>(this.baseUrl, attendance);
  // }

create(attendance: AttendanceModel, studentId: number) {
  return this.http.post<AttendanceModel>(
    `http://localhost:8080/api/attendence?studentId=${studentId}`,
    attendance
  );
}


  update(id: number, attendance: AttendanceModel): Observable<AttendanceModel> {
    return this.http.put<AttendanceModel>(`${this.baseUrl}/${id}`, attendance);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
