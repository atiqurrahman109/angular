import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceModel } from '../../model/attendence.model';
import { StudentModel } from '../../model/student.model';
import { AttendenceService } from '../../service/attendence.service';
import { StudentService } from '../../service/student-service';

@Component({
  standalone: false,
  selector: 'app-attendence',
  templateUrl: './attendence.html',
  styleUrls: ['./attendence.css']
})
export class AttendanceComponent implements OnInit {
  formGroup!: FormGroup;
  students: StudentModel[] = [];
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private attenService: AttendenceService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadStudents();
  }

  // input[type=datetime-local] এর জন্য লোকাল টাইম ফরম্যাটার
  private toLocalDateTimeInputValue(d: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  private initForm(): void {
    this.formGroup = this.fb.group({
      attendanceDate: [this.toLocalDateTimeInputValue(new Date()), Validators.required],
      status: ['', Validators.required],                 // 'Present' | 'Absent' | 'Leave' | 'Late'
      studentId: ['', Validators.required]              // শুধুই id যাবে query param এ
    });
  }

  get f() { return this.formGroup.controls; }

  addAtten(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.submitting = true;

    // তোমার মডেল অনুযায়ী body: backend studentName/className/section নিজে সেট করতে পারলে এগুলো খালি রাখো
    const attendance: AttendanceModel = {
      id: 0, // নতুন রেকর্ড হলে 0/undefined দিলেই হয়
      studentName: '',        // backend Student থেকে resolve করতে চাইলে খালি রাখো
      className: '',          // same
      section: '',            // same
      attendanceDate: new Date(this.formGroup.value.attendanceDate),
      status: this.formGroup.value.status,
      student: { id: this.formGroup.value.studentId } as StudentModel
    };

    const studentId: number = this.formGroup.value.studentId;

    this.attenService.create(attendance, studentId).subscribe({
      next: (res) => {
        console.log('✅ Attendance Submitted!', res);
        // ফর্ম রিসেট + তারিখ এখনকার দিয়ে সেট
        this.formGroup.reset();
        this.formGroup.patchValue({
          attendanceDate: this.toLocalDateTimeInputValue(new Date())
        });
      },
      error: (err) => {
        console.error('❌ Submission failed:', err);
      },
      complete: () => {
        this.submitting = false;
      }
    });
  }

  private loadStudents(): void {
    this.studentService.getAllStudent().subscribe({
      next: (list) => {
        this.students = list || [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load students:', err);
      }
    });
  }
}
