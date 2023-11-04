import { Action } from '@ngrx/store';
import { ComicsResponse } from 'src/app/core/interfaces/api-response/comics-response.interface';

export const FETCH_COMICS_BY_GENRE_ID =
  '[FETCH_COMICS_BY_GENRE_ID] Fetch comics by genre id';
export const SET_COMIC_RESPONSE = '[SET_COMIC_RESPONSE] Set comic response';
export const SET_CURRENT_PAGE = '[SET_CURRENT_PAGE] Set current page';

export class FetchComicsByGenreId implements Action {
  readonly type = FETCH_COMICS_BY_GENRE_ID;
  constructor() {}
}

export class SetComicResponse implements Action {
  readonly type = SET_COMIC_RESPONSE;
  constructor(public payload: ComicsResponse) {}
}

export class SetCurrentPage implements Action {
  readonly type = SET_CURRENT_PAGE;
  constructor(public payload: number) {}
}

export type ComicAction = SetComicResponse | SetCurrentPage;
