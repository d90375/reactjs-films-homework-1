import {
  applyMiddleware, createStore, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './movies/moviesReducer';
import genresReducer from './genres/genresReducer';
import trailerReducer from './trailer/trailerReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  trailer: trailerReducer,
});

export default createStore(rootReducer, compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
