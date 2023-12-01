import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { forkJoin, map, switchMap, withLatestFrom } from 'rxjs';
import { ComicsResponse } from 'src/app/core/interfaces/api-response/comics-response.interface';
import { ApiService } from 'src/app/core/services/api/api.service';
import { AppState } from '../../app';
import {
  FETCH_BOY_COMIC,
  FETCH_COMICS_BY_GENRE_ID,
  FETCH_COMPLETED_COMIC,
  FETCH_DATA_HOME_PAGE,
  FETCH_GIRL_COMIC,
  FETCH_NEW_COMIC,
  FETCH_POPULAR_COMIC,
  FETCH_TOP_COMIC,
  FETCH_UPDATED_COMIC,
  FetchTopComic,
  SetBoyComic,
  SetComicResponse,
  SetCompletedComic,
  SetDataHomePage,
  SetGirlComic,
  SetPopularComic,
  SetUpdatedComic,
} from './comic.actions';

@Injectable()
export class ComicEffects {
  fetchComicByGenreId = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_COMICS_BY_GENRE_ID),
      withLatestFrom(this.store.select('genre'), this.store.select('comic')),
      switchMap(([actionData, genreState, comicState]) =>
        this.apiService.getComicsByGenreId(
          genreState.genreSelected!.id,
          comicState.currentPage,
          comicState.status
        )
      ),
      map((response: ComicsResponse) => new SetComicResponse(response))
    )
  );

  fetchNewComic = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_NEW_COMIC),
      withLatestFrom(this.store.select('comic')),
      switchMap(([actionData, comicState]) =>
        this.apiService.getNewComic(comicState.currentPage)
      ),
      map((response: ComicsResponse) => new SetComicResponse(response))
    )
  );

  fetchDataHomePage = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_DATA_HOME_PAGE),
      switchMap(() => {
        const recommends = this.apiService.getRecommendComics();
        const populars = this.apiService.getPopularComics();
        const updateds = this.apiService.getRecentUpdatedComics();
        const completeds = this.apiService.getCompletedComics();
        const boys = this.apiService.getBoyComics();
        const girls = this.apiService.getGirlComics();
        return forkJoin([
          recommends,
          populars,
          updateds,
          completeds,
          boys,
          girls,
        ]);
      }),
      map(
        ([recommends, populars, updateds, completeds, boys, girls]) =>
          new SetDataHomePage({
            recommendComics: recommends,
            popularComics: populars,
            completedComics: updateds,
            updatedComics: completeds,
            boyComics: boys,
            girlComics: girls,
          })
      )
    )
  );
  fetchPopularComic = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_POPULAR_COMIC),
      withLatestFrom(this.store.select('comic')),
      switchMap(([actionData, comicState]) =>
        this.apiService.getPopularComics(
          comicState.promotionComics.popularComics.currentPage
        )
      ),
      map((response: ComicsResponse) => new SetPopularComic(response))
    )
  );
  fetchCompletedComic = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_COMPLETED_COMIC),
      withLatestFrom(this.store.select('comic')),
      switchMap(([actionData, comicState]) =>
        this.apiService.getCompletedComics(
          comicState.promotionComics.completedComics.currentPage
        )
      ),
      map((response: ComicsResponse) => new SetCompletedComic(response))
    )
  );

  fetchBoyComic = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_BOY_COMIC),
      withLatestFrom(this.store.select('comic')),
      switchMap(([actionData, comicState]) =>
        this.apiService.getBoyComics(
          comicState.promotionComics.boyComics.currentPage
        )
      ),
      map((response: ComicsResponse) => new SetBoyComic(response))
    )
  );

  fetchGirlComic = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_GIRL_COMIC),
      withLatestFrom(this.store.select('comic')),
      switchMap(([actionData, comicState]) =>
        this.apiService.getGirlComics(
          comicState.promotionComics.girlComics.currentPage
        )
      ),
      map((response: ComicsResponse) => new SetGirlComic(response))
    )
  );

  fetchUpdatedComic = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_UPDATED_COMIC),
      withLatestFrom(this.store.select('comic')),
      switchMap(([actionData, comicState]) =>
        this.apiService.getRecentUpdatedComics(
          comicState.promotionComics.updatedComics.currentPage
        )
      ),
      map((response: ComicsResponse) => new SetUpdatedComic(response))
    )
  );
  fetchTopComic = createEffect(() =>
    this.action$.pipe(
      ofType<FetchTopComic>(FETCH_TOP_COMIC),
      switchMap((action) => this.apiService.getTopComic(action.payload)),
      map((response: ComicsResponse) => new SetComicResponse(response))
    )
  );
  constructor(
    private action$: Actions,
    private apiService: ApiService,
    private store: Store<AppState>
  ) {}
}
