import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  
  private baseUrl = 'http://localhost:8085/api/courses';

  constructor(private http: HttpClient) { }



  getCourseList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}




// -----------------------------------------------------------------------------------------

// export class CustomerService {

//   private baseUrl = 'http://localhost:8081/api/customers';

//   constructor(private http: HttpClient) { }

//   getCustomer(id: number): Observable<Object> {
//     return this.http.get(`${this.baseUrl}/${id}`);
//   }

//   createCustomer(customer: Object): Observable<Object> {
//     return this.http.post(`${this.baseUrl}` + `/create`, customer);
//   }

//   updateCustomer(id: number, value: any): Observable<Object> {
//     return this.http.put(`${this.baseUrl}/${id}`, value);
//   }

//   deleteCustomer(id: number): Observable<any> {
//     return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
//   }

//   getCustomersList(): Observable<any> {
//     return this.http.get(`${this.baseUrl}`);
//   }

//   getCustomersByAge(age: number): Observable<any> {
//     return this.http.get(`${this.baseUrl}/age/${age}`);
//   }

//   deleteAll(): Observable<any> {
//     return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
//   }
// }