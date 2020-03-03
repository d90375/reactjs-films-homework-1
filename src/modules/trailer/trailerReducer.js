import {
  FETCH_TRAILER_IS_LOADING, FETCH_TRAILER_SUCCESS, FETCH_TRAILER_ERROR, REMOVE_TRAILER_INFO,
} from './trailerAction';

const initialState = {
  isModalOpened: false,
  trailer: null,
  trailerIsLoading: false,
  trailerError: null,
};

const trailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAILER_IS_LOADING:
      return {
        ...state,
        isModalOpened: true,
        trailerIsLoading: true,
      };

    case FETCH_TRAILER_SUCCESS:
      return {
        ...state,
        trailerIsLoading: false,
        trailer: action.payload,
      };

    case FETCH_TRAILER_ERROR:
      return {
        ...state,
        trailerIsLoading: false,
        trailerError: action.error,
      };

    case REMOVE_TRAILER_INFO:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

export default trailerReducer;
