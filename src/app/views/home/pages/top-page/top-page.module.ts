import { RouterActiveClassDirective } from './../../../../shared/directives/router-active-class/router-active-class.directive';
import { SkeletonLoadingComponent } from './../../../../shared/components/skeleton-loading/skeleton-loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopAllComponent } from './top-page/top-all/top-all.component';
import { TopDailyComponent } from './top-page/top-daily/top-daily.component';
import { TopMonthlyComponent } from './top-page/top-monthly/top-monthly.component';
import { TopPageComponent } from './top-page/top-page.component';
import { TopWeeklyComponent } from './top-page/top-weekly/top-weekly.component';
import { RouterModule, Routes } from '@angular/router';
import { CircleLetterDIconComponent } from 'src/app/shared/icons/circle-letter-d-icon/circle-letter-d-icon.component';
import { CircleLetterMIconComponent } from 'src/app/shared/icons/circle-letter-m-icon/circle-letter-m-icon.component';
import { CircleLetterWIconComponent } from 'src/app/shared/icons/circle-letter-w-icon/circle-letter-w-icon.component';
import { ComicIconComponent } from 'src/app/shared/icons/comic-icon/comic-icon.component';
import { ListComponent } from 'src/app/shared/components/list/list.component';
import { ButtonScrollToTopComponent } from 'src/app/shared/components/button-scroll-to-top/button-scroll-to-top.component';

const routes: Routes = [
  {
    path: '',
    component: TopPageComponent,
    children: [
      { path: 'all', component: TopAllComponent },
      { path: 'ngay', component: TopDailyComponent },
      { path: 'tuan', component: TopWeeklyComponent },
      { path: 'thang', component: TopMonthlyComponent },
      { path: '', redirectTo: 'all', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    TopPageComponent,
    TopAllComponent,
    TopDailyComponent,
    TopMonthlyComponent,
    TopWeeklyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    /* -------------- SHARE COMPONENT ------------- */
    ListComponent,
    SkeletonLoadingComponent,
    ButtonScrollToTopComponent,

    /* ----------------- DIRECTIVE ---------------- */
    RouterActiveClassDirective,

    /* ------------------- ICON ------------------- */
    CircleLetterDIconComponent,
    CircleLetterMIconComponent,
    CircleLetterWIconComponent,
    ComicIconComponent,
  ],
  exports: [],
  providers: [],
})
export class TopPageModule {}
