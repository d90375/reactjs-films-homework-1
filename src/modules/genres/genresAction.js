import 'regenerator-runtime/runtime';
import MovieDbApi from '../movieDbApi';

const movieDbApi = new MovieDbApi();

export const FETCH_GENRES_PENDING = 'FETCH_GENRES_PENDING';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
export const FETCH_GENRES_ERROR = 'FETCH_GENRES_ERROR';

export const fetchGenresPending = () => ({
  type: FETCH_GENRES_PENDING,
});

export const fetchGenresSuccess = (content) => ({
  type: FETCH_GENRES_SUCCESS,
  payload: content,
});

export const fetchGenresError = (error) => ({
  type: FETCH_GENRES_ERROR,
  error,
});

export function fetchGenres() {
  return (dispatch) => {
    dispatch(fetchGenresPending());
    return movieDbApi.getGenres()
      .then((res) => {
        dispatch(fetchGenresSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchGenresError(error));
      });
  };
}
