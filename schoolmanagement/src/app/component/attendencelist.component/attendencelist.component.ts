import { Component } from '@angular/core';
import { Attendance } from '../../model/attendence.model';
import { Router } from '@angular/router';
import { AttendenceService } from '../../service/attendence.service';

@Component({
  selector: 'app-attendencelist.component',
  standalone: false,
  templateUrl: './attendencelist.component.html',
  styleUrl: './attendencelist.component.css'
})
export class AttendencelistComponent {
attendanceList: Attendance[] = [];

  constructor(private service: AttendenceService, private router: Router) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe(data => this.attendanceList = data);
  }

  onEdit(id: string) {
    this.router.navigate(['/editattendence', id]);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this attendance record?')) {
      this.service.delete(id).subscribe(() => this.loadData());
    }
  }
}
