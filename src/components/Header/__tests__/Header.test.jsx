import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../Header';

test('Header renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
