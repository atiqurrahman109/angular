import { Injectable } from '@angular/core';
import { StudentModel } from '../model/student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   private baseUrl =  environment.apiBaseUrl + '/student';

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
