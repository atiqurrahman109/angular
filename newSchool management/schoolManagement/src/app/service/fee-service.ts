import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentFeeModel } from '../model/fee.model';

@Injectable({
  providedIn: 'root'
})
export class FeeService {
  
   private baseUrl = 'http://localhost:3000/fees'; // JSON server endpoint

  constructor(private http: HttpClient) {}

  getAllFees(): Observable<StudentFeeModel[]> {
    return this.http.get<StudentFeeModel[]>(this.baseUrl);
  }

  addFee(fee: StudentFeeModel): Observable<StudentFeeModel> {
    return this.http.post<StudentFeeModel>(this.baseUrl, fee);
  }

  updateFee(id: number, fee: Partial<StudentFeeModel>): Observable<StudentFeeModel> {
    return this.http.patch<StudentFeeModel>(`${this.baseUrl}/${id}`, fee);
  }

  deleteFee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
