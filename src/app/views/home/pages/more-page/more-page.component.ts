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
  SetCurrentPage,
} from 'src/app/core/reducers/home/comic';

@Component({
  selector: 'app-more-page',
  templateUrl: './more-page.component.html',
  styleUrls: ['./more-page.component.scss'],
})
export class MorePageComponent implements OnInit, OnDestroy {
  @Input() title:
    | 'Truyện nỗi bật'
    | 'Truyện hoàn thành'
    | 'Truyện mới cập nhật'
    | 'Truyện nam'
    | 'Truyện nữ' = 'Truyện nỗi bật';
  page: number = 1;
  subcriptions: Subscription[] = [];
  isLoading = false;
  comics: Comic[] = [];
  totalPages: number = 1;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.retrievePageFromUrl();
  }

  ngOnInit(): void {
    this.retrieveTitleFromUrl();
    this.getData();
  }

  private retrievePageFromUrl() {
    this.subcriptions.push(
      this.route.queryParams.subscribe((params: Params) => {
        const page = +params['page'];
        if (page) {
          this.page = page;
          this.onPageChanged(this.page);
          console.log(page);
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
    const category = this.route.snapshot.paramMap.get('category');
    console.log('category: ', category);

    switch (category) {
      case 'completed':
        this.title = 'Truyện hoàn thành';
        return;
      case 'popular':
        this.title = 'Truyện nỗi bật';
        return;
      case 'updated':
        this.title = 'Truyện mới cập nhật';
        return;
      case 'boy':
        this.title = 'Truyện nam';
        return;
      case 'girl':
        this.title = 'Truyện nữ';
        return;
      default:
        this.showError();
    }
  }

  private getData() {
    switch (this.title) {
      case 'Truyện nỗi bật':
        this.subcriptions.push(
          this.store.select('comic').subscribe((state) => {
            this.comics = [...state.promotionComics.popularComics.comics];
            this.page = state.promotionComics.popularComics.currentPage;
            this.totalPages = state.promotionComics.popularComics.totalPages;
          })
        );
        return;

      case 'Truyện hoàn thành':
        this.subcriptions.push(
          this.store.select('comic').subscribe((state) => {
            this.comics = [...state.promotionComics.completedComics.comics];
            this.page = state.promotionComics.completedComics.currentPage;
            this.totalPages = state.promotionComics.completedComics.totalPages;
          })
        );
        return;

      case 'Truyện mới cập nhật':
        this.subcriptions.push(
          this.store.select('comic').subscribe((state) => {
            this.comics = [...state.promotionComics.updatedComics.comics];
            this.page = state.promotionComics.updatedComics.currentPage;
            this.totalPages = state.promotionComics.updatedComics.totalPages;
          })
        );
        return;

      case 'Truyện nam':
        this.subcriptions.push(
          this.store.select('comic').subscribe((state) => {
            this.comics = [...state.promotionComics.boyComics.comics];
            this.page = state.promotionComics.boyComics.currentPage;
            this.totalPages = state.promotionComics.boyComics.totalPages;
          })
        );
        return;

      case 'Truyện nữ':
        this.subcriptions.push(
          this.store.select('comic').subscribe((state) => {
            this.comics = [...state.promotionComics.girlComics.comics];
            this.page = state.promotionComics.girlComics.currentPage;
            this.totalPages = state.promotionComics.girlComics.totalPages;
          })
        );
        return;

      default:
        this.showError();
    }
  }
  private fetchData() {
    switch (this.title) {
      case 'Truyện nỗi bật':
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
      case 'Truyện nỗi bật':
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
  ngOnDestroy(): void {
    this.subcriptions.forEach((sub) => sub?.unsubscribe());
  }
}
