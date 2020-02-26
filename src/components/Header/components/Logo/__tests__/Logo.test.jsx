import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Logo from '../Logo';

test('Logo renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Logo />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
