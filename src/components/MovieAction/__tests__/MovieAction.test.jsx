import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';

import MovieAction from '../MovieAction';

test('MovieAction renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieAction description="description" />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

describe('MovieAction tests', () => {
  describe('MovieAction render', () => {
    it('MovieAction renders correctly', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<MovieAction description="description" />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });

  describe('clickViewHandler function', () => {
    it('clickViewHandler function change state', () => {
      const tree = create(
        <MovieAction description="description" />,
      );

      const button = tree.root.findByProps({ color: 'secondary' });
      expect(button.props.children).toBe('View Info');

      button.props.onClick();

      expect(button.props.children).toBe('Hide Info');

      button.props.onClick();

      expect(button.props.children).toBe('View Info');
    });
  });
});
