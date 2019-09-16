import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/service/mentor.service';
import { DataServiceService } from 'src/app/service/data-service.service';
import { Mentor } from 'src/app/model/Mentor';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-delete-mentor',
  templateUrl: './delete-mentor.component.html',
  styleUrls: ['./delete-mentor.component.css']
})
export class DeleteMentorComponent implements OnInit {
  email: string;
  mentor: Mentor;
  deleteEmail: string;


  constructor(private mentorService: MentorService, private dataService: DataServiceService,private adminService: AdminService) { }

  ngOnInit() {
    

    this.dataService._mentorMail$.subscribe(message => this.email = message);
    this.mentorService.getMentorByMentorMail(this.email).subscribe(data => this.mentor = data);
  }
deleteMentor()
{
  this.adminService.deleteMentorByEmail(this.email);
  
}

// deleteCustomer() {
//   this.customerService.deleteCustomer(this.customer.id)
//     .subscribe(
//       data => {
//         console.log(data);
//         this.listComponent.reloadData();
//       },
//       error => console.log(error));
// }
}
