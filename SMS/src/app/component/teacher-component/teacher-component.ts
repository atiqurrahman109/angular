import { Component } from '@angular/core';
import { Teacher } from '../../model/teacher.model';
import { TeacherService } from '../../service/teacher.service';

@Component({
  selector: 'app-teacher-component',
  standalone: false,
  templateUrl: './teacher-component.html',
  styleUrl: './teacher-component.css'
})
export class TeacherComponent {

  teachers: Teacher[] = [];
  newTeacher: Teacher = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: ''
  };

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.teacherService.getAll().subscribe(data => {
      this.teachers = data;
    });
  }

  addTeacher(): void {
    this.teacherService.addTeacher(this.newTeacher).subscribe(() => {
      this.loadTeachers();
      this.newTeacher = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        subject: ''
      };
    });
  }

  deleteTeacher(id: number): void {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.teacherService.deleteTeacher(id).subscribe(() => {
        this.loadTeachers();
      });
    }
  }
}
