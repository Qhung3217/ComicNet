import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import { AppState } from 'src/app/core/reducers/app';
import {
  FetchNewComic,
  SetComicResponse,
  SetCurrentPage,
} from 'src/app/core/reducers/home/comic';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss'],
})
export class NewPageComponent implements OnDestroy, OnInit {
  page: number = 1;
  comics: Comic[] = [];
  totalPages: number = 1;
  subscriptions: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.retrievePageFromUrl();
    this.getData();
  }

  private retrievePageFromUrl() {
    this.subscriptions.push(
      this.route.queryParams.subscribe((params: Params) => {
        const page = +params['page'];
        if (page) {
          this.page = page;
          this.onPageChanged(this.page);
        } else
          this.router.navigate([], {
            queryParams: { page: this.page },
            queryParamsHandling: 'merge',
          });
        this.store.dispatch(new FetchNewComic());
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
  private onPageChanged(page: number): void {
    this.store.dispatch(
      new SetCurrentPage({ page: page, category: 'default' })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub?.unsubscribe());
    this.store.dispatch(
      new SetComicResponse({ comics: [], currentPage: 1, totalPages: 1 })
    );
  }
}
