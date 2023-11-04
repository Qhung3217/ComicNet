import { Action } from '@ngrx/store';
import { GenreDetail } from 'src/app/core/interfaces/base/genre-detail.interface';

export const SET_GENRES = '[SET_GENRES] Set genres';
export const SET_GENRES_SELECTED = '[SET_GENRES_SELECTED] Set genres selected';
export const FETCH_GENRES = '[FETCH_GENRES] Fetch genres';
// export const FETCH_COMICS_BY_GENRE =
//   '[FETCH_COMICS_BY_GENRE] Fetch comics by genre';

export class FetchGenres implements Action {
  readonly type = FETCH_GENRES;
  constructor() {}
}

// export class FetchComicsByGenre implements Action {
//   readonly type = FETCH_COMICS_BY_GENRE;
//   constructor(public payload: string) {}
// }

export class SetGenres implements Action {
  readonly type = SET_GENRES;
  constructor(public payload: GenreDetail[]) {}
}

export class SetGenreSelected implements Action {
  readonly type = SET_GENRES_SELECTED;
  constructor(public payload: GenreDetail) {}
}

export type GenresAction = SetGenres | SetGenreSelected;
