import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 
  email: String;
  password: String;
  invalidLogin: boolean = false;
  login: Login[];
  
  constructor(private router: Router, private loginService: LoginService,private dataService: DataServiceService) { }

  ngOnInit() {
   
    this.loginService.getCredentials().subscribe(response => this.login = response);

  }

  checkLogin() {
    for (let i = 0; i < this.login.length; i++) {
      if (this.login[i].email === this.email && this.login[i].password === this.password) {
          if(this.login[i].role==="admin")
          {
        this.router.navigate(['Admin']);
          }
          if(this.login[i].role === "mentor")
          {
            this.router.navigate(['Mentor']);
          }
          if(this.login[i].role === "user")
          {
            this.router.navigate(['User']);
          }
          this.invalidLogin = false;
       
        this.dataService.setEmail(this.email);
         
      } else {
        this.invalidLogin = true;
      }
    }

  }

  onSubmit() {

    console.log(this.email);
    
    this.checkLogin();
    
  }
 
}
