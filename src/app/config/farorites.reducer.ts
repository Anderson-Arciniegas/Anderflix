import { Action, createReducer, on } from '@ngrx/store';
import { add, del } from './favorites.actions';
import { Movie } from '../models/movie.model';

//declaración del state
export interface appState {
  movies: Array<Movie>;
}
export const initialState: Array<Movie> = [];

  //funcion reducer para aplicar las acciones al state 
 const _favoritesMovies = createReducer(
    initialState,
    on(add, (state, { Movie }) => {  return[...state, Movie]; }),
    on(del, (state, { movieId }) => state.filter((Movie) => Movie.id !== movieId )),
   
  );

  export function favoritesMovies(state,action){
    return _favoritesMovies(state,action);
  }

  