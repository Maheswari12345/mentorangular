import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {


  email: string;
  constructor(private  dataService: DataServiceService) { }

  ngOnInit() {

     this.dataService._email$.subscribe(message => this.email = message);
    

  }




}
