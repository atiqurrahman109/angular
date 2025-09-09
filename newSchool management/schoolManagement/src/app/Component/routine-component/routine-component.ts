import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RoutineService } from '../../service/routine.service';
import { RoutineModel } from '../../model/routine.model';
import { TeacherModel } from '../../model/teacher.model';
import { TeacherService } from '../../service/teacher-service';

@Component({
  selector: 'app-routine-component',
  templateUrl: './routine-component.html',
  styleUrls: ['./routine-component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class RoutineComponent implements OnInit {
  routines: RoutineModel[] = [];
  filteredRoutines: RoutineModel[] = [];
  teachers: TeacherModel[] = [];

  daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  newRoutine: RoutineModel = this.resetRoutine();

  searchTeacherId: number | null = null;
  searchDay: string = '';

  constructor(
    private routineService: RoutineService,
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.loadRoutines();
    this.loadTeachers();
  }

  resetRoutine(): RoutineModel {
    return {
      className: '',
      subject: '',
      dayOfWeek: '',
      startTime: '',
      endTime: '',
      teacher: undefined
    };
  }

  loadRoutines(): void {
    this.routineService.getRoutines().subscribe(data => {
      this.routines = data;
      this.filteredRoutines = [...this.routines];
    });
  }

  loadTeachers(): void {
    this.teacherService.getAllTeacher().subscribe(data => {
      this.teachers = data;
    });
  }

  saveRoutine(): void {
    if (!this.newRoutine.teacher || !this.newRoutine.teacher.id) {
      alert('Please select a teacher');
      return;
    }

    if (this.newRoutine.id) {
      // Update existing routine
      this.routineService.updateRoutine(this.newRoutine).subscribe({
        next: updated => {
          const index = this.routines.findIndex(r => r.id === updated.id);
          if (index !== -1) this.routines[index] = updated;
          this.filteredRoutines = [...this.routines];
          this.newRoutine = this.resetRoutine();
        },
        error: err => {
          console.error('Error updating routine:', err);
          alert('Failed to update routine.');
        }
      });
    } else {
      // Add new routine
      this.routineService.addRoutine(this.newRoutine).subscribe({
        next: added => {
          this.routines.push(added);
          this.filteredRoutines = [...this.routines];
          this.newRoutine = this.resetRoutine();
        },
        error: err => {
          console.error('Error saving routine:', err);
          alert('Failed to save routine.');
        }
      });
    }
  }

  selectRoutine(routine: RoutineModel): void {
    this.newRoutine = { ...routine };
  }

  deleteRoutine(id: number): void {
    if (!confirm('Are you sure you want to delete this routine?')) return;

    this.routineService.deleteRoutine(id).subscribe({
      next: () => {
        this.routines = this.routines.filter(r => r.id !== id);
        this.filteredRoutines = [...this.routines];
      },
      error: err => {
        console.error('Error deleting routine:', err);
        alert('Failed to delete routine.');
      }
    });
  }

  searchByTeacherAndDay(): void {
    if (this.searchTeacherId && this.searchDay) {
      this.routineService
        .getRoutineByTeacherAndDay(this.searchTeacherId, this.searchDay)
        .subscribe(data => {
          this.filteredRoutines = data;
        });
    } else if (this.searchTeacherId) {
      this.routineService
        .getRoutineByTeacherId(this.searchTeacherId)
        .subscribe(data => {
          this.filteredRoutines = data;
        });
    } else {
      this.filteredRoutines = [...this.routines];
    }
  }

  resetFilters(): void {
    this.searchTeacherId = null;
    this.searchDay = '';
    this.filteredRoutines = [...this.routines];
  }
}
