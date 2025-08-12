import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../service/student-service';
import { StudentModel } from '../../model/student.model';

@Component({
  selector: 'app-add-student-component',
  standalone: false,
  templateUrl: './add-student-component.html',
  styleUrl: './add-student-component.css'
})
export class AddStudentComponent {

  studentForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  genders = ['Male', 'Female', 'Other'];
  classes = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'];  // Example
  sections = ['A', 'B', 'C', 'D'];  // Example

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      clas: ['', Validators.required],
      section: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.studentForm.invalid) {
      return;
    }

    const student: StudentModel = this.studentForm.value;

    this.studentService.addStudent(student).subscribe({
      next: (res) => {
        this.successMessage = 'Student added successfully!';
        this.studentForm.reset();
        this.submitted = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to add student. Please try again.';
      },
    });
  }

}
