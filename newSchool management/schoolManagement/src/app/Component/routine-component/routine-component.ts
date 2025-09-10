import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TeacherRoutineDTO } from '../../teacherDTO';
import { RoutineModel } from '../../model/routine.model';
import { RoutineService } from '../../service/routine.service';

@Component({
  selector: 'app-routine-component',
  templateUrl: './routine-component.html',
  styleUrls: ['./routine-component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class RoutineComponent implements OnInit {
routines: TeacherRoutineDTO[] = [];

  newRoutine: RoutineModel = {
    className: '',
    subject: '',
    dayOfWeek: '',
    startTime: '',
    endTime: '',
    teacher: {
      id: 0,
      firstName: ''  // optional, but good to initialize
    }
  };

  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private routineService: RoutineService) {}

  ngOnInit(): void {
    this.loadAllRoutines();
  }

  loadAllRoutines(): void {
    this.routineService.getAllDTOs().subscribe({
      next: (data) => {
        this.routines = data.map(routine => ({
          ...routine,
          teacher: routine.teacher ?? { id: 0, firstName: 'N/A' }
        }));
      },
      error: (err) => {
        console.error('Error loading routines:', err);
      }
    });
  }

  saveRoutine(): void {
    this.routineService.create(this.newRoutine).subscribe({
      next: (res) => {
        alert('Routine saved!');
        this.newRoutine = {
          className: '',
          subject: '',
          dayOfWeek: '',
          startTime: '',
          endTime: '',
          teacher: { id: 0, firstName: '' }
        };
        this.loadAllRoutines();
      },
      error: (err) => {
        console.error('Error saving routine:', err);
      }
    });
  }
}
