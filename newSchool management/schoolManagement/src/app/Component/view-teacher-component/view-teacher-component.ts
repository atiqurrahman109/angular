import { Component, OnInit } from '@angular/core';
import { TeacherModel } from '../../model/teacher.model';
import { TeacherService } from '../../service/teacher-service';

@Component({
  selector: 'app-view-teacher-component',
  standalone: false,
  templateUrl: './view-teacher-component.html',
  styleUrl: './view-teacher-component.css'
})
export class ViewTeacherComponent implements OnInit{

  teachers: TeacherModel[] = [];
  loading = true;

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers() {
    this.teacherService.getAllTeacher().subscribe({
      next: (data) => {
        this.teachers = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading teachers', err);
        this.loading = false;
      }
    });
  }

  deleteTeacher(id: number | undefined) {
    if (!id) return;
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.teacherService.deleteTeacher(id).subscribe({
        next: () => {
          alert('Teacher deleted successfully');
          this.loadTeachers();
        },
        error: (err) => console.error('Error deleting teacher', err)
      });
    }
  }
}
