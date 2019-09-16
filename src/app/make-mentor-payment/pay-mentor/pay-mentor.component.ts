import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { MentorService } from 'src/app/service/mentor.service';
import { MentorPaymentByAdmin } from 'src/app/model/MentorPaymentByAdmin';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-pay-mentor',
  templateUrl: './pay-mentor.component.html',
  styleUrls: ['./pay-mentor.component.css']
})
export class PayMentorComponent implements OnInit {


  email: String;
  slot: String;
  amount: String;
  mentorDetails: MentorPaymentByAdmin;


  constructor(private mentorService: MentorService, private dataService: DataServiceService,private adminService: AdminService) { }

  ngOnInit() {

    this.dataService._mentorMail$.subscribe(message => this.email = message);
    this.mentorService.getMentorByMailId(this.email).subscribe(mentorDetails => this.mentorDetails = mentorDetails);




  }
  onSubmit() {
     
    if(this.slot === "slot1")
    {
      this.mentorDetails.slot1 = this.amount;
    }
    if(this.slot === "slot2")
    {
      this.mentorDetails.slot2 = this.amount;
    }
    if(this.slot === "slot3")
    {
      this.mentorDetails.slot3 = this.amount;
    }
    console.log("Enter here is the amount"+ this.amount)
   this.updateMentorPayment();


  }
   
  updateMentorPayment()
  {
  console.log("-----------------------------------------------------------------------")
console.log(this.slot);
console.log(this.amount)

    this.adminService.updaeMentorPayment(this.mentorDetails.id,{email: this.mentorDetails.email,courseName: this.mentorDetails.courseName,slot1: this.mentorDetails.slot1,slot2: this.mentorDetails.slot2,slot3: this.mentorDetails.slot3,slot4: this.mentorDetails.slot4,totalFee: this.mentorDetails.totalFee})
  
     .subscribe(
      data => {
        console.log(data);
        this.mentorDetails = data as MentorPaymentByAdmin;
      }

     )
  }





}



