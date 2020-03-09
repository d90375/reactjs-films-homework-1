import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';
import FilterTabs from '../FilterTabs';

describe('FilterTabs tests', () => {
  describe('FilterTabs render', () => {
    it('FilterTabs renders correctly', () => {
      const mockCallBack = jest.fn();
      const genres = ['drama', 'crime', 'detective'];
      const renderer = new ShallowRenderer();
      renderer.render(<FilterTabs genres={genres} fetchByFilter={mockCallBack} condition="123" />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('FilterTabs renders correctly', () => {
      const mockCallBack = jest.fn();
      const genres = ['drama', 'crime', 'detective'];
      const renderer = new ShallowRenderer();
      renderer.render(<FilterTabs genres={genres} fetchByFilter={mockCallBack} condition="Trending" />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    it('FilterTabs renders correctly', () => {
      const mockCallBack = jest.fn();
      const genres = null;
      const renderer = new ShallowRenderer();
      renderer.render(<FilterTabs genres={genres} fetchByFilter={mockCallBack} condition="Trending" />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });

  describe('onChange function', () => {
    it('onChange callback function called', () => {
      const mockCallBack = jest.fn();
      const genres = ['drama', 'crime', 'detective'];

      const tree = create(
        <FilterTabs genres={genres} fetchByFilter={mockCallBack} condition="123" />,
      );

      const select = tree.root.findByProps({ name: 'Genre' });
      const e = {
        target: {
          value: 'crime',
        },
      };

      select.props.onChange(e);

      expect(mockCallBack.mock.calls.length).toEqual(1);
      expect(mockCallBack).toHaveBeenCalledWith('crime');
    });
  });
});
