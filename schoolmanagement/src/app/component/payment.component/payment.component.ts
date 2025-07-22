import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Payment } from '../../model/payment.model';
import { PaymentService } from '../../service/payment.service';
import { Student } from '../../model/student.model';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-payment.component',
  standalone: false,
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
form!: FormGroup;
  students: Student[] = [];

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      students: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      month: ['', Validators.required],
      fee: [0, Validators.required],
      count: [0, Validators.required],
      totalAmount: [{ value: 0, disabled: true }]
    });

    this.loadStudents();

    this.form.get('fee')?.valueChanges.subscribe(() => this.calculateTotal());
    this.form.get('count')?.valueChanges.subscribe(() => this.calculateTotal());
  }

  calculateTotal(): void {
    const fee = this.form.get('fee')?.value || 0;
    const count = this.form.get('count')?.value || 0;
    const total = fee * count;
    this.form.get('totalAmount')?.setValue(total);
  }

  loadStudents(): void {
    this.studentService.getAllStudent().subscribe({
      next: data => this.students = data,
      error: err => console.error('Error loading students', err)
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const payment: Payment = {
        ...this.form.getRawValue(), // includes totalAmount
        totalAmount: this.form.get('totalAmount')?.value
      };

      this.paymentService.create(payment).subscribe(() => {
        alert('Payment saved successfully!');
        this.form.reset();
      });
    }
  }
}
