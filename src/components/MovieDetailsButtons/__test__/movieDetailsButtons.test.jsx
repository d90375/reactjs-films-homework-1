import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetailsButtons from '../MovieDetailsButtons';

test('MovieDetailsButtons renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetailsButtons />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
