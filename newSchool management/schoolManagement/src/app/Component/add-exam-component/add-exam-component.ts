import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamService } from '../../service/exam.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from '../../model/exam.model';

@Component({
  selector: 'app-add-exam-component',
  standalone: false,
  templateUrl: './add-exam-component.html',
  styleUrl: './add-exam-component.css'
})
export class AddExamComponent {
form!: FormGroup;
  id?: number;
  isEdit = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private examService: ExamService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [0],
      examName: ['', Validators.required],
      examType: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.isEdit = true;
        this.loadExam(this.id);
      }
    });
  }

  loadExam(id: number): void {
    this.loading = true;
    this.examService.getById(id).subscribe({
      next: (ex: Exam) => {
        this.form.patchValue({
          id: ex.id,
          examName: ex.examName,
          examType: ex.examType
        });
        this.loading = false;
      },
      error: (err) => { console.error(err); this.loading = false; }
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = this.form.value;
    this.examService.save(payload).subscribe({
      next: (saved) => {
        alert('Saved successfully');
        this.router.navigate(['/exams']);
      },
      error: (err) => { console.error(err); alert('Save failed'); }
    });
  }
}
