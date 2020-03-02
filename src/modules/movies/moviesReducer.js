import {
  FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR, SET_MOVIES_CONDITION,
} from './moviesAction';

const initialState = {
  query: '',
  condition: 'Tranding',
  movies: [],
  moviesPending: false,
  moviesError: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        moviesPending: true,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        moviesPending: false,
        movies: action.payload,
      };

    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        moviesPending: false,
        moviesError: action.error,
      };

    case SET_MOVIES_CONDITION:
      return {
        ...state,
        condition: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
