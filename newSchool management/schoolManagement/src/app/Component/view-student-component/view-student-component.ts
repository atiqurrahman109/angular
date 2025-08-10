import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../../model/student.model';
import { StudentService } from '../../service/student-service';

@Component({
  selector: 'app-view-student-component',
  standalone: false,
  templateUrl: './view-student-component.html',
  styleUrl: './view-student-component.css'
})
export class ViewStudentComponent implements OnInit{

  students: StudentModel[] = [];
  errorMessage = '';
  loading = false;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.loading = true;
    this.errorMessage = '';

    this.studentService.getAllStudent().subscribe({
      next: (data) => {
        this.students = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load students.';
        this.loading = false;
      },
    });
  }
}
