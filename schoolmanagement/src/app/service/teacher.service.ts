import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../model/teacher.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseUrl:string="http://localhost:3000/teacher";

  constructor(private http:HttpClient) { }

  getAllTeacher(): Observable<any>{
  
  return this.http.get(this.baseUrl);
  
  }
  
  saveTeacher(teachers:Teacher):Observable<any>{
  
  return this.http.post(this.baseUrl,teachers);
  
  
  }
  
  deleteTeacher(id:string):Observable<any>{
  
  return this.http.delete(this.baseUrl+"/"+id);
  
  
  }
  
  getTeacherByid(id:string):Observable<any>{
  
  return this.http.get(this.baseUrl+"/"+id);
  
  }
  
  updateTeacher(id:string, teacher:Teacher):Observable<any>{
  
  
    return this.http.put(this.baseUrl+"/"+id,teacher);
  }
}
