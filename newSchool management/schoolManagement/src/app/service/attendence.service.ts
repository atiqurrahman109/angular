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

  createAttendance(attendance: AttendanceModel): Observable<AttendanceModel> {
    return this.http.post<AttendanceModel>(this.baseUrl, attendance);
  }

  getAttendanceList(): Observable<AttendanceModel[]> {
    return this.http.get<AttendanceModel[]>(this.baseUrl);
  }
}
