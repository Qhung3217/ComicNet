import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPageComponent } from './new-page/new-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from 'src/app/shared/components/list/list.component';
import { NewIconComponent } from 'src/app/shared/icons/new-icon/new-icon.component';
import { ButtonScrollToTopComponent } from 'src/app/shared/components/button-scroll-to-top/button-scroll-to-top.component';
import { SkeletonLoadingComponent } from 'src/app/shared/components/skeleton-loading/skeleton-loading.component';

const routes: Routes = [{ path: '', component: NewPageComponent }];

@NgModule({
  declarations: [NewPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    /* -------------- SHARE COMPONENT ------------- */
    ListComponent,
    ButtonScrollToTopComponent,
    SkeletonLoadingComponent,

    /* ------------------- ICON ------------------- */
    NewIconComponent,
  ],
  exports: [],
  providers: [],
})
export class NewPageModule {}
