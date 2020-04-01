import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';
import MovieItem from '../MovieItem';

describe('MovieItem tests', () => {
  const film = {
    title: 'title',
    genres: 'action, crime',
    rating: 8,
    poster: 'url',
  };

  describe('MovieItem render', () => {
    it('MovieItem renders correctly with movie title length less then 15 characters', () => {
      const mockCallBack = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<MovieItem
        film={film}
        fetchTrailer={mockCallBack}
        setMoviesCondition={mockCallBack}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('MovieItem renders correctly with movie title length more then 15 characters', () => {
      const mockCallBack = jest.fn();
      film.title = 'title!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
      const tree = create(
        <Router>
          <MovieItem
            film={film}
            fetchTrailer={mockCallBack}
            setMoviesCondition={mockCallBack}
          />
        </Router>,
      );

      const watchNowWindow = tree.root.findByProps({ name: 'watch' });
      watchNowWindow.props.switchViewInfo();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('onClick function', () => {
    it('onClick callback function called', () => {
      const mockCallBack = jest.fn();

      const tree = create(
        <Router>
          <MovieItem
            film={film}
            fetchTrailer={mockCallBack}
            setMoviesCondition={mockCallBack}
            onClick={mockCallBack}
          />
        </Router>,
      );

      const link = tree.root.findByProps({ name: 'link' });
      link.props.onClick();

      expect(mockCallBack.mock.calls.length).toEqual(1);
      expect(mockCallBack).toHaveBeenCalledWith('Trending');
    });
  });
});
