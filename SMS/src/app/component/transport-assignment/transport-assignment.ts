import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { Bus, TransportAssignment } from '../../model/transport-assignment.model';
import { TransportAssignmentService } from '../../service/transport-assignment.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transport-assignment',
  standalone: false,
  templateUrl: './transport-assignment.html',
  styleUrl: './transport-assignment.css'
})
export class TransportAssignmentComponent implements OnInit{
 assignments: TransportAssignment[] = [];
  students: Student[] = [];
  buses: Bus[] = [];

  newAssignment: TransportAssignment = {
    student: { id: 0, firstname: '', lastname: '' },
    bus: { id: 0, vehicleNumber: '', driverName: '', route: '' },
    pickupPoint: '',
    dropPoint: ''
  };

  editMode = false;
  editId: number | null = null;

  constructor(
    private assignmentService: TransportAssignmentService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadAssignments();
    this.loadStudents();
    this.loadBuses();
  }

  loadAssignments(): void {
    this.assignmentService.getAll().subscribe(data => {
      this.assignments = data;
    });
  }

  loadStudents(): void {
    this.http.get<Student[]>('http://localhost:8080/api/student').subscribe(data => {
      this.students = data;
    });
  }

  loadBuses(): void {
    this.http.get<Bus[]>('http://localhost:8080/api/bus').subscribe(data => {
      this.buses = data;
    });
  }

  saveAssignment(): void {
    if (this.editMode && this.editId !== null) {
      this.assignmentService.update(this.editId, this.newAssignment).subscribe(() => {
        this.resetForm();
        this.loadAssignments();
      });
    } else {
      this.assignmentService.add(this.newAssignment).subscribe(() => {
        this.resetForm();
        this.loadAssignments();
      });
    }
  }

  editAssignment(a: TransportAssignment): void {
    this.newAssignment = JSON.parse(JSON.stringify(a)); // deep copy
    this.editMode = true;
    this.editId = a.id!;
  }

  deleteAssignment(id: number): void {
    if (confirm('Are you sure you want to delete this assignment?')) {
      this.assignmentService.delete(id).subscribe(() => {
        this.loadAssignments();
      });
    }
  }

  resetForm(): void {
    this.newAssignment = {
      student: { id: 0, firstname: '', lastname: '' },
      bus: { id: 0, vehicleNumber: '', driverName: '', route: '' },
      pickupPoint: '',
      dropPoint: ''
    };
    this.editMode = false;
    this.editId = null;
  }
}
