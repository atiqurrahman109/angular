import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SchoolClassService } from '../../service/school-class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-class-form',
  standalone: false,
  templateUrl: './school-class-form.html',
  styleUrl: './school-class-form.css'
})
export class SchoolClassForm implements OnInit {

  form: any; // initialize later
  saving = false;

  constructor(
    private fb: FormBuilder,
    private service: SchoolClassService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      className: ['', Validators.required],
      section: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;
    this.service.create(this.form.value).subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(['/school-class']);
      },
      error: () => {
        this.saving = false;
      }
    });
  }
}
