import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallstudent.component',
  standalone: false,
  templateUrl: './viewallstudent.component.html',
  styleUrl: './viewallstudent.component.css'
})
export class ViewallstudentComponent implements OnInit {


  students: any;
  locations: Location[] = [];


  constructor(
    private studentService: StudentService,
    private router: Router,
    private cdr: ChangeDetectorRef,

  ) { }


  ngOnInit(): void {
    this.loadData();
  }



  loadData(): void {


    this.students = this.studentService.getAllStudent();


  }


  deleteStudent(id: string): void {

    this.studentService.deleteStudent(id).subscribe({

      next: (res) => {

        console.log(res);
        this.loadData();
        this.cdr.reattach();

      },

      error: (err) => {
        console.log(err);

      }

    });

  }

  getStudentById(id: string): void {

    this.studentService.getStudentByid(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log("data get successfully");
        this.router.navigate(['/updatestudent', id])


      },
      error: (err) => {

        console.log(err);

      }


    });


  }

}
