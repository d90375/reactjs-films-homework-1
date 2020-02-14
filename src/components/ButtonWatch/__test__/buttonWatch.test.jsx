import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ButtonWatch from '../ButtonWatch';

test('ButtonWatch renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<ButtonWatch />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
