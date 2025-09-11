import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TeacherRoutineDTO } from '../../teacherDTO';
import { RoutineModel } from '../../model/routine.model';
import { RoutineService } from '../../service/routine.service';
import { TeacherModel } from '../../model/teacher.model';
import { TeacherService } from '../../service/teacher-service';

@Component({
  selector: 'app-routine-component',
  templateUrl: './routine-component.html',
  styleUrls: ['./routine-component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule]
})
export class RoutineComponent implements OnInit {
  routines: TeacherRoutineDTO[] = [];
  teacherRoutine: RoutineModel[] = [];
  teacher: TeacherModel[] = [];

  routineForm!: FormGroup;

  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(
    private routineService: RoutineService,
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.routineForm = this.fb.group({
      className: ['', Validators.required],
      subject: ['', Validators.required],
      dayOfWeek: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      teacher: this.fb.group({
        id: ['', Validators.required],
      })
    });

    this.routineForm.get('teacher.id')?.valueChanges.subscribe((id: number) => {
      const selected = this.teacher.find(i => i.id === +id);
      if (selected) {
        console.log('Selected teacher:', selected);
      }
    });

    this.loadAllRoutines();
    this.loadAllTeacher();
  }

  loadAllTeacher(): void {
    this.teacherService.getAllTeacher().subscribe({
      next: (data) => {
        this.teacher = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.log('Error loading teachers:', err)
    });
  }

  loadAllRoutines(): void {
    this.routineService.getAllDTOs().subscribe({
      next: (data) => {
        this.routines = data.map(routine => ({
          ...routine,
          teacher: routine.teacher ?? { id: 0, firstName: 'N/A', lastName: '' }
        }));
      },
      error: (err) => {
        console.error('Error loading routines:', err);
      }
    });
  }

  addTeacherRoutine(): void {
    const formValue = this.routineForm.value;
    const routine: RoutineModel = {
      className: formValue.className,
      subject: formValue.subject,
      dayOfWeek: formValue.dayOfWeek,
      startTime: formValue.startTime,
      endTime: formValue.endTime,
      teacher: { id: +formValue.teacher.id }
    };

    console.log('Submitting routine:', routine);

    this.routineService.create(routine).subscribe({
      next: (or) => {
        console.log('Routine created successfully!', or);
        this.loadAllRoutines();
        this.loadAllTeacher();
        this.routineForm.reset();
      },
      error: (err) => {
        console.error('Error creating routine:', err);
      }
    });
  }
}
