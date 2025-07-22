import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../model/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
private baseUrl = 'http://localhost:3000/payment'; // Update this to your backend URL

  constructor(private http: HttpClient) {}

   create(payment: Payment): Observable<any> {
    return this.http.post(`${this.baseUrl}`, payment);
  }

  getAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.baseUrl);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
}
