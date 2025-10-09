import { ChangeDetectorRef, Component } from '@angular/core';
import { Student } from '../../model/student..model';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (data) => {
        this.students = data;
        this.cdr.markForCheck();
      },
      (error) => {
        console.error('Error loading students', error);
      }
    );
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(
        () => {
          this.loadStudents();
          this.cdr.markForCheck();
        },
        (error) => {
          console.error('Error deleting student', error);
        }
      );
    }
  }

  // Navigate to the edit page or open an edit modal (for simplicity, just log for now)
  updateStudent(student: Student): void {
    console.log('Edit student:', student);
    // You can navigate to an edit page or open a modal here for updating
  }
}
