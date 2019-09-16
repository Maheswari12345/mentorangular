import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {

  trainingId: number;


  constructor(private router: Router,private dataService: DataServiceService) { }

  ngOnInit() {
  }

makePay()
{
  this.router.navigate(['User/UserPay']);
  this.dataService.setTrainingId(this.trainingId);
  
  
}
  onSubmit()
  {
    this.makePay();
    console.log("Method Method Invoked");
  }

}
