import 'regenerator-runtime/runtime';
import MovieDbApi from '../movieDbApi';

const movieDbApi = new MovieDbApi();

export const FETCH_SEARCH_PENDING = 'FETCH_SEARCH_PENDING';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export const fetchSearchPending = () => ({
  type: FETCH_SEARCH_PENDING,
});

export const fetchSearchSuccess = (content) => ({
  type: FETCH_SEARCH_SUCCESS,
  payload: content,
});

export const fetchSearchError = (error) => ({
  type: FETCH_SEARCH_ERROR,
  error,
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export function fetchSearch(query, genres) {
  return (dispatch) => {
    dispatch(fetchSearchPending());
    return movieDbApi.getSearch(query, genres)
      .then((res) => {
        dispatch(fetchSearchSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchSearchError(error));
      });
  };
}