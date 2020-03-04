import {
  FETCH_MOVIES_IS_LOADING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR, SET_MOVIES_CONDITION,
} from './moviesAction';

const initialState = {
  query: '',
  condition: 'Trending',
  movies: [],
  isLoading: false,
  error: null,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };

    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
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
