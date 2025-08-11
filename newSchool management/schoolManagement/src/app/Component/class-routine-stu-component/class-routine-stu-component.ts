import { Component, OnInit } from '@angular/core';
import { ClassRoutine,  ClassRoutineStu } from '../../service/class-routine-stu-service';

@Component({
  selector: 'app-class-routine-stu-component',
  standalone: false,
  templateUrl: './class-routine-stu-component.html',
  styleUrl: './class-routine-stu-component.css'
})
export class ClassRoutineStuComponent implements OnInit {

   classes = ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9']; // example classes
  selectedClass = '';
  routines: ClassRoutine[] = [];
  loading = false;

  constructor(private routineService: ClassRoutineStu) {}

  ngOnInit() {
    // Optionally, select first class on load
    if (this.classes.length) {
      this.selectedClass = this.classes[0];
      this.loadRoutine();
    }
  }

  loadRoutine() {
    if (!this.selectedClass) {
      this.routines = [];
      return;
    }
    this.loading = true;
    this.routineService.getClassRoutines(this.selectedClass).subscribe({
      next: data => {
        this.routines = data;
        this.loading = false;
      },
      error: err => {
        console.error('Error loading routines', err);
        this.loading = false;
      }
    });
  }
}
