import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Lazy, Pagination, SwiperOptions, Grid } from 'swiper';

SwiperCore.use([Pagination, Lazy, Grid]);
@Component({
  selector: 'app-slide-list',
  standalone: true,
  imports: [CommonModule, RouterModule, SwiperModule],
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.scss'],
})
export class SlideListComponent {
  @Input('enableNavigation') enableNavigation: boolean = true;

  swiperConfig: SwiperOptions = {
    slidesPerView: 2,
    navigation: this.enableNavigation,
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
          rows: this.enableNavigation ? 2 : 1,
          fill: 'row',
        },
      },
      1024: {
        slidesPerView: 5,
        grid: {
          rows: this.enableNavigation ? 2 : 1,
          fill: 'row',
        },
      },
    },
  };
}
