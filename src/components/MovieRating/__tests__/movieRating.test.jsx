import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieRating from '../MovieRating';

const rating = '3';

test('MovieRating renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieRating rating={rating} />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
