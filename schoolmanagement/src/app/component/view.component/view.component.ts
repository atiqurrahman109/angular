import { Component } from '@angular/core';
import { Payment } from '../../model/payment.model';
import { PaymentService } from '../../service/payment.service';

@Component({
  selector: 'app-view.component',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
payment: any;

  ngOnInit(): void {
    this.payment = {
      id: "5170",
      fromDate: "2025-07-01",
      toDate: "2025-09-02",
      month: "3",
      fee: 450,
      count: 3,
      totalAmount: 1350,
      students: {
        id: "6bb8",
        email: "rakibislam@gmail.com",
        firstname: "Rakib",
        lastname: "Islam",
        fathername: "Rakib's Father Name",
        mothername: "Rakib's Mother Name",
        class: "six",
        section: "A",
        roll: "15",
        dob: "2000-01-01",
        address: "Mohammadpur, Dhaka",
        gender: "Male",
        phone: "01886321584",
        photo: "https://avatars.githubusercontent.com/u/196038058?v=4"
      }
    };
  }
}
