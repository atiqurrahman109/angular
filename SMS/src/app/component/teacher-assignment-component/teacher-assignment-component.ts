import { Component } from '@angular/core';
import { TeacherAssignment } from '../../model/teacher-assignment.model';
import { Teacher } from '../../model/teacher.model';
import { SchoolClass } from '../../model/student.model';
import { TeacherAssignmentService } from '../../service/teacher-assignment.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher-assignment-component',
  standalone: false,
  templateUrl: './teacher-assignment-component.html',
  styleUrl: './teacher-assignment-component.css'
})
export class TeacherAssignmentComponent {
  selectedTeacherId!:number;
  assignments: TeacherAssignment[] = [];
  newAssignment: TeacherAssignment = {
    teacher: { id: 0, firstname: '', lastname: '', email: '', phone: '', subject: '' },
    schoolClass: { id: 0, name: '', section: '' },
    subject: ''
  };

  teachers: Teacher[] = [];
  classes: SchoolClass[] = [];

  constructor(private assignmentService: TeacherAssignmentService, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAssignments();
    this.loadTeachers();
    this.loadClasses();
  }

  loadAssignments(): void {
    this.assignmentService.getAll().subscribe(data => {
      this.assignments = data;
    });
  }

  loadTeachers(): void {
    this.http.get<Teacher[]>('http://localhost:8080/api/teacher').subscribe(data => {
      this.teachers = data;
    });
  }

  loadClasses(): void {
    this.http.get<SchoolClass[]>('http://localhost:8080/api/class').subscribe(data => {
      this.classes = data;
    });
  }

  addAssignment(): void {
    this.assignmentService.add(this.newAssignment).subscribe(() => {
      this.loadAssignments();
      this.newAssignment = {
        teacher: { id: 0, firstname: '', lastname: '', email: '', phone: '', subject: '' },
        schoolClass: { id: 0, name: '', section: '' },
        subject: ''
      };
    });
  }

  deleteAssignment(id: number): void {
    if (confirm('Are you sure to delete this assignment?')) {
      this.assignmentService.delete(id).subscribe(() => {
        this.loadAssignments();
      });
    }
  }
}
