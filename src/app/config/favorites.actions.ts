import { createAction, props  } from '@ngrx/store';
import { Movie } from '../models/movie.model';

//Acciones para aplicar al State 
export const add = createAction('[Favorites Component] Add',  props<{ Movie }>());
export const del = createAction('[Favorites Component] Del',  props<{ movieId }>());