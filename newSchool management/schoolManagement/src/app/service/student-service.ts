import { Injectable } from '@angular/core';
import { StudentModel } from '../model/student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   baseUrl: string = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

   addStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(this.baseUrl, student);
  }

   getAllStudent(): Observable<any> {

    return this.http.get(this.baseUrl);

  }
   deleteStudent(id: string): Observable<any> {

    return this.http.delete(this.baseUrl + "/" + id);

  }

  getStudentById(id: string): Observable<any> {

    return this.http.get(this.baseUrl+'/'+id);

  }

  updateStudent(id: string, student: StudentModel): Observable<any>{

    return this.http.put(this.baseUrl+'/'+id, student);

  }
  
}
