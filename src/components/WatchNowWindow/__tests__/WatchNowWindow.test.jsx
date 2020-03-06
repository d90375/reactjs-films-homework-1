import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';
import WatchNowWindow from '../WatchNowWindow';

describe('WatchNowWindow tests', () => {
  const film = {
    id: 123,
  };

  describe('WatchNowWindow render', () => {
    it('WatchNowWindow renders correctly', () => {
      const mockCallBack = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<WatchNowWindow
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
        <WatchNowWindow
          switchViewInfo={mockCallBack}
          fetchTrailer={mockCallBack}
          film={film}
        >
          Trending
        </WatchNowWindow>,
      );

      const button = tree.root.findAllByProps({ type: 'button' })[0];
      button.props.onClick();

      expect(mockCallBack.mock.calls.length).toEqual(1);
      expect(mockCallBack).toHaveBeenCalledWith(123);
    });
  });
});
