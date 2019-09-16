import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private dataService: DataServiceService,private userService: UserService) { 


  }
email: string;
user: User;

  ngOnInit() {

    this.dataService._email$.subscribe(message => this.email = message);
    this.userService.getUserDetailsByEmail(this.email).subscribe(user => this.user = user);

  }

}
