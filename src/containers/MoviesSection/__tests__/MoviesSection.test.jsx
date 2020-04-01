import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, MemoryRouter, Route } from 'react-router-dom';
import { create } from 'react-test-renderer';
import MoviesSection from '../MoviesSection';

describe('MoviesSection tests', () => {
  describe('MoviesSection render', () => {
    it('MoviesSection renders correctly with closed modal window', () => {
      const mockCallBack = jest.fn();
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }];

      const tree = create(
        <Router>
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
            fetchMovies={mockCallBack}
            setMoviesCondition={mockCallBack}
          />
        </Router>,
      );
      expect(tree).toMatchSnapshot();
    });

    it('MoviesSection renders correctly when modal window open', () => {
      const mockCallBack = jest.fn();
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }];

      const tree = create(
        <Router>
          <MoviesSection
            error={null}
            isLoading={false}
            isModalOpened
            trailer={null}
            removeTrailerInfo={mockCallBack}
            trailerIsLoading={false}
            trailerError={null}
            genres={genres}
            condition="Trending"
            movies={movies}
            fetchTrailer={mockCallBack}
            fetchMovies={mockCallBack}
            setMoviesCondition={mockCallBack}
          />
        </Router>,
      );
      expect(tree).toMatchSnapshot();
    });

    it('MoviesSection renders correctly when movies is loading', () => {
      const mockCallBack = jest.fn();
      const genres = [];
      const movies = [];

      const tree = create(
        <Router>
          <MoviesSection
            error={null}
            isLoading
            isModalOpened={false}
            trailer={null}
            removeTrailerInfo={mockCallBack}
            trailerIsLoading={false}
            trailerError={null}
            genres={genres}
            condition="Trending"
            movies={movies}
            fetchTrailer={mockCallBack}
            fetchMovies={mockCallBack}
            setMoviesCondition={mockCallBack}
          />
        </Router>,
      );
      expect(tree).toMatchSnapshot();
    });

    it('MoviesSection renders correctly with error message', () => {
      const mockCallBack = jest.fn();
      const genres = [];
      const movies = [];
      const error = { message: 'error' };

      const tree = create(
        <Router>
          <MoviesSection
            error={error}
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
            fetchMovies={mockCallBack}
            setMoviesCondition={mockCallBack}
          />
        </Router>,
      );
      expect(tree).toMatchSnapshot();
    });
  });

  describe('ComponentDidMount', () => {
    it('fetchMovies, fetchByFilter functions called', () => {
      const mockCallBack = jest.fn();
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const mockSetSearchQuery = jest.fn();
      const mockDeleteSearchQuery = jest.fn();
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }, { id: 110, title: 'title' }];
      const tree = create(
        <Router>
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
        </Router>,
      );

      const filterTabs = tree.root.findByProps({ name: 'Tabs' });
      filterTabs.props.fetchByFilter('Trending');

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockFetchMovies.mock.calls.length).toEqual(1);
    });

    it('setMoviesCondition functions called with filter', () => {
      const mockCallBack = jest.fn();
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const mockSetSearchQuery = jest.fn();
      const mockDeleteSearchQuery = jest.fn();
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }, { id: 110, title: 'title' }];
      create(
        <MemoryRouter initialEntries={['/?filter=Trending']}>
          <Route path="/">
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
          </Route>
        </MemoryRouter>,
      );

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockSetMoviesCondition).toHaveBeenCalledWith('Trending');
    });

    it('setMoviesCondition functions called with genreId', () => {
      const mockCallBack = jest.fn();
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const mockSetSearchQuery = jest.fn();
      const mockDeleteSearchQuery = jest.fn();
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }, { id: 110, title: 'title' }];
      create(
        <MemoryRouter initialEntries={['/?genreId=16']}>
          <Route path="/">
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
          </Route>
        </MemoryRouter>,
      );

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockSetMoviesCondition).toHaveBeenCalledWith('16');
    });

    it('setMoviesCondition functions called with "Search"', () => {
      const mockCallBack = jest.fn();
      const mockFetchMovies = jest.fn();
      const mockSetSearchQuery = jest.fn();
      const mockDeleteSearchQuery = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }, { id: 110, title: 'title' }];
      create(
        <MemoryRouter initialEntries={['/?search=sonic']}>
          <Route path="/">
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
              setSearchQuery={mockSetSearchQuery}
              deleteSearchQuery={mockDeleteSearchQuery}
              setMoviesCondition={mockSetMoviesCondition}
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
