import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendenceService } from '../../service/attendence.service';

@Component({
  selector: 'app-attendenceedit.component',
  standalone: false,
  templateUrl: './attendenceedit.component.html',
  styleUrl: './attendenceedit.component.css'
})
export class AttendenceeditComponent {
form!: FormGroup;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: AttendenceService ,
 
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(data => {
      this.form = this.fb.group({
        ssid: [data.ssid],
        aDates: [data.aDates],
        aattendance: [data.aattendance]
      });
    });
  }

  onUpdate() {
    this.service.update(this.id, this.form.value).subscribe(() => {
      alert('Attendance Updated!');
      this.router.navigate(['/attendance-list']);
    });
  }
}
