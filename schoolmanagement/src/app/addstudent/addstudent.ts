import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student/student';
import { error } from 'console';

@Component({
  selector: 'app-addstudent',
  standalone: false,
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css'
})
export class Addstudent implements OnInit{

  formGroup!: FormGroup;

constructor(
  private studentService: StudentService,
  private formBuilder:FormBuilder,
  private router:Router
){



}
  ngOnInit(): void {
    
    this.formGroup=this.formBuilder.group({

      name:[''],
      email:[''],
      fee:['']




   });

  }

  addStudent():void{


  const student: Student={...this.formGroup.value};
    this.studentService.saveStudent(student).subscribe({

      next:(res)=>{
        console.log("student saved",res);
        this.formGroup.reset();
        this.router.navigate(['/allstu']);


      },
      error:(error)=>{

        console.log(error);

      }


    })

  }



}
