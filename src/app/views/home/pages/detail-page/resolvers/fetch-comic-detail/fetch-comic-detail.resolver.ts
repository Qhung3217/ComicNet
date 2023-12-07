import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, switchMap, take } from 'rxjs';
import { ComicDetail } from 'src/app/core/interfaces/base/comic-detail.interface';
import {
  FetchComicDetail,
  SET_COMIC_DETAIL,
} from 'src/app/core/reducers/home/comic';
import { AppState } from './../../../../../../core/reducers/app/app.reducer';

export const FetchComicDetailResolver: ResolveFn<ComicDetail | null> = (
  route,
  state
) => {
  const comicSlug = route.paramMap.get('comic-slug');
  const store: Store<AppState> = inject(Store<AppState>);
  const action$: Actions = inject(Actions);
  console.log(comicSlug);
  return store.select('comic', 'comicDetail').pipe(
    take(1),
    switchMap((comicDetail) => {
      if (comicSlug != null) {
        if (comicDetail === undefined || comicDetail?.id !== comicSlug) {
          store.dispatch(new FetchComicDetail(comicSlug));
          return action$.pipe(ofType(SET_COMIC_DETAIL), take(1));
        }
        return of(comicDetail);
      }
      return of(comicDetail);
    })
  );
};
