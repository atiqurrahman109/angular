import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-studentform',
  standalone: false,
  templateUrl: './studentform.html',
  styleUrl: './studentform.css'
})
export class Studentform {


  form!: FormGroup;
  studentId?: number;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private service: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: [''],
      email: ['', [Validators.email]],
      phone: [''],
      dob: [''],
      gender: [''],
      address: [''],
      // For nested objects we keep simple id fields (you can expand as needed)
      schoolClassId: [null],
      sectionId: [null]
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.studentId = +id;
        this.loadStudent(this.studentId);
      }
    });
  }

  loadStudent(id: number): void {
    this.loading = true;
    this.service.getById(id).subscribe({
      next: s => {
        this.loading = false;
        this.populateForm(s);
      },
      error: err => { this.loading = false; console.error(err); this.error = 'Failed to load student'; }
    });
  }

  populateForm(s: Student): void {
    this.form.patchValue({
      firstname: s.firstname,
      lastname: s.lastname,
      email: s.email,
      phone: s.phone,
      dob: s.dob,
      gender: s.gender,
      address: s.address,
      schoolClassId: s.schoolClass?.id ?? null,
      sectionId: s.section?.id ?? null
    });
  }

  submit(): void {
    if (this.form.invalid) return;
    this.loading = true;

    const payload: Student = {
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      email: this.form.value.email,
      phone: this.form.value.phone,
      dob: this.form.value.dob,
      gender: this.form.value.gender,
      address: this.form.value.address,
      // if backend expects nested objects, you can send nested shape:
      schoolClass: this.form.value.schoolClassId ? { id: this.form.value.schoolClassId } : null,
      section: this.form.value.sectionId ? { id: this.form.value.sectionId } : null
    };

    if (this.studentId) {
      this.service.update(this.studentId, payload).subscribe({
        next: () => { this.loading = false; this.router.navigate(['/students']); },
        error: err => { this.loading = false; console.error(err); alert('Update failed'); }
      });
    } else {
      this.service.create(payload).subscribe({
        next: () => { this.loading = false; this.router.navigate(['/students']); },
        error: err => { this.loading = false; console.error(err); alert('Create failed'); }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/students']);
  }
}
