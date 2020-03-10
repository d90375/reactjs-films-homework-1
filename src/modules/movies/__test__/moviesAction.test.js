import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import {
  FETCH_MOVIES_IS_LOADING,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  SET_MOVIES_CONDITION,
  FETCH_GENRES_SUCCESS,
  fetchMovies,
  setMoviesCondition,
} from '../moviesAction';
import {
  responseBody, actionPayload, responseBodyOneMovie, actionPayloadOneMovie,
} from './mocks/mockMoviesArrays';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const genres = [
  { id: 0, name: 'Action' },
  { id: 1, name: 'Adventure' },
  { id: 2, name: 'Animation' },
];

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_MOVIES_SUCCESS when fetching trending movies has been done', () => {
    fetchMock.getOnce('https://api.themoviedb.org/3/movie/popular?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US&page=1', {
      body: responseBody,
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    fetchMock.getOnce('https://api.themoviedb.org/3/genre/movie/list?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US', {
      body: {
        genres,
      },
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_MOVIES_IS_LOADING },
      {
        type: FETCH_GENRES_SUCCESS,
        payload: ['Action', 'Adventure', 'Animation'],
      },
      {
        type: FETCH_MOVIES_SUCCESS,
        payload: actionPayload,
      },
    ];
    const store = mockStore({ movies: [] });
    const condition = 'Trending';

    return store.dispatch(fetchMovies(condition)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_MOVIES_SUCCESS when fetching coming soon movies has been done', () => {
    fetchMock.getOnce('https://api.themoviedb.org/3/movie/upcoming?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US&page=1', {
      body: responseBodyOneMovie,
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    fetchMock.getOnce('https://api.themoviedb.org/3/genre/movie/list?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US', {
      body: {
        genres,
      },
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_MOVIES_IS_LOADING },
      {
        type: FETCH_GENRES_SUCCESS,
        payload: ['Action', 'Adventure', 'Animation'],
      },
      {
        type: FETCH_MOVIES_SUCCESS,
        payload: actionPayloadOneMovie,
      },
    ];
    const store = mockStore({ movies: [] });
    const condition = 'Coming soon';

    return store.dispatch(fetchMovies(condition)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_MOVIES_SUCCESS when fetching top rated movies has been done', () => {
    fetchMock.getOnce('https://api.themoviedb.org/3/movie/top_rated?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US&page=1', {
      body: responseBody,
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    fetchMock.getOnce('https://api.themoviedb.org/3/genre/movie/list?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US', {
      body: {
        genres,
      },
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_MOVIES_IS_LOADING },
      {
        type: FETCH_GENRES_SUCCESS,
        payload: ['Action', 'Adventure', 'Animation'],
      },
      {
        type: FETCH_MOVIES_SUCCESS,
        payload: actionPayload,
      },
    ];
    const store = mockStore({ movies: [] });
    const condition = 'Top Rated';

    return store.dispatch(fetchMovies(condition)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_MOVIES_SUCCESS when fetching search movies has been done', () => {
    fetchMock.getOnce('https://api.themoviedb.org/3/search/movie?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US&query=sonic&page=1&include_adult=false', {
      body: responseBody,
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    fetchMock.getOnce('https://api.themoviedb.org/3/genre/movie/list?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US', {
      body: {
        genres,
      },
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_MOVIES_IS_LOADING },
      {
        type: FETCH_GENRES_SUCCESS,
        payload: ['Action', 'Adventure', 'Animation'],
      },
      {
        type: FETCH_MOVIES_SUCCESS,
        payload: actionPayload,
      },
    ];
    const store = mockStore({ movies: [] });
    const condition = 'Search';
    const query = 'sonic';

    return store.dispatch(fetchMovies(condition, query)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_MOVIES_SUCCESS when fetching movies by genres has been done', () => {
    fetchMock.getOnce('https://api.themoviedb.org/3/discover/movie?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=1', {
      body: responseBody,
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    fetchMock.getOnce('https://api.themoviedb.org/3/genre/movie/list?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US', {
      body: {
        genres,
      },
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_MOVIES_IS_LOADING },
      {
        type: FETCH_GENRES_SUCCESS,
        payload: ['Action', 'Adventure', 'Animation'],
      },
      {
        type: FETCH_MOVIES_SUCCESS,
        payload: actionPayload,
      },
    ];
    const store = mockStore({ movies: [] });
    const condition = 1;

    return store.dispatch(fetchMovies(condition)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_MOVIES_ERROR when fetching failed', () => {
    fetchMock.getOnce('https://api.themoviedb.org/3/genre/movie/list?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US', {
      body: {
        genres,
      },
      status: 200,
      headers: { 'content-type': 'application/json' },
    });

    fetchMock.getOnce('https://api.themoviedb.org/3/movie/popular?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US&page=1', {
      headers: { 'content-type': 'application/json' },
      status: 404,
    });

    const expectedActions = [
      { type: FETCH_MOVIES_IS_LOADING },
      {
        type: FETCH_GENRES_SUCCESS,
        payload: ['Action', 'Adventure', 'Animation'],
      },
      {
        type: FETCH_MOVIES_ERROR,
        error: new Error('Could not fetch movie/popular?api_key=a6a65694a66cff82788a6d4a1c9caa1e&language=en-US&page=1, received 404'),
      },
    ];
    const store = mockStore({ trailer: [] });
    const condition = 'Trending';

    return store.dispatch(fetchMovies(condition)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to set movies condition', () => {
    const expectedAction = {
      type: SET_MOVIES_CONDITION,
      payload: 'Trending',
    };
    expect(setMoviesCondition('Trending')).toEqual(expectedAction);
  });
});
