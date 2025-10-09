import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Section } from '../../model/section.model';
import { SchoolClass } from '../../model/schoolclass.model';
import { SectionService } from '../../services/section.service';
import { SchoolclassService } from '../../services/schoolclass.service';

@Component({
  selector: 'app-sections',
  standalone: false,
  templateUrl: './sections.html',
  styleUrl: './sections.css'
})
export class Sections {
  sectionForm!: FormGroup;
  sections: Section[] = [];
  schoolClasses: SchoolClass[] = [];
  editingSectionId: number | null = null;

  constructor(
    private sectionService: SectionService,
    private schoolClassService: SchoolclassService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sectionForm = this.fb.group({
      name: ['', Validators.required],
      schoolClassId: ['', Validators.required]
    });

    this.loadSchoolClasses();
    this.loadSections();
  }

  loadSchoolClasses(): void {
    this.schoolClassService.getAllClasses().subscribe({
      next: (data) => {
        this.schoolClasses = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error loading classes:', err)
    });
  }

  loadSections(): void {
    this.sectionService.getAllSections().subscribe({
      next: (data) => {
        this.sections = data;
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Error loading sections:', err)
    });
  }

  saveSection(): void {
    if (this.sectionForm.invalid) return;

    const selectedClass = this.schoolClasses.find(cls => cls.id === +this.sectionForm.value.schoolClassId);
    const sectionData: Section = {
      id: this.editingSectionId ?? 0,
      name: this.sectionForm.value.name,
      schoolClass: selectedClass!
    };

    const save$ = this.editingSectionId
      ? this.sectionService.updateSection(this.editingSectionId, sectionData)
      : this.sectionService.createSection(sectionData);

    save$.subscribe({
      next: (savedSection) => {
        if (this.editingSectionId) {
          const index = this.sections.findIndex(sec => sec.id === this.editingSectionId);
          if (index !== -1) this.sections[index] = savedSection;
        } else {
          this.sections.push(savedSection);
        }
        this.editingSectionId = null;
        this.sectionForm.reset();
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Save section failed:', err)
    });
  }

  editSection(section: Section): void {
    this.editingSectionId = section.id;
    this.sectionForm.patchValue({
      name: section.name,
      schoolClassId: section.schoolClass.id
    });
    this.cdr.markForCheck();
  }

  deleteSection(id: number): void {
    if (!confirm('Are you sure you want to delete this section?')) return;

    this.sectionService.deleteSection(id).subscribe({
      next: () => {
        this.sections = this.sections.filter(sec => sec.id !== id);
        this.cdr.markForCheck();
      },
      error: (err) => console.error('Delete failed:', err)
    });
  }
}
