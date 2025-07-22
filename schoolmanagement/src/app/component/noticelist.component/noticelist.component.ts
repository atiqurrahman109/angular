import { Component } from '@angular/core';
import { NoticeService } from '../../service/notice.service';
import { Router } from '@angular/router';
import { Notice } from '../../model/notice.model';

@Component({
  selector: 'app-noticelist.component',
  standalone: false,
  templateUrl: './noticelist.component.html',
  styleUrl: './noticelist.component.css'
})
export class NoticelistComponent {
noticeList: Notice[] = [];

  constructor(private service: NoticeService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe(data => this.noticeList = data);
  }

  onEdit(id: string) {
    this.router.navigate(['/notice-edit', id]);
  }

  onDelete(id: string) {
    if (confirm('Delete this notice?')) {
      this.service.delete(id).subscribe(() => this.loadData());
    }
  }
}
