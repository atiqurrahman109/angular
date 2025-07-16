import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeacherService } from '../../service/teacher.service';
import { Router } from '@angular/router';
import { Teacher } from '../../model/teacher.model';

@Component({
  selector: 'app-addteacher.component',
  standalone: false,
  templateUrl: './addteacher.component.html',
  styleUrl: './addteacher.component.css'
})
export class AddteacherComponent implements OnInit {

  teacherForm!: FormGroup;

  constructor(
    private teacherService: TeacherService,
    private formbuilder: FormBuilder,
    private router: Router

  ) { }



  ngOnInit(): void {

    this.teacherForm = this.formbuilder.group({

      firstname: [''],
      lastname:[''],
      email: [''],
      fathersname: [''],
      mothersname: [''],
      designation: [''],
      dob:[''],
      joiningDate:[''],
      gender:[''],
      address:[''],
      phone:[''],
      photo:[''],
     

    });


  }

  addTeacher(): void {


    const teacher: Teacher = { ...this.teacherForm.value };
    this.teacherService.saveTeacher(teacher).subscribe({

      next: (res) => {
        console.log("teacher saved", res);
        this.teacherForm.reset();
        this.router.navigate(['/viewteacher']);


      },
      error: (error) => {

        console.log(error);

      }


    });

  }
}
