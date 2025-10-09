import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Payment } from '../model/payment.model';
import { environment } from '../environment/environment';
import { PaymentDTO } from '../model/paymentDTO';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
     private baseUrl = environment.apiBaseUrl + '/payment' ;

  constructor(private http: HttpClient) {}

  // GET: All payments
  getAllPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  // GET: Payment by ID
  getPaymentById(id: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // POST: Create new payment
  createPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.baseUrl, payment)
      .pipe(catchError(this.handleError));
  }

  // PUT: Update existing payment
  updatePayment(id: number, payment: Payment): Observable<Payment> {
    return this.http.put<Payment>(`${this.baseUrl}/${id}`, payment)
      .pipe(catchError(this.handleError));
  }

  // DELETE: Delete payment
  deletePayment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Error handler
  private handleError(error: HttpErrorResponse) {
    console.error('PaymentService error:', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }



   getPaymentsByStudentId(studentId: number): Observable<PaymentDTO[]> {
    return this.http.get<PaymentDTO[]>(`${this.baseUrl}/student/${studentId}`);
  }


  
}
