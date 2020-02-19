import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetailsInfo from '../MovieInfo';

const info = {
  title: 'title',
  genres: [1, 2, 3],
  duration: '1h',
};

test('MovieDetailsInfo renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetailsInfo info={info} />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
