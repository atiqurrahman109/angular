import { ChangeDetectorRef, Component } from '@angular/core';
import { Teacher } from '../../model/teacher.model';

import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../../service/teacher.service';

@Component({
  selector: 'app-updateteacher.component',
  standalone: false,
  templateUrl: './updateteacher.component.html',
  styleUrl: './updateteacher.component.css'
})
export class UpdateteacherComponent {

  id: string = '';
  teacher: Teacher = new Teacher();

  constructor(

    private teacherService: TeacherService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,

  ) { }


  ngOnInit(): void {
    this.loadteacherById();
  }

  loadteacherById() {
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

  updateTeacher(): void {
    this.teacherService.updateTeacher(this.id, this.teacher).subscribe({
      next: () => this.router.navigate(['/viewteacher']),
      error: err => console.error('update failed', err)

    });

  }
}
