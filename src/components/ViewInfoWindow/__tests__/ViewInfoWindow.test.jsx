import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';
import ViewInfoWindow from '../ViewInfoWindow';

describe('ViewInfoWindow tests', () => {
  const film = {
    id: 123,
    title: 'title',
    genres: 'action, crime',
    rating: 8,
    overview: 'overview',
    poster: 'url',
  };

  describe('ViewInfoWindow render', () => {
    it('ViewInfoWindow renders correctly with movie title length less then 18 characters', () => {
      const mockCallBack = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<ViewInfoWindow
        switchViewInfo={mockCallBack}
        fetchTrailer={mockCallBack}
        film={film}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('ViewInfoWindow renders correctly with movie title length more then 18 characters', () => {
      const mockCallBack = jest.fn();
      film.title = 'title!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
      const renderer = new ShallowRenderer();
      renderer.render(<ViewInfoWindow
        switchViewInfo={mockCallBack}
        fetchTrailer={mockCallBack}
        film={film}
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });

  describe('onClick function', () => {
    it('onClick callback function called', () => {
      const mockCallBack = jest.fn();

      const tree = create(
        <ViewInfoWindow
          switchViewInfo={mockCallBack}
          fetchTrailer={mockCallBack}
          film={film}
        >
          Trending
        </ViewInfoWindow>,
      );

      const button = tree.root.findByProps({ color: 'primary' });
      button.props.onClick();

      expect(mockCallBack.mock.calls.length).toEqual(1);
      expect(mockCallBack).toHaveBeenCalledWith(123);
    });
  });
});
