import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './movies/moviesReducer';
import genresReducer from './genres/genresReducer';
import movieReducer from './movie/movieReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  movie: movieReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
