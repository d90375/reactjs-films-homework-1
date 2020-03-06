import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';
import MovieItem from '../MovieItem';

describe('MovieItem tests', () => {
  const film = {
    title: 'title',
    genres: 'action, crime',
    rating: '8',
    poster: 'url',
  };

  describe('MovieItem render', () => {
    it('MovieItem renders correctly', () => {
      const mockCallBack = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<MovieItem film={film} fetchTrailer={mockCallBack} />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('MovieItem renders correctly', () => {
      const mockCallBack = jest.fn();
      film.title = 'title!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
      const tree = create(
        <MovieItem film={film} fetchTrailer={mockCallBack} />,
      );

      const watchNowWindow = tree.root.findByProps({ name: 'watch' });
      watchNowWindow.props.switchViewInfo();
      expect(tree).toMatchSnapshot();
    });
  });
});
