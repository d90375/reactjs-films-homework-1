import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDescription from '../MovieDescription';

const description = 'some description';

test('MovieDescription renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDescription description={description} />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
