import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentFeeModel } from '../../model/fee.model';
import { StudentModel } from '../../model/student.model';
import { FeeService } from '../../service/fee-service';
import { StudentService } from '../../service/student-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-fee-component',
  standalone: false,
  templateUrl: './add-fee-component.html',
  styleUrl: './add-fee-component.css'
})
export class AddFeeComponent implements OnInit{
 feeForm!: FormGroup;
  students: StudentModel[] = [];
  fees: StudentFeeModel[] = [];
  monthsList: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  totalAmount = 0;

  constructor(
    private fb: FormBuilder,
    private feeService: FeeService,
    private studentService: StudentService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadStudents();
    this.loadFees();

    this.feeForm = this.fb.group({
      studentId: ['', Validators.required],
      feeCategory: ['', Validators.required],
      months: [[], Validators.required],
      feeAmount: [0, [Validators.required, Validators.min(1)]],
      paymentDate: ['', Validators.required]
    });
  }

  loadStudents(): void {
    this.studentService.getAllStudent().subscribe(data => {
      this.students = data;
      this.cdr.detectChanges();
    });
  }

  loadFees(): void {
    this.feeService.getAllFees().subscribe(data => {
      this.fees = data;
    });
  }

  updateTotal(): void {
    const months = this.feeForm.value.months || [];
    const amount = this.feeForm.value.feeAmount || 0;
    this.totalAmount = months.length * amount;
  }

  addFee(): void {
    if (this.feeForm.invalid) return;

    const { studentId, feeCategory, months, feeAmount, paymentDate } = this.feeForm.value;
    const student = this.students.find(s => s.id === +studentId);
    if (!student) return;

    months.forEach((month: string) => {
      const newFee: StudentFeeModel = {
        
        feeCategory,
        feeMonth: month,
        feeAmount,
        paymentDate,
        student
      };

      this.feeService.addFee(newFee).subscribe({
        next: savedFee => {
          this.fees.push(savedFee);
          this.cdr.detectChanges();
        },
        error: err => console.error('Error saving fee:', err)
      });
    });

    this.totalAmount = 0;
    this.feeForm.reset();
  }



  deleteFee(fee: StudentFeeModel): void {
    if (!fee.id) return;

    this.feeService.deleteFee(fee.id).subscribe({
      next: () => {
        this.fees = this.fees.filter(f => f.id !== fee.id);
        this.cdr.detectChanges();
      },
      error: err => console.error('Delete failed:', err)
    });
  }
}


