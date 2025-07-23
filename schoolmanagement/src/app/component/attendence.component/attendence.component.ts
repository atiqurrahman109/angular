import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendenceService } from '../../service/attendence.service';
import { Student } from '../../model/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { Attendance } from '../../model/attendence.model';

@Component({
  selector: 'app-attendence.component',
  standalone: false,
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.css'
})
export class AttendenceComponent implements OnInit {
  students: Student[] = [];
  formGroup!: FormGroup;

  constructor(
    private stuService: StudentService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private formBuilder: FormBuilder,
    private attenService: AttendenceService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadStudents();

    this.formGroup.get('students.id')?.valueChanges.subscribe(id => {
      const selectedStudent = this.students.find(stu => stu.id === id);
      if (selectedStudent) {
        this.formGroup.patchValue({ students: selectedStudent });
      }
    });
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group({
      aDates: [new Date().toISOString().substring(0, 16), Validators.required], // ISO datetime-local input format
      aattendance: ['', Validators.required],
      students: this.formBuilder.group({
        id: ['', Validators.required],
        firstname: [''],
        class: [''],
        roll: ['']
      })
    });
  }

  addAtten(): void {
    const attendance: Attendance = this.formGroup.value;
    this.attenService.create(attendance).subscribe({
      next: (res) => {
        console.log(res, 'Attendance Submitted!');
        this.loadStudents();
        this.formGroup.reset();
        this.formGroup.patchValue({ aDates: new Date().toISOString().substring(0, 16) });
      },
      error: (err) => {
        console.error('Submission failed:', err);
      }
    });
  }

  private loadStudents(): void {
    this.stuService.getAllStudent().subscribe({
      next: (students) => {
        this.students = students;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load students:', err);
      }
    });
  }
}
