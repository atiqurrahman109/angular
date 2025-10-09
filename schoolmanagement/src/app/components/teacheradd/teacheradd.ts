import { Component } from '@angular/core';
import { Teacher } from '../../model/teacher.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacheradd',
  standalone: false,
  templateUrl: './teacheradd.html',
  styleUrl: './teacheradd.css'
})
export class Teacheradd {
  teacher: Teacher = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    photo: '',
    user: {
      id: 0,
      username: '',
      email: '',
      password: '',
      role: 'TEACHER',
      photo: ''
    }
  };
  
  selectedSubject: string = '';
  selectedGrades: number[] = [];
  selectedStartDate: string = '';
  photo: File | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // Handle photo file change
  onFileChange(event: any): void {
    this.photo = event.target.files[0];
  }

  // Submit form to register teacher
  onSubmit(): void {
    if (this.photo) {
      this.teacher.user.photo = this.photo.name; // Assigning photo to user model
    }

    this.authService.registerTeacher(this.teacher.user, this.teacher, this.photo).subscribe(
      (response) => {
        console.log('Teacher added successfully', response);
        this.router.navigate(['/teachers']);
      },
      (error) => {
        console.error('Error adding teacher', error);
      }
    );
  }
}
