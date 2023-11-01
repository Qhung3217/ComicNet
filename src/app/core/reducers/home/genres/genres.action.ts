import { Action } from '@ngrx/store';

export const FETCH_GENRES = '[FETCH_GENRES] Fetch genres';
export const FETCH_COMICS_BY_GENRE =
  '[FETCH_COMICS_BY_GENRE] Fetch comics by genre';

export class FetchGenres implements Action {
  readonly type = FETCH_GENRES;
  constructor() {}
}

export class FetchComicsByGenre implements Action {
  readonly type = FETCH_COMICS_BY_GENRE;
  constructor(public payload: string) {}
}

export type GenresAction = FetchGenres | FetchComicsByGenre;
