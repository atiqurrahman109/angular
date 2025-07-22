import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplyService } from '../../service/apply.service';

@Component({
  selector: 'app-applyedit.component',
  standalone: false,
  templateUrl: './applyedit.component.html',
  styleUrl: './applyedit.component.css'
})
export class ApplyeditComponent implements OnInit {
  form!: FormGroup;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: ApplyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(data => {
      this.form = this.fb.group({
        appFirstName: [data.appFirstName],
        applastName: [data.applastName],
        appEmail: [data.appEmail],
        ppPhone: [data.appPhone],
        appClss: [data.appClss],
        appCatogory: [data.appCatogory],
        approved: [data.approved]
      });
    });
  }

  onUpdate() {
    this.service.update(this.id, this.form.value).subscribe(() => {
      alert('Updated Successfully!');
      this.router.navigate(['/apply-list']);
    });
  }
}
