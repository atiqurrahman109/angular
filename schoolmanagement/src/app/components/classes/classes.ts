import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SchoolClass } from '../../model/schoolclass.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchoolclassService } from '../../services/schoolclass.service';

@Component({
  selector: 'app-classes',
  standalone: false,
  templateUrl: './classes.html',
  styleUrl: './classes.css'
})
export class Classes implements OnInit{
  classes: SchoolClass[] = [];
  classForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private classService: SchoolclassService,
    private cdr: ChangeDetectorRef
  ) {
    this.classForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses(): void {
    this.classService.getAllClasses().subscribe({
      next: (data) => {
        this.classes = data;
        this.cdr.markForCheck();
        console.log('Classes loaded:', data);
      },
      error: (err) => {
        console.error('Error loading classes:', err);
      }
    });
  }

  createClass(): void {
    if (this.classForm.invalid) return;

    const newClass: SchoolClass = {
      id: 0,
      name: this.classForm.value.name
    };

    this.classService.createClass(newClass).subscribe({
      next: (createdClass) => {
        this.classes.push(createdClass);
        this.classForm.reset();
        this.loadClasses();
        this.cdr.markForCheck();
        console.log('Class created:', createdClass);
      },
      error: (err) => {
        console.error('Failed to create class', err);
      }
    });
  }

  deleteClass(id: number): void {
    if (!confirm('Are you sure you want to delete this class?')) return;

    this.classService.deleteClass(id).subscribe({
      next: () => {
        this.classes = this.classes.filter(cls => cls.id !== id);
        this.loadClasses();
        this.cdr.markForCheck();
        console.log(`Class with id ${id} deleted`);
      },
      error: (err) => {
        console.error('Failed to delete class', err);
      }
    });
  }
}
