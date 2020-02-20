import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create, act } from 'react-test-renderer';

import MovieAction from '../MovieAction';

test('MovieAction renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieAction description="description" />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

test('clickViewHandler function change state', () => {
  const tree = create(
    <MovieAction description="description" />,
  );

  const button = tree.root.findByProps({ 'aria-label': 'view' });
  expect(button.props.children).toBe('View Info');

  const mockFunction = jest.fn(() => button.props.clickHandler());

  act(() => {
    mockFunction();
  });

  expect(button.props.children).toBe('Hide Info');

  act(() => {
    mockFunction();
  });

  expect(button.props.children).toBe('View Info');
});
