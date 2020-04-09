import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { unmountComponentAtNode, render } from 'react-dom';
import { create } from 'react-test-renderer';
import { MoviesSection } from '../MoviesSection';

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
      fetchMoviesDebounced: mockCallBack,
      setMoviesCondition: mockCallBack,
      removeDetailsInfo: mockCallBack,
      history: { push: mockCallBack },
    };

    it('MoviesSection renders correctly with closed modal window', () => {
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }];

      const renderer = new ShallowRenderer();
      renderer.render(<MoviesSection
        error={null}
        isLoading={false}
        isModalOpened={false}
        genres={genres}
        movies={movies}
        {...mockProps}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('MoviesSection renders correctly when modal window open', () => {
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }];

      const renderer = new ShallowRenderer();
      renderer.render(<MoviesSection
        error={null}
        isLoading={false}
        isModalOpened
        genres={genres}
        movies={movies}
        {...mockProps}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('MoviesSection renders correctly when movies is loading', () => {
      const genres = [];
      const movies = [];

      const renderer = new ShallowRenderer();
      renderer.render(<MoviesSection
        error={null}
        isLoading
        isModalOpened={false}
        genres={genres}
        movies={movies}
        {...mockProps}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('MoviesSection renders correctly with error message', () => {
      const genres = [];
      const movies = [];
      const error = { message: 'error' };

      const renderer = new ShallowRenderer();
      renderer.render(<MoviesSection
        error={error}
        isLoading={false}
        isModalOpened={false}
        genres={genres}
        movies={movies}
        {...mockProps}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
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
      removeDetailsInfo: mockCallBack,
      history: { push: mockCallBack },
    };

    it('fetchMovies, fetchByFilter functions called', () => {
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const tree = create(
        <MoviesSection
          fetchMovies={mockFetchMovies}
          setMoviesCondition={mockSetMoviesCondition}
          {...mockProps}
        />,
      );

      const filterTabs = tree.root.findByProps({ name: 'Tabs' });
      filterTabs.props.onFilterChange('Trending');

      expect(mockFetchMovies.mock.calls.length).toEqual(1);
    });

    it('setMoviesCondition functions called with filter', () => {
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const location = { search: '?filter=Trending' };
      create(
        <MoviesSection
          fetchMovies={mockFetchMovies}
          setMoviesCondition={mockSetMoviesCondition}
          location={location}
          {...mockProps}
        />,
      );

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockSetMoviesCondition).toHaveBeenCalledWith('Trending');
    });

    it('setMoviesCondition functions called with genreId', () => {
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const location = { search: '?genreId=16' };
      create(
        <MoviesSection
          fetchMovies={mockFetchMovies}
          setMoviesCondition={mockSetMoviesCondition}
          location={location}
          {...mockProps}
        />,
      );

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockSetMoviesCondition).toHaveBeenCalledWith('16');
    });

    it('setMoviesCondition functions called with "Search"', () => {
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const location = { search: '?search=sonic' };
      create(
        <MoviesSection
          fetchMovies={mockFetchMovies}
          setMoviesCondition={mockSetMoviesCondition}
          location={location}
          {...mockProps}
        />,
      );

      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockSetMoviesCondition).toHaveBeenCalledWith('Search');
    });
  });

  describe('ComponentDidUpdate', () => {
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
      removeDetailsInfo: mockCallBack,
      history: { push: mockCallBack },
      fetchMovies: { mockCallBack },
      setMoviesCondition: { mockCallBack },
    };

    let node = null;

    beforeEach(() => {
      node = document.createElement('div');
      document.body.appendChild(node);
    });

    afterEach(() => {
      unmountComponentAtNode(node);
      node.remove();
      node = null;
    });


    it('fetchByFilter functions not called', () => {
      const location = { search: '?search=sonic' };

      const instance = render(
        <MoviesSection
          location={location}
          {...mockProps}
        />,
        node,
      );

      spyOn(instance, 'fetchByFilter');

      render(
        <MoviesSection
          location={location}
          {...mockProps}
        />,
        node,
      );

      expect(instance.fetchByFilter).not.toHaveBeenCalled();
    });

    it('fetchByFilter functions called with genreId', () => {
      const location1 = { search: '?search=sonic' };
      const location2 = { search: '?genreId=16' };

      const instance = render(
        <MoviesSection
          location={location1}
          {...mockProps}
        />,
        node,
      );

      spyOn(instance, 'fetchByFilter');

      render(
        <MoviesSection
          location={location2}
          {...mockProps}
        />,
        node,
      );

      expect(instance.fetchByFilter).toHaveBeenCalled();
    });

    it('fetchByFilter functions called with filter', () => {
      const mockFunc = jest.fn();
      const location1 = { search: '?genreId=16' };
      const location2 = { search: '?filter=Trending' };

      render(
        <MoviesSection
          location={location1}
          {...mockProps}
          fetchMovies={mockFunc}
        />,
        node,
      );

      render(
        <MoviesSection
          location={location2}
          {...mockProps}
          fetchMovies={mockFunc}
        />,
        node,
      );

      expect(mockFunc.mock.calls.length).toEqual(1);
    });

    it('fetchByFilter functions called with search query', () => {
      const mockFunc = jest.fn();
      const location1 = { search: '?genreId=16' };
      const location2 = { search: '?search=sonic' };

      render(
        <MoviesSection
          location={location1}
          {...mockProps}
          fetchMoviesDebounced={mockFunc}
        />,
        node,
      );

      render(
        <MoviesSection
          location={location2}
          {...mockProps}
          fetchMoviesDebounced={mockFunc}
        />,
        node,
      );

      expect(mockFunc.mock.calls.length).toEqual(1);
    });
  });
});
