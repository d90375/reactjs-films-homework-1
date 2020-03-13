import React from 'react';
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
            condition="Tranding"
            movies={movies}
            fetchTrailer={mockCallBack}
            fetchMovies={mockFetchMovies}
            setMoviesCondition={mockSetMoviesCondition}
          />
        </Router>,
      );

      const filterTabs = tree.root.findByProps({ name: 'Tabs' });
      filterTabs.props.fetchByFilter('Tranding');

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockFetchMovies.mock.calls.length).toEqual(1);
    });

    it('setMoviesCondition functions called with filter', () => {
      const mockCallBack = jest.fn();
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }, { id: 110, title: 'title' }];
      create(
        <MemoryRouter initialEntries={['/Trending']}>
          <Route path="/:filter">
            <MoviesSection
              error={null}
              isLoading={false}
              isModalOpened={false}
              trailer={null}
              removeTrailerInfo={mockCallBack}
              trailerIsLoading={false}
              trailerError={null}
              genres={genres}
              condition="Tranding"
              movies={movies}
              fetchTrailer={mockCallBack}
              fetchMovies={mockFetchMovies}
              setMoviesCondition={mockSetMoviesCondition}
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
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }, { id: 110, title: 'title' }];
      create(
        <MemoryRouter initialEntries={['/genre/123']}>
          <Route path="/genre/:genreId">
            <MoviesSection
              error={null}
              isLoading={false}
              isModalOpened={false}
              trailer={null}
              removeTrailerInfo={mockCallBack}
              trailerIsLoading={false}
              trailerError={null}
              genres={genres}
              condition="Tranding"
              movies={movies}
              fetchTrailer={mockCallBack}
              fetchMovies={mockFetchMovies}
              setMoviesCondition={mockSetMoviesCondition}
            />
          </Route>
        </MemoryRouter>,
      );

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockSetMoviesCondition).toHaveBeenCalledWith('123');
    });

    it('setMoviesCondition functions called with "Search"', () => {
      const mockCallBack = jest.fn();
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }, { id: 110, title: 'title' }];
      create(
        <MemoryRouter initialEntries={['/search/sonic']}>
          <Route path="/search/:query">
            <MoviesSection
              error={null}
              isLoading={false}
              isModalOpened={false}
              trailer={null}
              removeTrailerInfo={mockCallBack}
              trailerIsLoading={false}
              trailerError={null}
              genres={genres}
              condition="Tranding"
              movies={movies}
              fetchTrailer={mockCallBack}
              fetchMovies={mockFetchMovies}
              setMoviesCondition={mockSetMoviesCondition}
            />
          </Route>
        </MemoryRouter>,
      );

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockSetMoviesCondition).toHaveBeenCalledWith('Search');
    });
  });
});
