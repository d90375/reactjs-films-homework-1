import reducer from '../detailsReducer';
import {
  FETCH_DETAILS_IS_LOADING, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_ERROR, REMOVE_DETAILS_INFO,
} from '../detailsAction';

describe('trailer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        details: null,
        isLoading: false,
        error: null,
      },
    );
  });

  it('should handle FETCH_DETAILS_IS_LOADING', () => {
    expect(
      reducer([], {
        type: FETCH_DETAILS_IS_LOADING,
      }),
    ).toEqual(
      {
        isLoading: true,
      },
    );
  });

  it('should handle FETCH_DETAILS_SUCCESS', () => {
    expect(
      reducer([], {
        type: FETCH_DETAILS_SUCCESS,
        payload: { id: 123 },
      }),
    ).toEqual(
      {
        isLoading: false,
        details: { id: 123 },
      },
    );
  });

  it('should handle FETCH_DETAILS_ERROR', () => {
    expect(
      reducer([], {
        type: FETCH_DETAILS_ERROR,
        error: { message: 'error' },
      }),
    ).toEqual(
      {
        isLoading: false,
        error: { message: 'error' },
      },
    );
  });

  it('should handle REMOVE_DETAILS_INFO', () => {
    expect(
      reducer([], {
        type: REMOVE_DETAILS_INFO,
      }),
    ).toEqual(
      {
        details: null,
        isLoading: false,
        error: null,
      },
    );
  });
});
