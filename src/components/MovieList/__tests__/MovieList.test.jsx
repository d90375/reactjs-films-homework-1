import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';
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

  /* describe('onClick function', () => {
    it('onClick callback function called', () => {
      const mockCallBack = jest.fn();

      const tree = create(
        <MovieList fetchByFilter={mockCallBack} filter="Trending" condition="Trending" onClick={mockCallBack}>Trending</MovieList>,
      );

      const button = tree.root.findByProps({ type: 'button' });
      const e = {
        target: {
          dataset: {
            filter: 'Trending',
          },
        },
      };

      button.props.onClick(e);

      expect(mockCallBack.mock.calls.length).toEqual(1);
      expect(mockCallBack).toHaveBeenCalledWith('Trending');
    });
  }); */
});
