import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-addstudent.component',
  standalone: false,
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent implements OnInit {

  studentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      fathername: ['', Validators.required],
      mothername: ['', Validators.required],
      class: ['', Validators.required],
      section: ['', Validators.required],
      roll: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      photo: ['']
    });
  }

  onSubmit(): void {
    console.log('Button clicked');
  console.log('Form Valid?', this.studentForm.valid);
  console.log(this.studentForm.value);

    if (this.studentForm.valid) {
      const newStudent: Student = this.studentForm.value;
      this.studentService.saveStudent(newStudent).subscribe({
        next: () => {
          alert('Student added successfully!');
          this.router.navigate(['/students']);
        },
        error: (err) => {
          console.error('Error saving student:', err);
          alert('Failed to save student. Try again later.');
        }
      });
    } else {
      this.studentForm.markAllAsTouched();
    }
  }



}
