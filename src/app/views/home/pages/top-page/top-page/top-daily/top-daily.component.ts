import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import { AppState } from 'src/app/core/reducers/app';
import {
  FetchTopComic,
  ResetComicResponse,
} from 'src/app/core/reducers/home/comic';
import { Status } from 'src/app/core/types/status.type';
import { TopDuration } from 'src/app/core/types/top-duration.type';

@Component({
  selector: 'app-top-daily',
  templateUrl: './top-daily.component.html',
  styleUrls: ['./top-daily.component.scss'],
})
export class TopDailyComponent implements OnInit, OnDestroy {
  readonly TOP_DURATION: TopDuration = 'daily';
  comics: Comic[] = [];
  page: number = 1;
  totalPages = 1;
  status: Status = 'all';
  subscriptions: Subscription[] = [];
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub?.unsubscribe());
    if (this.comics.length > 0) this.store.dispatch(new ResetComicResponse());
  }
}
