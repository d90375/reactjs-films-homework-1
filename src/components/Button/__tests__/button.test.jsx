import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../Button';

test('ButtonView renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Button />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
