import { Component } from '@angular/core';
import { StudentFee } from '../../model/studentfee.model';
import { StudentfeeService } from '../../service/studentfee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentfeelist.component',
  standalone: false,
  templateUrl: './studentfeelist.component.html',
  styleUrl: './studentfeelist.component.css'
})
export class StudentfeelistComponent {
fees: StudentFee[] = [];

  constructor(private service: StudentfeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe(data => this.fees = data);
  }

  onEdit(id?: string) {
    if (id) this.router.navigate(['/studentfee-edit', id]);
  }

  onDelete(id?: string) {
    if (id && confirm('Delete this record?')) {
      this.service.delete(id).subscribe(() => this.loadData());
    }
  }
}
