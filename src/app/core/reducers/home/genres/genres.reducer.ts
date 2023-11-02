import { GenresAction, SET_GENRES } from '../genres';
import { GenreDetail } from 'src/app/core/interfaces/base/genre-detail.interface';
export interface State {
  genres: GenreDetail[];
}

const initialState: State = {
  genres: [],
};

export function genresReducer(
  state: State = initialState,
  action: GenresAction
) {
  switch (action.type) {
    case SET_GENRES:
      return {
        ...state,
        genres: [...action.payload],
      };
    default:
      return state;
  }
}
