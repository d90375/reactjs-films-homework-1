import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '..';

test('App renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
