import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RoutineService } from '../../service/routine.service';
import { RoutineModel } from '../../model/routine.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-routine-component',
  templateUrl: './routine-component.html',
  styleUrls: ['./routine-component.css'],
  imports: [FormsModule]
})
export class RoutineComponent implements OnInit {

  routines: RoutineModel[] = [];
  filteredRoutines: RoutineModel[] = [];

  newRoutine: RoutineModel = this.resetRoutine();

  searchTeacherId!: number;
  searchDay: string = '';

  daysOfWeek: string[] = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

  constructor(
    private routineService: RoutineService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadRoutines();
  }

  loadRoutines(): void {
    this.routineService.getRoutines().subscribe(data => {
      this.routines = data;
      this.filteredRoutines = [...data];
    });
  }

  selectRoutine(routine: RoutineModel): void {
    this.newRoutine = { ...routine };
  }

  saveRoutine(): void {
    if (this.newRoutine.id) {
      this.routineService.updateRoutine(this.newRoutine).subscribe(() => {
        this.loadRoutines();
        this.newRoutine = this.resetRoutine();
      });
    } else {
      this.routineService.addRoutine(this.newRoutine).subscribe(() => {
        this.loadRoutines();
        this.newRoutine = this.resetRoutine();
      });
    }
  }

  deleteRoutine(id: number): void {
    this.routineService.deleteRoutine(id).subscribe(() => this.loadRoutines());
  }

  searchByTeacherId(): void {
    if (this.searchTeacherId != null) {
      this.routineService.getRoutineByTeacherId(this.searchTeacherId)
        .subscribe(data => this.filteredRoutines = data);
    } else {
      this.filteredRoutines = [...this.routines];
    }
  }

  searchByTeacherAndDay(): void {
    if (this.searchTeacherId != null && this.searchDay) {
      this.routineService.getRoutineByTeacherAndDay(this.searchTeacherId, this.searchDay)
        .subscribe(data => this.filteredRoutines = data);
    } else if (this.searchTeacherId != null) {
      this.searchByTeacherId();
    } else {
      this.filteredRoutines = [...this.routines];
    }
  }

  resetFilters(): void {
    this.searchTeacherId = null as any;
    this.searchDay = '';
    this.filteredRoutines = [...this.routines];
    this.cdr.detectChanges();
  }

  resetRoutine(): RoutineModel {
    return {
      className: '',
      subject: '',
      dayOfWeek: '',
      startTime: '',
      endTime: '',
      teacherId: undefined
    };
  }
}
