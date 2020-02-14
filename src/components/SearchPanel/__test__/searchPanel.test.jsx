import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchPanel from '../SearchPanel';

test('SearchPanel renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchPanel />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});


it('should call onChange', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchPanel />);

  const event = {
    preventDefault() {},
    target: { value: 'hi' },
  };

  const onChange = jest.fn();

  renderer.find('input[type=search]').simulate('change', event);
  expect(onChange).toBeCalledWith('hi');
});
