import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { AdminService } from 'src/app/service/admin.service';
import { Admin } from 'src/app/model/Admin';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {


  email: String;
  admin: Admin;
  constructor(private dataService: DataServiceService,private adminService: AdminService) { }

  ngOnInit() {

    this.dataService._email$.subscribe(message => this.email = message);
    this.adminService.getAdminDetailsByEmail(this.email).subscribe(admin => this.admin = admin);
    console.log("HiHiHi"+ this.admin);
 

  }


  

}
