import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import {
  FETCH_TRAILER_IS_LOADING,
  FETCH_TRAILER_SUCCESS,
  FETCH_TRAILER_ERROR,
  REMOVE_TRAILER_INFO,
  removeTrailerInfo,
  fetchTrailer,
} from '../trailerAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_TRAILER_SUCCESS when fetching trailer has been done', () => {
    fetchMock.getOnce('https://api.themoviedb.org/3/movie/475303/videos?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US', {
      body: {
        id: 475303,
        results: [{
          key: 'yIVRldiVDL8',
        }],
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_TRAILER_IS_LOADING },
      {
        type: FETCH_TRAILER_SUCCESS,
        payload: {
          key: 'yIVRldiVDL8',
        },
      },
    ];
    const store = mockStore({ trailer: [] });
    const id = 475303;

    return store.dispatch(fetchTrailer(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_TRAILER_ERROR when fetching failed', () => {
    fetchMock.getOnce('https://api.themoviedb.org/3/movie/475303/videos?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US', {
      headers: { 'content-type': 'application/json' },
      status: 404,
    });

    const expectedActions = [
      { type: FETCH_TRAILER_IS_LOADING },
      {
        type: FETCH_TRAILER_ERROR,
        error: new Error('Could not fetch movie/475303/videos?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US, received 404'),
      },
    ];
    const store = mockStore({ trailer: [] });
    const id = 475303;

    return store.dispatch(fetchTrailer(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to remove trailer info', () => {
    const expectedAction = {
      type: REMOVE_TRAILER_INFO,
    };
    expect(removeTrailerInfo()).toEqual(expectedAction);
  });
});
