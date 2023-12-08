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
import { SeoService } from 'src/app/core/services/seo/seo.service';

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
    private router: Router,
    private seoService: SeoService
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
            this.seoData();
            this.isLoading = true;
            this.store.dispatch(
              new FetchDataSearchComicPage({
                query,
                page,
              })
            );
          } else {
            this.router.navigate(['/the-loai/all'], {
              queryParams: {
                page: 1,
                status: 'all',
              },
            });
          }
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

  private seoData() {
    const title = 'Tìm truyện tranh - ' + this.query + ' - Trang ' + this.page;
    const des =
      'Khám phá một thế giới truyện tranh được tùy chỉnh theo sở thích của bạn! Khám phá kết quả tìm kiếm của chúng tôi cho từ khóa bạn nhập. Đắm chìm mình vào những câu chuyện cuốn hút, nghệ thuật đẹp mắt và những cuộc phiêu lưu hồi hộp. Tìm kiếm truyện tranh hoàn hảo phù hợp với sở thích của bạn. Bắt đầu hành trình của bạn ngay bây giờ! #Comics #SearchResults';
    this.seoService.setSeoData(title, des);
  }
}
