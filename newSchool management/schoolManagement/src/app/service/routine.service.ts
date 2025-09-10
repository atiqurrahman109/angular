import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoutineModel } from '../model/routine.model';
import { environment } from '../environment/environment';
import { ClassRoutineDTO } from '../classRoutineDTO';
import { TeacherRoutineDTO } from '../teacherDTO';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  private baseUrl = environment.apiBaseUrl + '/routine';

  constructor(private http: HttpClient) { }

 getAllRoutine(): Observable<RoutineModel[]> {
    return this.http.get<RoutineModel[]>(`${this.baseUrl}/all`);
  }

  getAllDTOs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getByTeacherId(id: number): Observable<TeacherRoutineDTO[]> {
    return this.http.get<TeacherRoutineDTO[]>(`${this.baseUrl}/teacher_id/${id}`);
  }

  getByTeacherAndDay(id: number, day: string): Observable<TeacherRoutineDTO[]> {
    return this.http.get<TeacherRoutineDTO[]>(`${this.baseUrl}/teacher_id/${id}/day/${day}`);
  }

  create(routine: RoutineModel): Observable<RoutineModel> {
    return this.http.post<RoutineModel>(`${this.baseUrl}`, routine);
  }
}


