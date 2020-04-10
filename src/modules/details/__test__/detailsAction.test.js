import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  FETCH_DETAILS_IS_LOADING,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_ERROR,
  REMOVE_DETAILS_INFO,
  removeDetailsInfo,
  fetchDetails,
} from '../detailsAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_DETAILS_SUCCESS when fetching details has been done', () => {
    fetchMock.getOnce('https://api.themoviedb.org/3/movie/475303?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US', {
      body: {
        id: 475303,
        genres: [{ id: 35, name: 'Comedy' }, { id: 10749, name: 'Romance' }],
        backdrop_path: '/6fkqwqLEcDZOEAnBBfKAniwNxtx.jpg',
        runtime: 92,
        overview: 'overview',
        vote_average: 6,
        title: 'title',

      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_DETAILS_IS_LOADING },
      {
        type: FETCH_DETAILS_SUCCESS,
        payload: {
          genres: 'Comedy, Romance',
          background: 'https://image.tmdb.org/t/p/w1280/6fkqwqLEcDZOEAnBBfKAniwNxtx.jpg',
          duration: '2h 32m',
          overview: 'overview',
          rating: 6,
          title: 'title',

        },
      },
    ];
    const store = mockStore({ trailer: [] });
    const id = 475303;

    return store.dispatch(fetchDetails(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_DETAILS_SUCCESS when fetching details has been done without background image', () => {
    fetchMock.getOnce('https://api.themoviedb.org/3/movie/475303?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US', {
      body: {
        id: 475303,
        genres: [{ id: 35, name: 'Comedy' }, { id: 10749, name: 'Romance' }],
        backdrop_path: null,
        runtime: 92,
        overview: 'overview',
        vote_average: 6,
        title: 'title',

      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_DETAILS_IS_LOADING },
      {
        type: FETCH_DETAILS_SUCCESS,
        payload: {
          genres: 'Comedy, Romance',
          background: 'test-file-stub',
          duration: '2h 32m',
          overview: 'overview',
          rating: 6,
          title: 'title',

        },
      },
    ];
    const store = mockStore({ trailer: [] });
    const id = 475303;

    return store.dispatch(fetchDetails(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_DETAILS_ERROR when fetching failed', () => {
    fetchMock.getOnce('https://api.themoviedb.org/3/movie/475303?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US', {
      headers: { 'content-type': 'application/json' },
      status: 404,
    });

    const expectedActions = [
      { type: FETCH_DETAILS_IS_LOADING },
      {
        type: FETCH_DETAILS_ERROR,
        error: new Error('Could not fetch movie/475303?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US, received 404'),
      },
    ];
    const store = mockStore({ trailer: [] });
    const id = 475303;

    return store.dispatch(fetchDetails(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to remove details info', () => {
    const expectedAction = {
      type: REMOVE_DETAILS_INFO,
    };
    expect(removeDetailsInfo()).toEqual(expectedAction);
  });
});
