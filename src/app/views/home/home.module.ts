import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SectionRecommendComponent } from './pages/home/section-recommend/section-recommend.component';
import { SectionComicPanelComponent } from './pages/home/section-comic-panel/section-comic-panel.component';
import { SlideListComponent } from 'src/app/shared/components/slide-list/slide-list.component';
import { HotIconComponent } from 'src/app/shared/icons/hot-icon/hot-icon.component';

@NgModule({
  declarations: [
    HomeComponent,
    SectionRecommendComponent,
    SectionComicPanelComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlideListComponent,
    HotIconComponent,
  ],
})
export class HomeModule {}
