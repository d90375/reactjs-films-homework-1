import 'regenerator-runtime/runtime';
import MovieDbApi from '../movieDbApi';

const movieDbApi = new MovieDbApi();

export const FETCH_TRENDING_PENDING = 'FETCH_TRENDING_PENDING';
export const FETCH_TRENDING_SUCCESS = 'FETCH_TRENDING_SUCCESS';
export const FETCH_TRENDING_ERROR = 'FETCH_TRENDING_ERROR';

export const fetchTrendingPending = () => ({
  type: FETCH_TRENDING_PENDING,
});

export const fetchTrendingSuccess = (content) => ({
  type: FETCH_TRENDING_SUCCESS,
  payload: content,
});

export const fetchTrendingError = (error) => ({
  type: FETCH_TRENDING_ERROR,
  error,
});

export function fetchTrending(genres) {
  return (dispatch) => {
    dispatch(fetchTrendingPending());
    return movieDbApi.getTrending(genres)
      .then((res) => {
        dispatch(fetchTrendingSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchTrendingError(error));
      });
  };
}
