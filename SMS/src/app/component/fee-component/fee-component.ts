import { Component, OnInit } from '@angular/core';
import { Fee } from '../../model/fee.model';
import { FeeserviceService } from '../../service/feeservice.service';

@Component({
  selector: 'app-fee-component',
  standalone: false,
  templateUrl: './fee-component.html',
  styleUrl: './fee-component.css'
})
export class FeeComponent implements OnInit{

   fees: Fee[] = [];
  unpaidStudents: any[] = [];

  newFee: Fee = {
    category: '',
    amount: 0,
    paymentDate: '',
    studentId: 0
  };

  unpaidMonth: string = '';

  constructor(private feeService: FeeserviceService) {}

  ngOnInit(): void {
    this.loadFees();
  }

  loadFees(): void {
    this.feeService.getAllFees().subscribe(data => {
      this.fees = data;
    });
  }

  addFee(): void {
    this.feeService.addFee(this.newFee).subscribe(() => {
      this.newFee = { category: '', amount: 0, paymentDate: '', studentId: 0 };
      this.loadFees();
    });
  }

  deleteFee(id: number): void {
    this.feeService.deleteFee(id).subscribe(() => {
      this.loadFees();
    });
  }

  loadUnpaidStudents(): void {
    if (this.unpaidMonth.trim()) {
      this.feeService.getUnpaidStudents(this.unpaidMonth).subscribe(data => {
        this.unpaidStudents = data;
      });
    }
  }
}
