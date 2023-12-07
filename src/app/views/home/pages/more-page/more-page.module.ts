import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckWavyIconComponent } from 'src/app/shared/icons/check-wavy-icon/check-wavy-icon.component';
import { FemaleIconComponent } from 'src/app/shared/icons/female-icon/female-icon.component';
import { HotIconComponent } from 'src/app/shared/icons/hot-icon/hot-icon.component';
import { MaleIconComponent } from 'src/app/shared/icons/male-icon/male-icon.component';
import { UpdateIconComponent } from 'src/app/shared/icons/update-icon/update-icon.component';
import { SkeletonLoadingComponent } from './../../../../shared/components/skeleton-loading/skeleton-loading.component';
import { MorePageComponent } from './more-page/more-page.component';
import { ListComponent } from 'src/app/shared/components/list/list.component';
import { ButtonScrollToTopComponent } from 'src/app/shared/components/button-scroll-to-top/button-scroll-to-top.component';

const routes: Routes = [{ path: ':category', component: MorePageComponent }];

@NgModule({
  declarations: [MorePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    /* ------------- SHARE COMPONENTS ------------- */
    SkeletonLoadingComponent,
    ListComponent,
    ButtonScrollToTopComponent,

    /* ------------------- ICON ------------------- */
    HotIconComponent,
    CheckWavyIconComponent,
    UpdateIconComponent,
    MaleIconComponent,
    FemaleIconComponent,
  ],
  exports: [],
  providers: [],
})
export class MorePageModule {}
