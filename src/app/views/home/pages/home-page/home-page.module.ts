import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-page/home.component';
import { SectionComicPanelComponent } from './home-page/section-comic-panel/section-comic-panel.component';
import { SectionRecommendComponent } from './home-page/section-recommend/section-recommend.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckWavyIconComponent } from 'src/app/shared/icons/check-wavy-icon/check-wavy-icon.component';
import { FemaleIconComponent } from 'src/app/shared/icons/female-icon/female-icon.component';
import { HotIconComponent } from 'src/app/shared/icons/hot-icon/hot-icon.component';
import { MaleIconComponent } from 'src/app/shared/icons/male-icon/male-icon.component';
import { UpdateIconComponent } from 'src/app/shared/icons/update-icon/update-icon.component';
import { SlideListComponent } from 'src/app/shared/components/slide-list/slide-list.component';
import { ButtonScrollToTopComponent } from 'src/app/shared/components/button-scroll-to-top/button-scroll-to-top.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    SectionRecommendComponent,
    SectionComicPanelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    /* -------------- SHARE COMPONENT ------------- */
    SlideListComponent,
    ButtonScrollToTopComponent,

    /* ------------------- ICON ------------------- */
    HotIconComponent,
    CheckWavyIconComponent,
    UpdateIconComponent,
    MaleIconComponent,
    FemaleIconComponent,
  ],
  exports: [],
  providers: [],
})
export class HomePageModule {}
