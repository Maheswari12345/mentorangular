import { Component, OnInit } from '@angular/core';
import { MentorService } from '../service/mentor.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Login } from '../model/login';
import { Mentor } from '../model/Mentor';

@Component({
  selector: 'app-mentor-registration',
  templateUrl: './mentor-registration.component.html',
  styleUrls: ['./mentor-registration.component.css']
})
export class MentorRegistrationComponent implements OnInit {


  name: String;
  email: string;
  password: string;
  address: String;
  slotTime: String;
  technology: String;
  experience: String;
  selfRating: String;
  contactNumber: String;
  regDateTime: String;

  role: string;
  login: Login[];
  invalidEmail: Boolean = false;








  constructor(private mentorService: MentorService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {

    this.loginService.getCredentials().subscribe(response => this.login = response, error => alert(`${error.message}\nWaiting for response from server`));

  }

  registerMentor() {

    // for (let i = 0; i < this.login.length; i++) {
    //   if (this.login[i].email !== this.email) {


    let mentor = new Mentor(this.name, this.email, this.password, this.address, this.slotTime, this.technology, this.experience, this.selfRating, this.contactNumber, this.regDateTime, "mentor", "active");
    this.mentorService.registerMentor(mentor).subscribe(response => console.log(response));
    
    // let credential = new Login(this.email, this.password, "mentor");
    // this.loginService.insertCredentials(credential).subscribe(data => console.log(data));

    this.router.navigate(['SucessFullRegistration']);
    // }
    // else {
    //   this.invalidEmail = true;
    // }












  }

  onSubmit() {

    let date: Date = new Date();
    this.regDateTime = date.toDateString();
    console.log("Date = " + this.regDateTime);

    this.registerMentor();
  }

}
