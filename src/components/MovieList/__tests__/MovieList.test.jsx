import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieList from '../MovieList';

describe('MovieList tests', () => {
  describe('MovieList render', () => {
    it('MovieList renders correctly', () => {
      const movies = [{ id: 1 }, { id: 2 }];
      const mockCallBack = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<MovieList fetchTrailer={mockCallBack} movies={movies} />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('MovieList renders correctly', () => {
      const movies = [];
      const mockCallBack = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<MovieList fetchTrailer={mockCallBack} movies={movies} />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });
});
