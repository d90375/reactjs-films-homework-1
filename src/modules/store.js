import {
  applyMiddleware, createStore, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './movies/moviesReducer';
import trailerReducer from './trailer/trailerReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  trailer: trailerReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
