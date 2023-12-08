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
import { SeoService } from 'src/app/core/services/seo/seo.service';

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
  constructor(private store: Store<AppState>, private seoService: SeoService) {
    this.store.dispatch(new FetchDataHomePage());
  }
  ngOnInit(): void {
    this.subscription = this.store.select('comic').subscribe((state) => {
      this.seoData();
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
  private seoData() {
    const title = 'ComicNet | Đọc truyện tranh online';
    const des =
      'Khám phá những bộ manga và truyện Trung Quốc nổi bật nhất, cũng như anime và Webtoon mới được phát hành trên ComicNet. Hàng nghìn câu chuyện web manga và truyện tranh phổ biến đang chờ bạn miễn phí! Duyệt qua các thể loại đa dạng như ngôn tình, hành động (action), lãng mạn (romance), hài hước (comedy) và nhiều thể loại khác.#Comics #Adventure #Humor #Webcomics #Manga #Manhua #Manhwa';
    this.seoService.setSeoData(title, des);
  }
}
