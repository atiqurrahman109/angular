import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendenceService } from '../../service/attendence.service';
import { AttendanceModel } from '../../model/attendence.model';

@Component({
  standalone: false,
  selector: 'app-attendence',
  templateUrl: './attendence.html',
  styleUrls: ['./attendence.css']
})
export class AttendanceComponent implements OnInit {
  attendanceForm!: FormGroup;
  attendanceList: AttendanceModel[] = [];

  constructor(
    private fb: FormBuilder,
    private attendanceService: AttendenceService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadAttendanceList();
  }

  initializeForm(): void {
    this.attendanceForm = this.fb.group({
      studentId: [null, Validators.required],
      studentName: ['', Validators.required],
      className: ['', Validators.required],
      section: ['', Validators.required],
      attendanceDate: [this.getTodayDateString(), Validators.required],
      status: ['Present', Validators.required]
    });
  }

  loadAttendanceList(): void {
    this.attendanceService.getAttendanceList().subscribe({
      next: (data) => {
        this.attendanceList = data;
      },
      error: (err) => console.error('Error fetching attendance:', err)
    });
  }

  onSubmit(): void {
    if (this.attendanceForm.invalid) {
      this.attendanceForm.markAllAsTouched();
      return;
    }

    const attendance: AttendanceModel = {
      ...this.attendanceForm.value,
      attendanceDate: new Date(this.attendanceForm.value.attendanceDate)
    };

    this.attendanceService.createAttendance(attendance).subscribe({
      next: (response) => {
        this.attendanceList.push(response);
        this.attendanceForm.reset({
          studentId: null,
          studentName: '',
          className: '',
          section: '',
          attendanceDate: this.getTodayDateString(),
          status: 'Present'
        });
      },
      error: (err) => console.error('Error adding attendance:', err)
    });
  }

  private getTodayDateString(): string {
    return new Date().toISOString().split('T')[0];
  }
}
