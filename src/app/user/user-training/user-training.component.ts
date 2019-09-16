import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { UserCurrentTraining } from 'src/app/model/UserCurrentTraining';

@Component({
  selector: 'app-user-training',
  templateUrl: './user-training.component.html',
  styleUrls: ['./user-training.component.css']
})
export class UserTrainingComponent implements OnInit {

 trainings: UserCurrentTraining[];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getCurrentTrainings().subscribe(data => this.trainings = data);


  }

}
