import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './movies/moviesReducer';
import trendingReducer from './trending/trendingReducer';
import genresReducer from './genres/genresReducer';
import searchReducer from './search/searchReducer';
import movieReducer from './movie/movieReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  tranding: trendingReducer,
  genres: genresReducer,
  search: searchReducer,
  movie: movieReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
