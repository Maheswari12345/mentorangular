import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { UserService } from 'src/app/service/user.service';
import { UserCurrentTraining } from 'src/app/model/UserCurrentTraining';
import { UserPayment } from 'src/app/model/UserPayment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-make-user-pay',
  templateUrl: './make-user-pay.component.html',
  styleUrls: ['./make-user-pay.component.css']
})
export class MakeUserPayComponent implements OnInit {

  amount: number;
  trainingId: number;
  trainingDetail: UserCurrentTraining;
  status: string;
  
  constructor(private userService: UserService, private dataService: DataServiceService,private router: Router) { }

  ngOnInit() {
    this.dataService._trainingId$.subscribe(message => this.trainingId = message);
    this.userService.getTrainingDetailsbyId(this.trainingId).subscribe(trainingDetails => this.trainingDetail = trainingDetails);
  }
  insertUserPay()
  {
    
   let userPay = new UserPayment(this.trainingDetail.id,this.trainingDetail.userMailId,this.trainingDetail.mentorMailId,this.trainingDetail.courseName,this.amount);  
   this.userService.userPayment(userPay).subscribe(data => console.log(data));
   this.router.navigate(['User/PaymentSuccesful']);

  }
  
  onSubmit()
  {
    this.insertUserPay();

  }

  


}
