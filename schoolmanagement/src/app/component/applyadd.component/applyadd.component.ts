import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplyService } from '../../service/apply.service';

@Component({
  selector: 'app-applyadd.component',
  standalone: false,
  templateUrl: './applyadd.component.html',
  styleUrl: './applyadd.component.css'
})
export class ApplyaddComponent {
  applyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ApplyService
  ) {
    // Initialize form with validators
    this.applyForm = this.fb.group({
      appFirstName: ['', Validators.required],
      applastName: ['', Validators.required],
      appEmail: ['', [Validators.required, Validators.email]],
      ppPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]], // Optional: validate phone number format
      appClss: ['', Validators.required],
      appCatogory: ['', Validators.required],
      approved: ['Pending']
    });
  }

  onSubmit(): void {
    if (this.applyForm.valid) {
      this.service.create(this.applyForm.value).subscribe({
        next: () => {
          alert('Application Submitted!');
          this.applyForm.reset({
            approved: 'Pending' // reset and preserve default status
          });
        },
        error: (err) => {
          console.error('Submission failed:', err);
          alert('Something went wrong. Please try again.');
        }
      });
    } else {
      this.applyForm.markAllAsTouched();
    }
  }
}
