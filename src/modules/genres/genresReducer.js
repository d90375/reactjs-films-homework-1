import { FETCH_GENRES_PENDING, FETCH_GENRES_SUCCESS, FETCH_GENRES_ERROR } from './genresAction';

const initialState = {
  genres: [],
  genresPending: false,
  genresError: null,
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_PENDING:
      return {
        ...state,
        genresPending: true,
      };

    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genresPending: false,
        genres: action.payload,
      };

    case FETCH_GENRES_ERROR:
      return {
        ...state,
        genresPending: false,
        genresError: action.error,
      };

    default:
      return state;
  }
};

export default genresReducer;
