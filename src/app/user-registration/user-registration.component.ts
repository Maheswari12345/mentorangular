import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { User } from '../model/User';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {


  name: String;
  gender: String;
  email: String;
  password: String;
  address: String;
  contactNumber: String;
  invalidEmail:  Boolean =false;
  role: String;
  login: Login[];
  constructor(private userService: UserService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.getCredentials().subscribe(response => this.login = response, error => alert(`${error.message}\nWaiting for response from server`));
}

registerUser()
{

  for (let i = 0; i < this.login.length; i++) {
    if (this.login[i].email !== this.email) {
      let user = new User(this.name, this.gender, this.email, this.password, this.address, this.contactNumber, "user");
      
      this.userService.registerUser(user).subscribe(response => console.log(response));

      // this.userService.registerUser(user).subscribe(data => console.log(data));
      
      // let credential =new Login(this.email,this.password,"user");
      // this.loginService.insertCredentials(credential).subscribe(data => console.log(data));
      this.router.navigate(['SucessFullRegistration']);
      console.log("Subscribed")

    }
    else{
            this.invalidEmail =true;
        }
  }


}

onSubmit() {

  console.log("Entire Data is sended");

  this.registerUser();
}

}
