import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ButtonView from '../ButtonView';

test('ButtonView renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<ButtonView />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
