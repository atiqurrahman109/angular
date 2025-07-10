import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-addstudent.component',
  standalone: false,
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private router: Router,

  ) {



  }
  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({

      name: [''],
      email: [''],
      fathername: [''],
      mothername: [''],
      class: [''],
      section: ['']


    });




  }

  addStudent(): void {


    const student: Student = { ...this.formGroup.value };
    this.studentService.saveStudent(student).subscribe({

      next: (res) => {
        console.log("student saved", res);
        this.formGroup.reset();
        this.router.navigate(['/viewstudent']);


      },
      error: (error) => {

        console.log(error);

      }


    })

  }



}
