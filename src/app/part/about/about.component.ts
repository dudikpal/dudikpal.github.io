import { Component, OnInit } from '@angular/core';
import moment from 'moment'
import {challengeSitesArray} from "./challengeSites";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  birthDate: number[] = [1976, 7, 8];
  age: number = moment().diff(moment(this.birthDate), 'year');
  sites = challengeSitesArray;

  constructor() { }

  ngOnInit(): void {


  }


}
