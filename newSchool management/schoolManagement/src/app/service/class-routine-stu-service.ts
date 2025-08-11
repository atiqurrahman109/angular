import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';

export interface ClassRoutine {
  id?: number;
  className: string;
  subject: string;
  teacherId: number;
  teacherName?: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClassRoutineStu {
  private baseUrl = 'http://localhost:3000/ClassRoutineStu';

  constructor(private http: HttpClient) {}

  getClassRoutines(className: string): Observable<ClassRoutine[]> {
    return forkJoin({
      routines: this.http.get<ClassRoutine[]>(`${this.baseUrl}/classSchedule?className=${className}`),
      teachers: this.http.get<{ id: number; name: string }[]>(`${this.baseUrl}/teachers`)
    }).pipe(
      map(({ routines, teachers }) =>
        routines.map(routine => ({
          ...routine,
          teacherName: teachers.find(t => t.id === routine.teacherId)?.name || 'Unknown'
        }))
      )
    );
  }

  // Optionally add more CRUD methods here (add, update, delete)
}
