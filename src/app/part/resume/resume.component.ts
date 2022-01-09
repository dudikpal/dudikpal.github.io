import { Component, OnInit } from '@angular/core';
import {ResumeItem} from './resumeItem';
import {educationList} from "./educationList";
import {experienceList} from "./experienceList";



@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  educations: ResumeItem[] = [];
  experiences: ResumeItem[] = [];

  constructor() {
    this.fillEducations(educationList, this.educations);
    this.fillEducations(experienceList, this.experiences);
    this.educations = this.educations.reverse();
    this.experiences = this.experiences.reverse();
  }

  ngOnInit(): void {
  }


  fillEducations(inputItems: string[][], outputList: ResumeItem[]): void {
    for (const item of inputItems) {
      outputList.push(
        new ResumeItem(
          item[0],
          item[1],
          item[2],
          item[3]
        )
      );
    }
  }

}
