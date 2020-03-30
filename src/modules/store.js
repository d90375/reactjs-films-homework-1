import {
  applyMiddleware, createStore, combineReducers, compose,
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

export default createStore(rootReducer, compose(applyMiddleware(thunk),
/* eslint no-underscore-dangle: 0 */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
