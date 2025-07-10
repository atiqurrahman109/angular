import { ChangeDetectorRef, Component } from '@angular/core';
import { Student } from '../../model/student.model';
import { StudentService } from '../../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent.component',
  standalone: false,
  templateUrl: './updatestudent.component.html',
  styleUrl: './updatestudent.component.css'
})
export class UpdatestudentComponent {


   id: string='';
 student:Student = new Student();

 constructor(

private studentService:StudentService,
private router:Router,
private route:ActivatedRoute,
private cdr:ChangeDetectorRef,

 ){}

 
  ngOnInit(): void {
    this.loadStudentById();
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

  updateStudent():void{
    this.studentService.updateStudent(this.id,this.student).subscribe({
      next:()=>this.router.navigate(['/allstu']),
      error:err =>console.error('update failed',err)

    });

  }
}
