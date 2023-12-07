import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ComicRecommend } from 'src/app/core/interfaces/base/comic-recommend.interface';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import { AppState } from 'src/app/core/reducers/app';
import {
  FetchDataHomePage,
  ResetDataHomePage,
} from 'src/app/core/reducers/home/comic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  recommendComics: ComicRecommend[] = [];
  popularComics: Comic[] = [];
  completedComics: Comic[] = [];
  updatedComics: Comic[] = [];
  boyComics: Comic[] = [];
  girlComics: Comic[] = [];
  subscription?: Subscription;
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new FetchDataHomePage());
  }
  ngOnInit(): void {
    this.subscription = this.store.select('comic').subscribe((state) => {
      if (state.promotionComics.recommendComics?.length > 0)
        this.recommendComics = [...state.promotionComics.recommendComics];
      if (state.promotionComics.popularComics.comics?.length > 0)
        this.popularComics = [...state.promotionComics.popularComics.comics];
      if (state.promotionComics.completedComics.comics?.length > 0)
        this.completedComics = [
          ...state.promotionComics.completedComics.comics,
        ];
      if (state.promotionComics.updatedComics.comics?.length > 0)
        this.updatedComics = [...state.promotionComics.updatedComics.comics];
      if (state.promotionComics.boyComics.comics?.length > 0)
        this.boyComics = [...state.promotionComics.boyComics.comics];
      if (state.promotionComics.girlComics.comics?.length > 0)
        this.girlComics = [...state.promotionComics.girlComics.comics];
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.store.dispatch(new ResetDataHomePage());
  }
}
