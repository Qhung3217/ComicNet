import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
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
    path: ':comic-slug/:chapter-id',
    loadChildren: () =>
      import('./pages/chapter-page/chapter-page.module').then(
        (m) => m.ChapterPageModule
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
