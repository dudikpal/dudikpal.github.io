import { Component, OnInit } from '@angular/core';
import {challengeSitesArray} from "./challengeSites";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  sites = challengeSitesArray;

  constructor() { }

  ngOnInit(): void {


  }


}
