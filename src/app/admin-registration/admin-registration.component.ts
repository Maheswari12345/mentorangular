import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Login } from '../model/login';
import { Admin } from '../model/Admin';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {


  name: String;
  gender: String;
  email: String;
  password: String;
  address: String;
  contactNumber: String;
  invalidEmail:  Boolean =false;
  login: Login[];





  constructor(private adminservice: AdminService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  // this.loginService.getCredentials().subscribe(response => this.login = response, error => alert(`${error.message}\nWaiting for response from server`));
  }
  registerAdmin() {

    // for (let i = 0; i < this.login.length; i++) {
    //   if (this.login[i].email !== this.email) {
        let admin = new Admin(this.name, this.gender, this.email, this.password, this.address, this.contactNumber, "admin");
        this.adminservice.registerAdmin(admin).subscribe(data => console.log(data));
        let credential =new Login(this.email,this.password,"admin");
        this.loginService.insertCredentials(credential).subscribe(data => console.log(data));
        this.router.navigate(['SucessFullRegistration']);
        console.log("Subscribed")

    //   }
    //   else{
    //           this.invalidEmail =true;
    //       }
    // }



  }



  onSubmit() {

    console.log("Entire Data is sended");

    this.registerAdmin();
  }


  // constructor(private router: Router, private loginService: UserAuthService) { }

  // ngOnInit() {
  // }

  // onSubmit() {
  //   let user = new User(this.username, this.email, this.password);
  //   this.loginService.registerUser(user).subscribe(response => console.log(response));

  // }

}
