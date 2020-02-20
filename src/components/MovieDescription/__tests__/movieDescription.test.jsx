import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDescription from '../MovieDescription';

test('MovieDescription renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDescription description="description" descriptionClass="descriptionClass" />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
