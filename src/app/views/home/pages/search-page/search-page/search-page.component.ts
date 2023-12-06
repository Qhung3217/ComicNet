import { FetchDataSearchComicPage } from './../../../../../core/reducers/home/comic/comic.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import { AppState } from 'src/app/core/reducers/app';
import {
  ResetComicResponse,
  SetCurrentPage,
} from 'src/app/core/reducers/home/comic';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit, OnDestroy {
  comics: Comic[] = [];
  page = 1;
  totalPages = 1;
  isLoading = false;
  subscriptions: Subscription[] = [];
  query: string = '';
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPageFromUrl();
    this.getData();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub?.unsubscribe());
    this.store.dispatch(new ResetComicResponse());
  }
  private getPageFromUrl() {
    this.subscriptions.push(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'];
        const query = decodeURI(params['query']);
        if (page) {
          this.query = query;
          this.page = page;
          if (query !== '') {
            this.isLoading = true;
            this.store.dispatch(
              new FetchDataSearchComicPage({
                query,
                page,
              })
            );
          } else this.comics = [];
        } else
          this.router.navigate([], {
            queryParams: {
              page: 1,
            },
            queryParamsHandling: 'merge',
          });
      })
    );
  }
  private getData() {
    this.subscriptions.push(
      this.store.select('comic', 'comics').subscribe((comics) => {
        this.comics = [...comics];
        this.isLoading = false;
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
}
