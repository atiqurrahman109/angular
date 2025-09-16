import { Component } from '@angular/core';
import { Attendance } from '../../model/attendance.model';
import { AttendanceService } from '../../service/attendance.service';

@Component({
  selector: 'app-attendance-component',
  standalone: false,
  templateUrl: './attendance-component.html',
  styleUrl: './attendance-component.css'
})
export class AttendanceComponent {

   attendances: Attendance[] = [];

  newAttendance: Attendance = {
    date: '',
    present: false,
    student: { id: 0, name: '' } // placeholder student
  };

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance(): void {
    this.attendanceService.getAll().subscribe(data => {
      this.attendances = data;
    });
  }

  addAttendance(): void {
    this.attendanceService.save(this.newAttendance).subscribe(() => {
      this.newAttendance = {
        date: '',
        present: false,
        student: { id: 0, name: '' }
      };
      this.loadAttendance();
    });
  }

  deleteAttendance(id: number): void {
    this.attendanceService.delete(id).subscribe(() => {
      this.loadAttendance();
    });
  }
}
