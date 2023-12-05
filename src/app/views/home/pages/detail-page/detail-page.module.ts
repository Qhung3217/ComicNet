import { ArrayStringToStringPipe } from './../../../../shared/pipes/array-string-to-string/array-string-to-string.pipe';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { FetchComicDetailResolver } from './resolvers/fetch-comic-detail/fetch-comic-detail.resolver';
import { BookOpenIconComponent } from 'src/app/shared/icons/book-open-icon/book-open-icon.component';
import { EyeIconComponent } from 'src/app/shared/icons/eye-icon/eye-icon.component';
import { HeartFillIconComponent } from 'src/app/shared/icons/heart-fill-icon/heart-fill-icon.component';
import { RowFirstIconComponent } from 'src/app/shared/icons/row-first-icon/row-first-icon.component';
import { RowLastIconComponent } from 'src/app/shared/icons/row-last-icon/row-last-icon.component';
import { ToggleButtonReadMoreDirective } from './directives/toggle-button-read-more/toggle-button-read-more.directive';

const routes: Routes = [
  {
    path: '',
    component: DetailPageComponent,
    resolve: [FetchComicDetailResolver],
  },
];

@NgModule({
  declarations: [DetailPageComponent, ToggleButtonReadMoreDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    /* ------------------- PIPE ------------------- */
    ArrayStringToStringPipe,

    /* ------------------- ICON ------------------- */
    EyeIconComponent,
    HeartFillIconComponent,
    BookOpenIconComponent,
    RowFirstIconComponent,
    RowLastIconComponent,
  ],
})
export class DetailPageModule {}
