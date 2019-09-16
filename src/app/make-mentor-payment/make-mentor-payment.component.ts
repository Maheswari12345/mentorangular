import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-mentor-payment',
  templateUrl: './make-mentor-payment.component.html',
  styleUrls: ['./make-mentor-payment.component.css']
})
export class MakeMentorPaymentComponent implements OnInit {



  mentorEmail: String;

  constructor(private router: Router,private dataService: DataServiceService) { }

  ngOnInit()
  {

    


  }



  searchMentorPay()
  {

    this.dataService.setMentorEmail(this.mentorEmail);
    this.router.navigate(['Admin/mentorPay']);
    
  
  }

  onSubmit()
  {
    this.searchMentorPay();
    
  }
}
