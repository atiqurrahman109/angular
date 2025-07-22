import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendenceService } from '../../service/attendence.service';

@Component({
  selector: 'app-attendence.component',
  standalone: false,
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.css'
})
export class AttendenceComponent {
form: FormGroup;

  constructor(private fb: FormBuilder, private service: AttendenceService) {
    this.form = this.fb.group({
      ssid: ['', Validators.required],
      aDates: ['', Validators.required],
      aattendance: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
        alert('Attendance Recorded!');
        this.form.reset();
      });
    }
  }
}
