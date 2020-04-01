import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, MemoryRouter, Route } from 'react-router-dom';
import { create } from 'react-test-renderer';
import MoviesSection from '../MoviesSection';

describe('MoviesSection tests', () => {
  describe('MoviesSection render', () => {
    const mockCallBack = jest.fn();

    const mockProps = {
      trailer: null,
      removeTrailerInfo: mockCallBack,
      trailerIsLoading: false,
      trailerError: null,
      condition: 'Trending',
      fetchTrailer: mockCallBack,
      fetchMovies: mockCallBack,
      setMoviesCondition: mockCallBack,
      removeDetailsInfo: mockCallBack,
      setSearchQuery: mockCallBack,
      deleteSearchQuery: mockCallBack,
    };

    it('MoviesSection renders correctly with closed modal window', () => {
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }];

      const tree = create(
        <Router>
          <MoviesSection
            error={null}
            isLoading={false}
            isModalOpened={false}
            genres={genres}
            movies={movies}
            {...mockProps}
          />
        </Router>,
      );
      expect(tree).toMatchSnapshot();
    });

    it('MoviesSection renders correctly when modal window open', () => {
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }];

      const tree = create(
        <Router>
          <MoviesSection
            error={null}
            isLoading={false}
            isModalOpened
            genres={genres}
            movies={movies}
            {...mockProps}
          />
        </Router>,
      );
      expect(tree).toMatchSnapshot();
    });

    it('MoviesSection renders correctly when movies is loading', () => {
      const genres = [];
      const movies = [];

      const tree = create(
        <Router>
          <MoviesSection
            error={null}
            isLoading
            isModalOpened={false}
            genres={genres}
            movies={movies}
            {...mockProps}
          />
        </Router>,
      );
      expect(tree).toMatchSnapshot();
    });

    it('MoviesSection renders correctly with error message', () => {
      const genres = [];
      const movies = [];
      const error = { message: 'error' };

      const tree = create(
        <Router>
          <MoviesSection
            error={error}
            isLoading={false}
            isModalOpened={false}
            genres={genres}
            movies={movies}
            {...mockProps}
          />
        </Router>,
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe('ComponentDidMount', () => {
    const mockCallBack = jest.fn();

    const mockProps = {
      error: null,
      isLoading: false,
      isModalOpened: false,
      trailer: null,
      removeTrailerInfo: mockCallBack,
      trailerIsLoading: false,
      trailerError: null,
      genres: ['crime', 'actions'],
      condition: 'Trending',
      movies: [{ id: 123, title: 'title' }, { id: 110, title: 'title' }],
      fetchTrailer: mockCallBack,
      setSearchQuery: mockCallBack,
      deleteSearchQuery: mockCallBack,
      removeDetailsInfo: mockCallBack,
    };

    it('fetchMovies, fetchByFilter functions called', () => {
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const tree = create(
        <Router>
          <MoviesSection
            fetchMovies={mockFetchMovies}
            setMoviesCondition={mockSetMoviesCondition}
            {...mockProps}
          />
        </Router>,
      );

      const filterTabs = tree.root.findByProps({ name: 'Tabs' });
      filterTabs.props.fetchByFilter('Trending');

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockFetchMovies.mock.calls.length).toEqual(1);
    });

    it('setMoviesCondition functions called with filter', () => {
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      create(
        <MemoryRouter initialEntries={['/?filter=Trending']}>
          <Route path="/">
            <MoviesSection
              fetchMovies={mockFetchMovies}
              setMoviesCondition={mockSetMoviesCondition}
              {...mockProps}
            />
          </Route>
        </MemoryRouter>,
      );

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockSetMoviesCondition).toHaveBeenCalledWith('Trending');
    });

    it('setMoviesCondition functions called with genreId', () => {
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      create(
        <MemoryRouter initialEntries={['/?genreId=16']}>
          <Route path="/">
            <MoviesSection
              fetchMovies={mockFetchMovies}
              setMoviesCondition={mockSetMoviesCondition}
              {...mockProps}
            />
          </Route>
        </MemoryRouter>,
      );

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockSetMoviesCondition).toHaveBeenCalledWith('16');
    });

    it('setMoviesCondition functions called with "Search"', () => {
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      create(
        <MemoryRouter initialEntries={['/?search=sonic']}>
          <Route path="/">
            <MoviesSection
              fetchMovies={mockFetchMovies}
              setMoviesCondition={mockSetMoviesCondition}
              {...mockProps}
            />
          </Route>
        </MemoryRouter>,
      );

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockSetMoviesCondition).toHaveBeenCalledWith('Search');
    });
  });

  /* describe('ComponentDidUpdate', () => {
    it('fetchByFilter functions called with filter', () => {
      const mockCallBack = jest.fn();
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const mockSetSearchQuery = jest.fn();
      const mockDeleteSearchQuery = jest.fn();
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }, { id: 110, title: 'title' }];
      const location = { path: ['/?filter=Coming%20soon', '/?filter=Trending'] };

      const node = document.createElement('div');
      const instance = ReactDOM.render(
        <MemoryRouter initialEntries={location.path} initialIndex={1}>
          <MoviesSection
            error={null}
            isLoading={false}
            isModalOpened={false}
            trailer={null}
            removeTrailerInfo={mockCallBack}
            trailerIsLoading={false}
            trailerError={null}
            genres={genres}
            condition="Coming Soon"
            movies={movies}
            fetchTrailer={mockCallBack}
            fetchMovies={mockFetchMovies}
            setMoviesCondition={mockSetMoviesCondition}
            setSearchQuery={mockSetSearchQuery}
            deleteSearchQuery={mockDeleteSearchQuery}
          />
        </MemoryRouter>, node,
      );

      // spyOn(MoviesSection, 'fetchByFilter');

      ReactDOM.render(
        <MemoryRouter initialEntries={location.path} initialIndex={0}>
          <MoviesSection
            error={null}
            isLoading={false}
            isModalOpened={false}
            trailer={null}
            removeTrailerInfo={mockCallBack}
            trailerIsLoading={false}
            trailerError={null}
            genres={genres}
            condition="Trending"
            movies={movies}
            fetchTrailer={mockCallBack}
            fetchMovies={mockFetchMovies}
            setMoviesCondition={mockSetMoviesCondition}
            setSearchQuery={mockSetSearchQuery}
            deleteSearchQuery={mockDeleteSearchQuery}
          />
        </MemoryRouter>, node,
      );
      expect(instance.fetchByFilter).toHaveBeenCalled();
    });
  }); */
});
