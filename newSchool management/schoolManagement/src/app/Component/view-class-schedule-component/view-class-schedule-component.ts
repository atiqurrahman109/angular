import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassSchedule } from '../../model/classSchedule.model';
import { ClassScheduleService } from '../../service/class-schedule-service';

@Component({
  selector: 'app-view-class-schedule-component',
  standalone: false,
  templateUrl: './view-class-schedule-component.html',
  styleUrl: './view-class-schedule-component.css'
})
export class ViewClassScheduleComponent {

  scheduleForm: FormGroup;
  schedules: ClassSchedule[] = [];
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  searchTerm: string = ''; // For search input

  constructor(
    private fb: FormBuilder,
    private scheduleService: ClassScheduleService
  ) {
    this.scheduleForm = this.fb.group({
      className: ['', Validators.required],
      section: ['', Validators.required],
      subject: ['', Validators.required],
      dayOfWeek: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadSchedules();
  }

  loadSchedules(): void {
    this.scheduleService.getSchedules().subscribe({
      next: (data) => {
        this.schedules = data;
      },
      error: (err) => {
        console.error('Error fetching schedules:', err);
        alert('Could not load schedules from the server.');
      }
    });
  }

  addSchedule(): void {
    if (this.scheduleForm.invalid) {
      alert('Please fill in all required fields.');
      return;
    }

    const newSchedule: ClassSchedule = {
      ...this.scheduleForm.value
    };

    this.scheduleService.addSchedule(newSchedule).subscribe({
      next: (savedSchedule) => {
        this.schedules.push(savedSchedule);
        this.scheduleForm.reset();
      },
      error: (err) => {
        console.error('Error adding schedule:', err);
        alert('Could not save schedule. Please try again.');
      }
    });
  }

  deleteSchedule(id?: number): void {
    if (!id) return;

    this.scheduleService.deleteSchedule(id).subscribe({
      next: () => {
        this.schedules = this.schedules.filter(s => s.id !== id);
      },
      error: (err) => {
        console.error('Error deleting schedule:', err);
        alert('Could not delete schedule.');
      }
    });
  }

  // Filtered list based on search term
  get filteredSchedules(): ClassSchedule[] {
    if (!this.searchTerm.trim()) {
      return this.schedules;
    }

    const lowerSearch = this.searchTerm.toLowerCase();

    return this.schedules.filter(s =>
      s.className?.toLowerCase().includes(lowerSearch)
    );
  }
}
