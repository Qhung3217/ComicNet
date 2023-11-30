import { Action } from '@ngrx/store';
import { ComicsResponse } from 'src/app/core/interfaces/api-response/comics-response.interface';
import { ComicRecommend } from 'src/app/core/interfaces/base/comic-recommend.interface';

export const FETCH_COMICS_BY_GENRE_ID =
  '[FETCH_COMICS_BY_GENRE_ID] Fetch comics by genre id';
export const FETCH_NEW_COMIC = '[FETCH_NEW_COMIC] Fetch new comic';
export const FETCH_DATA_HOME_PAGE =
  '[FETCH_DATA_HOME_PAGE] Fetch data home page';
export const FETCH_POPULAR_COMIC = '[FETCH_POPULAR_COMIC] Fetch popular comic';
export const FETCH_UPDATED_COMIC = '[FETCH_UPDATED_COMIC] Fetch update comic';
export const FETCH_COMPLETED_COMIC =
  '[FETCH_COMPLETED_COMIC] Fetch completed comic';
export const FETCH_BOY_COMIC = '[FETCH_BOY_COMIC] Fetch boy comic';
export const FETCH_GIRL_COMIC = '[FETCH_GIRL_COMIC] Fetch girl comic';

export const SET_COMIC_RESPONSE = '[SET_COMIC_RESPONSE] Set comic response';
export const SET_DATA_HOME_PAGE = '[SET_DATA_HOME_PAGE] Set data home page';
export const SET_POPULAR_COMIC = '[SET_POPULAR_COMIC] Set popular comic';
export const SET_COMPLETED_COMIC = '[SET_COMPLETED_COMIC] Set completed comic';
export const SET_BOY_COMIC = '[SET_BOY_COMIC] Set boy comic';
export const SET_GIRL_COMIC = '[SET_GIRL_COMIC] Set girl comic';
export const SET_UPDATED_COMIC = '[SET_UPDATED_COMIC] Set updated comic';
export const SET_CURRENT_PAGE = '[SET_CURRENT_PAGE] Set current page';
export const SET_STATUS = '[SET_STATUS] Set status';
export const SET_STATUS_AND_CURRENT_PAGE =
  '[SET_STATUS_AND_CURRENCE_PAGE] Set status and current page';

export class FetchComicsByGenreId implements Action {
  readonly type = FETCH_COMICS_BY_GENRE_ID;
  constructor() {}
}

export class FetchNewComic implements Action {
  readonly type = FETCH_NEW_COMIC;
  constructor() {}
}

export class FetchDataHomePage implements Action {
  readonly type = FETCH_DATA_HOME_PAGE;
  constructor() {}
}

export class FetchPopularComic implements Action {
  readonly type = FETCH_POPULAR_COMIC;
  constructor() {}
}

export class FetchCompletedComic implements Action {
  readonly type = FETCH_COMPLETED_COMIC;
  constructor() {}
}

export class FetchUpdatedComic implements Action {
  readonly type = FETCH_UPDATED_COMIC;
  constructor() {}
}

export class FetchBoyComic implements Action {
  readonly type = FETCH_BOY_COMIC;
  constructor() {}
}

export class FetchGirlComic implements Action {
  readonly type = FETCH_GIRL_COMIC;
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

export class SetPopularComic implements Action {
  readonly type = SET_POPULAR_COMIC;
  constructor(public payload: ComicsResponse) {}
}
export class SetCompletedComic implements Action {
  readonly type = SET_COMPLETED_COMIC;
  constructor(public payload: ComicsResponse) {}
}

export class SetBoyComic implements Action {
  readonly type = SET_BOY_COMIC;
  constructor(public payload: ComicsResponse) {}
}

export class SetGirlComic implements Action {
  readonly type = SET_GIRL_COMIC;
  constructor(public payload: ComicsResponse) {}
}

export class SetUpdatedComic implements Action {
  readonly type = SET_UPDATED_COMIC;
  constructor(public payload: ComicsResponse) {}
}
export class SetCurrentPage implements Action {
  readonly type = SET_CURRENT_PAGE;
  constructor(
    public payload: {
      page: number;
      category:
        | 'default'
        | 'popular'
        | 'completed'
        | 'updated'
        | 'boy'
        | 'girl';
    }
  ) {}
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
  | SetDataHomePage
  | SetBoyComic
  | SetGirlComic
  | SetPopularComic
  | SetUpdatedComic
  | SetCompletedComic;
