import { ChangeDetectorRef, Component } from '@angular/core';
import { Routine } from '../../model/routine.model';
import { RoutineService } from '../../services/routine.service';
import { SchoolclassService } from '../../services/schoolclass.service';
import { SchoolClass } from '../../model/schoolclass.model';
import { SectionService } from '../../services/section.service';
import { Section } from '../../model/section.model';

@Component({
  selector: 'app-viewclassroutine',
  standalone: false,
  templateUrl: './viewclassroutine.html',
  styleUrls: ['./viewclassroutine.css']
})
export class Viewclassroutine {
  routines: Routine[] = [];
  filteredRoutines: Routine[] = [];

  selectedSchoolClass: number = 0;  // Default: No class selected
  selectedSection: number = 0;  // Default: No section selected
  selectedDay: string = 'Sat';  // Default start day
  startTime: string = '10:00';  // Default start time
  endTime: string = '10:45';  // Default end time
  subject: string = '';

  schoolClasses: { id: number, name: string }[] = [];
  sections: Section[] = [];

  daysOfWeek: string[] = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];  // Days of the week
  timeSlots: string[] = [
    '10:00 – 10:45', '10:45 – 11:30', '11:30 – 12:15', '12:15 – 13:00',
    '13:00 – 13:45', '13:45 – 14:30', '14:30 – 15:15', '15:15 – 16:00'
  ];  // Time slots available for classes

  constructor(
    private routineService: RoutineService,
    private schoolclassService: SchoolclassService,
    private sectionService: SectionService,
    private cdr: ChangeDetectorRef  // Inject the ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadSchoolClasses();  // Load school classes on init
    this.loadSections();  // Load sections on init
    this.loadRoutines();  // Load all routines initially
  }

  loadSchoolClasses(): void {
    this.schoolclassService.getAllClasses().subscribe(
      (schoolClasses: SchoolClass[]) => {
        this.schoolClasses = schoolClasses.map(cls => ({ id: cls.id, name: cls.name }));
        this.cdr.markForCheck();
      },
      error => this.handleError('school classes', error)
    );
  }

  loadSections(): void {
    this.sectionService.getAllSections().subscribe(
      (sections: Section[]) => {
        this.sections = sections;
        this.cdr.markForCheck();
      },
      error => this.handleError('sections', error)
    );
  }

  loadRoutines(): void {
    this.routineService.getAllRoutines().subscribe(
      (routines: Routine[]) => {
        this.routines = routines;
        this.filterRoutines();  // Apply filtering when routines are loaded
      },
      error => this.handleError('routines', error)
    );
  }

  handleError(dataType: string, error: any): void {
    console.error(`Error loading ${dataType}:`, error);
  }

  // When the school class or section changes, we filter the routines
  onFilterChange(): void {
    this.filterRoutines();
  }

  filterRoutines(): void {
    const selectedClassId = +this.selectedSchoolClass;
    const selectedSectionId = +this.selectedSection;

    if (selectedClassId === 0) {
      this.filteredRoutines = [];  // If no class is selected, clear routines
    } else {
      this.filteredRoutines = this.routines.filter(routine => {
        const matchesClass = selectedClassId === 0 || routine.schoolClass.id === selectedClassId;
        const matchesSection = selectedSectionId === 0 || routine.section.id === selectedSectionId;
        return matchesClass && matchesSection;
      });
    }
  }

  getRoutineByTimeAndDay(startTime: string, day: string): Routine | null {
    return this.filteredRoutines.find(
      routine => routine.startTime === startTime && routine.dayOfWeek === day
    ) || null;
  }

  getRoutineCell(startTime: string, day: string): string {
    const routine = this.getRoutineByTimeAndDay(startTime, day);
    return routine ? routine.subject : 'No routine';
  }

  shouldMergeCell(startTime: string, day: string): boolean {
    return this.getRoutineByTimeAndDay(startTime, day) !== null;
  }
}
