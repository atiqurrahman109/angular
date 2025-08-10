import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.model';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = "http://localhost:3000/user";

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }


  getUserProfile(): Observable<User | null> {
    return of(this.authService.getUserProfileFromStorage());
  }


    updateUserProfile(user: User): Observable<User> {
    localStorage.setItem('userProfile', JSON.stringify(user));
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user);
  }
  
}
