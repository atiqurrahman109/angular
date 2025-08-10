import { Component } from '@angular/core';
import { TeacherService } from '../../service/teacher-service';
import { Router } from '@angular/router';
import { TeacherModel } from '../../model/teacher.model';

@Component({
  selector: 'app-add-teacher-component',
  standalone: false,
  templateUrl: './add-teacher-component.html',
  styleUrl: './add-teacher-component.css'
})
export class AddTeacherComponent {

  teacher: TeacherModel = {
    firstName: '',
    lastName: '',
    dob: '',
    gender: 'Male',
    email: '',
    phone: '',
    address: '',
    qualification: '',
    experience: 0,
    subject: '',
    joiningDate: ''
  };

  constructor(private teacherService: TeacherService, private router: Router) {}

  onSubmit() {
    this.teacherService.addTeacher(this.teacher).subscribe({
      next: () => {
        alert('Teacher added successfully!');
        this.router.navigate(['/teachers']);
      },
      error: (err) => console.error('Error adding teacher', err)
    });
  }
}
