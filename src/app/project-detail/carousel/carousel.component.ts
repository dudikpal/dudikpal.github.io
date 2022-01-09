import { Component, OnInit } from '@angular/core';
import {BaseService} from "../../service/base.service";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images!: string[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayHoverPause: true,
    margin: 20
  }

  constructor(
    private baseService: BaseService
  ) {
  }

  ngOnInit(): void {
    this.images = this.baseService.selectedProject.images;
    console.log(this.images)
  }

}
