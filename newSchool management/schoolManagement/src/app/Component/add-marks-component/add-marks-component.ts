import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Marks, MarksDTO } from '../../model/marks.model';
import { MarksService } from '../../service/marks.service';

@Component({
  standalone: false,
  selector: 'app-marks-add',
  templateUrl: './add-marks-component.html',
})
@Injectable({
  providedIn: 'root'
})
export class MarksAddComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  errorMsg = '';
  successMsg = '';
  marksList: MarksDTO[] = [];

  constructor(
    private fb: FormBuilder,
    private marksService: MarksService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      studentId: [null, [Validators.required, Validators.min(1)]],
      // Removed examId since your backend model does not have exam field
      marksObtainedBangla: [0, [Validators.required, Validators.min(0)]],
      marksObtainedEnglish: [0, [Validators.required, Validators.min(0)]],
      marksObtainedMath: [0, [Validators.required, Validators.min(0)]],
      totalMarks: [{ value: 0, disabled: true }],
      grade: [''],
      status: ['']
    });

    this.form.valueChanges.subscribe(val => {
      const total =
        (Number(val.marksObtainedBangla) || 0) +
        (Number(val.marksObtainedEnglish) || 0) +
        (Number(val.marksObtainedMath) || 0);

      this.form.get('totalMarks')?.setValue(total, { emitEvent: false });

      const grade = this.computeGrade(total);
      const status = total >= 150 ? 'Pass' : 'Fail';

      if (!this.isControlDirty(this.form.get('grade'))) {
        this.form.get('grade')?.setValue(grade, { emitEvent: false });
      }
      if (!this.isControlDirty(this.form.get('status'))) {
        this.form.get('status')?.setValue(status, { emitEvent: false });
      }
    });

    this.loadMarks();
  }

  private isControlDirty(ctrl: AbstractControl | null): boolean {
    return !!ctrl && (ctrl.dirty || ctrl.touched);
  }

  private computeGrade(total: number): string {
    if (total >= 80) return 'A+';
    if (total >= 70) return 'A';
    if (total >= 60) return 'A-';
    if (total >= 50) return 'B';
    if (total >= 40) return 'C';
    if (total >= 33) return 'D';
    return 'F';
  }

  submit(): void {
    this.errorMsg = '';
    this.successMsg = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();

    const payload: Marks = {
      marksObtainedBangla: Number(v.marksObtainedBangla),
      marksObtainedEnglish: Number(v.marksObtainedEnglish),
      marksObtainedMath: Number(v.marksObtainedMath),
      totalMarks: Number(v.totalMarks),
      grade: v.grade || null,
      status: v.status || null,
      student: { id: Number(v.studentId) }  // Only student ID as your backend expects
    };

    this.loading = true;
    this.marksService.saveOrUpdate(payload).subscribe({
      next: () => {
        this.successMsg = 'Saved successfully';
        this.form.markAsPristine();
        this.form.reset({
          studentId: null,
          marksObtainedBangla: 0,
          marksObtainedEnglish: 0,
          marksObtainedMath: 0,
          totalMarks: 0,
          grade: '',
          status: ''
        });
        this.loadMarks();
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = err?.error?.message || 'Save failed';
      },
      complete: () => (this.loading = false)
    });
  }

  loadMarks(): void {
    this.marksService.getAll().subscribe({
      next: (data) => (this.marksList = data || []),
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Failed to load marks list';
      }
    });
  }

  delete(id: number): void {
    if (!confirm('Delete this record?')) return;
    this.marksService.delete(id).subscribe({
      next: () => {
        this.successMsg = `Deleted ID ${id}`;
        this.loadMarks();
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Delete failed';
      }
    });
  }
}
