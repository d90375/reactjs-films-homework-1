import reducer from '../moviesReducer';
import {
  FETCH_MOVIES_IS_LOADING,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  SET_MOVIES_CONDITION,
  FETCH_GENRES_SUCCESS,
} from '../moviesAction';

describe('movies reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        query: '',
        condition: 'Trending',
        movies: [],
        isLoading: false,
        error: null,
        genres: [],
      },
    );
  });

  it('should handle FETCH_MOVIES_IS_LOADING', () => {
    expect(
      reducer([], {
        type: FETCH_MOVIES_IS_LOADING,
      }),
    ).toEqual(
      {
        isLoading: true,
      },
    );
  });

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    expect(
      reducer([], {
        type: FETCH_MOVIES_SUCCESS,
        payload: [{ id: 11 }, { id: 123 }],
      }),
    ).toEqual(
      {
        isLoading: false,
        movies: [{ id: 11 }, { id: 123 }],
      },
    );
  });

  it('should handle FETCH_MOVIES_ERROR', () => {
    expect(
      reducer([], {
        type: FETCH_MOVIES_ERROR,
        error: { message: 'error' },
      }),
    ).toEqual(
      {
        isLoading: false,
        error: { message: 'error' },
      },
    );
  });

  it('should handle SET_MOVIES_CONDITION', () => {
    expect(
      reducer([], {
        type: SET_MOVIES_CONDITION,
        payload: 'Trending',
      }),
    ).toEqual(
      {
        condition: 'Trending',
      },
    );
  });

  it('should handle FETCH_GENRES_SUCCESS', () => {
    expect(
      reducer([], {
        type: FETCH_GENRES_SUCCESS,
        payload: ['action', 'crime'],
      }),
    ).toEqual(
      {
        genres: ['action', 'crime'],
      },
    );
  });
});
