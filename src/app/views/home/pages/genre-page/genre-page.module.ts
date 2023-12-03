import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ListComponent } from 'src/app/shared/components/list/list.component';
import { SkeletonLoadingComponent } from 'src/app/shared/components/skeleton-loading/skeleton-loading.component';
import { ClickRemoveClassDirective } from 'src/app/shared/directives/dropdown/click-remove-class/click-remove-class.directive';
import { ClickToggleClassDirective } from 'src/app/shared/directives/dropdown/click-toggle-class/click-toggle-class.directive';
import { RouterActiveClassDirective } from 'src/app/shared/directives/router-active-class/router-active-class.directive';
import { ArrowLeftIconComponent } from 'src/app/shared/icons/arrow-left-icon/arrow-left-icon.component';
import { CategoryIconComponent } from 'src/app/shared/icons/category-icon/category-icon.component';
import { InformationIconComponent } from 'src/app/shared/icons/information-icon/information-icon.component';
import { UnknowIconComponent } from 'src/app/shared/icons/unknow-icon/unknow-icon.component';
import { GenrePageComponent } from './genre-page/genre-page.component';

const routes: Routes = [
  { path: ':genre?status=all&page=1', component: GenrePageComponent },
];

@NgModule({
  declarations: [GenrePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxSkeletonLoaderModule,
    /* ------------- SHARED COMPONENET ------------ */
    ListComponent,
    SkeletonLoadingComponent,

    /* ----------------- DIRECTIVE ---------------- */
    //use to toggle class of specific element when this component and this component's children is clicked
    ClickToggleClassDirective,
    //use to remove class of specific element when this component and this component's children are clicked
    ClickRemoveClassDirective,
    RouterActiveClassDirective,
    /* ------------------- ICON ------------------- */
    CategoryIconComponent,
    InformationIconComponent,
    UnknowIconComponent,
    ArrowLeftIconComponent,
  ],
  exports: [],
  providers: [],
})
export class GenrePageModule {}
