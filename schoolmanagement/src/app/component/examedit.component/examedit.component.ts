import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../../service/exam.service';

@Component({
  selector: 'app-examedit.component',
  standalone: false,
  templateUrl: './examedit.component.html',
  styleUrl: './examedit.component.css'
})
export class ExameditComponent {
form!: FormGroup;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: ExamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(data => {
      this.form = this.fb.group({
        exClass: [data.exClass],
        exTime: [data.exTime],
        exSubject1: [data.exSubject1], exdate1: [data.exdate1],
        exSubject2: [data.exSubject2], exdate2: [data.exdate2],
        exSubject3: [data.exSubject3], exdate3: [data.exdate3],
        exSubject4: [data.exSubject4], exdate4: [data.exdate4],
        exSubject5: [data.exSubject5], exdate5: [data.exdate5],
        exSubject6: [data.exSubject6], exdate6: [data.exdate6],
        exSubject7: [data.exSubject7], exdate7: [data.exdate7],
      });
    });
  }

  onUpdate() {
    this.service.update(this.id, this.form.value).subscribe(() => {
      alert('Exam schedule updated');
      this.router.navigate(['/examlist']);
    });
  }
}
