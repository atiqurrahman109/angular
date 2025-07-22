import { Component, OnInit } from '@angular/core';
import { ApplyService } from '../../service/apply.service';
import { Router } from '@angular/router';
import { Apply } from '../../model/apply.model';

@Component({
  selector: 'app-applylist.component',
  standalone: false,
  templateUrl: './applylist.component.html',
  styleUrl: './applylist.component.css'
})
export class ApplylistComponent implements OnInit{
  applyList: Apply[] = [];

  constructor(private service: ApplyService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe(data => this.applyList = data);
  }

  onDelete(id: string) {
    if (confirm('Are you sure to delete?')) {
      this.service.delete(id).subscribe(() => this.loadData());
    }
  }

  onEdit(id: string) {
    console.log(id);
    this.router.navigate(['/editapply', id]);
  }
}
