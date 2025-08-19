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
  students: StudentModel[] = [];   // <-- Must be array
  monthsList: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  fees: StudentFeeModel[] = [];
  totalAmount = 0;

  constructor(
    private fb: FormBuilder,
    private feeService: FeeService,
    private studentService: StudentService,  // <-- Inject StudentService
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadStudents();  // load students on init

    this.feeForm = this.fb.group({
      studentId: ['', Validators.required],
      feeCategory: ['', Validators.required],
      months: [[], Validators.required],
      feeAmount: [0, [Validators.required, Validators.min(1)]]
    });
  }

  loadStudents() {
    this.studentService.getAllStudent().subscribe(data => {
      this.students = data;  // assign array of students
      this.cdr.detectChanges();
    });
  }

  updateTotal() {
    const months = this.feeForm.value.months || [];
    const amount = this.feeForm.value.feeAmount || 0;
    this.totalAmount = months.length * amount;
  }

  addFee() {
    const { studentId, feeCategory, months, feeAmount } = this.feeForm.value;
    const student = this.students.find(s => s.id === +studentId);
    if (!student) return;

    months.forEach((month: string) => {
      const newFee: StudentFeeModel = {
        id: this.fees.length + 1,
       
        feeCategory: feeCategory,
        feeMonth: month,
        feeAmount: feeAmount,
        student: student
      };
      this.fees.push(newFee);
    });

    this.feeForm.reset();
    this.totalAmount = 0;
  }

  markAsPaid(fee: StudentFeeModel) {
    fee.paymentDate = new Date().toISOString().split('T')[0];
  }
}

...AddFeeComponent.apply.apply.apply.apply.
