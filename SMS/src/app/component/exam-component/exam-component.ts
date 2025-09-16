import { Component, OnInit } from '@angular/core';
import { Exam } from '../../model/exam.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamService } from '../../service/exam.service';

@Component({
  selector: 'app-exam-component',
  standalone: false,
  templateUrl: './exam-component.html',
  styleUrl: './exam-component.css'
})
export class ExamComponent implements OnInit {

  exams: Exam[] = [];   // এখন model এর Exam
  loading = false;
  error: string | null = null;

  examForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private examService: ExamService
  ) {}

  ngOnInit(): void {
    this.examForm = this.fb.group({
      examName: ['', Validators.required],
      subject: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.loadExams();
  }

  loadExams() {
    this.loading = true;
    this.error = null;
    this.examService.getAll().subscribe({
      next: (data) => {
        this.exams = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Could not load exams';
        this.loading = false;
      }
    });
  }

  onSubmit() {
    if (this.examForm.invalid) {
      this.examForm.markAllAsTouched();
      return;
    }

    const payload: Exam = {
      examName: this.examForm.value.examName ?? '',
      subject: this.examForm.value.subject ?? '',
      date: this.examForm.value.date ?? ''
    };

    this.examService.add(payload).subscribe({
      next: (saved) => {
        this.exams.push(saved);
        this.examForm.reset();
      },
      error: () => {
        this.error = 'Failed to add exam';
      }
    });
  }

  onDelete(exam: Exam) {
    if (!exam.id) return;
    if (!confirm(`Delete exam "${exam.examName}"?`)) return;

    this.examService.delete(exam.id).subscribe({
      next: () => {
        this.exams = this.exams.filter(e => e.id !== exam.id);
      },
      error: () => {
        this.error = 'Failed to delete exam';
      }
    });
  }
}
