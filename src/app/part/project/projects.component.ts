import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {projectList} from "./projectList";
import {Project} from "./project";
import {BaseService} from "../../service/base.service";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = projectList;

  constructor(
    private baseService: BaseService
  ) {
  }

  ngOnInit(): void {
    console.log(this.projects)
  }

  sendData(data: Project) {
    this.baseService.emitData(data);
  }

}
