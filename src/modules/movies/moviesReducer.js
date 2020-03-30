import {
  FETCH_MOVIES_IS_LOADING,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  SET_MOVIES_CONDITION,
  FETCH_GENRES_SUCCESS,
  SET_SEARCH_QUERY,
  DELETE_SEARCH_QUERY,
} from './moviesAction';

const initialState = {
  query: '',
  condition: 'Trending',
  movies: [],
  isLoading: false,
  error: null,
  genres: [],
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

    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };

    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    case DELETE_SEARCH_QUERY:
      return {
        ...state,
        query: '',
      };

    default:
      return state;
  }
};

export default moviesReducer;
