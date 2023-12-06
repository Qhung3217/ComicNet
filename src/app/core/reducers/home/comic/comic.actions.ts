import { Action } from '@ngrx/store';
import { ComicsResponse } from 'src/app/core/interfaces/api-response/comics-response.interface';
import { ComicDetail } from 'src/app/core/interfaces/base/comic-detail.interface';
import { ComicRecommend } from 'src/app/core/interfaces/base/comic-recommend.interface';
import { SingleChapterResponse } from './../../../interfaces/api-response/single-chapter-response.interface';
import { TopComicRequest } from './../../../interfaces/top-comic-request.interface';
import { ChapterRequest } from 'src/app/core/interfaces/chapter-request.interface';
import { SearchRequest } from 'src/app/core/interfaces/search-request.interface';

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
export const FETCH_TOP_COMIC = '[FETCH_TOP_COMIC] Fetch top comic';
export const FETCH_COMIC_DETAIL = '[FETCH_COMIC_DETAIL] Fetch comic detail';
export const FETCH_CHAPTER = '[FETCH_CHAPTER] Fetch chapter';
export const FETCH_SEARCH_COMIC = '[FETCH_SEARCH_COMIC] Fetch search comic';
export const FETCH_DATA_SEARCH_COMIC_PAGE =
  '[FETCH_DATA_SEARCH_COMIC_PAGE] Fetch data search comic page';

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
export const RESET_COMIC_RESPONSE =
  '[RESET_COMIC_RESPONSE] Reset comic response';
export const SET_COMIC_DETAIL = '[SET_COMIC_DETAIL] Set comic detail';
export const SET_CHAPTER_RESPONSE =
  '[SET_CHAPTER_RESPONSE] Set chapter response';
export const SET_SEARCH_COMIC = '[SET_SEARCH_COMIC] Set search comic';
export const RESET_SEARCH_COMIC = '[RESET_SEARCH_COMIC] Reset search comic';

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

export class FetchTopComic implements Action {
  readonly type = FETCH_TOP_COMIC;
  constructor(
    public payload: TopComicRequest = {
      topDuration: 'all',
      page: 1,
      status: 'all',
    }
  ) {}
}

export class FetchGirlComic implements Action {
  readonly type = FETCH_GIRL_COMIC;
  constructor() {}
}

export class FetchComicDetail implements Action {
  readonly type = FETCH_COMIC_DETAIL;
  constructor(public payload: string) {}
}

export class FetchChapter implements Action {
  readonly type = FETCH_CHAPTER;
  constructor(public payload: ChapterRequest) {}
}

export class FetchSearchComic implements Action {
  readonly type = FETCH_SEARCH_COMIC;
  constructor(public payload: SearchRequest) {}
}

export class FetchDataSearchComicPage implements Action {
  readonly type = FETCH_DATA_SEARCH_COMIC_PAGE;
  constructor(public payload: SearchRequest) {}
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
export class ResetComicResponse implements Action {
  readonly type = RESET_COMIC_RESPONSE;
  constructor() {}
}

export class SetComicDetail implements Action {
  readonly type = SET_COMIC_DETAIL;
  constructor(public payload: ComicDetail) {}
}

export class SetChapter implements Action {
  readonly type = SET_CHAPTER_RESPONSE;
  constructor(public payload: SingleChapterResponse) {}
}

export class SetSearchComic implements Action {
  readonly type = SET_SEARCH_COMIC;
  constructor(public payload: ComicsResponse) {}
}

export class ResetSearchComic implements Action {
  readonly type = RESET_SEARCH_COMIC;
  constructor() {}
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
  | SetCompletedComic
  | ResetComicResponse
  | SetComicDetail
  | SetChapter
  | SetSearchComic
  | ResetSearchComic;
