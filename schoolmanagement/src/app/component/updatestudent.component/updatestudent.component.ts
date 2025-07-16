import { ChangeDetectorRef, Component } from '@angular/core';
import { Student } from '../../model/student.model';
import { StudentService } from '../../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatestudent.component',
  standalone: false,
  templateUrl: './updatestudent.component.html',
  styleUrl: './updatestudent.component.css'
})
export class UpdatestudentComponent {


  studentForm!: FormGroup;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.studentForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      fathername: ['', Validators.required],
      mothername: ['', Validators.required],
      class: ['', Validators.required],
      section: ['', Validators.required],
      roll: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      photo: ['']
    });

    this.loadStudentData();
  }

  loadStudentData(): void {
    this.studentService.getStudentByid(this.id).subscribe({
      next: (student: Student) => {
        this.studentForm.patchValue(student);
      },
      error: (err) => {
        console.error('Error loading student:', err);
      }
    });
  }

  onUpdate(): void {
    if (this.studentForm.valid) {
      const updatedStudent: Student = {
        id: this.id,
        ...this.studentForm.value
      };

      this.studentService.updateStudent(this.id, updatedStudent).subscribe({
        next: () => {
          alert('Student updated successfully!');
          this.router.navigate(['/allstu']);
        },
        error: (err) => {
          console.error('Update failed:', err);
        }
      });
    }
  }
}
