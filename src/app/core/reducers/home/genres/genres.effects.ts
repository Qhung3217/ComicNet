import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../app';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FETCH_GENRES, SetGenres } from './genres.action';
import { catchError, map, switchMap } from 'rxjs';
import { BASE_URL } from 'src/app/core/constants/server-api';
import { GenreDetail } from 'src/app/core/interfaces/base/genre-detail.interface';

@Injectable()
export class GenresEffects {
  fetchGenres = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_GENRES),
      switchMap(() => this.http.get<GenreDetail[]>(BASE_URL + 'genres')),
      map((genres) => new SetGenres(genres))
    )
  );

  constructor(
    private action$: Actions,
    private http: HttpClient,
    private store: Store<AppState>
  ) {}
}
