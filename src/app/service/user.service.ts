import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
 
 
  
  
  getAllUsers(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/getAllUsers`);
  }


  private baseUrl = 'http://localhost:8085/api/user';
  constructor(private http: HttpClient) { }

  
  getUserByUserMail(userEmail: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/mentorMail/mainTable/${userEmail}`);
  }
  

  getCurrentTrainings(): Observable<any> {

    return this.http.get<any>(`${this.baseUrl}/getCurrentTrainings`);
    
  }
 
  registerUser(user: Object): Observable<Object> {
     
    return this.http.post(`${this.baseUrl}`+`/register`,user);

  }

  getUserDetailsByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/email/${email}`);
  }

  getTrainingDetailsbyId(trainingId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/getTrainingById/${trainingId}`)
  }
  userPayment(userPay: Object) {
    
    return this.http.post(`${this.baseUrl}`+`/makePay`,userPay);

  }
  
 

}
