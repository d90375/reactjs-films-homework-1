import 'regenerator-runtime/runtime';
import MovieDbApi from '../movieDbApi';

const movieDbApi = new MovieDbApi();

export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const SET_MOVIES_CONDITION = 'SET_MOVIES_CONDITION';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export const fetchMoviesPending = () => ({
  type: FETCH_MOVIES_PENDING,
});

export const fetchMoviesSuccess = (content) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: content,
});

export const fetchMoviesError = (error) => ({
  type: FETCH_MOVIES_ERROR,
  error,
});

export const setMoviesCondition = (condition) => ({
  type: SET_MOVIES_CONDITION,
  payload: condition,
});

export function fetchMovies(condition, genres, query) {
  return (dispatch) => {
    dispatch(fetchMoviesPending());

    let fetchQuery;

    switch (condition) {
      case 'search':
        fetchQuery = movieDbApi.getSearch;
        break;

      default:
        fetchQuery = movieDbApi.getTrending;
        break;
    }

    return fetchQuery(genres, query)
      .then((res) => {
        dispatch(fetchMoviesSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchMoviesError(error));
      });
  };
}
