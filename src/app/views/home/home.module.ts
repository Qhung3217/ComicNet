import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SectionRecommendComponent } from './pages/home/section-recommend/section-recommend.component';
import { SectionComicPanelComponent } from './pages/home/section-comic-panel/section-comic-panel.component';
import { SlideListComponent } from 'src/app/shared/components/slide-list/slide-list.component';
import { HotIconComponent } from 'src/app/shared/icons/hot-icon/hot-icon.component';
import { CheckWavyIconComponent } from 'src/app/shared/icons/check-wavy-icon/check-wavy-icon.component';
import { UpdateIconComponent } from 'src/app/shared/icons/update-icon/update-icon.component';
import { MaleIconComponent } from 'src/app/shared/icons/male-icon/male-icon.component';
import { FemaleIconComponent } from 'src/app/shared/icons/female-icon/female-icon.component';
import { GenrePageComponent } from './pages/genre-page/genre-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { ListComponent } from 'src/app/shared/components/list/list.component';

@NgModule({
  declarations: [
    HomeComponent,
    SectionRecommendComponent,
    SectionComicPanelComponent,
    GenrePageComponent,
    NewPageComponent,
    TopPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlideListComponent,
    ListComponent,
    HotIconComponent,
    CheckWavyIconComponent,
    UpdateIconComponent,
    MaleIconComponent,
    FemaleIconComponent,
  ],
})
export class HomeModule {}
