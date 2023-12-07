import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListComponent } from 'src/app/shared/components/list/list.component';
import { LoadingSpinnerComponent } from 'src/app/shared/components/loading-spinner/loading-spinner.component';
import { SearchComicCardComponent } from 'src/app/shared/components/search-comic-card/search-comic-card.component';
import { ArrowLeftIconComponent } from 'src/app/shared/icons/arrow-left-icon/arrow-left-icon.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SkeletonLoadingComponent } from 'src/app/shared/components/skeleton-loading/skeleton-loading.component';
import { ButtonScrollToTopComponent } from 'src/app/shared/components/button-scroll-to-top/button-scroll-to-top.component';

const routes: Routes = [{ path: '', component: SearchPageComponent }];

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    /* ------------- SHARED COMPONENT ------------- */
    ListComponent,
    LoadingSpinnerComponent,
    SearchComicCardComponent,
    SkeletonLoadingComponent,
    ButtonScrollToTopComponent,
    /* ------------------- ICON ------------------- */
    ArrowLeftIconComponent,
  ],
  exports: [],
  providers: [],
})
export class SearchPageModule {}
