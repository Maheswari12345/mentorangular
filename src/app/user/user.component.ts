import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

email: string;

  constructor(private  dataService: DataServiceService,private router: Router) { }

  ngOnInit() {

    this.dataService._email$.subscribe(message => this.email = message);
  }

  logout()
  {
     
    this.router.navigate(['']);
  }

}
