import {
  FETCH_SEARCH_PENDING, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_ERROR, SET_SEARCH_QUERY,
} from './searchAction';

const initialState = {
  searchQuery: '',
  search: [],
  searchPending: false,
  searchError: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_PENDING:
      return {
        ...state,
        searchPending: true,
      };

    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        searchPending: false,
        search: action.payload,
      };

    case FETCH_SEARCH_ERROR:
      return {
        ...state,
        searchPending: false,
        searchError: action.error,
      };

    case SET_SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
