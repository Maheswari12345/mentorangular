import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { DataServiceService } from 'src/app/service/data-service.service';
import { AdminService } from 'src/app/service/admin.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  user: User;
  email: string;

  constructor(private userService: UserService, private dataService: DataServiceService,private adminService: AdminService) { }

 
  ngOnInit() {
    

    this.dataService._mentorMail$.subscribe(message => this.email = message);
    this.userService.getUserByUserMail(this.email).subscribe(data => this.user = data);
  }
deleteMentor()
{
  this.adminService.deleteMentorByEmail(this.email);
  
}
}
