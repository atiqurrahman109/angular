import { Component, OnInit } from '@angular/core';
import { Result } from '../../model/student.model';
import { ResultService } from '../../service/result.service';

@Component({
  selector: 'app-result-component',
  standalone: false,
  templateUrl: './result-component.html',
  styleUrl: './result-component.css'
})
export class ResultComponent implements OnInit {

   results: Result[] = [];

  newResult: Result = {
    marks: 0,
    grade: '',
    student: { id: 0 },
    exam: { id: 0 }
  };

  constructor(private resultService: ResultService) {}

  ngOnInit(): void {
    this.loadResults();
  }

  loadResults(): void {
    this.resultService.getAll().subscribe(data => {
      this.results = data;
    });
  }

  addResult(): void {
    this.resultService.save(this.newResult).subscribe(() => {
      this.newResult = {
        marks: 0,
        grade: '',
        student: { id: 0 },
        exam: { id: 0 }
      };
      this.loadResults();
    });
  }

  deleteResult(id: number): void {
    this.resultService.delete(id).subscribe(() => {
      this.loadResults();
    });
  }
}
