import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create, act } from 'react-test-renderer';

import SearchPanel from '../SearchPanel';

test('SearchPanel renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchPanel />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

test('onChange function change input value', () => {
  const tree = create(
    <SearchPanel />,
  );

  const input = tree.root.findByProps({ type: 'search' });
  expect(input.props.value).toBe('');

  const e = { target: { value: 'hi' } };
  const mockFunction = jest.fn(() => input.props.onChange(e));

  act(() => {
    mockFunction();
  });

  expect(input.props.value).toBe('hi');
});
