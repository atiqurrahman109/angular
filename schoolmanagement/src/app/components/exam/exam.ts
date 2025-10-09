import { Component, ChangeDetectorRef } from '@angular/core';
import { ExamModel } from '../../model/exam.model';
import { StudentService } from '../../services/student.service';
import { ExamService } from '../../services/exam.service';
import { Student } from '../../model/student..model';

@Component({
  selector: 'app-exam',
  standalone: false,
  templateUrl: './exam.html',
  styleUrls: ['./exam.css']
})
export class Exam {
  students: Student[] = [];
  exams: ExamModel[] = [];
  filteredExams: ExamModel[] = []; // New array to store filtered exams
  exam: ExamModel = {
    id: 0,
    examName: '',
    subject: '',
    mark: 0,
    student: {} as Student // Initialize student as empty object
  };
  studentIdFilter: string = ''; // Store the entered student ID for filtering
  examNameFilter: string = ''; // New filter for exam name

  examNames: string[] = ['Midterm', 'Final']; // Example of possible exam names

  constructor(
    private studentService: StudentService,
    private examService: ExamService,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      (data: Student[]) => {
        this.students = data;
      },
      (error) => {
        console.error('Error loading students', error);
      }
    );

    this.examService.getExams().subscribe(
      (data: ExamModel[]) => {
        this.exams = data;
        this.filteredExams = data; // Initially, show all exams
      },
      (error) => {
        console.error('Error fetching exams', error);
      }
    );
  }

  // Method to calculate grade based on Bangladeshi grading system
  calculateGrade(marks: number): string {
    if (marks >= 80 && marks <= 100) return 'A+';
    if (marks >= 70 && marks < 80) return 'A';
    if (marks >= 60 && marks < 70) return 'A-';
    if (marks >= 50 && marks < 60) return 'B';
    if (marks >= 40 && marks < 50) return 'C';
    if (marks >= 33 && marks < 40) return 'D';
    return 'F'; // Fail if below 33
  }

  // Save exam form
  onSubmit(): void {
    this.examService.createExam(this.exam).subscribe(
      (data) => {
        this.exams.push(data); // Add saved exam to the list
        this.clearForm(); // Clear form after submission
        this.cdr.markForCheck(); // Manually trigger change detection to update the view
        this.filterExams(); // Reapply filter after saving
      },
      (error) => {
        console.error('Error saving exam', error);
      }
    );
  }

  // Clear form fields
  clearForm(): void {
    this.exam = {
      id: 0,
      examName: '',
      subject: '',
      mark: 0,
      student: {} as Student // Reset student to empty object
    };
  }

  // Filter exams by student ID and exam name
  filterExams(): void {
    this.filteredExams = this.exams.filter(exam => {
      return (
        (this.studentIdFilter ? exam.student.id.toString().includes(this.studentIdFilter) : true) &&
        (this.examNameFilter ? exam.examName === this.examNameFilter : true)
      );
    });
  }

  // Method to print the filtered exam list
  printResults(): void {
    const printWindow: Window | null = window.open('', '', 'width=800,height=600');

    if (printWindow) {
      let content = `
      <html>
        <head>
          <title>Print Exam Results</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
            .container { width: 90%; margin: 20px auto; }
            h1 { text-align: center; color: #333; }
            .student-info { margin-bottom: 20px; }
            .student-info p { margin: 5px 0; font-size: 14px; color: #555; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { padding: 10px; border: 1px solid #ddd; text-align: left; font-size: 14px; }
            th { background-color: #f2f2f2; font-weight: bold; }
            td { font-size: 13px; }
            .total-summary { margin-top: 20px; text-align: right; font-size: 16px; font-weight: bold; }
            .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
      `;

      // Check if there are any filtered exams
      if (this.filteredExams.length > 0) {
        const exam = this.filteredExams[0]; // Get the first exam from the filtered list
        let totalMarks = 0;
        let totalSubjects = 0;

        content += `
          <div class="student-info">
            <h1>Exam Results</h1>
            <p><strong>Student:</strong> ${exam.student.name}</p>
            <p><strong>Class:</strong> ${exam.student.schoolClass.name}</p>
            <p><strong>Exam Name:</strong> ${exam.examName}</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
        `;

        // Loop through filtered exams and create table rows
        this.filteredExams.forEach(exam => {
          totalMarks += exam.mark;
          totalSubjects += 1;

          content += `
            <tr>
              <td>${exam.subject}</td>
              <td>${exam.mark} Marks</td>
              <td>${this.calculateGrade(exam.mark)}</td>
            </tr>
          `;
        });

        const averageGrade = this.calculateGrade(totalMarks / totalSubjects);

        content += `
            </tbody>
          </table>
          <div class="total-summary">
            <p>Total Marks: ${totalMarks}</p>
            <p>Average Grade: ${averageGrade}</p>
          </div>
        `;
      } else {
        content += `<p>No exam results to print.</p>`;
      }

      content += `
          <div class="footer">
            <p>Exam Results generated by the System. For more details, contact administration.</p>
          </div>
        </div>
      </body>
      </html>
      `;

      // Write the content and trigger the print dialog
      printWindow.document.write(content);
      printWindow.document.close();
      printWindow.print();
    } else {
      console.error('Failed to open print window.');
    }
  }
}
