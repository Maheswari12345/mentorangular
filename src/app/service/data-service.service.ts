import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  


private _email = new BehaviorSubject<String>(this._email);
_email$ = this._email.asObservable();


private _mentorMail = new BehaviorSubject<String>(this._mentorMail);
_mentorMail$ = this._mentorMail.asObservable();

private _trainingId = new BehaviorSubject<String>(this._trainingId);
_trainingId$ = this._trainingId.asObservable();

  constructor() { }

  setEmail(email: String)
  {
    
    this._email.next(email);
  }

  setMentorEmail(mentorEmail: String) {
   
    this._mentorMail.next(mentorEmail);
   

  }
  setTrainingId(trainingId: number) {
    this._trainingId.next(trainingId);
  }

}
