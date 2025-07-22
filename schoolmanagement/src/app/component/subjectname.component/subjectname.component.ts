import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubjectName } from '../../model/subject.model';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-subjectname.component',
  standalone: false,
  templateUrl: './subjectname.component.html',
  styleUrl: './subjectname.component.css'
})
export class SubjectnameComponent {
 subjectForm!: FormGroup;
  subjectList: SubjectName[] = [];
  isEditing = false;

  constructor(
    private fb: FormBuilder,
    private subjectService: SubjectService 
  ) {}

  ngOnInit(): void {
    this.subjectForm = this.fb.group({
      subid: [],
      subName: ['']
    });
    this.loadSubjects();
  }

  loadSubjects() {
    this.subjectService.getAllSubjects().subscribe(data => {
      this.subjectList = data;
    });
  }

  onSubmit() {
    const subject = this.subjectForm.value;

    if (this.isEditing) {
      this.subjectService.updateSubject(subject).subscribe(() => {
        this.loadSubjects();
        this.subjectForm.reset();
        this.isEditing = false;
      });
    } else {
      this.subjectService.addSubject(subject).subscribe(() => {
        this.loadSubjects();
        this.subjectForm.reset();
      });
    }
  }

  editSubject(subject: SubjectName) {
    this.subjectForm.patchValue(subject);
    this.isEditing = true;
  }

  deleteSubject(id: number | undefined) {
    if (id) {
      this.subjectService.deleteSubject(id).subscribe(() => {
        this.loadSubjects();
      });
    }
  }
}
