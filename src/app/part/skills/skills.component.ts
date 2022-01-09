import { Component, OnInit } from '@angular/core';
import {skillList} from "./skillList";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = skillList;

  constructor() { }

  ngOnInit(): void {
  }

}
