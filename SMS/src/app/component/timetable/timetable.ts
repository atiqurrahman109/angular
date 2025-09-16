import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TimetableService } from '../../service/timetable.service';

@Component({
  selector: 'app-timetable',
  standalone: false,
  templateUrl: './timetable.html',
  styleUrl: './timetable.css'
})
export class Timetable implements OnInit{


   timetableForm!: FormGroup;
  timetables: Timetable[] = [];

  constructor(private fb: FormBuilder, private timetableService: TimetableService) {}

  ngOnInit(): void {
    this.timetableForm = this.fb.group({
      dayOfWeek: [''],
      periodNumber: [1],
      subject: [''],
      teacher: this.fb.group({
        id: [null]
      }),
      schoolClass: this.fb.group({
        id: [null]
      })
    });

    this.loadTimetables();
  }

  loadTimetables(): void {
    this.timetableService.getAll().subscribe(data => {
    });
  }

  onSubmit(): void {
    if (this.timetableForm.valid) {
      this.timetableService.save(this.timetableForm.value).subscribe(() => {
        this.timetableForm.reset();
        this.loadTimetables();
      });
    }
  }

  deleteTimetable(id: number): void {
    this.timetableService.delete(id).subscribe(() => {
      this.loadTimetables();
    });
  }
}
