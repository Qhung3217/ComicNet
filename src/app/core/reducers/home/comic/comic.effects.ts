import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppState } from '../../app';
import { Store } from '@ngrx/store';
import { FETCH_COMICS_BY_GENRE_ID, SetComicResponse } from './comic.actions';
import { combineLatest, map, switchMap, tap, withLatestFrom } from 'rxjs';
import { BASE_URL } from 'src/app/core/constants/server-api';
import { ComicsResponse } from 'src/app/core/interfaces/api-response/comics-response.interface';

@Injectable()
export class ComicEffects {
  fetchComicByGenreId = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_COMICS_BY_GENRE_ID),
      withLatestFrom(this.store.select('genre'), this.store.select('comic')),
      switchMap(([actionData, genreState, comicState]) => {
        const params = new HttpParams().set('page', comicState.currentPage);
        return this.http.get<ComicsResponse>(
          BASE_URL + 'genres/' + genreState.genreSelected!.id,
          {
            params: params,
          }
        );
      }),
      map((response: ComicsResponse) => new SetComicResponse(response))
    )
  );

  constructor(
    private action$: Actions,
    private http: HttpClient,
    private store: Store<AppState>
  ) {}
}
