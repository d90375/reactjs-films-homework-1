import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Footer from '../Footer';

test('ButtonView renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Footer />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
