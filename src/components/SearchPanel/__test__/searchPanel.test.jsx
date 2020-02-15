import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';

import SearchPanel from '../SearchPanel';

test('SearchPanel renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchPanel />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

test('changes value of input', () => {
  let container = null;
  container = document.createElement('div');
  document.body.appendChild(container);

  act(() => {
    render(<SearchPanel />, container);
  });

  const input = document.querySelector('[type=search]');
  expect(input.value).toBe('');

  fireEvent.change(input, { target: { value: 'hi' } });

  expect(input.value).toBe('hi');

  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
