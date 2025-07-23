import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AttendenceService } from '../../service/attendence.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-attendence.component',
  standalone: false,
  templateUrl: './view-attendence.component.html',
  styleUrl: './view-attendence.component.css'
})
export class ViewAttendenceComponent implements OnInit {
  attendences: any[] = [];




  constructor(
    private attenService: AttendenceService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadAtten();
  }

  loadAtten(): void {

    this.attenService.getAllAtten().subscribe({
      next: (result) => {
        this.attendences = result;

        console.log('attendence:', this.attendences);
        this.cdr.detectChanges();



      },
      error: (err) => {
        console.error('Error loading data:', err);
        alert('Failed to load POs data');
      }
    });
  }


}
