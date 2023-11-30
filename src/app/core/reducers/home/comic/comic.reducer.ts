import { ComicsResponse } from 'src/app/core/interfaces/api-response/comics-response.interface';
import { ComicRecommend } from 'src/app/core/interfaces/base/comic-recommend.interface';
import { Comic } from 'src/app/core/interfaces/base/comic.interface';
import {
  ComicAction,
  SET_BOY_COMIC,
  SET_COMIC_RESPONSE,
  SET_COMPLETED_COMIC,
  SET_CURRENT_PAGE,
  SET_DATA_HOME_PAGE,
  SET_GIRL_COMIC,
  SET_POPULAR_COMIC,
  SET_STATUS,
  SET_STATUS_AND_CURRENT_PAGE,
  SET_UPDATED_COMIC,
} from './comic.actions';

export interface ComicState {
  comics: Comic[];
  totalPages: number;
  currentPage: number;
  status: string;
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
  status: 'all',
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
    default:
      return state;
  }
}
