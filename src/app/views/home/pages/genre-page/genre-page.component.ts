import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, distinctUntilChanged, map } from 'rxjs';
import { GenreDetail } from 'src/app/core/interfaces/base/genre-detail.interface';
import { AppState } from 'src/app/core/reducers/app';
import {
  ComicState,
  FetchComicsByGenreId,
  SetCurrentPage,
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
  genres!: GenreDetail[];
  genreSelected?: GenreDetail;
  comicsByGenreId?: ComicState;
  subcriptions: Subscription[] = [];
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.initialSetup();
  }
  ngOnDestroy(): void {
    this.subcriptions.forEach((sub) => sub?.unsubscribe());
  }
  onPageChanged(page: number): void {
    this.store.dispatch(new SetCurrentPage(page));
    this.store.dispatch(new FetchComicsByGenreId());
  }
  private initialSetup() {
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
            this.setGenreSelected(genres);
          } else this.store.dispatch(new FetchGenres());
        })
    );
  }
  private setGenreSelected(genres: GenreDetail[]) {
    this.subcriptions.push(
      this.route.params.subscribe((params: Params) => {
        let genreId = Object.values(params)[0];
        console.log('genreId', genreId, params);
        this.genreSelected = genres.find((genre) => genre.id === genreId);
        if (this.genreSelected) {
          this.store.dispatch(new SetGenreSelected(this.genreSelected));
          this.store.dispatch(new FetchComicsByGenreId());
          this.setComicsByGenreId();
        }
      })
    );
  }
  private setComicsByGenreId() {
    this.subcriptions.push(
      this.store
        .select('comic')
        .pipe(distinctUntilChanged())
        .subscribe((comicState) => {
          this.comicsByGenreId = { ...comicState };
        })
    );
  }
}
