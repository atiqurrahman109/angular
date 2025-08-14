import { Component, OnInit } from '@angular/core';
import { RoutineModel } from '../../model/routine.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-routine-component',
  standalone: false,
  templateUrl: './routine-component.html',
  styleUrl: './routine-component.css'
})
export class RoutineComponent  implements OnInit{

routines: RoutineModel[] = [];
  newRoutine: RoutineModel = {
    className: '',
    subject: '',
    teacherId: '',
    dayOfWeek: '',
    startTime: '',
    endTime: ''
  };

  private baseUrl = 'http://localhost:8080/api/routines'; // Adjust to your backend URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadRoutines();
  }

  loadRoutines(): void {
    this.http.get<RoutineModel[]>(this.baseUrl).subscribe(data => {
      this.routines = data;
    });
  }

  addRoutine(): void {
    this.http.post<RoutineModel>(this.baseUrl, this.newRoutine).subscribe(() => {
      this.loadRoutines();
      this.newRoutine = {
        className: '',
        subject: '',
        teacherId: '',
        dayOfWeek: '',
        startTime: '',
        endTime: ''
      };
    });
  }

  deleteRoutine(id?: number): void {
    if (!id) return;
    this.http.delete(`${this.baseUrl}/${id}`).subscribe(() => {
      this.loadRoutines();
    });
  }



}
