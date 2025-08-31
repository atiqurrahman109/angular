import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { MarksDTO } from '../../model/marks.model';
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
   marksForm!: FormGroup;
  marksList: MarksDTO[] = [];
  loading = false;
  successMsg = '';
  errorMsg = '';

  constructor(private fb: FormBuilder, private marksService: MarksService) {}

  ngOnInit(): void {
    // Initialize form with nested FormGroups
    this.marksForm = this.fb.group({
      student: this.fb.group({
        id: ['', Validators.required],
      }),
      exam: this.fb.group({
        id: ['', Validators.required],
      }),
      marksObtainedBangla: [0, [Validators.required, Validators.min(0)]],
      marksObtainedEnglish: [0, [Validators.required, Validators.min(0)]],
      marksObtainedMath: [0, [Validators.required, Validators.min(0)]],
      marksObtainedScience: [0, [Validators.required, Validators.min(0)]],
      marksObtainedIslam: [0, [Validators.required, Validators.min(0)]],
      marksObtainedSports: [0, [Validators.required, Validators.min(0)]],
      totalMarks: [{ value: 0, disabled: true }],
    });

    // Calculate total marks whenever marks change
    this.marksForm.valueChanges.subscribe(() => this.calculateTotal());

    this.loadMarks();
  }

  calculateTotal(): void {
    const val = this.marksForm.value;
    const total =
      (Number(val.marksObtainedBangla) || 0) +
      (Number(val.marksObtainedEnglish) || 0) +
      (Number(val.marksObtainedMath) || 0) +
      (Number(val.marksObtainedScience) || 0) +
      (Number(val.marksObtainedIslam) || 0) +
      (Number(val.marksObtainedSports) || 0);

    this.marksForm.get('totalMarks')?.setValue(total, { emitEvent: false });
  }

  loadMarks(): void {
    this.loading = true;
    this.marksService.getAll().subscribe({
      next: (data: MarksDTO[]) => {
        this.marksList = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Failed to load marks';
        this.loading = false;
      },
    });
  }

  submit(): void {
    if (this.marksForm.invalid) {
      this.marksForm.markAllAsTouched();
      return;
    }

    this.successMsg = '';
    this.errorMsg = '';

    const payload = this.marksForm.getRawValue();

    this.marksService.saveOrUpdate(payload).subscribe({
      next: () => {
        this.successMsg = 'Marks saved successfully';
        this.marksForm.reset({
          student: { id: '' },
          exam: { id: '' },
          marksObtainedBangla: 0,
          marksObtainedEnglish: 0,
          marksObtainedMath: 0,
          marksObtainedScience: 0,
          marksObtainedIslam: 0,
          marksObtainedSports: 0,
          totalMarks: 0,
        });
        this.loadMarks();
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = err?.error?.message || 'Failed to save marks';
      },
    });
  }

  delete(id: number): void {
    if (!confirm('Delete this record?')) return;
    this.marksService.delete(id).subscribe({
      next: () => this.loadMarks(),
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Delete failed';
      },
    });
  }
}
