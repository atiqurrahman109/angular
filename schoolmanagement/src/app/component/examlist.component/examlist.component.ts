import { Component } from '@angular/core';
import { ExamModel } from '../../model/exam.model';
import { ExamService } from '../../service/exam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examlist.component',
  standalone: false,
  templateUrl: './examlist.component.html',
  styleUrl: './examlist.component.css'
})
export class ExamlistComponent {
 exams: ExamModel[] = [];

  constructor(private service: ExamService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe(data => this.exams = data);
  }

  onEdit(id: string) {
    this.router.navigate(['/examedit', id]);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete this exam?')) {
      this.service.delete(id).subscribe(() => this.loadData());
    }
  }
}
