import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fee } from '../model/fee.model';

@Injectable({
  providedIn: 'root'
})
export class FeeserviceService {
  
   private apiUrl = 'http://localhost:8080/api/fees';

  constructor(private http: HttpClient) {}

  getAllFees(): Observable<Fee[]> {
    return this.http.get<Fee[]>(this.apiUrl);
  }

  addFee(fee: Fee): Observable<Fee> {
    return this.http.post<Fee>(this.apiUrl, fee);
  }

  deleteFee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getUnpaidStudents(month: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/unpaid/${month}`);
  }
}
