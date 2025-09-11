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
  // All routines from backend
  routines: TeacherRoutineDTO[] = [];

  // Filtered routines to show in table
  filteredRoutines: TeacherRoutineDTO[] = [];

  // All teachers
  teacher: TeacherModel[] = [];

  // Reactive form group for adding a routine
  routineForm!: FormGroup;

  // Selected teacher ID for filtering
  selectedTeacherId: number | null = null;

  // Days of the week options
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(
    private routineService: RoutineService,
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Initialize the form
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

    // Optional: Log selected teacher from form
    this.routineForm.get('teacher.id')?.valueChanges.subscribe((id: number) => {
      const selected = this.teacher.find(i => i.id === +id);
      if (selected) {
        console.log('Selected teacher (in form):', selected);
      }
    });

    // Load all data
    this.loadAllTeachers();
    this.loadAllRoutines();
  }

  // Fetch all teachers
  loadAllTeachers(): void {
    this.teacherService.getAllTeacher().subscribe({
      next: (data) => {
        this.teacher = data;
        this.cdr.detectChanges(); // Refresh view
      },
      error: (err) => console.log('Error loading teachers:', err)
    });
  }

  // Fetch all routines
  loadAllRoutines(): void {
    this.routineService.getAllDTOs().subscribe({
      next: (data) => {
        this.routines = data.map(routine => ({
          ...routine,
          teacher: routine.teacher ?? { id: 0, firstName: 'N/A', lastName: '' }
        }));
        this.applyTeacherFilter(); // Apply filtering after data loads
      },
      error: (err) => {
        console.error('Error loading routines:', err);
      }
    });
  }

  // Apply filtering based on selected teacher
  applyTeacherFilter(): void {
    if (this.selectedTeacherId != null) {
      this.filteredRoutines = this.routines.filter(
        r => r.teacher?.id === this.selectedTeacherId
      );
    } else {
      this.filteredRoutines = this.routines;
    }
  }

  // Add a new teacher routine
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
      next: () => {
        console.log('Routine created successfully!');
        this.routineForm.reset();
        this.loadAllRoutines(); // Re-fetch data after add
      },
      error: (err) => {
        console.error('Error creating routine:', err);
      }
    });
  }
}
