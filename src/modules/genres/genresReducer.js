import { FETCH_GENRES_IS_LOADING, FETCH_GENRES_SUCCESS, FETCH_GENRES_ERROR } from './genresAction';

const initialState = {
  genres: [],
  genresIsLoading: false,
  genresError: null,
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_IS_LOADING:
      return {
        ...state,
        genresIsLoading: true,
      };

    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genresIsLoading: false,
        genres: action.payload,
      };

    case FETCH_GENRES_ERROR:
      return {
        ...state,
        genresIsLoading: false,
        genresError: action.error,
      };

    default:
      return state;
  }
};

export default genresReducer;
