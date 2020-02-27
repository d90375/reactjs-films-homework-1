import {
  FETCH_MOVIE_PENDING, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR, REMOVE_MOVIE_INFO,
} from './movieAction';

const initialState = {
  isModalWindow: false,
  movie: null,
  moviePending: false,
  movieError: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_PENDING:
      return {
        ...state,
        isModalWindow: true,
        moviePending: true,
      };

    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        moviePending: false,
        movie: action.payload,
      };

    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        moviePending: false,
        movieError: action.error,
      };

    case REMOVE_MOVIE_INFO:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

export default movieReducer;
