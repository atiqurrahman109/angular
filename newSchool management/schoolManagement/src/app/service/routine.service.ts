import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoutineModel } from '../model/routine.model';


@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  private baseUrl = 'http://localhost:8080/api/routines';

  constructor(private http: HttpClient) {}

  getRoutines(): Observable<RoutineModel[]> {
    return this.http.get<RoutineModel[]>(this.baseUrl);
  }

  getRoutineById(id: number): Observable<RoutineModel> {
    return this.http.get<RoutineModel>(`${this.baseUrl}/${id}`);
  }

  addRoutine(routine: RoutineModel): Observable<RoutineModel> {
    return this.http.post<RoutineModel>(this.baseUrl, routine);
  }

  updateRoutine(routine: RoutineModel): Observable<RoutineModel> {
    if (!routine.id) throw new Error('Routine ID is required for update');
    return this.http.put<RoutineModel>(`${this.baseUrl}/${routine.id}`, routine);
  }

  deleteRoutine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
