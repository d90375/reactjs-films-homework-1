import debounceAction from 'debounce-action';
import MovieDbApi from '../movieDbApi';

const movieDbApi = new MovieDbApi();

export const FETCH_MOVIES_IS_LOADING = 'FETCH_MOVIES_IS_LOADING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const SET_MOVIES_CONDITION = 'SET_MOVIES_CONDITION';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';

export const fetchMoviesIsLoading = () => ({
  type: FETCH_MOVIES_IS_LOADING,
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

export const fetchGenresSuccess = (content) => ({
  type: FETCH_GENRES_SUCCESS,
  payload: content,
});

export function fetchMovies(condition, query) {
  return (dispatch) => {
    dispatch(fetchMoviesIsLoading());

    let fetchQuery;

    switch (condition) {
      case 'Search':
        fetchQuery = movieDbApi.getSearch;
        break;

      case 'Coming soon':
        fetchQuery = movieDbApi.getComingSoon;
        break;

      case 'Top Rated':
        fetchQuery = movieDbApi.getTopRated;
        break;

      case 'Trending': {
        fetchQuery = movieDbApi.getTrending;
        break;
      }

      default:
        fetchQuery = movieDbApi.getByGenre.bind(null, condition);
        break;
    }

    return movieDbApi.getGenres()
      .then((genres) => {
        dispatch(fetchGenresSuccess(genres));
        return genres;
      })
      .then((genres) => fetchQuery(genres, query)
        .then((res) => {
          dispatch(fetchMoviesSuccess(res));
          return res;
        })
        .catch((error) => {
          dispatch(fetchMoviesError(error));
        }));
  };
}

export const fetchMoviesDebounced = debounceAction(fetchMovies, 500);
