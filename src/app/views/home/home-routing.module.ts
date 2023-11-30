import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GenrePageComponent } from './pages/genre-page/genre-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { MorePageComponent } from './pages/more-page/more-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'the-loai/:genre?status=all&page=1', component: GenrePageComponent },
  { path: 'truyen-moi', component: NewPageComponent },
  { path: 'top', component: TopPageComponent },
  { path: ':category', component: MorePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
