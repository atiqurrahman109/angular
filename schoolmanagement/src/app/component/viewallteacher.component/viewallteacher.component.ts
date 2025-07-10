import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TeacherService } from '../../service/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewallteacher.component',
  standalone: false,
  templateUrl: './viewallteacher.component.html',
  styleUrl: './viewallteacher.component.css'
})
export class ViewallteacherComponent implements OnInit {

  teachers: any;
 

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private cdr: ChangeDetectorRef,

  ) { }


  ngOnInit(): void {
    this.loadData();
  }


  loadData(): void {

    this.teachers = this.teacherService.getAllTeacher();

  }


  deleteTeacher(id: string): void {

    this.teacherService.deleteTeacher(id).subscribe({

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

    this.teacherService.getTeacherByid(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log("data get successfully");
        this.router.navigate(['/updateteacher', id])


      },
      error: (err) => {

        console.log(err);

      }


    });


  }
}
