import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Lazy, Navigation, SwiperOptions, Grid } from 'swiper';
import { ComicCardComponent } from '../comic-card/comic-card.component';

SwiperCore.use([Navigation, Lazy, Grid]);
@Component({
  selector: 'app-slide-list',
  standalone: true,
  imports: [CommonModule, RouterModule, SwiperModule, ComicCardComponent],
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.scss'],
})
export class SlideListComponent implements OnInit {
  @Input('navigation') navigation: boolean = true;
  @Input('slideList') slideList = [];
  swiperConfig!: SwiperOptions;
  constructor() {}
  ngOnInit() {
    this.swiperConfig = {
      slidesPerView: 2,
      spaceBetween: 15,
      navigation: this.navigation,
      pagination: false,
      grid: {
        rows: 1,
        fill: 'row',
      },
      lazy: true,
      watchSlidesProgress: true,
      autoplay: true,
      loop: false,
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
          grid: {
            rows: this.navigation ? 2 : 1,
            fill: 'row',
          },
        },
        1024: {
          slidesPerView: 5,
          grid: {
            rows: this.navigation ? 2 : 1,
            fill: 'row',
          },
        },
      },
    };
  }
}
