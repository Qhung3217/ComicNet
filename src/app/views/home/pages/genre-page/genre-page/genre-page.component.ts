import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, distinctUntilChanged, map, tap } from 'rxjs';
import { GenreDetail } from 'src/app/core/interfaces/base/genre-detail.interface';
import { AppState } from 'src/app/core/reducers/app';
import {
  ComicState,
  FetchComicsByGenreId,
  SetCurrentPage,
  SetStatus,
  SetStatusAndCurrentPage,
} from 'src/app/core/reducers/home/comic';
import {
  FetchGenres,
  SetGenreSelected,
} from 'src/app/core/reducers/home/genres';

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
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
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
  }

  private onRouterNavigateEnd() {
    this.subcriptions.push(
      this.router.events.subscribe((event) => {
        // console.log('router all event ', event);
        if (event instanceof NavigationEnd) {
          console.log('router event ', event, this.genreSelected);
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
            console.log('fetchSub callback');
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
        console.log('genreId', this.genreId, params);
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
          console.log('loading in set comics:', this.isLoading);

          this.comicsByGenreId = { ...comicState };
        })
    );
  }
  private setStatusAndPage() {
    this.subcriptions.push(
      this.route.queryParams.subscribe((params) => {
        const page = +params['page'];
        const status = params['status'];
        if (
          status !== this.comicsByGenreId?.status &&
          page !== this.comicsByGenreId?.currentPage
        )
          this.store.dispatch(
            new SetStatusAndCurrentPage({ status: status, currentPage: page })
          );
        else if (status !== this.comicsByGenreId?.status) {
          this.removeComics();
          this.store.dispatch(new SetStatus(status));
        } else if (page !== this.comicsByGenreId?.currentPage)
          this.store.dispatch(
            new SetCurrentPage({ page: page, category: 'default' })
          );
      })
    );
  }
  private setGenreSelected() {
    this.genreSelected = this.genres?.find(
      (genre) => genre.id === this.genreId
    );
    if (this.genreSelected) {
      this.store.dispatch(new SetGenreSelected(this.genreSelected));
      if (!this.comicsByGenreId || this.comicsByGenreId.comics.length === 0) {
        this.isLoading = true;
        this.store.dispatch(new FetchComicsByGenreId());
      }
    }
  }
  private removeComics() {
    if (this.comicsByGenreId) this.comicsByGenreId.comics = [];
  }
}
