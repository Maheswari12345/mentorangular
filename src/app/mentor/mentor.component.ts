import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {


  email: string;
  constructor(private  dataService: DataServiceService) { }

  ngOnInit() {


    this.dataService._email$.subscribe(message => this.email = message);
  }

}
