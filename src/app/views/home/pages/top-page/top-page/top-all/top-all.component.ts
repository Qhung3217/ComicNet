import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import { AppState } from 'src/app/core/reducers/app';
import {
  FetchTopComic,
  ResetComicResponse,
} from 'src/app/core/reducers/home/comic';
import { SeoService } from 'src/app/core/services/seo/seo.service';
import { Status } from 'src/app/core/types/status.type';
import { TopDuration } from 'src/app/core/types/top-duration.type';

@Component({
  selector: 'app-top-all',
  templateUrl: './top-all.component.html',
  styleUrls: ['./top-all.component.scss'],
})
export class TopAllComponent implements OnInit, OnDestroy {
  readonly TOP_DURATION: TopDuration = 'all';
  comics: Comic[] = [];
  page: number = 1;
  totalPages = 1;
  status: Status = 'all';
  subscriptions: Subscription[] = [];
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {
    this.fetchDataFromRoute();
  }

  ngOnInit(): void {
    this.getData();
  }

  private fetchDataFromRoute() {
    this.subscriptions.push(
      this.route.queryParams.subscribe((params: Params) => {
        const page = params['page'];
        const status = params['status'];
        if (page) {
          this.page = page;
          this.seoData();
        }
        if (status) {
          if (status !== this.status) this.comics = [];
          this.status = status;
        }
        this.store.dispatch(
          new FetchTopComic({
            topDuration: this.TOP_DURATION,
            page: this.page,
            status: this.status,
          })
        );
      })
    );
  }

  private getData() {
    this.subscriptions.push(
      this.store.select('comic', 'comics').subscribe((comics) => {
        this.comics = [...comics];
      })
    );
    this.subscriptions.push(
      this.store.select('comic', 'currentPage').subscribe((currentPage) => {
        this.page = currentPage;
      })
    );
    this.subscriptions.push(
      this.store.select('comic', 'totalPages').subscribe((totalPages) => {
        this.totalPages = totalPages;
      })
    );
  }
  private seoData() {
    const des =
      'Dẫn mình vào sự xuất sắc với bộ truyện tranh hàng đầu của chúng tôi! Tận hưởng những cuộc phiêu lưu hồi hộp, những nhân vật cuốn hút và nghệ thuật tuyệt vời. Trải nghiệm tốt nhất trong từng trang. #TopComics #TopMonthly #TopDaily #TopWeekl #TopAll';
    this.seoService.setSeoData('Top Truyện Tranh - Trang ' + this.page, des);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub?.unsubscribe());
    if (this.comics.length > 0) this.store.dispatch(new ResetComicResponse());
  }
}
