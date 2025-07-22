import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Payment } from '../../model/payment.model';
import { PaymentService } from '../../service/payment.service';

@Component({
  selector: 'app-payment.component',
  standalone: false,
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
paymentForm!: FormGroup;
  paymentList: Payment[] = [];

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      pid: [''],
      pclass: [''],
      pRoll: [''],
      pDate: [''],
      pMonth: ['']
    });
    this.loadPayments();
  }

  loadPayments() {
    this.paymentService.getAllPayments().subscribe(data => {
      this.paymentList = data;
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const newPayment: Payment = this.paymentForm.value;
      this.paymentService.addPayment(newPayment).subscribe(() => {
        this.paymentForm.reset();
        this.loadPayments();
      });
    }
  }

  deletePayment(pid: string) {
    this.paymentService.deletePayment(pid).subscribe(() => {
      this.loadPayments();
    });
  }
}
