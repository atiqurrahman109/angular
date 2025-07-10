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
export class AddteacherComponent implements OnInit{
 
 formgroup!:FormGroup;
 
 constructor(
private teacherService:TeacherService,
private formbuilder:FormBuilder,
private router:Router

 ){}


 
 ngOnInit(): void {
    
    this.formgroup=this.formbuilder.group({

      name: [''],
      email: [''],
      fathername: [''],
      mothername: [''],
      designation:['']




    });


  }

  addTeacher(): void {
  
  
      const teacher: Teacher = { ...this.formgroup.value };
      this.teacherService.saveTeacher(teacher).subscribe({
  
        next: (res) => {
          console.log("teacher saved", res);
          this.formgroup.reset();
          this.router.navigate(['/viewteacher']);
  
  
        },
        error: (error) => {
  
          console.log(error);
  
        }
  
  
      });

}
}
