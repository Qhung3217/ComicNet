import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import { AppState } from 'src/app/core/reducers/app';
import {
  FetchBoyComic,
  FetchCompletedComic,
  FetchGirlComic,
  FetchPopularComic,
  FetchUpdatedComic,
  ResetDataHomePage,
  SetCurrentPage,
} from 'src/app/core/reducers/home/comic';

@Component({
  selector: 'app-more-page',
  templateUrl: './more-page.component.html',
  styleUrls: ['./more-page.component.scss'],
})
export class MorePageComponent implements OnInit, OnDestroy {
  @Input() title:
    | 'Truyện nổi bật'
    | 'Truyện hoàn thành'
    | 'Truyện mới cập nhật'
    | 'Truyện nam'
    | 'Truyện nữ' = 'Truyện nổi bật';
  page: number = 1;
  subscriptions: Subscription[] = [];
  isLoading = false;
  comics: Comic[] = [];
  totalPages: number = 1;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.retrieveTitleFromUrl();
    this.retrievePageFromUrl();
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
        this.fetchData();
      })
    );
  }
  private retrieveTitleFromUrl() {
    this.subscriptions.push(
      this.route.params.subscribe((params: Params) => {
        const category = Object.values(params)[0];

        switch (category) {
          case 'truyen-hoan-thanh':
            this.title = 'Truyện hoàn thành';
            this.fetchData();

            this.initialValue();
            this.getData();
            return;
          case 'truyen-noi-bat':
            this.title = 'Truyện nổi bật';
            this.fetchData();
            this.initialValue();
            this.getData();
            return;
          case 'truyen-cap-nhat':
            this.title = 'Truyện mới cập nhật';
            this.fetchData();
            this.initialValue();
            this.getData();
            return;
          case 'truyen-nam':
            this.title = 'Truyện nam';
            this.fetchData();
            this.initialValue();
            this.getData();
            return;
          case 'truyen-nu':
            this.title = 'Truyện nữ';
            this.fetchData();
            this.initialValue();
            this.getData();
            return;
          default:
            this.showError();
        }
      })
    );
  }
  private initialValue() {
    this.comics = [];
    this.page = 1;
    this.totalPages = 1;
  }

  private getData() {
    switch (this.title) {
      case 'Truyện nổi bật':
        this.getPopularData();
        return;

      case 'Truyện hoàn thành':
        this.getCompletedData();
        return;

      case 'Truyện mới cập nhật':
        this.getUpdatedData();
        return;

      case 'Truyện nam':
        this.getBoyData();
        return;

      case 'Truyện nữ':
        this.getGirlData();
        return;

      default:
        this.showError();
    }
  }
  private fetchData() {
    switch (this.title) {
      case 'Truyện nổi bật':
        this.store.dispatch(new FetchPopularComic());
        return;

      case 'Truyện hoàn thành':
        this.store.dispatch(new FetchCompletedComic());
        return;

      case 'Truyện mới cập nhật':
        this.store.dispatch(new FetchUpdatedComic());
        return;

      case 'Truyện nam':
        this.store.dispatch(new FetchBoyComic());
        return;

      case 'Truyện nữ':
        this.store.dispatch(new FetchGirlComic());
        return;

      default:
        this.showError();
    }
  }
  onPageChanged(page: number): void {
    switch (this.title) {
      case 'Truyện nổi bật':
        this.store.dispatch(
          new SetCurrentPage({ page: page, category: 'popular' })
        );
        return;

      case 'Truyện hoàn thành':
        this.store.dispatch(
          new SetCurrentPage({ page: page, category: 'completed' })
        );
        return;

      case 'Truyện mới cập nhật':
        this.store.dispatch(
          new SetCurrentPage({ page: page, category: 'updated' })
        );
        return;

      case 'Truyện nam':
        this.store.dispatch(
          new SetCurrentPage({ page: page, category: 'boy' })
        );
        return;

      case 'Truyện nữ':
        this.store.dispatch(
          new SetCurrentPage({ page: page, category: 'girl' })
        );
        return;

      default:
        this.showError();
    }
  }
  private showError() {
    alert('Oops! Something went wrong, please try again');
    this.router.navigate(['/']);
  }

  private getPopularData() {
    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'popularComics', 'comics')
        .subscribe((comics) => {
          this.comics = [...comics];
        })
    );
    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'popularComics', 'currentPage')
        .subscribe((currentPage) => {
          this.page = currentPage;
        })
    );
    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'popularComics', 'totalPages')
        .subscribe((totalPages) => {
          this.totalPages = totalPages;
        })
    );
  }

  private getCompletedData() {
    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'completedComics', 'comics')
        .subscribe((comics) => {
          this.comics = [...comics];
        })
    );
    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'completedComics', 'currentPage')
        .subscribe((currentPage) => {
          this.page = currentPage;
        })
    );
    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'completedComics', 'totalPages')
        .subscribe((totalPages) => {
          this.totalPages = totalPages;
        })
    );
  }

  private getUpdatedData() {
    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'updatedComics', 'comics')
        .subscribe((comics) => {
          this.comics = [...comics];
        })
    );

    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'updatedComics', 'currentPage')
        .subscribe((currentPage) => {
          this.page = currentPage;
        })
    );

    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'updatedComics', 'totalPages')
        .subscribe((totalPages) => {
          this.totalPages = totalPages;
        })
    );
  }

  private getBoyData() {
    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'boyComics', 'comics')
        .subscribe((comics) => {
          this.comics = [...comics];
        })
    );

    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'boyComics', 'currentPage')
        .subscribe((currentPage) => {
          this.page = currentPage;
        })
    );

    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'boyComics', 'totalPages')
        .subscribe((totalPages) => {
          this.totalPages = totalPages;
        })
    );
  }

  private getGirlData() {
    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'girlComics', 'comics')
        .subscribe((comics) => {
          this.comics = [...comics];
        })
    );

    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'girlComics', 'currentPage')
        .subscribe((currentPage) => {
          this.page = currentPage;
        })
    );

    this.subscriptions.push(
      this.store
        .select('comic', 'promotionComics', 'girlComics', 'totalPages')
        .subscribe((totalPages) => {
          this.totalPages = totalPages;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub?.unsubscribe());
    this.store.dispatch(new ResetDataHomePage());
  }
}
