import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AttendanceModel } from '../../model/attendence.model';
import { StudentModel } from '../../model/student.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendenceService } from '../../service/attendence.service';
import { Router } from '@angular/router';
import { StudentService } from '../../service/student-service';

@Component({
  selector: 'app-view-attendance',
  standalone: false,
  templateUrl: './view-attendance.html',
  styleUrl: './view-attendance.css'
})
export class ViewAttendance implements OnInit{

  atttendance: AttendanceModel[] = []; // Attendance List
  student: StudentModel[] = [];
  attForm!: FormGroup;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private attendenceService: AttendenceService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private studentservice: StudentService
  ) {}

  ngOnInit(): void {
    this.attForm = this.fb.group({
      attendanceDate: ['', Validators.required],
      status: ['', Validators.required],
      student: this.fb.group({
        id: ['', Validators.required],
      })
    });

    this.attForm.get('student.id')?.valueChanges.subscribe((id: number) => {
      const selected = this.student.find(i => i.id === +id);
      if (selected) {
        console.log('Selected:', selected.firstName);
      }
    });

    this.loadStudent();
    this.loadAttendance(); // Load attendance list on init
  }

  loadStudent(): void {
    this.studentservice.getAllStudent().subscribe({
      next: (stu) => {
        this.student = stu;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadAttendance(): void {
    this.loading = true;
    this.attendenceService.getAll().subscribe({
      next: (data) => {
        this.atttendance = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = 'Failed to load attendance records.';
        this.loading = false;
      }
    });
  }

  addAttendance(): void {
    const atten: AttendanceModel = this.attForm.value;

    this.attendenceService.create(atten).subscribe({
      next: (or) => {
        console.log(or, 'Attendance Successfully !');
        this.loadAttendance(); // Refresh list
        this.attForm.reset();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
