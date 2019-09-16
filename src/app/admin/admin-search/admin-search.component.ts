import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/service/mentor.service';
import { Mentor } from 'src/app/model/Mentor';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {


  email: String;
  mentor: Mentor;
  constructor(private router: Router,private mentorService: MentorService,private dataService: DataServiceService) { }

  ngOnInit() {
  }

  searchMentorByMailId()
  {
    // this.mentorService.getMentorByMentorMail(this.email).subscribe(data => this.mentor = data);
    this.dataService.setMentorEmail(this.email);
    this.router.navigate(['Admin/DeleteMentor']);
  }
  searchUserByMailId()
  {
    this.dataService.setMentorEmail(this.email);
    this.router.navigate(['Admin/DeleteUser']);
  }

  getUserList()
  {
    this.router.navigate(['Admin/ManageUser']);
  }
  getMentorList()
  {
    this.router.navigate(['Admin/ManageMentor']);
  }
}
