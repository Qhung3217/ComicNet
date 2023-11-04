import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GenrePageComponent } from './pages/genre-page/genre-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { TopPageComponent } from './pages/top-page/top-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'the-loai/:genre?status=all', component: GenrePageComponent },
  { path: 'truyen-moi', component: NewPageComponent },
  { path: 'top', component: TopPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
