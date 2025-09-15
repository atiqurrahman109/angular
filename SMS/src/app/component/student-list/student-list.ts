import { Component } from '@angular/core';
import { Student } from '../../model/student.model';
import { StudentService } from '../../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {

  students: Student[] = [];
  loading = false;
  error = '';

  constructor(private service: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.service.getAll().subscribe({
      next: data => { this.students = data; this.loading = false; },
      error: err => { this.error = 'Could not load students'; console.error(err); this.loading = false; }
    });
  }

  addNew(): void {
    this.router.navigate(['/students/new']);
  }

  edit(s: Student): void {
    if (s.id != null) this.router.navigate(['/students', s.id, 'edit']);
  }

  delete(s: Student): void {
    if (!s.id) return;
    if (!confirm(`Are you sure to delete ${s.firstname} ${s.lastname}?`)) return;
    this.service.delete(s.id).subscribe({
      next: () => this.load(),
      error: err => { console.error(err); alert('Delete failed'); }
    });
  }
}
