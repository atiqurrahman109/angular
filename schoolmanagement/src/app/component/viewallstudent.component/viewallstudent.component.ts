import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';

import { Router } from '@angular/router';
import { identity } from 'rxjs';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-viewallstudent.component',
  standalone: false,
  templateUrl: './viewallstudent.component.html',
  styleUrl: './viewallstudent.component.css'
})
export class ViewallstudentComponent implements OnInit {
 id: string='';
 student:Student = new Student();

  students: any;
  


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

  updateStudent():void{
    this.studentService.updateStudent(this.id,this.students).subscribe({
      next:()=>this.router.navigate(['/allstu']),
      error:err =>console.error('update failed',err)

    });

  }

}
