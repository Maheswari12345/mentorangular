import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
 
 
  private baseUrl = 'http://localhost:8085/api/mentor';
  constructor(private http: HttpClient) { }


  registerMentor(mentor: Object): Observable<Object> {
  

   return this.http.post(`${this.baseUrl}`+`/register`,mentor);

  }

  getMentorByMailId(mentorMail: String): Observable<any> {
    
   return this.http.get(`${this.baseUrl}/mentorMail/${mentorMail}`)

  }
  getMentorByMentorMail(mentorMail: String): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/mentorMail/mainTable/${mentorMail}`)
 
   }

   getAllMentors(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getAllMentors`);
  }
 

 
}
