import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RoutineModel } from '../../model/routine.model';
import { HttpClient } from '@angular/common/http';
import { RoutineService } from '../../service/routine.service';

@Component({
  standalone: false,
  selector: 'app-routine-component',
  templateUrl: './routine-component.html',
  styleUrls: ['./routine-component.css']
})
export class RoutineComponent implements OnInit {

  routines: RoutineModel[] = [];
  newRoutine: RoutineModel = this.resetRoutine();

//test
  filteredRoutines: RoutineModel[] = [];

  searchOrderId!: number;

  constructor(private routineService: RoutineService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadRoutines();
  }

  loadRoutines() {
    this.routineService.getRoutines().subscribe(data => this.routines = data);
  }

  selectRoutine(routine: RoutineModel) {
    this.newRoutine = { ...routine }; // copy for editing
  }

  saveRoutine() {
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

  deleteRoutine(id: number) {
    this.routineService.deleteRoutine(id).subscribe(() => this.loadRoutines());
  }



    searchByOrderId(): void {
    if (this.searchOrderId != null) {
      this.filteredRoutines = this.routines.filter(
        (routines) => routines.id === this.searchOrderId,
        console.log("++++++++", this.filteredRoutines)
      );
    } else {
      this.filteredRoutines = this.routines;
    }
  }

   reset(): void {
    this.searchOrderId = null as any;
    this.filteredRoutines = [...this.routines];
     this.loadRoutines();
    this.cdr.detectChanges();
  }









  resetRoutine(): RoutineModel {
    return {
      className: '',
      subject: '',
      teacherId: '',
      dayOfWeek: '',
      startTime: '',
      endTime: ''
    };
  }
}