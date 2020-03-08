import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainPage from '../MainPage';

test('MainPage renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MainPage />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
