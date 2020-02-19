import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Title from '../Title';

test('Title renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Title />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
