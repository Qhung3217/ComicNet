import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { ComicsResponse } from 'src/app/core/interfaces/api-response/comics-response.interface';
import { ApiService } from 'src/app/core/services/api/api.service';
import { AppState } from '../../app';
import {
  FETCH_COMICS_BY_GENRE_ID,
  FETCH_RECOMMEND_COMICS,
  SetComicResponse,
  SetRecommendComics,
} from './comic.actions';
import { ComicRecommend } from 'src/app/core/interfaces/base/comic-recommend.interface';

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

  fetchRecommendComics = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_RECOMMEND_COMICS),
      switchMap(() => this.apiService.getRecommendComics()),
      map((response: ComicRecommend[]) => new SetRecommendComics(response))
    )
  );

  constructor(
    private action$: Actions,
    private apiService: ApiService,
    private store: Store<AppState>
  ) {}
}
