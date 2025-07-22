import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentfeeService } from '../../service/studentfee.service';

@Component({
  selector: 'app-studentfeeedit.component',
  standalone: false,
  templateUrl: './studentfeeedit.component.html',
  styleUrl: './studentfeeedit.component.css'
})
export class StudentfeeeditComponent {
form!: FormGroup;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: StudentfeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(data => {
      this.form = this.fb.group({
        feeCatagory: [data.feeCatagory],
        feeMonth: [data.feeMonth],
        feeamount: [data.feeamount],
        paymentDate: [data.paymentDate],
        Student: this.fb.group({
          id: [data.Student?.id],
          email: [data.Student?.email],
          firstname: [data.Student?.firstname],
          lastname: [data.Student?.lastname],
          fathername: [data.Student?.fathername],
          mothername: [data.Student?.mothername],
          class: [data.Student?.class],
          section: [data.Student?.section],
          roll: [data.Student?.roll],
          dob: [data.Student?.dob],
          address: [data.Student?.address],
          gender: [data.Student?.gender],
          phone: [data.Student?.phone],
          photo: [data.Student?.photo]
        })
      });
    });
  }

  onUpdate() {
    this.service.update(this.id, this.form.value).subscribe(() => {
      alert('Student Fee Updated');
      this.router.navigate(['/studentfee-list']);
    });
  }
}
