import { Component } from '@angular/core';
import { SchoolClass } from '../../model/schoolclass.model';
import { Section } from '../../model/section.model';
import { User } from '../../model/user.model';
import { Student } from '../../model/student..model';
import { AuthService } from '../../services/auth.service';
import { SchoolclassService } from '../../services/schoolclass.service';
import { SectionService } from '../../services/section.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentadmission',
  standalone: false,
  templateUrl: './studentadmission.html',
  styleUrl: './studentadmission.css'
})
export class Studentadmission {

  schoolClasses: SchoolClass[] = [];
  sections: Section[] = [];

  selectedSchoolClass: number = 0;
  selectedSection: number = 0;
  photo: File | null = null;

  // User and Student data binding
  user: User = {
    id: 0,
    username: '',
    email: '',
    photo: '',
    password: '',
    role: 'STUDENT'
  };

  student: Student = {
    id: 0,
    name: '',
    email: '',
    photo: '',
    user: this.user,
    section: {} as Section,
    payments: [],
    results: [],
    schoolClass: {} as SchoolClass
  };

  constructor(
    private authService: AuthService,
    private schoolClassService: SchoolclassService,
    private sectionService: SectionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Load school classes and sections
    this.loadSchoolClasses();
    this.loadSections();
  }

  loadSchoolClasses(): void {
    this.schoolClassService.getAllClasses().subscribe(
      (classes: SchoolClass[]) => {
        this.schoolClasses = classes;
      },
      (error) => {
        console.error('Error loading school classes', error);
      }
    );
  }

  loadSections(): void {
    this.sectionService.getAllSections().subscribe(
      (sections: Section[]) => {
        this.sections = sections;
      },
      (error) => {
        console.error('Error loading sections', error);
      }
    );
  }

  onFileChange(event: any): void {
    this.photo = event.target.files[0];
  }

  onSubmit(): void {
    // Set the selected section and class for the student (only store ID in the student object)
    this.student.section = { id: this.selectedSection } as Section;
    this.student.schoolClass = { id: this.selectedSchoolClass } as SchoolClass;

    // Check if photo is selected before proceeding
    if (this.photo) {
      // Register the student and user with the uploaded photo
      this.authService.registerStudent(this.user, this.student, this.photo).subscribe(
        (response) => {
          console.log('Student registered successfully', response);
          this.router.navigate(['/students']);
          // Handle success, maybe reset form or navigate away
        },
        (error) => {
          console.error('Error registering student', error);
        }
      );
    } else {
      console.error('Please upload a photo');
    }
  }
}
