import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetailsRating from '../MovieDetailsRating';

const rating = '3';

test('MovieDetailsRating renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetailsRating rating={rating} />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
