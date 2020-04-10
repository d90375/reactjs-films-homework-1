import {
  applyMiddleware, createStore, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './movies/moviesReducer';
import trailerReducer from './trailer/trailerReducer';
import detailsReducer from './details/detailsReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  trailer: trailerReducer,
  details: detailsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
