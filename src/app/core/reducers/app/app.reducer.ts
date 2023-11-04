import { ActionReducerMap } from '@ngrx/store';
import { GenreState, genresReducer } from '../home/genres';
import { ComicState, comicReducer } from '../home/comic';

export interface AppState {
  genre: GenreState;
  comic: ComicState;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  genre: genresReducer,
  comic: comicReducer,
};
