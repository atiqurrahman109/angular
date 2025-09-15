import { Component } from '@angular/core';
import { SchoolClass } from '../../model/student.model';
import { SchoolClassService } from '../../service/school-class.service';

@Component({
  selector: 'app-school-class-list',
  standalone: false,
  templateUrl: './school-class-list.html',
  styleUrl: './school-class-list.css'
})
export class SchoolClassList {

  classes: SchoolClass[] = [];
  loading = false;

  constructor(private schoolClassService: SchoolClassService) {}

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses(): void {
    this.loading = true;
    this.schoolClassService.getAll().subscribe({
      next: (data) => {
        this.classes = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  deleteClass(id?: number): void {
    if (!id) return;
    if (!confirm('Are you sure to delete this class?')) return;

    this.schoolClassService.delete(id).subscribe(() => {
      this.loadClasses();
    });
  }
}
