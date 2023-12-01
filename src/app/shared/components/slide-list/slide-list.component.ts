import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import SwiperCore, {
  Autoplay,
  Grid,
  Lazy,
  Navigation,
  SwiperOptions,
} from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { ComicCardComponent } from '../comic-card/comic-card.component';
import { SkeletonLoadingComponent } from './../skeleton-loading/skeleton-loading.component';

SwiperCore.use([Navigation, Lazy, Grid, Autoplay]);
@Component({
  selector: 'app-slide-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    SkeletonLoadingComponent,
    ComicCardComponent,
  ],
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.scss'],
})
export class SlideListComponent implements OnInit {
  @Input('navigation') navigation: boolean = true;
  @Input('slideList') slideList: any[] = [];
  @Input('category') category: 'comic' | 'comic-recommend' = 'comic';
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
      autoplay: !this.navigation,
      lazy: true,
      watchSlidesProgress: true,
      loop: !this.navigation,
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
