import { ChangeDetectorRef, Component } from '@angular/core';
import { Routine } from '../../model/routine.model';
import { RoutineService } from '../../services/routine.service';
import { TeacherService } from '../../services/teacher.service';
import { Teacher } from '../../model/teacher.model';
import { SchoolClass } from '../../model/schoolclass.model';
import { SchoolclassService } from '../../services/schoolclass.service';
import { SectionService } from '../../services/section.service';
import { Section } from '../../model/section.model';

@Component({
  selector: 'app-teacherschedule',
  standalone: false,
  templateUrl: './teacherschedule.html',
  styleUrls: ['./teacherschedule.css']
})
export class Teacherschedule {
  routines: Routine[] = [];
  filteredRoutines: Routine[] = [];
  schoolClasses: { id: number, name: string }[] = [];
  teachers: { id: number, name: string }[] = [];
  sections: Section[] = [];  // Array for sections
  daysOfWeek: string[] = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  timeSlots: string[] = [
    '10:00 – 10:45', '10:45 – 11:30', '11:30 – 12:15', '12:15 – 13:00',
    '13:00 – 13:45', '13:45 – 14:30', '14:30 – 15:15', '15:15 – 16:00'
  ];

  selectedSchoolClass: number = 0;  // Default: No class selected
  selectedTeacher: number = 0;  // Default: No teacher selected
  selectedSection: number = 0;  // Default: No section selected
  selectedDay: string = 'Sat';
  startTime: string = '10:00';
  endTime: string = '10:45';
  subject: string = '';

  successMessage: string = '';

  constructor(
    private routineService: RoutineService,
    private schoolclassService: SchoolclassService,
    private sectionService: SectionService,
    private teacherService: TeacherService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadSchoolClasses();
    this.loadTeachers();
    this.loadSections();  // Load sections on init
    this.loadRoutines();
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

  loadTeachers(): void {
    this.teacherService.getAllTeachers().subscribe(
      (teachers: Teacher[]) => {
        this.teachers = teachers.map(teacher => ({ id: teacher.id, name: teacher.name }));
        this.cdr.markForCheck();
      },
      error => this.handleError('teachers', error)
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
        this.filterRoutines();
      },
      error => this.handleError('routines', error)
    );
  }

  handleError(dataType: string, error: any): void {
    console.error(`Error loading ${dataType}:`, error);
  }

  onFilterChange(): void {
    this.filterRoutines();
  }

  filterRoutines(): void {
    const selectedClassId = +this.selectedSchoolClass;
    const selectedTeacherId = +this.selectedTeacher;
    const selectedSectionId = +this.selectedSection;

    this.filteredRoutines = this.routines.filter(routine => {
      const matchesClass = selectedClassId === 0 || routine.schoolClass.id === selectedClassId;
      const matchesTeacher = selectedTeacherId === 0 || routine.teacher.id === selectedTeacherId;
      const matchesSection = selectedSectionId === 0 || routine.section.id === selectedSectionId;

      return matchesClass && matchesTeacher && matchesSection;
    });
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
