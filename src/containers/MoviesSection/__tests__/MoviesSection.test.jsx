import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';
import MoviesSection from '../MoviesSection';

describe('MoviesSection tests', () => {
  describe('MoviesSection render', () => {
    it('MoviesSection renders correctly', () => {
      const mockCallBack = jest.fn();
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123 }, { id: 110 }];
      const renderer = new ShallowRenderer();
      renderer.render(<MoviesSection
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
        fetchMovies={mockCallBack}
        setMoviesCondition={mockCallBack}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('MoviesSection renders correctly', () => {
      const mockCallBack = jest.fn();
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123 }, { id: 110 }];
      const renderer = new ShallowRenderer();
      renderer.render(<MoviesSection
        error={null}
        isLoading={false}
        isModalOpened
        trailer={null}
        removeTrailerInfo={mockCallBack}
        trailerIsLoading={false}
        trailerError={null}
        genres={genres}
        condition="Tranding"
        movies={movies}
        fetchTrailer={mockCallBack}
        fetchMovies={mockCallBack}
        setMoviesCondition={mockCallBack}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('MoviesSection renders correctly', () => {
      const mockCallBack = jest.fn();
      const genres = [];
      const movies = [];
      const renderer = new ShallowRenderer();
      renderer.render(<MoviesSection
        error={null}
        isLoading
        isModalOpened={false}
        trailer={null}
        removeTrailerInfo={mockCallBack}
        trailerIsLoading={false}
        trailerError={null}
        genres={genres}
        condition="Tranding"
        movies={movies}
        fetchTrailer={mockCallBack}
        fetchMovies={mockCallBack}
        setMoviesCondition={mockCallBack}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('MoviesSection renders correctly', () => {
      const mockCallBack = jest.fn();
      const genres = [];
      const movies = [];
      const error = { message: 'error' };
      const renderer = new ShallowRenderer();
      renderer.render(<MoviesSection
        error={error}
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
        fetchMovies={mockCallBack}
        setMoviesCondition={mockCallBack}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });

  describe('ComponentDidMount, fetchByFilter', () => {
    it('fetchMovies, fetchByFilter functions called', () => {
      const mockCallBack = jest.fn();
      const mockFetchMovies = jest.fn();
      const mockSetMoviesCondition = jest.fn();
      const genres = ['crime', 'actions'];
      const movies = [{ id: 123, title: 'title' }, { id: 110, title: 'title' }];

      const tree = create(
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
        />,
      );

      const filterTabs = tree.root.findByProps({ name: 'Tabs' });
      filterTabs.props.fetchByFilter('Tranding');
      expect(mockSetMoviesCondition.mock.calls.length).toEqual(1);
      expect(mockFetchMovies.mock.calls.length).toEqual(1);
    });
  });
});
