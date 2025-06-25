import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../student/student';
import { StudentService } from '../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  standalone: false,
  templateUrl: './update-student.html',
  styleUrl: './update-student.css'
})
export class UpdateStudent implements OnInit{
 
 id: string='';
 student:Student = new Student();

 constructor(

private studentService:StudentService,
private router:Router,
private route:ActivatedRoute,
private cdr:ChangeDetectorRef,

 ){}

 
  ngOnInit(): void {
    
  }

  loadStudentById(){
    this.id=this.route.snapshot.params['id'];

    this.studentService.getStudentByid(this.id).subscribe({

      next:(res)=> {
        this.student=res;
        this.cdr.markForCheck();

          },

          error:(err)=>{
            console.error('error fatching student:',err)

             }
         
      });

  }
  

}

    


