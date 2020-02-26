import { FETCH_TRENDING_PENDING, FETCH_TRENDING_SUCCESS, FETCH_TRENDING_ERROR } from './trendingAction';

const initialState = {
  tranding: [],
  trandingPending: false,
  trandingError: null,
};

const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDING_PENDING:
      return {
        ...state,
        trandingPending: true,
      };

    case FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        trandingPending: false,
        tranding: action.payload,
      };

    case FETCH_TRENDING_ERROR:
      return {
        ...state,
        trandingPending: false,
        trandingError: action.error,
      };

    default:
      return state;
  }
};

export default trendingReducer;
