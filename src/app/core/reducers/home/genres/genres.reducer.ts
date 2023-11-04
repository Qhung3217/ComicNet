import { GenresAction, SET_GENRES, SET_GENRES_SELECTED } from '../genres';
import { GenreDetail } from 'src/app/core/interfaces/base/genre-detail.interface';
export interface GenreState {
  genres: GenreDetail[];
  genreSelected: GenreDetail | null;
}

const initialState: GenreState = {
  genres: [],
  genreSelected: null,
};

export function genresReducer(
  state: GenreState = initialState,
  action: GenresAction
) {
  switch (action.type) {
    case SET_GENRES:
      return {
        ...state,
        genres: [...action.payload],
      };
    case SET_GENRES_SELECTED:
      return {
        ...state,
        genreSelected: { ...action.payload },
      };
    default:
      return state;
  }
}
