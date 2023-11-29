import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { forkJoin, map, switchMap, withLatestFrom } from 'rxjs';
import { ComicsResponse } from 'src/app/core/interfaces/api-response/comics-response.interface';
import { ApiService } from 'src/app/core/services/api/api.service';
import { AppState } from '../../app';
import {
  FETCH_COMICS_BY_GENRE_ID,
  FETCH_DATA_HOME_PAGE,
  SetComicResponse,
  SetDataHomePage,
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

  constructor(
    private action$: Actions,
    private apiService: ApiService,
    private store: Store<AppState>
  ) {}
}
