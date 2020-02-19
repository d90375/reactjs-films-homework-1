import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetailsDescription from '../MovieDetailsDescription';

const description = 'some description';

test('MovieDetailsDescription renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetailsDescription description={description} />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
