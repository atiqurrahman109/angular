import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendenceService } from '../../service/attendence.service';
import { Student } from '../../model/student.model';
import { Router } from '@angular/router';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-attendence.component',
  standalone: false,
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.css'
})
export class AttendenceComponent implements OnInit {
  form!: FormGroup;
  students: Student[] = [];

  constructor(
    private fb: FormBuilder,
    private attendanceService: AttendenceService,
    private stuService: StudentService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      aDates: ['', Validators.required],
      aattendance: ['', Validators.required]
    });

    this.loadStudents();
  }

  loadStudents(): void {
    this.stuService.getAllStudent().subscribe({
      next: (data) => {
        this.students = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load students', err);
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.attendanceService.create(this.form.value).subscribe(() => {
        alert('Attendance Recorded!');
        this.form.reset();
      });
    }
  }
}
