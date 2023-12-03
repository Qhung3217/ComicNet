import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPageComponent } from './new-page/new-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from 'src/app/shared/components/list/list.component';
import { NewIconComponent } from 'src/app/shared/icons/new-icon/new-icon.component';

const routes: Routes = [{ path: '', component: NewPageComponent }];

@NgModule({
  declarations: [NewPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    /* -------------- SHARE COMPONENT ------------- */
    ListComponent,

    /* ------------------- ICON ------------------- */
    NewIconComponent,
  ],
  exports: [],
  providers: [],
})
export class NewPageModule {}
