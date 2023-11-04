import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MenuIconComponent } from 'src/app/shared/icons/menu-icon/menu-icon.component';
import { SearchIconComponent } from 'src/app/shared/icons/search-icon/search-icon.component';
import { XIconComponent } from 'src/app/shared/icons/x-icon/x-icon.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CategoryIconComponent } from 'src/app/shared/icons/category-icon/category-icon.component';
import { CheckWavyIconComponent } from 'src/app/shared/icons/check-wavy-icon/check-wavy-icon.component';
import { HomeIconComponent } from 'src/app/shared/icons/home-icon/home-icon.component';
import { HotIconComponent } from 'src/app/shared/icons/hot-icon/hot-icon.component';
import { NewIconComponent } from 'src/app/shared/icons/new-icon/new-icon.component';
import { TopIconComponent } from 'src/app/shared/icons/top-icon/top-icon.component';
import { HistoryIconComponent } from 'src/app/shared/icons/history-icon/history-icon.component';
import { UpdateIconComponent } from 'src/app/shared/icons/update-icon/update-icon.component';
import { FemaleIconComponent } from 'src/app/shared/icons/female-icon/female-icon.component';
import { MaleIconComponent } from 'src/app/shared/icons/male-icon/male-icon.component';
import { ClickToggleClassDirective } from 'src/app/shared/directives/dropdown/click-toggle-class/click-toggle-class.directive';

@NgModule({
  declarations: [HeaderComponent, HeaderSearchComponent, HeaderMenuComponent],
  imports: [
    CommonModule,
    RouterModule,

    /* ----------------- directive ---------------- */
    ClickToggleClassDirective,

    /* ------------------- Icons ------------------ */
    HistoryIconComponent,
    SearchIconComponent,
    MenuIconComponent,
    XIconComponent,
    CategoryIconComponent,
    CheckWavyIconComponent,
    HomeIconComponent,
    HotIconComponent,
    NewIconComponent,
    TopIconComponent,
    UpdateIconComponent,
    MaleIconComponent,
    FemaleIconComponent,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
