import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieList from '../MovieList';

describe('MovieList tests', () => {
  describe('MovieList render', () => {
    it('MovieList renders correctly with movies', () => {
      const movies = [{ id: 1 }, { id: 2 }];
      const mockCallBack = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<MovieList
        fetchTrailer={mockCallBack}
        movies={movies}
        removeDetailsInfo={mockCallBack}
        setMoviesCondition={mockCallBack}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('MovieList renders correctly with "no result" message', () => {
      const movies = [];
      const mockCallBack = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<MovieList
        fetchTrailer={mockCallBack}
        movies={movies}
        removeDetailsInfo={mockCallBack}
        setMoviesCondition={mockCallBack}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });
});
