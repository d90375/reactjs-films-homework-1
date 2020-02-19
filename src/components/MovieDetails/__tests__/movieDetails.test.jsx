import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetails from '../MovieDetails';

const data = {
  description: 'description',
  rating: '5',
};

test('MovieDetails renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetails data={data} />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
