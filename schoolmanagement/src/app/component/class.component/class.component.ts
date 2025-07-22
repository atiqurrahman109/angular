import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Class } from '../../model/class.Model';
import { ClassService } from '../../service/class.service';

@Component({
  selector: 'app-class.component',
  standalone: false,
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent {
classForm!: FormGroup;
  classList: Class[] = [];

  constructor(
    private fb: FormBuilder,
    private classService: ClassService
  ) {}

  ngOnInit(): void {
    this.classForm = this.fb.group({
      id: [''],
      cName: ['']
    });

    this.loadClasses();
  }

  loadClasses() {
    this.classService.getAllClasses().subscribe(data => {
      this.classList = data;
    });
  }

  onSubmit() {
    if (this.classForm.valid) {
      const newClass: Class = this.classForm.value;
      this.classService.addClass(newClass).subscribe(() => {
        this.classForm.reset();
        this.loadClasses();
      });
    }
  }

  deleteClass(id: string) {
    this.classService.deleteClass(id).subscribe(() => {
      this.loadClasses();
    });
  }
}
