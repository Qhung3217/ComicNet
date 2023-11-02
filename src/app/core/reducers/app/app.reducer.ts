import { ActionReducerMap } from '@ngrx/store';
import { State, genresReducer } from '../home/genres';

export interface AppState {
  genre: State;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  genre: genresReducer,
};
