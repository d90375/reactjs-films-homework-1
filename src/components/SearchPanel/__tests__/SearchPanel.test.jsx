import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';

import SearchPanel from '../SearchPanel';

describe('SearchPanel tests', () => {
  describe('SearchPanel render', () => {
    it('SearchPanel renders correctly', () => {
      const mockCallBack = jest.fn();
      const renderer = new ShallowRenderer();
      renderer.render(<SearchPanel query="" getSearch={mockCallBack} />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });

  describe('onChange function', () => {
    it('onChange callback function called', () => {
      const mockCallBack = jest.fn();

      const tree = create(
        <SearchPanel query="" getSearch={mockCallBack} />,
      );

      const input = tree.root.findByProps({ type: 'search' });

      const e = { target: { value: 'hi' } };
      input.props.onChange(e);

      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
