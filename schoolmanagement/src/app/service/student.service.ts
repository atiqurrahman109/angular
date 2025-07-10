import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})


export class StudentService {

  baseUrl: string="http://localhost:3000/students";

  constructor(
    private http: HttpClient
  ) { }


getAllStudent(): Observable<any>{

return this.http.get(this.baseUrl);

}

saveStudent(students:Student):Observable<any>{

return this.http.post(this.baseUrl,students);


}

deleteStudent(id:string):Observable<any>{

return this.http.delete(this.baseUrl+"/"+id);


}

getStudentByid(id:string):Observable<any>{

return this.http.get(this.baseUrl+"/"+id);

}

updateStudent(id:string,student:Student):Observable<any>{


  return this.http.put(this.baseUrl+"/"+id,student);
}


}
