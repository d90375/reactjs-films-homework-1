import {
  FETCH_TRAILER_PENDING, FETCH_TRAILER_SUCCESS, FETCH_TRAILER_ERROR, REMOVE_TRAILER_INFO,
} from './trailerAction';

const initialState = {
  isModalWindow: false,
  trailer: null,
  trailerPending: false,
  trailerError: null,
};

const trailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAILER_PENDING:
      return {
        ...state,
        isModalWindow: true,
        trailerPending: true,
      };

    case FETCH_TRAILER_SUCCESS:
      return {
        ...state,
        trailerPending: false,
        trailer: action.payload,
      };

    case FETCH_TRAILER_ERROR:
      return {
        ...state,
        trailerPending: false,
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
