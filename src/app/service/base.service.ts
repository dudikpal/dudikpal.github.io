import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Project} from "../part/project/project";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  observer = new Subject();
  public subscribers = this.observer.asObservable();
  public selectedProject!: Project;

  emitData(data: Project) {
    //this.observer.next(data);
    this.selectedProject = data;

  }

  constructor() { }
}
