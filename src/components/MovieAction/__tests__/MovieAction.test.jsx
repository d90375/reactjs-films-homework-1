import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';

import MovieAction from '../MovieAction';

describe('MovieAction tests', () => {
  describe('MovieAction render', () => {
    it('MovieAction renders correctly', () => {
      const mockCallBack = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<MovieAction
        description="description"
        fetchTrailer={mockCallBack}
        id="123"
      />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });

  describe('clickViewHandler function', () => {
    it('clickViewHandler function change state', () => {
      const mockCallBack = jest.fn();
      const tree = create(
        <MovieAction description="description" fetchTrailer={mockCallBack} id="123" />,
      );

      const button = tree.root.findByProps({ color: 'secondary' });
      expect(button.props.children).toBe('View Info');

      button.props.onClick();

      expect(button.props.children).toBe('Hide Info');

      button.props.onClick();

      expect(button.props.children).toBe('View Info');

      const watchButton = tree.root.findByProps({ color: 'primary' });
      watchButton.props.onClick();
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
