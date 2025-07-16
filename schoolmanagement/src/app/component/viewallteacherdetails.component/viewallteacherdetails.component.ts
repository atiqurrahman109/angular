import { ChangeDetectorRef, Component } from '@angular/core';
import { Teacher } from '../../model/teacher.model';
import { TeacherService } from '../../service/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewallteacherdetails.component',
  standalone: false,
  templateUrl: './viewallteacherdetails.component.html',
  styleUrl: './viewallteacherdetails.component.css'
})
export class ViewallteacherdetailsComponent {

   id!: string;
  teacher: Teacher = new Teacher();

  constructor(

    private teacherService: TeacherService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,

  ) { }


  ngOnInit(): void {
    this.loadStudentById();
  }

  loadStudentById() {
    this.id = this.route.snapshot.params['id'];

    this.teacherService.getTeacherByid(this.id).subscribe({
      next: (res) => {
        this.teacher = res;
        this.cdr.markForCheck();
      },

      error: (err) => {
        console.error('error fatching student:', err)
      }

    });

  }
   onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.teacher.photo = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}
