import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class } from '../model/class.Model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
private baseUrl = 'http://localhost:3000/class'; // Change based on your backend API

  constructor(private http: HttpClient) {}

  getAllClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(`${this.baseUrl}`);
  }

  addClass(classData: Class): Observable<Class> {
    return this.http.post<Class>(`${this.baseUrl}`, classData);
  }

  deleteClass(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
}
