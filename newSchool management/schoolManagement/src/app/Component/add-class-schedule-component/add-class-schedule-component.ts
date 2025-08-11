import { Component, OnInit } from '@angular/core';
import { ClassSchedule } from '../../model/classSchedule.model';
import { ClassScheduleService } from '../../service/class-schedule-service';

@Component({
  selector: 'app-add-class-schedule-component',
  standalone: false,
  templateUrl: './add-class-schedule-component.html',
  styleUrl: './add-class-schedule-component.css'
})
export class AddClassScheduleComponent implements OnInit {

  schedules: ClassSchedule[] = [];
  newSchedule: ClassSchedule = {};

  constructor(private scheduleService: ClassScheduleService) {}

  ngOnInit(): void {
    this.loadSchedules();
  }

  loadSchedules() {
    this.scheduleService.getSchedules().subscribe(data => {
      this.schedules = data;
    });
  }

  addSchedule() {
    if (this.newSchedule.className && this.newSchedule.subject) {
      this.scheduleService.addSchedule(this.newSchedule).subscribe(() => {
        this.loadSchedules();
        this.newSchedule = {}; // reset form
      });
    }
  }

  deleteSchedule(id?: number) {
    if (id) {
      this.scheduleService.deleteSchedule(id).subscribe(() => {
        this.loadSchedules();
      });
    }
  }
}
