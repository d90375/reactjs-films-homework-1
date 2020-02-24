import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../Button';

test('ButtonView renders correctly', () => {
  const mockOnClick = jest.fn();
  const renderer = new ShallowRenderer();
  renderer.render(<Button color="primary" onClick={mockOnClick}>child</Button>);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
