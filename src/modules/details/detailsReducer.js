import {
  FETCH_DETAILS_IS_LOADING, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_ERROR, REMOVE_DETAILS_INFO,
} from './detailsAction';

const initialState = {
  details: null,
  isLoading: false,
  error: null,
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        details: action.payload,
      };

    case FETCH_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case REMOVE_DETAILS_INFO:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

export default detailsReducer;
