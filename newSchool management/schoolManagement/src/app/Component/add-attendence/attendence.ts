import { Component } from '@angular/core';
import { Attendance } from '../../model/attendence.model';
import { AttendenceService } from '../../service/attendence.service';

@Component({
  selector: 'app-attendence',
  standalone: false,
  templateUrl: './attendence.html',
  styleUrl: './attendence.css'
})
export class Attendence {

  attendances: Attendance[] = [];
  newAttendance: Attendance = new Attendance();
  students = [
    { id: 1, name: 'Rahim Uddin' },
    { id: 2, name: 'Karim Ali' },
    { id: 3, name: 'Fatema Begum' }
  ]; // Replace with API data

  constructor(private attendanceService: AttendenceService) {}

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance() {
    this.attendanceService.getAttendances().subscribe(data => {
      this.attendances = data;
    });
  }

  addAttendance() {
    if (!this.newAttendance.studentId || !this.newAttendance.status) {
      alert('Please select student and status.');
      return;
    }
    this.newAttendance.date = new Date().toISOString().split('T')[0]; // Today’s date
    this.attendanceService.addAttendance(this.newAttendance).subscribe(() => {
      this.loadAttendance();
      this.newAttendance = new Attendance();
    });
  }

  deleteAttendance(id?: number) {
    if (id) {
      this.attendanceService.deleteAttendance(id).subscribe(() => {
        this.loadAttendance();
      });
    }
  }
}
