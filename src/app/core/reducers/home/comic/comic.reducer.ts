import { ComicsResponse } from 'src/app/core/interfaces/api-response/comics-response.interface';
import { SingleChapterResponse } from 'src/app/core/interfaces/api-response/single-chapter-response.interface';
import { ComicDetail } from 'src/app/core/interfaces/base/comic-detail.interface';
import { ComicRecommend } from 'src/app/core/interfaces/base/comic-recommend.interface';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import {
  ComicAction,
  RESET_COMIC_RESPONSE,
  RESET_DATA_HOME_PAGE,
  RESET_SEARCH_COMIC,
  SET_BOY_COMIC,
  SET_CHAPTER_RESPONSE,
  SET_COMIC_DETAIL,
  SET_COMIC_RESPONSE,
  SET_COMPLETED_COMIC,
  SET_CURRENT_PAGE,
  SET_DATA_HOME_PAGE,
  SET_GIRL_COMIC,
  SET_POPULAR_COMIC,
  SET_SEARCH_COMIC,
  SET_STATUS,
  SET_STATUS_AND_CURRENT_PAGE,
  SET_UPDATED_COMIC,
} from './comic.actions';

export interface ComicState {
  comics: Comic[];
  totalPages: number;
  currentPage: number;
  searchComics: ComicsResponse;
  status: string;
  comicDetail: ComicDetail | null;
  chapterResponse: SingleChapterResponse | null;
  promotionComics: {
    recommendComics: ComicRecommend[];
    popularComics: ComicsResponse;
    completedComics: ComicsResponse;
    updatedComics: ComicsResponse;
    boyComics: ComicsResponse;
    girlComics: ComicsResponse;
  };
}

const initialState = {
  comics: [],
  totalPages: 1,
  currentPage: 1,
  searchComics: {
    comics: [],
    totalPages: 1,
    currentPage: 1,
  },
  status: 'all',
  comicDetail: null,
  chapterResponse: null,
  promotionComics: {
    recommendComics: [],
    popularComics: {
      comics: [],
      totalPages: 1,
      currentPage: 1,
    },
    completedComics: {
      comics: [],
      totalPages: 1,
      currentPage: 1,
    },
    updatedComics: {
      comics: [],
      totalPages: 1,
      currentPage: 1,
    },
    boyComics: {
      comics: [],
      totalPages: 1,
      currentPage: 1,
    },
    girlComics: {
      comics: [],
      totalPages: 1,
      currentPage: 1,
    },
  },
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
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
      };
    case SET_DATA_HOME_PAGE:
      return {
        ...state,
        promotionComics: { ...action.payload },
      };
    case SET_POPULAR_COMIC:
      return {
        ...state,
        promotionComics: {
          ...state.promotionComics,
          popularComics: {
            ...action.payload,
          },
        },
      };
    case SET_COMPLETED_COMIC:
      return {
        ...state,
        promotionComics: {
          ...state.promotionComics,
          completedComics: {
            ...action.payload,
          },
        },
      };

    case SET_BOY_COMIC:
      return {
        ...state,
        promotionComics: {
          ...state.promotionComics,
          boyComics: {
            ...action.payload,
          },
        },
      };

    case SET_GIRL_COMIC:
      return {
        ...state,
        promotionComics: {
          ...state.promotionComics,
          girlComics: {
            ...action.payload,
          },
        },
      };

    case SET_UPDATED_COMIC:
      return {
        ...state,
        promotionComics: {
          ...state.promotionComics,
          updatedComics: {
            ...action.payload,
          },
        },
      };

    case SET_CURRENT_PAGE:
      if (action.payload.category === 'default')
        return {
          ...state,
          currentPage: action.payload.page,
        };
      else if (action.payload.category === 'completed')
        return {
          ...state,
          promotionComics: {
            ...state.promotionComics,
            completedComics: {
              ...state.promotionComics.completedComics,
              currentPage: action.payload.page,
            },
          },
        };
      else if (action.payload.category === 'updated')
        return {
          ...state,
          promotionComics: {
            ...state.promotionComics,
            updatedComics: {
              ...state.promotionComics.updatedComics,
              currentPage: action.payload.page,
            },
          },
        };
      else if (action.payload.category === 'popular')
        return {
          ...state,
          promotionComics: {
            ...state.promotionComics,
            popularComics: {
              ...state.promotionComics.popularComics,
              currentPage: action.payload.page,
            },
          },
        };
      else if (action.payload.category === 'boy')
        return {
          ...state,
          promotionComics: {
            ...state.promotionComics,
            boyComics: {
              ...state.promotionComics.boyComics,
              currentPage: action.payload.page,
            },
          },
        };
      else if (action.payload.category === 'girl')
        return {
          ...state,
          promotionComics: {
            ...state.promotionComics,
            girlComics: {
              ...state.promotionComics.girlComics,
              currentPage: action.payload.page,
            },
          },
        };
      else return state;
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
    case RESET_COMIC_RESPONSE:
      return {
        ...state,
        status: 'all',
        currentPage: 1,
        totalPages: 1,
        comics: [],
      };
    case SET_COMIC_DETAIL:
      return {
        ...state,
        comicDetail: { ...action.payload },
      };
    case SET_CHAPTER_RESPONSE:
      return {
        ...state,
        chapterResponse: { ...action.payload },
      };
    case SET_SEARCH_COMIC:
      return {
        ...state,
        searchComics: { ...action.payload },
      };
    case RESET_SEARCH_COMIC:
      return {
        ...state,
        searchComics: {
          currentPage: 1,
          totalPages: 1,
          comics: [],
        },
      };
    case RESET_DATA_HOME_PAGE:
      return {
        ...state,
        promotionComics: {
          ...initialState.promotionComics,
        },
      };
    default:
      return state;
  }
}
