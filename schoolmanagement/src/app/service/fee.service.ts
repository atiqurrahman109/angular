import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentFee } from '../model/fee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeeService {

baseUrl: string="http://localhost:3000/studentFee";
  constructor(private http:HttpClient) { }

  saveFee(Date:StudentFee): Observable<StudentFee>{
    return this.http.post<StudentFee>(this.baseUrl,Date);
  }

  getAllFee():Observable<StudentFee[]>{
    return this.http.get<StudentFee[]>(this.baseUrl);

  }

getFeeByStudentId(id:number):Observable<StudentFee[]>{

  return this.http.get<StudentFee[]>(`${this.baseUrl}/feest/${id}`);
}

createFeeReceipt():Observable<Blob>{

  return this.http.get(`${this.baseUrl}/generateReceipt`,{responseType:'blob'});
}

deleteFee(id:number):Observable<void>{

  return this.http.delete<void>(`${this.baseUrl}/${id}`);
}

updateFee(id:number,data:StudentFee):Observable<StudentFee>{

  return this.http.put<StudentFee>(`${this.baseUrl}/${id}`,data);
}

}
