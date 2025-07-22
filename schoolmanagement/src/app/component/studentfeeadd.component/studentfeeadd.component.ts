import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentfeeService } from '../../service/studentfee.service';

@Component({
  selector: 'app-studentfeeadd.component',
  standalone: false,
  templateUrl: './studentfeeadd.component.html',
  styleUrl: './studentfeeadd.component.css'
})
export class StudentfeeaddComponent {
form: FormGroup;

  constructor(private fb: FormBuilder, private service: StudentfeeService) {
    this.form = this.fb.group({
      feeCatagory: [''],
      feeMonth: [''],
      feeamount: [''],
      paymentDate: [''],
      Student: this.fb.group({
        id: [''],
        email: [''],
        firstname: [''],
        lastname: [''],
        fathername: [''],
        mothername: [''],
        class: [''],
        section: [''],
        roll: [''],
        dob: [''],
        address: [''],
        gender: [''],
        phone: [''],
        photo: ['']
      })
    });
  }

  onSubmit() {
    this.service.create(this.form.value).subscribe(() => {
      alert('Student Fee Added');
      this.form.reset();
    });
  }
}
