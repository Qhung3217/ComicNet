import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'the-loai',
    loadChildren: () =>
      import('./pages/genre-page/genre-page.module').then(
        (m) => m.GenrePageModule
      ),
  },
  {
    path: 'truyen-moi',
    loadChildren: () =>
      import('./pages/new-page/new-page.module').then((m) => m.NewPageModule),
  },
  {
    path: 'top',
    loadChildren: () =>
      import('./pages/top-page/top-page.module').then((m) => m.TopPageModule),
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
