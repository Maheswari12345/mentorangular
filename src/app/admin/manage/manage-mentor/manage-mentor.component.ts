import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/service/mentor.service';
import { Mentor } from 'src/app/model/Mentor';

@Component({
  selector: 'app-manage-mentor',
  templateUrl: './manage-mentor.component.html',
  styleUrls: ['./manage-mentor.component.css']
})
export class ManageMentorComponent implements OnInit {


  mentor: Mentor[];
  constructor(private mentorService: MentorService) { }

  ngOnInit() {

    this.mentorService.getAllMentors().subscribe(response => this.mentor = response, error => alert(`${error.message}\nWaiting for response from server`));


  }

}
