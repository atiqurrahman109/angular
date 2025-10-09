import { ChangeDetectorRef, Component } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { SectionService } from '../../services/section.service';
import { SchoolclassService } from '../../services/schoolclass.service';
import { SchoolClass } from '../../model/schoolclass.model';
import { Section } from '../../model/section.model';
import { Teacher } from '../../model/teacher.model';
import { RoutineService } from '../../services/routine.service';
import { Routine } from '../../model/routine.model';

@Component({
  selector: 'app-classroutine',
  standalone: false,
  templateUrl: './classroutine.html',
  styleUrls: ['./classroutine.css']
})
export class Classroutine {
  schoolClasses: SchoolClass[] = [];
  sections: Section[] = [];
  filteredSections: Section[] = [];  // Filtered sections based on selected class
  teachers: Teacher[] = [];
  routines: Routine[] = [];
  filteredRoutines: Routine[] = [];

  selectedSchoolClass: number = 0;
  selectedSection: number = 0;
  selectedTeacher: number = 0;
  selectedDay: string = 'Sat';  // Default start day
  startTime: string = '10:00';  // Default start time
  endTime: string = '10:45';  // Default end time
  subject: string = '';

  daysOfWeek: string[] = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];  // Days of the week
  timeSlots: string[] = [
    '10:00 – 10:45', '10:45 – 11:30', '11:30 – 12:15', '12:15 – 01:00',
    '01:00 – 01:45', '01:45 – 02:30', '02:30 – 03:15', '03:15 – 04:00'
  ];  // Time slots available for classes

  successMessage: string = '';
  isSchoolClassesLoaded: boolean = false;
  isSectionsLoaded: boolean = false;
  isTeachersLoaded: boolean = false;

  constructor(
    private routineService: RoutineService,
    private schoolClassService: SchoolclassService,
    private sectionService: SectionService,
    private teacherService: TeacherService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadSchoolClasses();
    this.loadSections();
    this.loadTeachers();
  }

  // Load all school classes
  loadSchoolClasses(): void {
    this.schoolClassService.getAllClasses().subscribe(
      (classes: SchoolClass[]) => {
        this.schoolClasses = classes;
        this.isSchoolClassesLoaded = true;
        this.cdr.markForCheck();  // Trigger change detection
      },
      error => this.handleError('school classes', error)
    );
  }

  // Load all sections
  loadSections(): void {
    this.sectionService.getAllSections().subscribe(
      (sections: Section[]) => {
        console.log("Sections loaded:", sections);  // Debugging output
        this.sections = sections;
        this.filteredSections = sections;  // Initialize filteredSections with all sections
        this.isSectionsLoaded = true;
        this.cdr.markForCheck();  // Trigger change detection
      },
      error => this.handleError('sections', error)
    );
  }

  // Load all teachers
  loadTeachers(): void {
    this.teacherService.getAllTeachers().subscribe(
      (teachers: Teacher[]) => {
        this.teachers = teachers;
        this.isTeachersLoaded = true;
        this.cdr.markForCheck();  // Trigger change detection
      },
      error => this.handleError('teachers', error)
    );
  }

  // Handle errors
  handleError(dataType: string, error: any): void {
    console.error(`Error loading ${dataType}:`, error);
  }

  // Add a new routine
  onSubmit(): void {
    const newRoutine: Routine = {
      id: 0,
      dayOfWeek: this.selectedDay,
      startTime: this.startTime,
      endTime: this.endTime,
      subject: this.subject,
      schoolClass: { id: this.selectedSchoolClass } as SchoolClass,
      section: { id: this.selectedSection } as Section,
      teacher: { id: this.selectedTeacher } as Teacher
    };

    this.routineService.createRoutine(newRoutine).subscribe(
      (response) => {
        console.log('Routine added successfully:', response);
        this.successMessage = 'Routine added successfully!';
        this.resetForm();
        this.cdr.markForCheck();  // Trigger change detection to update UI
      },
      (error) => {
        console.error('Error adding routine:', error);
        this.successMessage = 'Failed to add routine. Please try again.';
        this.cdr.markForCheck();  // Trigger change detection to update UI on error
      }
    );
  }

  // Reset the form after submission
  resetForm(): void {
    this.selectedSchoolClass = 0;
    this.selectedSection = 0;
    this.selectedTeacher = 0;
    this.selectedDay = 'Sat';
    this.startTime = '10:00';
    this.endTime = '10:45';
    this.subject = '';
  }

  // Filter sections based on selected school class
  // Filter sections based on selected school class
  filterSections(): void {
    console.log("Selected school class:", this.selectedSchoolClass);  // Debugging output

    // Ensure the selected school class is a number for proper comparison
    const selectedClassId = Number(this.selectedSchoolClass);

    if (selectedClassId) {
      this.filteredSections = this.sections.filter(section => {
        console.log("Comparing:", section.schoolClass.id, "with", selectedClassId);  // Debugging output
        return section.schoolClass.id === selectedClassId;
      });
      console.log("Filtered sections:", this.filteredSections);  // Debugging output
    } else {
      this.filteredSections = [];  // Hide sections if no class is selected
    }

    // Force change detection to ensure the view is updated properly
    this.cdr.detectChanges();
  }

}
