import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from 'src/app/shared/components/list/list.component';
import { LoadingSpinnerComponent } from 'src/app/shared/components/loading-spinner/loading-spinner.component';
import { SlideListComponent } from 'src/app/shared/components/slide-list/slide-list.component';
import { ClickRemoveClassDirective } from 'src/app/shared/directives/dropdown/click-remove-class/click-remove-class.directive';
import { ClickToggleClassDirective } from 'src/app/shared/directives/dropdown/click-toggle-class/click-toggle-class.directive';
import { RouterActiveClassDirective } from 'src/app/shared/directives/router-active-class/router-active-class.directive';
import { ArrowLeftIconComponent } from 'src/app/shared/icons/arrow-left-icon/arrow-left-icon.component';
import { BookOpenIconComponent } from 'src/app/shared/icons/book-open-icon/book-open-icon.component';
import { CategoryIconComponent } from 'src/app/shared/icons/category-icon/category-icon.component';
import { CheckWavyIconComponent } from 'src/app/shared/icons/check-wavy-icon/check-wavy-icon.component';
import { CircleLetterDIconComponent } from 'src/app/shared/icons/circle-letter-d-icon/circle-letter-d-icon.component';
import { CircleLetterMIconComponent } from 'src/app/shared/icons/circle-letter-m-icon/circle-letter-m-icon.component';
import { CircleLetterWIconComponent } from 'src/app/shared/icons/circle-letter-w-icon/circle-letter-w-icon.component';
import { ComicIconComponent } from 'src/app/shared/icons/comic-icon/comic-icon.component';
import { EyeIconComponent } from 'src/app/shared/icons/eye-icon/eye-icon.component';
import { FemaleIconComponent } from 'src/app/shared/icons/female-icon/female-icon.component';
import { HeartFillIconComponent } from 'src/app/shared/icons/heart-fill-icon/heart-fill-icon.component';
import { HotIconComponent } from 'src/app/shared/icons/hot-icon/hot-icon.component';
import { InformationIconComponent } from 'src/app/shared/icons/information-icon/information-icon.component';
import { MaleIconComponent } from 'src/app/shared/icons/male-icon/male-icon.component';
import { NewIconComponent } from 'src/app/shared/icons/new-icon/new-icon.component';
import { RowFirstIconComponent } from 'src/app/shared/icons/row-first-icon/row-first-icon.component';
import { UnknowIconComponent } from 'src/app/shared/icons/unknow-icon/unknow-icon.component';
import { UpdateIconComponent } from 'src/app/shared/icons/update-icon/update-icon.component';
import { SkeletonLoadingComponent } from './../../shared/components/skeleton-loading/skeleton-loading.component';
import { RowLastIconComponent } from './../../shared/icons/row-last-icon/row-last-icon.component';
import { ArrayStringToStringPipe } from './../../shared/pipes/array-string-to-string/array-string-to-string.pipe';
import { HomeRoutingModule } from './home-routing.module';
import { GenrePageComponent } from './pages/genre-page/genre-page.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionComicPanelComponent } from './pages/home/section-comic-panel/section-comic-panel.component';
import { SectionRecommendComponent } from './pages/home/section-recommend/section-recommend.component';
import { MorePageComponent } from './pages/more-page/more-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { TopAllComponent } from './pages/top-page/top-all/top-all.component';
import { TopDailyComponent } from './pages/top-page/top-daily/top-daily.component';
import { TopMonthlyComponent } from './pages/top-page/top-monthly/top-monthly.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { TopWeeklyComponent } from './pages/top-page/top-weekly/top-weekly.component';

@NgModule({
  declarations: [
    HomeComponent,
    SectionRecommendComponent,
    SectionComicPanelComponent,
    GenrePageComponent,
    NewPageComponent,
    TopPageComponent,
    MorePageComponent,
    TopAllComponent,
    TopDailyComponent,
    TopMonthlyComponent,
    TopWeeklyComponent,
  ],
  imports: [
    CommonModule,

    /* ---------------- app modules --------------- */
    HomeRoutingModule,
    SlideListComponent,
    ListComponent,
    LoadingSpinnerComponent,
    SkeletonLoadingComponent,

    /* ----------------- directive ---------------- */

    //use to toggle class of specific element when this component and this component's children is clicked
    ClickToggleClassDirective,
    //use to remove class of specific element when this component and this component's children are clicked
    ClickRemoveClassDirective,
    RouterActiveClassDirective,

    /* --------------- Pipes -------------- */

    ArrayStringToStringPipe,

    /* --------------- icons -------------- */
    HotIconComponent,
    CheckWavyIconComponent,
    UpdateIconComponent,
    MaleIconComponent,
    FemaleIconComponent,
    CategoryIconComponent,
    InformationIconComponent,
    UnknowIconComponent,
    ArrowLeftIconComponent,
    NewIconComponent,
    CircleLetterDIconComponent,
    CircleLetterMIconComponent,
    CircleLetterWIconComponent,
    ComicIconComponent,
    EyeIconComponent,
    HeartFillIconComponent,
    BookOpenIconComponent,
    RowFirstIconComponent,
    RowLastIconComponent,
  ],
})
export class HomeModule {}
