import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../Button';

const clickHandler = () => {};

test('ButtonView renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Button purpose="purpose" clickHandler={clickHandler}>child</Button>);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
