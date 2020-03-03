import 'regenerator-runtime/runtime';
import MovieDbApi from '../movieDbApi';

const movieDbApi = new MovieDbApi();

export const FETCH_TRAILER_IS_LOADING = 'FETCH_TRAILER_IS_LOADING';
export const FETCH_TRAILER_SUCCESS = 'FETCH_TRAILER_SUCCESS';
export const FETCH_TRAILER_ERROR = 'FETCH_TRAILER_ERROR';
export const REMOVE_TRAILER_INFO = 'REMOVE_TRAILER_INFO';

export const fetchTrailerIsLoading = () => ({
  type: FETCH_TRAILER_IS_LOADING,
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
    dispatch(fetchTrailerIsLoading());
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
