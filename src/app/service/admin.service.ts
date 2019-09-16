import { Injectable } from '@angular/core';
import { Admin } from '../model/Admin';
import { Observable, ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


 



 
  public baseUrl = 'http://localhost:8085/api/admin';
  constructor(private http: HttpClient) { }

  registerAdmin(admin: Object): Observable<Object> {


    console.log("Entire Data is sended");
    return this.http.post(`${this.baseUrl}`+`/register`,admin);
  }
 
  getAdminDetailsByEmail(email: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/email/${email}`);
    
  }
 
  updaeMentorPayment(id: number, value: any):Observable<Object> {
    
    return this.http.put(`${this.baseUrl}/${id}`, value);

  }

  deleteMentorByEmail(email: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${email}`, { responseType: 'text' });
  }

  

  
}
