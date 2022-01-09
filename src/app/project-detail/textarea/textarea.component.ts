import {Component, Input, OnInit} from "@angular/core";
import {BaseService} from "../../service/base.service";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit() {
    const textarea = document.querySelector('#txt')!;
    // itt kell megadni, különben nem tudja mihez méretezni a boxot
    textarea.innerHTML = this.baseService.selectedProject.projectDetails;
    textarea.setAttribute('style', 'height: auto');
    textarea.setAttribute('style', `height: ${textarea.scrollHeight}px`);
  }

}
