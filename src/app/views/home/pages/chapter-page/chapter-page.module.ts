import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SmallLoadingSpinnerComponent } from 'src/app/shared/components/small-loading-spinner/small-loading-spinner.component';
import { ImageLoadFailedDirective } from 'src/app/shared/directives/image-load-failed/image-load-failed.directive';
import { ScrollToDirective } from 'src/app/shared/directives/scroll-to/scroll-to.directive';
import { ArrowLeftIconComponent } from 'src/app/shared/icons/arrow-left-icon/arrow-left-icon.component';
import { HomeIconComponent } from 'src/app/shared/icons/home-icon/home-icon.component';
import { LeftIconComponent } from 'src/app/shared/icons/left-icon/left-icon.component';
import { ListIconComponent } from 'src/app/shared/icons/list-icon/list-icon.component';
import { XIconComponent } from 'src/app/shared/icons/x-icon/x-icon.component';
import { ChapterPageComponent } from './chapter-page/chapter-page.component';
import { FormsModule } from '@angular/forms';
import { SearchIconComponent } from 'src/app/shared/icons/search-icon/search-icon.component';

const routes: Routes = [{ path: '', component: ChapterPageComponent }];

@NgModule({
  declarations: [ChapterPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgOptimizedImage,
    NgxSkeletonLoaderModule,

    /* -------------- SHARE COMPONENT ------------- */
    SmallLoadingSpinnerComponent,

    /* ---------------- DIRECTIVES ---------------- */
    ImageLoadFailedDirective,
    ScrollToDirective,

    /* ------------------- ICON ------------------- */
    HomeIconComponent,
    ListIconComponent,
    ArrowLeftIconComponent,
    LeftIconComponent,
    XIconComponent,
    SearchIconComponent,
  ],
  exports: [],
  providers: [],
})
export class ChapterPageModule {}
