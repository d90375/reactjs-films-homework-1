import 'regenerator-runtime/runtime';
import MovieDbApi from '../movieDbApi';

const movieDbApi = new MovieDbApi();

export const FETCH_MOVIE_PENDING = 'FETCH_MOVIE_PENDING';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';
export const REMOVE_MOVIE_INFO = 'REMOVE_MOVIE_INFO';

export const fetchMoviePending = () => ({
  type: FETCH_MOVIE_PENDING,
});

export const fetchMovieSuccess = (content) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: content,
});

export const fetchMovieError = (error) => ({
  type: FETCH_MOVIE_ERROR,
  error,
});

export const removeMovieInfo = () => ({
  type: REMOVE_MOVIE_INFO,
});

export function fetchMovie(id) {
  return (dispatch) => {
    dispatch(fetchMoviePending());
    return movieDbApi.getMovie(id)
      .then((res) => {
        dispatch(fetchMovieSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchMovieError(error));
      });
  };
}