import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Spinner from '../Spinner';

test('Logo renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Spinner />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
