// src/app/services/routine.service.ts
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

  getAllRoutines(): Observable<RoutineModel[]> {
    return this.http.get<RoutineModel[]>(this.baseUrl);
  }

  getRoutineById(id: number): Observable<RoutineModel> {
    return this.http.get<RoutineModel>(`${this.baseUrl}/${id}`);
  }

  createRoutine(routine: RoutineModel): Observable<RoutineModel> {
    return this.http.post<RoutineModel>(this.baseUrl, routine);
  }

  updateRoutine(id: number, routine: RoutineModel): Observable<RoutineModel> {
    return this.http.put<RoutineModel>(`${this.baseUrl}/${id}`, routine);
  }

  deleteRoutine(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
