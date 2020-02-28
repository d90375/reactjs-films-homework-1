import 'regenerator-runtime/runtime';
import MovieDbApi from '../movieDbApi';

const movieDbApi = new MovieDbApi();

export const FETCH_TRAILER_PENDING = 'FETCH_TRAILER_PENDING';
export const FETCH_TRAILER_SUCCESS = 'FETCH_TRAILER_SUCCESS';
export const FETCH_TRAILER_ERROR = 'FETCH_TRAILER_ERROR';
export const REMOVE_TRAILER_INFO = 'REMOVE_TRAILER_INFO';

export const fetchTrailerPending = () => ({
  type: FETCH_TRAILER_PENDING,
});

export const fetchTrailerSuccess = (content) => ({
  type: FETCH_TRAILER_SUCCESS,
  payload: content,
});

export const fetchTrailerError = (error) => ({
  type: FETCH_TRAILER_ERROR,
  error,
});

export const removeTrailerInfo = () => ({
  type: REMOVE_TRAILER_INFO,
});


export function fetchTrailer(id) {
  return (dispatch) => {
    dispatch(fetchTrailerPending());
    return movieDbApi.getTrailer(id)
      .then((res) => {
        dispatch(fetchTrailerSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchTrailerError(error));
      });
  };
}
