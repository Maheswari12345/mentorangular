import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  
  private baseUrl = 'http://localhost:8085/api/credentials';

  

   constructor(private http: HttpClient) { }
   //Send data from login form in Home page to rest Controller
  
  
  // sendLoginData(login: Login): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}` + `/login`, login);
  // }
  getCredentials(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
  insertCredentials(credential: Login):Observable<object> {
    return this.http.post(`${this.baseUrl}` + `/credentials`, credential);
  }

}
