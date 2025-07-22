import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExamService } from '../../service/exam.service';

@Component({
  selector: 'app-examadd.component',
  standalone: false,
  templateUrl: './examadd.component.html',
  styleUrl: './examadd.component.css'
})
export class ExamaddComponent {
form: FormGroup;

  constructor(private fb: FormBuilder, private service: ExamService) {
    this.form = this.fb.group({
      exClass: [''],
      exTime: [''],
      exSubject1: [''], exdate1: [''],
      exSubject2: [''], exdate2: [''],
      exSubject3: [''], exdate3: [''],
      exSubject4: [''], exdate4: [''],
      exSubject5: [''], exdate5: [''],
      exSubject6: [''], exdate6: [''],
      exSubject7: [''], exdate7: [''],
    });
  }

  onSubmit() {
    this.service.create(this.form.value).subscribe(() => {
      alert('Exam schedule added');
      this.form.reset();
    });
  }
}
