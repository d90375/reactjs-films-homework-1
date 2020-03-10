import reducer from '../trailerReducer';
import {
  FETCH_TRAILER_IS_LOADING, FETCH_TRAILER_SUCCESS, FETCH_TRAILER_ERROR, REMOVE_TRAILER_INFO,
} from '../trailerAction';

describe('trailer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isModalOpened: false,
        trailer: null,
        isLoading: false,
        error: null,
      },
    );
  });

  it('should handle FETCH_TRAILER_IS_LOADING', () => {
    expect(
      reducer([], {
        type: FETCH_TRAILER_IS_LOADING,
      }),
    ).toEqual(
      {
        isModalOpened: true,
        isLoading: true,
      },
    );
  });

  it('should handle FETCH_TRAILER_SUCCESS', () => {
    expect(
      reducer([], {
        type: FETCH_TRAILER_SUCCESS,
        payload: { id: 123 },
      }),
    ).toEqual(
      {
        isLoading: false,
        trailer: { id: 123 },
      },
    );
  });

  it('should handle FETCH_TRAILER_ERROR', () => {
    expect(
      reducer([], {
        type: FETCH_TRAILER_ERROR,
        error: { message: 'error' },
      }),
    ).toEqual(
      {
        isLoading: false,
        error: { message: 'error' },
      },
    );
  });

  it('should handle REMOVE_TRAILER_INFO', () => {
    expect(
      reducer([], {
        type: REMOVE_TRAILER_INFO,
      }),
    ).toEqual(
      {
        isModalOpened: false,
        trailer: null,
        isLoading: false,
        error: null,
      },
    );
  });
});
