import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenrePageComponent } from './pages/genre-page/genre-page.component';
import { HomeComponent } from './pages/home/home.component';
import { NewPageComponent } from './pages/new-page/new-page/new-page.component';
import { TopAllComponent } from './pages/top-page/top-all/top-all.component';
import { TopDailyComponent } from './pages/top-page/top-daily/top-daily.component';
import { TopMonthlyComponent } from './pages/top-page/top-monthly/top-monthly.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { TopWeeklyComponent } from './pages/top-page/top-weekly/top-weekly.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'the-loai/:genre?status=all&page=1', component: GenrePageComponent },
  {
    path: 'truyen-moi',
    loadChildren: () =>
      import('./pages/new-page/new-page.module').then((m) => m.NewPageModule),
  },
  {
    path: 'top',
    component: TopPageComponent,
    children: [
      { path: 'all', component: TopAllComponent },
      { path: 'ngay', component: TopDailyComponent },
      { path: 'tuan', component: TopWeeklyComponent },
      { path: 'thang', component: TopMonthlyComponent },
      { path: '', redirectTo: 'all', pathMatch: 'full' },
    ],
  },
  {
    path: 'truyen',
    loadChildren: () =>
      import('./pages/more-page/more-page.module').then(
        (m) => m.MorePageModule
      ),
  },
  {
    path: ':comic-slug',
    loadChildren: () =>
      import('./pages/detail-page/detail-page.module').then(
        (m) => m.DetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
