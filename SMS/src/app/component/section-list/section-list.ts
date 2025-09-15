import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/student.model';
import { SectionService } from '../../service/section.service';

@Component({
  selector: 'app-section-list',
  standalone: false,
  templateUrl: './section-list.html',
  styleUrl: './section-list.css'
})
export class SectionList implements OnInit {

  sections: Section[] = [];
  loading = false;

  constructor(private sectionService: SectionService) {}

  ngOnInit(): void {
    this.loadSections();
  }

  loadSections(): void {
    this.loading = true;
    this.sectionService.getAll().subscribe({
      next: (data) => {
        this.sections = data;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  deleteSection(id?: number): void {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this section?')) return;

    this.sectionService.delete(id).subscribe(() => this.loadSections());
  }
}
