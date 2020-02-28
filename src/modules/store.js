import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './movies/moviesReducer';
import genresReducer from './genres/genresReducer';
import trailerReducer from './trailer/trailerReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  trailer: trailerReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
