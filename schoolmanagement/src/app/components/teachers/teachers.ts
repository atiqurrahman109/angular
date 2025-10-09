import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { Teacher } from '../../model/teacher.model';

@Component({
  selector: 'app-teachers',
  standalone: false,
  templateUrl: './teachers.html',
  styleUrls: ['./teachers.css']
})
export class Teachers implements OnInit {
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.teacherService.getAllTeachers().subscribe(
      (data) => {
        this.teachers = data;
      },
      (error) => {
        console.error('Error loading teachers', error);
      }
    );
  }

  deleteTeacher(id: number): void {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.teacherService.deleteTeacher(id).subscribe(
        () => {
          this.loadTeachers(); // Reload teachers after deletion
        },
        (error) => {
          console.error('Error deleting teacher', error);
        }
      );
    }
  }

  updateTeacher(teacher: Teacher): void {
    console.log('Edit teacher:', teacher);
    // Implement logic to navigate to the edit page or show a modal
  }

  viewTeacherProfile(teacher: Teacher): void {
    console.log('View teacher profile:', teacher);
    // Implement logic to show the teacher's profile in detail
  }
}
