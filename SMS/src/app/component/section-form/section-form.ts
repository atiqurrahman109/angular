import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectionService } from '../../service/section.service';
import { Router } from '@angular/router';
import { SchoolClass } from '../../model/student.model';
import { SchoolClassService } from '../../service/school-class.service';

@Component({
  standalone:false,
  selector: 'app-section-form',
  templateUrl: './section-form.html',
  styleUrls: ['./section-form.css']   // ✅ ঠিক করা হয়েছে
})
export class SectionForm implements OnInit {
form!: FormGroup;
  saving = false;
  classes: SchoolClass[] = []; // dropdown এর জন্য সব ক্লাস রাখব

  constructor(
    private fb: FormBuilder,
    private sectionService: SectionService,
    private classService: SchoolClassService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      schoolClass: this.fb.group({
        id: [null, Validators.required]
      })
    });

    this.loadClasses();
  }

  loadClasses(): void {
    this.classService.getAll().subscribe({
      next: (data) => (this.classes = data),
      error: (err) => console.error('Error loading classes', err)
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;
    this.sectionService.create(this.form.value).subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(['/sections']);
      },
      error: (err) => {
        console.error('Error saving section', err);
        this.saving = false;
      }
    });
  }
}
