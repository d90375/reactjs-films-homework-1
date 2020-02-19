import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetails from '../MovieDetails';

test('MovieDetails renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetails />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
