import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../environment/environment';
import { Marks, MarksDTO } from '../model/marks.model';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  // প্রয়োজনমতো environment ব্যবহার করতে পারেন
  private baseUrl =  environment.apiBaseUrl + '/marks'

  constructor(private http: HttpClient) {}

  // POST ""  -> save or update
  saveOrUpdate(payload: Marks): Observable<Marks> {
    return this.http.post<Marks>(this.baseUrl, payload).pipe(
      tap(() => console.log('Marks saved/updated'))
    );
  }

  // GET "" -> List<MarksDTO>
  getAll(): Observable<MarksDTO[]> {
    return this.http.get<MarksDTO[]>(this.baseUrl);
  }

  // DELETE "/{id}"
  delete(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
