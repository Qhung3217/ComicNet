import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, distinctUntilChanged, map, tap } from 'rxjs';
import { GenreDetail } from 'src/app/core/interfaces/base/genre-detail.interface';
import { AppState } from 'src/app/core/reducers/app';
import {
  ComicState,
  FetchComicsByGenreId,
  ResetComicResponse,
  SetCurrentPage,
  SetStatus,
  SetStatusAndCurrentPage,
} from 'src/app/core/reducers/home/comic';
import {
  FetchGenres,
  SetGenreSelected,
} from 'src/app/core/reducers/home/genres';
import { ErrorService } from 'src/app/core/services/error/error.service';
import { SeoService } from 'src/app/core/services/seo/seo.service';
import { Status } from 'src/app/core/types/status.type';

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.scss'],
})
export class GenrePageComponent implements OnInit, OnDestroy {
  genres?: GenreDetail[];
  genreSelected?: GenreDetail;
  comicsByGenreId?: ComicState;
  genreId?: string;
  subcriptions: Subscription[] = [];
  isLoading = true;
  isActiveLinkInStatus = false;
  isGenreActive = false;
  page = 1;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private errorService: ErrorService,
    private seoService: SeoService
  ) {}
  ngOnInit(): void {
    this.setGenres();
    this.setStatusAndPage();
    this.obsRouteGenreId();
    this.onRouterNavigateEnd();
    this.setComicsByGenreId();
  }

  ngOnDestroy(): void {
    this.subcriptions.forEach((sub) => sub?.unsubscribe());
    if (this.comicsByGenreId && this.comicsByGenreId?.comics.length > 0)
      this.store.dispatch(new ResetComicResponse());
  }

  private onRouterNavigateEnd() {
    this.subcriptions.push(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (this.genreSelected) {
            this.removeComics();
            this.store.dispatch(new FetchComicsByGenreId());
          }
        }
      })
    );
  }
  private setGenres() {
    this.subcriptions.push(
      this.store
        .select('genre')
        .pipe(
          map((genreState) => genreState.genres),
          distinctUntilChanged()
        )
        .subscribe((genres) => {
          if (genres && genres.length > 0) {
            this.genres = [...genres];
            this.setGenreSelected();
          } else this.store.dispatch(new FetchGenres());
        })
    );
  }
  private obsRouteGenreId() {
    this.subcriptions.push(
      this.route.params.subscribe((params: Params) => {
        this.isLoading = true;
        this.genreId = Object.values(params)[0];
        this.setGenreSelected();
      })
    );
  }
  private setComicsByGenreId() {
    this.subcriptions.push(
      this.store
        .select('comic')
        .pipe(
          distinctUntilChanged(),
          tap(() => (this.isLoading = false))
        )
        .subscribe((comicState) => {
          this.comicsByGenreId = { ...comicState };
          this.seoData();
        })
    );
  }
  private setStatusAndPage() {
    this.subcriptions.push(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'];
        const status = params['status'];
        this.maintainParams(page, status);
        if (
          status !== this.comicsByGenreId?.status &&
          page !== this.comicsByGenreId?.currentPage
        ) {
          this.page = page;
          this.store.dispatch(
            new SetStatusAndCurrentPage({ status: status, currentPage: page })
          );
        } else if (status !== this.comicsByGenreId?.status) {
          this.removeComics();
          this.store.dispatch(new SetStatus(status));
        } else if (page !== this.comicsByGenreId?.currentPage)
          this.store.dispatch(
            new SetCurrentPage({ page: page, category: 'default' })
          );
      })
    );
  }
  private maintainParams(page: number, status: Status) {
    switch (status) {
      case 'all':
        status = 'all';
        break;
      case 'completed':
        status = 'completed';
        break;
      case 'ongoing':
        status = 'ongoing';
        break;
      default:
        status = 'all';
    }

    if (!page)
      this.router.navigate([], {
        queryParams: {
          status: status,
          page: page ? page : 1,
        },
        queryParamsHandling: 'merge',
      });
  }
  private setGenreSelected() {
    if (!this.genres || this.genres.length === 0) return;
    this.genreSelected = this.genres?.find(
      (genre) => genre.id === this.genreId
    );

    if (this.genreSelected) {
      this.store.dispatch(new SetGenreSelected(this.genreSelected));
      if (!this.comicsByGenreId || this.comicsByGenreId.comics.length === 0) {
        this.isLoading = true;
        this.store.dispatch(new FetchComicsByGenreId());
      }
    } else {
      this.errorService.errorCode = 404;
      this.errorService.message = 'Thể loại không tồn tại';
      this.errorService.redirectToErrorPage();
    }
  }
  private removeComics() {
    if (this.comicsByGenreId) this.comicsByGenreId.comics = [];
  }
  private seoData() {
    if (this.genreSelected) {
      const title = this.genreSelected.name + ' - ' + 'Trang ' + this.page;
      const des =
        'Truyện tranh thuộc thể loại ' +
        this.genreSelected.name +
        ' - ' +
        this.genreSelected.description;
      this.seoService.setSeoData(title, des);
    }
  }
}
