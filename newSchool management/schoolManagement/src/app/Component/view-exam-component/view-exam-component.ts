import { Component } from '@angular/core';
import { Exam } from '../../model/exam.model';
import { ExamService } from '../../service/exam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-exam-component',
  standalone: false,
  templateUrl: './view-exam-component.html',
  styleUrl: './view-exam-component.css'
})
export class ViewExamComponent {
exams: Exam[] = [];
  loading = false;
  error = '';

  constructor(private examService: ExamService, private router: Router) {}

  ngOnInit(): void {
    this.loadExams();
  }

  loadExams(): void {
    this.loading = true;
    this.examService.getAll().subscribe({
      next: (data) => { this.exams = data; this.loading = false; },
      error: (err) => { this.error = 'Exam load failed'; this.loading = false; console.error(err); }
    });
  }

  onEdit(id: number): void {
    // edit পেইজে পাঠাবে (add-edit component রুট অনুযায়ী)
    this.router.navigate(['/exams/edit', id]);
  }

  onDelete(id: number): void {
    if (!confirm('Are you sure to delete this exam?')) return;
    this.examService.delete(id).subscribe({
      next: () => { this.exams = this.exams.filter(e => e.id !== id); },
      error: (err) => { console.error(err); alert('Delete failed'); }
    });
  }

  onAdd(): void {
    this.router.navigate(['/exams/add']);
  }
}
