import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultAddModel } from '../model/result.model';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
baseUrl:string ='http://localhost:3000/result';
  constructor(private http: HttpClient) { }


  // Save result
  saveResult(data: ResultAddModel): Observable<ResultAddModel> {
    return this.http.post<ResultAddModel>(this.baseUrl, data);
  }

  // Get all results
  getAllResult(): Observable<ResultAddModel[]> {
    return this.http.get<ResultAddModel[]>(this.baseUrl);
  }

  // Get result by ID
  getAllById(id: number): Observable<ResultAddModel> {
    return this.http.get<ResultAddModel>(`${this.baseUrl}/${id}`);
  }

  // Update result
  updateResult(id: number, data: ResultAddModel): Observable<ResultAddModel> {
    return this.http.put<ResultAddModel>(`${this.baseUrl}/${id}`, data);
  }

  // Delete result
  deleteResult(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
