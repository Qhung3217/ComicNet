import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import {
  ComicAction,
  SET_COMIC_RESPONSE,
  SET_CURRENT_PAGE,
  SET_STATUS,
  SET_STATUS_AND_CURRENT_PAGE,
} from './comic.actions';

export interface ComicState {
  comics: Comic[];
  totalPages: number;
  currentPage: number;
  status: string;
}

const initialState = {
  comics: [],
  totalPages: 1,
  currentPage: 1,
  status: 'all',
};

export function comicReducer(
  state: ComicState = initialState,
  action: ComicAction
) {
  switch (action.type) {
    case SET_COMIC_RESPONSE:
      return {
        ...state,
        comics: [...action.payload.comics],
        totalPages: action.payload.total_pages,
        currentPage: action.payload.current_page,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: +action.payload,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case SET_STATUS_AND_CURRENT_PAGE:
      return {
        ...state,
        status: action.payload.status,
        currentPage: +action.payload.currentPage,
      };
    default:
      return state;
  }
}
