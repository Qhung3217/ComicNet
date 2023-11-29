import { Action } from '@ngrx/store';
import { ComicsResponse } from 'src/app/core/interfaces/api-response/comics-response.interface';
import { ComicRecommend } from 'src/app/core/interfaces/base/comic-recommend.interface';

export const FETCH_COMICS_BY_GENRE_ID =
  '[FETCH_COMICS_BY_GENRE_ID] Fetch comics by genre id';
export const FETCH_DATA_HOME_PAGE =
  '[FETCH_DATA_HOME_PAGE] Fetch data home page';

export const SET_COMIC_RESPONSE = '[SET_COMIC_RESPONSE] Set comic response';
export const SET_DATA_HOME_PAGE = '[SET_DATA_HOME_PAGE] Set data home page';
export const SET_CURRENT_PAGE = '[SET_CURRENT_PAGE] Set current page';
export const SET_STATUS = '[SET_STATUS] Set status';
export const SET_STATUS_AND_CURRENT_PAGE =
  '[SET_STATUS_AND_CURRENCE_PAGE] Set status and current page';

export class FetchComicsByGenreId implements Action {
  readonly type = FETCH_COMICS_BY_GENRE_ID;
  constructor() {}
}

export class FetchDataHomePage implements Action {
  readonly type = FETCH_DATA_HOME_PAGE;
  constructor() {}
}

export class SetComicResponse implements Action {
  readonly type = SET_COMIC_RESPONSE;
  constructor(public payload: ComicsResponse) {}
}

export class SetDataHomePage implements Action {
  readonly type = SET_DATA_HOME_PAGE;
  constructor(
    public payload: {
      recommendComics: ComicRecommend[];
      popularComics: ComicsResponse;
      completedComics: ComicsResponse;
      updatedComics: ComicsResponse;
      boyComics: ComicsResponse;
      girlComics: ComicsResponse;
    }
  ) {}
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
  | SetCurrentPage
  | SetStatus
  | SetStatusAndCurrentPage
  | SetDataHomePage;
