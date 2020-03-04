import { FETCH_GENRES_IS_LOADING, FETCH_GENRES_SUCCESS, FETCH_GENRES_ERROR } from './genresAction';

const initialState = {
  genres: [],
  isLoading: false,
  error: null,
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        genres: action.payload,
      };

    case FETCH_GENRES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default genresReducer;
