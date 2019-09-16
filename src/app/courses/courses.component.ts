import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../service/skills.service';

import { Course } from '../model/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


   courses: Course[];

  constructor(private skillService: SkillsService) { }

  ngOnInit() {

    this.skillService.getCourseList().subscribe(data => this.courses = data);
  }

}


