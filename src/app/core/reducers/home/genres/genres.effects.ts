import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api/api.service';
import { AppState } from '../../app';
import { FETCH_GENRES, SetGenres } from './genres.action';

@Injectable()
export class GenresEffects {
  fetchGenres = createEffect(() =>
    this.action$.pipe(
      ofType(FETCH_GENRES),
      switchMap(() => this.apiService.getGenres()),
      map((genres) => new SetGenres(genres))
    )
  );

  constructor(
    private action$: Actions,
    private apiService: ApiService,
    private store: Store<AppState>
  ) {}
}
