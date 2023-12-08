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
import { SeoService } from 'src/app/core/services/seo/seo.service';

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
    private router: Router,
    private seoService: SeoService
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
          this.seoData();
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
  private seoData() {
    let des = '';
    switch (this.title) {
      case 'Truyện nổi bật':
        des =
          'Đắm chìm vào bộ truyện tranh hàng đầu của chúng tôi để trải nghiệm những cuộc phiêu lưu hồi hộp, những đoạn hài hước đầy thú vị và những tác phẩm nghệ thuật đẹp mắt. Hãy cùng những nhân vật đáng yêu tham gia vào những hành trình huyền bí. Bắt đầu đọc ngay bây giờ! #Comics #Adventure #Humor #Webcomics';
        this.seoService.setSeoData('Truyện nổi bật - Trang' + this.page, des);
        return;

      case 'Truyện hoàn thành':
        des =
          'Khám phá thế giới của bộ truyện tranh hoàn chỉnh của chúng tôi! Tận hưởng sự hài lòng từ một câu chuyện đã hoàn tất, đầy những cuộc phiêu lưu hồi hộp, những đoạn hài hước thú vị và những tác phẩm nghệ thuật tuyệt vời. Đắm chìm vào toàn bộ bộ sưu tập ngay bây giờ.#Comics #CompletedSeries';
        this.seoService.setSeoData(
          'Truyện hoàn thành - Trang' + this.page,
          des
        );
        return;

      case 'Truyện mới cập nhật':
        des =
          'Khám phá những cập nhật mới nhất trong bộ truyện tranh hấp dẫn của chúng tôi! Đắm chìm vào những trang mới nhất đầy cuộc phiêu lưu hứng khởi, những đoạn hài hước thú vị và nghệ thuật quyến rũ. Cập nhật thông tin về hành trình của nhân vật và khám phá nội dung mới nhất ngay bây giờ! #Comics #LatestUpdate #Adventure #Humor';
        this.seoService.setSeoData(
          'Truyện hoàn thành - Trang' + this.page,
          des
        );
        return;

      case 'Truyện nam':
        des =
          'Trải nghiệm cuộc phiêu lưu tuyệt vời nhất trong bộ truyện tranh tập trung vào chàng trai của chúng tôi! Hãy tham gia cùng những nam chính trong những hành trình hồi hộp đầy kịch tính, hài hước và câu chuyện cuốn hút. Đắm chìm mình vào một thế giới nơi truyện tranh thuộc về các chàng trai. Bắt đầu đọc ngay bây giờ! #BoyComics #Adventure #Humor #MaleAudience';
        this.seoService.setSeoData('Truyện nam - Trang' + this.page, des);
        return;

      case 'Truyện nữ':
        des =
          'Đắm chìm mình vào thế giới quyến rũ của bộ truyện tranh tập trung vào các cô gái của chúng tôi! Theo dõi những hành trình của các nữ chính qua những cuộc phiêu lưu, những đoạn hài hước và câu chuyện cuốn hút. Trải nghiệm một thế giới truyện tranh được tạo ra đặc biệt cho các cô gái. Bắt đầu đọc ngay bây giờ! #GirlComics #Adventure #Humor #FemaleAudience';
        this.seoService.setSeoData('Truyện nữ - Trang' + this.page, des);
        return;

      default:
        des =
          'Đắm chìm vào bộ truyện tranh hàng đầu của chúng tôi để trải nghiệm những cuộc phiêu lưu hồi hộp, những đoạn hài hước đầy thú vị và những tác phẩm nghệ thuật đẹp mắt. Hãy cùng những nhân vật đáng yêu tham gia vào những hành trình huyền bí. Bắt đầu đọc ngay bây giờ! #Comics #Adventure #Humor #Webcomics';
        this.seoService.setSeoData('Truyện nổi bật - Trang' + this.page, des);
    }
  }
}
