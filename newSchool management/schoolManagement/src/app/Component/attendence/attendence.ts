import { Component, OnInit } from '@angular/core';

import { AttendenceService } from '../../service/attendence.service';
import { AttendanceModel } from '../../model/attendence.model';

@Component({
  standalone: false,
  selector: 'app-attendence',
  templateUrl: './attendence.html',
  styleUrls: ['./attendence.css']
})
export class AttendanceComponent implements OnInit {
  attendances: AttendanceModel[] = [];
newAttendance: AttendanceModel = { studentId: 1, attendanceDate: '2025-08-19', status: 'Present' };


  constructor(private attendenceService: AttendenceService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.attendenceService.getAll().subscribe(data => {
      this.attendances = data;
    });
  }

  save() {
    this.attendenceService.save(this.newAttendance).subscribe(() => {
      this.loadData();
    });
  }

  delete(id: number) {
    this.attendenceService.delete(id).subscribe(() => {
      this.loadData();
    });
  }
}
