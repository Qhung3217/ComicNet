import { Action } from '@ngrx/store';
import { ComicsResponse } from 'src/app/core/interfaces/api-response/comics-response.interface';
import { ComicRecommend } from 'src/app/core/interfaces/base/comic-recommend.interface';

export const FETCH_COMICS_BY_GENRE_ID =
  '[FETCH_COMICS_BY_GENRE_ID] Fetch comics by genre id';
export const FETCH_RECOMMEND_COMICS =
  '[FETCH_RECOMMEND_COMICS] Fetch recommend comics';
export const SET_COMIC_RESPONSE = '[SET_COMIC_RESPONSE] Set comic response';
export const SET_RECOMMEND_COMICS =
  '[SET_RECOMMEND_COMICS] Set recommend comics';
export const SET_CURRENT_PAGE = '[SET_CURRENT_PAGE] Set current page';
export const SET_STATUS = '[SET_STATUS] Set status';
export const SET_STATUS_AND_CURRENT_PAGE =
  '[SET_STATUS_AND_CURRENCE_PAGE] Set status and current page';

export class FetchComicsByGenreId implements Action {
  readonly type = FETCH_COMICS_BY_GENRE_ID;
  constructor() {}
}

export class FetchRecommendComics implements Action {
  readonly type = FETCH_RECOMMEND_COMICS;
  constructor() {}
}

export class SetComicResponse implements Action {
  readonly type = SET_COMIC_RESPONSE;
  constructor(public payload: ComicsResponse) {}
}

export class SetRecommendComics implements Action {
  readonly type = SET_RECOMMEND_COMICS;
  constructor(public payload: ComicRecommend[]) {}
}

export class SetCurrentPage implements Action {
  readonly type = SET_CURRENT_PAGE;
  constructor(public payload: number) {}
}
export class SetStatus implements Action {
  readonly type = SET_STATUS;
  constructor(public payload: string) {}
}
export class SetStatusAndCurrentPage implements Action {
  readonly type = SET_STATUS_AND_CURRENT_PAGE;
  constructor(
    public payload: {
      status: string;
      currentPage: number;
    }
  ) {}
}

export type ComicAction =
  | SetComicResponse
  | SetRecommendComics
  | SetCurrentPage
  | SetStatus
  | SetStatusAndCurrentPage;
