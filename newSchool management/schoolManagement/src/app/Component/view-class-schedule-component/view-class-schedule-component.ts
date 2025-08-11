import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassSchedule } from '../../model/classSchedule.model';

@Component({
  selector: 'app-view-class-schedule-component',
  standalone: false,
  templateUrl: './view-class-schedule-component.html',
  styleUrl: './view-class-schedule-component.css'
})
export class ViewClassScheduleComponent {

  scheduleForm: FormGroup;
  schedules: ClassSchedule[] = [];
  nextId = 1;

  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      className: ['', Validators.required],
      section: ['', Validators.required],
      subject: ['', Validators.required],
      teacherName: ['', Validators.required],
      dayOfWeek: ['', Validators.required],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  addSchedule(): void {
    if (this.scheduleForm.invalid) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    const newSchedule: ClassSchedule = {
      id: this.nextId++,
      ...this.scheduleForm.value
    };

    this.schedules.push(newSchedule);
    this.scheduleForm.reset();
  }

  deleteSchedule(id?: number): void {
    if (id == null) return;
    this.schedules = this.schedules.filter(s => s.id !== id);
  }
}
